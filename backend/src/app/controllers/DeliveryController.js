import * as yup from 'yup';

import File from '../models/File';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

import Queue from '../../lib/Queue';
import DeliveryRegistrationMail from '../jobs/DeliveryRegistrationMail';
import DeliveryCancellationMail from '../jobs/DeliveryCancellationMail';

const findConfig = {
  attributes: ['id', 'product', 'start_date', 'end_date', 'canceled_at'],
  include: [
    {
      model: Recipient,
      as: 'recipient',
      attributes: [
        'id',
        'name',
        'street',
        'number',
        'complement',
        'state',
        'city',
        'postcode',
      ],
    },
    {
      model: Deliveryman,
      as: 'deliveryman',
      attributes: ['id', 'name'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'name', 'path', 'url'],
        },
      ],
    },
    {
      model: File,
      as: 'signature',
      attributes: ['id', 'name', 'path', 'url'],
    },
  ],
};

class DeliveryController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const deliveries = await Delivery.findAll({
      where: { canceled_at: null },
      limit: 20,
      offset: (page - 1) * 20,
      ...findConfig,
    });

    res.json(deliveries);
  }

  async store(req, res) {
    const schema = yup.object().shape({
      recipient_id: yup
        .number()
        .positive()
        .required(),
      deliveryman_id: yup
        .number()
        .positive()
        .required(),
      product: yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const { recipient_id, deliveryman_id, product } = req.body;

    const deliveryExists = await Delivery.findOne({
      where: {
        recipient_id,
        deliveryman_id,
        product,
        canceled_at: null,
      },
    });

    if (deliveryExists) {
      return res.status(400).json({ error: 'delivery already exists' });
    }

    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient) {
      return res.status(400).json({ error: "recipient doesn't exists" });
    }

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(400).json({ error: "deliveryman doesn't exists" });
    }

    const { id } = await Delivery.create(req.body);

    const delivery = await Delivery.findByPk(id, findConfig);

    await Queue.add(DeliveryRegistrationMail.key, { delivery });

    return res.json(delivery);
  }

  async update(req, res) {
    const schema = yup.object().shape({
      recipient_id: yup.number().positive(),
      deliveryman_id: yup.number().positive(),
      product: yup.string(),
      signature_id: yup.number().positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const { recipient_id, deliveryman_id, signature_id } = req.body;

    const delivery = await Delivery.findByPk(req.params.id, findConfig);

    if (!delivery) {
      return res.status(400).json({ error: "delivery doesn't exists" });
    }

    if (recipient_id) {
      const recipient = await Recipient.findByPk(recipient_id);

      if (!recipient) {
        return res.status(400).json({ error: "recipient doesn't exists" });
      }

      if (delivery.recipient_id !== recipient_id) {
        return res
          .status(400)
          .json({ error: "doesn't allowed change recipient" });
      }
    }

    if (deliveryman_id) {
      const deliveryman = await Deliveryman.findByPk(deliveryman_id);

      if (!deliveryman) {
        return res.status(400).json({ error: "deliveryman doesn't exists" });
      }

      if (delivery.deliveryman_id !== deliveryman_id) {
        return res
          .status(400)
          .json({ error: "doesn't allowed change deliveryman" });
      }
    }

    if (signature_id) {
      const signature = await File.findByPk(signature_id);

      if (!signature) {
        return res.status(400).json({ error: "signature doesn't exists" });
      }
    }

    await delivery.update(req.body);

    return res.json(delivery);
  }

  async delete(req, res) {
    const delivery = await Delivery.findByPk(req.params.id);

    if (!delivery) {
      return res.status(400).json({ error: "delivery doesn't exists" });
    }

    delivery.canceled_at = new Date();

    await delivery.save();

    await Queue.add(DeliveryCancellationMail.key, { delivery });

    return res.json(delivery);
  }
}

export default new DeliveryController();

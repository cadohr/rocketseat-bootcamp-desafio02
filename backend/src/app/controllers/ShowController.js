import * as yup from 'yup';
import { Op } from 'sequelize';

import File from '../models/File';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

class ShowController {
  async index(req, res) {
    const schema = await yup.object().shape({
      id: yup
        .number()
        .positive()
        .required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const { id } = req.params;
    const { delivered = true, page = 1 } = req.query;

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'deliveryman not found' });
    }

    const subquery = delivered
      ? {
          canceled_at: { [Op.eq]: null },
          end_date: { [Op.ne]: null },
        }
      : {
          [Op.or]: {
            canceled_at: { [Op.ne]: null },
            end_date: { [Op.eq]: null },
          },
        };

    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: id,
        ...subquery,
      },
      limit: 10,
      offset: (page - 1) * 20,
      attributes: ['id', 'product', 'canceled_at', 'start_date', 'end_date'],
      include: [
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'name', 'path', 'url'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'name', 'path', 'url'],
            },
          ],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'street',
            'number',
            'complement',
            'city',
            'state',
            'postcode',
          ],
        },
      ],
    });
    console.log(deliveries);

    return res.json(deliveries);
  }
}

export default new ShowController();

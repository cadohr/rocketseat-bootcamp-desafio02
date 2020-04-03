import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Delivery from '~/pages/Delivery';
import DeliveryForm from '~/pages/Delivery/Form';

import Deliveryman from '~/pages/Deliveryman';
import DeliverymanForm from '~/pages/Deliveryman/Form';

import Recipient from '~/pages/Recipient';
import RecipientForm from '~/pages/Recipient/Form';

import DeliveryProblem from '~/pages/Delivery/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/encomendas" exact component={Delivery} isPrivate />
      <Route
        path="/encomendas/cadastrar"
        exact
        component={DeliveryForm}
        isPrivate
      />
      <Route
        path="/encomendas/editar/:id"
        exact
        component={DeliveryForm}
        isPrivate
      />

      <Route path="/entregadores" exact component={Deliveryman} isPrivate />
      <Route
        path="/entregadores/cadastrar"
        exact
        component={DeliverymanForm}
        isPrivate
      />
      <Route
        path="/entregadores/editar/:id"
        component={DeliverymanForm}
        isPrivate
      />

      <Route path="/destinatarios" exact component={Recipient} isPrivate />
      <Route
        path="/destinatarios/cadastrar"
        exact
        component={RecipientForm}
        isPrivate
      />
      <Route
        path="/destinatarios/editar/:id"
        exact
        component={RecipientForm}
        isPrivate
      />

      <Route path="/problemas" component={DeliveryProblem} isPrivate />
    </Switch>
  );
}

import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery';
import Deliveryman from '~/pages/Deliveryman';
import Recipient from '~/pages/Recipient';
import RecipientForm from '~/pages/Recipient/Form';
import DeliveryProblem from '~/pages/DeliveryProblem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/encomendas" component={Delivery} isPrivate />
      <Route path="/entregadores" component={Deliveryman} isPrivate />
      <Route path="/destinatarios" exact component={Recipient} isPrivate />
      <Route
        path="/destinatarios/form"
        exact
        component={RecipientForm}
        isPrivate
      />
      <Route path="/problemas" component={DeliveryProblem} isPrivate />
    </Switch>
  );
}

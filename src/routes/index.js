import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Contact from '../pages/Contact';
import NewContact from '../pages/Contact/NewContact';
import RegisterSingleContact from '../pages/Contact/NewContact/RegisterSingleContact';
import Group from '../pages/Group';
import Message from '../pages/Message';
import SendMessage from '../pages/Message/SendMessage';
import successMessage from '../pages/Message/successMessage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} title="Login" />
      <Route path="/contact" exact component={Contact} isPrivate />
      <Route path="/contact/new" exact component={NewContact} isPrivate />
      <Route
        path="/contact/new/single"
        exact
        component={RegisterSingleContact}
        isPrivate
      />
      <Route
        path="/contact/edit"
        exact
        component={RegisterSingleContact}
        isPrivate
      />
      <Route path="/group" exact component={Group} isPrivate />
      <Route path="/group/view" exact component={Contact} isPrivate />
      <Route path="/message" exact component={Message} isPrivate />
      <Route path="/message/new" exact component={SendMessage} isPrivate />
      <Route
        path="/message/success"
        exact
        component={successMessage}
        isPrivate
      />
    </Switch>
  );
}

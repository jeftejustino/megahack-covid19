import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';

import { Container, Message, Links } from './styles';

export default function successMessage() {
  return (
    <Container>
      <Message>
        <span>
          <MdCheck size={42} color="#1565c0" />
        </span>
        <h1>Sucesso!</h1>
        <p>Sua mensagem foi enviada.</p>
      </Message>

      <Links>
        <Link to="/message/new">Enviar nova mensagem</Link>
        <Link to="/message">Ver galeria de mensagems</Link>
      </Links>
    </Container>
  );
}

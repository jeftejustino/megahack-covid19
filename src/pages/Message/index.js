import React from 'react';

import { MdMessage, MdFolder } from 'react-icons/md';
import history from '../../services/history';
import { Container, ItemMessage } from './styles';

export default function Message() {
  function LinkNewMessage() {
    history.push('/message/new');
  }

  return (
    <Container>
      <ItemMessage onClick={LinkNewMessage}>
        <h2>Enviar mensagem</h2>
        <MdMessage size={56} color="#1565c0" />
        <p>
          Escreva, selecione os
          <br /> contatos e envie
        </p>
      </ItemMessage>

      <ItemMessage>
        <h2>
          Mensagens <br />
          enviadas
        </h2>
        <MdFolder size={56} color="#1565c0" />
        <p>
          Consulte todas as mensagens
          <br /> enviadas até hoje
        </p>
      </ItemMessage>
    </Container>
  );
}

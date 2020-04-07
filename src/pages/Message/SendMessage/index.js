import React, { useState } from 'react';

import { Input } from '@rocketseat/unform';
import { Form } from '@unform/web';

import { MdPermContactCalendar, MdGroupAdd, MdCheck } from 'react-icons/md';

import Modals from './modals';

import {
  Container,
  ContentForm,
  GridMessage,
  TitleGrid,
  ItemMessage,
  Separator,
  ButtonsForm,
  CommentForm,
  Limit,
} from './styles';

export default function SendMessage({ history }) {
  const [value, setValue] = useState('');
  const [contacts, setContacts] = useState(0);
  const [groups, setGroups] = useState(0);
  const [openGroup, setOpenGroup] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  function handleSubmit(data) {
    history.push('/message/success');
  }

  function handleSetMsg(e) {
    setValue(e.target.value.substring(0, 160));
  }

  function handleSelectContact() {
    setOpenContact(true);
  }

  function handleSelectGroup() {
    setOpenGroup(true);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} id="formMessage">
        <ContentForm>
          <GridMessage>
            <TitleGrid>Escreva sua Mensagem</TitleGrid>
            <div className="item">
              <Input
                multiline
                name="message"
                value={value}
                onChange={handleSetMsg}
              />
              <Limit>Limite de carcteres {value.length}/160</Limit>
            </div>
          </GridMessage>
          <GridMessage>
            <TitleGrid>Selecione os contatos</TitleGrid>
            <ItemMessage type="button" onClick={handleSelectContact}>
              <MdPermContactCalendar size={26} color="#1565c0" />
              {!groups && contacts ? (
                <>{contacts} contatos selecionados</>
              ) : (
                <>Selecionar da Lista</>
              )}
            </ItemMessage>
            <Separator>ou</Separator>
            <ItemMessage type="button" onClick={handleSelectGroup}>
              <MdGroupAdd size={26} color="#1565c0" />
              {groups ? (
                <div className="info">
                  <div className="group">{groups} grupos selecionados</div>
                  <div className="contact">{contacts} contatos</div>
                </div>
              ) : (
                <>Selecionar Grupo</>
              )}
            </ItemMessage>
          </GridMessage>
        </ContentForm>
        <ButtonsForm>
          <button type="submit">
            <MdCheck size={20} color="#fff" />
            ENVIAR
          </button>
        </ButtonsForm>
      </Form>
      <CommentForm>
        <h5>Dica</h5>
        <p>
          Para contatos que provavelmente não tem possibilidade de acesso a
          internet, procure cadastrar junto a mensagem um telefone de contato
          para que tire dúvidas.
        </p>
      </CommentForm>

      <Modals
        openContact={openContact}
        openGroup={openGroup}
        setOpenContact={setOpenContact}
        setOpenGroup={setOpenGroup}
        setContacts={setContacts}
        setGroups={setGroups}
      />
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import { Input } from '@rocketseat/unform';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { Link, useLocation } from 'react-router-dom';

import { MdCheck, MdArrowBack } from 'react-icons/md';
import Radio from '../../../../components/Form/Radio';

import {
  Container,
  TitleSection,
  ContentForm,
  ButtonsForm,
  BackLink,
} from './styles';

export default function RegisterSingleContact({ history }) {
  const [nome, setNome] = useState('');
  const [data_nascimento, setData_nascimento] = useState('');
  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cad_unico, setCad_unico] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [aspectos_familiares, setAspectos_familiares] = useState('');

  const query = new URLSearchParams(useLocation().search);
  const name = query.get('name');

  useEffect(() => {
    if (name) {
      setNome(name);
      setData_nascimento('26/10/1996');
      setCelular('(85) 999999999');
      setTelefone('(85) 888888888');
      setCad_unico('123456789');
      setRua('Jaborandir');
      setBairro('Jangurussu');
      setCidade('Fortaleza');
      setEstado('Ceará');
      setAspectos_familiares(
        'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.'
      );
    }
  }, [name]);

  function handleSubmit(data) {
    toast.success(
      name
        ? 'Contato atualizado com sucesso!'
        : 'Contato adicionado com sucesso!'
    );
    history.push('/contact');
  }

  return (
    <Container>
      {name && (
        <Link to="/contact">
          <BackLink>
            <MdArrowBack size="24" color="rgba(0, 0, 0, 0.54)" /> Mais Dados
          </BackLink>
        </Link>
      )}
      <Form
        onSubmit={handleSubmit}
        initialData={{ genero: 'F' }}
        id="newContact"
      >
        <ContentForm>
          <div className="grid-2">
            <TitleSection>Dados Pessoais:</TitleSection>
            <div className="item">
              <Input
                label="Nome Completo"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="item-2">
              <Input
                label="Data de Nascimento"
                name="data_nascimento"
                value={data_nascimento}
                onChange={(e) => setData_nascimento(e.target.value)}
              />
            </div>
            <div className="item-2 genero-input">
              <label>Identidade de Gênero</label>
              <Radio
                name="genero"
                options={[
                  { id: 'M', label: 'Masculino' },
                  { id: 'F', label: 'Feminino' },
                ]}
              />
            </div>
            <div className="item-2">
              <Input
                label="Celular"
                name="celular"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
            </div>
            <div className="item-2">
              <Input
                label="Telefone fixo"
                name="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="item">
              <Input
                label="Cadastro Único"
                name="cad_unico"
                value={cad_unico}
                onChange={(e) => setCad_unico(e.target.value)}
              />
            </div>

            <TitleSection>Endereço em que mora atualmente:</TitleSection>

            <div className="item">
              <Input
                label="Rua"
                name="rua"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
              />
            </div>

            <div className="item">
              <Input
                label="Bairro"
                name="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </div>

            <div className="item-2">
              <Input
                label="Cidade"
                name="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>

            <div className="item-2">
              <Input
                label="Estado"
                name="Estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              />
            </div>
          </div>
          <div className="grid-2">
            <div className="item">
              <Input
                label="Aspectos familiáres"
                multiline
                name="aspectos_familiares"
                value={aspectos_familiares}
                onChange={(e) => setAspectos_familiares(e.target.value)}
              />
            </div>
          </div>
        </ContentForm>
        <ButtonsForm>
          <button type="submit">
            <MdCheck size={20} color="#fff" />
            Salvar
          </button>
          <Link to="/contact/new">Sair sem Salvar</Link>
        </ButtonsForm>
      </Form>
    </Container>
  );
}

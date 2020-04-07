import React from 'react';

import { MdFileUpload, MdPersonAdd } from 'react-icons/md';
import history from '../../../services/history';
import { Container, ItemRegister } from './styles';

export default function NewContact() {
  function LinkRegisterSingle() {
    history.push('/contact/new/single');
  }

  return (
    <Container>
      <div>
        <ItemRegister>
          <h2>Importar do excel</h2>
          <MdFileUpload size={56} color="#1565c0" />
          <p>
            Utilize a tabela modelo e<br /> envie o arquivo .csv ou .xls
          </p>
        </ItemRegister>
        <p>
          <span>Baixar a tabela modelo</span>
        </p>
      </div>

      <div>
        <ItemRegister onClick={LinkRegisterSingle}>
          <h2>
            Cadastrar um <br />
            contato
          </h2>
          <MdPersonAdd size={56} color="#1565c0" />
          <p>
            Através do preenchimento do
            <br /> formulário
          </p>
        </ItemRegister>
      </div>
    </Container>
  );
}

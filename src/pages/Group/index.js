import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';

import { GridActions, Actions, LinkMore, Container } from './styles';

export default function Group() {
  const [selected, setSelected] = useState(0);
  const [dataGroups, setDataGroups] = useState([
    {
      id: 1,
      nome: 'Agricultores',
      membros: 150,
      data_de_criacao: '24/03/2020',
    },
    {
      id: 2,
      nome: 'Catadores de recicláveis',
      membros: 98,
      data_de_criacao: '24/03/2020',
    },
    {
      id: 3,
      nome: 'Artesãos',
      membros: 420,
      data_de_criacao: '24/03/2020',
    },
    {
      id: 4,
      nome: 'Feirantes',
      membros: 350,
      data_de_criacao: '24/03/2020',
    },
    {
      id: 5,
      nome: 'Novo Grupo',
      membros: 250,
      data_de_criacao: '24/03/2020',
    },
    {
      id: 6,
      nome: 'Novo Grupo 1',
      membros: 250,
      data_de_criacao: '24/03/2020',
    },
    {
      id: 7,
      nome: 'Novo Grupo 2',
      membros: 250,
      data_de_criacao: '24/03/2020',
    },
    {
      id: 8,
      nome: 'Novo Grupo 3',
      membros: 250,
      data_de_criacao: '24/03/2020',
    },
    {
      id: 9,
      nome: 'Novo Grupo 4',
      membros: 250,
      data_de_criacao: '24/03/2020',
    },
    {
      id: 10,
      nome: 'Novo Grupo 5',
      membros: 250,
      data_de_criacao: '24/03/2020',
    },
  ]);

  function handleSelectDataGroups(rows) {
    let q = 0;
    const newGroups = dataGroups.map((item) => {
      let ck = false;
      if (rows.filter((row) => item.id === row.id).length) ck = true;
      if (ck) q++;
      return { ...item, tableData: { checked: ck } };
    });
    setSelected(q);
    setDataGroups([...newGroups]);
  }

  return (
    <Container>
      <GridActions>
        <Actions selected={selected}>Exportar Excel</Actions>
        <Actions selected={selected}>Excluir</Actions>
      </GridActions>
      <MaterialTable
        title="Lista de Grupos"
        columns={[
          { title: 'Nome', field: 'nome' },
          { title: 'Membros', field: 'membros', type: 'numeric' },
          { title: 'Data de Criação', field: 'data_de_criacao' },
          {
            title: '',
            render: (row) => (
              <Link to={`/group/view?name=${row.nome}`}>
                <LinkMore>Ver grupo</LinkMore>
              </Link>
            ),
          },
        ]}
        data={dataGroups}
        options={{
          search: true,
          selection: true,
          pageSize: 10,
          color: 'primary',
        }}
        onSelectionChange={handleSelectDataGroups}
        localization={{
          pagination: {
            labelDisplayedRows: '{from}-{to} de {count}',
            labelRowsSelect: 'por página',
          },
          toolbar: {
            nRowsSelected: '{0} selecionado(s)',
            searchPlaceholder: 'Pesquisar',
          },
          header: { actions: 'Ações' },
          body: {
            emptyDataSourceMessage: 'Nenhuma informação',
            filterRow: { filterTooltip: 'Filtro' },
          },
        }}
      />
    </Container>
  );
}

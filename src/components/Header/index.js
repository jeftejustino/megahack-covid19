import React from 'react';

import { useDispatch } from 'react-redux';

import { Link, useLocation } from 'react-router-dom';

import {
  MdMenu,
  MdExitToApp,
  MdPermContactCalendar,
  MdPersonAdd,
  MdGroup,
  MdMessage,
} from 'react-icons/md';
import { signOut } from '../../store/modules/auth/actions';
import {
  HeaderApp,
  Wrapper,
  Container,
  HeaderBar,
  Icon,
  TitlePage,
  LogoutHeader,
  MenuBar,
  ItemMenu,
  IconMenu,
} from './styles';

export default function Header() {
  const location = useLocation();

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <HeaderApp>
      <Wrapper>
        <Container>
          <HeaderBar>
            <Icon>
              <MdMenu size={20} color="#fff" />
            </Icon>
            <TitlePage>Inicio</TitlePage>
            <LogoutHeader onClick={handleSignOut}>
              <MdExitToApp size={20} color="#fff" />
              <span>Sair</span>
            </LogoutHeader>
          </HeaderBar>
        </Container>
      </Wrapper>
      <nav>
        <MenuBar>
          <ItemMenu
            active={
              location.pathname === '/contact' ||
              location.pathname === '/contact/edit'
            }
          >
            <Link to="/contact">
              <IconMenu>
                <MdPermContactCalendar
                  size={24}
                  color={
                    location.pathname === '/contact' ||
                    location.pathname === '/contact/edit'
                      ? '#1565c0'
                      : '#747474'
                  }
                />
              </IconMenu>
              <span>Lista de Contatos</span>
            </Link>
          </ItemMenu>
          <ItemMenu
            active={
              location.pathname === '/contact/new' ||
              location.pathname === '/contact/new/single'
            }
          >
            <Link to="/contact/new">
              <IconMenu>
                <MdPersonAdd
                  size={24}
                  color={
                    location.pathname === '/contact/new' ||
                    location.pathname === '/contact/new/single'
                      ? '#1565c0'
                      : '#747474'
                  }
                />
              </IconMenu>
              <span>Cadastrar Contatos</span>
            </Link>
          </ItemMenu>
          <ItemMenu active={location.pathname === '/group'}>
            <Link to="/group">
              <IconMenu>
                <MdGroup
                  size={24}
                  color={location.pathname === '/group' ? '#1565c0' : '#747474'}
                />
              </IconMenu>
              <span>Lista de Grupos</span>
            </Link>
          </ItemMenu>
          <ItemMenu active={location.pathname === '/message'}>
            <Link to="/message">
              <IconMenu>
                <MdMessage
                  size={24}
                  color={
                    location.pathname === '/message' ? '#1565c0' : '#747474'
                  }
                />
              </IconMenu>
              <span>Enviar Mensagem</span>
            </Link>
          </ItemMenu>
        </MenuBar>
      </nav>
    </HeaderApp>
  );
}

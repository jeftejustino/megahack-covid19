import styled, { css } from 'styled-components';

export const HeaderApp = styled.div`
  nav {
    background: #fff;
  }
`;

export const Wrapper = styled.div`
  background: #1565c0;
  padding: 15px;
`;

export const Container = styled.div``;

export const HeaderBar = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  flex: 1;
  min-width: 20px;
  max-width: 20px;
  margin-right: 20px;
`;

export const TitlePage = styled.div`
  flex: 15;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.25px;
  color: #ffffff;
`;

export const LogoutHeader = styled.button`
  flex: 1;
  min-width: 70px;
  display: flex;
  background: rgba(255, 255, 255, 0);
  border: 0px;

  span {
    color: #fff;
    margin-left: 15px;
  }
`;

export const MenuBar = styled.ul`
  display: flex;
  border-bottom: 1px solid #ccc;
  list-style: none;
`;

export const ItemMenu = styled.li`
  flex: 2;
  align-items: center;
  text-align: center;

  a {
    padding: 16px 0px;
    display: block;
  }
  ${(props) =>
    props.active
      ? css`
          span {
            color: #1565c0 !important;
          }
          a {
            border-bottom: 2px solid #1565c0;
          }
        `
      : css`
          span {
            color: #747474 !important;
          }
          a {
            border-bottom: 0px;
          }
        `}
`;

export const IconMenu = styled.div`
  align-items: center;
`;

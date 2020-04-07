import styled from 'styled-components';

export const Container = styled.div`
  max-width: 668px;
  margin: 80px auto 0 auto;
  display: flex;

  h2 {
    color: #1565c0;
    min-height: 65px;
  }

  p {
    margin-top: 46px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const ItemMessage = styled.button`
  padding: 65px 0px;
  max-width: 304px;
  flex: 2;
  text-align: center;
  justify-content: center;
  margin: 0 20px;
  border: 1px solid #ccc;

  &:hover {
    background: #e3f2fd;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
      0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
  }
`;

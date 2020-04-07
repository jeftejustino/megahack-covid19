import styled from 'styled-components';

export const Container = styled.div`
  max-width: 668px;
  margin: 80px auto 0 auto;
  display: flex;

  > div {
    max-width: 304px;
    margin: 0 20px;
    flex: 2;

    > p {
      margin: 20px 0px 0px;
      text-align: center;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;

      > span {
        padding-bottom: 2px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }

  h2 {
    color: #1565c0;
    min-height: 65px;
  }

  p {
    margin-top: 46px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const ItemRegister = styled.button`
  padding: 65px 0px;
  width: 100%;
  text-align: center;
  justify-content: center;
  border: 1px solid #ccc;

  &:hover {
    background: #e3f2fd;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
      0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 60px;

  span {
    border: 4px solid #1565c0;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: #1565c0;
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  p {
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
  }
`;

export const Links = styled.div`
  text-align: center;

  a {
    color: #1565c0;
    font-size: 16px;
    display: block;
    margin-bottom: 25px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 84px 0px;
`;
export const Content = styled.div`
  min-width: 410px;
  background: #fff;

  display: flex;
  flex-direction: column;
  margin-top: 30px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.12),
    0 3px 4px 0 rgba(0, 0, 0, 0.14);
  padding: 40px;

  h1 {
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.25px;
    text-align: center;
    color: #1565c0;
    margin-bottom: 48px;
  }

  .form-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  form {
    input:focus > .form-input {
      background: #ccc !important;
    }

    .focused .form-label {
      transform: translateY(-75%);
      font-size: 11px;
      color: rgba(0, 0, 0, 0.87);
    }

    .form-label {
      position: absolute;
      left: 15px;
      top: 20px;
      color: #3f3f3f;
      background-color: rgba(255, 255, 255, 0);
      z-index: 10;
      -webkit-transition: -webkit-transform 0.15s ease-out,
        font-size 0.15s ease-out;
      -webkit-transition: transform 0.15s ease-out, font-size 0.15s ease-out;
      transition: transform 0.15s ease-out, font-size 0.15s ease-out;
      font-size: 14px !important;
    }

    .form-input {
      position: relative;
    }

    p {
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.75;
      letter-spacing: 0.5px;
      color: rgba(0, 0, 0, 0.6);
      cursor: pointer;
    }

    .MuiFormControl-root.MuiTextField-root {
      width: 100%;
      margin-bottom: 20px;
    }

    .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-adornedEnd.MuiOutlinedInput-adornedEnd {
      width: 100%;
      margin-bottom: 20px;
    }

    .MuiFormControl-root {
      width: 100%;
    }
  }

  .button-login {
    margin-top: 35px;
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;

    button {
      width: 126px;
      height: 36px;
      background-color: #1565c0;
      border-radius: 6px;
      border: 0px;
      color: #fff;
      text-transform: uppercase;
      font-size: 16px;
    }
  }
`;

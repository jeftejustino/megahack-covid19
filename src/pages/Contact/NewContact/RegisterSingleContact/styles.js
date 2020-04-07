import styled from 'styled-components';

export const Container = styled.div``;

export const ButtonsForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 96%;
  margin: 2%;

  button {
    width: 132px;
    height: 48px;
    background-color: #1565c0;
    border: 0px;
    border-radius: 4px;
    margin-left: 2%;
    margin-top: 2%;
    color: #fff;
    position: relative;

    svg {
      top: 13px;
      left: 16px;
      position: absolute;
    }
  }
  a {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: 1.25px;
    text-align: center;
    color: #1565c0;
    text-transform: uppercase;
    padding: 15px;
    margin-top: 20px;
  }
`;

export const TitleSection = styled.h4`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: 0.5px;
  color: rgba(0, 0, 0, 0.6);
  width: 96%;
  margin: 2%;
`;

export const ContentForm = styled.div`
  display: flex;

  .grid-2 {
    flex: 2;
    padding: 30px;
    display: block;

    .item {
      width: 96%;
      margin: 2%;
    }

    .item-2 {
      width: 46%;
      float: left;
      margin: 2%;
    }

    .item-2.genero-input input {
      width: 16px;
      display: block;
      float: left;
      height: 16px;
    }

    .item-2.genero-input div label {
      width: 50% !important;
      float: left;
      min-height: 56px;
      padding-top: 18px;
      font-size: 14px;
    }

    .item-2.genero-input div label span {
      float: left;
      margin-top: -3px;
      margin-left: 5px;
    }
  }

  label {
    display: block;
    width: 100%;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: 0.5px;
    color: rgba(0, 0, 0, 0.87);
  }

  input {
    height: 56px;
    border: solid 1px rgba(25, 25, 25, 0.32);
    width: 100%;
    padding: 10px 15px;
    border-radius: 4px;
  }

  textarea {
    height: 120px;
    border: solid 1px rgba(25, 25, 25, 0.32);
    width: 100%;
    padding: 10px 15px;
    border-radius: 4px;
  }
`;

export const BackLink = styled.div`
  color: #000;
  font-size: 24px;
  display: flex;
  align-items: center;
  margin: 40px 0px 15px;

  svg {
    margin-right: 10px;
  }
`;

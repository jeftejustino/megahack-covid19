import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 80px auto 0 auto;
`;

export const ContentForm = styled.div`
  display: flex;

  textarea {
    height: 200px;
    border: solid 1px rgba(25, 25, 25, 0.32);
    width: 100%;
    max-width: 326px;
    padding: 10px 15px;
    border-radius: 4px;
    resize: none;
  }
`;

export const GridMessage = styled.div`
  flex: 2;
`;

export const Limit = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  display: block;
  text-align: right;
  max-width: 326px;
`;

export const TitleGrid = styled.h4`
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.25px;
  color: #1565c0;
  padding-bottom: 16px;
`;

export const ItemMessage = styled.button`
  width: 100%;
  max-width: 304px;
  height: 68px;
  border: solid 0.8px rgba(0, 0, 0, 0.12);
  background-color: #fafafa;
  padding: 0px 20px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: 0.5px;
  color: #1565c0;
  border-radius: 4px;
  display: flex;
  position: relative;
  align-items: center;

  svg {
    margin-right: 15px;
  }

  .info {
    font-size: 12px;
    text-align: left;
    line-height: 1.5;
  }
`;

export const Separator = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  max-width: 304px;
  padding: 20px;
`;

export const ButtonsForm = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  width: 96%;
  margin: 2%;

  button {
    width: 132px;
    height: 48px;
    background-color: #1565c0;
    border: 0px;
    border-radius: 4px;
    margin-left: -60px;
    margin-top: 2%;
    color: #fff;
    position: relative;
    padding-left: 20px;

    svg {
      top: 13px;
      left: 16px;
      position: absolute;
    }
  }
`;

export const CommentForm = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 15px;
  margin-top: 30px;

  h5 {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: 0.5px;
    color: rgba(0, 0, 0, 0.6);
  }
  p {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

export const ContentModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 950px;
  height: 595px;
  max-width: 95%;
  max-height: 95%;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: auto;

  .MuiPaper-elevation2 {
    box-shadow: none !important;
  }
  .MuiInputBase-root.MuiInput-root.MuiInput-underline {
    padding: 10px !important;
    border: 1px solid rgba(25, 25, 25, 0.32) !important;
  }
  .MuiTableCell-body {
    color: rgba(0, 0, 0, 0.6) !important;
  }
  .MuiFormControl-root.MuiTextField-root {
    background: #fff;
    padding: 5px 5px 5px 35px;
    margin-right: -8px;
  }
`;

export const LinkMore = styled.button`
  float: right;
  width: 117px;
  height: 24px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
    0 1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: #fafafa;
  border: 0px;
  border-radius: 5px;

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  color: #1565c0;
`;

export const ModalButton = styled.div`
  padding: 20px 0px 0px;
  button {
    width: 140px;
    height: 48px;
    background-color: #1565c0;
    border: 0px;
    border-radius: 4px;
    color: #fff;
    position: relative;
    padding-left: 25px;

    svg {
      top: 13px;
      left: 16px;
      position: absolute;
    }
  }
`;

import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;

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

export const GridActions = styled.div`
  padding: 10px 0px;
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

export const Actions = styled.button`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
    0 1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: #fafafa;
  border: 0px;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 15px;

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  ${(props) =>
    props.selected
      ? css`
          color: #1565c0 !important;
        `
      : css`
          color: #ccc !important;
        `}
`;

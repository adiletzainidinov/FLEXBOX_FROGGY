import { Box, styled } from '@mui/material';

export const HeaderBox = styled(Box)`
  width: 45%;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  padding-top: 20px;
  align-items: center;

  h1 {
    font-family: 'Changa One', sans-serif;
    font-weight: 900;
    font-style: normal;
    color: #d9ecda;
    letter-spacing: 1px;
    font-size: 38px;
    cursor: no-drop;
  }

  select {
    padding: 7px 25px;
    border: none;
    background-color: white;
    color: #e5e5e5;
    background-color: #69b36c;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 100;

    &:focus {
      outline: none;
      border-color: #e34b3d;
    }
  }

  option {
    background-color: white;
    color: #d11606;
    font-size: 16px;
  }

  .levelInput {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    p {
      font-size: 15px;
      color: white;
      border: none;
      background-color: #69b36c;
      margin-top: 10px;
      padding: 6px;
      padding-top: 10px;
    }

    .levelInputPTop {
      border-right: 1px solid #88b189;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    .levelInputPBottom {
      border-left: 1px solid #88b189;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  @media (max-width: 1024px) {
    width: 60%; 
  }

  @media (max-width: 600px) {
    width: 80%; 
    flex-direction: column; 
    align-items: flex-start; 
    
    h1 {
      font-size: 28px; 
    }

    select {
      width: 100%; 
      margin-top: 15px; 
    }

    .levelInput {
      margin-top: 15px; 
    }
  }
`;

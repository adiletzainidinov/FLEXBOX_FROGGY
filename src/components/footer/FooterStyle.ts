import { Box, styled } from '@mui/material';

export const MuiBox = styled(Box)`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #d9ecda;
  font-size: 14px;

  a {
    margin-left: 5px;
    font-weight: 300;
    font-size: 13px;
  }

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    margin-bottom: 20px;

    ul {
      display: flex;
      list-style: none;
      li {
        margin-left: 5px;
        margin-bottom: 2px;
      }
    }
  }

  h5 {
    font-weight: 300;
    a {
      font-size: 11px;
    }
  }

  .setting {
    a {
      border: none;
      padding-bottom: 2px;
      font-weight: 900;
      background-color: #69b36c;
      padding: 3px 5px;
      border-radius: 2px;
      padding-bottom: 5px;
    }
  }

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 80%;
    font-size: 12px;
  }
`;

export const MuiBoxModal = styled(Box)`
  .included,
  .switchedOff,
  .expert,
  .average,
  .newbie {
    display: flex;
    gap: 8px;
  }

  .language {
    margin-bottom: 2px;
  }

  .hardless {
    margin-top: 5px;
    margin-bottom: 3px;
  }

  .expert {
    margin-bottom: 10px;
    margin-top: 2px;
    input {
      margin-bottom: 25px;
    }
  }

  .switchedOff {
    margin-top: 3px;
  }

  @media (max-width: 1024px) {
    .expert {
      margin-bottom: 5px;
    }
  }

  @media (max-width: 600px) {
    .included,
    .switchedOff,
    .expert,
    .average,
    .newbie {
      flex-direction: column;
      gap: 5px;
    }
  }
`;

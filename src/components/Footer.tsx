import { Box, styled } from '@mui/material';

const Footer = () => {
  return (
    <MuiBox>
      <h4>
        Игра Flexbox Froggy создал Zainidinov Adilet{' '}
        <ul>
          <li>
            <a href="">instagram</a>
          </li>
          <li>
            <a href="">youTube</a>
          </li>
          <li>
            <a href="">gitHub</a>
          </li>
          <li className="setting">
            <a href="">settings</a>
          </li>
        </ul>
      </h4>
      <h5>
        Хотите пообщатся с автором? Позвоните на номер{' '}
        <a href="" className="myNumber">
          {' '}
          +996 998 08 38 28
        </a>
      </h5>
    </MuiBox>
  );
};

export default Footer;

const MuiBox = styled(Box)`
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
`;

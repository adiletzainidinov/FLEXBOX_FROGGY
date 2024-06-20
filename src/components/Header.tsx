import { Box, styled } from '@mui/material';
import { FC } from 'react';

interface HeaderProps {
  level: number;
}

const Header: FC<HeaderProps> = ({ level }) => {
  return (
    <HeaderBox>
      <h1>FLEXBOX FROGGY</h1>
      <Box className="levelInput">
        <Box>
          <p className="levelInputPTop">◀</p>
        </Box>
        <select>
          <option>Уровень {level} из 24</option>
        </select>
        <Box>
          <p className="levelInputPBottom">▶</p>
        </Box>
      </Box>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled(Box)`
  width: 45%;
  display: flex;
  justify-content: space-between;
  margin-left: 1.25rem;
  padding-top: 1.25rem;
  align-items: center;
  h1 {
    font-family: 'Changa One', sans-serif;
    font-weight: 900;
    font-style: normal;
    color: #d9ecda;
    letter-spacing: 0.0625rem;
    font-size: 2.375rem;
    cursor: no-drop;
  }
  select {
    padding: 0.4375rem 1.5625rem;
    border: none;
    background-color: white;
    color: #e5e5e5;
    background-color: #69b36c;
    font-size: 1rem;
    margin-top: 0.625rem;
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
    font-size: 1rem;
  }
  .levelInput {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 0.9375rem;
      color: white;
      border: none;
      background-color: #69b36c;
      margin-top: 0.625rem;
      padding: 0.3125rem;
      padding-top: 0.625rem;
    }
    .levelInputPTop {
      border-right: 0.0625rem solid #88b189;
      border-top-left-radius: 0.3125rem;
      border-bottom-left-radius: 0.3125rem;
    }
    .levelInputPBottom {
      border-left: 0.0625rem solid #88b189;
      border-top-right-radius: 0.3125rem;
      border-bottom-right-radius: 0.3125rem;
    }
  }
`;

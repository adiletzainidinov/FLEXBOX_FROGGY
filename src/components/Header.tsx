import { Box, styled } from '@mui/material';
import { FC, useState, } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { levelCountValue } from '../store/slices/froggySlice/froggySlice';


interface HeaderProps {
  level: number;
  levelCount: number;
}

const Header: FC<HeaderProps> = ({ level, levelCount }) => {
  const dispatch = useAppDispatch();
  const [currentLevel, setcurrentLevel] = useState(level);

  const handleIncrement = () => {
    if (currentLevel < 16) {
      setcurrentLevel((prev) => prev + 1);
      dispatch(levelCountValue(levelCount + 1));
    }
  };
  const handleDecrement = () => {
    if ( currentLevel > 1) {
      setcurrentLevel((prev) => prev - 1);
      dispatch(levelCountValue(levelCount - 1));
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLevel = parseInt(e.target.value, 10);
    setcurrentLevel(newLevel);
    dispatch(levelCountValue(newLevel));
  };

  return (
    <HeaderBox>
      <h1>FLEXBOX FROGGY</h1>
      <Box className="levelInput">
        <Box>
          <p onClick={handleDecrement} className="levelInputPTop">
            ◀
          </p>
        </Box>
        <Box className="selectBox">
          <select
            className="select"
            value={currentLevel}
            onChange={handleSelectChange}
          >
            {Array.from({ length: 16 }, (_, i) => (
              <option className="option" key={i + 1} value={i + 1}>
                Уровень {i + 1} из 24
              </option>
            ))}{' '}
          </select>
        </Box>
        <Box>
          <p onClick={handleIncrement} className="levelInputPBottom">
            ▶
          </p>
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
`;

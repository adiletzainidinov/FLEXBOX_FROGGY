import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { levelCountValue } from '../../store/slices/froggySlice/froggySlice';
import { HeaderBox } from './HeaderStyle';
import { HeaderProps } from '../../types/Types';

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
    if (currentLevel > 1) {
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

// Style
HeaderBox;

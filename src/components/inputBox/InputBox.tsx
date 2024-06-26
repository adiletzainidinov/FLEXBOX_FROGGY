import { Box } from '@mui/material';
import { Input } from '../UI/Input';
import { Button } from '../UI/Button';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import {
  addFroggy,
  levelCountValue,
} from '../../store/slices/froggySlice/froggySlice';
import { FLEXBOX_FROGGY } from '../../data/data';
import { number } from '../../helpers/helpers';
import { BoxMui } from './InputBoxStyle';
import { InputBoxProps } from '../../types/Types';
import useDebounce from '../../hooks/UseDebounce';

const InputBox: React.FC<InputBoxProps> = ({ levelCount }) => {
  const dispatch = useAppDispatch();
  const [inputV, setInputV] = useState('');
  const [levelCountChange, setLevelCountChange] = useState(levelCount);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const debouncedInputV = useDebounce(inputV, 500);

  useEffect(() => {
    dispatch(addFroggy(debouncedInputV));
  }, [debouncedInputV, dispatch]);

  const currentLevel = FLEXBOX_FROGGY.find(
    (level) => level.level === levelCountChange
  );

  useEffect(() => {
    if (currentLevel) {
      const correctAnswers = Object.values(currentLevel.correctAnswer).flat();
      const isCorrectAnswer = correctAnswers.includes(debouncedInputV.trim());
      setIsDisabled(!isCorrectAnswer);
      setIsCorrect(isCorrectAnswer);
    }
  }, [debouncedInputV, levelCountChange, currentLevel]);

  const handlerLevelCount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isCorrect && !isDisabled) {
      if (levelCountChange < FLEXBOX_FROGGY.length) {
        const newLevelCount = levelCountChange + 1;
        setLevelCountChange(newLevelCount);
        dispatch(levelCountValue(newLevelCount));
      } else {
        console.log('All levels completed');
      }
      setInputV('');
    }
  };

  const numberArray = Object.values(number);

  return (
    <>
      {levelCount === 14 || levelCount === 15 || levelCount === 16 ? (
        <BoxMui>
          <Box className="numberBox">
            {numberArray.map((num, index) => (
              <p key={index}>{num}</p>
            ))}
          </Box>
          <Box
            className="inputBox"
            component="form"
            onSubmit={handlerLevelCount}
          >
            <p>#pond {'{'}</p>
            <p className="flex">display: flex;</p>
            <p className="figure">{'}'}</p>
            <p style={{ marginTop: 30 }}>
              {levelCount === 14 || levelCount === 16
                ? '.yellow'
                : levelCount === 15
                ? '.red'
                : ''}{' '}
              {'{'}
            </p>

            <Input
              value={inputV}
              onChange={(e) => setInputV(e.target.value)}
              style={{ marginLeft: 10 }}
            />
            <p>{'}'}</p>
            <Button
              type="submit"
              disabled={isDisabled}
              className="nextButton"
              style={{
                marginTop: 30,
                color: 'white',
                opacity: isDisabled ? '0.5' : '1',
              }}
            >
              Следующий
            </Button>
          </Box>
        </BoxMui>
      ) : (
        <BoxMui>
          <Box className="numberBox">
            {numberArray.map((num, index) => (
              <p key={index}>{num}</p>
            ))}
          </Box>
          <Box
            className="inputBox"
            component="form"
            onSubmit={handlerLevelCount}
          >
            <p>#pond {'{'}</p>
            <p className="flex">display: flex;</p>
            <Input value={inputV} onChange={(e) => setInputV(e.target.value)} />
            <p className="figure">{'}'}</p>
            <Button
              style={{ color: 'white', opacity: isDisabled ? '0.5' : '1' }}
              type="submit"
              disabled={isDisabled}
              className="nextButton"
            >
              Следующий
            </Button>
          </Box>
        </BoxMui>
      )}
    </>
  );
};

export default InputBox;

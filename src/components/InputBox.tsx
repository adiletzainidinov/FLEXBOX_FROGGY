import { Box, styled } from '@mui/material';
import { Input } from './UI/Input';
import { Button } from './UI/Button';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import {
  addFroggy,
  levelCountValue,
} from '../store/slices/froggySlice/froggySlice';
import { FLEXBOX_FROGGY } from '../data/data';
import { number } from '../helpers/helpers';

interface InputBoxProps {
  levelCount: number;
}

const InputBox: React.FC<InputBoxProps> = ({ levelCount }) => {
  const dispatch = useAppDispatch();
  const [inputV, setInputV] = useState('');
  const [levelCountChange, setLevelCountChange] = useState(levelCount);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  dispatch(addFroggy(inputV));

  const currentLevel = FLEXBOX_FROGGY.find(
    (level) => level.level === levelCountChange
  );

  useEffect(() => {
    if (currentLevel) {
      const correctAnswers = Object.values(currentLevel.correctAnswer).flat();
      const isCorrectAnswer = correctAnswers.includes(inputV.trim());
      setIsDisabled(!isCorrectAnswer);
      setIsCorrect(isCorrectAnswer);
    }
  }, [inputV, levelCountChange, currentLevel]);

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
              style={{ marginTop: 30, color: 'white', opacity: isDisabled ? '0.5' : '1' }}
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
              style={{ color: 'white', opacity:isDisabled ? '0.5' : '1' }}
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

const BoxMui = styled(Box)`
  display: flex;
  margin-left: 1.25rem;
  .numberBox {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 0.3125rem;
    background-color: #999999;
    color: #d9ecda;
    font-size: 1.25rem;
    border-bottom-left-radius: 0.3125rem;
    border-top-left-radius: 0.3125rem;
    p {
      margin-bottom: 0.125rem;
    }
  }
  .inputBox {
    background-color: #e0e0e0;
    padding: 1.25rem 0.625rem;
    border-top-right-radius: 0.3125rem;
    border-bottom-right-radius: 0.3125rem;
    p {
      color: #999999;
      font-size: 1.25rem;
    }
    .flex {
      margin-left: 1.25rem;
      margin-top: 0.3125rem;
      margin-bottom: 0.3125rem;
    }
    .figure {
      margin-top: 0.3125rem;
    }
    .input {
      margin-left: 1.25rem;
    }
    button {
      margin-left: 34.6875rem;
      margin-top: 74px;
    }
  }
  .nextButton {
    @keyframes slidein {
      from {
        transform: scale(1);
      }

      to {
        transform: scale(0.9);
      }
    }
    animation: slidein 1s ease-in-out infinite alternate;
  }
`;

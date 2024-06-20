import { Box, styled } from '@mui/material';
import { Input } from './UI/Input';
import { Button } from './UI/Button';
import { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { addFroggy } from '../store/slices/froggySlice/froggySlice';

const InputBox = () => {
  const [inputV, setInputV] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addFroggy(inputV));
  };


  return (
    <BoxMui>
      <Box className="numberBox">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
      </Box>
      <Box className="inputBox" component="form" onSubmit={handleSubmit}>
        <p>#pond {'{'}</p>
        <p className="flex">display: flex;</p>
        <Input value={inputV} onChange={(e) => setInputV(e.target.value)} />
        <p className="figure">{'}'}</p>
        <Button type="submit">Следующий</Button>
      </Box>
    </BoxMui>
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
`;

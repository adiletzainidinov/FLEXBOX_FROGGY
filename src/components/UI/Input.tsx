import { TextField, TextFieldProps, styled } from '@mui/material';
import { ChangeEvent, forwardRef, Ref } from 'react';

interface InputProps extends Omit<TextFieldProps, 'variant'> {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef(
  (props: InputProps, ref?: Ref<HTMLInputElement>) => {
    const { value, onChange, ...rest } = props;
    return (
      <StyledInput
        variant="outlined"
        value={value}
        onChange={onChange}
        {...rest}
        inputRef={ref}
      />
    );
  }
);

const StyledInput = styled(TextField)`
  width: 43rem;
  .MuiInputBase-root {
    height: 1.8rem;
    background-color: #ffffff;
    border-radius: 2px;
    border: none;
  }
`;

import {
  styled,
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { FC, ReactNode } from 'react';

interface ButtonProps extends MuiButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)`
  background-color: #d11606;
  padding: .5rem 1.25rem;
  border-radius: .4375rem;
  color: white;
  font-size: 1rem;
  &:hover {
    background-color: #e34b3d;
  }
`;

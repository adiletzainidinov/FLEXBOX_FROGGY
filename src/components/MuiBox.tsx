import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { useAppSelector } from '../hooks/hooks';

interface MuiBoxProps {
  inputValue: string;
  children?: ReactNode;
}

const MuiBox: FC<MuiBoxProps> = ({ children }) => {
  const { inputValue } = useAppSelector((state) => state.froggy);

  const customStyles: Record<string, string> = inputValue
    .split(';')
    .reduce((acc, style) => {
      const [key, value] = style.split(':');
      if (key && value) {
        acc[key.trim()] = value.trim();
      }
      return acc;
    }, {} as Record<string, string>);

  console.log(customStyles, 'custom');
  console.log(inputValue, 'in');

  return <StyledBox style={customStyles}>{children}</StyledBox>;
};

const StyledBox = styled(Box)`
  display: flex;
  position: relative;
  z-index: 2;
  margin-right: 15px;
  width: 100%;
  height: 100%;
`;

export default MuiBox;

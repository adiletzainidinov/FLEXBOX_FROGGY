import { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { StyledBox } from './MuiBoxStyle';
import { MuiBoxProps } from '../../types/Types';

const MuiBox: FC<MuiBoxProps> = ({ children, className }) => {
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

  return (
    <StyledBox
      className={className}
      style={customStyles}
      customStyles={customStyles}
    >
      {children}
    </StyledBox>
  );
};

export default MuiBox;

// Style

StyledBox;

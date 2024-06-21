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

  return <StyledBox style={customStyles}>{children}</StyledBox>;
};

const StyledBox = styled(Box)`
  display: flex;
  position: relative;
  z-index: 2;
  margin-right: 15px;
  width: 98.4%;
  height: 100%;
  .leverFirstFirst .FroggyGreen {
    display: block;
  }
  .leverSecondFirst .FroggyGreen {
    display: block;
  }
  .leverSecondSecond .FroggyYellow {
    display: block;
  }
  .leverSecondFirst .FroggyGreen {
    margin-right: 40px;
  }
  .leverSecondSecond .FroggyYellow {
    margin-left: 40px;
  }
`;

export default MuiBox;

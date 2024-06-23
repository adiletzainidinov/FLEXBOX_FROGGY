import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { useAppSelector } from '../hooks/hooks';

interface MuiBoxProps {
  inputValue: string;
  children?: ReactNode;
  className: string | undefined;
}

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
    <StyledBox className={className} style={customStyles}>
      {children}
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  display: flex;
  position: relative;
  z-index: 2;
  margin-right: 15px;
  width: 98.4%;
  height: 100%;

  // Froggy All Block

  .leverFirstFirst .FroggyGreen,
  .leverSecondFirst .FroggyGreen,
  .leverSecondSecond .FroggyYellow,
  .leverThirdFirst .FroggyGreen,
  .leverThirdSecond .FroggyYellow,
  .leverThirdThird .FrogRed,
  .leverFourFirst .FroggyGreen,
  .leverFourSecond .FroggyYellow,
  .leverFourThird .FrogRed,
  .leverFiveFirst .FroggyGreen,
  .leverFiveSecond .FroggyYellow,
  .leverFiveThird .FrogRed,
  .leverSevenFirst .FroggyGreen,
  .leverSevenSecond .FroggyYellow,
  .leverSevenThird .FrogRed,
  .leverEightFirst .FroggyGreen,
  .leverEightSecond .FroggyYellow,
  .leverEightThird .FrogRed {
    display: block;
  }

  // level Second-style

  .leverSecondFirst .FroggyGreen {
    margin-right: 40px;
  }
  .leverSecondSecond .FroggyYellow {
    margin-left: 40px;
  }

  // level Third-style

  .leverThirdSecond .FroggyYellow,
  .leverThirdThird .FrogRed {
    margin-left: 10px;
    margin-top: 20px;
  }
  .leverThirdFirst .FroggyGreen {
    margin-top: 20px;
    margin-left: 0px;
  }
  .leverThirdThird .FrogRed {
    margin-top: 30px;
  }
  .leverThirdFour,
  .leverThirdFive {
    display: none;
  }

  // level Four-style

  .leverFourFour,
  .leverFourFive {
    display: none;
  }
  .leverFourThird .FrogRed {
    margin-top: 10px;
  }
  .leverFourSecond .FroggyYellow,
  .leverFourThird .FrogRed {
    margin-left: 40px;
  }

  // level Five-style 
  
  .leverFiveFirst .FroggyGreen,
  .leverFiveSecond .FroggyYellow,
  .leverFiveThird .FrogRed {
    margin-left: 50px;
  }
    .leverFiveFirst .FroggyGreen {
      margin-left: 20px;
    }
    .leverFiveThird .FrogRed {
      margin-top: 10px;
    }
    .leverFiveFour,
  .leverFiveFive {
    display: none;
  }

  // level Six-style

  .leverSixFirst .FroggyGreen {
    display: block;
  }
  .leverSevenFour,
  .leverSevenFive {
    display: none;

  }

  // level Eight-style

 .leverEightFirst .FroggyGreen,
  .leverEightSecond .FroggyYellow,
  .leverEightThird .FrogRed  {
    margin-left: 50px;
    margin-top: 10px;
  }
`;

export default MuiBox;

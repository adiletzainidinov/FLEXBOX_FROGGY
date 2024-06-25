import { Box, styled } from '@mui/material';
import { FC, ReactNode } from 'react';
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
    <StyledBox
      className={className}
      style={customStyles}
      customStyles={customStyles}
    >
      {children}
    </StyledBox>
  );
};
const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'customStyles',
})<{ customStyles: React.CSSProperties }>(({ customStyles }) => ({
  display: 'flex',
  position: 'relative',
  zIndex: 2,
  marginRight: '15px',
  width: '98.4%',
  height: '100%',

  // Froggy All Block

  '.leverFirstFirst .FroggyGreen, .leverSecondFirst .FroggyGreen, .leverSecondSecond .FroggyYellow, .leverThirdFirst .FroggyGreen, .leverThirdSecond .FroggyYellow, .leverThirdThird .FrogRed, .leverFourFirst .FroggyGreen, .leverFourSecond .FroggyYellow, .leverFourThird .FrogRed, .leverFiveFirst .FroggyGreen, .leverFiveSecond .FroggyYellow, .leverFiveThird .FrogRed, .leverSevenFirst .FroggyGreen, .leverSevenSecond .FroggyYellow, .leverSevenThird .FrogRed, .leverEightFirst .FroggyGreen, .leverEightSecond .FroggyYellow, .leverEightThird .FrogRed, .leverNineFirst .FroggyGreen, .leverNineSecond .FroggyYellow, .leverNineThird .FrogRed, .leverTenFirst .FroggyGreen, .leverTenSecond .FroggyYellow, .leverTenThird .FrogRed, .leverElevenFirst .FroggyGreen, .leverElevenSecond .FroggyYellow, .leverElevenThird .FrogRed, .levertwelveFirst .FroggyGreen, .levertwelveSecond .FroggyYellow, .levertwelveThird .FrogRed, .leverthirteenFirst .FroggyGreen, .leverthirteenSecond .FroggyYellow, .leverthirteenThird .FrogRed, .leverfourteenFirst .FroggyGreen, .leverfourteenSecond .FroggyYellow, .leverfourteenThird .FrogRed':
    {
      display: 'block',
    },

  // level Second-style

  '.leverSecondFirst .FroggyGreen': {
    marginRight: '40px',
  },
  '.leverSecondSecond .FroggyYellow': {
    marginLeft: '40px',
  },

  // level Third-style

  '.leverThirdSecond .FroggyYellow, .leverThirdThird .FrogRed': {
    marginLeft: '10px',
    marginTop: '20px',
  },
  '.leverThirdFirst .FroggyGreen': {
    marginTop: '20px',
    marginLeft: '0px',
  },
  '.leverThirdThird .FrogRed': {
    marginTop: '30px',
  },
  '.leverThirdFour, .leverThirdFive': {
    display: 'none',
  },

  // level Four-style

  '.leverFourFour, .leverFourFive': {
    display: 'none',
  },
  '.leverFourThird .FrogRed': {
    marginTop: '10px',
  },
  '.leverFourSecond .FroggyYellow, .leverFourThird .FrogRed': {
    marginLeft: '40px',
  },

  // level Five-style

  '.leverFiveFirst .FroggyGreen, .leverFiveSecond .FroggyYellow, .leverFiveThird .FrogRed':
    {
      marginLeft: '50px',
    },
  '.leverFiveFirst .FroggyGreen': {
    marginLeft: '20px',
  },
  '.leverFiveThird .FrogRed': {
    marginTop: '10px',
  },
  '.leverFiveFour, .leverFiveFive': {
    display: 'none',
  },

  // level Six-style

  '.leverSixFirst .FroggyGreen': {
    display: 'block',
  },
  '.leverSevenFour, .leverSevenFive': {
    display: 'none',
  },

  // level Eight-style

  '.leverEightFirst .FroggyGreen, .leverEightSecond .FroggyYellow, .leverEightThird .FrogRed':
    {
      marginLeft: '50px',
      marginTop: '10px',
    },

  // level Nine-style

  '.leverNineFirst .FroggyGreen, .leverNineSecond .FroggyYellow, .leverNineThird .FrogRed':
    {
      marginTop: '60px',
      marginLeft: '20px',
    },

  // level Ten-style

  '.leverTenFour, .leverTenFive': {
    display: 'none',
  },
  '.leverTenFirst .FroggyGreen, .leverTenSecond .FroggyYellow, .leverTenThird .FrogRed':
    {
      marginLeft: '50px',
    },

  // level Eleven-style

  '.leverElevenFour, .leverElevenFive': {
    display: 'none',
  },
  '.leverElevenFirst .FroggyGreen, .leverElevenSecond .FroggyYellow, .leverElevenThird .FrogRed':
    {
      marginTop: '50px',
      marginLeft: '30px',
    },
  '.leverElevenThird .FrogRed': {
    marginTop: '60px',
  },

  // level Twelve-style

  '.levertwelveFour, .levertwelveFive': {
    display: 'none',
  },
  '.levertwelveFirst .FroggyGreen, .levertwelveSecond .FroggyYellow, .levertwelveThird .FrogRed':
    {
      marginTop: '50px',
      marginLeft: '30px',
    },
  '.levertwelveThird .FrogRed': {
    marginTop: '60px',
  },

  // level thirteen-style

  '.leverthirteenFour, .leverthirteenFive': {
    display: 'none',
  },
  '.leverthirteenFirst .FroggyGreen, .leverthirteenSecond .FroggyYellow, .leverthirteenThird .FrogRed':
    {
      marginTop: '50px',
      marginLeft: '50px',
    },
  '.leverthirteenThird .FrogRed': {
    marginTop: '60px',
  },

  // level fourteen-style

  '.leverfourteenFour, .leverfourteenFive': {
    display: 'none',
  },
  '.leverfourteenFirst .FroggyGreen, .leverfourteenSecond .FroggyYellow, .leverfourteenThird .FrogRed':
    {
      marginLeft: '50px',
    },
  '.leverfourteenThird .FrogRed': {
    marginTop: '10px',
  },
  '.leverfourteenSecond': {
    order: customStyles.order === '1' ? 1 : 'initial',
  },
  // level fiveteen-style

  '.leverFiveteenFirst .FroggyGreen, .leverFiveteenSecond .FroggyYellow, .leverFiveteenThird .FrogRed':
    {
      marginLeft: '0px',
    },
  '.leverFiveteenThird .FrogRed': {
    marginTop: '10px',
  },
  '.leverFiveteenFirst .FroggyGreen,.leverFiveteenSecond .FroggyYellow,.leverFiveteenThird .FrogRed,.leverFiveteenFour .FroggyGreen,.leverFiveteenFive .FroggyGreen':
    {
      display: 'block',
      marginLeft: '47px',
    },
  '.leverFiveteenThird ': {
    order: customStyles.order === '-1' ? -1 : 'initial',
  },
  // level sixteen-style

  '.leversixteenFirst .FroggyGreen, .leversixteenSecond .FroggyYellow, .leversixteenThird .FrogRed':
    {
      marginLeft: '0px',
    },
  '.leversixteenThird .FrogRed': {
    marginTop: '10px',
  },
  '.leversixteenFirst .FroggyGreen,.leversixteenSecond .FroggyYellow,.leversixteenThird .FrogRed,.leversixteenFour .FroggyGreen,.leversixteenFive .FroggyGreen':
    {
      display: 'block',
      marginLeft: '47px',
    },
  '.leversixteenSecond': {
    alignSelf: customStyles['alignSelf'] === 'end' ? 'end' : 'align-self: end',
  },
}));

export default MuiBox;

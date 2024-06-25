import { Box, styled } from '@mui/material';
import { FC, ReactNode } from 'react';

interface LilipadsBoxType {
  children?: ReactNode;
  className?: string;
}

export const LilipadsBox: FC<LilipadsBoxType> = ({ className, children }) => {
  return (
    <LilipadsBoxContainer className={className}>
      {children}
    </LilipadsBoxContainer>
  );
};

export default LilipadsBox;

const LilipadsBoxContainer = styled(Box)`
  .leverFirstFirst .LilipudGreenMain {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  // level Second-style

  .leverSecondFirst .LilipudGreenMain,
  .leverSecondSecond .LilipudGreenMain {
    display: block;
    position: absolute;
    top: 10px;
  }
  .leverSecondFirst .LilipudGreenMain {
    right: 225px;
    background-color: #c4c403;
  }
  .leverSecondSecond .LilipudGreenMain {
    left: 225px;
  }

  //level Third-style

  .leverThirdFirst .LilipudGreenMain,
  .leverThirdSecond .LilipudGreenMain,
  .leverThirdThird .LilipudGreenMain {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
  }
  .leverThirdFirst .LilipudGreenMain {
    top: 30px;
    left: 77px;
  }
  .leverThirdSecond .LilipudGreenMain {
    background-color: #c4c403;
    top: 30px;
    left: 313px;
  }
  .leverThirdThird .LilipudGreenMain {
    background-color: #cf1a17;
    top: 30px;
    right: 88px;
  }

  // level Fourl-style

  .leverFourFirst .LilipudGreenMain,
  .leverFourSecond .LilipudGreenMain,
  .leverFourThird .LilipudGreenMain {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
  }
  .leverFourFirst .LilipudGreenMain {
    top: 15px;
    left: 10px;
  }
  .leverFourSecond .LilipudGreenMain {
    background-color: #c4c403;
    top: 15px;
    left: 312px;
  }
  .leverFourThird .LilipudGreenMain {
    background-color: #cf1a17;
    top: 15px;
    right: 20px;
  }

  // level Five-style
  .leverFiveFirst .LilipudGreenMain,
  .leverFiveSecond .LilipudGreenMain,
  .leverFiveThird .LilipudGreenMain {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    bottom: 15px;
  }
  .leverFiveFirst .LilipudGreenMain {
    left: 30px;
  }
  .leverFiveSecond .LilipudGreenMain {
    background-color: #c4c403;
    left: 172px;
  }
  .leverFiveThird .LilipudGreenMain {
    background-color: #cf1a17;
    right: 320px;
  }

  // level Six-style

  .leverSixFirst .LilipudGreenMain {
    display: block;
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    top: 325px;
    left: 312px;
  }

  // level Seven-style

  .leverSevenFirst .LilipudGreenMain,
  .leverSevenSecond .LilipudGreenMain,
  .leverSevenThird .LilipudGreenMain {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    bottom: 15px;
  }
  .leverSevenFirst .LilipudGreenMain {
    left: 80px;
  }
  .leverSevenSecond .LilipudGreenMain {
    left: 313px;
    background-color: #c4c403;
  }
  .leverSevenThird .LilipudGreenMain {
    right: 90px;
    background-color: #cf1a17;
  }

  // level Eight-Style
  .leverEightFirst .LilipudGreenMain,
  .leverEightSecond .LilipudGreenMain,
  .leverEightThird .LilipudGreenMain {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    top: 15px;
  }
  .leverEightThird .LilipudGreenMain {
    right: 22px;
  }
  .leverEightSecond .LilipudGreenMain {
    right: 162px;
    background-color: #c4c403;
  }
  .leverEightFirst .LilipudGreenMain {
    left: 340px;
    background-color: #cf1a17;
  }
  // level Nine-Style
  .leverNineFirst .LilipudGreenMain,
  .leverNineSecond .LilipudGreenMain,
  .leverNineThird .LilipudGreenMain {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    top: 15px;
  }
  .leverNineThird .LilipudGreenMain {
    left: 30px;
    top: 60px;
  }
  .leverNineSecond .LilipudGreenMain {
    left: 30px;
    top: 220px;
    background-color: #c4c403;
  }
  .leverNineFirst .LilipudGreenMain {
    left: 30px;
    top: 370px;
    background-color: #cf1a17;
  }
  // level Ten-Style
  .leverTenFirst .LilipudGreenMain,
  .leverTenSecond .LilipudGreenMain,
  .leverTenThird .LilipudGreenMain {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    top: 15px;
  }
  .leverTenThird .LilipudGreenMain {
    left: 60px;
    top: 10px;
    background-color: #cf1a17;
  }
  .leverTenSecond .LilipudGreenMain {
    left: 200px;
    top: 10px;
    background-color: #c4c403;
  }
  .leverTenFirst .LilipudGreenMain {
    left: 340px;
    top: 10px;
  }
  // level Eleven-Style

  .leverElevenFirst .LilipudGreenMain,
  .leverElevenSecond .LilipudGreenMain,
  .leverElevenThird .LilipudGreenMain {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    top: 15px;
    left: 40px;
  }
  .leverElevenThird .LilipudGreenMain {
    top: 630px;
    background-color: #cf1a17;
  }
  .leverElevenSecond .LilipudGreenMain {
    top: 490px;
    background-color: #c4c403;
  }
  .leverElevenFirst .LilipudGreenMain {
    top: 350px;
  }
  // level Twelve-Style

  .levertwelveFirst .LilipudGreenMain,
  .levertwelveSecond .LilipudGreenMain,
  .levertwelveThird .LilipudGreenMain {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    top: 15px;
    left: 40px;
  }
  .levertwelveThird .LilipudGreenMain {
    top: 60px;
    background-color: #cf1a17;
  }
  .levertwelveSecond .LilipudGreenMain {
    top: 350px;
    background-color: #c4c403;
  }
  .levertwelveFirst .LilipudGreenMain {
    top: 630px;
  }
  // level thriteen-Style

  .leverthirteenFirst .LilipudGreenMain,
  .leverthirteenSecond .LilipudGreenMain,
  .leverthirteenThird .LilipudGreenMain {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    top: 15px;
    left: 40px;
  }
  .leverthirteenThird .LilipudGreenMain {
    top: 630px;
    left: 200px;
    background-color: #cf1a17;
  }
  .leverthirteenSecond .LilipudGreenMain {
    top: 630px;
    left: 340px;
    background-color: #c4c403;
  }
  .leverthirteenFirst .LilipudGreenMain {
    top: 630px;
    left: 480px;
  }
  // level fourteen-Style

  .leverfourteenFirst .LilipudGreenMain,
  .leverfourteenSecond .LilipudGreenMain,
  .leverfourteenThird .LilipudGreenMain {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    top: 10px;
  }
  .leverfourteenThird .LilipudGreenMain {
    top: 10px;
    left: 200px;
    background-color: #cf1a17;
  }
  .leverfourteenSecond .LilipudGreenMain {
    left: 340px;
    background-color: #c4c403;
  }
  .leverfourteenFirst .LilipudGreenMain {
    left: 60px;
  }
  // level fiveteen-Style

  .leverFiveteenFirst .LilipudGreenMain,
  .leverFiveteenSecond .LilipudGreenMain,
  .leverFiveteenThird .LilipudGreenMain,
  .leverFiveteenFour .LilipudGreenMain,
  .leverFiveteenFive .LilipudGreenMain {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    top: 10px;
  }
  .leverFiveteenFirst .LilipudGreenMain {
    top: 10px;
    left: 50px;
  }
  .leverFiveteenSecond .LilipudGreenMain {
    left: 190px;
  }

  .leverFiveteenThird .LilipudGreenMain {
    left: 330px;
  }

  .leverFiveteenFour .LilipudGreenMain {
    left: 470px;
  }
  .leverFiveteenFive .LilipudGreenMain {
    left: 610px;
  }
  // level sixteen-Style

  .leversixteenFirst .LilipudGreenMain,
  .leversixteenSecond .LilipudGreenMain,
  .leversixteenThird .LilipudGreenMain,
  .leversixteenFour .LilipudGreenMain,
  .leversixteenFive .LilipudGreenMain {
    display: block;
    position: absolute;
    width: 130px;
    height: 130px;
    top: 10px;
  }
  .leversixteenFirst .LilipudGreenMain {
    top: 10px;
    left: 50px;
  }
  .leversixteenSecond .LilipudGreenMain {
    left: 190px;
  }

  .leversixteenThird .LilipudGreenMain {
    left: 330px;
    margin-top: 620px;
    background-color: #c4c403;
  }

  .leversixteenFour .LilipudGreenMain {
    left: 470px;
  }
  .leversixteenFive .LilipudGreenMain {
    left: 610px;
  }
`;

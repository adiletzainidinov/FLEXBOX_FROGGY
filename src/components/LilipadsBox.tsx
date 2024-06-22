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
`;

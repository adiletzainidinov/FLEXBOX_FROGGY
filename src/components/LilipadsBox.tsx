import { Box, styled } from '@mui/material';
import { FC, ReactNode } from 'react';

interface LilipadsBoxType {
  children?: ReactNode;
}

export const LilipadsBox: FC<LilipadsBoxType> = ({ children }) => {
  return <LilipadsBoxContainer>{children}</LilipadsBoxContainer>;
};

export default LilipadsBox;

const LilipadsBoxContainer = styled(Box)`
  .leverFirstFirst .LilipudGreenMain {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
  }
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
`;

import { Box, styled } from '@mui/material';
import React from 'react';

const LilipudGreenMain: React.FC = () => {
  return <MuiBox className='LilipudGreenMain' />;
};

export default LilipudGreenMain;

const MuiBox = styled(Box)`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #288a2b;
  display: none;
  
`;

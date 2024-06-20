import { Box } from '@mui/material';
import React, { FC } from 'react';
import MuiBox from './MuiBox';
import { useAppSelector } from '../hooks/hooks';

interface SideBarProps {
  sideBar: {
    lilipads: FC[];
  };
  froggyGreenMain: FC;
  style: React.CSSProperties;
}

const SideBar: FC<SideBarProps> = ({ sideBar, style, froggyGreenMain }) => {
  const { inputValue } = useAppSelector((state) => state.froggy);

  return (
    <Box className="asfd" style={{ width: '100%', height: '100%' }}>
      <MuiBox inputValue={inputValue}>{React.createElement(froggyGreenMain)}
      </MuiBox>
      {sideBar.lilipads.map((LilyPadComponent, index) => (
        <Box key={index} style={style}>
          <LilyPadComponent />
        </Box>
      ))}
    </Box>
  );
};

export default SideBar;

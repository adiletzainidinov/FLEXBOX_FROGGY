import { Box, styled } from '@mui/material';
import { FLEXBOX_FROGGY } from '../data/data';
import Header from './Header';
import { FC } from 'react';
import Instruction from './Instruction';
import InputBox from './InputBox';
import Footer from './Footer';
import SideBar from './SideBar';

const Wrapper: FC = () => {
  

  return (
    <>
      {FLEXBOX_FROGGY.map((i) => (
        <MuiBox key={i.id}>
          <Header level={i.level} />
          <Instruction
            classes={i.classes}
            instruction={i.instruction}
            flexStart={i.flexStart}
            flexEnd={i.flexEnd}
            center={i.center}
            spaceBetween={i.spaceBetween}
            spaceAround={i.spaceAround}
            justifyContent={i.justifyContent}
          />

          <InputBox />
          <Footer />
          <Box className="blueBox">
            <SideBar
              classes={i.classes}
              sideBar={i.sideBar}
              froggyGreenMain={i.froggyGreenMain}
              froggyGreenYellow={i.froggyGreenYellow}
            />
          </Box>
        </MuiBox>
      ))}
    </>
  );
};

export default Wrapper;

const MuiBox = styled(Box)`
  background-color: #43a047;
  width: 100vw;
  height: 100vh;
  padding: 0 1.875rem;
  .blueBox {
    width: 45%;
    height: 100vh;
    background-color: #1f5768;
    right: 4.375rem;
    position: absolute;
    top: 0;
    padding: 30px;
  }
`;

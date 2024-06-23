import { Box, styled } from '@mui/material';
import { FLEXBOX_FROGGY } from '../data/data';
import Header from './Header';
import { FC } from 'react';
import Instruction from './Instruction';
import InputBox from './InputBox';
import Footer from './Footer';
import SideBar from './SideBar';
import { useAppSelector } from '../hooks/hooks';

const Wrapper: FC = () => {
  const { levelCount } = useAppSelector((state) => state.froggy);

  return (
    <>
      {FLEXBOX_FROGGY.map((i) =>
        levelCount === i.level ? (
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
              justifyContentEnd={i.justifyContentEnd}
              instructionFiveKey={i.instructionFiveKey}
              instructionSevenKey={i.instructionSevenKey}
            />
            <InputBox levelCount={levelCount} />
            <Footer />
            <Box className="blueBox">
              <SideBar
                classes={i.classes}
                sideBar={i.sideBar}
                froggyGreenMain={i.froggyGreenMain}
                froggyGreenYellow={i.froggyGreenYellow}
                froggyGreenRed={i.froggyGreenRed}
              />
            </Box>
          </MuiBox>
        ) : null
      )}
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

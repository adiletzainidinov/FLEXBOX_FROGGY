import { Box } from '@mui/material';
import { FLEXBOX_FROGGY } from '../../data/data';
import Header from '../header/Header';
import { FC } from 'react';
import Instruction from '../instruction/Instruction';
import InputBox from '../inputBox/InputBox';
import Footer from '../footer/Footer';
import SideBar from '../sideBar/SideBar';
import { useAppSelector } from '../../hooks/hooks';
import { MuiBox } from './WrapperStyle';

const Wrapper: FC = () => {
  const { levelCount } = useAppSelector((state) => state.froggy);

  return (
    <>
      {FLEXBOX_FROGGY.map((i) =>
        levelCount === i.level ? (
          <MuiBox key={i.id}>
            <Header level={i.level} levelCount={levelCount} />
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
                levelCount={levelCount}
              />
            </Box>
          </MuiBox>
        ) : null
      )}
    </>
  );
};

export default Wrapper;

//Style

MuiBox;

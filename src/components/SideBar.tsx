import { Box } from '@mui/material';
import { FC } from 'react';
import MuiBox from './MuiBox';
import { useAppSelector } from '../hooks/hooks';
import withClassName from './WithClassName';
import LilipadsBox from './LilipadsBox';

interface SideBarProps {
  sideBar: {
    lilipads: FC[];
  };
  froggyGreenMain: FC;
  classes: {
    first?: string;
    second?: string;
    third?: string;
    four?: string;
    five?: string;
    six?: string;
  };
  froggyGreenYellow: FC;
  froggyGreenRed: FC;
  levelCount: number;
}

const SideBar: FC<SideBarProps> = ({
  sideBar,
  classes,
  froggyGreenMain,
  froggyGreenYellow,
  froggyGreenRed,
  levelCount,
}) => {
  const { inputValue } = useAppSelector((state) => state.froggy);

  const FroggyGreenMainWithClass = withClassName(froggyGreenMain);
  const FroggyGreenYellowWithClass = withClassName(froggyGreenYellow);
  const FroggyGreenRedWithClass = withClassName(froggyGreenRed);

  ('&> level[index]: levelStyles');

  return (
    <Box style={{ width: '100%', height: '100%' }}>
      <MuiBox className={classes.six} inputValue={inputValue}>
        <FroggyGreenMainWithClass
          className={`${classes.first} leverFiveteenClass `}
        />
        {levelCount === 15 ? (
          <FroggyGreenMainWithClass className={classes.first} />
        ) : levelCount === 16 ? (
          <FroggyGreenMainWithClass className={classes.first} />
        ) : (
          <FroggyGreenYellowWithClass className={classes.second} />
        )}
        {levelCount === 15 ? (
          <FroggyGreenMainWithClass className={classes.first} />
        ) : levelCount === 16 ? (
          <FroggyGreenYellowWithClass className={classes.second} />
        ) : (
          <FroggyGreenRedWithClass className={classes.third} />
        )}
        {levelCount === 15 ? (
          <FroggyGreenRedWithClass className={classes.third} />
        ) : (
          <FroggyGreenMainWithClass className={classes.four} />
        )}
        <FroggyGreenMainWithClass className={classes.five} />
      </MuiBox>
      {sideBar.lilipads.map((LilyPadComponent, index) => {
        const LilyPadWithClass = withClassName(LilyPadComponent);
        return (
          <LilipadsBox className={classes.six} key={index}>
            <LilyPadWithClass className={classes.first} />
            <LilyPadWithClass className={classes.second} />
            <LilyPadWithClass className={classes.third} />
            <LilyPadWithClass className={classes.four} />
            <LilyPadWithClass className={classes.five} />
          </LilipadsBox>
        );
      })}
    </Box>
  );
};

export default SideBar;

// style={inputValue.includes('order') ? { order: 1 } : {}}

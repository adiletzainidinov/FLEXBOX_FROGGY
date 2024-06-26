import { FC } from 'react';
import { InstructionPropsType } from '../../types/Types';
import { MuiBox } from './instructionStyle';

const Instruction: FC<InstructionPropsType> = ({
  instruction,
  flexStart,
  flexEnd,
  center,
  spaceBetween,
  spaceAround,
  justifyContent,
  classes,
  justifyContentEnd,
  instructionFiveKey,
  instructionSevenKey,
}) => {
  return (
    <MuiBox>
      <h2 className={classes.six}>
        {instruction.welcomeText} <span>{instruction.justifyContentStyle}</span>{' '}
        {instruction.welcomeTextFoot}
      </h2>
      <h2 className={classes.four}>
        {instructionFiveKey.mainText}{' '}
        <span>{instructionFiveKey.styleText}</span>{' '}
        {instructionFiveKey.justText}{' '}
        <span className={classes.ten}>
          {instructionFiveKey.styleTextSecond}
        </span>
        {instructionFiveKey.justTextSecond}
      </h2>
      <h2 className={classes.five}>
        {instructionSevenKey.mainText}{' '}
        <span>{instructionSevenKey.styleText}</span>{' '}
        {instructionSevenKey.justTextSecond}{' '}
        <span>{instructionSevenKey.styleTextSecond}</span>{' '}
        {instructionSevenKey.justTextSecond}{' '}
        <span className={classes.nine}>
          {instructionSevenKey.styleTextThird}
        </span>{' '}
        {instructionSevenKey.justTextThird}
      </h2>
      <ul className={classes.first}>
        <li className={classes.seven}>
          <p>
            <span> {flexStart.styleText}</span>
            {flexStart.mainText}
          </p>
        </li>
        <li>
          <p>
            <span>{flexEnd.styleText}</span>
            {flexEnd.mainText}
          </p>
        </li>
        <li>
          <p>
            <span>{center.styleText}</span>
            {flexEnd.mainText}
          </p>
        </li>
        <li>
          <p>
            <span>{spaceBetween.styleText}</span> {spaceBetween.mainText}
          </p>
        </li>
        <li className={classes.eight}>
          <p>
            <span>{spaceAround.styleText}</span>
            {spaceAround.mainText}
          </p>
        </li>
        <li className={`${classes.third} ${classes.four} ${classes.five}`}>
          <p>
            {justifyContentEnd.mainText}{' '}
            <span>{justifyContentEnd.styleText}</span>
            {justifyContentEnd.dot}
          </p>
        </li>
      </ul>
      <h3 className={`${classes.first} ${classes.second}`}>
        {justifyContent?.forExample}{' '}
        <span className={classes.second}>{justifyContent?.styleText}</span>{' '}
        {justifyContent?.mainText}
      </h3>
    </MuiBox>
  );
};

export default Instruction;

// Style

MuiBox

import { Box, styled } from '@mui/material';
import { FC } from 'react';

interface InstructionPropsType {
  classes: {
    first?: string;
    second?: string;
    third?: string;
    four?: string;
    five?: string;
    six?: string;
  };
  instruction: {
    welcomeText: string;
    justifyContentStyle: string;
    welcomeTextFoot: string;
  };
  flexStart: {
    mainText: string;
    styleText: string;
  };
  flexEnd: {
    mainText: string;
    styleText: string;
  };
  center: {
    mainText: string;
    styleText: string;
  };
  spaceBetween: {
    mainText: string;
    styleText: string;
  };
  spaceAround: {
    mainText: string;
    styleText: string;
  };
  justifyContent?: {
    forExample?: string;
    mainText?: string;
    styleText?: string;
  };
  justifyContentEnd: {
    mainText: string;
    styleText: string;
    dot: string;
  };
  instructionFiveKey: {
    mainText: string;
    styleText: string;
    justText: string;
    styleTextSecond: string;
    justTextSecond: string;
  };
  instructionSevenKey: {
    mainText: string;
    styleText: string;
    justText: string;
    styleTextSecond: string;
    justTextSecond: string;
    styleTextThird: string;
    justTextThird: string;
  };
}

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
        <span>{instructionFiveKey.styleTextSecond}</span>
        {instructionFiveKey.justTextSecond}
      </h2>
      <h2 className={classes.five}>
        {instructionSevenKey.mainText}{' '}
        <span>{instructionSevenKey.styleText}</span>{' '}
        {instructionSevenKey.justTextSecond}{' '}
        <span>{instructionSevenKey.styleTextSecond}</span>{' '}
        {instructionSevenKey.justTextSecond}{' '}
        <span>{instructionSevenKey.styleTextThird}</span>{' '}
        {instructionSevenKey.justTextThird}
      </h2>
      <ul className={classes.first}>
        <li>
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
        <li className={`${classes.first} ${classes.second}`}>
          <p>
            <span>{spaceAround.styleText}</span>
            {spaceAround.mainText}
          </p>
        </li >
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

const MuiBox = styled(Box)`
  width: 45%;
  margin-left: 20px;
  margin-top: 1.25rem;

  // instruction style

  .leverFirstFour,
  .leverFirstFive,
  .leverSecondFour,
  .leverSecondtFive,
  .leverThirdFour,
  .leverThirdFive,
  .leverFourFour,
  .leverFourFive,
  .leverFiveFour,
  .leverFiveFive,
  .leverSixSix,
  .leverSixFive,
  .leverSevenFive,
  .leverSevenSix,
  .leverEightFive,
  .leverEightFour {
    display: none;
  }

  h2 {
    font-size: 1.0437rem;
    color: #d9ebd6;
    margin-bottom: 1.25rem;
    line-height: 1.5rem;
    span {
      border: none;
      padding-bottom: 2px;
      font-weight: 900;
      background-color: #69b36c;
      border-bottom: 1px solid white;
      padding-right: 2px;
      padding-left: 2px;
    }
  }
  ul {
    margin-bottom: 0.9375rem;
    margin-left: 3.125rem;
  }
  li {
    font-size: 1.0437rem;
    color: #d9ebd6;
    margin-bottom: 0.375rem;
  }
  ul li p span {
    border: none;
    padding-bottom: 2px;
    font-weight: 900;
    background-color: #69b36c;
    padding-right: 2px;
    padding-left: 2px;
  }
  .leverFirstFirst {
    font-size: 1.0437rem;
    color: #d9ebd6;
    margin-bottom: 1.25rem;
    .leverFirstSecond {
      border: none;
      padding-bottom: 2px;
      font-weight: 900;
      background-color: #69b36c;
      padding-right: 2px;
      padding-left: 2px;
    }
  }
  .leverSecondFirst {
    margin-top: 40px;
  }
  .leverThirdFirst li,
  .leverFourFirst li,
  .leverSixFirst li,
  .leverSevenFirst li {
    display: none;
  }
  .leverFirstThird,
  .leverSecondThird {
    display: none;
  }

  // level Third-style

  .leverThirdFirst .leverThirdThird {
    display: block;
    position: relative;
    width: 722px;
    right: 50px;
    color: #d9ebd6;
    font-size: 1.0437rem;
    margin-bottom: 40px;
  }

  // level Five-style
  .leverFiveThird {
    display: none;
  }
  .leverFiveFirst {
    margin-bottom: 40px;
  }

  // level Six-style

  .leverSixFour {
    margin-bottom: 30px;
  }

  // level Seven-style

  .leverSevenFour {
    margin-bottom: 30px;
  }

    // level Eight-style

  .leverEightFirst .leverEightSecond,
  .leverEightFour .leverEightFive {
    display: none;
  }
  .leverEightFirst  {
    margin-bottom: 35px;
  }

  // level Nine-style
`;

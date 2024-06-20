import { Box, styled } from '@mui/material';
import { FC } from 'react';

interface InstructionPropsType {
  classes: {
    first: string;
    second: string;
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
}

const Instruction: FC<InstructionPropsType> = ({
  instruction,
  flexStart,
  flexEnd,
  center,
  spaceBetween,
  spaceAround,
  justifyContent,
  classes
}) => {
  return (
    <MuiBox>
      <h2>
        {instruction.welcomeText} <span>{instruction.justifyContentStyle}</span>{' '}
        {instruction.welcomeTextFoot}
      </h2>
      <ul>
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
        <li>
          <p>
            <span>{spaceAround.styleText}</span>
            {spaceAround.mainText}
          </p>
        </li>
      </ul>
      <h3 className={`${classes.first} ${classes.second}`}>
        {justifyContent?.forExample} <span className={classes.second}>{justifyContent?.styleText}</span>{' '}
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
    margin-bottom: .9375rem;
    margin-left: 3.125rem;
  }
  li {
    font-size: 1.0437rem;
    color: #d9ebd6;
    margin-bottom: .375rem;
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
`;

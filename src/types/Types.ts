import { FC, ReactNode } from 'react';

export interface FlexboxFroggyLevel {
  id?: string;
  level?: number;
  classes: {
    first?: string | undefined;
    second?: string | undefined;
    third?: string | undefined;
    four?: string | undefined;
    five?: string | undefined;
    six?: string | undefined;
    seven?: string | undefined;
    eight?: string | undefined;
    nine?: string | undefined;
    ten?: string | undefined;
  };
  correctAnswer: {
    first?: string;
    second?: string;
    third?: string[];
    four?: string;
    five?: string;
    six?: string;
    seven?: string;
    nine?: string;
    ten?: string;
  };
  instruction: {
    welcomeText: string;
    justifyContentStyle: string;
    welcomeTextFoot: string;
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
  sideBar: {
    lilipads: FC[];
  };
  froggyGreenMain: FC;
  froggyGreenYellow: FC;
  froggyGreenRed: FC;
}

export interface HeaderProps {
  level: number;
  levelCount: number;
}

export interface InputBoxProps {
  levelCount: number;
}

export interface InstructionPropsType {
  classes: {
    first?: string;
    second?: string;
    third?: string;
    four?: string;
    five?: string;
    six?: string;
    seven?: string | undefined;
    eight?: string | undefined;
    nine?: string | undefined;
    ten?: string | undefined;
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

export interface LilipadsBoxType {
  children?: ReactNode;
  className?: string;
}

export interface MuiBoxProps {
  inputValue: string;
  children?: ReactNode;
  className: string | undefined;
}

export interface SideBarProps {
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
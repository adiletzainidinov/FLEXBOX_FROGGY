import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';
import LilipudGreenMain from '../assets/images/LilipudGreenMain';
import FrogGreen from '../assets/images/FrogGreen';
import FrogYellow from '../assets/images/FrogYellow';

export interface FlexboxFroggyLevel {
  id: string;
  level: number;
  classes: {
    first?: string | undefined;
    second?: string | undefined;
    third?: string | undefined;
    four?: string | undefined;
    five?: string | undefined;
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
  sideBar: {
    lilipads: FC[];
  };
  froggyGreenMain: FC;
  froggyGreenYellow: FC;
}

export const FLEXBOX_FROGGY: FlexboxFroggyLevel[] = [
  {
    id: uuidv4().toString(),
    level: 1,
    classes: {
      first: 'leverFirstFirst',
      second: 'leverFirstSecond',
      third: 'leverFirstThird',
      four: 'leverFirstFour',
      five: 'leverFirstFive',
    },
    instruction: {
      welcomeText:
        'Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям, написав CSS код! Направь этого лягушонка на лилию справа, используя свойство',
      justifyContentStyle: 'justify-content',
      welcomeTextFoot:
        'которое выравнивает элементы горизонтально и принимает следующие значения:',
    },
    flexStart: {
      mainText: ': элементы выравниваются по левой стороне контейнера.',
      styleText: 'flex-start',
    },
    flexEnd: {
      mainText: ': элементы выравниваются по правой стороне контейнера.',
      styleText: 'flex-end',
    },
    center: {
      mainText: ': элементы выравниваются по центру контейнера.',
      styleText: 'center',
    },
    spaceBetween: {
      mainText: ': элементы отображаются с одинаковыми отступами между ними.',
      styleText: 'space-between',
    },
    spaceAround: {
      mainText: ': элементы отображаются с одинаковыми отступами вокруг них.',
      styleText: 'space-around',
    },
    justifyContent: {
      forExample: 'Например,',
      mainText: 'сдвинет лягушонка вправо.',
      styleText: 'justify-content: flex-end;',
    },
    sideBar: {
      lilipads: [LilipudGreenMain],
    },
    froggyGreenMain: FrogGreen,
    froggyGreenYellow: FrogYellow,
  },
  // {
  //   id: uuidv4().toString(),
  //   level: 2,
  //   classes: {
  //     first: 'leverSecondFirst',
  //     second: 'leverSecondSecond',
  //     third: 'leverSecondThird',
  //     four: 'leverSecondFour',
  //     five: 'leverSecondtFive',
  //   },
  //   instruction: {
  //     welcomeText: 'Используй ',
  //     justifyContentStyle: 'justify-content',
  //     welcomeTextFoot:
  //       'ещё раз, чтобы помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:',
  //   },
  //   flexStart: {
  //     mainText: ': элементы выравниваются по левой стороне контейнера.',
  //     styleText: 'flex-start',
  //   },
  //   flexEnd: {
  //     mainText: ': элементы выравниваются по правой стороне контейнера.',
  //     styleText: 'flex-end',
  //   },
  //   center: {
  //     mainText: ': элементы выравниваются по центру контейнера.',
  //     styleText: 'center',
  //   },
  //   spaceBetween: {
  //     mainText: ': элементы отображаются с одинаковыми отступами между ними.',
  //     styleText: 'space-between',
  //   },
  //   spaceAround: {
  //     mainText: ': элементы отображаются с одинаковыми отступами вокруг них.',
  //     styleText: 'space-around',
  //   },
  //   justifyContent: {
  //     forExample: '',
  //     mainText: '',
  //     styleText: '',
  //   },
  //   sideBar: {
  //     lilipads: [LilipudGreenMain],
  //   },
  //   froggyGreenMain: FrogGreen,
  //   froggyGreenYellow: FrogYellow,
  // },
];

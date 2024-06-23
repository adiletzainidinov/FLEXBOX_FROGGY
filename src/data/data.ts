import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';
import LilipudGreenMain from '../assets/images/LilipudGreenMain';
import FrogGreen from '../assets/images/FrogGreen';
import FrogYellow from '../assets/images/FrogYellow';
import FrogRed from '../assets/images/FrogRed';

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

export const FLEXBOX_FROGGY: FlexboxFroggyLevel[] = [
  //first
  {
    id: uuidv4(),
    level: 1,
    classes: {
      first: 'leverFirstFirst',
      second: 'leverFirstSecond',
      third: 'leverFirstThird',
      four: 'leverFirstFour',
      five: 'leverFirstFive',
      six: 'leverFirstSix',
    },
    correctAnswer: {
      first: 'justify-content: end',
      second: 'justify-content: flex-end',
      third: ['justify-content: end;'],
      four: 'justify-content: flex-end',
    },
    instruction: {
      welcomeText:
        'Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям, написав CSS код! Направь этого лягушонка на лилию справа, используя свойство',
      justifyContentStyle: 'justify-content',
      welcomeTextFoot:
        'которое выравнивает элементы горизонтально и принимает следующие значения:',
    },
    instructionFiveKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '.',
    },
    instructionSevenKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '',
      styleTextThird: '',
      justTextThird: '',
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
    justifyContentEnd: {
      mainText: '',
      styleText: '',
      dot: '',
    },
    sideBar: {
      lilipads: [LilipudGreenMain],
    },
    froggyGreenMain: FrogGreen,
    froggyGreenYellow: FrogYellow,
    froggyGreenRed: FrogRed,
  },
  //second
  {
    id: uuidv4(),
    level: 2,
    classes: {
      first: 'leverSecondFirst',
      second: 'leverSecondSecond',
      third: 'leverSecondThird',
      four: 'leverSecondFour',
      five: 'leverSecondtFive',
      six: 'leverSecondSix',
    },
    correctAnswer: {
      first: 'justify-content: center;',
      second: 'justify-content: center',
      third: ['none'],
      four: 'none',
    },
    instruction: {
      welcomeText: 'Используй ',
      justifyContentStyle: 'justify-content',
      welcomeTextFoot:
        'ещё раз, чтобы помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:',
    },
    instructionFiveKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '.',
    },
    instructionSevenKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '',
      styleTextThird: '',
      justTextThird: '',
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
      forExample: '',
      mainText: '',
      styleText: '',
    },
    justifyContentEnd: {
      mainText: '',
      styleText: '',
      dot: '',
    },
    sideBar: {
      lilipads: [LilipudGreenMain],
    },
    froggyGreenMain: FrogGreen,
    froggyGreenYellow: FrogYellow,
    froggyGreenRed: FrogRed,
  },
  //third
  {
    id: uuidv4(),
    level: 3,
    classes: {
      first: 'leverThirdFirst',
      second: 'leverThirdSecond',
      third: 'leverThirdThird',
      four: 'leverThirdFour',
      five: 'leverThirdFive',
      six: 'leverThirdSix',
    },
    correctAnswer: {
      first: 'justify-content: space-around;',
      second: 'justify-content: space-around',
      third: ['none'],
      four: 'none',
    },
    instruction: {
      welcomeText:
        'Помоги всем трём лягушатам найти их лилии, просто используя',
      justifyContentStyle: 'justify-content',
      welcomeTextFoot: 'В этот раз у лилий много пространства вокруг.',
    },
    instructionFiveKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '.',
    },
    instructionSevenKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '',
      styleTextThird: '',
      justTextThird: '',
    },
    flexStart: {
      mainText: '',
      styleText: '',
    },
    flexEnd: {
      mainText: '',
      styleText: '',
    },
    center: {
      mainText: '',
      styleText: '',
    },
    spaceBetween: {
      mainText: '',
      styleText: '',
    },
    spaceAround: {
      mainText: '',
      styleText: '',
    },
    justifyContent: {
      forExample: '',
      mainText: '',
      styleText: '',
    },
    justifyContentEnd: {
      mainText:
        'Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести курсор на название свойства, чтобы посмотреть их. Попробуй навести курсор на',
      styleText: 'justify-content',
      dot: '.',
    },
    sideBar: {
      lilipads: [LilipudGreenMain],
    },
    froggyGreenMain: FrogGreen,
    froggyGreenYellow: FrogYellow,
    froggyGreenRed: FrogRed,
  },
  //four
  {
    id: uuidv4(),
    level: 4,
    classes: {
      first: 'leverFourFirst',
      second: 'leverFourSecond',
      third: 'leverFourThird',
      four: 'leverFourFour',
      five: 'leverFourFive',
      six: 'leverFourSix',
    },
    correctAnswer: {
      first: 'justify-content: space-between;',
      second: 'justify-content: space-between',
      third: ['none'],
      four: 'none',
    },
    instruction: {
      welcomeText:
        'Теперь лилии по краям уплыли к берегам, увеличив пространство между ними. Используй',
      justifyContentStyle: 'justify-content',
      welcomeTextFoot: 'В этот раз у лилий одинаковое расстояние между ними.',
    },
    instructionFiveKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '.',
    },
    instructionSevenKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '',
      styleTextThird: '',
      justTextThird: '',
    },
    flexStart: {
      mainText: '',
      styleText: '',
    },
    flexEnd: {
      mainText: '',
      styleText: '',
    },
    center: {
      mainText: '',
      styleText: '',
    },
    spaceBetween: {
      mainText: '',
      styleText: '',
    },
    spaceAround: {
      mainText: '',
      styleText: '',
    },
    justifyContent: {
      forExample: '',
      mainText: '',
      styleText: '',
    },
    justifyContentEnd: {
      mainText: '',
      styleText: '',
      dot: '',
    },
    sideBar: {
      lilipads: [LilipudGreenMain],
    },
    froggyGreenMain: FrogGreen,
    froggyGreenYellow: FrogYellow,
    froggyGreenRed: FrogRed,
  },
  //five
  {
    id: uuidv4(),
    level: 5,
    classes: {
      first: 'leverFiveFirst',
      second: 'leverFiveSecond',
      third: 'leverFiveThird',
      four: 'leverFiveFour',
      five: 'leverFiveFive',
      six: 'leverFiveSix',
    },
    correctAnswer: {
      first: 'align-items: end;',
      second: 'align-items: end',
      third: ['align-items: flex-end;', 'align-items: flex-end'],
      four: 'none',
    },
    instruction: {
      welcomeText: 'Теперь используй',
      justifyContentStyle: 'align-items',
      welcomeTextFoot:
        ', чтобы помочь лягушатам добраться до нижней части пруда. Это свойство CSS выравнивает элементы вертикально и принимает следующие значения:',
    },
    instructionFiveKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '.',
    },
    instructionSevenKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '',
      styleTextThird: '',
      justTextThird: '',
    },
    flexStart: {
      mainText: ': элементы выравниваются по верхнему краю контейнера.',
      styleText: 'flex-start',
    },
    flexEnd: {
      mainText: ': элементы выравниваются по нижнему краю контейнера.',
      styleText: 'flex-end',
    },
    center: {
      mainText: ': элементы выравниваются вертикально по центру контейнера.',
      styleText: 'center',
    },
    spaceBetween: {
      mainText: ': элементы отображаются на базовой линии контейнера.',
      styleText: 'baseline',
    },
    spaceAround: {
      mainText: ': элементы растягиваются, чтобы заполнить контейнер.',
      styleText: 'stretch',
    },
    justifyContent: {
      forExample: '',
      mainText: '',
      styleText: '',
    },
    justifyContentEnd: {
      mainText: '',
      styleText: '',
      dot: '',
    },
    sideBar: {
      lilipads: [LilipudGreenMain],
    },
    froggyGreenMain: FrogGreen,
    froggyGreenYellow: FrogYellow,
    froggyGreenRed: FrogRed,
  },
  //six
  {
    id: uuidv4(),
    level: 6,
    classes: {
      first: 'leverSixFirst',
      second: 'leverSixSecond',
      third: 'leverSixThird',
      four: 'leverSixFour',
      five: 'leverSixFive',
      six: 'leverSixSix',
    },
    correctAnswer: {
      first: 'align-items: center; justify-content: center;',
      second: 'align-items: center; justify-content: center',
      third: [
        'justify-content: center; align-items: center;',
        'justify-content: center; align-items: center',
      ],
      four: 'none',
    },
    instruction: {
      welcomeText: '',
      justifyContentStyle: '',
      welcomeTextFoot: '',
    },
    instructionFiveKey: {
      mainText: 'Направь лягушонка в центр пруда, используя',
      styleText: 'justify-content',
      justText: 'и',
      styleTextSecond: 'align-items',
      justTextSecond: 'вместе.',
    },
    instructionSevenKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '',
      styleTextThird: '',
      justTextThird: '',
    },
    flexStart: {
      mainText: '',
      styleText: '',
    },
    flexEnd: {
      mainText: '',
      styleText: '',
    },
    center: {
      mainText: '',
      styleText: '',
    },
    spaceBetween: {
      mainText: '',
      styleText: '',
    },
    spaceAround: {
      mainText: '',
      styleText: '',
    },
    justifyContent: {
      forExample: '',
      mainText: '',
      styleText: '',
    },
    justifyContentEnd: {
      mainText: '',
      styleText: '',
      dot: '',
    },
    sideBar: {
      lilipads: [LilipudGreenMain],
    },
    froggyGreenMain: FrogGreen,
    froggyGreenYellow: FrogYellow,
    froggyGreenRed: FrogRed,
  },
  //seven
  {
    id: uuidv4(),
    level: 7,
    classes: {
      first: 'leverSevenFirst',
      second: 'leverSevenSecond',
      third: 'leverSevenThird',
      four: 'leverSevenFour',
      five: 'leverSevenFive',
      six: 'leverSevenSix',
    },
    correctAnswer: {
      first: 'justify-content: space-around; align-items: end;',
      second: 'justify-content: space-around; align-items: end',
      third: [
        'align-items: end; justify-content: space-around;',
        'align-items: end; justify-content: space-around',
        'justify-content: space-around; align-items: flex-end;',
        'justify-content: space-around; align-items: flex-end',
        'align-items: flex-end; justify-content: space-around;',
        'align-items: flex-end; justify-content: space-around',
      ],
      four: 'none',
    },
    instruction: {
      welcomeText: '',
      justifyContentStyle: '',
      welcomeTextFoot: '',
    },
    instructionFiveKey: {
      mainText:
        'Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно большим пространством вокруг них. Используй комбинацию',
      styleText: 'justify-content',
      justText: 'и',
      styleTextSecond: 'align-items',
      justTextSecond: '.',
    },
    instructionSevenKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '',
      styleTextThird: '',
      justTextThird: '',
    },
    flexStart: {
      mainText: '',
      styleText: '',
    },
    flexEnd: {
      mainText: '',
      styleText: '',
    },
    center: {
      mainText: '',
      styleText: '',
    },
    spaceBetween: {
      mainText: '',
      styleText: '',
    },
    spaceAround: {
      mainText: '',
      styleText: '',
    },
    justifyContent: {
      forExample: '',
      mainText: '',
      styleText: '',
    },
    justifyContentEnd: {
      mainText: '',
      styleText: '',
      dot: '',
    },
    sideBar: {
      lilipads: [LilipudGreenMain],
    },
    froggyGreenMain: FrogGreen,
    froggyGreenYellow: FrogYellow,
    froggyGreenRed: FrogRed,
  },
  //eight
  {
    id: uuidv4(),
    level: 8,
    classes: {
      first: 'leverEightFirst',
      second: 'leverEightSecond',
      third: 'leverEightThird',
      four: 'leverEightFour',
      five: 'leverEightFive',
      six: 'leverEightSix',
    },
    correctAnswer: {
      first: 'flex-direction: row-reverse;',
      second: 'flex-direction: row-reverse',
      third: ['none'],
      four: 'none',
    },
    instruction: {
      welcomeText: 'Лягушатам нужно выстроиться в том же порядке, что и лилии, используя',
      justifyContentStyle: 'flex-direction',
      welcomeTextFoot: '. Это свойство CSS задает направление, в котором будут расположены элементы в контейнере, и принимает следующие значения:',
    },
    instructionFiveKey: {
      mainText:
        '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '',
    },
    instructionSevenKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '',
      styleTextThird: '',
      justTextThird: '',
    },
    flexStart: {
      mainText: ': элементы размещаются по направлению текста.',
      styleText: 'row',
    },
    flexEnd: {
      mainText: ': элементы отображаются в обратном порядке к направлению текста.',
      styleText: 'row-reverse',
    },
    center: {
      mainText: ': элементы располагаются сверху вниз.',
      styleText: 'column',
    },
    spaceBetween: {
      mainText: ': элементы располагаются снизу вверх.',
      styleText: 'column-reverse',
    },
    spaceAround: {
      mainText: '',
      styleText: '',
    },
    justifyContent: {
      forExample: '',
      mainText: '',
      styleText: '',
    },
    justifyContentEnd: {
      mainText: '',
      styleText: '',
      dot: '',
    },
    sideBar: {
      lilipads: [LilipudGreenMain],
    },
    froggyGreenMain: FrogGreen,
    froggyGreenYellow: FrogYellow,
    froggyGreenRed: FrogRed,
  },
  //nine
  {
    id: uuidv4(),
    level: 9,
    classes: {
      first: 'leverNineFirst',
      second: 'leverNineSecond',
      third: 'leverNineThird',
      four: 'leverNineFour',
      five: 'leverNineFive',
      six: 'leverNineSix',
    },
    correctAnswer: {
      first: 'flex-direction: column;',
      second: 'flex-direction: column',
      third: ['none'],
      four: 'none',
    },
    instruction: {
      welcomeText: 'Помоги лягушатам расположиться на своих лилиях, используя',
      justifyContentStyle: 'flex-direction',
      welcomeTextFoot: '. Это свойство CSS задает направление, в котором располагаются элементы в контейнере, и принимает следующие значения:',
    },
    instructionFiveKey: {
      mainText:
        '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '',
    },
    instructionSevenKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '',
      styleTextThird: '',
      justTextThird: '',
    },
    flexStart: {
      mainText: ': элементы размещаются по направлению текста.',
      styleText: 'row',
    },
    flexEnd: {
      mainText: ': элементы отображаются в обратном порядке к направлению текста.',
      styleText: 'row-reverse',
    },
    center: {
      mainText: ': элементы распологаются сверху вниз.',
      styleText: 'column',
    },
    spaceBetween: {
      mainText: ': элементы распологаются снизу вверх.',
      styleText: 'column-reverse',
    },
    spaceAround: {
      mainText: '',
      styleText: '',
    },
    justifyContent: {
      forExample: '',
      mainText: '',
      styleText: '',
    },
    justifyContentEnd: {
      mainText: '',
      styleText: '',
      dot: '',
    },
    sideBar: {
      lilipads: [LilipudGreenMain],
    },
    froggyGreenMain: FrogGreen,
    froggyGreenYellow: FrogYellow,
    froggyGreenRed: FrogRed,
  },
];

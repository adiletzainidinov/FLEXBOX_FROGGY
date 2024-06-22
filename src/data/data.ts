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
    third?: string;
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
      third: 'justify-content: end;',
      four: 'justify-content: flex-end;',
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
      third: 'none',
      four: 'none',
    },
    instruction: {
      welcomeText: 'Используй ',
      justifyContentStyle: 'justify-content',
      welcomeTextFoot:
        'ещё раз, чтобы помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:',
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
      third: 'none',
      four: 'none',
    },
    instruction: {
      welcomeText:
        'Помоги всем трём лягушатам найти их лилии, просто используя',
      justifyContentStyle: 'justify-content',
      welcomeTextFoot: 'В этот раз у лилий много пространства вокруг.',
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
      third: 'none',
      four: 'none',
    },
    instruction: {
      welcomeText:
        'Теперь лилии по краям уплыли к берегам, увеличив пространство между ними. Используй',
      justifyContentStyle: 'justify-content',
      welcomeTextFoot: 'В этот раз у лилий одинаковое расстояние между ними.',
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
        '',
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
      third: 'none',
      four: 'none',
    },
    instruction: {
      welcomeText:
        'Теперь используй',
      justifyContentStyle: 'align-items',
      welcomeTextFoot: ', чтобы помочь лягушатам добраться до нижней части пруда. Это свойство CSS выравнивает элементы вертикально и принимает следующие значения:',
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
      mainText:
        '',
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

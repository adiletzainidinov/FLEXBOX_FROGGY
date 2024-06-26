import { FlexboxFroggyLevel } from './../types/Types';
import { v4 as uuidv4 } from 'uuid';
import LilipudGreenMain from '../assets/images/LilipudGreenMain';
import FrogGreen from '../assets/images/FrogGreen';
import FrogYellow from '../assets/images/FrogYellow';
import FrogRed from '../assets/images/FrogRed';


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
      seven: 'none',
      eight: 'none',
      nine: 'none',
      ten: 'none',
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
      seven: 'none',
      eight: 'none',
      nine: 'none',
      ten: 'none',
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
      seven: 'none',
      eight: 'none',
      nine: 'none',
      ten: 'none',
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
      seven: 'none',
      eight: 'none',
      nine: 'none',
      ten: 'none',
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
      seven: 'none',
      eight: 'none',
      nine: 'none',
      ten: 'none',
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
      seven: 'none',
      eight: 'none',
      nine: 'none',
      ten: 'none',
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
      seven: 'none',
      eight: 'none',
      nine: 'none',
      ten: 'none',
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
      seven: 'leverEightSeven',
      eight: 'leverEightEight',
      nine: 'none',
      ten: 'none',
    },
    correctAnswer: {
      first: 'flex-direction: row-reverse;',
      second: 'flex-direction: row-reverse',
      third: ['none'],
      four: 'none',
    },
    instruction: {
      welcomeText:
        'Лягушатам нужно выстроиться в том же порядке, что и лилии, используя',
      justifyContentStyle: 'flex-direction',
      welcomeTextFoot:
        '. Это свойство CSS задает направление, в котором будут расположены элементы в контейнере, и принимает следующие значения:',
    },
    instructionFiveKey: {
      mainText: '',
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
      mainText:
        ': элементы отображаются в обратном порядке к направлению текста.',
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
      seven: 'none',
      eight: 'leverNineEight',
      nine: 'leverNineNine',
      ten: 'none',
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
      welcomeTextFoot:
        '. Это свойство CSS задает направление, в котором располагаются элементы в контейнере, и принимает следующие значения:',
    },
    instructionFiveKey: {
      mainText: '',
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
      mainText:
        ': элементы отображаются в обратном порядке к направлению текста.',
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
  //ten
  {
    id: uuidv4(),
    level: 10,
    classes: {
      first: 'leverTenFirst',
      second: 'leverTenSecond',
      third: 'leverTenThird',
      four: 'leverTenFour',
      five: 'leverTenFive',
      six: 'leverTenSix',
      seven: 'leverTenSeven',
      eight: 'none',
      nine: 'none',
      ten: 'none',
    },
    correctAnswer: {
      first: 'flex-direction: row-reverse; justify-content: start;',
      second: 'flex-direction: row-reverse; justify-content: start',
      third: [
        'justify-content: start; flex-direction: row-reverse;',
        'justify-content: start; flex-direction: row-reverse',
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
        'Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на своих местах, всё же придётся применить и ',
      styleText: 'flex-direction',
      justText: ', и',
      styleTextSecond: 'justify-content',
      justTextSecond: ', чтобы поместить их на свои лилии.',
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
      mainText:
        'Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами.',
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
  //eleven
  {
    id: uuidv4(),
    level: 11,
    classes: {
      first: 'leverElevenFirst',
      second: 'leverElevenSecond',
      third: 'leverElevenThird',
      four: 'leverElevenFour',
      five: 'leverElevenFive',
      six: 'leverElevenSix',
      seven: 'none',
      eight: 'none',
      nine: 'leverElevenNine',
      ten: 'none',
    },
    correctAnswer: {
      first: 'flex-direction: column; justify-content: end;',
      second: 'flex-direction: column; justify-content: end',
      third: [
        'justify-content: end; flex-direction: column;',
        'justify-content: end; flex-direction: column',
        'flex-direction: column; justify-content: flex-end;',
        'flex-direction: column; justify-content: flex-end',
        'justify-content: flex-end; flex-direction: column;',
        'justify-content: flex-end; flex-direction: column',
      ],
      four: 'none',
    },
    instruction: {
      welcomeText: '',
      justifyContentStyle: '',
      welcomeTextFoot: '',
    },
    instructionFiveKey: {
      mainText: 'Помоги лягушатам найти их лилии с помощью',
      styleText: 'flex-direction',
      justText: ', и',
      styleTextSecond: 'justify-content',
      justTextSecond: '.',
    },
    instructionSevenKey: {
      mainText: 'Заметь, когда в качестве направления выбрана колонка, то',
      styleText: 'justify-content',
      justText: 'влияет на вертикальное выравнивание, а',
      styleTextSecond: 'align-items',
      justTextSecond: 'влияет на вертикальное выравнивание, а',
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
  // twelve
  {
    id: uuidv4(),
    level: 12,
    classes: {
      first: 'levertwelveFirst',
      second: 'levertwelveSecond',
      third: 'levertwelveThird',
      four: 'levertwelveFour',
      five: 'levertwelveFive',
      six: 'levertwelveSix',
      seven: 'none',
      eight: 'none',
      nine: 'levertwelveNine',
      ten: 'none',
    },
    correctAnswer: {
      first: 'flex-direction: column-reverse; justify-content: space-between;',
      second: 'flex-direction: column-reverse; justify-content: space-between',
      third: [
        'justify-content: space-between; flex-direction: column-reverse;',
        'justify-content: space-between; flex-direction: column-reverse',
      ],
      four: 'none',
    },
    instruction: {
      welcomeText: '',
      justifyContentStyle: '',
      welcomeTextFoot: '',
    },
    instructionFiveKey: {
      mainText: 'Помоги лягушатам найти их лилии с помощью',
      styleText: 'flex-direction',
      justText: ', и',
      styleTextSecond: 'justify-content',
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
  // thirteen
  {
    id: uuidv4(),
    level: 13,
    classes: {
      first: 'leverthirteenFirst',
      second: 'leverthirteenSecond',
      third: 'leverthirteenThird',
      four: 'leverthirteenFour',
      five: 'leverthirteenFive',
      six: 'leverthirteenSix',
      seven: 'none',
      eight: 'none',
      nine: 'leverthirteenNine',
      ten: 'none',
    },
    correctAnswer: {
      first: 'none',
      second: 'none',
      third: [
        'align-items: flex-end; justify-content: center; flex-direction: row-reverse;',
        'justify-content: center; align-items: flex-end; flex-direction: row-reverse;',
        'flex-direction: row-reverse; align-items: flex-end; justify-content: center;',
        'align-items: flex-end; flex-direction: row-reverse; justify-content: center;',
        'justify-content: center; flex-direction: row-reverse; align-items: flex-end;',
        'flex-direction: row-reverse; justify-content: center; align-items: flex-end;',
        'align-items: flex-end; justify-content: center; flex-direction: row-reverse',
        'justify-content: center; align-items: flex-end; flex-direction: row-reverse',
        'flex-direction: row-reverse; align-items: flex-end; justify-content: center',
        'align-items: flex-end; flex-direction: row-reverse; justify-content: center',
        'justify-content: center; flex-direction: row-reverse; align-items: flex-end',
        'flex-direction: row-reverse; justify-content: center; align-items: flex-end',
        'align-items: end; justify-content: center; flex-direction: row-reverse;',
        'align-items: end; justify-content: center; flex-direction: row-reverse',
        'justify-content: center; align-items: end; flex-direction: row-reverse;',
        'justify-content: center; flex-direction: row-reverse; align-items: end;',
        'flex-direction: row-reverse; justify-content: center; align-items: end;',
        'flex-direction: row-reverse; align-items: end; justify-content: center;',
        'align-items: end; flex-direction: row-reverse; justify-content: center;',
        'align-items: end; justify-content: center; flex-direction: row-reverse',
        'justify-content: center; align-items: end; flex-direction: row-reverse',
        'justify-content: center; flex-direction: row-reverse; align-items: end',
        'flex-direction: row-reverse; justify-content: center; align-items: end',
        'flex-direction: row-reverse; align-items: end; justify-content: center',
        'align-items: end; flex-direction: row-reverse; justify-content: center',
      ],
      four: 'none',
    },
    instruction: {
      welcomeText: '',
      justifyContentStyle: '',
      welcomeTextFoot: '',
    },
    instructionFiveKey: {
      mainText: '',
      styleText: '',
      justText: '',
      styleTextSecond: '',
      justTextSecond: '',
    },
    instructionSevenKey: {
      mainText: 'Помоги лягушатам найти их лилии с помощью',
      styleText: 'flex-direction',
      justText: ',',
      styleTextSecond: 'justify-content',
      justTextSecond: 'и',
      styleTextThird: 'align-items',
      justTextThird: '.',
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
  // fourteen
  {
    id: uuidv4(),
    level: 14,
    classes: {
      first: 'leverfourteenFirst',
      second: 'leverfourteenSecond',
      third: 'leverfourteenThird',
      four: 'leverfourteenFour',
      five: 'leverfourteenFive',
      six: 'leverfourteenSix',
      seven: 'none',
      eight: 'none',
      nine: 'leverfourteenNine',
      ten: 'leverfourteenTen',
    },
    correctAnswer: {
      first: `${'order:'} ${1};`,
      second: `${'order:'} ${1}`,
      third: ['none'],
      four: 'none',
    },
    instruction: {
      welcomeText:
        'Иногда изменения порядка отображения элементов в контейнере недостаточно. В таких случаях мы можем применить свойство',
      justifyContentStyle: 'order',
      welcomeTextFoot:
        'для конкретных элементов. По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.',
    },
    instructionFiveKey: {
      mainText: 'Используй свойство',
      styleText: 'order',
      justText: ', чтобы разместить лягушат на своих лилиях.',
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
  // fiveteen
  {
    id: uuidv4(),
    level: 15,
    classes: {
      first: 'leverFiveteenFirst',
      second: 'leverFiveteenSecond',
      third: 'leverFiveteenThird',
      four: 'leverFiveteenFour',
      five: 'leverFiveteenFive',
      six: 'leverFiveteenSix',
      seven: 'none',
      eight: 'none',
      nine: 'leverFiveteenNine',
      ten: 'leverFiveteenTen',
    },
    correctAnswer: {
      first: `${'order:'} ${-1};`,
      second: `${'order:'} ${-1}`,
      third: ['none'],
      four: 'none',
    },
    instruction: {
      welcomeText: 'Используй свойство',
      justifyContentStyle: 'order',
      welcomeTextFoot: ', чтобы отправить красного лягушонка на его лилию.',
    },
    instructionFiveKey: {
      mainText: '',
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
  // sixteen
  {
    id: uuidv4(),
    level: 16,
    classes: {
      first: 'leversixteenFirst',
      second: 'leversixteenSecond',
      third: 'leversixteenThird',
      four: 'leversixteenFour',
      five: 'leversixteenFive',
      six: 'leversixteenSix',
      seven: 'none',
      eight: 'none',
      nine: 'leversixteenNine',
      ten: 'leversixteenTen',
    },
    correctAnswer: {
      first: 'alignSelf: end;',
      second: 'alignSelf: end',
      third: ['none'],
      four: 'none',
    },
    instruction: {
      welcomeText: '',
      justifyContentStyle: '',
      welcomeTextFoot: '',
    },
    instructionFiveKey: {
      mainText:
        'Ещё одно свойство, которое ты можешь применить к определенному элементу — это',
      styleText: 'align-self',
      justText: '. Это свойство принимает те же значения, что и',
      styleTextSecond: 'align-items',
      justTextSecond:
        '.Напишите camelCase Чтобы сработали стили.пример: alinSelf: И без flex',
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
];

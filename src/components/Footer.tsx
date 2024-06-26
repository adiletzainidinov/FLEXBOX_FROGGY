import { Box, Typography, styled } from '@mui/material';
import { FC, useState } from 'react';
import CustomModal from './UI/Modal';

const Footer: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <MuiBox>
      <h4>
        Игра Flexbox Froggy создал Zainidinov Adilet{' '}
        <ul>
          <li>
            <a href="https://www.instagram.com/p/C06UDV6sFGp/?utm_source=ig_web_copy_link">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://wa.me/996998083828">WhatsApp</a>
          </li>
          <li>
            <a href="https://github.com/adiletzainidinov">gitHub</a>
          </li>
          <li className="setting">
            <a onClick={handleModalOpen}>settings</a>
          </li>
        </ul>
      </h4>
      <h5>
        Хотите пообщаться с автором? Позвоните на номер{' '}
        <a href="#" className="myNumber">
          {' '}
          +996 998 08 38 28
        </a>
      </h5>
      <CustomModal
        open={modalOpen}
        onClose={handleModalClose}
        className="customModal"
      >
        <MuiBoxModal>
          <Typography className="language">Язык</Typography>
          <select>
            <option>Русский</option>
            <option>Кыргызча</option>
            <option>Englich</option>
          </select>
          <Typography className='hardless'>Сложность</Typography>
          <Box className="newbie">
            <input type="radio" /> <Typography>Новичок</Typography>
          </Box>
          <Box className="average">
            <input type="radio" />{' '}
            <Typography>Средняя — без подсказок</Typography>
          </Box>
          <Box className="expert">
            <input type="radio" />{' '}
            <Typography>Эксперт — без подсказок и случайные уровни</Typography>
          </Box>
          <Box>Режим для дальтоников</Box>
          <Box className="switchedOff">
            <input type="radio" /> <Typography>Выключен</Typography>
          </Box>
          <Box className="included">
            <input type="radio" /> <Typography>Включён</Typography>
          </Box>
        </MuiBoxModal>
      </CustomModal>
    </MuiBox>
  );
};

export default Footer;

const MuiBox = styled(Box)`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #d9ecda;
  font-size: 14px;
  a {
    margin-left: 5px;
    font-weight: 300;
    font-size: 13px;
  }
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    margin-bottom: 20px;

    ul {
      display: flex;
      list-style: none;
      li {
        margin-left: 5px;
        margin-bottom: 2px;
      }
    }
  }
  h5 {
    font-weight: 300;
    a {
      font-size: 11px;
    }
  }
  .setting {
    a {
      border: none;
      padding-bottom: 2px;
      font-weight: 900;
      background-color: #69b36c;
      padding: 3px 5px;
      border-radius: 2px;
      padding-bottom: 5px;
    }
  }
`;

const MuiBoxModal = styled(Box)`
  .included,
  .switchedOff,
  .expert,
  .average,
  .newbie {
    display: flex;
    gap: 8px;
  }
  .language {
    margin-bottom: 2px;
  }
  .hardless {
    margin-top: 5px;
    margin-bottom: 3px;
  }
  .expert {
    margin-bottom: 10px;
    margin-top: 2px;
    input {
      margin-bottom: 25px;
    }
  }
  .switchedOff {
    margin-top: 3px;
  }
`;

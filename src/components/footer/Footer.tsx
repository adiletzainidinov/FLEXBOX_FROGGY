import { Box, Typography } from '@mui/material';
import { FC, useState } from 'react';
import CustomModal from '../UI/Modal';
import { MuiBox, MuiBoxModal } from './FooterStyle';

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
          <Typography className="hardless">Сложность</Typography>
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

// Style
MuiBox;
MuiBoxModal;

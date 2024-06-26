import { FC } from 'react';
import { LilipadsBoxContainer } from './LilipadsBox.style';
import { LilipadsBoxType } from '../../types/Types';

export const LilipadsBox: FC<LilipadsBoxType> = ({ className, children }) => {
  return (
    <LilipadsBoxContainer className={className}>
      {children}
    </LilipadsBoxContainer>
  );
};

export default LilipadsBox;

LilipadsBoxContainer;

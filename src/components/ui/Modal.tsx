import styled from 'styled-components';
import Color from '../../style/color';
import { Close } from './Icon';
import useOutsideClick from '../../hooks/useOutsideClick';

const S = {
  Container: styled.div`
    box-shadow: 0px 4px 14px 6px #97979726;
    background-color: ${Color.Palette.white};
    border-radius: 8px;
    padding: 8px;
  `,
  Header: styled.div`
    text-align: right;
  `,
};

type Props = {
  onOutSideHandler?: () => void;
  onCloseHandler: () => void;
  children: React.ReactNode;
};

const Modal = ({ onCloseHandler, onOutSideHandler, children }: Props) => {
  const ref = useOutsideClick(() => {
    if (onOutSideHandler) {
      onOutSideHandler();
    }
  });

  return (
    <S.Container ref={ref}>
      <S.Header>
        <span onClick={onCloseHandler}>
          <Close />
        </span>
      </S.Header>
      {children}
    </S.Container>
  );
};

export default Modal;

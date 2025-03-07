import { styled } from 'styled-components';
import Color from '../../style/color';
import Typo from '../../style/typo';

const S = {
  Container: styled.button`
    width: 72px;
    height: 35px;
    border-radius: 8px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    border: 1px solid ${Color.Text.subtitle};
    background-color: ${Color.Palette.white};

    &:hover {
      opacity: 0.8;
    }
  `,
};

// NOTE : 추후 theme 작성 필요
type Props = {
  label: string;
  onClick?: () => void;
};

const OutlineButton = ({ label, onClick }: Props) => {
  return (
    <S.Container onClick={onClick}>
      <Typo.Body2 color={Color.Text.subtitle}>{label}</Typo.Body2>
    </S.Container>
  );
};

export default OutlineButton;

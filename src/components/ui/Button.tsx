import styled from 'styled-components';
import Color from '../../style/color';
import Typo from '../../style/typo';
import Utils from '../../style/utils';

type ButtonProps = {
  width: number;
  backgroundColor: string;
};

const S = {
  Container: styled.button<ButtonProps>`
    ${Utils.flexCenter}
    width: ${(props) => props.width}px;
    height: 48px;
    border-radius: 8px;
    padding: 13px 20px;
    background-color: ${(props) => props.backgroundColor};
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  `,
  RightIconContainer: styled.span`
    margin-left: 5px;
  `,
};

type Props = {
  label: string;
  onClick?: () => void;
  width: 115 | 240; // NOTE : 현재는 사용하는 범위가 2 종류여서 이렇게 지정 추후 변경 필요
  theme: 'primary' | 'lightgray';
  rightIcon?: React.ReactElement;
};

const STYLE_MAP = {
  primary: {
    color: Color.Palette.white,
    backgroundColor: Color.Palette.primary,
  },
  lightgray: {
    color: Color.Text.secondary,
    backgroundColor: Color.Palette.lightgrey,
  },
};

// NOTE : Cation의 line-height로 인하여 가운데 정렬이 맞지 않음 처리 방법에 대해 논의 필요

const Button = ({ label, onClick, width, theme, rightIcon }: Props) => {
  const { color, backgroundColor } = STYLE_MAP[theme];

  return (
    <S.Container
      width={width}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      <Typo.Cation color={color}>{label}</Typo.Cation>
      {rightIcon && <S.RightIconContainer>{rightIcon}</S.RightIconContainer>}
    </S.Container>
  );
};

export default Button;

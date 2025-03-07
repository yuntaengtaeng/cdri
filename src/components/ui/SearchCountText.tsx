import styled from 'styled-components';
import Color from '../../style/color';
import Utils from '../../style/utils';

const S = {
  Container: styled.div`
    ${Utils.flexCenter};
    gap: 16px;
  `,
  Right: styled.div`
    ${Utils.flexCenter};
  `,

  // NOTE : 정의된 typo 속성 중에 없기에 임의로 작성 커뮤니케이션 후 결정 필요
  Typo: styled.p<{ color?: string }>`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;

    color: ${(props) => props.color || Color.Text.primary};
  `,
};

type Props = {
  label: string;
  count: number;
};

const SearchCountText = ({ label, count }: Props) => {
  return (
    <S.Container>
      <S.Typo>{label}</S.Typo>
      <S.Right>
        <S.Typo>총&nbsp;</S.Typo>
        <S.Typo color={Color.Palette.primary}> {count}</S.Typo>
        <S.Typo>건</S.Typo>
      </S.Right>
    </S.Container>
  );
};

export default SearchCountText;

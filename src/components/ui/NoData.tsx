import styled from 'styled-components';
import Color from '../../style/color';
import Typo from '../../style/typo';
import Utils from '../../style/utils';

const S = {
  Container: styled.div`
    ${Utils.flexCenter};
    flex-direction: column;
    gap: 24px;
  `,
  Img: styled.img`
    width: 80px;
    height: 80px;
  `,
};

type Props = {
  label: string;
};

const NoData = ({ label }: Props) => {
  return (
    <S.Container>
      <S.Img
        src={`${process.env.PUBLIC_URL}/assets/icon_book.png`}
        alt="icon_book"
      />
      <Typo.Cation color={Color.Text.secondary}>{label}</Typo.Cation>
    </S.Container>
  );
};

export default NoData;

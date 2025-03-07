import styled, { css } from 'styled-components';
import Color from './color';

const Title1 = styled.h1<{ color?: string }>`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0%;
  color: ${(props) => props.color || Color.Text.primary};
`;

const Title2 = styled.h2<{ color?: string }>`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0%;
  color: ${(props) => props.color || Color.Text.primary};
`;

const Title3 = styled.h3<{ color?: string }>`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0%;
  color: ${(props) => props.color || Color.Text.primary};
`;

const Body1 = styled.p<{ color?: string }>`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0%;
  color: ${(props) => props.color || Color.Text.primary};
`;

const Body2 = styled.p<{ color?: string }>`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0%;
  color: ${(props) => props.color || Color.Text.primary};
`;

const Body2Bold = styled.p<{ color?: string }>`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0%;
  color: ${(props) => props.color || Color.Text.primary};
`;

export const CaptionStyle = css`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0%;
`;

const Cation = styled.p<{ color?: string }>`
  ${CaptionStyle};
  color: ${(props) => props.color || Color.Text.primary};
`;

const Small = styled.p<{ color?: string }>`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 0%;
  color: ${(props) => props.color || Color.Text.primary};
`;

const Typo = { Title1, Title2, Title3, Body1, Body2, Body2Bold, Cation, Small };

export default Typo;

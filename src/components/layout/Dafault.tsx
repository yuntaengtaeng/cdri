import styled from 'styled-components';

const S = {
  Container: styled.div`
    max-width: 960px;
    margin: 0 auto;
  `,
};

type Props = {
  children: React.ReactNode;
};

const Default = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>;
};

export default Default;

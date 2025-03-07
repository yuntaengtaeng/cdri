import styled from 'styled-components';
import Typo from '../../style/typo';
import Color from '../../style/color';
import Button from './Button';
import { ArrowDown } from './Icon';
import Utils from '../../style/utils';

const S = {
  Container: styled.div`
    border-bottom: 1px solid #d2d6da; // NOTE : Colo 시스템에 없는 Color 확인 필료
    ${Utils.flexCenter}
    padding: 16px;
  `,
  BookImg: styled.img`
    width: 48px;
    height: 68px;
    margin-left: 32px;
  `,
  Content: styled.div`
    flex: 1;
    gap: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 48px;
  `,
  Price: styled.div`
    margin-left: 22px;
  `,
  ButtonArea: styled.div`
    margin-left: 56px;
    ${Utils.flexCenter}
    gap : 8px;
  `,
};

type Props = {
  title: string;
  author: string;
  price: string;
  bookIMG: string;
  onHandlePurchase: () => void;
  onHandleViewDetail: () => void;
};

const BookListItem = ({
  title,
  author,
  price,
  bookIMG,
  onHandlePurchase,
  onHandleViewDetail,
}: Props) => {
  return (
    <S.Container>
      <S.BookImg src={bookIMG} />
      <S.Content>
        <Typo.Title3>{title}</Typo.Title3>
        <Typo.Body2 color={Color.Text.secondary}>{author}</Typo.Body2>
      </S.Content>
      <S.Price>
        <Typo.Title3>{price}원</Typo.Title3>
      </S.Price>
      <S.ButtonArea>
        <Button
          label="구매하기"
          width={115}
          theme="primary"
          onClick={onHandlePurchase}
        />
        <Button
          onClick={onHandleViewDetail}
          label="상세보기"
          width={115}
          theme="lightgray"
          rightIcon={<ArrowDown />}
        />
      </S.ButtonArea>
    </S.Container>
  );
};

export default BookListItem;

import styled from 'styled-components';
import Typo from '../../style/typo';
import Button from './Button';
import { ArrowUp, Like, UnLike } from './Icon';
import Utils from '../../style/utils';

const S = {
  Container: styled.div`
    border-bottom: 1px solid #d2d6da; // NOTE : Colo 시스템에 없는 Color 확인 필료
    ${Utils.flexCenter}
    padding : 24px 16px 40px 54px;
  `,
  Left: styled.div`
    width: 210px;
    height: 280px;
    position: relative;
  `,
  LikeButton: styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
  `,
  Img: styled.img`
    width: 100%;
    height: 100%;
  `,
  Center: styled.div`
    flex: 1;
    margin-left: 32px;
    margin-right: 48px;
  `,
  Title: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  `,
  Intro: styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0%;
    margin-top: 16px;
    margin-bottom: 12px;
  `, // NOTE : 지정된 Typo X
  Contents: styled.p`
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0%;
    word-wrap: break-word;
    word-break: break-word;
  `, // NOTE : 지정된 Typo X
  Right: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 280px;
  `,
  Price: styled.div`
    flex: 1;
    margin-bottom: 28px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `,
  PriceRow: styled.div`
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  PriceText: styled.p`
    font-weight: 350;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0%;
    text-decoration: line-through;
  `, // NOTE : 지정된 Typo X
};

type Props = {
  title: string;
  contents: string;
  author: string;
  price: string;
  salePrice: string;
  bookIMG: string;
  onHandlePurchase: () => void;
  onHandleViewDetail: () => void;
  isLike: boolean;
  onHandleLike: () => void;
};

const BookListItemDetail = ({
  title,
  contents,
  author,
  price,
  salePrice,
  bookIMG,
  onHandlePurchase,
  onHandleViewDetail,
  isLike,
  onHandleLike,
}: Props) => {
  return (
    <S.Container>
      <S.Left>
        <S.Img src={bookIMG} />
        <S.LikeButton onClick={onHandleLike}>
          {isLike ? <Like /> : <UnLike />}
        </S.LikeButton>
      </S.Left>
      <S.Center>
        <S.Title>
          <Typo.H3Bold>{title}</Typo.H3Bold>
          <Typo.CationMedium>{author}</Typo.CationMedium>
        </S.Title>
        <S.Intro>책 소개</S.Intro>
        <S.Contents>{contents}</S.Contents>
      </S.Center>
      <S.Right>
        <Button
          onClick={onHandleViewDetail}
          label="상세보기"
          width={115}
          theme="lightgray"
          rightIcon={<ArrowUp />}
        />
        <S.Price>
          <S.PriceRow>
            <Typo.TinyMedium>원가</Typo.TinyMedium>
            {salePrice ? (
              <S.PriceText>{price}원</S.PriceText>
            ) : (
              <Typo.H3Bold>{price}원</Typo.H3Bold>
            )}
          </S.PriceRow>
          {salePrice && (
            <S.PriceRow>
              <Typo.TinyMedium>할인가</Typo.TinyMedium>
              <Typo.H3Bold>{salePrice}원</Typo.H3Bold>
            </S.PriceRow>
          )}
        </S.Price>
        <Button
          label="구매하기"
          width={240}
          theme="primary"
          onClick={onHandlePurchase}
        />
      </S.Right>
    </S.Container>
  );
};

export default BookListItemDetail;

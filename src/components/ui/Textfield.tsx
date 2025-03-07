// NOTE : 컴포넌트 이름 수정 요청 드리기 Textfeild 오타

import styled from 'styled-components';
import { Close, Search } from './Icon';
import Color from '../../style/color';
import Utils from '../../style/utils';
import Typo, { CaptionStyle } from '../../style/typo';
import { useState } from 'react';

const S = {
  Container: styled.div<{ isFocused: boolean }>`
    padding: 10px;
    background-color: ${Color.Palette.lightgrey};
    border-radius: ${(props) => (props.isFocused ? '24px' : '100px')};
    ${Utils.flexCenter};
    flex-direction: column;
  `,
  InputContainer: styled.div`
    ${Utils.flexCenter};
    width: 100%;
  `,
  Input: styled.input`
    margin-left: 11px;
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    ${CaptionStyle};
  `,
  History: styled.div`
    box-sizing: border-box;
    padding-left: 51px;
    padding-right: 25px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 28px;
    margin-bottom: 28px;
  `,
  Item: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
};

// TODO : 로컬스토리지를 이용해 검색 히스토리를 제공하는 기능 추가 필요 (최대 8개)

const Textfield = ({ onChange, value, placeholder }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  return (
    <S.Container isFocused={isFocused}>
      <S.InputContainer>
        <Search />
        <S.Input
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          type="text"
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
      </S.InputContainer>
      {isFocused && (
        <S.History>
          {history.length ? (
            <>
              {history.map((h) => (
                <S.Item>
                  <Typo.Cation color={Color.Text.subtitle}>{h}</Typo.Cation>
                  <span>
                    <Close />
                  </span>
                </S.Item>
              ))}
            </>
          ) : (
            <>
              <Typo.Cation color={Color.Text.subtitle}>
                다양한 검색어를 통해 찾아보세요 ex : 노르웨이 숲
              </Typo.Cation>
            </>
          )}
        </S.History>
      )}
    </S.Container>
  );
};

export default Textfield;

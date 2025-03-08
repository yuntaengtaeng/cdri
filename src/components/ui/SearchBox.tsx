import styled from 'styled-components';
import Typo from '../../style/typo';
import Textfield from './Textfield';
import OutlineButton from './OutlineButton';
import { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import TextInput from './TextInput';
import Select from './Select';

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  Content: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  `,
  TextfieldContainer: styled.div`
    flex: 1;
  `,
  ButtonContainer: styled.div`
    position: relative;
  `,
  ModalContainer: styled.div`
    position: absolute;
    z-index: 1;
    margin-top: 16px;
    left: -156px;
  `,
  ModalContent: styled.div`
    display: flex;
    margin-top: 16px;
    margin-bottom: 16px;
    gap: 4px;
  `,
};

type SearchForm = {
  search: string;
  category: string;
  targetSearch: string;
};

type Props = {
  onSearchHandler: (data: SearchForm) => void;
};

const SearchBox = ({ onSearchHandler }: Props) => {
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [search, setSearch] = useState('');
  const [detailSelected, setDetailSelected] = useState('title');
  const [detailSearch, setDetailSearch] = useState('');

  const searchHandler = (type: 'search' | 'target', forceSearch?: string) => {
    if (type === 'search') {
      onSearchHandler({
        search: forceSearch || search,
        category: '',
        targetSearch: '',
      });
      setDetailSearch('');
      setDetailSelected('title');
    } else {
      onSearchHandler({
        search: '',
        category: detailSelected,
        targetSearch: detailSearch,
      });
      setSearch('');
    }
  };

  return (
    <S.Container>
      <Typo.Title2>도서 검색</Typo.Title2>
      <S.Content>
        <S.TextfieldContainer>
          <Textfield
            placeholder="검색어를 입력하세요"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            onEnterKeyDown={() => {
              searchHandler('search');
            }}
            onHistoryHandler={(history) => {
              setSearch(history);
              searchHandler('search', history);
            }}
          />
        </S.TextfieldContainer>
        <S.ButtonContainer>
          <OutlineButton
            label="상세검색"
            onClick={() => {
              setIsOpenDetail(true);
            }}
          />
          {isOpenDetail && (
            <S.ModalContainer>
              <Modal
                onOutSideHandler={() => {
                  setIsOpenDetail(false);
                }}
                onCloseHandler={() => {
                  setIsOpenDetail(false);
                }}
              >
                <S.ModalContent>
                  <Select
                    items={[
                      {
                        label: '제목',
                        value: 'title',
                      },
                      {
                        label: '저자명',
                        value: 'person',
                      },
                      {
                        label: '출판사',
                        value: 'publisher',
                      },
                    ]}
                    onChange={(value) => {
                      setDetailSelected(value);
                    }}
                    value={detailSelected}
                  />
                  <TextInput
                    placeholder="검색어 입력"
                    value={detailSearch}
                    onChange={(event) => {
                      setDetailSearch(event.target.value);
                    }}
                  />
                </S.ModalContent>
                <Button
                  label="검색하기"
                  theme="primary"
                  width={312}
                  onClick={() => {
                    setIsOpenDetail(false);
                    searchHandler('target');
                  }}
                />
              </Modal>
            </S.ModalContainer>
          )}
        </S.ButtonContainer>
      </S.Content>
    </S.Container>
  );
};

export default SearchBox;

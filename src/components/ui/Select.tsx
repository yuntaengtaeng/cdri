import { useState } from 'react';
import styled from 'styled-components';
import { ArrowDown } from './Icon';
import Color from '../../style/color';
import Typo from '../../style/typo';
import useOutsideClick from '../../hooks/useOutsideClick';

const S = {
  Container: styled.div`
    width: 100px;
    height: 36px;
    border-bottom: 1px solid #d2d6da;
    display: flex;
    position: relative;
    padding: 0px 16px;
    box-sizing: border-box;
  `,
  ValueContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `,
  Value: styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    color: ${Color.Text.primary};
  `,
  Drop: styled.div`
    position: absolute;
    margin-top: 9px;
    background: ${Color.Palette.white};
    box-shadow: 0px 0px 4px 0px #00000040;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
  `,
  Item: styled.div`
    padding: 4px 8px;
  `,
};

export type DropItem = {
  label: string;
  value: string;
};

type Props = {
  value?: string;
  items: DropItem[];
  onChange: (value: string) => void;
};

const Select = ({ value, items, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setIsOpen(false);
  });

  const findValue = [...items].find((item) => item.value === value);

  return (
    <S.Container ref={ref}>
      <S.ValueContainer
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <S.Value>{findValue?.label || ''}</S.Value>
        <ArrowDown />
      </S.ValueContainer>
      {isOpen && (
        <S.Drop>
          {items.map((item) => (
            <S.Item
              key={item.value}
              onClick={() => {
                setIsOpen(false);
                onChange(item.value);
              }}
            >
              <Typo.CationMedium>{item.label}</Typo.CationMedium>
            </S.Item>
          ))}
        </S.Drop>
      )}
    </S.Container>
  );
};

export default Select;

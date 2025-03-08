import styled from 'styled-components';
import { CaptionStyle } from '../../style/typo';
import Color from '../../style/color';

const S = {
  Input: styled.input`
    ${CaptionStyle};
    height: 36px;
    border: none;
    outline: none;
    border-bottom: 1px solid ${Color.Palette.primary};
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
  `,
};

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  onEnterKeyDown?: () => void;
};

const TextInput = ({ onChange, value, placeholder, onEnterKeyDown }: Props) => {
  return (
    <S.Input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type="text"
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onEnterKeyDown) {
          onEnterKeyDown();
        }
      }}
    />
  );
};

export default TextInput;

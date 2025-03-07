import styled from 'styled-components';
import Color from '../../style/color';
import Typo from '../../style/typo';
import { useLocation, Link } from 'react-router-dom';
import Utils from '../../style/utils';

const S = {
  HeaderContainer: styled.header`
    height: 80px;
    background-color: ${Color.Palette.white};
    padding: 0px 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  MenuItem: styled(Link)<{ isActive: boolean }>`
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 1px solid
      ${(props) =>
        props.isActive ? Color.Palette.primary : Color.Palette.white};
  `,

  CenterElement: styled.div`
    flex-grow: 1;
    ${Utils.flexCenter};
    gap: 56px;
  `,
};

const menuItems = [
  { to: '/', label: '도서 검색' },
  { to: '/wishlist', label: '내가 찜한 책' },
];

const Header = () => {
  const location = useLocation();

  return (
    <S.HeaderContainer>
      <Typo.Title1 color={Color.Text.primary}>CERTICOS BOOKS</Typo.Title1>
      <S.CenterElement>
        {menuItems.map((item) => (
          <S.MenuItem
            key={item.to}
            to={item.to}
            isActive={location.pathname === item.to}
          >
            <Typo.Body1>{item.label}</Typo.Body1>
          </S.MenuItem>
        ))}
      </S.CenterElement>
    </S.HeaderContainer>
  );
};

export default Header;

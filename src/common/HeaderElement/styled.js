import { styled } from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const DesktopMenu = styled.aside`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    padding: 0 36px;
    font-size: 12px;
    font-weight: 400;
`;

export const BrandContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
`;

export const Brand = styled.a`

`;

export const UserMenuList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
`;

export const UserMenuItem = styled.li`
    padding: 0 14px;
    border-right: 1px solid ${({ theme }) => theme.colors.black};;
`;

// export const Header = styled.header`

// `;

// export const LogoContainer = styled.div``;

// export const Logo = styled.a``;

// export const Navigation = styled.nav``;

// export const NavigationList = styled.ul``;

// export const NavigationItem = styled.li``;
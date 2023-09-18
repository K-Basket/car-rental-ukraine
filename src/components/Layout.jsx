import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLinkStyled, NavigateSt } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <NavigateSt>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
          <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
        </NavigateSt>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

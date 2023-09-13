import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLinkStyled } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
          <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

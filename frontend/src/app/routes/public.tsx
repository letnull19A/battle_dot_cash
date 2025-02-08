import { RouteObject } from 'react-router-dom';
import { RouletteGameePage, MainPage, NotFoundErrorPage } from '@pages';
import { Layout } from '@layouts';

const { Default, Full } = Layout;

export const publicRouter: RouteObject[] = [
  {
    path: '/',
    element: (
      <Default>
        <MainPage />
      </Default>
    ),
  },
  {
   path: "*",
   element: (
    <Full>
    <NotFoundErrorPage/>
</Full>
   )
  }
];

import { RouteObject } from 'react-router-dom';
import { RouletteGameePage, MainPage } from '@pages';
import { Layout } from '@layouts';

const { Default } = Layout;

export const publicRouter: RouteObject[] = [
  {
    path: '/',
    element: (
      <Default>
        <MainPage />
      </Default>
    ),
  },
];

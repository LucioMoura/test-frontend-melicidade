import HomePage from './shared/pages/HomePage/HomePage';
import SearchPage from './shared/pages/SearchPage/SearchPage';
import ProductPage from './shared/pages/ProductPage/ProductPage';
import NotFoundPage from './shared/pages/NotFoundPage/NotFoundPage';

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/items",
    component: SearchPage,
    exact: true
  },
  {
    path: "/items/:id",
    component: ProductPage,
    exact: true
  },
  {
    component: NotFoundPage
  }
];

export default routes;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { CardsPage } from './pages/CardsPage/CardsPage';
import { Header } from './Header/Header';


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          
        </Route>
          <Route index path="/cards" element={<CardsPage />} />   
     
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
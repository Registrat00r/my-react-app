import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home';
import { CardsPage } from './pages/CardsPage/CardsPage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

          <Route path="/cards" element= {<CardsPage/>}/>


        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
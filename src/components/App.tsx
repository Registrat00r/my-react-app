//import { Children } from 'react';
import { Header } from './Header';
import { Layout } from './Layout';
import { Footer } from './Footer';



export const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <Layout>
      </Layout>
      <Footer />
    </div>

  )
}
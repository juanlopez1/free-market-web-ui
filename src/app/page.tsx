import { type FC, Fragment } from 'react';

import Footer from '@free-market-web-ui/components/Footer';
import Header from '@free-market-web-ui/components/Header';
import HomeMessage from '@free-market-web-ui/components/HomeMessage';

const HomePage: FC = () => (
    <Fragment>
        <Header />
        <main>
            <HomeMessage />
        </main>
        <Footer />
    </Fragment>
);

export default HomePage;

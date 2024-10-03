import { type FC, Fragment } from 'react';

import Header from '@free-market-web-ui/components/Header';
import ArrowUp from '@free-market-web-ui/icons/ArrowUp';

const HomePage: FC = () => (
    <Fragment>
        <Header />
        <main>
            <div className="home-message">
                <div className="animate-bounce">
                    <ArrowUp className="w-6 h-6" />
                </div>
                <h1>¡Empezá a buscar ahora y encontrá tu producto en instantes!</h1>
            </div>
        </main>
    </Fragment>
);

export default HomePage;

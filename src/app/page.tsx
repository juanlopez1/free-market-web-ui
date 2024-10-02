import { type FC, Fragment } from 'react';

import Header from '@free-market-web-ui/components/Header';
import ArrowUp from '@free-market-web-ui/icons/ArrowUp';

const HomePage: FC = () => (
    <Fragment>
        <Header />
        <main>
            <div className="flex flex-col justify-center items-center mt-2">
                <div className="animate-bounce">
                    <ArrowUp className="w-6 h-6" />
                </div>
                <div className="text-2xl text-[--gray]">
                    ¡Empezá a buscar ahora y encontrá tu producto en instantes!
                </div>
            </div>
        </main>
    </Fragment>
);

export default HomePage;

import { Fragment } from 'react';

import Breadcrumb from '@free-market-web-ui/components/Breadcrumb';
import Footer from '@free-market-web-ui/components/Footer';
import Header from '@free-market-web-ui/components/Header';
import ProductList from '@free-market-web-ui/components/ProductsList';
import { ProductProvider } from '@free-market-web-ui/context/product.context';

const SearchResultPageContainer = () => (
    <Fragment>
        <Header />
        <main>
            <ProductProvider>
                <Breadcrumb />
                <ProductList />
            </ProductProvider>
        </main>
        <Footer />
    </Fragment>
);

export default SearchResultPageContainer;

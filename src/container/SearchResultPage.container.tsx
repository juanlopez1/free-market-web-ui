import { Fragment } from 'react';

import Breadcrumb from '@free-market-web-ui/components/Breadcrumb';
import ProductList from '@free-market-web-ui/components/ProductsList';
import Header from '@free-market-web-ui/components/Header';
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
    </Fragment>
);

export default SearchResultPageContainer;

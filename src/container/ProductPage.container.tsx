'use client';
import { Fragment, type FC } from 'react';

import Breadcrumb from '@free-market-web-ui/components/Breadcrumb';
import Footer from '@free-market-web-ui/components/Footer';
import Header from '@free-market-web-ui/components/Header';
import Product from '@free-market-web-ui/components/Product';
import { ProductProvider } from '@free-market-web-ui/context/product.context';

type ProductPageContainerProps = {
    id: string;
};

const ProductPageContainer: FC<ProductPageContainerProps> = ({ id }) => (
    <Fragment>
        <Header />
        <main>
            <ProductProvider id={id}>
                <Breadcrumb />
                <Product />
            </ProductProvider>
        </main>
        <Footer />
    </Fragment>
);

export default ProductPageContainer;

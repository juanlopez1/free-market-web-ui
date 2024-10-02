'use client';
import { Fragment, type FC } from 'react';

import Breadcrumb from '@free-market-web-ui/components/Breadcrumb';
import Product from '@free-market-web-ui/components/Product';
import Header from '@free-market-web-ui/components/Header';
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
    </Fragment>
);

export default ProductPageContainer;

import type { FC } from 'react';
import { redirect } from 'next/navigation';

import ProductPageContainer from '@free-market-web-ui/container/ProductPage.container';

type ProductPageProps = {
    params: {
        id?: string;
    };
};

const ProductPage: FC<ProductPageProps> = ({ params: { id } }) => {
    if (!id) {
        redirect('/');
    }
    return <ProductPageContainer id={id} />;
};

export default ProductPage;

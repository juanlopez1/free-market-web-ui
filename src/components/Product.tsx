import { Fragment, type FC } from 'react';
import Image from 'next/image';

import Spinner from '@free-market-web-ui/components/Spinner';
import formatPriceString from '@free-market-web-ui/utils/formatPriceString';
import getConditionString from '@free-market-web-ui/utils/getConditionString';
import useProduct from '@free-market-web-ui/context/product.context';

const Product: FC = () => {
    const { fetching, product } = useProduct();
    return fetching ? (
        <Spinner />
    ) : (
        <Fragment>
            {product && (
                <div className="product">
                    <div className="description">
                        <Image src={product.picture} alt="product-image" height={680} width={680} />
                        <h2>Descripción del producto</h2>
                        <p>{product.description}</p>
                    </div>
                    <div className="details">
                        <p>
                            {getConditionString(product.condition)} - {product.sold_quantity} vendidos
                        </p>
                        <h1>{product.title}</h1>
                        <div className="price">
                            <p className="amount">{formatPriceString(product.price.amount, product.price.currency)}</p>
                            <p className="decimals">{product.price.decimals.toString().padStart(2, '0')}</p>
                        </div>
                        <button type="button" className="button-primary">
                            Comprar
                        </button>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default Product;

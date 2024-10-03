import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import shippingIcon from '@free-market-web-ui/images/shipping-icon.png';
import type { SearchProductType } from '@free-market-web-ui/types/product.types';
import formatPriceString from '@free-market-web-ui/utils/formatPriceString';

type ProductListItemProps = {
    product: SearchProductType;
    showDivider: boolean;
};

const ProductListItem: FC<ProductListItemProps> = ({ product, showDivider }) => (
    <div>
        <Link href={`/items/${product.id}`} className="products-list-item">
            <Image src={product.picture} alt="img" height={180} width={180} />
            <div className="details">
                <div>
                    <div className="price">
                        <p>{formatPriceString(product.price.amount, product.price.currency)}</p>
                        {product.free_shipping && (
                            <Image src={shippingIcon} alt="shipping-icon" width={18} height={18} />
                        )}
                    </div>
                    <h2>{product.title}</h2>
                </div>
                <p>{product.seller_state}</p>
            </div>
        </Link>
        {showDivider && <hr />}
    </div>
);

export default ProductListItem;

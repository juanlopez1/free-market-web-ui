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
        <Link className="flex flex-row hover:bg-[--background] rounded-sm p-2" href={`/items/${product.id}`}>
            <Image
                src={product.picture}
                alt="img"
                height={180}
                width={180}
                className="h-[180px] w-[180px] rounded-sm object-contain"
            />
            <div className="grid grid-cols-8 justify-between w-full p-4">
                <div className="col-span-6">
                    <div className="flex flex-row items-center mb-8">
                        <div className="text-2xl">
                            {formatPriceString(product.price.amount, product.price.currency)}
                        </div>
                        {product.free_shipping && (
                            <Image
                                src={shippingIcon}
                                alt="shipping-icon"
                                width={18}
                                height={18}
                                className="h-[18px] w-[18px] ml-3"
                            />
                        )}
                    </div>
                    <div className="text-lg">{product.title}</div>
                </div>
                <div className="col-span-2 text-xs text-[--granite]">{product.seller_state}</div>
            </div>
        </Link>
        {showDivider && <hr className="mt-2 h-[2px]" />}
    </div>
);

export default ProductListItem;

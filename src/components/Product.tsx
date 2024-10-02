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
                <div className="rounded-sm bg-white p-8 grid grid-cols-10">
                    <div className="col-span-7">
                        <Image
                            src={product.picture}
                            alt="product-image"
                            height={680}
                            width={680}
                            className="max-h-[680px] w-[680px] object-contain"
                        />
                        <div className="text-[28px] my-8">Descripción del producto</div>
                        <p className="text-base text-[--gray] font-light">{product.description}</p>
                    </div>
                    <div className="col-span-3">
                        <div className="text-sm mb-4 font-light">
                            {getConditionString(product.condition)} - {product.sold_quantity} vendidos
                        </div>
                        <div className="text-2xl mb-8 font-semibold">{product.title}</div>
                        <div className="flex flex-row mb-8">
                            <div className="text-[46px]">
                                {formatPriceString(product.price.amount, product.price.currency)}
                            </div>
                            <div className="text-2xl relative top-3">
                                {product.price.decimals.toString().padStart(2, '0')}
                            </div>
                        </div>
                        <button
                            type="button"
                            className="bg-[--sky-blue] hover:bg-[#2968c8] active:bg-[#204e96] w-full text-white rounded-sm py-2 text-lg"
                        >
                            Comprar
                        </button>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default Product;

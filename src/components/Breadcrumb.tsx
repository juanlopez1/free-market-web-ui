import { Fragment } from 'react';

import ChevronRight from '@free-market-web-ui/icons/ChevronRight';
import useProduct from '@free-market-web-ui/context/product.context';

const Breadcrumb = () => {
    const { categories, fetching } = useProduct();
    return (
        !fetching &&
        categories && (
            <nav className="text-sm text-[--gray] font-light w-full mb-4">
                <ol className="flex list-reset">
                    {categories.map((cat, index) =>
                        index === categories.length - 1 ? (
                            <li key={cat} className="font-semibold">
                                {cat}
                            </li>
                        ) : (
                            <Fragment key={cat}>
                                <li>{cat}</li>
                                <li className="flex items-center mx-1">
                                    <ChevronRight className="w-3 h-3" />
                                </li>
                            </Fragment>
                        ),
                    )}
                </ol>
            </nav>
        )
    );
};

export default Breadcrumb;

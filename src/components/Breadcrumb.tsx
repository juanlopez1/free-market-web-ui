import { Fragment } from 'react';

import ChevronRight from '@free-market-web-ui/icons/ChevronRight';
import useProduct from '@free-market-web-ui/context/product.context';

const Breadcrumb = () => {
    const { categories, fetching } = useProduct();
    return (
        !fetching &&
        categories && (
            <nav className="breadcrumb">
                <ol>
                    {categories.map((cat, index) =>
                        index === categories.length - 1 ? (
                            <li key={cat} className="breadcrumb-last-path">
                                {cat}
                            </li>
                        ) : (
                            <Fragment key={cat}>
                                <li>{cat}</li>
                                <li className="breadcrumb-divider-icon">
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

import ProductListItem from '@free-market-web-ui/components/ProductListItem';
import useProduct from '@free-market-web-ui/context/product.context';
import Spinner from '@free-market-web-ui/components/Spinner';

const ProductsList = () => {
    const { fetching, searchProducts } = useProduct();
    return fetching ? (
        <Spinner />
    ) : (
        <div className="products-list">
            {searchProducts?.map((product, index) => (
                <ProductListItem key={product.id} product={product} showDivider={index + 1 < searchProducts.length} />
            ))}
        </div>
    );
};

export default ProductsList;

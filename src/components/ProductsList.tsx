import ErrorMessage from '@free-market-web-ui/components/ErrorMessage';
import ProductListItem from '@free-market-web-ui/components/ProductListItem';
import Spinner from '@free-market-web-ui/components/Spinner';
import useProduct from '@free-market-web-ui/context/product.context';

const ProductsList = () => {
    const { error, fetching, searchProducts, retrySearchProducts } = useProduct();
    return fetching ? (
        <Spinner />
    ) : error ? (
        <ErrorMessage
            message="Ah ocurrido un error al procesar la consulta, reintentá o probá cambiando la búsqueda"
            onRetry={retrySearchProducts}
        />
    ) : (
        <div className="products-list">
            {searchProducts?.map((product, index) => (
                <ProductListItem key={product.id} product={product} showDivider={index + 1 < searchProducts.length} />
            ))}
        </div>
    );
};

export default ProductsList;

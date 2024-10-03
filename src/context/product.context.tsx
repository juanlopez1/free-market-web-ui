import {
    type FC,
    type PropsWithChildren,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useSearchParams } from 'next/navigation';

import type { ProductType, SearchProductType } from '@free-market-web-ui/types/product.types';
import productAPI from '@free-market-web-ui/api/product.api';

export interface ProductState {
    categories?: string[];
    error: boolean;
    fetching: boolean;
    product?: ProductType;
    productId?: string;
    searchProducts?: SearchProductType[];
    retryGetProduct: () => void;
    retrySearchProducts: () => void;
}

const ProductContext = createContext<ProductState | undefined>(undefined);

export type ProductProviderProps = PropsWithChildren & { id?: string };

export const ProductProvider: FC<ProductProviderProps> = ({ children, id }) => {
    const searchParams = useSearchParams();
    const query = searchParams.get('search');
    const [product, setProduct] = useState<ProductType>();
    const [searchProducts, setSearchProducts] = useState<SearchProductType[]>([]);
    const [categories, setCategories] = useState<string[]>();
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(false);

    const getById = useCallback(async () => {
        try {
            if (!id) {
                return;
            }
            setError(false);
            setFetching(true);

            const response = await productAPI.getById({ id });
            setProduct(response.item);
            setCategories(response.categories);
        } catch (_) {
            setError(true);
        } finally {
            setFetching(false);
        }
    }, [id]);

    const searchByQuery = useCallback(async () => {
        try {
            if (!query) {
                return;
            }
            setError(false);
            setFetching(true);

            const response = await productAPI.searchByQuery({ query });
            setSearchProducts(response.items);
            setCategories(response.categories);
        } catch (_) {
            setError(true);
        } finally {
            setFetching(false);
        }
    }, [query]);

    const retryGetProduct = useCallback(() => {
        getById();
    }, [getById]);

    const retrySearchProducts = useCallback(() => {
        searchByQuery();
    }, [searchByQuery]);

    useEffect(() => {
        if (query) {
            searchByQuery();
        }
    }, [query, searchByQuery]);

    useEffect(() => {
        if (id) {
            getById();
        }
    }, [id, getById]);

    const value = useMemo(
        () => ({
            categories,
            error,
            fetching,
            product,
            productId: id,
            searchProducts,
            retryGetProduct,
            retrySearchProducts,
        }),
        [categories, error, fetching, product, searchProducts, id, retrySearchProducts, retryGetProduct],
    );
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

const useProduct = (): ProductState => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProduct must be used within a ProductProvider');
    }
    return context;
};

export default useProduct;

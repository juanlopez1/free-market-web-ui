import type { AuthorType } from '@free-market-web-ui/types/author.types';
import type { ProductType, SearchProductType } from '@free-market-web-ui/types/product.types';

export type SearchProductsByQueryRequest = {
    query: string;
};

export type SearchProductsByQueryResponse = {
    author: AuthorType;
    categories: string[];
    items: SearchProductType[];
};

export type GetProductByIdRequest = {
    id: string;
};

export type GetProductByIdResponse = {
    author: AuthorType;
    categories: string[];
    item: ProductType;
};

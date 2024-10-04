import type {
    GetProductByIdRequest,
    GetProductByIdResponse,
    SearchProductsByQueryRequest,
    SearchProductsByQueryResponse,
} from '@free-market-web-ui/api/product.types';
import { httpGet } from '@free-market-web-ui/services/http.service';

class ProductAPI {
    getById = ({ id }: GetProductByIdRequest): Promise<GetProductByIdResponse> =>
        httpGet<GetProductByIdResponse>(`items/${encodeURIComponent(id)}`);

    searchByQuery = ({ query }: SearchProductsByQueryRequest): Promise<SearchProductsByQueryResponse> =>
        httpGet<SearchProductsByQueryResponse>(`items?q=${encodeURIComponent(query)}`);
}

const productAPI = new ProductAPI();
export default productAPI;

import type {
    GetProductByIdRequest,
    GetProductByIdResponse,
    SearchProductsByQueryRequest,
    SearchProductsByQueryResponse,
} from '@free-market-web-ui/api/product.types';
import { httpGet } from '@free-market-web-ui/services/http.service';

class ProductAPI {
    getById = ({ id }: GetProductByIdRequest): Promise<GetProductByIdResponse> =>
        httpGet<GetProductByIdResponse>(`items/${id}`);

    searchByQuery = ({ query }: SearchProductsByQueryRequest): Promise<SearchProductsByQueryResponse> =>
        httpGet<SearchProductsByQueryResponse>(`items?q=${query}`);
}

const productAPI = new ProductAPI();
export default productAPI;

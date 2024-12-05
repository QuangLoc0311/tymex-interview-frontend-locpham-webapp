import { baseUrlTransform } from 'src/configs/core';
import { useFetchWrapper } from 'src/configs/core';
import {
  DataType,
  MetaType,
  ProductMetadataType,
} from 'src/pages/Products/components/types';

export const ProductService = () => {
  const API = useFetchWrapper();

  /**
   * The function `getProductListData` retrieves product list data from a specified base URL using an
   * API call.
   * @returns The `getProductListData` function is returning the result of calling the `API.get`
   * function with the transformed `baseUrl` and data parameters.
   */
  const getProductListData = async (data?: MetaType) => {
    const baseUrl = '/products';

    try {
      const res = await API.get(baseUrlTransform(baseUrl), {
        params: {
          ...data,
          sortBy: data?.sortBy?.join(','),
          sortDirection: data?.sortDirection?.join(','),
        },
      });
      return {
        data: res.data.products as DataType[],
        total: res.data.total,
      };
    } catch (err) {
      if (typeof err === 'string') {
        throw new Error(err);
      } else {
        throw new Error('getProducts: An error occurred');
      }
    }
  };

  /**
   * The function `getProductMetadata` fetches product metadata from a specified URL and returns it as
   * a `ProductMetadataType`.
   * @returns The `getProductMetadata` function is returning the product metadata fetched from the API
   * endpoint `/metadata`. The product metadata is expected to be of type `ProductMetadataType`. If the
   * API call is successful, the function will return the product metadata data. If an error occurs
   * during the API call, it will throw an error message indicating the type of error that occurred.
   */
  const getProductMetadata = async () => {
    const baseUrl = '/metadata';
    try {
      const res = await API.get(baseUrlTransform(baseUrl));
      return res.data as ProductMetadataType;
    } catch (err) {
      if (typeof err === 'string') {
        throw new Error(err);
      } else {
        throw new Error('getProductMeta: An error occurred');
      }
    }
  };

  return {
    getProductListData,
    getProductMetadata,
  };
};

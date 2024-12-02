import { baseUrlTransform } from "src/configs/core";
import { useFetchWrapper } from "src/configs/core";

export const ProductService = ({
  data,
}: {
  data?: { [key: string]: string };
}) => {
  const API = useFetchWrapper();

  /**
   * The function `getProductListData` retrieves product list data from a specified base URL using an
   * API call.
   * @returns The `getProductListData` function is returning the result of calling the `API.get`
   * function with the transformed `baseUrl` and data parameters.
   */
  const getProductListData = () => {
    const baseUrl = "/products";

    return API.get(baseUrlTransform(baseUrl), {
      params: {
        ...data,
      },
    });
  };

  const getProductMetadata = () => {
    const baseUrl = "/categories-themes";

    return API.get(baseUrlTransform(baseUrl));
  };

  return {
    getProductListData,
    getProductMetadata,
  };
};

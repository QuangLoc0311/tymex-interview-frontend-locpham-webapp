import { ProductService } from "./ProductService";
import { useFetchWrapper } from "src/configs/core";

jest.mock("src/configs/core", () => ({
  useFetchWrapper: jest.fn(),
}));

describe("ProductService", () => {
  const API = {
    get: jest.fn(),
  };

  beforeEach(() => {
    (useFetchWrapper as jest.Mock).mockReturnValue(API);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch product list data successfully", async () => {
    const mockResponse = { data: { products: [], total: 0 } };
    API.get.mockResolvedValue(mockResponse);

    const { getProductListData } = ProductService();
    const result = await getProductListData();

    expect(result).toEqual(mockResponse.data);
    expect(API.get).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(Object)
    );
  });

  it("should handle error in getProductListData", async () => {
    API.get.mockRejectedValue(new Error("API error"));

    const { getProductListData } = ProductService();

    await expect(getProductListData()).rejects.toThrow(
      "getProducts: An error occurred"
    );
  });

  it("should fetch product metadata successfully", async () => {
    const mockResponse = { data: {} };
    API.get.mockResolvedValue(mockResponse);

    const { getProductMetadata } = ProductService();
    const result = await getProductMetadata();

    expect(result).toEqual(mockResponse.data);
  });

  it("should handle error in getProductMetadata", async () => {
    API.get.mockRejectedValue(new Error("API error"));

    const { getProductMetadata } = ProductService();

    await expect(getProductMetadata()).rejects.toThrow(
      "getProductMeta: An error occurred"
    );
  });
});

import { Button } from "antd";
import { FilterSection } from "./components/FilterSection/FilterSection";
import { ProductItem } from "./components/ProductItem/Productitem";
import styles from "./styles.module.scss";
import { ProductService } from "src/services/Product/ProductService";
import { useMount } from "react-use";
import { useState } from "react";
import { DataType, MetaType, ProductMetadataType } from "./components/types";

export const Products = () => {
  const [productList, setProductList] = useState<DataType[]>([]);
  const [meta, setMeta] = useState<MetaType>({
    sortBy: [],
    sortDirection: [],
  });
  const [productMeta, setProductMeta] = useState<ProductMetadataType>();
  const [paginationData, setPaginationData] = useState<{
    lastItemId?: number;
    total: number;
  }>({ total: 0 });

  const fetchProductsRequest = async (data?: MetaType, loadMore?: boolean) => {
    const response = await ProductService().getProductListData(data);
    const productData = response.data;
    if (productData) {
      if (loadMore) {
        setProductList([...productList, ...productData]);
      } else {
        setProductList([...productData]);
      }
      setPaginationData({
        lastItemId: productData[productData.length - 1]?.id,
        total: response.total,
      });
    }
  };

  const fetchProductMeta = async () => {
    const response = await ProductService().getProductMetadata();
    if (response) {
      setProductMeta(response);
    }
  };

  useMount(() => {
    fetchProductMeta();
    fetchProductsRequest(meta);
  });

  const loadMore = () => {
    if (paginationData.lastItemId) {
      fetchProductsRequest(
        { ...meta, lastItemId: paginationData.lastItemId },
        true
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.child}>
        <div id="filter" className={styles.filter}>
          <FilterSection
            productMeta={productMeta}
            meta={meta}
            setMeta={setMeta}
            refetch={(meta: MetaType) => fetchProductsRequest(meta)}
          />
        </div>
        <div className={styles.productContainer}>
          <div id="products" className={styles.products}>
            {productList?.map((product, index) => (
              <ProductItem key={product.id + index} data={product} />
            ))}
          </div>

          {paginationData.total > productList?.length ? (
            <div className={styles.viewMore}>
              <Button size="large" onClick={() => loadMore()}>
                View more
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

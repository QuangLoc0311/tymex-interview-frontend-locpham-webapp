import { Button, Empty, Spin } from "antd";
import { FilterSection } from "./components/FilterSection/FilterSection";
import { ProductItem } from "./components/ProductItem/Productitem";
import styles from "./styles.module.scss";
import { ProductService } from "src/services/Product/ProductService";
import { useMount, useUpdateEffect } from "react-use";
import { useState } from "react";
import { DataType, MetaType, ProductMetadataType } from "./components/types";
import { LoadingOutlined } from "@ant-design/icons";

export const Products = () => {
  const [productList, setProductList] = useState<DataType[]>([]);
  const [meta, setMeta] = useState<MetaType>({
    sortBy: [],
    sortDirection: [],
  });
  const [loading, setLoading] = useState(false);
  const [productMeta, setProductMeta] = useState<ProductMetadataType>();
  const [paginationData, setPaginationData] = useState<{
    lastItemId?: number;
    total: number;
  }>({ total: 0 });

  const fetchProductsRequest = async (data?: MetaType, loadMore?: boolean) => {
    setLoading(true);
    const response = await ProductService().getProductListData(data);
    const productData = response.data;
    if (loadMore) {
      setProductList([...productList, ...productData]);
    } else {
      setProductList([...productData]);
    }
    setPaginationData({
      lastItemId: productData[productData.length - 1]?.id,
      total: response.total,
    });
    setLoading(false);
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

  useUpdateEffect(() => {
    fetchProductsRequest(meta);
  }, [meta]);

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
          {loading ? (
            <Spin indicator={<LoadingOutlined spin />} size="large" />
          ) : (
            <>
              {productList.length ? (
                <div id="products" className={styles.products}>
                  {productList?.map((product, index) => (
                    <ProductItem key={product.id + index} data={product} />
                  ))}
                </div>
              ) : (
                <>
                  <Empty />
                </>
              )}

              {paginationData.total > productList?.length ? (
                <div className={styles.viewMore}>
                  <Button size="large" onClick={() => loadMore()}>
                    View more
                  </Button>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

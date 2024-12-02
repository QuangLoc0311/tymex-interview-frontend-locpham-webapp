import { Button } from "antd";
import { FilterSection } from "./components/FilterSection/FilterSection";
import { ProductItem } from "./components/ProductItem/Productitem";
import styles from "./styles.module.scss";
import { ProductService } from "src/services/Product/ProductService";
import { useQuery } from "react-query";
import { useMount } from "react-use";

export const Products = () => {
  const data = {
    search: "The Code Assassin",
  };
  const fetchingListRequest = () => ProductService({ data }).getProductListData;
  // const debouncedSearch = useDebounce(search, 200);

  const {
    refetch,
    data: cachedData,
    isLoading,
  } = useQuery(["product-list"], fetchingListRequest(), {
    enabled: false,
    onError: () => {
      //handle error
    },
    onSuccess: (response) => {
      console.log(response);
    },
  });

  console.log(isLoading);

  useMount(() => {
    if (!cachedData) return refetch();
  });

  // useUpdateEffect(() => {
  //   refetch();
  // }, [debouncedSearch]);

  return (
    <div className={styles.container}>
      <div className={styles.child}>
        <div id="filter" className={styles.filter}>
          <FilterSection />
        </div>
        <div className={styles.productContainer}>
          <div id="products" className={styles.products}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>

          <div className={styles.viewMore}>
            <Button size="large">View more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

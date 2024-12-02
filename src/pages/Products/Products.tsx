import { Button } from "antd";
import { FilterSection } from "./components/FilterSection/FilterSection";
import { ProductItem } from "./components/ProductItem/Productitem";
import styles from "./styles.module.scss";

export const Products = () => {
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

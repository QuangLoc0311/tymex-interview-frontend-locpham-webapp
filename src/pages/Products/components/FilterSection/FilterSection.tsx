import { Button, Input, Select, Slider } from "antd";
import styles from "./styles.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { MetaType, ProductMetadataType } from "../types";
import { useState } from "react";
import { useDebounce } from "src/hooks/useDebounce";
import { useUpdateEffect } from "react-use";

export const FilterSection = ({
  productMeta,
  meta,
  setMeta,
  refetch,
}: {
  productMeta?: ProductMetadataType;
  meta: MetaType;
  setMeta?: React.Dispatch<React.SetStateAction<MetaType>>;
  refetch?: (meta: MetaType) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState(meta.search || "");
  const [priceRange, setPriceRange] = useState<number[]>([
    meta.minPrice || 50,
    meta.maxPrice || 150,
  ]);

  const debouncedSearchTerm = useDebounce(searchTerm, 300) as string;
  const debouncedPriceRange = useDebounce(
    `${priceRange[0]}, ${priceRange[1]}`,
    300
  ) as string;

  useUpdateEffect(() => {
    if (debouncedSearchTerm && refetch) {
      refetch({
        ...meta,
        search: debouncedSearchTerm,
        minPrice: parseFloat(debouncedPriceRange.split(",")[0]),
        maxPrice: parseFloat(debouncedPriceRange.split(",")[1]),
      });
    }
  }, [debouncedSearchTerm, debouncedPriceRange]);

  const updateSortMeta = (s: MetaType, key: string, value: string) => {
    const index = s.sortBy?.indexOf(key);
    return {
      ...s,
      sortBy:
        index !== -1
          ? s.sortBy?.map((item, i) => (i === index ? key : item))
          : [...(s.sortBy || []), key],
      sortDirection:
        index !== -1
          ? s.sortDirection?.map((item, i) => (i === index ? value : item))
          : [...(s.sortDirection || []), value],
    };
  };

  return (
    <>
      <div data-testid="search-filter">
        <Input
          size="large"
          value={searchTerm}
          addonBefore={<SearchOutlined />}
          placeholder="Quick search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div data-testid="price-range-filter" className={styles.filterBlock}>
        <label>Price</label>
        <Slider
          max={200}
          min={0.01}
          step={0.01}
          tooltip={{ autoAdjustOverflow: true }}
          range={{ draggableTrack: true }}
          defaultValue={[50, 150]}
          value={priceRange}
          marks={{ 0: "0.00 ETH", 200: "200 ETH" }}
          onChange={(value: number[]) => setPriceRange(value)}
        />
      </div>

      <div data-testid="tier-filter" className={styles.filterBlock}>
        <label>Tier</label>
        <Select
          value={meta.tier}
          showSearch
          placeholder="Select tier"
          optionFilterProp="label"
          onChange={(value) => {
            if (setMeta)
              setMeta((s) => ({
                ...s,
                tier: value,
              }));
          }}
          options={productMeta?.tiers?.map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </div>

      <div data-testid="theme-filter" className={styles.filterBlock}>
        <label>Theme</label>
        <Select
          value={meta.theme}
          showSearch
          placeholder="Select theme"
          optionFilterProp="label"
          onChange={(value) => {
            if (setMeta)
              setMeta((s) => ({
                ...s,
                theme: value,
              }));
          }}
          options={productMeta?.themes?.map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </div>

      <div data-testid="time-sort-filter" className={styles.filterBlock}>
        <label>Time</label>
        <Select
          showSearch
          placeholder="Select time"
          optionFilterProp="label"
          onChange={(value) => {
            if (setMeta) {
              setMeta((s) => updateSortMeta(s, "createdAt", value));
            }
          }}
          value={
            meta.sortBy?.includes("price")
              ? meta.sortDirection?.[meta.sortBy.indexOf("createdAt")]
              : undefined
          }
          options={[
            {
              value: "desc",
              label: "Lastest",
            },
            {
              value: "asc",
              label: "Oldest",
            },
          ]}
        />
      </div>

      <div data-testid="price-sort-filter" className={styles.filterBlock}>
        <label>Price</label>
        <Select
          showSearch
          placeholder="Select price order"
          optionFilterProp="label"
          onChange={(value) => {
            if (setMeta) {
              setMeta((s) => updateSortMeta(s, "price", value));
            }
          }}
          value={
            meta.sortBy?.includes("price")
              ? meta.sortDirection?.[meta.sortBy.indexOf("price")]
              : undefined
          }
          options={[
            {
              value: "asc",
              label: "Low to high",
            },
            {
              value: "desc",
              label: "High to low",
            },
          ]}
        />
      </div>

      <div data-testid="reset-filter" className={styles.control}>
        <Button
          onClick={() => {
            if (setMeta) setMeta({});
          }}
        >
          Reset filter
        </Button>
      </div>
    </>
  );
};

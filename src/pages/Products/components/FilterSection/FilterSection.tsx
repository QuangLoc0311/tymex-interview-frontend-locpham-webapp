import { Button, Input, Select, Slider } from "antd";
import styles from "./styles.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { MetaType, ProductMetadataType } from "../types";

export const FilterSection = ({
  productMeta,
  meta,
  setMeta,
}: {
  productMeta?: ProductMetadataType;
  meta: MetaType;
  setMeta: React.Dispatch<React.SetStateAction<MetaType>>;
}) => {
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
      <Input
        size="large"
        value={meta.search}
        addonBefore={<SearchOutlined />}
        placeholder="Quick search"
        onChange={(e) =>
          setMeta((s) => ({
            ...s,
            search: e.target.value,
          }))
        }
      />
      <div className={styles.filterBlock}>
        <label>Price</label>
        <Slider
          max={200}
          min={0.01}
          step={0.01}
          tooltip={{ autoAdjustOverflow: true }}
          range={{ draggableTrack: true }}
          defaultValue={[50, 150]}
          value={[meta.minPrice || 50, meta.maxPrice || 150]}
          marks={{ 0: "0.00 ETH", 200: "200 ETH" }}
          onChange={(value: number[]) =>
            setMeta((s) => ({
              ...s,
              minPrice: value[0],
              maxPrice: value[1],
            }))
          }
        />
      </div>

      <div className={styles.filterBlock}>
        <label>Tier</label>
        <Select
          value={meta.tier}
          showSearch
          placeholder="Select tier"
          optionFilterProp="label"
          onChange={(value) =>
            setMeta((s) => ({
              ...s,
              tier: value,
            }))
          }
          options={productMeta?.tiers?.map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </div>

      <div className={styles.filterBlock}>
        <label>Theme</label>
        <Select
          value={meta.theme}
          showSearch
          placeholder="Select theme"
          optionFilterProp="label"
          onChange={(value) =>
            setMeta((s) => ({
              ...s,
              theme: value,
            }))
          }
          options={productMeta?.themes?.map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </div>

      <div className={styles.filterBlock}>
        <label>Time</label>
        <Select
          showSearch
          placeholder="Select time"
          optionFilterProp="label"
          onChange={(value) =>
            setMeta((s) => updateSortMeta(s, "createdAt", value))
          }
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

      <div className={styles.filterBlock}>
        <label>Price</label>
        <Select
          showSearch
          placeholder="Select price order"
          optionFilterProp="label"
          onChange={(value) =>
            setMeta((s) => updateSortMeta(s, "price", value))
          }
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

      <div className={styles.control}>
        <div onClick={() => setMeta({})}>Reset filter</div>
        <Button size="large">Search</Button>
      </div>
    </>
  );
};

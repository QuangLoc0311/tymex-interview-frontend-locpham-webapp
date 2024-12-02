import { Button, Input, Select, Slider } from "antd";
import styles from "./styles.module.scss";
import { SearchOutlined } from "@ant-design/icons";

export const FilterSection = () => {
  return (
    <>
      <Input
        size="large"
        addonBefore={<SearchOutlined />}
        placeholder="Quick search"
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
          marks={{ 0: "0.00 ETH", 200: "200 ETH" }}
        />
      </div>

      <div className={styles.filterBlock}>
        <label>Tier</label>
        <Select
          showSearch
          placeholder="Select tier"
          optionFilterProp="label"
          onChange={() => {}}
          onSearch={() => {}}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "tom",
              label: "Tom",
            },
          ]}
        />
      </div>

      <div className={styles.filterBlock}>
        <label>Theme</label>
        <Select
          showSearch
          placeholder="Select theme"
          optionFilterProp="label"
          onChange={() => {}}
          onSearch={() => {}}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "tom",
              label: "Tom",
            },
          ]}
        />
      </div>

      <div className={styles.filterBlock}>
        <label>Time</label>
        <Select
          showSearch
          placeholder="Select time"
          optionFilterProp="label"
          onChange={() => {}}
          onSearch={() => {}}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "tom",
              label: "Tom",
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
          onChange={() => {}}
          onSearch={() => {}}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "tom",
              label: "Tom",
            },
          ]}
        />
      </div>

      <div className={styles.control}>
        <div>Reset filter</div>
        <Button size="large">Search</Button>
      </div>
    </>
  );
};

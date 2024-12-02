import { Button, Flex } from "antd";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Flex align="center" justify="space-between">
        <div className={styles.navigation}>
          <Flex gap={"5rem"}>
            <div className={styles.item}>Home</div>
            <div className={styles.item}>About Us</div>
            <div className={styles.item}>Market Place</div>
            <div className={styles.item}>Road Map</div>
          </Flex>
        </div>

        <div className="">
          <Button>Connect Wallet</Button>
        </div>
      </Flex>
    </div>
  );
};

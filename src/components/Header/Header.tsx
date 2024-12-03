import { Button, Flex } from "antd";
import styles from "./styles.module.scss";
import { isMobile } from "react-device-detect"; // sometimes true even on Chrome MS
import { Link } from "react-router";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.header}>
      {!isMobile ? (
        <div className={styles.container}>
          <Flex align="center" justify="space-between">
            <div className={styles.navigation}>
              <Flex gap={"5rem"}>
                <div className={styles.item}>
                  <Link to={"/home"}>Home</Link>
                </div>
                <div className={styles.item}>
                  <Link to={"/about"}>About Us</Link>
                </div>
                <div className={styles.item}>
                  <Link to={"/market"}>Market Place</Link>
                </div>
                <div className={styles.item}>
                  <Link to={"/roadmap"}>Road Map</Link>
                </div>
              </Flex>
            </div>

            <div className="">
              <Button>Connect Wallet</Button>
            </div>
          </Flex>
        </div>
      ) : (
        <>
          {open ? (
            <CloseOutlined sizes="large" onClick={() => setOpen(false)} />
          ) : (
            <MenuOutlined sizes="large" onClick={() => setOpen(true)} />
          )}
          {open ? (
            <div className={styles.headerOverlay}>
              <div className={styles.navigation} onClick={() => setOpen(false)}>
                <div className={styles.item}>
                  <Link to={"/home"}>Home</Link>
                </div>
                <div className={styles.item}>
                  <Link to={"/about"}>About Us</Link>
                </div>
                <div className={styles.item}>
                  <Link to={"/market"}>Market Place</Link>
                </div>
                <div className={styles.item}>
                  <Link to={"/roadmap"}>Road Map</Link>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

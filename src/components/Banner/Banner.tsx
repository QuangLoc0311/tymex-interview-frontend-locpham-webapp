import BannerImage from "../../assets/banner.jpeg";
import styles from "./styles.module.scss";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={BannerImage} />
    </div>
  );
};

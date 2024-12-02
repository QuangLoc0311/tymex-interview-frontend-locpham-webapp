import styles from "./styles.module.scss";
import Char_1 from "src/assets/characters/char_1.png"; // Updated to relative path
import Char_2 from "src/assets/characters/char_2.png"; // Updated to relative path
import Char_3 from "src/assets/characters/char_3.png"; // Updated to relative path
import Char_4 from "src/assets/characters/char_4.png"; // Updated to relative path
import Char_5 from "src/assets/characters/char_5.png"; // Updated to relative path
import ETH from "src/assets/logos_ethereum.png";
import { HeartTwoTone } from "@ant-design/icons";
import { Avatar } from "antd";

type TProductItem = {
  tier?: "legendary" | "epic" | "common" | "rare" | "mythic";
};

export const ProductItem = ({ tier = "mythic" }: TProductItem) => {
  const characterImages = [Char_1, Char_2, Char_3, Char_4, Char_5];

  const getRandomCharacterImage = () => {
    const randomIndex = Math.floor(Math.random() * characterImages.length);
    return characterImages[randomIndex];
  };

  return (
    <div id="productItem" className={styles.container}>
      <div className={`${styles.image} ${styles[tier]}`}>
        <div className={styles.tier}>{tier}</div>
        <img src={getRandomCharacterImage()} />
        <div className={styles.heart}>
          <HeartTwoTone color="#fd0000" />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.product}>
          <div className={styles.name}>The DJ</div>
          <div className={styles.price}>
            <img src={ETH} />
            <div>2,75 ETH</div>
          </div>
        </div>

        <div className={styles.author}>
          <Avatar
            style={{ width: "32px", background: "#ffffff" }}
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
          />
          <div className={styles.authorName}>Ghozali_Ghozalu</div>
        </div>
      </div>
    </div>
  );
};

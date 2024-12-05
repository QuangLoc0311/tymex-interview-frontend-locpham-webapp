import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import Char_1 from 'src/assets/characters/char_1.png';
import Char_2 from 'src/assets/characters/char_2.png';
import Char_3 from 'src/assets/characters/char_3.png';
import Char_4 from 'src/assets/characters/char_4.png';
import Char_5 from 'src/assets/characters/char_5.png';
import ETH from 'src/assets/logos_ethereum.png';
import { HeartTwoTone } from '@ant-design/icons';
import { Avatar } from 'antd';
import { DataType } from '../types';
import { TIER_RANGE } from 'src/configs/utils';

type TProductItem = {
  data?: DataType;
};

export const SingleProduct = ({ data }: TProductItem) => {
  const [randomCharacterIndex, setRandomCharacterIndex] = useState<number>(0);
  const characterImages = [Char_1, Char_2, Char_3, Char_4, Char_5];

  useEffect(() => {
    setRandomCharacterIndex(Math.floor(Math.random() * characterImages.length));
  }, [characterImages.length]);

  const getRandomCharacterImage = () => {
    return characterImages[randomCharacterIndex];
  };

  return (
    <div
      data-testid="single-product"
      id="product-item"
      className={styles.container}
    >
      <div
        className={`${styles.image} ${
          styles[
            TIER_RANGE?.includes(data?.category?.toLocaleLowerCase() || '')
              ? data?.category?.toLocaleLowerCase() || ''
              : 'common'
          ]
        }`}
      >
        <div id="single-product-tier" className={styles.tier}>
          {data?.tier}
        </div>
        <img id="single-product-image" src={getRandomCharacterImage()} />
        <div className={styles.heart}>
          <HeartTwoTone twoToneColor={data?.isFavorite ? '#fd0000' : ''} />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.product}>
          <div id="single-product-name" className={styles.name}>
            {data?.title}
          </div>
          <div id="single-product-price" className={styles.price}>
            <img src={ETH} />
            <div>{data?.price} ETH</div>
          </div>
        </div>

        <div className={styles.author}>
          <Avatar
            style={{ width: '32px', background: '#ffffff' }}
            src={data?.author?.avatar}
          />
          <div
            id="single-product-author"
            className={styles.authorName}
          >{`${data?.author.firstName} ${data?.author?.lastName}`}</div>
        </div>
      </div>
    </div>
  );
};

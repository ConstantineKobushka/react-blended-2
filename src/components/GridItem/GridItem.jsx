import styles from './GridItem.module.css';

const GridItem = ({ children }) => {
  return <li className={styles.item}>{children}</li>;
};
export default GridItem;

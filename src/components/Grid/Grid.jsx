import styles from './Grid.module.css';

const Grid = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default Grid;

import styles from './Text.module.css';

const Text = ({ children, textAlign = '', marginBottom = '0' }) => {
  return (
    <p
      className={[
        styles['text'],
        styles[textAlign],
        styles[`marginBottom${marginBottom}`],
      ].join(' ')}
    >
      {children}
    </p>
  );
};

export default Text;

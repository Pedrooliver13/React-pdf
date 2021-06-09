import { Text } from "@react-pdf/renderer";

import styles from './style.js';

const Title = ({ title, author }) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </>
  );
};

export default Title;

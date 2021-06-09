import { Text } from "@react-pdf/renderer";

import styles from "./style";

const Header = ({ children, ...props }) => {
  return (
    <Text style={styles.header} {...props}>
      {children}
    </Text>
  );
};

export default Header;

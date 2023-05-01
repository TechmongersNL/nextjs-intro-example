import Image from "next/image";
import RecordImage from "./record.png";
import styles from "./Logo.module.css";

const Logo = () => (
  <h1 className={styles.wrapper}>
    <Image
      width={35}
      height={35}
      className={styles.logo}
      src={RecordImage}
      alt="Music Record"
    />
    RecordStore
  </h1>
);

export default Logo;

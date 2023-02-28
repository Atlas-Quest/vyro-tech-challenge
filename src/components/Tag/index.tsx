import styles from "./index.module.scss";

export type Props = {
  children: React.ReactNode;
};

export default function Tag(props: Props) {
  const { children } = props;

  return <span className={styles.tag}>{children}</span>;
}

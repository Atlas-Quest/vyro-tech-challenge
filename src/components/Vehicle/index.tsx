import Tag from "../Tag";
import styles from "./index.module.scss";
import { Media } from "../../vehicle.types";

type Props = {
  media: Array<Media>;
  name: string;
  code: string;
  condition: "new" | "used" | "demo";
  is_sold: boolean;
};

export default function Vehicle(props: Props) {
  const { media, name, condition, is_sold } = props;

  // TODO
  // `props.media` is an array. Find the media item with placement='featured'
  let featuredMedia = media.find(m => m.placement === 'featured')
  let placeholderMedia = "https://via.placeholder.com/1000x600";

  let conditions = {
    new: "New",
    used: "Second hand",
    demo: "Dealer demo"
  }

  return (
    <div className={styles.vehicle}>
      <div className={styles.section}>
        <img className={styles.media} src={media ? featuredMedia?.src : placeholderMedia} alt="[alt]" />
        <h2 className={styles.name}>{name}</h2>

        {/* 
          TODO - The `condition` is in lowercase and not friendly. Map the condition as follows and dispay the friendly version:

          - new -> "New"
          - used -> "Second hand"
          - demo -> "Dealer demo"
        */}
        <Tag>{conditions[condition]}</Tag>

        {/* TODO - Add another <Tag/> component which shows "Sold" or "Available now", depending on whether the vehicle's is_sold property is true/false (respectively) */}
        <Tag>{is_sold ? 'Sold' : 'Available now'}</Tag>
      </div>
    </div>
  );
}

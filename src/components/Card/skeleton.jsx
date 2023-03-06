import { Skeleton } from "antd";
import "./style.css";

const CardSkeleton = ({ active = false }) => (
  <div className="card-skeleton">
    <Skeleton.Button
      active={active}
      style={{ height: "100%", width: "100%" }}
    />
  </div>
);

export default CardSkeleton;

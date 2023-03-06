import React from "react";
import CardSkeleton from "./skeleton";
import "./style.css";

const paddingSizeToClassNameMap = {
  none: null,
  s: "padding-small",
  m: "padding-medium",
  l: "padding-large",
};

const Card = ({
  isLoading,
  paddingSize = "m",
  className = "",
  children,
  ...props
}) =>
  !isLoading ? (
    <div
      className={`card ${`card--${paddingSizeToClassNameMap[paddingSize]}`} ${className}`}
      {...props}
    >
      {children}
    </div>
  ) : (
    <CardSkeleton active={isLoading} />
  );

export default Card;

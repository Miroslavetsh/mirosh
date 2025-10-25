import { ReactNode } from "react";

import styles from "./Container.module.scss";

type ContainerPropsTypes = {
  children?: ReactNode;
  className?: string;
  isBig?: boolean;
  id?: string;
};

const Container: React.FC<ContainerPropsTypes> = (props): React.JSX.Element => {
  const {
    children = <span></span>,
    className = "",
    isBig = false,
    id = "",
  } = props;
  const classNames = [styles.container, className];

  return (
    <div
      id={id}
      className={`${classNames.join(" ")} ${isBig ? styles._big : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;

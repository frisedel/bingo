import React from "react";
import classNames from "classnames";

import * as styles from "./Tile.module.scss";

type TileProps = {
    value: number;
    taken: boolean;
};

export const Tile: React.FC<TileProps> = (props) => {
    const taken = props.taken ? styles.taken : styles.free;
    return <div className={classNames(styles.tile, taken)}>{props.value}</div>;
};

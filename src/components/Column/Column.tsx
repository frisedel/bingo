import React from "react";
import { tileSquare } from "types";

import { Tile } from "../Tile";

import * as styles from "./Column.module.scss";

type ColumnProps = {
    letter: string;
    tiles: tileSquare[];
};

export const Column: React.FC<ColumnProps> = (props) => {
    return (
        <div className={styles.column}>
            <h1>{props.letter}</h1>
            {props.tiles.map((tile) => (
                <Tile value={tile.id} taken={tile.state} />
            ))}
        </div>
    );
};

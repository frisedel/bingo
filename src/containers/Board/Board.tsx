import React from "react";
import { tileSquare } from "types";

import { Column } from "components/Column";

import * as styles from "./Board.module.scss";

type BoardProps = {
    tiles: tileSquare[];
};

export const Board: React.FC<BoardProps> = ({ tiles }) => {
    return (
        <div className={styles.board}>
            <Column letter="B" tiles={tiles.slice(0, 15)} />
            <Column letter="I" tiles={tiles.slice(15, 30)} />
            <Column letter="N" tiles={tiles.slice(30, 45)} />
            <Column letter="G" tiles={tiles.slice(45, 60)} />
            <Column letter="O" tiles={tiles.slice(60, 75)} />
        </div>
    );
};

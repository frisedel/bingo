import React, { useState } from "react";
import { tileSquare } from "types";

import { Targets } from "components/Targets";

import { Board } from "../Board";

import * as styles from "./App.module.scss";

export const App: React.FC = () => {
    const { tiles, setTiles } = useTiles();
    const [currentTile, setCurrentTile] = useState<tileSquare>({ id: 0, char: "", state: false });

    const getNextTile = () => {
        const getRandom = (tiles: tileSquare[]): tileSquare => {
            return tiles[Math.floor(Math.random() * tiles.length)];
        };
        const newTile = getRandom(tiles.filter((tile) => !tile.state));

        if (newTile) {
            setCurrentTile(newTile);
            setTiles((prevState) =>
                prevState.map((tile) => {
                    if (tile.id === newTile.id) {
                        return { ...tile, state: true };
                    } else {
                        return tile;
                    }
                })
            );
        }
    };

    const clearGame = () => {
        setTiles((prevState) =>
            prevState.map((tile) => {
                return { ...tile, state: false };
            })
        );
        setCurrentTile({ id: 0, char: "", state: false });
    };

    return (
        <div className={styles.gameWrapper}>
            <div className={styles.infoWrapper}>
                <div className={styles.currentTile}>
                    {currentTile.char} {currentTile.id}
                </div>
                <button className={styles.nextButton} onClick={getNextTile}>
                    nästa
                </button>
            </div>
            <Board tiles={tiles} />
            <div>
                <Targets />
                <button onClick={clearGame}>nytt spel</button>
            </div>
        </div>
    );
};

const useTiles = () => {
    const getChar = (num: number) => {
        if (num >= 0 && num < 15) {
            return "B";
        } else if (num >= 15 && num < 30) {
            return "I";
        } else if (num >= 30 && num < 45) {
            return "N";
        } else if (num >= 45 && num < 60) {
            return "G";
        } else {
            return "O";
        }
    };

    const [tiles, setTiles] = useState<tileSquare[]>(
        Array.from(Array(75)).map((_, index) => {
            return { id: index + 1, char: getChar(index), state: false } as tileSquare;
        })
    );

    return { tiles, setTiles };
};

import React from "react";

export const Targets: React.FC = () => {
    return (
        <div>
            <div>
                <input type="checkbox" id="one" name="one" />
                <label htmlFor="one">En rad</label>
            </div>
            <div>
                <input type="checkbox" id="two" name="two" />
                <label htmlFor="two">Två rader</label>
            </div>
            <div>
                <input type="checkbox" id="all" name="all" />
                <label htmlFor="all">Hela brickan</label>
            </div>
        </div>
    );
};

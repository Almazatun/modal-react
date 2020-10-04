import React from "react";
import style from "./Background.module.css";

export const Background = (props) => {
    return props.show ? (
        <div className={style.Backdrop} onClick={props.clicked}> </div>
    ) : null;
};

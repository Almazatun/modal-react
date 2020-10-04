import React from "react";
import {Background} from "../Background/Background.jsx";
import style from "./Modal.module.css";

export const Modal = (props) => {
    const closeAndClear = () => {
        props.modalClosed();
        props.onChangeTitle("");
    };

    return (
        <>
            <Background show={props.show} clicked={closeAndClear}/>
            <div
                className={style.Modal}
                style={{
                    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                    opacity: props.show ? 1 : 0
                }}
            >
                {props.children}
            </div>
        </>
    );
};

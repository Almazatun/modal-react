import React from "react";
import style from "./SignIn.module.css";

export const SignIn = (props) => {
    const onChnage = (event) => {
        props.onChangeTitle(event.target.value);
    };

    const cancelHandler = () => {
        props.modalClosed();
        props.onChangeTitle("");
    };

    const sendMessage = () => {
        props.modalClosed();
        props.sendMessage(props.title);
        props.onChangeTitle("");
    };

    return (
        <div className={style.box}>
            <input type="text" value={props.title} onChange={onChnage}/>
            <div className={style.boxBtn}>
                <button onClick={cancelHandler}>cancel</button>
                <button onClick={sendMessage}>send message</button>
            </div>
        </div>
    );
};

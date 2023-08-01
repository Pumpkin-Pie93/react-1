import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';


const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Valera" }
    ];
    
    let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your it-camasutra?" },
        { id: 3, message: "Yo!!" },
        { id: 4, message: "Yo!!" },
        { id: 5, message: "Yo!!" },
        { id: 6, message: "Yo!!" }
    ];

    let messagesElements = messages.map(m => <Message message={m.message} />)
    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                {messagesElements}
               {/* <div className={s.message}></div> */}
            </div>
        </div>

    )
}

export default Dialogs;
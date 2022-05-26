import React from "react";
import { Header, Quota, Contract } from "../components/common";
import './AddStudent.css';
import { useState } from 'react';


function AddStudent() {

    const [isActiveContract, setIsActiveContract] = useState(false);
    const [isActiveQuota, setIsActiveQuota] = useState(true);

    const handleClickContract = () => {
        setIsActiveQuota(!isActiveQuota);
        setIsActiveContract(!isActiveContract);
       };

    const handleClickQuota = () => {
        setIsActiveContract(!isActiveContract);
        setIsActiveQuota(!isActiveQuota);
    };

    return(
        <>
            <Header/>
            <div className="contaner_AddStudent">
                <p className="title_Addstudent">Добавить студента</p>
                <div className="selector_AddStudent">
                    <div className="button_position_addStud">
                    <button onClick={handleClickContract} type="button" disabled={isActiveQuota} className="button_style_addstud">Контракт</button>
                    <button onClick={handleClickQuota} type="button" disabled={isActiveContract} className="button_style_addstud">Квота</button>
                    </div>
                    {
                    isActiveContract ? <Quota/>: <Contract/> 
                    }
                </div>
            </div>
        </>
    )
}

export default AddStudent;
import React from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './HomePage.css'

function HomePage() {
    let Navigation = useNavigate();


    const onClickBtn = (e) => {
        if (e.target.innerHTML === "Enter Details") {
            Navigation("/enter");
        } else {
            Navigation("/show");
        }

    }
    return (
        <div className='btnDivCss'>
            <Button variant="primary" onClick={(e) => onClickBtn(e)}>Enter Details</Button>
            <Button variant="primary" onClick={(e) => onClickBtn(e)}>Employee Details</Button>
        </div>
    );
}

export default HomePage;

import i18next from "i18next";
import React from "react";
import { useTranslation } from 'react-i18next';
import MenuComp from '../MenuComp/MenuComp';
import './style.css';

function HomeCompo() {
    const time = new Date().getHours()
    const minute = new Date().getMinutes()
    const week = new Date().getDay()

    const { t } = useTranslation();
    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }
    // console.log(thanks.text);
    
    return (
        <>
            <div className='container'>
                <nav className='navbar'>
                    <div className="left-text">
                        <p className="nav-text">{time}:{minute < 10 ? "0" + minute : minute}  {week === 1 ? t('thanks.1') : week === 2 ? t('thanks.2') : week === 3 ? t('thanks.3') : week === 4 ? t('thanks.4') : week === 5 ? t('thanks.5') : week === 6 ? t('thanks.6') : week === 7 ? t('thanks.7') : "err"}</p>
                    </div>
                    <div className="right-text">
                        <select className='til' onChange={(e) => handleClick(e.target.value)}>
                            <option className='tio' value="uz">O'zbekcha</option>
                            <option className='tio' value="eng">English</option>
                            <option className='tio' value="rus">Russia</option>
                        </select>
                        {/* <h3>{t('thanks.1')}</h3> */}
                        {/* <p className="nav-text"> <i class="fa-solid fa-caret-down"></i></p> */}

                    </div>
                </nav>
            </div>  
            <MenuComp />
        </>
    )
}

export default HomeCompo

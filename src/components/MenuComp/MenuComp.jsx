import React from 'react'
import logo from "../../assent/logo.svg"
import { useTranslation } from 'react-i18next';
import Group from "../../assent/Group.svg"
import "./style.css"
import FrameCompo from '../FrameCompo/FrameCompo'

function MenuComp() {
    const { t } = useTranslation();
    return (
        <>
            <div className="box">
                <div className="box-div">
                    <div className="box-di">
                        <div className="box-logo">
                            <img src={logo} alt="" style={{ cursor: "pointer" }} />
                        </div>
                        <div className="box-menu">
                            <i className="fa-solid fa-bars bot-fnt"></i>
                            <p>{t('name.Catalog')}</p>
                            <i className="fa-solid fa-angle-right bot-font"></i>
                        </div>
                    </div>
                    <div className="box-inp">
                        <input type="text" placeholder={t('name.last_text')} className="head-inp" />
                        <button className='box-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div className="right-box-icon">
                        <div className="box-icons">
                            <div className="icon">
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <p className="text-">{t('name.love')}</p>
                        </div>
                        <div className="box-icons">
                            <div className="icon">
                                <i className="fa-solid fa-code-compare"></i>
                            </div>
                            <p className="text--">{t('name.Comparison')}</p>
                        </div>
                        <div className="box-icons">
                            <div className="icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <p className="text">{t('name.Basket')}</p>
                        </div>
                        <div className="box-icon">
                            <div className="icn">
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="a">
                    <img src={Group} alt="" className='Group' />
                </div>
                <FrameCompo />
            </div>
        </>
        
    )
}

export default MenuComp

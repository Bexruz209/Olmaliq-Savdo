import React from 'react'
import logo from "../../assent/logo.svg"
import i18next from "i18next";
import { useTranslation } from 'react-i18next';
import Group from "../../assent/Group.svg"
import "./style.css"
import FrameCompo from '../FrameCompo/FrameCompo'
// import { cards } from "../../utils.js"

function MenuComp() {
    const { t } = useTranslation();
    // console.log(cards);
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
                            <p>Katalog</p>
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
                            <p className="text-icon">{t('name.love')}</p>
                        </div>
                        <div className="box-icons">
                            <div className="icon">
                                <i className="fa-solid fa-code-compare"></i>
                            </div>
                            <p className="text-icon">{t('name.Comparison')}</p>
                        </div>
                        <div className="box-icons">
                            <div className="icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <p className="text-icon">{t('name.Basket')}</p>
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
            {/* <div className="product-cards">
                {cards.map(({ product_name, product_title, product_price, product_sale, product_image }) => (
                    <div className="product-card">
                        <img src={product_image} alt="" className='product-card-img' />
                        <h4 className='product-header'>{product_name}</h4>
                        <p style={{ textAlign: "left" }} className='product-info'>{product_title}</p>
                        <div className="product-price">{product_price}</div>
                        <div className="month-price">
                            {product_sale}
                        </div>
                        <button className="product-card-btn">
                            <i className="fa-solid fa-cart-plus"></i>
                            {t('savatcha.savat')}</button>

                    </div>
                ))}
            </div> */}
        </>
        
    )
}

export default MenuComp

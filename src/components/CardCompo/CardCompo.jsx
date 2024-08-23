import React from 'react'
import { useTranslation } from 'react-i18next';
import { obj_card } from '../../utils';
import "./style.css"


export default function CardCompo() {
    const { t } = useTranslation();
    return (
        <>
            <div className="note2">
                <p className='note_text'>{t('botton.Products')}</p>
                <p className='note_text2'>{t('botton.Products')}</p>
            </div>
            <div className="live">
                <div className="live_left">
                    <div className="left">
                        {obj_card.map(({ product_name, product_title, product_price, product_sale, product_img }) =>
                            <div className="lleft">
                                <img src={product_img} alt="" />
                                <h2 className='left_name'>{product_name}</h2>
                                <p className='left_p'>{product_title}</p>
                                <h3 className='left_h3'>{product_price}</h3>
                                <p className='leftt_p'>{product_sale}</p>
                                <button className="left_btn">
                                    <i className="fa-solid fa-cart-plus"></i>Savatchaga</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="live_left"></div>
            </div>
        </>
    )
}

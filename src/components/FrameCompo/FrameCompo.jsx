import React from 'react'
import Telefon from "../../assent/Telefon.svg";
import Noutbuk from "../../assent/Noutbuk.svg";
import Televizor from "../../assent/Televizor.svg";
import Qiz from "../../assent/Qiz.svg";
import Pilisos from "../../assent/Pilisos.svg";
import Pilisoss from "../../assent/Pilisoss.svg";
import lg from "../../assent/lg.svg"
import mi from "../../assent/mi.svg"
import apple from "../../assent/apple.svg"
import lenove from "../../assent/lonove.svg"
import hp from "../../assent/hp.svg"
import samsung from "../../assent/samsung.svg"
import { useTranslation } from 'react-i18next';






import "./style.css"
import CardCompo from '../CardCompo/CardCompo';

export default function FrameCompo() {
    const { t } = useTranslation();
    return (
        <>
            <div className="Cont">
                <div className="note">
                    <div className="note1">
                        <img src={Telefon} alt="" />
                        <p className='note1_text'>{t('botton.phone')}</p>
                    </div>
                    <div className="note1">
                        <img src={Noutbuk} alt="" />
                        <p className='note2_text'>{t('botton.book')}</p>
                    </div>
                    <div className="note1">
                        <img src={Televizor} alt="" />
                        <p className='note1_text'>{t('botton.tv')}</p>
                    </div>
                    <div className="note1">
                        <img src={Qiz} alt="" />
                        <p className='note3_text'>{t('botton.lave')}</p>
                    </div>
                    <div className="note1">
                        <img src={Pilisos} alt="" />
                        <p className='note3_text'>{t('botton.pli')}</p>
                    </div>
                    <div className="note1">
                        <img src={Pilisoss} alt="" />
                        <p className='note4_text'>{t('botton.auto')}</p>
                    </div>
                </div>
            </div>
            <div className="note2">
                <p className='note_text'>{t('botton.Brands')}</p>
                <p className='note_text2'>{t('botton.Brands')}</p>
            </div>
            <div className="g">
                <img src={lg} alt="" />
                <img src={mi} alt="" />
                <img src={apple} alt="" />
                <img src={lenove} alt="" />
                <img src={hp} alt="" />
                <img src={samsung} alt="" />
            </div>
            <CardCompo />
        </>
    )
}

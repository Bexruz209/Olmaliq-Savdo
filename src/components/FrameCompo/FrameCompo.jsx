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







import "./style.css"

export default function FrameCompo() {
    return (
        <>
            <div className="Cont">
                <div className="note">
                    <div className="note1">
                        <img src={Telefon} alt="" />
                        <p className='note1_text'>Telefon  va <br /> Smartfonlar</p>
                    </div>
                    <div className="note1">
                        <img src={Noutbuk} alt="" />
                        <p className='note1_text'>Orgtexnika va <br /> Kompyuterlar</p>
                    </div>
                    <div className="note1">
                        <img src={Televizor} alt="" />
                        <p className='note1_text'>Televizor va <br />Videotexnikalar</p>
                    </div>
                    <div className="note1">
                        <img src={Qiz} alt="" />
                        <p className='note1_text'>Chiroy va <br />go'zallik</p>
                    </div>
                    <div className="note1">
                        <img src={Pilisos} alt="" />
                        <p className='note1_text'>Maishiy <br />texnikalar</p>
                    </div>
                    <div className="note1">
                        <img src={Pilisoss} alt="" />
                        <p className='note1_text'>Avto <br />jihozlar</p>
                    </div>
                </div>
            </div>
            <div className="note2">
                <p className='note_text'>Brandlar</p>
                <p className='note_text2'>Brandlar</p>
            </div>
            <div className="g">
                <img src={lg} alt="" />
                <img src={mi} alt="" />
                <img src={apple} alt="" />
                <img src={lenove} alt="" />
                <img src={hp} alt="" />
                <img src={samsung} alt="" />
            </div>
        </>
    )
}

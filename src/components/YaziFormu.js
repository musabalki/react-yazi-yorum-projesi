import React, { useEffect, useState } from "react"
//import axios from "axios"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import { api } from "../api"

const YaziFormu = (props) => {
    const [yazi, setYazi] = useState({ title: "", content: "" });
    const [hata, setHata] = useState("");
    const handleOnChange = (e) => {
        setYazi({ ...yazi, [e.target.name]: e.target.value })

    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");
        
        
        if(props.yazi.title){
            api().put(`/posts/${props.match.params.id}`, yazi)
            .then((response) => props.history.push(`/posts/${props.match.params.id}`))
            .catch(error => { setHata("Başlık ve yazı içeriği alanları zorunludur") })
        }else{
            api().post("/posts", yazi)
            .then((response) => props.history.push('/'))
            .catch(error => { setHata("Başlık ve yazı içeriği alanları zorunludur") })
        }
    }
    useEffect(()=>{
        if(props.yazi?.title && props.yazi?.content){
            setYazi(props.yazi)
        }
    }, [props.yazi])
    return (
        <div className="ui form error">
            <div className="field">
                <label>Yazı Başlığı</label>
                {hata && (<div className="ui error message">
                    <div className="header">Hata</div>
                    <p>{hata}</p>
                </div>)}
                <input name="title" onChange={handleOnChange} value={yazi.title} type="text" />
            </div>
            <div className="field">
                <label>Yazi İçeriği</label>
                <textarea name="content" onChange={handleOnChange} value={yazi.content} rows="3"></textarea>
            </div>
            <button onClick={onFormSubmit} className="ui primary button">
                Gönder
            </button>
            <button className="ui button">
                İptal
            </button>
            <Link to="/">Anasayfa</Link>
        </div>
    )
}

export default withRouter(YaziFormu);
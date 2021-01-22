import React, { useEffect, useState } from "react"
import { api } from "../api";
import YaziFormu from "./YaziFormu"

const YaziDuzenle=(props)=>{
    const {id}=props.match.params;
    const [yazi,setYazi]=useState({});
    useEffect(()=>{
        api().get(`/posts/${id}`)
        .then(response=>{
            setYazi({title:response.data.title,content:response.data.content})
            //console.log(response.data.content)
        })
    },[])
    return (
        <div>
            <h1>Yazı Düzenleme Formu</h1>
            <YaziFormu yazi={yazi}></YaziFormu>
        </div>
    )

}

export default YaziDuzenle;
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const YaziListesi = () => {
    const [yaziListesi, setYaziListesi] = useState([]);
    useEffect(() => {
        axios
            .get('https://react-yazi-yorum.herokuapp.com/posts')
            .then((response) => setYaziListesi(response.data))
            .catch((error) => console.log(error))
    }, [])

    return <div className="ui relaxed divided list">
        {
            yaziListesi.map((yazi) => {
                return (

                    <div className="item" key={yazi.id}>
                        <i className="large github middle aligned icon"></i>
                        <div className="content">
                            
                            <Link className="header" to={`/posts/${yazi.id}`}>{yazi.title} </Link>
                            <div className="description">{yazi.created_at}</div>
                        </div>
                    </div>
                )
            })
        }
    </div>
}

export default YaziListesi;
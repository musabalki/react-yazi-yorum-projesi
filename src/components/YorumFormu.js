import React,{useState} from "react";
const YORUM_BASLANGIC={display_name:"",body:""};

const YorumFormu = (props) => {
    const [yorum,setYorum]=useState(YORUM_BASLANGIC);
    const handleOnChange=event=>{
        setYorum({...yorum,[event.target.name]:event.target.value});
    }
    
    return (
        <React.Fragment>
            <h3>Yorum Yap</h3>
            <form className="ui form" onSubmit={(event)=>{
                
                props.handleSubmit(event,yorum)
                setYorum(YORUM_BASLANGIC)
            }}>
                <div className="ui small icon input">
                    <input name="display_name" type="text" placeholder="Adınız" value={yorum.display_name} onChange={handleOnChange} />
                </div>
                <textarea name="body" placeholder="Yorum" rows="2" value={yorum.body} onChange={handleOnChange}></textarea>
                <button className="ui blue button" type="submit">Yorum Yap</button>
            </form>
        </React.Fragment>
    )
}

export default YorumFormu;






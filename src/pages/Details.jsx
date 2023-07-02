import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import './DigimonPage.css';
import './Details.css';
import { useParams } from "react-router-dom";

const Details = () => {

    const [digimonDetails, setDigimonDetails] = useState([])

    const fetchDigimonDetail = useCallback(async () => {
        try {
            const {data} = await axios.get(`https://digimon-api.vercel.app/api/digimon/`)
            setDigimonDetails(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect (() => {
        fetchDigimonDetail()
    }, [])

    
    const renderDigimonDetails = () => {
        return (
        <body className="bodyContainerDetails">
            <div className="containerDetails">
                {digimonDetails.map(digimon => (
                    <div className="digimonContainerDetails">
                        <h4 className="nameDecoration">{digimon.name}</h4>
                        <img className="imgDigimons" src={digimon.img} alt="digimons image"/>
                        <h3 className="nameDecoration">Level: {digimon.level}</h3>
                    </div>
                ))}
            </div>
        </body>
        )
    }

    return (
        <div className="containerDetails">
            <h1 className="textDecorationDetails">Detalhes do Digimon</h1>
            {renderDigimonDetails()}
        </div>
    );
}

export default Details;
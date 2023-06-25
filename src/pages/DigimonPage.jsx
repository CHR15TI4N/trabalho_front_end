import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const DigimonPage = () => {

    const [DigimonData, setDigimonData] = useState([])

    const fetchDigimon = useCallback(async () => {
        try {
            const {data} = await axios.get('https://digimon-api.vercel.app/api/digimon')
            setDigimonData(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        fetchDigimon()
    }, [])

    const renderDigimonData = () => {
        return(
            <div>
                <h2>Nomes:</h2>
                {DigimonData.map(digimon => (
                    <div className="digimonContainer">
                        <h4>{digimon.name}</h4>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <h1>Todos os Digimons</h1>
            {renderDigimonData()}
        </div>
    );
}

export default DigimonPage;
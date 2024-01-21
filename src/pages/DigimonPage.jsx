import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import './DigimonPage.css';
import { useNavigate } from "react-router-dom";


const DigimonPage = () => {

    const [DigimonData, setDigimonData] = useState([])

    const navigate = useNavigate()

    const onClickNavigate = () => {
        navigate('/details')
    }

    const fetchDigimon = useCallback(async () => {
        try {
            const {data} = await axios.get('https://digimon-api.vercel.app/api/digimon')
            setDigimonData(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => { // é utilizado para lidar com lógica que não pertence diretamente à renderização, como chamadas a APIs, atualizações de estado, entre outros. Isso ajuda a separar as preocupações de renderização e efeitos colaterais no desenvolvimento de componentes React.
        fetchDigimon()
    }, [])

    const renderDigimonData = () => {
        return(
            <body className="bodyContainer">
                <div className="container">
                        {DigimonData.map(digimons => (
                            <div className="digimonContainer">
                                <h4 className="nameDecoration">{digimons.name}</h4>
                                {/* <img className="imgDigimons" src={digimon.img}/> */}
                                <button onClick={onClickNavigate} className="buttonContainer">
                                    Ver informações
                                </button>
                            </div>
                        ))}
                </div>
            </body>
        )
    }


    return (
        <div>
            <div className="container">
                <h1 className="textDecoration">Todos os Digimons</h1>
                {renderDigimonData()}
            </div>
        </div>
    );
}

export default DigimonPage;
import { useEffect, useState } from "react"
// import convertSeconds from "../utils/convertSeconds.js"

const TimeElements = ({ expectedDate }) => {

    // const calculateLeftTime = (seconds) => {
    //     return {
    //         dias: Math.floor(Math.floor(seconds / 86400)),
    //         horas: Math.floor((seconds % 86400) / 3600),
    //         minutos: Math.floor((seconds % 3600) / 60),
    //         segundos: seconds % 60
    //     }
    // }
    // let diffSeconds = Math.floor(expectedDate.getTime() / 1000) - Math.floor(new Date().getTime() / 1000)

    // const [leftTime, setLeftTime] = useState(diffSeconds - 1)
    // const [renderTime, setRenderTime] = useState(calculateLeftTime(diffSeconds - 1))
    // useEffect(() => {
    //     let timer = setInterval(() => {
    //         setRenderTime(calculateLeftTime(leftTime))
    //         setLeftTime(leftTime - 1)
    //         console.log(leftTime)
    //     }, 1000)
    //     return () => clearInterval(timer)
    // }, [leftTime])

    //Opción generada por ChatGPT

    const calculateLeftTime = (seconds) => {
        return {
            dias: Math.floor(Math.floor(seconds / 86400)),
            horas: Math.floor((seconds % 86400) / 3600),
            minutos: Math.floor((seconds % 3600) / 60),
            segundos: seconds % 60,
        };
    };

    const calculateDiffSeconds = () => {
        const currentTime = Math.floor(new Date().getTime() / 1000);
        const targetTime = Math.floor(expectedDate.getTime() / 1000);
        return Math.max(targetTime - currentTime, 0); //Calcula el maximo de los dos valores ingresados como parametro
    };

    const [leftTime, setLeftTime] = useState(calculateDiffSeconds());
    const [renderTime, setRenderTime] = useState(calculateLeftTime(leftTime));

    useEffect(() => {
        const timer = setInterval(() => {
            setLeftTime((prevLeftTime) => Math.max(prevLeftTime - 1, 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setRenderTime(calculateLeftTime(leftTime));
    }, [leftTime]);

    return (
        <>
            <div className="timerCard__elements">
                <div className="timeElement">
                    <p className="timeElement__time">{renderTime.dias}</p>
                </div>
                <div className="timeElement">
                    <p className="timeElement__time">{renderTime.horas}</p>
                </div>
                <div className="timeElement">
                    <p className="timeElement__time">{renderTime.minutos}</p>
                </div>
                <div className="timeElement">
                    <p className="timeElement__time">{renderTime.segundos}</p>
                </div>
            </div>
        </>
    )
}

export default TimeElements
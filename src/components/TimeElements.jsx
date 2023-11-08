import { useEffect, useState } from "react"
import convertSeconds from "../utils/convertSeconds"

const TimeElements = ({ seconds }) => {
    const [time, setTime] = useState(seconds - 1)
    const [timeData, setTimeData] = useState(convertSeconds(time))
    useEffect(() => {
        setTimeData(convertSeconds(time))
        setTimeout(() => {
            setTime(time - 1)
            // console.log(time)
            console.log(timeData) 
        }, 1000)
    }, [time])
    return (
        <>
            <div className="timerCard__elements">
                <div className="timeElement">
                    <p className="timeElement__time">{timeData.dias}</p>
                </div>
                <div className="timeElement">
                    <p className="timeElement__time">{timeData.horas}</p>
                </div>
                <div className="timeElement">
                    <p className="timeElement__time">{timeData.minutos}</p>
                </div>
                <div className="timeElement">
                    <p className="timeElement__time">{timeData.segundos}</p>
                </div>
            </div>
        </>
    )
}

export default TimeElements
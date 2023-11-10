import { useEffect, useState } from "react"
import testimage from '../assets/cellphone.jpg'
import TimeElements from "./TimeElements.jsx"



const TimerCard = ({title, shortDesc, longDesc, date}) => {

    const [time, setTime] = useState(0)
    const [timeOn, setTimeOn] = useState(false)
    useEffect(() => {
        setTime(new Date(date))
        setTimeOn(true)
    }, [])
    // console.log(time)
    if (timeOn) {
        return (
            <>
                <div className="timerCard">
                    <img className="timerCard__img" src={testimage} alt="Imagen descripción" />

                    <div className="timerCard__data">
                        <h2 className="timerCard__title">{title}</h2>
                        <p className="timerCard__shortDesc">{shortDesc}</p>
                        <hr className="timerCard__hr" />
                        <p className="timerCard__longDesc">{longDesc}</p>
                    </div>
                    {/* {timeOn === false ? <TimeElements seconds={time}/> : <TimeElements seconds={0}/>} */}
                    <TimeElements expectedDate={time} />
                </div>
            </>
        )
    }


}

export default TimerCard
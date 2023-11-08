import TimeElements from "./TimeElements.jsx"
import testimage from '../assets/cellphone.jpg'
import { useEffect, useState } from "react"
import secondsDiff from "../utils/getTime.js"

const TimerCard = () => {


    const [time, setTime] = useState(0)
    const [timeOn, setTimeOn] = useState(false)
    useEffect(() => {
        secondsDiff('2023-11-08T16:00:00')
            .then(res => {
                setTime(res)
                setTimeOn(true)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    // console.log(time)
    if (timeOn) {
        return (
            <>
                <div className="timerCard">
                    <img className="timerCard__img" src={testimage} alt="Imagen descripción" />

                    <div className="timerCard__data">
                        <h2 className="timerCard__title">Title</h2>
                        <p className="timerCard__shortDesc">Una corta descripcion del evento</p>
                        <hr className="timerCard__hr" />
                        <p className="timerCard__longDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam quam quaerat voluptas quos rem at placeat minus harum reprehenderit!</p>
                    </div>
                    {/* {timeOn === false ? <TimeElements seconds={time}/> : <TimeElements seconds={0}/>} */}
                    <TimeElements seconds={time} />
                </div>
            </>
        )
    }


}

export default TimerCard
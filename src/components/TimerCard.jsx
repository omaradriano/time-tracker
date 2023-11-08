// import TimeElement from "./TimeElement.jsx"
import testimage from '../assets/cellphone.jpg'

const TimerCard = () => {
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
                <div className="timerCard__elements">
                    <div className="timeElement">
                        <p className="timeElement__time">00</p>
                    </div>
                    <div className="timeElement">
                        <p className="timeElement__time">00</p>
                    </div>
                    <div className="timeElement">
                        <p className="timeElement__time">00</p>
                    </div>
                    <div className="timeElement">
                        <p className="timeElement__time">00</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimerCard
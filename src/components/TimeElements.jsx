import { useEffect, useState } from "react";
import TimeElement from "./TimeElement.jsx";
// import convertSeconds from "../utils/convertSeconds.js"

const TimeElements = ({ expectedDate }) => {

    //Calcular el tiempo restante. Devuelve objeto con los datos en dias, horas, minutos y segundos ya para renderizar
    const calculateLeftTime = (seconds) => {
        return {
            dias: Math.floor(Math.floor(seconds / 86400)),
            horas: Math.floor((seconds % 86400) / 3600),
            minutos: Math.floor((seconds % 3600) / 60),
            segundos: seconds % 60,
        };
    };

    //Función que calcula únicamente los segundos restantes, en caso de llegar a cero, ahí se queda. 
    const calculateDiffSeconds = () => {
        const currentTime = Math.floor(new Date().getTime() / 1000);
        const targetTime = Math.floor(expectedDate.getTime() / 1000);
        return Math.max(targetTime - currentTime, 0); //Calcula el maximo de los dos valores ingresados como parametro
    };

    //Hooks usados para medir el tiempo y el contador inverso
    const [leftTime, setLeftTime] = useState(calculateDiffSeconds());
    const [renderTime, setRenderTime] = useState(calculateLeftTime(leftTime));

    //useEffect que vigila el tiempo para renderizar los datos cada segundo
    useEffect(() => {
        const timer = setInterval(() => {
            setLeftTime((prevLeftTime) => Math.max(prevLeftTime - 1, 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    //Hook que vigila los segundos restantes y actualiza el componente.
    useEffect(() => {
        setRenderTime(calculateLeftTime(leftTime));
    }, [leftTime]);

    //Verifica si la pestaña es visible. En caso de ser visible de nuevo, vuelve a actualizar los segundos restantes para evitar el desfase de tiempo cuando se encuentra inactiva.
    function handleVisibility() {
        if (document.visibilityState === "visible") {
            setLeftTime(calculateDiffSeconds());
            console.log('Ahora es visible')
        }
    }
    //Ejecuta handleVisibility
    useEffect(() => {
        document.addEventListener("visibilitychange", handleVisibility);
        return () => document.removeEventListener('visibilitychange', handleVisibility)
    }, [document.visibilityState])


    //Renderizado de los componentes
    return (
        <>
            <div className="timerCard__elements">
                <TimeElement counter={renderTime.dias}/>
                <TimeElement counter={renderTime.horas}/>
                <TimeElement counter={renderTime.minutos}/>
                <TimeElement counter={renderTime.segundos}/>
            </div>
        </>
    )
}

export default TimeElements
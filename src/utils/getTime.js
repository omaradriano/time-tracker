function getTime(futureDate) {
    const time = new Date()
    const actualHour = time.toLocaleTimeString()
    const actualDay = time.toLocaleDateString()
    console.log(actualDay, actualHour)

    const futureTime = new Date('2023-11-08T14:30:00')
    const futureHour = futureTime.toLocaleTimeString()
    const futureDay = futureTime.toLocaleDateString()
    console.log(futureDay, futureHour)
    // Calcula la diferencia en milisegundos
    const diferenciaEnMilisegundos = futureTime - time;

    // Convierte la diferencia a días, horas, minutos y segundos
    const segundos = Math.floor(diferenciaEnMilisegundos / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    console.log(`Diferencia en días: ${dias}`);
    console.log(`Diferencia en horas: ${horas % 24}`);
    console.log(`Diferencia en minutos: ${minutos % 60}`);
    console.log(`Diferencia en segundos: ${segundos % 60}`);
}

const secondsDiff = (futureDate) => {
    return new Promise((resolve, reject) => {
        const time = new Date()
        if(time){
            const futureTime = new Date(futureDate)
            const milisecondsDiff = futureTime.getTime() - time.getTime();
            resolve(Math.floor(milisecondsDiff / 1000))
        }else{
            reject('No se pudo obtener el tiempo')
        }
    })

}

export default secondsDiff

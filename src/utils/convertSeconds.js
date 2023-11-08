export default function convertSeconds(segundos) {
    const unDiaEnSegundos = 86400;
    const unaHoraEnSegundos = 3600;
    const unMinutoEnSegundos = 60;

    const dias = Math.floor(segundos / unDiaEnSegundos);
    segundos %= unDiaEnSegundos;

    const horas = Math.floor(segundos / unaHoraEnSegundos);
    segundos %= unaHoraEnSegundos;

    const minutos = Math.floor(segundos / unMinutoEnSegundos);
    segundos %= unMinutoEnSegundos;

    return {
        dias,
        horas,
        minutos,
        segundos,
    };
}
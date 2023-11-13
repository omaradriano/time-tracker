import TimerCard from "./TimerCard.jsx"

const Home = () => {
    return (
        <>
            <TimerCard
                title='Navidad'
                shortDesc='El dia que llega navidad'
                longDesc='Un dia llego santa claus y nos trajo muchos regalos jeje'
                date={`${'2024-12-07'}T${'19:00:00'}`} />
            <TimerCard
                title='Halloween 2024'
                shortDesc='El dia que llega halloween'
                longDesc='Un dia llego jason y se los comio a todos'
                date={`${'2024-10-31'}T${'21:00:30'}`} />
        </>
    )
}

export default Home
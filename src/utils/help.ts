export const formatTime = (minutes: number, seconds: number) => {
    let minutesAux: string = `${minutes}`
    let secondsAux: string = `${seconds}`
    if (minutes < 10) minutesAux = `0${minutesAux}`
    if (seconds < 10) secondsAux = `0${secondsAux}`

    return `${minutesAux}:${secondsAux}`
}

import { useEffect, useState } from 'react'

const useInterval = () => {
    const [minutes, setMinutes] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)

    const onActiveTime = (time: number) => {
        setMinutes(time)
        setIsActive(true)
        setIsPaused(false)
    }

    const onPauseTime = () => {
        setIsPaused(true)
    }

    const onResumeTime = () => {
        setIsPaused(false)
    }

    useEffect(() => {
        let interval: any = null

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1)
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval)
                    } else {
                        setMinutes(minutes - 1)
                        setSeconds(59)
                    }
                }
            }, 1000)
        } else {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval)
        }
    }, [isActive, isPaused, minutes, seconds])

    return {
        minutes,
        seconds,
        onActiveTime,
        onPauseTime,
        isPaused,
        onResumeTime,
    }
}
export default useInterval

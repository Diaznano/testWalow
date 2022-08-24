import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { CircularProgress } from '../../components/CircularProgress'
import { formatTime } from '../../utils/help'
import { getStyles } from './styles'
import ButtonTimer from '../../components/ButtonTimer'
import useInterval from '../../hook/useInterval'

const HomePage = () => {
    const [timeSelected, setTimeSelected] = useState<number>(0)
    const optionTimes = [1, 2, 3]
    const { minutes, seconds, onActiveTime, onPauseTime, onResumeTime, isPaused } =
        useInterval()
    const styles = getStyles(isPaused)

    useEffect(() => {
        if (minutes === 0 && seconds === 0) {
            setTimeSelected(0)
            onPauseTime()
        }
    }, [seconds])

    const updateTime = (time: number) => {
        if (minutes === 0 && seconds === 0) {
            setTimeSelected(time)
        }
    }

    const activeTime = () => {
        if (timeSelected === 0) return
        if (minutes === 0 && seconds === 0) {
            onActiveTime(timeSelected)
        } else if (isPaused) onResumeTime()
        else onPauseTime()
    }

    const renderIcon = () => {
        const textUrl = isPaused
            ? require('../../assets/icon-play.png')
            : require('../../assets/icon-pause.png')
        return (
            <TouchableOpacity style={styles.containerIcon} onPress={activeTime}>
                <Image style={styles.icon} source={textUrl} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['rgb(189,188,198)', 'rgb(120, 103, 247)']}
                style={styles.linearGradient}>
                <Text style={styles.textTitle}>Breathe and relax</Text>
                <Text style={styles.textRespiration}>{`${
                    true ? 'Inhale' : 'Exhale'
                }`}</Text>
                <CircularProgress time={minutes} isPaused={isPaused} />
                <Text style={styles.textTime}>{formatTime(minutes, seconds)}</Text>
                {renderIcon()}
                <View style={styles.containerButton}>
                    {optionTimes.map((optionTime: number) => {
                        return (
                            <ButtonTimer
                                key={optionTime}
                                time={optionTime}
                                onPress={updateTime}
                                isSelected={timeSelected === optionTime}
                            />
                        )
                    })}
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default HomePage

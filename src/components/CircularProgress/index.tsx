import React, { useEffect, useState } from 'react'
import { Dimensions, Animated, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import Svg, { Circle } from 'react-native-svg'

import { getStyles } from './styles'

const CIRCULAR_CIRCUMFERENCE = 270
const CIRCLE_RADIUS = String(CIRCULAR_CIRCUMFERENCE / (2 * Math.PI))

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export const CircularProgress = ({ time }: any) => {
    const styles = getStyles()

    const { width, height } = Dimensions.get('window')
    const stringifiedWidth = String(width / 7)
    const stringifiedHeight = String(height / 20)
    const [progressValue, setProgressValue] = useState(0)

    const progress = new Animated.Value(1)
    const image = useSharedValue(50)

    useEffect(() => {
        if (time !== 0) {
            Animated.timing(progress, {
                useNativeDriver: true,
                toValue: 0,
                duration: time * 60000,
            }).start()

            progress.addListener((e) => setProgressValue(e.value))

            setTimeout(() => {
                progress.removeAllListeners()
            }, time * 65000)
        }
    }, [time])

    const animatedProps = () => ({
        strokeDashoffset: CIRCULAR_CIRCUMFERENCE * progressValue,
    })

    const styleImage = {
        width: image.value,
        height: image.value,
    }

    return (
        <Animated.View style={styles.container}>
            <Svg height={250} width={250} viewBox="0 -12 110 110">
                <Circle
                    cx={stringifiedWidth}
                    cy={stringifiedHeight}
                    r={CIRCLE_RADIUS}
                    stroke={'rgb(202, 198, 230)'}
                    strokeWidth={2}
                />
                <AnimatedCircle
                    cx={stringifiedWidth}
                    cy={stringifiedHeight}
                    r={CIRCLE_RADIUS}
                    stroke={'rgb(126, 124, 151)'}
                    strokeWidth={2}
                    strokeDasharray={CIRCULAR_CIRCUMFERENCE}
                    strokeLinecap="round"
                    {...animatedProps()}
                />
            </Svg>
            <View style={styles.containerCenter}>
                <Animated.Image
                    source={require('../../assets/icon-walow.png')}
                    resizeMode="contain"
                    style={styleImage}
                />
            </View>
        </Animated.View>
    )
}

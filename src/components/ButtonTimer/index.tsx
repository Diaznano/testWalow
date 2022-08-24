import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import { getStyles } from './styles'

const ButtonTimer = ({ time, onPress, isSelected }: any) => {
    const styles = getStyles(isSelected)

    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(time)}>
            <Image
                style={styles.icon}
                source={require('../../assets/icon-clock.png')}
            />
            <Text style={styles.text}>{`${time} min`}</Text>
        </TouchableOpacity>
    )
}

export default ButtonTimer

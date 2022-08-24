import { StyleSheet } from 'react-native'

export const getStyles = () => {
    return StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ rotate: '270 deg' }],
        },
        containerCenter: {
            backgroundColor: 'rgb(125, 109, 243)',
            width: 150,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 10,
            borderColor: 'rgb(147, 136, 227)',
            position: 'absolute',
            borderRadius: 100,
            transform: [{ rotate: '90 deg' }],
        },
    })
}

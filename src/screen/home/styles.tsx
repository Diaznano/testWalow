import { StyleSheet } from 'react-native'

export const getStyles = (isPaused: boolean) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        linearGradient: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            width: '100%',
            height: '100%',
        },
        containerButton: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 270,
        },
        textTime: {
            color: 'white',
            marginBottom: 20,
        },
        textTitle: {
            color: 'white',
            marginBottom: 30,
            fontWeight: 'bold',
            fontSize: 18,
        },
        textRespiration: {
            color: 'white',
            fontSize: 16,
        },
        icon: {
            height: isPaused ? 50 : 30,
            width: isPaused ? 50 : 30,
            margin: isPaused ? 0 : 10,
            tintColor: 'white',
        },
        containerIcon: {
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 50,
            justifyContent: 'center',
            alignContent: 'center',
            marginBottom: 20,
        },
    })
}

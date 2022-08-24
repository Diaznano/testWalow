import { StyleSheet } from 'react-native'

export const getStyles = (isSelected: boolean) => {
    return StyleSheet.create({
        container: {
            backgroundColor: isSelected ? 'rgb(156, 145, 241)' : 'rgb(102, 92, 188)',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 5,
            alignItems: 'center',
            flexDirection: 'row',
        },
        text: {
            color: isSelected ? 'white' : 'rgb(168, 159, 238)',
        },
        icon: {
            width: 15,
            height: 15,
            marginHorizontal: 5,
            tintColor: isSelected ? 'white' : 'rgb(168, 159, 238)',
        },
    })
}

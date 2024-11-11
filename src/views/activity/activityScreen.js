import React from 'react'
import Texts from '../../components/Texts'
import { StyleSheet, View } from 'react-native'

import { CheckBox, Icon } from '@rneui/themed';


const ActivityScreen = ({ tab }) => {
    switch (tab) {
        case "Today":
            return (
                <View style={styles.container}>
                    {[1, 2, 34, 5, 5].map((item, index) => {
                        return (
                            <View key={index} style={{
                                padding: 20,
                                borderWidth: 1,
                                borderColor: '#FFF',
                                marginBottom: 8,
                                borderRadius: 20,
                                flexDirection: 'row',
                                alignItems: 'center',

                            }}>
                                <CheckBox
                                    value={true}
                                    onValueChange={() => { }}
                                    center
                                    wrapperStyle={{ backgroundColor: "transparent", margin: 0, padding: 0 }}
                                    style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}
                                    textStyle={{ backgroundColor: "transparent", margin: 0, padding: 0 }}
                                    containerStyle={{ backgroundColor: "transparent", margin: 0, padding: 0 }}
                                    size={20}
                                />
                                <View style={{ flex: 1, marginRight: 5 }}>
                                    <Texts style={{ textDecorationLine: 'line-through', }}>{"Berangkat Ke kantor Berangkat Ke Ke Ke Ke kantor"}</Texts>
                                    <Texts style={{ textDecorationLine: 'line-through', }}>{"08:00"}</Texts>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon style={{ margin: 2, padding: 2, borderRadius: 100 }} name='edit' color={'#FFF'} size={20} />
                                    <Icon style={{ margin: 2, padding: 2, borderRadius: 100 }} name='close' color={'#FFF'} size={20} />
                                </View>
                            </View>
                        )
                    })}
                </View>
            )
        case "Next":
            return (
                <View style={styles.container}>
                    <Texts>Next</Texts>
                </View>
            )
        case "Mothly":
            return (
                <View style={styles.container}>
                    <Texts>Mothly</Texts>
                </View>
            )
        case "Year":
            return (
                <View style={styles.container}>
                    <Texts>Year</Texts>
                </View>
            )
        default:
            break;
    }

}

export default ActivityScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10
    },
})
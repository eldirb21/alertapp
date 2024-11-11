import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Texts from './Texts'

const Tabs = ({ tabSelect, tabs, setTabSelect }) => {
    return (
        <View style={styles.tab}>
            {tabs.map((x, i) => (
                <TouchableOpacity key={i} style={[{
                    borderColor: tabSelect === x ? 'white' : 'transparent',
                }, styles.tabItem]}
                    onPress={() => setTabSelect(x)}>
                    <Texts style={{ color: tabSelect === x ? 'white' : 'white' }}>{x}</Texts>
                </TouchableOpacity>
            )
            )}
        </View>
    )
}

export default Tabs

const styles = StyleSheet.create({
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tabItem: {
        borderBottomWidth: 1,
        flex: 1,
        height: '100%',
        padding: 20,
        alignItems: 'center'
    }
})
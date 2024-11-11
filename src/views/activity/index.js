import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ActivityScreen from './activityScreen'
import Tabs from '../../components/tabs'
import Floats from '../../components/Floats'

const Activity = () => {
  const [tabSelect, setTabSelect] = useState("Today")
  return (
    <View style={styles.container}>
      <Tabs tabs={["Today", "Next", "Mothly", "Year"]} tabSelect={tabSelect} setTabSelect={setTabSelect} />
      <ActivityScreen tab={tabSelect} />
      <Floats primaryG onPress={() => { }} />
    </View>
  )
}

export default Activity

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
})
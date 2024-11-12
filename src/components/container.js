// Container.js
import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, ScrollView } from 'react-native';

const Container = ({
    children,
    style,
    padding = 16,
    statusBarStyle = 'dark-content',
    backgroundColor = '#fff',
    statusBarHidden = false,
    statusBarTranslucent = false,
    statusBarAnimated = true,
    scrollEnabled = true
}) => {
    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
            <StatusBar
                barStyle={statusBarStyle}
                backgroundColor={backgroundColor}
                hidden={statusBarHidden}
                translucent={statusBarTranslucent}
                animated={statusBarAnimated}
            />
            {scrollEnabled ? (
                <ScrollView contentContainerStyle={[styles.container, { padding }, style]}>
                    {children}
                </ScrollView>
            ) : (
                <View style={[styles.container, { padding }, style]}>
                    {children}
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flexGrow: 1,
    },
});

export default Container;

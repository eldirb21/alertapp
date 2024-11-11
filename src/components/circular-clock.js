import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import Func from '../utils/func';

const CircularClock = ({ style }) => {
    const [time, setTime] = useState(new Date());

    // Update time every second
    Func.useInterval(() => {
        setTime(new Date());
    }, 1000);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');

    return (
        <View style={[styles.container, style]}>
            <Svg height="200" width="200" viewBox="0 0 200 200">
                {/* Outer ring */}
                <Circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="url(#grad)"
                    strokeWidth="10"
                    fill="none"
                />
                {/* Progress indicator */}
                <Circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="purple"
                    strokeWidth="5"
                    strokeDasharray="500"
                    strokeDashoffset={(minutes / 60) * 500}
                    fill="none"
                />
                {/* Center text */}
                <SvgText
                    x="100"
                    y="100"
                    fontSize="24"
                    fontWeight="bold"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="black"
                >
                    {`${hours}:${minutes}`}
                </SvgText>
                {/* Date text below */}
                <SvgText
                    x="100"
                    y="130"
                    fontSize="12"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="gray"
                >
                    {time.toDateString()}
                </SvgText>
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 100
    },
});

export default CircularClock;

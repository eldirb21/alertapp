import React from 'react';
import {TextInput, View} from 'react-native';
import Icons from './Icons';
import Texts from './Texts';

export default function TextInputs({
  containerStyle,
  labelStyle,
  textStyle,
  iconLeftType,
  borderColor,
  iconLeft,
  label,
  error,
  ...props
}) {
  return (
    <View style={[containerStyle, {marginBottom: 10}]}>
      {label && (
        <Texts style={[labelStyle, {color: '#9A9A9A', fontWeight: '500'}]}>
          {label}
        </Texts>
      )}
      {iconLeft ? (
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0.8,
            borderRadius: 10,
            borderColor: borderColor ? borderColor : 'rgba(0,0,0,0.2)',
            width: '100%',
          }}>
          <Icons
            name={iconLeft}
            style={{
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              backgroundColor: '#166b88',
              padding: 12,
              width: 70,
              margin: -1,
              textAlign: 'center',
            }}
            type={iconLeftType}
            size={25}
            color={'#FFF'}
          />
          <TextInput
            placeholder={label}
            placeholderTextColor={borderColor ? borderColor : 'grey'}
            style={[
              textStyle,
              {padding: 10, color: borderColor ? borderColor : 'grey'},
            ]}
            {...props}
          />
        </View>
      ) : (
        <TextInput
          placeholder={label}
          placeholderTextColor={borderColor ? borderColor : 'grey'}
          style={[
            textStyle,
            {
              color: borderColor ? borderColor : 'grey',
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: borderColor ? borderColor : 'rgba(0,0,0,0.2)',
            },
          ]}
          {...props}
        />
      )}
      {error != undefined && (
        <View>
          {error == '' || <Texts style={{color: 'red'}}>{error}</Texts>}
        </View>
      )}
    </View>
  );
}

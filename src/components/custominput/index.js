import React from "react";
import { TextInput } from "react-native";
import styles from "../../stylesheet/styles";

const CustomInput = (props) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            style={[styles.customInput, props.style]}
            value={props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
            keyboardType={props.keyboardType}
            right={props.right}
        />
    );
};

export default CustomInput;
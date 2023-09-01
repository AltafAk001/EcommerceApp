import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const InputField = ({ values, errors, touched, onchange, placeholder, name, onBlur, icon, iconColor, type }) => {
    return (
        <>
            <View style={styles.inputContainer}>
                {icon && <Icon name={icon} size={20} color={iconColor || "#555"} style={styles.icon} />}
                <TextInput
                    style={styles.input}
                    placeholder={placeholder || ""}
                    onChangeText={onchange(name)}
                    onBlur={onBlur(name)}
                    value={values[name]}
                    secureTextEntry={type === "password" ? true : false}
                />
            </View>
            {
                touched[name] && errors[name] && (
                    <Text style={styles.errorText}>{errors[name]}</Text>
                )
            }
        </>
    )
}

export default InputField;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: '#ddd',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
    },
    errorText: {
        alignSelf: 'flex-start',
        color: 'red',
    },
});
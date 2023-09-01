// src/Register.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import * as yup from 'yup';
import InputField from '../Components/commen/inputField';
import { Registration } from '../Apis/auth';

const RegisterSchema = yup.object().shape({
    username: yup.string().required('username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
});

const Register = ({ navigation }) => {
    const handleRegister = values => {
        // Registration(values)
        
        console.log(values);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={RegisterSchema}
                onSubmit={handleRegister}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                        {/* ... Similar input components as in LoginScreen */}
                        <InputField placeholder="Enter Username"
                            onchange={handleChange} onBlur={handleBlur} icon={"envelope"}
                            values={values}
                            errors={errors} touched={touched} name={'username'} />

                        <InputField placeholder="Enter Email Id"
                            onchange={handleChange} onBlur={handleBlur} icon={"envelope"}
                            values={values}
                            errors={errors} touched={touched} name={'email'} />

                        <InputField placeholder="Enter Password"
                            onchange={handleChange} onBlur={handleBlur} icon={"envelope"}
                            values={values} type={"password"}
                            errors={errors} touched={touched} name={'password'} />

                        <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: '#28a745',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    errorText: {
        alignSelf: 'flex-start',
        color: 'red',
        marginBottom: 5,
    },
});

export default Register;

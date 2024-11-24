import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { grey } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';

const styles = require('../../stylesheet/styles');

const ForgotPassword = ({ navigation }) => {

    const [email, setEmail] = React.useState('');

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <ScrollView>
                    <Image source={require('../../assets/images/forgotpass.webp')} style={{ ...styles.image, marginTop: 20 }} />

                    <View style={{ padding: 20 }}>
                        <Text style={styles.h3}>Forgot Password?</Text>
                        <Text style={{ ...styles.h5, color: grey }}>Please! Enter your email to reset your password</Text>

                        <TextInput
                            keyboardType="email-address"
                            returnKeyType='done'
                            placeholder='Email'
                            onChangeText={(e) => { setEmail(e) }}
                            value={email}
                            style={{ ...styles.inputText, paddingLeft: 10 }} />

                        <TouchableOpacity
                            onPress={() => { navigation.navigate('CreateNewPasswordScreen') }}
                            style={[styles.button,{marginTop:30}]}>
                            <Text style={{ ...styles.h4, color: '#fff' }}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>

        </SafeAreaView>
    );
};

export default ForgotPassword;
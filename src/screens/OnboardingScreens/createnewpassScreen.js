import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { grey } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';

const styles = require('../../stylesheet/styles');

const CreateNewPassword = ({ navigation }) => {

    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <ScrollView>
                    <Image source={require('../../assets/images/forgotpass.webp')} style={{ ...styles.image, marginTop: 20 }} />

                    <View style={{ padding: 20 }}>
                        <Text style={styles.h3}>Create New Password!</Text>
                        <Text style={{ ...styles.h5, color: grey }}>Your new password must be different from previously used password.</Text>

                        <TextInput
                            keyboardType='default'
                            returnKeyType='done'
                            placeholder='Password'
                            onChangeText={(e) => { setPassword(e) }}
                            value={password}
                            style={{ ...styles.inputText, paddingLeft: 10 }} />

                        <TextInput
                            keyboardType='default'
                            returnKeyType='done'
                            placeholder='Confirm password'
                            onChangeText={(e) => { setConfirmPassword(e) }}
                            value={confirmPassword}
                            style={{ ...styles.inputText, paddingLeft: 10 }} />

                        <TouchableOpacity
                            onPress={() => { navigation.navigate('SigninScreen') }}
                            style={[styles.button,{marginTop:30}]}>
                            <Text style={{ ...styles.h4, color: '#fff' }}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>

        </SafeAreaView>
    );
};

export default CreateNewPassword;
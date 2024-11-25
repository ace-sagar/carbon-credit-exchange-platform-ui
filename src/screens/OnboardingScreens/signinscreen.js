import * as React from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { grey } from '../../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { color } from 'react-native-elements/dist/helpers';

const styles = require('../../stylesheet/styles');

const SigninScreen = ({ navigation }) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <ScrollView>
                    <Image source={require('../../assets/images/signin.webp')} style={{ ...styles.image, marginTop: 20 }} />

                    <View style={{ padding: 20 }}>
                        <Text style={styles.h3}>Welcome Back!</Text>
                        <Text style={{ ...styles.h5, color:grey }}>Enter your email and password</Text>

                        <TextInput
                            keyboardType="email-address"
                            returnKeyType='done'
                            placeholderTextColor={grey}
                            placeholder='Email'
                            onChangeText={(e) => { setEmail(e) }}
                            value={email}
                            style={{ ...styles.inputText, paddingLeft: 10,color:grey }} />

                        <TextInput
                            keyboardType='default'
                            returnKeyType='done'
                            placeholderTextColor={grey}
                            placeholder='Password'
                            onChangeText={(e) => { setPassword(e) }}
                            value={password}
                            secureTextEntry={true}
                            style={{ ...styles.inputText, paddingLeft: 10,color:grey }} />

                        <Text onPress={() => { navigation.navigate("ForgotPasswordScreen") }} style={[styles.h5, { color: grey, alignSelf: "flex-end", marginTop: 20 }]}>
                            Forgot Password?
                        </Text>

                        <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={()=>navigation.navigate("TabNavigator")}>
                            <Text style={{ ...styles.h4, color: "white" }}>Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { navigation.navigate("SignUpScreen")}}>
                           <Text style={[styles.h5, { color: grey, alignSelf: "center", marginTop: 20 }]}> Don't have an account? Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>

        </SafeAreaView>
    );
};

export default SigninScreen;
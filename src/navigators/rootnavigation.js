import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SigninScreen from '../screens/OnboardingScreens/signinscreen';
import SignupSreen from '../screens/OnboardingScreens/signupscreen';
import ForgotPassword from '../screens/OnboardingScreens/forgotpasswordscreen';
import CreateNewPassword from '../screens/OnboardingScreens/createnewpassScreen';
import RealTimeTrading from '../screens/DashboardScreens/realtimetradingscreen';
import TabNavigator from './TabNavigator';
import TopTabNavigator from './toptabnavigator';
import PurchaseHistoryDetails from '../screens/DashboardScreens/purchasehistorydetails';
import SummaryAmount from '../screens/DashboardScreens/summaryamountscreen';
import Profile from '../screens/ProfileScreens/profile';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
            // initialRouteName='TabNavigator'
            >
                <Stack.Screen name="SignInScreen" component={SigninScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="SignUpScreen" component={SignupSreen} options={{ headerShown: false }}/>
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword} options={{ headerShown: false }}/>
                <Stack.Screen name="CreateNewPasswordScreen" component={CreateNewPassword} options={{ headerShown: false }}/>
                <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }}/>
                <Stack.Screen name="TopTabs" component={TopTabNavigator} options={{ headerShown: false }}/>
                <Stack.Screen name='PurchaseHistoryDetailsScreen' component={PurchaseHistoryDetails} options={{ headerShown: false }}/>
                <Stack.Screen name='SummaryAmountScreen' component={SummaryAmount} options={{ headerShown: false }}/>
                <Stack.Screen name="ProfileScreen" component={Profile} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigation;
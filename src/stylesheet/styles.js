import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { grey, lightGrey, primaryColor, secondaryColor, white } from '../constants/colors';
import { PoppinsBold, PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from '../constants/fonts';

module.exports = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },

    h1: {
        fontSize: RFValue(25, 580),
        fontFamily: PoppinsSemiBold
    },

    h2: {
        fontSize: RFValue(18, 580),
        fontFamily: PoppinsSemiBold,
        color: '#222222'
    },

    h3: {
        fontSize: RFValue(14.72, 580),
        fontFamily: PoppinsSemiBold,
        color: '#222222'
    },

    h4: {
        fontSize: RFValue(12, 580),
        fontFamily: PoppinsSemiBold,
        color: '#222222'
    },

    h5: {
        fontSize: RFValue(9.25, 580),
        fontFamily: PoppinsSemiBold,
        color: '#222222'
    },

    h6: {
        fontSize: RFValue(9, 580),
        fontFamily: PoppinsSemiBold,
        color: '#222222'
    },
    smallHeading:
    {
        fontSize: RFValue(11, 580),
        fontFamily: PoppinsSemiBold,
        color: '#5d5d5d',
    },
    small:
    {
        fontSize: RFValue(10, 580),
        fontFamily: PoppinsRegular,
        color: '#5d5d5d',
        marginLeft: 15
    },
    p:
    {
        fontSize: RFValue(11, 580),
        fontFamily: PoppinsRegular,
        marginTop: 5,
        color: '#5d5d5d',
    },
    p1:
    {
        fontSize: RFValue(9, 580),
        fontFamily: PoppinsMedium,
        color: '#5d5d5d',
    },
    text: {
        fontSize: RFValue(12, 580),
        fontFamily: PoppinsSemiBold,
        marginTop: 5
    },

    heading: {
        color: "#619dd1",
        // color:"#000",
        // fontSize:24,
        fontSize: RFValue(18, 580),
        fontFamily: PoppinsBold,
        marginTop: 10,
        marginLeft: 15
    },
    textInput: {
        marginTop: 20,
        //borderWidth: 0.2,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: "80%",
        height: 50,
        alignContent: 'center',
        alignSelf: 'center',
        shadowColor: 'grey',
        shadowOpacity: 1.5,
        elevation: 2,
        shadowRadius: 10,
        shadowOffset: { width: 1, height: 1 },
        fontSize: RFValue(14.5, 580),
        fontFamily: PoppinsRegular,
    },
    inputText: {
        marginTop: 20,
        width: Dimensions.get('window').width / 1.1,
        height: 50,
        alignSelf: 'center',
        borderRadius: 5,
        backgroundColor: "#fff",
        shadowColor: '#000',
        elevation: 4,
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        fontSize: RFValue(10, 580),
        fontFamily: PoppinsMedium,
    },
    box: {
        flexDirection: "row",
        backgroundColor: white,
        shadowColor: 'grey',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
        alignSelf: "center",
        margin: 10,
        padding: 10
    },
    box1: {
        flexDirection: "row",
        backgroundColor: '#fff',
        height: 70,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
        borderWidth: 2,
        borderColor: "#0066b2"
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        width: Dimensions.get('window').width / 1.1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    fab: {
        backgroundColor: "#0066b2",
        borderRadius: 100,
        height: 70,
        width: 70,
        bottom: 10,
        right: 10,
        // alignSelf:"flex-end",
        // margin:20,
        justifyContent: "center",
        position: "absolute",
        alignItems: "center",
    },
    image: {
        height: 400,
        width: 400,
        alignSelf: "center"
    },
    button: {
        backgroundColor: primaryColor,
        width: Dimensions.get('window').width / 1.1,
        height: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    header: {
        padding: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: primaryColor,
        height: 80
    },
    boxSmall:{
        flexDirection: "row",
        width:100,
        backgroundColor: '#fff',
        padding: 20,
        shadowColor: grey,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
        borderRadius: 10,
        alignItems:"center"
    },
    smallButton: {
        backgroundColor: secondaryColor,
        width: 80,
        height: 35,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius:20
    },
    squareBox:{
        backgroundColor: '#fff',
        padding:10,
        width:Dimensions.get('window').width/2.3,
        borderRadius: 10,
        alignItems: "flex-start",
        justifyContent: "center",
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: lightGrey,
        margin:10,
    },
    smallInput:{
        borderBottomColor: lightGrey,
        borderWidth: 1,
        borderColor: lightGrey,
        borderRadius: 10,
        width: Dimensions.get('window').width / 2.5,
        fontSize: RFValue(10, 580),
        fontFamily:PoppinsSemiBold,
        color: grey,
        height:40
    }
});
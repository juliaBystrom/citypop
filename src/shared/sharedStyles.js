import { StyleSheet } from 'react-native';
import COLOR from './colorConstants';

export default sharedStyles = StyleSheet.create({
    basicContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: COLOR.PRIMARY_BACKGROUND,
    },

    screenTitleContainer: {
        flex: 0.2,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        padding: 20,

    },

    screenTitle: {
        color: COLOR.ACCENT,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    componentsContainer: {
        flex: 0.5,
        justifyContent: 'center',
        padding: 20,
    },

    standardButton: {
        paddingVertical: 10,
        marginVertical: 10,
        justifyContent: 'center',
        borderColor: COLOR.ACCENT,
        borderWidth: 2,
    },

    standardButtonColor: {
        borderColor: COLOR.ACCENT,
        backgroundColor: COLOR.SECONDARY_BACKGROUND,
    },

    pressedButtonColor: {
        borderColor: COLOR.ACCENT,
        backgroundColor: COLOR.PRIAMRY_BACKGROUND,
    },


    bodytext: {
        textAlign: 'center',
        color: COLOR.TEXT,
        fontSize: 15,

    },
    largeText: {
        fontSize: 30,
    },

    textInput: {
        borderWidth: 2,
        color: COLOR.TEXT,
    },

    textInputColor: {
        borderColor: COLOR.ACCENT,
        backgroundColor: COLOR.SECONDARY_BACKGROUND,
    },

    textInputOnFocusColor: {
        borderColor: COLOR.FOCUS,
        backgroundColor: COLOR.SECONDARY_BACKGROUND,
    },

    iconButton: {
        width: 50,
        height: 50,
        marginVertical: 10,
        borderRadius: 25,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    populationDisplay: {
        alignItems: 'center',
        padding: 20,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: COLOR.ACCENT,
        backgroundColor: COLOR.SECONDARY_BACKGROUND,
    },

    errorDisplay: {
        paddingVertical: 10,
        marginVertical: 10,
        justifyContent: 'center',
        backgroundColor: COLOR.ALERT,
    }

});


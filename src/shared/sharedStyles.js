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

    screenTitleUpercase: {
        textTransform: 'uppercase',
    },
    

    componentsContainer: {
        flex: 0.5,
        justifyContent: 'center',
        padding: 20,
    },

    standardButton: {
        // flex: 0.15,
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: COLOR.SECONDARY_BACKGROUND,
        justifyContent: 'center',
        borderColor: COLOR.ACCENT,
        borderWidth: 2,
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
        borderColor: COLOR.ACCENT,
        color: COLOR.TEXT,
        backgroundColor: COLOR.SECONDARY_BACKGROUND,
    },

    iconButton: {
        width: 50,
        height: 50,
        marginVertical: 10,
        borderRadius: 25,
        borderColor: COLOR.ACCENT,
        borderWidth: 2,
        backgroundColor: COLOR.SECONDARY_BACKGROUND,
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
    }



});


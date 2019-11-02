import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from '@react-native-community/google-signin';
import {firebase} from '@react-native-firebase/auth';
import {WEB_CLIENT_ID} from './secrets';

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    GoogleSignin.configure();
    const googleLogin = async () => {
        try {
            setIsLoading(true);
            await GoogleSignin.configure({
                webClientId: WEB_CLIENT_ID,
            });
            const {accessToken, idToken} = await GoogleSignin.signIn();
            // create a new firebase credential with the token
            const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
            // login with credential
            const currentUser = await firebase.auth().signInWithCredential(credential);
            if (currentUser) {
                console.log('LOGGED IN!!!!!');
                console.log(currentUser.user.displayName);
            }
        } catch (e) {
            setIsLoading(false);
            console.log(e);
        }
    };

    return (
        <SafeAreaView>
            <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={googleLogin}
                disabled={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000',
    },
});

export default App;

import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

const App = () => {
    return (
        <SafeAreaView>
            <Text style={styles.sectionTitle}>Hello world!</Text>
            <Button
                title="sign in with google"
                onPress={() => {
                    console.log('pressed!');
                }}
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

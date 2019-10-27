#!/bin/bash

# example use: ./create-react-native-thing.sh screen MyNewScreen
# example use: ./create-react-native-thing.sh component MyNewComponent

cat > $1s/$2.js <<- EOM
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default ({}) => {
    return (
        <View>
            <Text>Hello World!</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
EOM

cat > $1s/$2.test.js <<-EOM
describe('$1', () => {
    it('should ...', () => {

    })
})
EOM

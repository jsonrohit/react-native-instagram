import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { USERDATA } from '../component/database/user'
import gStyle from '../globalCss';

const Profile = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {/* {USERDATA.map((item, index) => ( */}
                        <View>
                        <Text>{dimensions.screen.width}</Text>
                        </View>
                 
                       
                  
                   

                {/* ))} */}
                </ScrollView> 
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
})
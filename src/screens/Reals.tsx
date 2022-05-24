import React, { useState } from 'react';
import { View,TextInput, Text, StyleSheet, Image, ScrollView,Dimensions, TouchableOpacity } from 'react-native';
import { USERDATA } from '../component/database/user'
import gStyle from '../globalCss';


const screen = Dimensions.get('screen');

const Reals = () => {

    return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {/* {USERDATA.map((item, index) => ( */}
                  
                        {/* <Text>{dimensions.screen.width}</Text> */}
                        {/* <View> */}
                 
                            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                  
                   

                {/* ))} */}
                </ScrollView> 
    );
};

export default Reals;
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginTop:10
    },
    rImage:{
        height: screen.height-120,
        width: screen.width ,
        // resizeMode:'contain',
        // margin:1
    },
    
    
})
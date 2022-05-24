import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { USERDATA } from '../component/database/user'
import gStyle from '../globalCss';

const screen = Dimensions.get('screen')

const Activity = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* {USERDATA.map((item, index) => ( */}
            <View>
                <Text>Actvites</Text>
            </View>
            <View>
                <Text>Yesterday {screen.width * 0.8}</Text>
            </View>
            <View style={styles.notification}>
            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                <Text style={styles.notiText}>dfsfs </Text>
                 <TouchableOpacity style={styles.btn} >
                    <Text style={styles.btnText}>Login </Text>
                </TouchableOpacity>
            </View>
            {/* ))} */}
        </ScrollView>
    );
};

export default Activity;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    rImage:{
        height: 50,
        width: screen.width / 7 ,
        resizeMode:'contain',
        borderRadius:screen.height / 2
    },
    notification:{
        flexDirection:'row'
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    btn: {
        // width: screen.width * 0.2,
        backgroundColor: '#3897f0',
        paddingVertical: 12,
        borderRadius: 5,
       
    },
    notiText:{
        width: screen.width / 3,
    }
})
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView ,} from 'react-native';
import { Divider } from 'react-native-elements';
import { USERDATA } from '../../component/database/user'

const Stories = () => {
    console.log(USERDATA, 'console.log');
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {USERDATA.map((item, index) => (
                <View key={index} style={styles.imgRow}>
                    <Image source={{ uri: item.image }} style={styles.avtar} />
                    <Text style={styles.nameStyle}>{item.name.length < 11 ? `${item.name}` : `${item.name.substring(0,9)}...` }</Text>
                </View>
            ))}
            </ScrollView>
            <Divider style={{ backgroundColor: 'blue' }} />
            </View>
    );
};

export default Stories;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical:10
    },
    imgRow: {
        marginLeft:15
    },
    avtar: {
        height: 65,
        width: 65,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#f61196'
    },
    nameStyle:{
        fontSize:12,
        textAlign:'center'
    },
})
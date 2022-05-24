import React, { useState } from 'react';
import { View,TextInput, Text, StyleSheet, Image, ScrollView,Dimensions, TouchableOpacity } from 'react-native';
import { USERDATA } from '../component/database/user'
import gStyle from '../globalCss';

const screen = Dimensions.get('screen');

const SearchProfile = () => {
    const [dimensions, setDimensions] = useState({screen});
    var width = dimensions.screen.width;
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingHorizontal:10}}>
            <TextInput style={styles.searchbox} placeholder="Search" />
            </View>
            
                {/* {USERDATA.map((item, index) => ( */}
                    <View style={{flexDirection:'row'}}>
                        {/* <Text>{dimensions.screen.width}</Text> */}
                        {/* <View> */}
                        <View >
                            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                        </View>
                        <View>
                            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                        </View>
                        <View>
                            <Image margin={1} style={{height:(screen.width / 3) *2, width:screen.width / 3}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} />
                         </View>
                         {/* </View> */}
                    </View>

                    <View style={{flexDirection:'row'}}>
                    <View>
                            <Image margin={1} style={{height:(screen.width / 3) *2, width:screen.width / 3}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} />
                         </View>
                        <View >
                            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                        </View>
                        <View>
                            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                        </View>
                      
                    </View>

                    <View style={{flexDirection:'row'}}>
                        {/* <Text>{dimensions.screen.width}</Text> */}
                        {/* <View> */}
                        <View >
                            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                        </View>
                        <View>
                            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                            <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} style={styles.rImage}/>
                        </View>
                        <View>
                            <Image margin={1} style={{height:(screen.width / 3) *2, width:screen.width / 3}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' }} />
                         </View>
                         {/* </View> */}
                    </View>

                {/* ))} */}
                </ScrollView> 
        </View>
    );
};

export default SearchProfile;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginTop:10
    },
    searchbox:{
        borderRadius:5,
    },
    rImage:{
        height: screen.width / 3,
        width: screen.width / 3 ,
        resizeMode:'contain',
        margin:1
    }
    
})
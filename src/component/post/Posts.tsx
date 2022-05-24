import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { USERDATA } from '../database/user'
import gStyle from '../../globalCss';

const Posts = () => {
    return (
        <View style={styles.container}>
            <ScrollView >
            {/* <ScrollView showsVerticalScrolrlIndicator={false}> */}
                {USERDATA.map((item, index) => (
                    <View key={index}>
                        <View style={styles.postHeader}>
                            <View style={styles.postHeaderLeftPart}>
                                <Image source={{ uri: 'https://img.icons8.com/ios/344/sent.png' }} style={styles.avtar} />
                                <Text>{item.name}</Text>
                            </View>
                            <View style={styles.postHeaderRightPart}>
                                <Image source={{ uri: 'https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/344/external-dot-basic-ui-jumpicon-glyph-jumpicon-glyph-ayub-irawan.png' }} style={styles.threeDot} />
                            </View>
                        </View>
                        <View>
                            <Image source={{ uri: item.image }} style={styles.postImage} />
                        </View>
                        <View style={styles.postHeader}>
                            <View style={styles.postHeaderLeftPart}>
                                <TouchableOpacity>
                                    <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/344/like--v2.png' }} style={[gStyle.iconSize, gStyle.mr5]} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={{ uri: 'https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-comment-communication-royyan-wijaya-detailed-outline-royyan-wijaya.png' }} style={[gStyle.iconSize, gStyle.mr5]} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={{ uri: 'https://img.icons8.com/ios/344/sent.png' }} style={gStyle.iconSize} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.postHeaderRightPart}>
                                <TouchableOpacity>
                                    <Image source={{ uri: 'https://img.icons8.com/material-outlined/344/bookmark-ribbon--v1.png' }} style={styles.iconSent} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default Posts;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    postHeaderLeftPart: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postHeaderRightPart: {

    },
    avtar: {
        height: 30,
        width: 30,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#f61196',
        marginRight: 5,
    },
    nameStyle: {
        fontSize: 12,
        textAlign: 'center'
    },
    postImage: {
        height: 200,
        width: 'auto'
    },
    threeDot: {
        height: 25,
        width: 25,
    },
    iconSent: {
        height: 22,
        width: 22,
        marginLeft: 13
    }
})
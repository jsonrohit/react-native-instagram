import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";


const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../../assets/header-logo.png')} />
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image source={{ uri: 'https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/344/external-plus-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png' }} style={styles.iconPlus} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{ uri: 'https://img.icons8.com/ios/344/sent.png' }}  style={styles.iconSent} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingTop: 35,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 30,
    },
    iconContainer: {
        flexDirection: 'row'
    },
    iconPlus: {
        height: 20,
        width: 20,
    },
    iconSent: {
        height: 22,
        width: 22,
        marginLeft: 13
    }
})


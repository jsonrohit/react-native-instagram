import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, useWindowDimensions, ScrollView, Switch, TouchableOpacity } from 'react-native';

function Iprofile() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.profileHeading}>Profile</Text>
            <View style={styles.card}>
                <View padding={20}>
                    <Text style={styles.userName}>Rakesh Kumar</Text>
                    <Text style={styles.userBank}>ICICI Bank</Text>
                    <TouchableOpacity>
                        <Text style={styles.userEditProfile}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ position: 'relative' }}>
                    <Image style={styles.profilePic} source={{ uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' }} />
                    <Image style={{ height: 40, width: 40, position: 'absolute', bottom: -10, right: 0, backgroundColor: '#fff', borderRadius: 5 }} source={{ uri: 'https://img.icons8.com/dotty/344/barcode.png' }} />
                </View>

                {/* <Text style={styles.container}>Profile{useWindowDimensions().height}</Text>
           <Text style={styles.container} >Profile{useWindowDimensions().width}</Text>
           <Text style={styles.container}>Profile{useWindowDimensions().scale}</Text> */}
            </View>
            <View style={{
                borderColor: '#ddd',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
            }}>
                <Text style={styles.myAccount}>My Account</Text>
                <View style={styles.userAccountOptionList}>
                    <View style={styles.actOptList}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/344/phone.png' }} />
                    </View>
                    <Text style={styles.myActTxt}>Statements</Text>
                </View>

                <View style={styles.userAccountOptionList}>
                    <View style={styles.actOptList}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/344/phone.png' }} />
                    </View>
                    <Text style={styles.myActTxt}>Statements</Text>
                </View>
            </View>

            <View style={{
                borderColor: '#ddd',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
            }}>
                <Text style={styles.myAccount}>Support</Text>
                <View style={styles.userAccountOptionList}>
                    <View style={styles.actOptList}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/344/phone.png' }} />
                    </View>
                    <Text style={styles.myActTxt}>Statements</Text>
                </View>

                <View style={styles.userAccountOptionList}>
                    <View style={styles.actOptList}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/344/phone.png' }} />
                    </View>
                    <Text style={styles.myActTxt}>Statements</Text>
                </View>
                <View style={styles.userAccountOptionList}>
                    <View style={styles.actOptList}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/344/phone.png' }} />
                    </View>
                    <Text style={styles.myActTxt}>Statements</Text>
                </View>
            </View>

            <View style={{
                borderColor: '#ddd',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
            }}>
                <Text style={styles.myAccount}>Security</Text>
                <View style={styles.userAccountOptionList}>
                    <View style={styles.actOptList}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/344/phone.png' }} />
                    </View>
                    <Text style={styles.myActTxt}>Statements</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                </View>

                <View style={styles.userAccountOptionList}>
                    <View style={styles.actOptList}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/344/phone.png' }} />
                    </View>
                    <Text style={styles.myActTxt}>Statements</Text>
                </View>
            </View>
            <View style={{
                borderColor: '#ddd',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
            }}>
                <Text style={styles.myAccount}>Shere</Text>
                <View style={styles.userAccountOptionList}>
                    <View style={styles.actOptList}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/344/phone.png' }} />
                    </View>
                    <Text style={styles.myActTxt}>Statements</Text>
                </View>

                <View style={styles.userAccountOptionList}>
                    <View style={styles.actOptList}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/344/phone.png' }} />
                    </View>
                    <Text style={styles.myActTxt}>Statements</Text>
                </View>
            </View>

            <View style={{
                borderColor: '#ddd',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
            }}>
                <Text style={styles.myAccount}>My Account</Text>
                <View style={styles.userAccountOptionList}>
                    <View style={styles.actOptList}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/344/phone.png' }} />
                    </View>
                    <Text style={styles.myActTxt}>Statements</Text>
                </View>
            </View>

            <View marginVertical={15} style={{
                borderColor: '#ddd',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
            }}>
                <View style={styles.userAccountOptionList}>
                    <View style={styles.actOptList}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/344/phone.png' }} />
                    </View>
                    <Text style={styles.myActTxt}>Dark Mode</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ float: 'right' }}
                    />

                </View>
            </View>

            <View marginTop={13}>
                <View style={styles.userAccountOptionList}>
                    <View style={styles.actOptList}>
                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/344/phone.png' }} />
                    </View>
                    <Text style={styles.myActTxt}>Logout</Text>
                </View>
            </View>

            <View marginVertical={20} style={{ flex: 1 }}>
                <Image style={{ height: 70, width: 'auto', alignItems: 'center', resizeMode: 'contain' }} source={{ uri: 'https://img.icons8.com/ios-filled/344/phone.png' }} />
            </View>

            <View style={{ flex: 1, marginHorizontal: 30 }}>
                <Text style={{ textAlign: 'center' }}>App Version 10.4 (304)</Text>
                <Text style={{ textAlign: 'center' }}>Carfted in india with </Text>
            </View>
        </ScrollView>
    );
}

export default Iprofile;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    profileHeading: {
        fontSize: 20,
        marginVertical: 22,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#dddddd',
        borderRadius: 7,
        paddingHorizontal: 5,
        paddingVertical: 8,
        alignItems: 'center'
    },
    userName: {
        fontSize: 18,
        fontWeight: '900'
    },
    userBank: {

    },
    profilePic: {
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
        borderRadius: 50,
        resizeMode: 'cover'
    },
    userEditProfile: {
        fontSize: 10,
        textDecorationLine: 'underline',
        color: 'blue'
    },
    myAccount: {
        fontSize: 17,
        paddingBottom: 10
    },
    userAccountOptionList: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    actOptList: {
        marginVertical: 10,
        marginRight: 25,
        backgroundColor: '#dddddd',
        padding: 6,
        borderRadius: 5,
    },
    myAccount: {
        marginTop: 40
    },
    icon: {
        height: 35,
        width: 35,
    },
    myActTxt: {
        marginRight: 10,
        color: '#454545',
        fontSize: 18
    }
})
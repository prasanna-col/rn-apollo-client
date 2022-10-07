import * as React from 'react';
import { View, Text, SafeAreaView, Image, Pressable, StyleSheet } from 'react-native';
import Menubar from '../../assets/images/Menubar.png'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../assets/colors';

const DrawerHeader = ({
    route,
    headerTitle
}) => {
    const navigation = useNavigation();
    const toggleDrawer = () => {
        navigation.toggleDrawer()

    };

    return (
        <SafeAreaView>
            <View style={styles.heaederView}>
                <Pressable style={styles.leftIconView} onPress={() => toggleDrawer()}>
                    <Image source={Menubar} style={styles.leftIcon} />
                </Pressable>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>{headerTitle}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    heaederView: {
        height: 50,
        width: "100%",
        paddingHorizontal: 5,
        flexDirection: "row",
        backgroundColor: Colors.statusbarColor
    },
    leftIconView: {
        width: "10%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftIcon: {
        height: 20,
        width: 20,
        resizeMode: "contain"
    },
    headerTextView: {
        width: "80%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: "bold",
        color: "#fff"
    }
});



export default DrawerHeader;

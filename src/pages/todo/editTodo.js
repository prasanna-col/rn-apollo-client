// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/

import * as React from 'react';
import { Button, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { STATUSBAR_HEIGHT } from '../../components/AppConstents'
import AppHeader from '../../components/header'
import AppStatusBar from '../../components/AppStatusBar'
const EditTodoScreen = ({ route, navigation }) => {

    return (
        <>
            <AppStatusBar />
            <SafeAreaView style={{ flex: 1, marginTop: STATUSBAR_HEIGHT }}>
                <AppHeader
                    headerTitle="Edit Task"
                    onBackPress={() => {
                        navigation.goBack();
                    }} />
                <View style={{ padding: 16 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 16 }}> Edit Todo screen</Text>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

export default EditTodoScreen;

import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import DrawerHeader from '../../components/header/drawerHeader'
import { STATUSBAR_HEIGHT } from '../../components/AppConstents'
import AppStatusBar from '../../components/AppStatusBar'

const TodoScreen = ({ route, navigation }) => {

    return (
        <>
            <AppStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, marginTop: STATUSBAR_HEIGHT }}>
                <DrawerHeader headerTitle={"Tasks"} />
                <View style={{ flex: 1, padding: 16 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 16 }}> Todo screen</Text>
                        <Button onPress={() => navigation.navigate('editTask')} title="Edit task" />
                    </View>
                </View>
            </SafeAreaView>
        </>

    );
}

export default TodoScreen;

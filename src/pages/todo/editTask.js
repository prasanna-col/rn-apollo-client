import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Switch } from 'react-native';
import { useQuery, useMutation } from '@apollo/client';

import AppHeader from '../../components/AppHeader'
import AppStatusBar from '../../components/AppStatusBar'
import AppButton from '../../components/AppButton'
import AppTextInput from '../../components/AppTextInput'
import AppContainer from '../../components/AppContainer'
import AppText from '../../components/AppText';
import { READ_TODOS, CREATE_TODO, REMOVE_TODO, UPDATE_TODO, UPDATE_TODOSTATUS } from './queries'
import { Colors } from '../../assets/styles';
import { App_borderRadius } from '../../components/AppConstants';


const EditTaskScreen = ({ route, navigation }) => {

    const taskData = route.params;
    const { data, loading, error } = useQuery(READ_TODOS);
    const [addTodo] = useMutation(CREATE_TODO); //  Here createTodo is user defined
    const [deleteTodo] = useMutation(REMOVE_TODO); // deleteTodo is user defined, not to be same as in REMOVE_TODO.
    const [editTodo] = useMutation(UPDATE_TODO);
    const [updateTodoStaus] = useMutation(UPDATE_TODOSTATUS);

    const [name, setname] = useState(taskData.name || "");
    const [phone, setPhone] = useState(taskData.phone || "");
    const [task, setTask] = useState(taskData.text || "");
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    var todoData = data?.todos

    const handleTask = (val, key) => {
        console.log("todoData", todoData)
        console.log("val", val, key)

        todoData[key].text = val
    }
    // console.log("data", data)

    const status_view = () => {
        if (loading) return <AppText>loading...</AppText>;
        if (error) return <AppText>ERROR</AppText>;
        if (!data) return <AppText>Not found</AppText>;
        if (data) return <AppText>Connected</AppText>;
    }

    const on_update = async () => {
        // var createdata = {
        //     text: task,
        //     name: name,
        //     phone: phone
        // }
        // await addTodo({ variables: createdata });
        await navigation.navigate("taskList")

    }

    return (
        <>
            <AppStatusBar />
            <SafeAreaView style={{ flex: 1 }}>
                <AppHeader
                    headerTitle="Edit Task"
                    onBackPress={() => {
                        navigation.goBack();
                    }} />
                <AppContainer >
                    {/* {status_view()} */}
                    <View style={[styles.boxShadow, styles.cardStyle]}>

                        <AppText h3m AppBlack >Assign to</AppText>
                        <AppTextInput onChangeText={val => setname(val)} placeholder={"Name"} defaultValue={name} />

                        <AppText h3m AppBlack >Mobile Number</AppText>
                        <AppTextInput onChangeText={val => setPhone(val)} placeholder={"Phone"} defaultValue={phone} />

                        <AppText h3m AppBlack >Task</AppText>
                        <AppTextInput onChangeText={val => setTask(val)} placeholder={"Task"} defaultValue={task} />

                        <View style={{ flexDirection: "row", width: "100%" }}>
                            <View style={{ width: "45%", marginRight: 25 }}>
                                <AppText h3m AppBlack >Date</AppText>
                                {/* <AppTextInput onChangeText={val => setname(val)} placeholder={"Name"} defaultValue={name} /> */}
                                <AppText h3m AppBlack2 mt1 bold>12/12/2022</AppText>
                            </View>
                            <View style={{ width: "45%", marginRight: 25 }}>
                                <AppText h3m AppBlack >Time</AppText>
                                <AppText h3m AppBlack2 mt1 bold>02:30 PM</AppText>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 30, alignItems: "center" }}>
                            <AppText h3 AppBlack bold>Priority</AppText>
                            <Switch
                                style={{ marginLeft: 10, transform: [{ scaleX: .9 }, { scaleY: .6 }] }}
                                trackColor={{ false: "#767577", true: Colors.AppColorLight }}
                                thumbColor={isEnabled ? Colors.AppColor : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    <AppButton onPress={() => { on_update() }} title={"Update & save"} />
                </AppContainer>
            </SafeAreaView>
        </>

    );
}

export default EditTaskScreen;


const styles = StyleSheet.create({
    boxShadow: {
        marginBottom: 1,
        padding: 4,
        shadowColor: Colors.AppColor,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3
    },
    cardStyle: {
        backgroundColor: Colors.card_bg,
        borderRadius: App_borderRadius,
        padding: 10,
        marginVertical: 15,
        marginHorizontal: 0
    },
    cardview1: { width: "100%", flexDirection: "row", marginTop: 10 },
    iconView: { width: "10%", alignItems: "center" },
    iconStyle: { height: 25, width: 25, resizeMode: "contain" },
    assignNameView: { width: "80%" }
});
// const EditTaskScreen = ({ route, navigation }) => {

//     return (
//         <>
//             <AppStatusBar />
//             <SafeAreaView style={{ flex: 1 }}>
//                 <AppHeader
//                     headerTitle="Edit Task"
//                     onBackPress={() => {
//                         navigation.goBack();
//                     }} />
//                 <View style={{ padding: 16 }}>
//                     <View style={{ alignItems: 'center', justifyContent: 'center', }}>
//                         <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 16 }}> Edit Todo screen</Text>
//                     </View>
//                 </View>
//             </SafeAreaView>
//         </>
//     );
// }

// export default EditTaskScreen;

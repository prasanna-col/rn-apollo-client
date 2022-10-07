import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

// Todo stack
import TodoScreen from './pages/todo'
import EditTodoScreen from './pages/todo/editTodo'

import { AppContextProvider } from "./context";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const contextValue = {

}

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
          style={{
            width: 25,
            height: 25,
            marginLeft: 15
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage"

    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'Task Lists', //Set Header Title
          headerLeft: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      // screenOptions={{ 
      //   headerShown: false // hide stack navigatore header
      // }}

      screenOptions={{
        headerLeft: () =>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}
    >
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title

        }} />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }} />
    </Stack.Navigator>
  );
}

function todoScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="todo"
      screenOptions={{
        headerShown: false // hide stack navigatore header
      }}

    // screenOptions={{
    //   headerLeft: () =>
    //     <NavigationDrawerStructure
    //       navigationProps={navigation}
    //     />,
    //   headerStyle: {
    //     backgroundColor: '#f4511e', //Set Header color
    //   },
    //   headerTintColor: '#fff', //Set Header text color
    //   headerTitleStyle: {
    //     fontWeight: 'bold', //Set Header text style
    //   }
    // }}
    >
      <Stack.Screen
        name="todo"
        component={TodoScreen}
        options={{
          title: 'Tasks', //Set Header Title,
        }} />
      <Stack.Screen
        name="editTask"
        component={EditTodoScreen}
        options={{
          title: 'Edit Task', //Set Header Title
          headerShown: false
        }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <AppContextProvider value={contextValue}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 5 },
          }}
        >

          <Drawer.Screen
            name="TodoPage"
            options={{ drawerLabel: 'Tasks page Option', headerShown: false }}
            component={todoScreenStack} />

          <Drawer.Screen
            name="FirstPage"
            options={{
              drawerLabel: 'FirstPage',
              headerShown: false // Hide the drawer header
            }}
            component={firstScreenStack} />

          <Drawer.Screen
            name="SecondPage"
            options={{ drawerLabel: 'Second page Option', headerShown: false }}
            component={secondScreenStack} />

        </Drawer.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}

export default App;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// authentication screens
import {LoginScreen} from '../screens/authentication/login';
// main screens
import {DashboardScreen} from '../screens/main/dashboard';

// types
type MainRoutes = {
  Dashboard: undefined;
};

type AuthenticationRoutes = {
  Login: undefined;
};

type DrawerRoutes = {
  Main: undefined;
  Authentication: undefined;
};

// stacks
const MainStack = createStackNavigator<MainRoutes>();

const MainStackNavigator: React.FC = () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Dashboard" component={DashboardScreen} />
    </MainStack.Navigator>
  );
};

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();

const AuthenticationStackNavigator: React.FC = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Login" component={LoginScreen} />
    </AuthenticationStack.Navigator>
  );
};

// drawer
const MainDrawer = createDrawerNavigator<DrawerRoutes>();

const MainDrawerNavigator: React.FC = () => {
  return (
    <MainDrawer.Navigator>
      <MainDrawer.Screen
        name="Authentication"
        component={AuthenticationStackNavigator}
      />
      <MainDrawer.Screen name="Main" component={MainStackNavigator} />
    </MainDrawer.Navigator>
  );
};

// navigator component
const Navigator: React.FC = () => {
  return <MainDrawerNavigator />;
};

export default Navigator;

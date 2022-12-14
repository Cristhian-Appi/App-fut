import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Fixtures from './screens/Fixtures'
import Home from './screens/Home'
import Splash from './screens/Splash';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import About from './screens/About';

const Stack = createNativeStackNavigator();

const screens = [
    {
        component: Splash,
        name: 'Splash',
        options: {
            headerShown: false
        }
    },
    {
        component: SignIn,
        name: 'SignIn',
        options: {
            headerShown: false
        }
    },
    {
        component: SignUp,
        name: 'SignUp',
        options: {
            title: 'Sign Up'
        }
    },
    {
        component: Home,
        name: 'Home',
        options: {
            title: 'Home'
        }
    },
    {
        component: Fixtures,
        name: 'Fixtures',
        options: {
            title: 'Fixtures'
        }
    },
    {
        component: About,
        name: 'About',
        options: {
            title: 'About'
        }
    }
];

const Navigation = () => ( // rederizando 
    <NavigationContainer>
        <Stack.Navigator>
            {screens.map((screen) => (
                <Stack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={screen.options}
                />
            ))}
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigation;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../telas/Home';
import Yugioh from "../telas/Yugioh";
import Pokemon from "../telas/Pokemon";
import Cards from "../telas/Cards";

const { Screen , Navigator } = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator>
            <Screen
                name = "Home"
                component = {Home}
                options = {{
                     headerShown : false,       
                }}
            />

            <Screen
                name = "Yugioh"
                component= {Yugioh}
                options = {{
                    title : "Yu-Gi-Oh",
                    headerTitleAlign : 'center',
                    headerStyle: {
                        backgroundColor : '#7A26E0',
                    }         
                }}
                
            />
            <Screen
                name = "Pokemon"
                component= {Pokemon}
                options = {{
                    title : "Pokemon",
                    headerTitleAlign : 'center',
                    headerStyle: {
                        backgroundColor : '#F71E60',
                    }         
                }}
                
            />
            <Screen
                name = "Cards"
                component= {Cards}
                options = {{
                    headerShown : false,       
               }}
            />
        </Navigator>
        
        
    );
}
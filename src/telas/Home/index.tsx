import React from 'react';
import AppButton from '../../Components/Button'
import {StyledView, StyledText} from './styles'




export default function Home(){
    return(
        <StyledView>
            <StyledText>Card Searcher</StyledText>
            <AppButton name="Pokemon" rota = 'Pokemon'/>                        
            <AppButton name="Yu-Gi-Oh" rota = 'Yugioh'/>
            <AppButton name="Magic" rota = 'Magic'/>
            
        </StyledView>
    );
}
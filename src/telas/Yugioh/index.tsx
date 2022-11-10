import React from 'react';
import Filter from '../../Components/Filter';
import CardDiv from '../../Components/CardDiv';
import {StyledView, StyledText} from './styles'

export default function Yugioh(){
    return(
        <StyledView>
            <Filter/>
            <CardDiv/>
        </StyledView>
        
    );
}
import React from 'react';
import { Text, View } from 'react-native';
import { StyledCard, StyledTela, StyledText, StyledTextCard, StyledViewCard } from './styles';
import { Routes } from '../../Routes';

export default function Cards({route}){
    return(
                 
        <StyledTela>
            <StyledViewCard>
                <StyledCard>
                    <StyledTextCard>{route.params.pageName}</StyledTextCard>
                    <Text>
                        Imagem da carta
                    </Text>
                </StyledCard>
                                
               
            </StyledViewCard>

            <StyledText>
                <Text>
                    Texto das cartas
                </Text>
            </StyledText>
        </StyledTela>
        
    );
}
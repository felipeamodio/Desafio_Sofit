import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.title}>Sofit</Text>
                <TouchableOpacity style={styles.settings}>
                    <Ionicons name="settings-sharp" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerRule}>
                <Text style={styles.rules}>·Adicione o valor de suas despesas</Text>
                <Text style={styles.rules}>·Tenha o controle sobre seus gastos</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 230,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    containerHeader: {
        flexDirection: 'row',
        marginTop: 28,
    },
    settings: {
        marginLeft: 90
    },
    title: {
        color: '#000000',
        fontSize: 34,
        fontWeight: 'bold',
        marginRight: 30
    },
    containerRule: {
        marginTop: 39
    },
    rules: {
        marginTop: 8,
        fontSize: 14,
        color: '#A9A9A9',
        fontWeight: 'bold'
    }
})
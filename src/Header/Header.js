import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.title}>Total de despesas</Text>
                <TouchableOpacity style={styles.settings}>
                    <Ionicons name="settings-sharp" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.money}>R$ 2.472,35</Text>
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
        marginTop: 50,
    },
    settings: {
        marginLeft: 90
    },
    title: {
        color: '#000000',
        fontSize: 23,
        fontWeight: 'bold',
        marginRight: 30
    },
    money: {
        marginTop: 70,
        fontSize: 30,
        color: '#3CB371',
        fontWeight: 'bold'
    }
})
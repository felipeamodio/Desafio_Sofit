import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function Expenses(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Minhas despesas</Text>

            <ScrollView style={styles.scroll}>
                <TouchableOpacity style={styles.btnExpenses}>
                    <Text style={styles.value}>R$18,75</Text>
                    <Text style={styles.place}>Supermercado Extra</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnExpenses}>
                    <Text style={styles.value}>R$10,00</Text>
                    <Text style={styles.place}>Estacionamento</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnExpenses}>
                    <Text style={styles.value}>R$78,50</Text>
                    <Text style={styles.place}>Restaurante</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnExpenses}>
                    <Text style={styles.value}>R$235,99</Text>
                    <Text style={styles.place}>The Last of Us II</Text>
                </TouchableOpacity>
            </ScrollView>

            <TouchableOpacity style={styles.btnAdd}>
                <Text style={styles.addTxt}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '700',
        marginTop: 20,
        marginRight: 200
    },
    scroll: {
        marginTop: 20,
    },
    btnExpenses: {
        backgroundColor: '#FFFFFF',
        width: 378,
        height: 68,
        padding: 8,
        borderRadius: 8,
        paddingHorizontal: 20,
        marginTop: 11
    },
    value: {
        fontSize: 26,
        fontWeight: '600',
        color: '#3CB371'
    },
    place: {
        marginTop: 6,
        fontSize: 16,
        color: '#808080',
        fontWeight: 'bold'
    },
    btnAdd: {
        width: 380,
        height: 84,
        backgroundColor: '#32CD32',
        borderRadius: 8,
        justifyContent: 'center',
        marginBottom: 38
    },
    addTxt: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 34,
        fontWeight: '800'
    }
})
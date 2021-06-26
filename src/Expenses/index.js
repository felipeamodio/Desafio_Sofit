import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Expenses(){

    const [isVisible, setIsVisible] = useState(false); 

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Minhas despesas</Text>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>Informe seus gastos</Text>
                    <TouchableOpacity style={styles.closeModal} 
                    onPress={() => setIsVisible(false)}>
                        <AntDesign name="closecircle" size={24} color="#FF0000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerInput}>
                    <TextInput 
                        style={styles.valor}
                        placeholder="Digite o valor gasto"
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.containerDesc}>
                    <TextInput 
                        style={styles.valor}
                        placeholder="Digite onde foi gasto"
                        keyboardType="text"
                    />
                </View>

                <TouchableOpacity style={styles.btnSave}>
                    <Text style={styles.txtSave}>Salvar</Text>
                </TouchableOpacity>
            </Modal>

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

            <TouchableOpacity style={styles.btnAdd}
                              onPress={() => setIsVisible(true)}>
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
    },
    modalContainer: {
        marginTop: 300,
        marginLeft: 5,
        backgroundColor: '#FFFFFF',
        width: 380,
        height: 418,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    modalText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 60
    },
    closeModal: {
        marginTop: 10,
        marginLeft: 40
    },
    containerInput: {
        marginTop: 39,
        position: 'absolute',
        top: 390,
        left: 67,
        backgroundColor: '#E6E6FA',
        padding: 10,
        width: 260,
        borderRadius: 8,
        alignItems: 'center',
    },
    containerDesc: {
        position: 'absolute',
        top: 490,
        left: 67,
        backgroundColor: '#E6E6FA',
        padding: 10,
        width: 260,
        borderRadius: 8,
        alignItems: 'center',
    },
    btnSave: {
        position: 'absolute',
        left: 67,
        top: 570,
        backgroundColor: '#836FFF',
        width: 260,
        padding: 10,
        height: 40,
        borderRadius: 8,
        alignItems: 'center'
    },
    txtSave: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
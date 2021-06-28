import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Expenses(){

    const [isVisible, setIsVisible] = useState(false); 
    const [expense, setExpense] = useState();
    const [expenseItems, setExpenseItems] = useState([]);

    const handleAddExpense = () => {
        setExpenseItems([...expenseItems, expense])
        setExpense(null);
    }

    const deleteExpense = (index) => {
        let itemsDelete = [...expenseItems];
        itemsDelete.splice(index, 1);
        setExpenseItems(itemsDelete);
    }


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
                        value={expense}
                        onChangeText={valueTxt => setExpense(valueTxt)}
                    />
                </View>

                <TouchableOpacity style={styles.btnSave} onPress={() => handleAddExpense()}>
                    <Text style={styles.txtSave}>Salvar</Text>
                </TouchableOpacity>
            </Modal>

            <ScrollView style={styles.scroll}>
                {
                    expenseItems.map((item, index) => {
                        return <TouchableOpacity style={styles.btnExpenses} index={index} onPress={() => deleteExpense(index)}>
                            <Text valueTxt style={styles.value}>R${item}</Text>
                        </TouchableOpacity>
                    })
                }
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
        width: 200,
        height: 68,
        padding: 8,
        borderRadius: 8,
        paddingHorizontal: 20,
        marginTop: 11,
        alignItems: 'center',
        justifyContent: 'center'
    },
    value: {
        fontSize: 26,
        fontWeight: '600',
        color: '#3CB371'
    },
    place: {
        fontSize: 16,
        textAlign: 'center',
        color: '#4F4F4F'
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
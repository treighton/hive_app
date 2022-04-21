import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Text, View } from './Themed';

interface Option {
    label: string;
    value: string | boolean;
}

interface AppSelectProps {
    label: string;
    onChange: (value: any) => void;
    selectedValue: string | boolean;
    options: Option[];
}

const AppSelect: React.FC<AppSelectProps> = ({ label, options, onChange, selectedValue }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <View style={styles.container}>
            <Text style={{ margin: 0 }}>{label}</Text>
            <TouchableOpacity style={{
                alignItems: 'center',
                backgroundColor: '#efefef',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
                padding: 15,
                width: 300,
            }} onPress={ handleShow }>
                <Text style={{ margin: 0 }}>{selectedValue || 'select...'}</Text>
            </TouchableOpacity>
            <Modal 
                visible={show} 
                animationType="fade" 
                transparent={false}
                >
                <View style={styles.modalContainer}>
                    <View style={ styles.modalView }>
                        <TouchableOpacity style={{marginTop: 30}} onPress={ handleShow }>
                            <Text>Close</Text>
                        </TouchableOpacity>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ width: 300 }}
                            onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
                        >   
                            {options.map( ({ label, value }) => <Picker.Item key={label}  label={ label } value={ value } />)}
                        </Picker>
                    </View> 
                </View>
            </Modal>
            
        </View>
    );   
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    modalContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
    },
    modalView: {
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginTop: "auto",
        paddingLeft: 35,
        paddingRight: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
        width: "100%"
    },
    title: {
        fontSize: 20,
    }
})

export default AppSelect;
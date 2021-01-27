import * as React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import Constants from "expo-constants";

// or any pure javascript modules available in npm
import { Button } from "react-native-paper";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.app}>
                <Text style={styles.legenda}> Cesar Web Palace</Text>
                <View>
                <Text style={styles.resultado}>Portal de Usuario</Text>
                
                <Image  source={{uri: 'https://images.pexels.com/photos/3804076/pexels-photo-3804076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
                style={{
                  width: 300, 
                  height: 400,
                  padding: 2,
                                      }} />
        

                 <Text style={styles.rodape}> Nombre de Usuario</Text>
                </View>
            <View>
              <TextInput style={styles.peso} />
              <Button>
              Ingresar
              </Button>
            </View>
            </View>
           
        );
    }
}

const styles = StyleSheet.create({
    app: {
      padding: 40, 
    },
    legenda: {
      padding: 5,
      textAlign: 'center',
      fontWeight: 'bold',
    },

    resultado: { 
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },

    rodape: { 
      padding: 10, 
      textAlign: 'center',
      fontSize: 10, },

      peso: {
        borderColor:'#000',
        borderWidth: 1,

      },


});
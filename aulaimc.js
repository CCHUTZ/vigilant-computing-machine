import * as React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import Constants from "expo-constants";

// or any pure javascript modules available in npm
import { Button } from "react-native-paper";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.app}>
                <Text style={styles.legenda}> Oraculo Sagrado</Text>
                <View>
                <Text style={styles.resultado}>Cartas Xamánicas</Text>
                
                <Image  source={{uri: 'https://fzi1m1rxd371wbagq2at3i2w-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/mystical-shaman-oracle-cards.sample.jpg'}}
                style={{
                  width: 500, 
                  height: 600,
                  padding: 2,
                                      }} />
        

                 <Text style={styles.rodape}> Escribe tu nombre</Text>
                </View>
            <View>
              <TextInput style={styles.peso} />
              <Button>
              comezar lectura
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
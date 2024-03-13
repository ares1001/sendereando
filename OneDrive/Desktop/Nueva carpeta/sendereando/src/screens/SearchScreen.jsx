import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState([]);

  const handleSearch = () => {
    // Aquí puedes implementar la lógica de búsqueda utilizando el texto y los filtros seleccionados
    console.log('Texto de búsqueda:', searchText);
    console.log('Filtros:', filters);
  };

  const toggleFilter = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  return (
  
  <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>
     <View style={styles.containerImage}>
        <Image style={styles.img} source={require('../../assets/Logo.png')}/>
      </View>
      <View style={styles.titleText}>
        <Text style={styles.titleFonts}>Iniciar Sesión</Text>
      </View>
      <Text>Buscar senderos</Text>
      <TextInput
        placeholder="Buscar..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Button
          title="Apto mascotas"
          onPress={() => toggleFilter('pets')}
          color={filters.includes('pets') ? 'green' : undefined}
        />
        <Button
          title="Apto personas con movilidad reducida"
          onPress={() => toggleFilter('mobility')}
          color={filters.includes('mobility') ? 'green' : undefined}
        />
        <Button
          title="Apto niños"
          onPress={() => toggleFilter('children')}
          color={filters.includes('children') ? 'green' : undefined}
        />
        <Button
          title="Fácil"
          onPress={() => toggleFilter('easy')}
          color={filters.includes('easy') ? 'green' : undefined}
        />
        <Button
          title="Moderado"
          onPress={() => toggleFilter('moderate')}
          color={filters.includes('moderate') ? 'green' : undefined}
        />
        <Button
          title="Difícil"
          onPress={() => toggleFilter('difficult')}
          color={filters.includes('difficult') ? 'green' : undefined}
        />
        <Button
          title="Hasta 10 km"
          onPress={() => toggleFilter('upTo10km')}
          color={filters.includes('upTo10km') ? 'green' : undefined}
        />
        <Button
          title="Hasta 20 km"
          onPress={() => toggleFilter('upTo20km')}
          color={filters.includes('upTo20km') ? 'green' : undefined}
        />
        <Button
          title="Más de 20 km"
          onPress={() => toggleFilter('moreThan20km')}
          color={filters.includes('moreThan20km') ? 'green' : undefined}
        />
      </View>
      <Button title="Buscar" onPress={handleSearch} />
    </View>
    </TouchableWithoutFeedback>
                     
                                          
)}
  


const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal:20,
  backgroundColor: "rgb(255 255 255 )",
  
},

img:{ 
width:360,
height:150,
marginBottom:100,
marginLeft:50
},

titleText: {
  marginBottom:20
},


titleFonts: {
  color: "grey",
  fontWeight: "700",
  fontSize: 28,
},
formContainerUser: {
  width:"100%",
  fontWeight: "400",
  fontSize: 16,
  padding: 10,
  gap:8
},

formContainerPass: {
  width:"100%",
  fontWeight: "400",
  fontSize: 16,
  padding: 10,
  gap:8
},

containerButton: {
  height:40,
  width:134,
  margin:10,
  borderRadius:100,
  borderColor:"black",
  backgroundColor:"rgb(52 136 136)",
  alignItems: "center",
  justifyContent: "center",
  
  
},
opacityButton: {
  padding: 10,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: "green",
  backgroundColor: "#348888",
},
TextButton: {
  fontSize: 18,
  alignItems: "center",
  color: "white",
  padding:5,
  fontWeight:400,
  
},
forgetContainer: {
  marginVertical: 10,
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
},
forgetAWText: {
  color: "black",
  fontSize: 14,
},
forgetText: {
  textDecorationLine: "underline",
  color: "rgb(52 136 136)",
  fontSize: 14,
},
forgottenContainer: {
  flex: 0,
  alignContent: "center",
  justifyContent: "center",
},
forgottenText: {
  textAlign: "center",
  color: "grey",
  textDecorationLine: "underline",
},



});
    
  );
};

export default Search;

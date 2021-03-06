import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultsDetail from './ResultsDetail';


const ResultsList = ({title, results, navigation}) =>{
  if  (!results.length){
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title} list:</Text>
      <Text style={styles.resultStyle}>{results.length} results match</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data = {results}
        keyExtractor={(result)=> result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('DishesShow', {id:item.id})}>
             <ResultsDetail result={item}/>
            </TouchableOpacity>)
        }}
      />
    </View>
  )

};

const styles = StyleSheet.create({
  titleStyle:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:15
  },
  resultStyle:{
    fontSize: 14,
    color:'grey',
    marginLeft:15,
    marginBottom:5
  },
  container:{
    marginBottom: 10

  }


});

export default withNavigation(ResultsList);

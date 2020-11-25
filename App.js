import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Button,TextInput} from 'react-native-paper'
let id=0;
export default function App() {
  const [todoItem,setItem]=React.useState('');
  const [todoList,setTodoList]=React.useState([]);
  
const  InputHandler=(value)=>setItem(value);

const  AddItem=()=>{
  setItem("");
  console.log('list',todoList);
  todoList.push({name:todoItem,id:id++});
  console.log(todoList);
  setTodoList([...todoList]);
}

const  DeleteItem=(id)=>()=>{
  const filter=todoList.filter((item)=>item.id!=id);
  setTodoList([...filter]);
}

  return (
    <View style={styles.container}>
      <TextInput 
      placeholder='Enter Todo Item'
      style={{width:'100%'}}
        value={todoItem}
        onChangeText={InputHandler}
      />
    <Button style={styles.margin} mode="contained"  title="Add" onPress={AddItem}>Add</Button>
    {
    todoList.length>0
    ?
    todoList.map((item,index)=>{
      return(
        <View  key={index} style={{flexDirection:'row'}}>
          <Text>{item.name}</Text>
          <Button title="X"  onPress={DeleteItem(item.id)}>X</Button>
        </View>
      );    
    })
    :
    null
  }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin:{
    marginTop:10
  },
  row:{
    flexDirection:'row',
  }
});

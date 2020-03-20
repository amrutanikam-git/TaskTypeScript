import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Button, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countActions from './redux/actions/counts';
var flag=true;
interface Screen1Props {
  navigation: StackNavigationProp<any>;
  count:any,
  actions:any
}

function Screen1(props: Screen1Props) {
const { count } = props;
const chengecount=(type:string)=>{
let { count, actions } = props;
if(type=="inc")
{
 if(flag)
  {
    count=count+100;
    actions.changeCount(count);
  }
  props.navigation.push('Screen1')
}
else{
    flag=false
    count=count-50;
    actions.changeCount(count);
 }
  }
  return (
    <View style={styles.container}>
     <Text>Your Score : {count}</Text>
      <Button title="Win" onPress={() =>chengecount("inc")}/>
    
      <Button title="lose"onPress={() =>chengecount("dec")} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },

});
const mapStateToProps = (state:any) => ({
    count: state.count.count,
  });
  
  const ActionCreators = Object.assign(
    {},
    countActions,
  );
  const mapDispatchToProps = (dispatch:any) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Screen1)

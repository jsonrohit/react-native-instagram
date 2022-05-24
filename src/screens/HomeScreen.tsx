import {StyleSheet, View,Button} from 'react-native';
import {Header,Stories,Posts} from '../component/index'

const HomeScreen = () =>{
  return (
      <View style={styles.bgColor}>
      <Header />
      <Stories />
      <Posts />
      </View>
  );
}


export default HomeScreen;

const styles = StyleSheet.create({
      bgColor:{
        backgroundColor:"#fafafa",
        height:'100%'
      }
})
 
import 'react-native-reanimated';
import { Text, View ,Image, Button , Dimensions } from 'react-native';
 
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router'; 
import Header from '@/components/header';
import { Themebutton } from '@/components/themebutton';
 
export default function Thirdpage(){
      return (
        <View style={{height:"100%", backgroundColor:"white"}}>
        
         <Image style={{width:300,height:500 , marginLeft:58,marginTop:25}} source={ require("../assets/images/3page1.png")}/>

         <Image style={{ position:"absolute" , marginTop:40, marginLeft:20  }} source={require("../assets/images/3pageman.png")}/>
         <Image style={{position:"absolute" , marginTop:50 , marginLeft:10 }} source={require("../assets/images/3pageman2.png")}/>
         <Image style={{position:"absolute", marginTop:110 , marginLeft:-20 }} source={require("../assets/images/3pageman3.png")}/>
         <Image style={{ position:"absolute" , marginVertical:160 , marginLeft:5}} source={require("../assets/images/3oageman4.png")}/>
         <Image style={{ position:"absolute" , marginVertical:210 , marginLeft:-20}} source={require("../assets/images/3page6.png")}/>

         <Image style={{position:"absolute", marginTop:360 , marginLeft:60 , width:120 , height:65}} source={require("../assets/images/3pageman3.png")}/>

         <Image style={{marginTop:-150 ,marginLeft:-20}} source={require("../assets/images/bottom.png")}/>
         <Text style = {{fontSize:32, textAlign:"center" , marginLeft:10,marginTop:-60, lineHeight:50}}>Let's connect with others right now!</Text> 
         <Text style = {{fontSize:18, textAlign:"center" , marginTop:20, marginLeft:10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</Text> 
          
         <View style={{flexDirection:"row",marginTop:-8}}>
         <Themebutton style={{marginTop:40,marginLeft:20,borderRadius:50, width:140, elevation:3}} 
              
               bgColor='#F6EFED' txt='Skip' txtColor='#A4634D'  onPress={()=> router.push("/login")}/> 
         <Themebutton style={{marginTop:40, borderRadius:50, width:140, elevation:3}} 
              
               bgColor='#A4634D' txt='Next' txtColor='#FFFFFF' onPress={()=> router.push("/thirdpage")}/> 
             </View>
         </View>
         
        
      )
  }
   
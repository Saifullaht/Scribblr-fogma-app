 
import 'react-native-reanimated';
import { Text, View ,Image, Button , Dimensions } from 'react-native';
 
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router'; 
import Header from '@/components/header';
import { Themebutton } from '@/components/themebutton';
 
export default function (){
      return (
        <View style={{height:"100%", backgroundColor:"white"}}>
            <View>
         <Image style={{width:300,height:510 , marginLeft:58,marginTop:28 }} source={ require("../assets/images/Moble.png")}/>
        
         <Image style={{width:300,height:480 , marginLeft:64,marginTop:-500}} source={ require("../assets/images/2page1.png")}/> 

         <Image style={{ position:"absolute" , marginTop:40, marginLeft:20  }} source={require("../assets/images/man2.png")}/>
         <Image style={{position:"absolute" , marginTop:130 , marginLeft:110 }} source={require("../assets/images/man3.png")}/>
         <Image style={{position:"absolute", marginTop:110 , marginLeft:-20 }} source={require("../assets/images/women4.png")}/>
         <Image style={{ position:"absolute" , marginVertical:140 , marginLeft:20}} source={require("../assets/images/man4.png")}/>
         <Image style={{ position:"absolute" , marginVertical:210 , marginLeft:-20}} source={require("../assets/images/man5.png")}/>
          
           </View>
          


           
         <Image style={{marginTop:-150 ,marginLeft:-20}} source={require("../assets/images/bottom.png")}/>
         <Text style = {{fontSize:32, textAlign:"center" , marginLeft:10,marginTop:-60, lineHeight:50}}>Create & publish your own articles to the world!</Text> 
         <Text style = {{fontSize:18, textAlign:"center" , marginTop:20, marginLeft:10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</Text> 
          
         <View style={{flexDirection:"row"}}>
         <Themebutton style={{marginTop:40,marginLeft:20,borderRadius:50, width:140, elevation:3}} 
               bgColor='#F6EFED' txt='Skip' txtColor='#A4634D'  onPress={()=> router.push("/login")}/> 
              
         <Themebutton style={{marginTop:40, borderRadius:50, width:140, elevation:3}} 
              
               bgColor='#A4634D' txt='Next' txtColor='#FFFFFF' onPress={()=> router.push("/thirdpage")}/> 
             </View>
         </View>
         
        
      )
  }
 
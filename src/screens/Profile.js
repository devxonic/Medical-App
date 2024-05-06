// import React from 'react'
// import { Text, View } from 'react-native'
// import { Fonts } from '../components/style'

// const Profile = () => {
//   return (
//     <View style={{backgroundColor:'#e3eeeb',paddingHorizontal:20,flex:1}}>
//         <Text style={{fontFamily:Fonts.MEDIUM,fontSize:30,textAlign:'center',color:'black'}}>Profile Page</Text>
//     </View>
//   )
// }

// export default Profile
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity , Platform,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fonts } from '../components/style';

const ProfilePage = () => {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : prevCounter));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
        <View style={{padding:12,borderRadius:100,borderWidth:1.5,borderColor:'green'}}>
        <View style={{padding:10,borderRadius:100,borderWidth:1.5,borderColor:'green'}}>
          <View style={{padding:10,borderRadius:100,borderWidth:1,borderColor:'#5B8F6B'}}>
          <View style={styles.imageBorder}>
            <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/008/957/225/non_2x/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg' }} style={styles.profileImage} />
          </View>
          </View>
          </View>
          </View>
        </View>
        <Text style={styles.counterText}>Patient Name Here</Text>
        <Text style={[styles.counterText,{fontFamily:Fonts.REGULAR,fontSize:13,marginTop:4}]}>Living Healthy, Living Happy!</Text>
      </View>
      <View style={styles.counterContainer}>
        <View style={{padding:5,}}>
          <Text style={[styles.counterItem,{borderRightWidth:1,borderColor:'#116754'}]}>130</Text>
          <Text style={styles.textHeadingCounter}>Appointments</Text>
        </View>
        <View style={{padding:5,}}>
          <Text style={[styles.counterItem,{borderRightWidth:1,borderColor:'#116754'}]}>30</Text>
          <Text style={styles.textHeadingCounter}> Completed </Text>
        </View>
        <View style={{padding:5,}}>
          <Text style={styles.counterItem}>300</Text>
          <Text style={styles.textHeadingCounter}> Pending </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#116754'}]}>
          <Text style={{color:'white',fontFamily:Fonts.REGULAR,fontSize:14}}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#C54B4B'}]}>
          <Text style={{color:'white',fontFamily:Fonts.REGULAR,fontSize:14}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e3eeeb',flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,

  },
  textHeadingCounter:{
    fontFamily:Fonts.REGULAR,
    color:'#116754',
    paddingHorizontal:10
  },
  imageContainer: {
    position: 'relative',
   
  },
  imageBorder: {
    borderRadius: 100,
    borderColor: '#5B8F6B',
    overflow:'hidden',
    ...Platform.select({
      ios: {
        shadowColor: 'green',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 50,
    objectFit:'cover'
  },
  linesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 2,
    width: '100%',
    position: 'absolute',
  },
 
  counterText: {
    marginTop: 10,
    fontSize:20,
    color:'#116754',
    fontFamily:Fonts.MEDIUM
  },
  counterContainer: {
    marginBottom: 20,
    backgroundColor:'white',
    flexDirection:'row',justifyContent:'space-between'
  },
  counterItem: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily:Fonts.MEDIUM,
    fontSize:22,
    textAlign:'center',
    color:'black'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop:30
  },
  button: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 20,
  },
});

export default ProfilePage;

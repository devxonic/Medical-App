// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   SafeAreaView,
// } from 'react-native';
// import React, {useState} from 'react';
// import Link from '../components/common/Link';
// import Heading from '../components/common/Heading';
// import Input from '../components/common/Input';
// import Button from '../components/common/Button';
// import {useNavigation} from '@react-navigation/native';
// import {signUp} from '../api/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import BackIcon from 'react-native-vector-icons/Ionicons'
// import { Fonts } from '../components/style';
// const SignUp = () => {
//   const [formData, setFormData] = useState({email: '', password: ''});
//   // Doctordashboard
//   const navigation = useNavigation();
//   const handleSubmit = () => {
//     signUp(formData)
//       .then(async res => {
//         const response = res.data.data;
//         const token = response.accessToken;
//         await AsyncStorage.setItem('accessToken', token);
//         await AsyncStorage.setItem('isAuth', JSON.stringify(true));
//         console.warn(token);
//         navigation.navigate('dashboard');
//       })
//       .catch(error => console.log('ERROR', error));
//   };

//   const [selectedRole, setSelectedRole] = useState('patient');
//   const handleRoleSelection = role => {
//     setSelectedRole(role);
//   };
//   const handlePress = () => {
//     navigation.navigate('signin')
//   };

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   const handleFormChange = (name, value) => {
//     setFormData(prev => ({...prev, [name]: value}));
//   };

//   const renderRoleButton = (role, text) => (
//     <TouchableOpacity
//       style={[
//         styles.button,
//         selectedRole === role && {borderWidth: 1, borderColor: '#000'},
//       ]}
//       onPress={() => handleRoleSelection(role)}>
//       <Text
//         style={[
//           styles.buttonText,
//           selectedRole === role && {color: '#160846'},
//         ]}>
//         {text}
//       </Text>
//       {selectedRole === role && (
//         <Image source={require('../images/tick.png')} style={styles.tickMark} />
//       )}
//     </TouchableOpacity>
//   );
//   return (
//     <SafeAreaView style={{backgroundColor:'#e3eeeb',flex:1}}>
//       <View style={styles.parent}>
//         <View style={styles.firstChild}>
//           <TouchableOpacity onPress={handleBackPress}>
//           <BackIcon name = 'chevron-back' size={25} color='black'/>
//           </TouchableOpacity>
//           <Link text="Sign In" onPress={handlePress} />
//         </View>
//         <View style={styles.secondChild}>
//           <Heading text="Create Your" />
//           <Heading text="Account" />
//         </View>
//         <View>
//           <View style={styles.buttonCon}>
//             {renderRoleButton('patient', 'Patient')}
//             {renderRoleButton('doctor', 'Doctor')}
//             {renderRoleButton('nurse', 'Nurse')}
            
            
//           </View>
//           <View>
//             {selectedRole === 'patient' && (
//               <>
//                 <Input placeholder="Enter Patient Name" />
//                 <Input
//                   placeholder="Email"
//                   keyboardType="email-address"
//                   textContentType="emailAddress"
//                   value={formData?.email}
//                   onChangeText={value => handleFormChange('email', value)}
//                 />
//                 <Input
//                   placeholder="Password"
//                   secureTextEntry={true}
//                   textContentType="password"
//                   value={formData?.password}
//                   onChangeText={value => handleFormChange('password', value)}
//                 />
//                 <Input
//                   placeholder="Confirm Password"
//                   secureTextEntry={true}
//                   textContentType="password"
//                 />
//               </>
//             )}
//             {selectedRole === 'doctor' && (
//               <>
//                 <Input placeholder="Enter Doctor Name" />
//                 <Input
//                   placeholder="Email"
//                   keyboardType="email-address"
//                   textContentType="emailAddress"
//                 />
//                 <Input
//                   placeholder="Password"
//                   secureTextEntry={true}
//                   textContentType="password"
//                 />
//                 <Input
//                   placeholder="Confirm Password"
//                   secureTextEntry={true}
//                   textContentType="password"
//                 />
//               </>
//             )}
//             {selectedRole === 'nurse' && (
//               <>
//                 <Input placeholder="Enter Nurse Name" />
//                 <Input
//                   placeholder="Email"
//                   keyboardType="email-address"
//                   textContentType="emailAddress"
//                 />
//                 <Input
//                   placeholder="Password"
//                   secureTextEntry={true}
//                   textContentType="password"
//                 />
//                 <Input
//                   placeholder="Confirm Password"
//                   secureTextEntry={true}
//                   textContentType="password"
//                 />
//               </>
//             )}
//           </View>
//           <View style={styles.bottomCon}>
//             <Button text="Create Account" onPress={handleSubmit} />
//             <Text style={{fontFamily:Fonts.REGULAR,color:'black'}}>Or Create With</Text>
//             <TouchableOpacity style={{backgroundColor:'white',padding:10,borderRadius:5}}>
//               <Image source={require('../images/google.png')} style={{width:30,height:30,objectFit:'contain'}} />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   parent: {
//     paddingVertical: 30,
//     paddingHorizontal: 15,
//   },
//   firstChild: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   button: {
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   buttonText: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: 'grey',
//     fontFamily:Fonts.REGULAR
//   },
//   buttonCon: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     fontFamily:Fonts.LIGHT
//   },

//   bottomCon: {
//     marginTop: 20,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     height: 150,
//   },

//   secondChild: {
//     marginVertical: 40,
//   },
//   tickMark: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//   },
// });

// export default SignUp;
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import Link from '../components/common/Link';
import Heading from '../components/common/Heading';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { signUp } from '../api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackIcon from 'react-native-vector-icons/Ionicons';
import { Fonts } from '../components/style';

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      Alert.alert('Error', 'Please fill in all details.');
      return;
    }

    signUp(formData)
      .then(async (res) => {
        const response = res.data.data;
        const token = response.accessToken;
        await AsyncStorage.setItem('accessToken', token);
        await AsyncStorage.setItem('isAuth', JSON.stringify(true));
        console.warn(token);

        // Redirect to respective dashboard based on selected role
        if (selectedRole === 'patient') {
          navigation.navigate('dashboard');
        } else if (selectedRole === 'doctor') {
          navigation.navigate('Doctordashboard');
        }
      })
      .catch((error) => console.log('ERROR', error));
  };

  const [selectedRole, setSelectedRole] = useState('patient');

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handlePress = () => {
    navigation.navigate('signin');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleFormChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const renderRoleButton = (role, text) => (
    <TouchableOpacity
      style={[
        styles.button,
        selectedRole === role && { borderWidth: 1, borderColor: '#000' },
      ]}
      onPress={() => handleRoleSelection(role)}>
      <Text
        style={[
          styles.buttonText,
          selectedRole === role && { color: '#160846' },
        ]}>
        {text}
      </Text>
      {selectedRole === role && (
        <Image
          source={require('../images/tick.png')}
          style={styles.tickMark}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ backgroundColor: '#e3eeeb', flex: 1 }}>
      <View style={styles.parent}>
        <View style={styles.firstChild}>
          <TouchableOpacity onPress={handleBackPress}>
            <BackIcon name="chevron-back" size={25} color="black" />
          </TouchableOpacity>
          <Link text="Sign In" onPress={handlePress} />
        </View>
        <View style={styles.secondChild}>
          <Heading text="Create Your" />
          <Heading text="Account" />
        </View>
        <View>
          <View style={styles.buttonCon}>
            {renderRoleButton('patient', 'Patient')}
            {renderRoleButton('doctor', 'Doctor')}
            {renderRoleButton('nurse', 'Nurse')}
          </View>
          <View>
            {selectedRole === 'patient' && (
              <>
                <Input
                  placeholder="Enter Patient Name"
                  onChangeText={(value) =>
                    handleFormChange('patientName', value)
                  }
                />
              </>
            )}
            {selectedRole === 'doctor' && (
              <>
                <Input
                  placeholder="Enter Doctor Name"
                  onChangeText={(value) =>
                    handleFormChange('doctorName', value)
                  }
                />
              </>
            )}
            {selectedRole === 'nurse' && (
              <>
                <Input
                  placeholder="Enter Nurse Name"
                  onChangeText={(value) =>
                    handleFormChange('nurseName', value)
                  }
                />
              </>
            )}
            <Input
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={formData?.email}
              onChangeText={(value) => handleFormChange('email', value)}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
              value={formData?.password}
              onChangeText={(value) => handleFormChange('password', value)}
            />
            <Input
              placeholder="Confirm Password"
              secureTextEntry={true}
              textContentType="password"
            />
          </View>
          <View style={styles.bottomCon}>
            <Button text="Create Account" onPress={handleSubmit} />
            <Text style={{ fontFamily: Fonts.REGULAR, color: 'black' }}>
              Or Create With
            </Text>
            <TouchableOpacity
              style={{ backgroundColor: 'white', padding: 10, borderRadius: 5 }}>
              <Image
                source={require('../images/google.png')}
                style={{ width: 30, height: 30, objectFit: 'contain' }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  firstChild: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'grey',
    fontFamily: Fonts.REGULAR,
  },
  buttonCon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: Fonts.LIGHT,
  },

  bottomCon: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 150,
  },

  secondChild: {
    marginVertical: 40,
  },
  tickMark: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default SignUp;

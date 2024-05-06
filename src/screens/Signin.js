import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Link from '../components/common/Link';
import Heading from '../components/common/Heading';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import {useNavigation} from '@react-navigation/native';
import {login} from '../api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackIcon from 'react-native-vector-icons/Ionicons'
import { Fonts } from '../components/style';
const SignIn = () => {
  const [formData, setFormData] = useState({email: '', password: ''});
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const handleCreateAccountPress = () => {
    navigation.navigate('signup');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleForgotPress = () => {
    navigation.navigate('recoveraccount');
  };

  const handleFormChange = (name, value) => {
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    login(formData)
      .then(async res => {
        const response = res.data.data;
        const email = response.email;
        const password = response.password;
        await AsyncStorage.getItem('email', email);
        await AsyncStorage.getItem('password', password);
        setIsLoading(false);
        navigation.navigate('dashboard');
      })
      .catch(error => Alert.alert('One or more details is incorrect'));
  };
  return (
    <SafeAreaView style={{backgroundColor:'#e3eeeb',flex:1}}>
      <View style={styles.parent}>
        <View style={styles.firstChild}>
          <TouchableOpacity onPress={handleBackPress}>
          
            <BackIcon name = 'chevron-back' size={25} color='black'/>
          </TouchableOpacity>
         
          <Link text="Create Account" onPress={handleCreateAccountPress} />
        </View>
        <View style={styles.secondChild}>
          <Heading text="Sign In To Your" />
          <Heading text="Account" />
        </View>
        <View>
          <View>
            <Input
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={formData?.email}
              onChangeText={value => handleFormChange('email', value)}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
              value={formData?.password}
              onChangeText={value => handleFormChange('password', value)}
            />
            <Link
              text="Forgot Password?"
              style={styles.link}
              onPress={handleForgotPress}
            />
          </View>
          <View style={styles.bottomCon}>
            <Button
              text="Sign In"
              onPress={handleSubmit}
              disabled={isLoading}
            />
            <Text style={{fontFamily:Fonts.REGULAR,color:'black'}}>Or Create With</Text>
            <TouchableOpacity style={{backgroundColor:'white',padding:10,borderRadius:5}}>
              <Image source={require('../images/google.png')} style={{width:30,height:30,objectFit:'contain'}} />
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
    // backgroundColor:'#e3eeeb',
    // flex:1
  },
  firstChild: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  link: {
    alignSelf: 'flex-end',
  },
});

export default SignIn;

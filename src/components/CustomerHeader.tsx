import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Bars3BottomLeftIcon, CheckBadgeIcon } from 'react-native-heroicons/solid';
import { RFValue } from 'react-native-responsive-fontsize';
import MetaAILogo from '../assets/logo_s.jpeg';
import CustomText from './CustomText';

function CustomHeader() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.subContainer}>
            <TouchableOpacity>
                <Bars3BottomLeftIcon size={RFValue(20)} color='white'/>
            </TouchableOpacity>
            <View style={styles.flexRow}>
                <Image source={MetaAILogo} style={styles.image}/>
                <View>
                <CustomText fontWeight='bold' >
                    Meta AI <CheckBadgeIcon color='#27d366' size={16} />
                </CustomText>
                <CustomText fontWeight={500} opacity={0.7} size={12}>
                    com  Llama 3
                </CustomText>
                </View>
            </View>
            <TouchableOpacity>
                <CustomText size={14}>Clear</CustomText>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgba(20,25,46,1)',
    borderBottomWidth: 0.18,
    borderBottomColor: 'rgba(62,62,63,1)'
  },
  subContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 40,
  },
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
});

export default CustomHeader;

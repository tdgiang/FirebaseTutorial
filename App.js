import React from 'react';
import {View,Text,StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootView from './src/RootView'

const app=(props)=>{


  return(
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: 'red' }}>
      <StatusBar backgroundColor={'red'}  />
      <View style={{ flex: 1, backgroundColor: '#fafafa' }} >
        <RootView />
        
        </View>
    </SafeAreaView>
  )
}


export default app;
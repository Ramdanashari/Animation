import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Animated,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const App = () => {
  const slideAnim = useRef(new Animated.Value(0)).current; 
  const [visible, setVisible] = useState(false);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = e.nativeEvent.contentOffset.y;
    const position = scrollPosition > 0;
    setVisible(position);

    setTimeout(() =>{
      setVisible(false)
    }, 1000)
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 100 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [visible, slideAnim]);

  return (
    <View style={{flex: 1, backgroundColor: '#f8f9fa'}}>
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        {Array.from({length: 8}, (_, i) => (
          <Animatable.View
            key={i}
            animation="rubberBand"
            duration={2000}
            delay={i * 100}
            style={{
              marginVertical: 15,
              marginHorizontal: 20,
              borderRadius: 15,
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: {width: 0, height: 5},
              elevation: 5,
              overflow: 'hidden',
            }}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aRvdLJOUYqOfIPLZbSP40UZP0a4diWfzzZCFj2qv-ZWgj-quivR-XfvHTA0CiipiMx0&usqp=CAU',
              }}
              style={{height: 350, width: '100%'}}
            />
            <View style={{padding: 15}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#333'}}>
                Jaket Parsity 
              </Text>
              <Text style={{fontSize: 14, color: '#666', marginTop: 5}}>
                jaket parsity dari bahan brand internasional{i + 1}. 
              </Text>
            </View>
          </Animatable.View>
        ))}
      </ScrollView>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#28a745',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{translateY: slideAnim}],
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
          Checkout
        </Text>
      </Animated.View>
    </View>
  );
};

export default App;

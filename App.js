import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Data} from './Data';
import {Status} from './status';
import {Logo} from './logo';

export default function App() {
  const [list, setList] = useState(1);
  const [but, setBut] = useState({label: 'Cool!', titleSize: 46, textSize: 44});
  const items = Data.filter(x => x.cat === list);
  const item = items.map(t => {
    const sizeTitle = {fontSize: but.titleSize};
    const sizeText = {fontSize: but.textSize};
    return (
      <View key={t.id} style={{paddingBottom: 40}}>
        <Text style={[styles.title, sizeTitle]}>{t.title}</Text>
        <Text style={[styles.text, sizeText]}>{t.text}</Text>
      </View>
    );
  });
  const buttonList = () => {
    setList(list + 1);
    if (list > 2) {
      setList(1);
      setBut({label: 'Cool!', titleSize: 46, textSize: 44});
    }
    if (list === 1) {
      setBut({label: 'Awesome!', titleSize: 34, textSize: 22});
    }
    if (list === 2) {
      setBut({label: 'Try now!', titleSize: 44, textSize: 36});
    }
  };
  // console.log(list);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.gradient}>
        <Logo />
        {item}
        <View style={styles.blockButton}>
          <Status list={list} />
          <TouchableOpacity style={styles.opacity} onPress={buttonList}>
            <Text style={styles.opacityText}>{but.label}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  title: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  text: {color: '#fff', fontWeight: 'bold', fontStyle: 'normal'},
  blockButton: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    height: 120,
    width: '100%',
  },
  opacity: {
    backgroundColor: '#fff',
    height: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
  },
  opacityText: {
    fontSize: 22,
    color: '#056FDD',
  },
});

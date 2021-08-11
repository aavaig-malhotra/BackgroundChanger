import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32,0,126)');

  // const getRandomColor = () => {
  //   const letter = '0123456789ABCDEF';
  //   let color = '#';

  //   for (var i = 0; i < 6; i++) {
  //     color += letter[Math.floor(Math.random() * 16)];
  //   }

  //   return color;
  // };

  const changeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setRandomColor(`rgb(${r},${g},${b})`);
  };

  const reset = () => {
    setRandomColor('rgb(0,0,0)');
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      {/* status bar will be used to control the phone's status bar */}
      {/* <View style={{backgroundColor: 'rgb(32,0,126)'}}>  */}
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeColor} style={styles.buttonStyle}>
          <Text style={styles.text}>Tap Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset} style={styles.buttonStyle}>
          <Text style={[styles.text, styles.reset]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

// view is comparable to divs and stylesheet is comparable to css stylesheet
// Touchable opacity is a button

// ways to add styles to a react native app -> 1. inside the tag using style keyword, 2. Stylesheet.create({})
// 3. mix of 1 and 2  -> inside style keyword inside a tag make an array and add the stylesheet.create and specific values as well

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: '60%',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    textTransform: 'uppercase',
    marginBottom: 20,
    width: '100%',
    textAlign: 'center',
  },
  reset: {
    backgroundColor: 'rgb(255,255,255)',
    color: '#000',
  },
});

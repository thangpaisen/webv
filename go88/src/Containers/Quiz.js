/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Option from './components/Option'
import Questions from '../questions1.json'

export default function quizScreen({ route, navigation }) {
  const index = route?.params?.index || 0

  return (
    <View>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text style={styles.questionNo}>
          {index + 1}/{Questions.questions.length}
        </Text>
      </View>
      <Text style={styles.Question}>{Questions.questions[index].question}</Text>
      {Questions.questions[index].answers.map((option, i) => (
        <Option
          value={option}
          navigation={navigation}
          optionIdx={i}
          qnIndex={index}
          key={i}
          dapan={Questions.questions[index].correctIndex}
          chon={i}
        />
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  questionNo: {
    color: '#ff9b30',
    fontSize: 25,
    margin: 20,
  },
  Question: {
    fontSize: 30,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  nextButton: {
    height: 50,
    width: '20%',
    backgroundColor: '#b32d00',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: 20,
    borderRadius: 15,
  },
  nextText: {
    color: 'white',
    fontWeight: '900',
  },
})

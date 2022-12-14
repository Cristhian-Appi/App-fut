/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import axios from 'axios';
import React, {useEffect, useState}from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const httpclient = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-rapidapi-key": "2ac69e9e3196d3598c5378e32e333a44",
    "x-rapidapi-host": "v3.football.api-sports.io"
  }
})

const Section = ({children, title}) => {

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const [fixtures, setfixtures] = useState ()

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  useEffect (()=> {
    httpclient
      .get("/fixtures?league=1&season=2022&from=2022-12-13&to=2022-12-18")
      .then((values)=>{
        setfixtures (values.data.response)
      })
  }, []) //declarante componente fixture (use buscando jogos na api)


  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View>
          {!fixtures && <ActivityIndicator />}
          {fixtures?.map((fixture)=> (
            <Section key={fixture.fixture.id} title={new Intl.DateTimeFormat
            ("pt-BR", {dateStyle:"short", timeStyle:"short", timeZone:"America/Sao_Paulo"}).format
            (new Date(fixture.fixture.date))}>
              {fixture.teams.home.name} X {fixture.teams.away.name}
            </Section>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  }
});

export default App;

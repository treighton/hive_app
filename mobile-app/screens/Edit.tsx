import { useState } from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import { useQuery } from '@apollo/client';;

import AppSelect  from '../components/AppSelect';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { QUERY_INSPECTION } from '../graphql/queries';

export default function EditScreen({route, navigation }: RootStackScreenProps<'NotFound'>) {
  const [date, setDate] = useState( new Date() );
  const [hiveWeight, setHiveWeight] = useState('');
  const [workerPop, setWorkerPop] = useState('');
  const [layPattern, setLayPattern] = useState('');
  const [eggsPresent, setEggsPresent] = useState(false);
  const [larvaePresent, setLarvaePresent] = useState(false);
  const [cappedBroodPresent, setCappedBroodPresent] = useState(false);
  const [queenSpotted, setQueenSpotted] = useState(false);
  const [queenCell, setQueenCell] = useState(false);
  const [hiveTemperment, setHiveTemperment] = useState('');
  const [honeyStores, setHoneyStores] = useState('');
  const [pollenStores, setPollenStores] = useState('');
  const [odor, setOder] = useState('');
  const [hiveBeetles, setHiveBeetles] = useState('');
  const [varroaSypmtoms, setVarroaSypmtoms] = useState(false);
  const [varroaCount, setVarroaCount] = useState('');
  const [superAdded, setSuperAdded] = useState(false);
  const [superRemoved, setSuperRemoved] = useState(false);
  const [addedExcluder, setAddedExcluder] = useState(false);
  const [notes, setNotes] = useState(false);

  const { inspectionId } = route.params as any;

  const { loading, data, error } = useQuery(QUERY_INSPECTION, {
    variables: { id: inspectionId },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error :( {error} </Text>;
  }
  
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>
        Editing Hive inspection {data.inspection.id}
      </Text>
      <View>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginVertical: 15,
        }}>Edit Form</Text>
            <AppSelect 
              label="Hive Weight"
              selectedValue={hiveWeight}
              onChange={(value) => setHiveWeight(value)}
              options={[
                { label: 'Light', value: 'light' },
                { label: 'Normal', value: 'normal' },
                { label: 'Heavy', value: 'heavy' },
              ]}
            />
            <AppSelect 
              label="Worker Population"
              selectedValue={workerPop}
              onChange={(value) => setWorkerPop(value)}
              options={[
                { label: 'Low', value: 'Low' },
                { label: 'Moderate', value: 'Moderate' },
                { label: 'High', value: 'High' },
              ]}
            />
            <AppSelect 
              label="Laying Pattern"
              selectedValue={layPattern}
              onChange={(value) => setLayPattern(value)}
              options={[
                { label: 'Good', value: 'Good' },
                { label: 'Ok', value: 'Ok' },
                { label: 'Bad', value: 'Bad' },
              ]}
            />
            <AppSelect 
              label="Eggs Present"
              selectedValue={eggsPresent}
              onChange={(value) => {
                value ? setEggsPresent(true) : setEggsPresent(false)
              }}
              options={[
                { label: 'True', value: true },
                { label: 'False', value: false },
              ]}
            />
            <AppSelect 
              label="Larvae Present"
              selectedValue={larvaePresent}
              onChange={(value) => {
                value ? setLarvaePresent(true) : setLarvaePresent(false)
              }}
              options={[
                { label: 'True', value: true },
                { label: 'False', value: false },
              ]}
            />
            <AppSelect 
              label="Capped Brood Present"
              selectedValue={cappedBroodPresent}
              onChange={(value) => {
                value ? setCappedBroodPresent(true) : setCappedBroodPresent(false)
              }}
              options={[
                { label: 'True', value: true },
                { label: 'False', value: false },
              ]}
            />
            <AppSelect 
              label="Queen Present"
              selectedValue={queenSpotted}
              onChange={(value) => {
                value ? setQueenSpotted(true) : setQueenSpotted(false)
              }}
              options={[
                { label: 'True', value: true },
                { label: 'False', value: false },
              ]}
            />
            <AppSelect 
              label="Queen Cell Present"
              selectedValue={queenCell}
              onChange={(value) => {
                value ? setQueenCell(true) : setQueenCell(false)
              }}
              options={[
                { label: 'True', value: true },
                { label: 'False', value: false },
              ]}
            />
            <AppSelect 
              label="Hive Temperment"
              selectedValue={hiveTemperment}
              onChange={(value) => setHiveTemperment(value)}
              options={[
                { label: 'Calm', value: 'Calm' },
                { label: 'Nervous', value: 'Nervous' },
                { label: 'Nasty', value: 'Nasty' },
              ]}
            />
            <AppSelect 
              label="Honey Stores"
              selectedValue={honeyStores}
              onChange={(value) => setHoneyStores(value)}
              options={[
                { label: 'Low', value: 'Low' },
                { label: 'Normal', value: 'Normal' },
                { label: 'High', value: 'High' },
              ]}
            />
            <AppSelect 
              label="Pollen Stores"
              selectedValue={pollenStores}
              onChange={(value) => setPollenStores(value)}
              options={[
                { label: 'Low', value: 'Low' },
                { label: 'Normal', value: 'Normal' },
                { label: 'High', value: 'High' },
              ]}
            />
            <AppSelect 
              label="Odor"
              selectedValue={odor}
              onChange={(value) => setOder(value)}
              options={[
                { label: 'Normal', value: 'Normal' },
                { label: 'Foul', value: 'Foul' },
                { label: 'Fermented', value: 'Fermented' },
              ]}
            />
            <AppSelect 
              label="Odor"
              selectedValue={odor}
              onChange={(value) => setOder(value)}
              options={[
                { label: 'Normal', value: 'Normal' },
                { label: 'Foul', value: 'Foul' },
                { label: 'Fermented', value: 'Fermented' },
              ]}
            />
            <AppSelect 
              label="Small Hive Beetles Present"
              selectedValue={hiveBeetles}
              onChange={(value) => setHiveBeetles(value)}
              options={[
                { label: 'None', value: 'None' },
                { label: 'A few', value: 'A few' },
                { label: 'A lot', value: 'A lot' },
              ]}
            />
            <AppSelect 
              label="Varroa Count"
              selectedValue={varroaCount}
              onChange={(value) => setOder(value)}
              options={[
                { label: 'None', value: 'None' },
                { label: 'A few', value: 'A few' },
                { label: 'A lot', value: 'A lot' },
              ]}
            />
            <AppSelect 
              label="Varroa Symptoms"
              selectedValue={varroaCount}
              onChange={(value) => setVarroaCount(value)}
              options={[
                { label: 'None', value: 'None' },
                { label: 'A few', value: 'A few' },
                { label: 'A lot', value: 'A lot' },
              ]}
            />
            <AppSelect 
              label="Added Super"
              selectedValue={superAdded}
              onChange={(value) => {
                value ? setSuperAdded(true) : setSuperAdded(false)
              }}
              options={[
                { label: 'True', value: true },
                { label: 'False', value: false },
              ]}
            />
            <AppSelect 
              label="Removed Super"
              selectedValue={superRemoved}
              onChange={(value) => {
                value ? setSuperRemoved(true) : setSuperRemoved(false)
              }}
              options={[
                { label: 'True', value: true },
                { label: 'False', value: false },
              ]}
            />
            <AppSelect 
              label="Added Excluder"
              selectedValue={addedExcluder}
              onChange={(value) => {
                value ? setAddedExcluder(true) : setAddedExcluder(false)
              }}
              options={[
                { label: 'True', value: true },
                { label: 'False', value: false },
              ]}
            />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

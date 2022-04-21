import { StyleSheet, FlatList, Pressable } from 'react-native';
import { useQuery } from '@apollo/client';
import { Text, View, TextProps } from '../components/Themed';
import StyledIcon from '../components/StyledIcon';
import { RootTabScreenProps } from '../types';
import { QUERY_INSPECTIONS } from '../graphql/queries';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Inspections'>) {

  const { loading, data, error } = useQuery(QUERY_INSPECTIONS);

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>Error :( {error} )</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Past Hive Inspections</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FlatList 
        data={data.inspections}
        renderItem={({ item }) => <Item id={item.id} text={item.date} navigation={navigation} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

interface ItemProps extends TextProps {
  id: string;
  text: string;
  navigation: any;
}

const Item = (props:ItemProps) => {
  return ( 
  <View style={styles.listItem}>
    <Text>{props.text}</Text>
    <Pressable onPress={ () => {
      props.navigation.navigate(
        'EditInspection',
        {
          inspectionId: props.id
        }
        )
    }} >
      <StyledIcon name="edit" color="#000" />
    </Pressable>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50 
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
    width: '100%',
  },
  listItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginVertical: 10,
    width: '100%',
  }
});

import { StyleSheet, TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/client';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { QUERY_INSPECTION } from '../graphql/queries';

export default function EditScreen({route, navigation }: RootStackScreenProps<'NotFound'>) {

  const { inspectionId } = route.params as any;

  const { loading, data, error } = useQuery(QUERY_INSPECTION, {
    variables: { id: inspectionId },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This will be the edit Screen for {data.inspection.id}
      </Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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

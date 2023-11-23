import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import { fetchAssociations } from '../../api/api'

const ListAllAssociations = () => {
  const [page, setPage] = useState(1);

  const { data: associations, isFetchingMore } = useQuery(
    ['associations', page],
    () => fetchAssociations(page),
    {
      staleTime: 60000,
      getNextPageParam: (lastPage, pages) => {
        return lastPage.hasNextPage ? lastPage.pageIndex + 1 : null;
      },
    }
  );

  return (
    <View style={styles.container}>
      <Text>Associações Cadastradas:</Text>
      <FlatList
        data={associations?.result || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{`ID: ${item.id}`}</Text>
            <Text>{`Nome: ${item.name}`}</Text>
          </View>
        )}
        ListFooterComponent={isFetchingMore && <Text>Carregando mais...</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default ListAllAssociations;

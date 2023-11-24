import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import { fetchAssociations } from '../../api/api'
import { Card } from 'react-native-paper';

const ListAllAssociations = () => {
    const [page, setPage] = useState(1);

    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
        return dateObject.toLocaleTimeString(undefined, options);
    }

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
                        <Card style={styles.card}>
                            <Text style={styles.cardText}> 
                             <Text>Nome: </Text>
                                {item.name}
                            </Text>
                            <Text>
                            <Text>Data de Fundação: </Text>
                                {formatDate(item.foundationDate)}
                            </Text>
                            <Text>
                            <Text>Cores: </Text>
                                {item.colors}
                            </Text>
                            <Text>
                            <Text>Tipo de Associação: </Text>
                               {item.associationType}
                            </Text>
                        </Card>
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
    card: {
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 10,
    }
});

export default ListAllAssociations;

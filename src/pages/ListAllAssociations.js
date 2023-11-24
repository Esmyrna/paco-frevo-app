import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView} from 'react-native';
import { useQuery } from 'react-query';
import { fetchAssociations } from '../../api/api'
import { Card } from 'react-native-paper';

const ListAllAssociations = () => {
    const [page, setPage] = useState(1);

    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        
        const options = `${day}/${month}/${year}`
        return options;
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
            <Text style={styles.textTitleApi}>Associações Cadastradas:</Text>
            
            <FlatList
                data={associations?.result || []}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Card style={styles.card}>
                            <Text> 
                             <Text style={styles.cardText}>Nome: </Text>
                             <Text style={styles.textApi}>
                             {item.name}
                             </Text>
                             
                            </Text>
                            <Text>
                            <Text style={styles.cardText}>Data de Fundação: </Text>
                            <Text style={styles.textApi}>
                             {formatDate(item.foundationDate)}
                            </Text> 
                            </Text>
                            <Text>
                            <Text style={styles.cardText}>Cores: </Text>
                            <Text style={styles.textApi}>
                             {item.colors.join(', ')}
                            </Text>
                            </Text>
                            <Text>
                            <Text style={styles.cardText}>Tipo de Associação: </Text>
                               <Text style={styles.textApi}>{item.associationType}</Text>
                            </Text>
                        </Card>
                        <Card style={styles.card}>
                            <Text> 
                             <Text style={styles.cardText}>Nome: </Text>
                             <Text style={styles.textApi}>
                             {item.name}
                             </Text>
                             
                            </Text>
                            <Text>
                            <Text style={styles.cardText}>Data de Fundação: </Text>
                            <Text style={styles.textApi}>
                             {formatDate(item.foundationDate)}
                            </Text> 
                            </Text>
                            <Text>
                            <Text style={styles.cardText}>Cores: </Text>
                            <Text style={styles.textApi}>
                             {item.colors.join(', ')}
                            </Text>
                            </Text>
                            <Text>
                            <Text style={styles.cardText}>Tipo de Associação: </Text>
                               <Text style={styles.textApi}>{item.associationType}</Text>
                            </Text>
                        </Card>
                        <Card style={styles.card}>
                            <Text> 
                             <Text style={styles.cardText}>Nome: </Text>
                             <Text style={styles.textApi}>
                             {item.name}
                             </Text>
                             
                            </Text>
                            <Text>
                            <Text style={styles.cardText}>Data de Fundação: </Text>
                            <Text style={styles.textApi}>
                             {formatDate(item.foundationDate)}
                            </Text> 
                            </Text>
                            <Text>
                            <Text style={styles.cardText}>Cores: </Text>
                            <Text style={styles.textApi}>
                             {item.colors.join(', ')}
                            </Text>
                            </Text>
                            <Text>
                            <Text style={styles.cardText}>Tipo de Associação: </Text>
                               <Text style={styles.textApi}>{item.associationType}</Text>
                            </Text>
                        </Card>
                        <Card style={styles.card}>
                            <Text> 
                             <Text style={styles.cardText}>Nome: </Text>
                             <Text style={styles.textApi}>
                             {item.name}
                             </Text>
                             
                            </Text>
                            <Text>
                            <Text style={styles.cardText}>Data de Fundação: </Text>
                            <Text style={styles.textApi}>
                             {formatDate(item.foundationDate)}
                            </Text> 
                            </Text>
                            <Text>
                            <Text style={styles.cardText}>Cores: </Text>
                            <Text style={styles.textApi}>
                             {item.colors.join(', ')}
                            </Text>
                            </Text>
                            <Text>
                            <Text style={styles.cardText}>Tipo de Associação: </Text>
                               <Text style={styles.textApi}>{item.associationType}</Text>
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
    },
    cardText: {
        fontWeight: 'bold',
        color: '#E20821',
        fontSize: 14
    },
    textApi: {
        color: '#000',
        fontSize: 14
    },
    textTitleApi: {
        fontSize: 24,
    }

});

export default ListAllAssociations;

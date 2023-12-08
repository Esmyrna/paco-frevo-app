import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useQuery, useMutation } from 'react-query';
import { fetchAssociations } from '../../api/api';
import { Card, Menu, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ListAllAssociations = () => {
    const [page, setPage] = useState(1);
    const [openMenuId, setOpenMenuId] = useState(null);
    const [selectedAssociation, setSelectedAssociation] = useState(null);
    const [snackbarVisible, setSnackbarVisible] = useState(null);
    const navigation = useNavigation();

    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        const options = `${day}/${month}/${year}`;
        return options;
    };

    const handleUpdate = () => {
        if (selectedAssociation) {
            console.log(`Atualizando associação com ID ${selectedAssociation.id}`);
        }
        setOpenMenuId(null);
    };

    const handleViewAssociation = (associationId) => {
        navigation.navigate("ViewAssociation", {
          itemId: associationId,
          otherParam: "anything you want here",
        });
        setSnackbarVisible(true);
      };      
    
      const handleDelete =  async (associationId)  => {
        try {
            const response = await fetch(`your-api-endpoint/${associationId}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (!response.ok) {
              throw new Error('Falha ao excluir a associação');
            }
        
            return response.json();
          } catch (error) {
            throw new Error(`Falha ao excluir a associação: ${error.message}`);
          }
      };

    const handleOpenMenu = (associationId) => {
        setSelectedAssociation(associationId);
        setOpenMenuId(associationId);
    };

    const handleCloseMenu = () => {
        setSelectedAssociation(null);
        setOpenMenuId(null);
    };

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
                            <TouchableOpacity onPress={() => handleOpenMenu(item.id)}>
                                <Text style={styles.menuIcon}>☰</Text>
                            </TouchableOpacity>
                            <Menu
                                visible={openMenuId === item.id}
                                onDismiss={handleCloseMenu}
                                anchor={
                                    <View style={styles.cardHeader}>
                                        <Text>
                                            <Text style={styles.cardText}>Nome: </Text>
                                            <Text style={styles.textApi}>{item.name}</Text>
                                        </Text>
                                    </View>
                                }
                                anchorStyle={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Menu.Item onPress={handleUpdate} title="Atualizar" />
                                <Divider />
                                <Menu.Item onPress={handleDelete} title="Deletar" />
                            </Menu>
                            <Text>
                                <Text style={styles.cardText}>Data de Fundação: </Text>
                                <Text style={styles.textApi}>{formatDate(item.foundationDate)}</Text>
                            </Text>
                            <Text>
                                <Text style={styles.cardText}>Cores: </Text>
                                <Text style={styles.textApi}>{item.colors.join(', ')}</Text>
                            </Text>
                            <Text>
                                <Text style={styles.cardText}>Tipo de Associação: </Text>
                                <Text style={styles.textApi}>{item.associationType}</Text>
                            </Text>
                            <TouchableOpacity onPress={() => handleViewAssociation(item.id)}>
                              <Text>Ver associação</Text>
                            </TouchableOpacity>
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
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardText: {
        fontWeight: 'bold',
        color: '#E20821',
        fontSize: 14,
    },
    textApi: {
        color: '#000',
        fontSize: 14,
    },
    textTitleApi: {
        fontSize: 24,
    },
    menuIcon: {
        fontSize: 20,
        marginRight: 10,
    },
});

export default ListAllAssociations;

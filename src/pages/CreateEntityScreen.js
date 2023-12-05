import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';
 

const CreateEntityScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: {
      addressSite: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
    },
    type: '',
    entityHistoryNotes: '',
    actuationTimeInMonths: 0,
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleAddressChange = (fieldName, value) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [fieldName]: value,
      },
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('sua_url_de_requisicao', formData);
      console.log('Resposta:', response.data);
      // Faça algo com a resposta, se necessário
    } catch (error) {
      alert("Erro ao criar entidade.");
      console.error('Erro ao enviar requisição:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        onChangeText={(value) => handleInputChange('name', value)}
      />
      <TextInput
        placeholder="Type"
        onChangeText={(value) => handleInputChange('type', value)}
      />
      <TextInput
        placeholder="Entity History Notes"
        onChangeText={(value) => handleInputChange('entityHistoryNotes', value)}
      />
      <TextInput
        placeholder="Actuation Time In Months"
        onChangeText={(value) => handleInputChange('actuationTimeInMonths', value)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Address Site"
        onChangeText={(value) => handleAddressChange('addressSite', value)}
      />
      <TextInput
        placeholder="Number"
        onChangeText={(value) => handleAddressChange('number', value)}
      />
      <TextInput
        placeholder="Complement"
        onChangeText={(value) => handleAddressChange('complement', value)}
      />
      <TextInput
        placeholder="District"
        onChangeText={(value) => handleAddressChange('district', value)}
      />
      <TextInput
        placeholder="City"
        onChangeText={(value) => handleAddressChange('city', value)}
      />
      <TextInput
        placeholder="State"
        onChangeText={(value) => handleAddressChange('state', value)}
      />
      <TextInput
        placeholder="Country"
        onChangeText={(value) => handleAddressChange('country', value)}
      />
      <TextInput
        placeholder="Zip Code"
        onChangeText={(value) => handleAddressChange('zipCode', value)}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

export default CreateEntityScreen;

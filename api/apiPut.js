
export const updateAssociation = async (associationId, updatedData) => {
    try {
        const response = await fetch(`https://pacodofrevoapi1-6ka9yo5l.b4a.run/associations/id/${associationId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error('Falha ao atualizar a associação');
        }

        return response.json();
    } catch (error) {
        throw new Error(`Falha ao atualizar a associação: ${error.message}`);
    }
};

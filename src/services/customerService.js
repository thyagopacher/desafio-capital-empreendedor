const admin = require('../config/firebaseAdminConfig');

const getCustomers = async (cnpj) => {
    const db = admin.firestore();

    try {
        const customersRef = db.collection('customer');
        const snapshot = await customersRef.where('cnpj', '==', cnpj).get();

        if (snapshot.empty) {
            throw new Error('Nenhum cliente encontrado com o CNPJ fornecido.');
        }

        // Retorna o primeiro documento encontrado
        const doc = snapshot.docs[0];
        return { id: doc.id, ...doc.data() };
    } catch (error) {
        throw new Error('Erro ao buscar cliente por CNPJ: ' + error.message);
    }
};

const createCustomer = async (customerData) => {
    const db = admin.firestore();

    try {
        const docRef = await db.collection('customer').add(customerData);
        return { id: docRef.id, ...customerData };
    } catch (error) {
        throw new Error('Error creating customer: ' + error.message);
    }
};

module.exports = {
    getCustomers,
    createCustomer
};

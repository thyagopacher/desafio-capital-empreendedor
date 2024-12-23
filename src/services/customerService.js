const admin = require('../config/firebaseAdminConfig');

// Classe de erro customizada
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
// Função para buscar um cliente por CNPJ
const getCustomers = async (cnpj) => {
    const db = admin.firestore();

    try {
        const customersRef = db.collection('customer');
        const snapshot = await customersRef.where('cnpj', '==', cnpj).get();

        if (snapshot.empty) {
            throw new AppError('Nenhum cliente encontrado com o CNPJ fornecido.', 404);
        }

        const doc = snapshot.docs[0];
        return { id: doc.id, ...doc.data() };
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError('Erro ao buscar cliente por CNPJ: ' + error.message, 500);
    }
};

// Função para criar um cliente
const createCustomer = async (customerData) => {
    const db = admin.firestore();

    try {
        const docRef = await db.collection('customer').add(customerData);
        return { id: docRef.id, ...customerData };
    } catch (error) {
        if (error.code === 'permission-denied') {
            throw new AppError('Permissão negada.', 403);
        } else if (error.code === 'unavailable') {
            throw new AppError('Firestore não está disponível. Por favor, tente novamente mais tarde.', 503);
        } else {
            throw new AppError('Erro ao criar um cliente: ' + error.message, 500);
        }
    }
};

module.exports = {
    getCustomers,
    createCustomer,
    AppError
};

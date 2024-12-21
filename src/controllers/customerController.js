const { response } = require('express');
const customerService = require('../services/customerService');
const axios = require('axios');

const getCustomers = async (req, res) => {
    const { cnpj } = req.query; // Obtém o CNPJ a partir dos parâmetros de consulta

    if (!cnpj) {
        return res.status(400).json({ message: 'O CNPJ é obrigatório.' });
    }
    try {
        // Chama o serviço para obter os clientes do Firestore
        const customers = await customerService.getCustomers(cnpj);

        // Retorna os clientes no formato JSON
        return res.status(200).json(customers);
    } catch (error) {
        console.error("Erro ao buscar clientes:", error.message);
        return res.status(404).json({ message: 'Erro ao buscar dados dos clientes.' });
    }
};

const postCustomer = async (req, res) => {
    try {
        const { razaoSocial, nomeFantasia, cnpj, telefone } = req.body;

        // Valida os dados obrigatórios
        if (!razaoSocial || !nomeFantasia || !cnpj || !telefone) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
        }

        const customerData = { razaoSocial, nomeFantasia, cnpj, telefone };

        // Chama o serviço para criar o cliente no Firestore
        const newCustomer = await customerService.createCustomer(customerData);

        // Retorna o cliente criado no formato JSON
        return res.status(201).json(newCustomer);
    } catch (error) {
        console.error("Erro ao criar cliente:", error.message);
        return res.status(500).json({ message: 'Erro ao salvar dados do cliente.' });
    }
};

module.exports = {
    getCustomers,
    postCustomer
};

const customerService = require('../services/customerService');

const getCustomers = async (req, res) => {
    const { cnpj } = req.query; // Obtém o CNPJ a partir dos parâmetros de consulta

    if (!cnpj) {
        return res.status(400).json({ message: 'O CNPJ é obrigatório.' });
    }

    try {
        const customers = await customerService.getCustomers(cnpj);
        return res.status(200).json(customers);
    } catch (error) {
        console.error("Erro ao buscar clientes:", error.message);

        if (error instanceof customerService.AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }

        return res.status(500).json({ message: 'Erro interno no servidor.' });
    }
};

const postCustomer = async (req, res) => {
    try {
        const { razaoSocial, nomeFantasia, cnpj, telefone } = req.body;
        // Verifica se todos os campos obrigatórios foram fornecidos
        if (!razaoSocial || !nomeFantasia || !cnpj || !telefone) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
        }

        const customerData = { razaoSocial, nomeFantasia, cnpj, telefone };
        const newCustomer = await customerService.createCustomer(customerData);
        return res.status(201).json(newCustomer);
    } catch (error) {
        console.error("Erro ao criar cliente:", error.message);

        if (error instanceof customerService.AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }

        return res.status(500).json({ message: 'Erro interno no servidor.' });
    }
};

module.exports = {
    getCustomers,
    postCustomer
};

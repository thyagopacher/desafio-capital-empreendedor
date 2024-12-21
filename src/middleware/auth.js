const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        console.error("Token não fornecido.");
        return res.status(401).json({ message: 'Token não fornecido.' });
    }

    // Verifica se o token é válido (no caso, se é igual ao token esperado)
    if (token !== 'Bearer ABCDEFGH123456') {
        console.error("Token inválido.");
        return res.status(403).json({ message: 'Token inválido.' });
    }

    // Se o token for válido, passa para o próximo middleware ou rota
    next();
};

module.exports = authenticateToken;
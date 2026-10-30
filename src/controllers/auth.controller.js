export const login = (req, res) => {
    console.log('Login request body:', req.body);
    const { email, password } = req.body;
    //validate email and password
    if (!email || !password) {
        return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }
    res.status(200).json({ 
        message: 'Login exitoso',
        data: { email, password } 
    });
}
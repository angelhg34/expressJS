// index.js
import React, { useState } from 'react';
import axios from 'axios';

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [resultado, setResultado] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/registrar-usuario', {
        email,
        contrasena: password,
        nombres: nombre
      });

      if (response.data.success) {
        setResultado('Usuario registrado exitosamente');
        // Mostrar alerta de éxito
        alert('Usuario registrado exitosamente');
      } else {
        setResultado('Error al registrar usuario');
        // Mostrar alerta de error
        alert('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
      setResultado('Error al registrar usuario');
      // Mostrar alerta de error
      alert('Error al registrar usuario');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombres</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
        <p>{resultado}</p>
      </form>
    </div>
  );
};

export default Index;

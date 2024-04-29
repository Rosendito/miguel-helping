import React, { useState } from 'react';
import Input from '../Input';
import Boton from '../Boton';
import Panel from '../Panel';
import logo from '../../assets/images/logo-blanco.png';
import DateInput from '../DateInput';
import { Link as LinkRouter } from "react-router-dom";

const SignupForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [idDocument, setIdDocument] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleIdDocumentChange = (event) => {
    setIdDocument(event.target.value);
  };

  const handleBirthdateChange = (date) => {
    setBirthdate(date);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-ternary-color h-screen flex justify-center items-center">
      <header>
        <div className="absolute top-0 left-0 flex items-center flex-1 my-2 mx-2">
            <LinkRouter to="/">
                <img src={logo} width={250} height={250} alt="Logo" />
            </LinkRouter>
        </div>
      </header>
      <Panel className="w-96 max-w-md h-auto" title="Registrar usuario">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1" style={{ width: '350px' }}>
              <Input
                type="text"
                id="name"
                title="Nombre"
                placeholder="Ingrese su nombre"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="col-span-1" style={{ width: '350px' }}>
              <Input
                type="text"
                id="lastName"
                title="Apellido"
                placeholder="Ingrese su apellido"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="col-span-1" style={{ width: '350px' }}>
              <Input
                type="text"
                id="idDocument"
                title="Documento de identidad"
                placeholder="Ingrese su documento de identidad"
                value={idDocument}
                onChange={handleIdDocumentChange}
              />
            </div>
            <div className="col-span-1" style={{ width: '350px' }}>
              <DateInput
                id="birthdate"
                title="Fecha de nacimiento"
                selected={birthdate}
                onChange={handleBirthdateChange}
              />
            </div>
            <div className="col-span-1" style={{ width: '350px' }}>
              <Input
                type="password"
                id="password"
                title="Contraseña"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="col-span-1" style={{ width: '350px' }}>
              <Input
                type="password"
                id="confirmPassword"
                title="Confirmar contraseña"
                placeholder="Confirme su contraseña"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <div className="col-span-1" style={{ width: '350px' }}>
              <Input
                type="email"
                id="email"
                title="Correo electrónico"
                placeholder="Ingrese su correo electrónico"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <Input
                type="text"
                id="phone"
                title="Teléfono"
                placeholder="Ingrese su teléfono"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
          </div>
          <div className="flex items-center flex-1 justify-end space-x-4">
            <LinkRouter to="/">
                <Boton buttonText="Volver" buttonColor="secondary-color" buttonHoverColor="teal-700" colorText="primary-color" />
            </LinkRouter>
            <LinkRouter to="/dashboard">
                <Boton buttonText="Guardar" buttonColor="primary-color" buttonHoverColor="teal-700" colorText="white" />
            </LinkRouter>
          </div>
        </form>
      </Panel>
    </div>
  );
};

export default SignupForm;

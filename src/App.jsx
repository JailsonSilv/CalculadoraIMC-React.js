import { useState } from 'react';
import  './app.css';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');



  function calcularIMC(){
    const height = altura / 100;
    const imc = peso / (height * height);

    if(imc < 18.5){
      setMensagem(" Você está abaixo do peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 18.5 && imc < 24.9){
      setMensagem("Pesso normal! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 25 && imc < 29.9) {
      setMensagem("Você está acima do peso(sobrepeso)! Seu IMC: " + imc.toFixed(2)) 
    }else if(imc >= 30 && imc < 34.9) {
      setMensagem("Você está na fase de Obesidade I ): Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 35 && imc < 39.9) {
      setMensagem("Você está na fase de Obesidade II ): Seu IMC: " + imc.toFixed(2))
    }else {
      setMensagem("Você está na fase de Obesidade III ): Seu IMC: " + imc.toFixed(2))
    }
  }


  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular o seu imc</span>

      <div className="area-input">
        <input 
          type="text" 
          placeholder="Peso em (kg) Ex: 85"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Altura em (cm) Ex: 170"
          value={altura}
          onChange={(e) => setAltura((e).target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  )
}
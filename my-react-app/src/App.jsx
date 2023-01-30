import { useState } from 'react';
import './App.css';
import Balanca from '../src/assets/balança.png'

function App() {
   
  const [peso, setPeso] = useState("");
  const [altura,setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [efeitos, setEfeitos] = useState("");
  const [imcMessage, setImcMessage] = useState("");
  

  function calcularImc ()  {
    
    const  alt  =  altura /  100 ;
    const  imc  =  peso  / (alt*alt);

  

 if (imc < 16.9){
 setMensagem(`Você está muito abaixo do peso !`);
 setEfeitos(`Efeitos colaterais: Queda de cabelo, infertilidade, ausência menstrual.`);
 setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
 
}else if(imc >= 17 && imc < 18.4){
setMensagem(`Você está Abaixo do peso !`);
setEfeitos(`Efeitos colaterais:Fadiga, stress, ansiedade.`);
setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
 
}else if (imc >= 18.5 && imc < 24.9){
setMensagem(`Você está com peso normal !`);
setEfeitos(`Efeitos colaterais: Menor risco de doenças cardíacas e vasculares.`);
setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

}else if(imc >= 25 && imc < 29.9){
setMensagem(`Você está acima do peso !`);
setEfeitos(`Efeitos colaterais: Menor risco de doenças cardíacas e vasculares.`);
setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
 
}else if(imc >= 30 && imc < 34.9){
setMensagem(`Você está com Obesidade Grau I !`);
setEfeitos(`Efeitos colaterais: Apneia do sono, falta de ar.`);
setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

}else if(imc >= 35 && imc < 40){
setMensagem(`Você está com Obesidade Grau II !`);
setEfeitos(`Efeitos colaterais: Diabetes, angina, infarto, aterosclerose`);
setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
}else if(imc >= 40){
setMensagem(`Você está com Obesidade Grau III !`);
setEfeitos(`Efeitos colaterais: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC.`);
setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
}
 setPeso("");
 setAltura("");
}


  return (
    <div className='container'>
       <h2>Calcular IMC</h2>
       <br></br><br></br>
       <h4>Digite suas informações:</h4>
       <br></br>
       <input type="text"
        value={peso}  
        onChange={(e) => setPeso(e.target.value)}   
        placeholder='Digite seu peso...'/>
       <br></br><br></br>
       <input type="text" 
       value={altura}   
       onChange={(e) => setAltura(e.target.value)} 
       placeholder='Digite sua altura...'/>
       
       <br></br><br></br>
       <button onClick={calcularImc}><b>Calcular</b></button>
       <br></br><br></br>
       <h5>
            {mensagem}
            {efeitos}
            {imcMessage}

       </h5>
        <img src={Balanca} alt="balança"/>
    </div>
  )
}

export default App

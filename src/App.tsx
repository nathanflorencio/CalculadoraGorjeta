import React, { useState } from 'react';
import { Head, Label, Input, StrongLabel } from './styles';

const App: React.FC = () => {

const [ valor, setValor ] = useState( 0 );
const [ porcentagem, setPorcentagem ] = useState ( 10 );

  return(
    <>
    <Head>Calculadora de Gorjeta</Head>

    <Label>Quanto deu a conta?</Label>
    <Input type="number" value={valor} onChange={(e)=>setValor(parseFloat(e.target.value))} />

    <Label>Qual a porcentagem de gorjeta?</Label>
    <Input type="number" value={porcentagem} onChange={(e)=>setPorcentagem(parseFloat(e.target.value))} />

    <hr/>

    {valor > 0 &&
      <>
      <Label>Sub-total: R$ {valor}</Label>
      <Label>Gorjeta ({porcentagem}%): R$ {(porcentagem/100) * valor}</Label>
      <StrongLabel>Total: R$ {valor + ((porcentagem/100) * valor)}</StrongLabel>
      </>
    }
    
    </>
  );
};

export default App;
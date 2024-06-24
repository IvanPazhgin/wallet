import React from 'react';
import styled from 'styled-components';
import useCurrencyStore from "../store/Currency";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex: 1;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const CurrencyConverter = () => {
  const { usd, eur, setUSD, setEUR } = useCurrencyStore();

  return (
    <Container>
      <InputContainer>
        <Label htmlFor="usd">USD</Label>
        <Input
          type="text"
          id="usd"
          value={usd}
          onChange={(e) => setUSD(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="eur">EUR</Label>
        <Input
          type="text"
          id="eur"
          value={eur}
          onChange={(e) => setEUR(e.target.value)}
        />
      </InputContainer>
    </Container>
  );
};

export default CurrencyConverter;

import create from 'zustand';

const useCurrencyStore = create(set => ({
  usd: '',
  eur: '',
  setUSD: (value) => set(state => {
    const validValue = parseFloat(value);
    return {
      usd: value,
      eur: isNaN(validValue) ? '' : (validValue / 1.07).toFixed(2),
    }
  }),
  setEUR: (value) => set(state => {
    const validValue = parseFloat(value);
    return {
      eur: value,
      usd: isNaN(validValue) ? '' : (validValue * 1.07).toFixed(2),
    }
  })
}));

export default useCurrencyStore;

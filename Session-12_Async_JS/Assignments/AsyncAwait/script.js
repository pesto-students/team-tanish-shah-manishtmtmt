async function getExchangeRate(currencyCode) {
  const response = await fetch(`https://api.exchangerate.host/latest`);
  const data = await response.json();
  const rates = data.rates;
  return rates[currencyCode] ? rates[currencyCode].toFixed(4) : null;
}

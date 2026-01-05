import { create } from 'zustand'
import axios from 'axios'
import { CryptoCurrenciesResponseSchema } from './schema/crypto-schema'

async function getCryptos() {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?tsym=USD&limit=20'
  const {data: { Data }} = await axios(url)
  const result = CryptoCurrenciesResponseSchema.safeParse(Data)
  console.log(result);
  
}

export const useCryptoStore = create(() => ({
  fetchCryptos: () => {
    getCryptos()
  }
}))
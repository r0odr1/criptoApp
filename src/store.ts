import { create } from 'zustand'
import axios from 'axios'

async function getCryptos() {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?tsym=USD&limit=20'
  const {data: {Data}} = await axios(url)
  console.log(Data);
  
}

export const useCryptoStore = create(() => ({
  fetchCryptos: () => {
    getCryptos()

  }
}))
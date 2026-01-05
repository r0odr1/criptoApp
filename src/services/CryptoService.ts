import axios from "axios"
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema"
import type { Pair } from "../types"

export async function getCryptos() {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?tsym=USD&limit=20'
  const {data: { Data }} = await axios(url)
  const result = CryptoCurrenciesResponseSchema.safeParse(Data)
  if(result.success) {
    return result.data
  }
}

export async function fetchCurrencyCryptoPrice(pair: Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
  const { data: { DISPLAY } } = await axios(url)

  const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])

  if(result.success) {
    return result.data
  }
}
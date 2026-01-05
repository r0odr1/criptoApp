import { useCryptoStore } from "../store"
import { currencies } from "../data"
import { useState, type ChangeEvent, type FormEvent } from "react"
import type { Pair } from "../types"
import { object } from "zod"
import ErrorMensage from "./ErrorMensage"

export default function CriptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies)
  const [pair, setPair] = useState<Pair>({
    currency: '',
    criptocurrency: ''
  })

  const [error, setError] = useState('')

  const handleChange = ( e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = ( e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(Object.values(pair).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }

    setError('')

    //Consultar la API
  }


  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      {error && <ErrorMensage>{error}</ErrorMensage>}

      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">-- Seleccione --</option>
          {currencies.map( currency => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="ciptocurrency">Criptomoneda:</label>
        <select
          name="ciptocurrency"
          id="ciptocurrency"
          onChange={handleChange}
          value={pair.criptocurrency}
        >
          <option value="">-- Seleccione --</option>
          {cryptocurrencies.map( crypto => (
            <option
              key={crypto.CoinInfo.FullName}
              value={crypto.CoinInfo.Name}
            >{crypto.CoinInfo.FullName}</option>
          ))}
        </select>
      </div>

      <input type="submit" value='Cotizar' />
    </form>
  )
}

import { useMemo } from "react"
import { useCryptoStore } from "../store"

export default function CryptoPriceDisplay() {

  const result = useCryptoStore((state) => state.result)
  const hasResult = useMemo(() => {
    return result && Object.keys(result).length > 0 && result.PRICE !== undefined;
  }, [result])

  return (
    <div className="result-wrapper">
      {hasResult && (
        <>
          <h2>Cotizacion</h2>

          <div className="result">
            <img
              src={`https://cryptocompare.com/${result.IMAGEURL}`}
              alt="Imagen Cryptomoneda"
            />
            <div>
              <p>El precio es de: <span>{result.PRICE}</span></p>
              <p>Precio más alto del dia: <span>{result.HIGHDAY}</span></p>
              <p>Precio más bajo del dia: <span>{result.LOWDAY}</span></p>
              <p>Variacion últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
              <p>última actualización: <span>{result.LASTUPDATE}</span></p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

import { useMemo } from "react"
import { useCryptoStore } from "../store"

export default function CryptoPriceDisplay() {

  const result = useCryptoStore((state) => state.result)
  const hasResult = useMemo(() => {
    return result && Object.keys(result).length > 0 && result.PRICE !== undefined;
  }, [result])

  return (
    <div>
      {hasResult && (
        <>
          <h2>Cotizacion</h2>

          <div className="result">
            <div>
              <p> El precio es de: <span>{result.PRICE}</span></p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

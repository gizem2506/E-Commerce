import React from 'react'
import "../components/style/total.css"
function Total({totalprice}) {
    return (
        <div>
            <div className="checkout">
                <h1>ÖDENECEK TUTAR</h1>
                <div className="money">
                    <h4>{totalprice}</h4>
                    <p>TL</p>
                </div>
                <button>Alışverişi tamamla</button>
                <p className="description">
                    Alışverişi tamamladınız.Güzel günlerde kullanın. Siparişiniz hazırlandıktan sonra tarafınıza bilgi verilecektir.
                </p>
                <div className="cargo">
                    <div className="cargoamount">
                        <p>Kargo</p>
                        <p className="freeshipping">Bedava</p>
                        <p className="cargoamountTL">12 TL</p>
                    </div>
                    <div className="ordertotal">
                        <p>Ürünler</p>
                        <p className="orderamount">{totalprice}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Total


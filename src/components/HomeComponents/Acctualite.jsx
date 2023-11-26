import React from 'react'
import '../HomeStyle/home.css'
import p from '../../assets/p1.png'

const Acctualite = () => {
  return (
    <div className=''>
    <section class="hero " id="Compétences">
    <h2 className="Produit text-green-900  mt-7">Nouvetés </h2>
    <div class="row container mt-[-30px]">
                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>
                <div class="lang"><img src={p} class="imglang"/>Salami Jambon</div>
                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>
                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>

                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>
                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>
                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>
                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>
          
    </div>
</section>
   
    <section class="hero N" id="Compétences">
    <div class="row container N">
                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>
                <div class="lang"><img src={p} class="imglang"/>Salami Jambon</div>
                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>
                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>
                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>
                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>
                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>
                <div class="lang"><img src={p}  class="imglang"/>Salami Jambon</div>
        
    </div>
</section>
</div>
  )
}

export default Acctualite
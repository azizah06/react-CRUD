import React from 'react'

class Protokol extends React.Component{
    render (){
        return(
            <div tipe="blue">
                <center>
                <h2>
                PROTOKOL KESEHATAN COVID-19
                </h2></center>
                <center>
                <img className="logo" src={require('../Components2/covid2.jpg')} width="300px" height="300px" alt="logo"/> </center>
                <p>Nah, terkait cara baru penularan Covid-19 melalui udara, PDPI mengimbau agar masyarakat tidak panik dan mengikuti protokol kesehatan tambahan seperti yang diimbau berikut ini :</p>
<p>1. Tetap waspada dan tidak panik.</p>
<p>2. Hindari keramaian baik itu tempat tertutup maupun tempat terbuka.</p>
<p>3. Gunakan masker di mana saja dan kapan saja bahkan dalam ruangan.</p>
<p>4. Ciptakan ruangan dengan ventilasi yang baik seperti, membuka jendela sesering mungkin.</p>
<p>5. Tetap jaga kebersihan tangan serta hindari menyentuh bagian wajah sebelum mencuci tangan.</p>
<p>6. Selalu terapkan jaga jarak pada aktivitas sehari-hari.</p>

<p>Selain itu Juru Bicara Pemerintah untuk Penanganan COVID-19 Achmad Yurianto 
    juga menyoroti mengenai penggunaan Face Shield atau penutup wajah berbahan plastik 
    atau mika untuk mencegah penularan Covid-19 yang kian marak belakangan ini. 
    Dia mengimbau agar penggunaan face shield harus dibarengi dengan masker.</p>
                
    </div>

        )
    }
}
export default Protokol;

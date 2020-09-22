import React from 'react'


class Beranda extends React.Component{
    render (){
        return(
            <div>
                <center>
                <img className="logo" src={require('../Components2/covid1.jpg')} width="400px" height="200px" alt="logo"/> 
                </center>
                <h2>
                COVID-19
                </h2>
                <p>Apa itu coronavirus?</p>
<p>
Coronavirus adalah suatu kelompok virus yang 
dapat menyebabkan penyakit pada hewan atau 
manusia. Beberapa jenis coronavirus diketahui 
menyebabkan infeksi saluran nafas pada manusia
mulai dari batuk pilek hingga yang lebih 
serius seperti Middle East Respiratory 
Syndrome (MERS) dan Severe Acute Respiratory 
Syndrome (SARS). Coronavirus jenis baru yang 
ditemukan menyebabkan penyakit COVID-19.</p>
<p>
Apa itu COVID-19?</p>
<p>
COVID-19 adalah penyakit menular yang 
disebabkan oleh jenis coronavirus yang 
baru ditemukan.  Virus baru dan penyakit 
yang disebabkannya ini tidak dikenal sebelum 
mulainya wabah di Wuhan, Tiongkok, 
bulan Desember 2019. COVID-19 ini sekarang 
menjadi sebuah pandemi yang 
terjadi di banyak negara di seluruh dunia.
</p>
            </div>

        )
    }
}
export default Beranda;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//menggabungkan 2 method dengan menggabungkan menjadi satu 
const date = new Date();
const currentTime = date.getHours();


const customStyle = {
  //membuat class penampung nilai 
  color: ""
}

//membuat variable penampung nilai 
let ucapan;


//jika current date lebih kecil dari 12 maka 
if (currentTime < 12) {
  //isi ucapan dengan  selamat pagi
  // dan mengubah warna huruf di setiap selamat
  ucapan = "Selamat Pagi";
  customStyle.color = "red";

} else if (currentTime < 18) {
  ucapan = "Selamat Siang";
  customStyle.color = "yellow";
}
else {
  ucapan = "Selamat Malam";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div className="App-header">
    <h1 style={customStyle}> {ucapan}</h1>
  </div>,
  document.getElementById('ucapan')
)


//Creating jsx file 
const fName = "Handika";
const lName = "Juliansyah";
const luckyNumber = 30;

ReactDOM.render(
  <div>
    <h1>
      hallo ini react Pertama saya by {fName + ' ' + lName}
    </h1>
    <p> Dan angka Keberuntungan saya adalah {luckyNumber - 5}</p>
  </div>,
  document.getElementById('root')
);




//inlines style css in jsx file with object
const styleFooter = {
  fontSize: "20px",
  color: "Blue",
  border: "1px solid",

}
const tahun = new Date()
const copyRight = tahun.getFullYear()

ReactDOM.render(
  <div>
    <p>
      Created By {fName + ' - ' + lName}
    </p>
    <p style={styleFooter}>
      Copyright (c) {copyRight}
    </p>
  </div>,
  document.getElementById('footer')
);

reportWebVitals();

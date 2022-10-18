// const { response } = require("express");

const cityName=document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');



const datahide =document.querySelector('.middle_layer')
const getInfo = async(event) =>{

    event.preventDefault(); 
    let cityVal=cityName.value;

    


    if(cityVal==""){
        city_name.innerHTML=`<h3>Type Your City Name</h3>`;
        datahide.classList.add(`data_hide`);
    }
    else{
        try{

            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=de2e2fe013cadb751517806c9ef145d2` ;
            // let url1=`https://api.openweathermap.org/data/2.5/forecast?q=${cityVal}&units=metric&appid=de2e2fe013cadb751517806c9ef145d2`;
            const response = await fetch(url);
            
            
            const data =await response.json();
           
            // console.log(data);
            const arrData=[data];       // to convert data into array
            

            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText=arrData[0].main.temp;


            // temp_status.innerText=arrData[0].weather[0].main;

            // console.log(arrData[0].main.temp);
            datahide.classList.remove(`data_hide`);


            const tempMood = arrData[0].weather[0].main;

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                // "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }

        }
        catch{

            city_name.innerHTML=`<h3>Please Enter Your City Name Correctly</h3>`;

            datahide.classList.add(`data_hide`);


        }

    }
   
}

submitBtn.addEventListener('click',getInfo);
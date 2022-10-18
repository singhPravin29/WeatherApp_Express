// const { response } = require("express");

const cityName1=document.getElementById('cityName1');
const submitBtn1 = document.getElementById('submitBtn1');
const city_name1=document.getElementById('city_name1');
const temp_real_val1=document.getElementById('temp_real_val1');
const temp_status1=document.getElementById('temp_status1');



const datahide =document.querySelector('.middle_layer')
const getInfo = async(event) =>{

    console.log("sssssssssssssssssssss")
    event.preventDefault(); 
    let cityVal1=cityName1.value;

    


    if(cityVal1==""){
        city_name1.innerHTML=`<h3>Type Your City Name</h3>`;
        datahide.classList.add(`data_hide`);
    }
    else{
        try{

            // let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal1}&units=metric&appid=de2e2fe013cadb751517806c9ef145d2` ;
            let url1=`https://api.openweathermap.org/data/2.5/forecast?q=${cityVal1}&units=metric&appid=de2e2fe013cadb751517806c9ef145d2`;
            const response = await fetch(url1);
            
            
            const data1 =await response.json();
           
            // console.log(data);
            const arrData1=[data1];       // to convert data into array
            

            city_name1.innerText=`${arrData1[0].city.name},${arrData1[0].city.country}`;
            temp_real_val1.innerText=arrData1[0].list[0].main.temp;


            // temp_status.innerText=arrData[0].weather[0].main;

            // console.log(arrData[0].main.temp);
            datahide.classList.remove(`data_hide`);


            const tempMood = arrData1[0].weather[0].main;

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status1.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status1.innerHTML =
                // "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status1.innerHTML =
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status1.innerHTML =
                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }

        }
        catch{

            city_name1.innerHTML=`<h3>Please Enter Your City Name Correctly</h3>`;

            datahide.classList.add(`data_hide`);


        }

    }
   
}

submitBtn1.addEventListener('click',getInfo);
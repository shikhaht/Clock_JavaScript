let a;
let date;
let year;
let month;
let day;
setInterval(() => {
    a= new Date();
    date = a.getUTCDate();
    year = a.getUTCFullYear();
    month = a.getUTCMonth() + 1;
    time =  a.getHours() + ':' + a.getMinutes() +':'+ a.getSeconds();
    document.getElementById('time').innerHTML= time + "<br>on " + date + '/' + month + '/' + year;
   
}, 1000);
fetch("data.json")
.then(res => res.json())
.then(data => {

document.getElementById("today").innerText = data.today;
document.getElementById("week").innerText = data.week;
document.getElementById("month").innerText = data.month;
document.getElementById("year").innerText = data.year;
document.getElementById("total").innerText = data.total;

document.getElementById("balance").innerText = data.balance;
document.getElementById("equity").innerText = data.equity;
document.getElementById("profit").innerText = data.profit;
document.getElementById("drawdown").innerText = data.drawdown;

new Chart(document.getElementById("growthChart"),{

type:"line",

data:{
labels:["Sep","Oct","Nov","Déc","Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août"],

datasets:[{
data:data.chart,
borderColor:"#d4af37",
borderWidth:3,
tension:.4,
fill:false
}]
},

options:{
responsive:true,
maintainAspectRatio:false,

plugins:{
legend:{
display:false
}
},

scales:{
x:{
ticks:{
color:"#888"
}
},
y:{
ticks:{
color:"#888"
}
}
}
}

});

});

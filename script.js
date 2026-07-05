fetch("data.json")
.then(response => response.json())
.then(data => {

document.getElementById("week").innerText = data.week;
document.getElementById("month").innerText = data.month;
document.getElementById("year").innerText = data.year;

})
.catch(error => console.log(error));

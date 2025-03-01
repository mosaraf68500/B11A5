
const currentDate = new Date();


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const formattedDate = currentDate.toLocaleDateString('en-US', options);
console.log(formattedDate)


document.getElementById('formateDate').innerText = formattedDate;

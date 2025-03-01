// countupdown function

function CountUpDown() {
  const totalTaskElement = document.getElementById("total-task");
  const remainTaskElement = document.getElementById("remain-task");

  // if (!totalTaskElement || !remainTaskElement) {
  //     console.error("Element not found!");
  //     Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "Element not found!",
  //       });
  //     return;
  // }

  let totalTask = parseInt(totalTaskElement.innerText) || 0;
  let remainTask = parseInt(remainTaskElement.innerText) || 0;

  if (remainTask > 0) {
    totalTask += 1;
    remainTask -= 1;

    totalTaskElement.innerText = totalTask;
    remainTaskElement.innerText = remainTask;
  } 
  
  else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No remaining tasks!",
    });
    return;
  }
}




//    Fix Mobile Button Issue

document
  .getElementById("fix-mobile-button-issue")
  .addEventListener("click", function () {
    CountUpDown();

    const historySection = document.getElementById("history-section");
    const history = document.createElement("div");
    const title = document.getElementById("fix-mobile-btn-title").innerText;
    let Time = new Date();
    const currentTime = Time.toLocaleTimeString();

    history.className = "p-2 mt-2 bg-[#F4F7FF] rounded-lg";
    history.innerHTML = `
    <p class="text-sm text-gray-500">You have completed the</p>
    <h2 class="text-sm font-semibold text-gray-600">  ${title}  <span class="text-sm"> at ${currentTime}</span></h2>
   
                           
    `;

    historySection.appendChild(history);
    Swal.fire({
      title: "Broad updated successfully!",
      icon: "success",
      draggable: true,
    });
    this.disabled = true;
  });


//   Add Dark Mode

document
  .getElementById("add-dark-mode")
  .addEventListener("click", function () {
    CountUpDown();

    const historySection = document.getElementById("history-section");
    const history = document.createElement("div");
    const title = document.getElementById("add-dark-mode-title").innerText;
    let Time = new Date();
    const currentTime = Time.toLocaleTimeString();

    history.className = "p-2 mt-2 bg-[#F4F7FF] rounded-lg";
    history.innerHTML = `
    <p class="text-sm text-gray-500">You have completed the</p>
    <h2 class="text-sm font-semibold text-gray-600">  ${title}  <span class="text-sm"> at ${currentTime}</span></h2>
   
                           
    `;

    historySection.appendChild(history);
    Swal.fire({
      title: "Broad updated successfully!",
      icon: "success",
      draggable: true,
    });
    this.disabled = true;
  });


//   Optimize  Home page 

document
  .getElementById("optimiz-home-page")
  .addEventListener("click", function () {
    CountUpDown();

    const historySection = document.getElementById("history-section");
    const history = document.createElement("div");
    const title = document.getElementById("optimiz-home-page-title").innerText;
    let Time = new Date();
    const currentTime = Time.toLocaleTimeString();

    history.className = "p-2 mt-2 bg-[#F4F7FF] rounded-lg";
    history.innerHTML = `
    <p class="text-sm text-gray-500">You have completed the</p>
    <h2 class="text-sm font-semibold text-gray-600">  ${title}  <span class="text-sm"> at ${currentTime}</span></h2>
   
                           
    `;

    historySection.appendChild(history);
    Swal.fire({
      title: "Broad updated successfully!",
      icon: "success",
      draggable: true,
    });
    this.disabled = true;
  });



//   Add new emoji 🤲

document
  .getElementById("add-new-emoji")
  .addEventListener("click", function () {
    CountUpDown();

    const historySection = document.getElementById("history-section");
    const history = document.createElement("div");
    const title = document.getElementById("add-new-emoji-title").innerText;
    let Time = new Date();
    const currentTime = Time.toLocaleTimeString();

    history.className = "p-2 mt-2 bg-[#F4F7FF] rounded-lg";
    history.innerHTML = `
    <p class="text-sm text-gray-500">You have completed the</p>
    <h2 class="text-sm font-semibold text-gray-600">  ${title}  <span class="text-sm"> at ${currentTime}</span></h2>
   
                           
    `;

    historySection.appendChild(history);
    Swal.fire({
      title: "Broad updated successfully!",
      icon: "success",
      draggable: true,
    });
    this.disabled = true;
  });


//   Integrate OpenAI API 

document
  .getElementById("intergrate-openai")
  .addEventListener("click", function () {
    CountUpDown();

    const historySection = document.getElementById("history-section");
    const history = document.createElement("div");
    const title = document.getElementById("integrate-openai-title").innerText;
    let Time = new Date();
    const currentTime = Time.toLocaleTimeString();

    history.className = "p-2 mt-2 bg-[#F4F7FF] rounded-lg";
    history.innerHTML = `
    <p class="text-sm text-gray-500">You have completed the</p>
    <h2 class="text-sm font-semibold text-gray-600">  ${title}  <span class="text-sm"> at ${currentTime}</span></h2>
   
                           
    `;

    historySection.appendChild(history);
    Swal.fire({
      title: "Broad updated successfully!",
      icon: "success",
      draggable: true,
    });
    this.disabled = true;
  });

//   Improve Job searching 

document
  .getElementById("improve-job-searching")
  .addEventListener("click", function () {
    CountUpDown();

    const historySection = document.getElementById("history-section");
    const history = document.createElement("div");
    const title = document.getElementById("improve-job-searching-title").innerText;
    let Time = new Date();
    const currentTime = Time.toLocaleTimeString();

    history.className = "p-2 mt-2 bg-[#F4F7FF] rounded-lg";
    history.innerHTML = `
    <p class="text-sm text-gray-500">You have completed the</p>
    <h2 class="text-sm font-semibold text-gray-600">  ${title}  <span class="text-sm"> at ${currentTime}</span></h2>
   
                           
    `;

    historySection.appendChild(history);
    Swal.fire({
      title: "Broad updated successfully!",
      icon: "success",
      draggable: true,
    });
    this.disabled = true;
  });
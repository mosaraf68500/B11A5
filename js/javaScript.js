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
  } else {
    console.warn("No remaining tasks!");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No remaining tasks!",
    });
  }
}

document
  .getElementById("fix-mobile-button-issue")
  .addEventListener("click", function () {
    CountUpDown();
    Swal.fire({
      title: "Broad updated successfully!",
      icon: "success",
      draggable: true,
    });
    this.disabled = true;

    const historySection = document.getElementById("history-section");
    const history = document.createElement("div");
    history.className =
      "p-4 bg-white shadow-md rounded-lg border border-gray-300";
    history.innerHTML = `<h2 class="text-xl font-bold text-gray-700">New Section</h2>
                              <p class="text-gray-600">This is a dynamically added section.</p>`;

    historySection.appendChild(history);
  });

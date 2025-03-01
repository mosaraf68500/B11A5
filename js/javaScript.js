function CountUpDown() {
    const totalTaskElement = document.getElementById('total-task');
    const remainTaskElement = document.getElementById('remain-task');

    if (!totalTaskElement || !remainTaskElement) {
        console.error("Element not found!");
        return;
    }

    let totalTask = parseInt(totalTaskElement.innerText) || 0;
    let remainTask = parseInt(remainTaskElement.innerText) || 0;

    if (remainTask > 0) {
        totalTask += 1;
        remainTask -= 1;

        totalTaskElement.innerText = totalTask;
        remainTaskElement.innerText = remainTask;
    } else {
        console.warn("No remaining tasks!");
    }
}

document.getElementById('fix-mobile-button-issue').addEventListener('click', function() {
    CountUpDown();
});

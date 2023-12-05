document.addEventListener('DOMContentLoaded', function () {
    const subsections = document.querySelectorAll('.nutritionalSubsection');

    subsections.forEach(function (subsection) {
        subsection.addEventListener('click', function () {
            // Toggle the active class on the clicked subsection
            this.classList.toggle('active');
        });
    });
});

function showConfirmation() {
    // Reset pop up
    resetModal();

    // Show pop up
    var modal = document.getElementById("confirmationModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("confirmationModal");
    modal.style.display = "none";
}

function notifyWaiter() {
    var modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = `
    <div class='popUpMainContainer'>
        <p class='modalText'>Waiter is notified and on their way!</p>
        <img src='img/waiter-icon.png' alt='Waiter Icon' class='waiterIcon'></img>
        <button class='modalButton' onclick='closeModal()'>Okay</button>
    </div>
        `;
}

function resetModal() {
    var modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = `
    <div class='popUpMainContainer'>
        <p class='modalText'>Ready to call the waiter?</p>
        <img src='img/waiter-icon.png' alt='Waiter Icon' class='waiterIcon'>
        <div class='decisonOptions'>
            <button class='modalButton' onclick='notifyWaiter()'>Yes</button>
            <button class='modalButton' onclick='closeModal()'>Cancel</button>
        </div>
    </div>
    `;
}

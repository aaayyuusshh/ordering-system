function showBillConfirmation() {
    // Reset bill confirmation modal
    resetBillModal();

    // Show bill confirmation modal
    var billModal = document.getElementById("billConfirmationModal");
    billModal.style.display = "block";
}

function closeBillModal() {
    var billModal = document.getElementById("billConfirmationModal");
    billModal.style.display = "none";
}

function confirmBill() {
    var billModalContent = document.getElementById("billModalContent");
    billModalContent.innerHTML = `
    <div class='popUpMainContainer'>
        <p class='modalText2'>The waiter has been notified to assist you with payment and will be with you shortly!</p>
        <img src='img/waiter-icon.png' alt='Bill Icon' class='billIcon'>
         <button class='modalButton' onclick='closeBillModal()'>Okay</button>
    </div>
    `;
}

function resetBillModal() {
    var billModalContent = document.getElementById("billModalContent");
    billModalContent.innerHTML = `
    <div class='popUpMainContainer'>
        <p class='modalText2'>Ready to request the bill?</p>
        <img src='img/waiter-icon.png' alt='Bill Icon' class='billIcon'>
        <div class='decisionOptions'>
            <button class='modalButton' onclick='confirmBill()'>Yes</button>
            <button class='modalButton' onclick='closeBillModal()'>Cancel</button>
        </div>
    </div>
    `;
}

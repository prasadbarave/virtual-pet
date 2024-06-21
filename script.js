let hunger = 50;
let happiness = 50;
let energy = 50;

function updateStatus() {
    document.getElementById('hungerStatus').textContent = hunger;
    document.getElementById('happinessStatus').textContent = happiness;
    document.getElementById('energyStatus').textContent = energy;
}

function feedPet() {
    hunger = Math.max(hunger - 10, 0);
    happiness = Math.min(happiness + 5, 100);
    updateStatus();
}

function playWithPet() {
    if (energy >= 10) {
        happiness = Math.min(happiness + 10, 100);
        energy = Math.max(energy - 10, 0);
    } else {
        alert("Your pet is too tired to play!");
    }
    updateStatus();
}

function sleepPet() {
    energy = Math.min(energy + 20, 100);
    hunger = Math.min(hunger + 5, 100);
    updateStatus();
}

function decreaseStats() {
    hunger = Math.min(hunger + 1, 100);
    happiness = Math.max(happiness - 1, 0);
    energy = Math.max(energy - 1, 0);
    updateStatus();

    if (hunger >= 100) {
        alert("Your pet is too hungry! Feed it now.");
    }
}

setInterval(decreaseStats, 5000);

window.onload = updateStatus;

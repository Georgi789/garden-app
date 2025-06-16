// Hardcoded values for the season and plant type
let season = "summer"; // TODO: Replace with prompt() to allow user interaction.
let plantType = "flower"; // TODO: Replace with prompt() to allow user interaction.

// Variable to hold gardening advice
let advice = "";

// Determine advice based on the season
if (season === "summer") {
    advice += "Water your plants regularly and provide some shade.\n";//Here is a comment explaining the advice for summer
} else if (season === "winter") {
    advice += "Protect your plants from frost with covers.\n";//Here is a comment explaining the advice for winter
} else {
    advice += "No advice for this season.\n";
}

// Determine advice based on the plant type
if (plantType === "flower") {
    advice += "Use fertiliser to encourage blooms.";
} else if (plantType === "vegetable") {
    advice += "Keep an eye out for pests!";
} else {
    advice += "No advice for this type of plant.";
}

// Log the generated advice to the console
console.log(advice);


//Watering reminder
function wateringReminder(plantName, frequencyInDays) {
    console.log(`Don't forget to water your ${plantName} every ${frequencyInDays} day(s)!`);
}

wateringReminder("rose", 2);

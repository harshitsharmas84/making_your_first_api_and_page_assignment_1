// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/

// Parse JSON requests
app.use(express.json());

// Create the /assistant/greet endpoint
app.get('/assistant/greet', (req, res) => {
    // Get the name from query parameters (default to "Guest" if not provided)
    const name = req.query.name || "Guest";
    
    // Get current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    const currentDay = daysOfWeek[today];
    
    // Create the welcome message
    const welcomeMessage = `Hello, ${name}! Welcome to our assistant app!`;
    
    // Create day-specific message
    let dayMessage;
    if (currentDay === "Monday") {
        dayMessage = "Happy Monday! Start your week with energy!";
    } else if (currentDay === "Friday") {
        dayMessage = "It's Friday! The weekend is near!";
    } else {
        dayMessage = "Have a wonderful day!";
    }
    
    // Send the response
    res.json({
        welcomeMessage,
        dayMessage
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});

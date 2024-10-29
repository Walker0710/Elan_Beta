// const { google } = require('googleapis');
// const mongoose = require('mongoose');
// require('dotenv').config();

// // Import the Participant model
// const Participant = require('./models/Participant');

// // Environment variables
// const MONGO_URI = process.env.MONGO_URI;
// const SPREADSHEET_ID = process.env.SPREADSHEET_ID; 
// const RANGE = process.env.SHEET_RANGE;

// // Parse Google Sheets credentials from the environment variable
// const GOOGLE_SHEET_CRED = JSON.parse(process.env.GOOGLE_SHEET_CRED);

// // Connect to MongoDB
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((error) => console.error('Error connecting to MongoDB:', error));

// // Google Sheets API setup
// const auth = new google.auth.GoogleAuth({
//     credentials: GOOGLE_SHEET_CRED,
//     scopes: ['https://www.googleapis.com/auth/spreadsheets'],
// });

// const sheets = google.sheets({ version: 'v4', auth });

// // Function to format participant data for Google Sheets
// const formatParticipantData = (participant) => {
//     // Flatten leader information and teammates' details into a single row for Google Sheets
//     const leaderData = [
//         participant.leaderName,
//         participant.leaderEmail,
//         participant.leaderPhone,
//         participant.registeredAt,
//     ];

//     // Teammates data in the same sequence as in the schema
//     const teammatesData = [
//         participant.teammate1Name, participant.teammate1Email,
//         participant.teammate2Name, participant.teammate2Email,
//         participant.teammate3Name, participant.teammate3Email,
//         participant.teammate4Name, participant.teammate4Email,
//         participant.teammate5Name, participant.teammate5Email,
//         participant.teammate6Name, participant.teammate6Email,
//     ];

//     return [...leaderData, ...teammatesData];
// };

// // Function to append data to Google Sheets
// async function appendToSheet(data) {
//     try {
//         await sheets.spreadsheets.values.append({
//             spreadsheetId: SPREADSHEET_ID,
//             range: RANGE,
//             valueInputOption: 'USER_ENTERED',
//             resource: {
//                 values: data,
//             },
//         });
//         console.log('Data successfully appended to Google Sheets');
//     } catch (error) {
//         console.error('Error appending data to Google Sheets:', error);
//     }
// }

// // Function to fetch all participants and update Google Sheets
// const updateSheetWithAllParticipants = async () => {
//     try {
//         // Fetch all participants from the MongoDB collection
//         const participants = await Participant.find();

//         if (participants.length > 0) {
//             // Format participant data for Google Sheets
//             const dataToAppend = participants.map(formatParticipantData);

//             // Append participants data to Google Sheet
//             await appendToSheet(dataToAppend);
//         } else {
//             console.log('No participants found to append.');
//         }
//     } catch (error) {
//         console.error('Error fetching participants from MongoDB:', error);
//     }
// };

// // Run the update immediately
// updateSheetWithAllParticipants();



const { google } = require('googleapis');
const mongoose = require('mongoose');
require('dotenv').config();

// Import the Participant model
const Participant = require('./models/Participant');

// Environment variables
const MONGO_URI = process.env.MONGO_URI;
const SPREADSHEET_ID = process.env.SPREADSHEET_ID; 
const RANGE = process.env.SHEET_RANGE;

// Parse Google Sheets credentials from the environment variable
const GOOGLE_SHEET_CRED = JSON.parse(process.env.GOOGLE_SHEET_CRED);

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Google Sheets API setup
const auth = new google.auth.GoogleAuth({
    credentials: GOOGLE_SHEET_CRED,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Function to format participant data for Google Sheets
const formatParticipantData = (participant) => {
    // Flatten team name, leader information, and teammates' details into a single row for Google Sheets
    const teamData = [participant.teamName];
    const leaderData = [
        participant.leaderName,
        participant.leaderEmail,
        participant.leaderPhone,
        participant.registeredAt,
    ];

    // Teammates data in the same sequence as in the schema
    const teammatesData = [
        participant.teammate1Name, participant.teammate1Email,
        participant.teammate2Name, participant.teammate2Email,
        participant.teammate3Name, participant.teammate3Email,
        participant.teammate4Name, participant.teammate4Email,
        participant.teammate5Name, participant.teammate5Email,
        participant.teammate6Name, participant.teammate6Email,
    ];

    return [...teamData, ...leaderData, ...teammatesData];
};

// Function to append data to Google Sheets
async function appendToSheet(data) {
    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: RANGE,
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: data,
            },
        });
        console.log('Data successfully appended to Google Sheets');
    } catch (error) {
        console.error('Error appending data to Google Sheets:', error);
    }
}

// Function to fetch all participants and update Google Sheets
const updateSheetWithAllParticipants = async () => {
    try {
        // Fetch all participants from the MongoDB collection
        const participants = await Participant.find();

        if (participants.length > 0) {
            // Format participant data for Google Sheets
            const dataToAppend = participants.map(formatParticipantData);

            // Append participants data to Google Sheet
            await appendToSheet(dataToAppend);
        } else {
            console.log('No participants found to append.');
        }
    } catch (error) {
        console.error('Error fetching participants from MongoDB:', error);
    }
};

// Run the update immediately
updateSheetWithAllParticipants();

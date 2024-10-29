const { google } = require('googleapis');
const mongoose = require('mongoose');
const cron = require('node-cron');
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
    // Flatten leader information and teammates' details into a single row for Google Sheets
    const leaderData = [
        participant.leaderName,
        participant.leaderEmail,
        participant.leaderPhone,
        participant.registeredAt,
    ];

    // Teammates data, ensuring each teammate has a name and email cell
    const teammatesData = participant.teammates.map(teammate => [
        teammate.name || '',
        teammate.email || '',
    ]).flat();

    // Fill in empty cells for optional teammates to maintain consistent columns
    while (teammatesData.length < 12) {
        teammatesData.push('');
    }

    return [...leaderData, ...teammatesData];
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

// Function to fetch new participants and update Google Sheets
const updateSheetWithNewParticipants = async () => {
    try {
        // Fetch participants registered within the last hour
        const participants = await Participant.find({
            registeredAt: { $gte: new Date(Date.now() - 60 * 60 * 1000) },
        });

        if (participants.length > 0) {
            // Format participant data for Google Sheets
            const dataToAppend = participants.map(formatParticipantData);

            // Append participants data to Google Sheet
            await appendToSheet(dataToAppend);
        } else {
            console.log('No new participants to append.');
        }
    } catch (error) {
        console.error('Error fetching participants from MongoDB:', error);
    }
};

// Schedule the task to run every hour
cron.schedule('0 * * * *', () => {
    console.log('Running scheduled task to update Google Sheets with new participants...');
    updateSheetWithNewParticipants();
});

// Optionally, run the update immediately on startup
updateSheetWithNewParticipants();

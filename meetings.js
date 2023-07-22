#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Meetings Timer
// @raycast.mode compact

// Optional parameters:
// @raycast.icon ./icons/icon.svg
// @raycast.argument1 { "type": "text", "placeholder": "Description", "optional": true }

// Documentation:
// @raycast.description Start Meetings Timer
// @raycast.author Chris Pennington @cpenned on Twitter

import {startTimer} from './start-timer.js'

const PROJECT_NAME = 'Meetings Timer'
const PROJECT_ID = 186128993;

const description = process.argv[2];

startTimer(PROJECT_ID, PROJECT_NAME, description);
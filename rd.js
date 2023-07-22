#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title RD Timer
// @raycast.mode compact

// Optional parameters:
// @raycast.icon ./icons/icon.svg
// @raycast.argument1 { "type": "text", "placeholder": "Description", "optional": true }

// Documentation:
// @raycast.description Start RD Timer
// @raycast.author Chris Pennington @cpenned on Twitter

import {startTimer} from './start-timer.js'

const PROJECT_NAME = 'RD Timer'
const PROJECT_ID = 185970442;

const description = process.argv[2];

startTimer(PROJECT_ID, PROJECT_NAME, description);
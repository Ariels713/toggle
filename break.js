#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Break Timer
// @raycast.mode compact

// Optional parameters:
// @raycast.icon ./icons/icon.svg
// @raycast.argument1 { "type": "text", "placeholder": "Description", "optional": true }

// Documentation:
// @raycast.description Start Break Timer
// @raycast.author Chris Pennington @cpenned on Twitter

import {startTimer} from './start-timer.js'

const PROJECT_NAME = 'break'
const PROJECT_ID = 186054117;

const description = process.argv[2];

startTimer(PROJECT_ID, PROJECT_NAME, description);
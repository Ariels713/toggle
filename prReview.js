#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Pull Request Timer
// @raycast.mode compact

// Optional parameters:
// @raycast.icon ./icons/icon.svg
// @raycast.argument1 { "type": "text", "placeholder": "Description", "optional": true }

// Documentation:
// @raycast.description Start Pull Request Timer
// @raycast.author Chris Pennington @cpenned on Twitter

import {startTimer} from './start-timer.js'

const PROJECT_NAME = 'Pull Request Timer'
const PROJECT_ID = 186055538;

const description = process.argv[2];

startTimer(PROJECT_ID, PROJECT_NAME, description);
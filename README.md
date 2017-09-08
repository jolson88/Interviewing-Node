# Interviewing
This repository contains Node.js interview scenarios for interviewing others. It specifically targets scenarios for newer developers.

The questions do not have implementations because there are many different possible solutions based on what is being optimized for. It's great when working through these to think about the runtime performance of the code, how easy the code is to read and maintain, mutable state vs. immutable state, etc.

## Running the tests
There are two ways to run the tests, one-time and in watch mode.

To execute the series for an interview question a single time, you can run `npm test path-to-test-files` (e.g. `npm test advanced/tree-merge/test` to run the tests for the tree-merge question).

To run the tests with a watcher so that they will re-run anytime a change is made to source code, you can execute `npm run test:watch path-to-test-files` instead (e.g. so `npm run test:watch advanced/tree-merge/test`).

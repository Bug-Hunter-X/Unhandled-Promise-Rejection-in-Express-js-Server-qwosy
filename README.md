# Unhandled Promise Rejection in Express.js Server

This repository demonstrates a common error in Express.js applications: improper handling of asynchronous operation errors within request handlers.  The bug results in silent failures; the server doesn't respond appropriately when an asynchronous operation fails. The solution provides robust error handling for a more reliable application.

## Bug

The `bug.js` file showcases the problematic code.  An asynchronous operation (`someAsyncOperation`) is performed within a request handler.  While a `.catch` block exists, it only logs the error to the console.  This is insufficient: a proper response should be sent to the client, indicating the failure.

## Solution

The `bugSolution.js` file presents the corrected code.  The solution employs a `try...catch` block surrounding the asynchronous operation, enabling comprehensive error handling.  Upon error, the client receives a relevant HTTP error response (e.g., 500 Internal Server Error) with an informative error message.
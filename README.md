# Incorrect useEffect cleanup causing memory leaks in React 19

This repository demonstrates a common mistake when using the `useEffect` hook in React 19, specifically related to cleaning up intervals.

## The Problem

The `bug.js` file contains a component with a `useEffect` hook that attempts to clear an interval. However, `clearInterval` is passed a literal value (123) instead of the actual interval ID that was returned from `setInterval`. This results in a memory leak because the interval continues to run indefinitely.

## The Solution

The `bugSolution.js` file provides a corrected implementation. The key change is storing the interval ID in a variable (`intervalId`) and then using that variable to clear the interval in the cleanup function.

## How to reproduce

1. Clone the repository
2. Run `npm install`
3. Run `npm start`
4. Observe the console output.  The original code will continue to log messages even if the component is unmounted, revealing the memory leak. The corrected code will prevent these logs after unmounting.
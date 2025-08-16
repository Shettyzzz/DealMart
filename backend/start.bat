@echo off
echo Starting DealMart Backend Server...
echo.
echo Make sure MongoDB is running before starting the server
echo.
echo Installing dependencies...
npm install
echo.
echo Starting server...
npm run dev
pause

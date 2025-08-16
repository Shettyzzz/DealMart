Write-Host "Starting DealMart Backend Server..." -ForegroundColor Green
Write-Host ""
Write-Host "Make sure MongoDB is running before starting the server" -ForegroundColor Yellow
Write-Host ""

# Check if MongoDB is running
try {
    $mongoProcess = Get-Process -Name "mongod" -ErrorAction SilentlyContinue
    if ($mongoProcess) {
        Write-Host "MongoDB is running ✓" -ForegroundColor Green
    } else {
        Write-Host "MongoDB is not running. Please start MongoDB first." -ForegroundColor Red
        Write-Host "You can start it with: net start MongoDB" -ForegroundColor Yellow
        Read-Host "Press Enter to continue anyway..."
    }
} catch {
    Write-Host "Could not check MongoDB status" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm install

Write-Host ""
Write-Host "Starting server..." -ForegroundColor Cyan
npm run dev

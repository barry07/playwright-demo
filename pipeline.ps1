# 1. CLEANUP
docker stop test-web-app 
docker stop test-web-app 2>$null
docker rm test-web-app 2>$null

# 2. BUILD
Write-Host "building docker image..."
docker build -t cicd-test-app .

# 3. DEPLOY
Write-Host "deploying to staging..."
docker run -d -p 8080:80 --name test-web-app cicd-test-app

# 4. WAIT FOR NGINX
Start-Sleep -Seconds 3

# 5. TEST 
Write-Host "running playwright tests..."
npx playwright test
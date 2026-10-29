@echo off
cd /d "%~dp0"
echo ========================================================
echo Pushing project to https://github.com/krutkarsh1414/Akriti_Portfolio_Website
echo ========================================================
echo.
echo If a GitHub sign-in window appears, please authorize/log in.
echo.
git push -u origin main
echo.
echo Done! You can now refresh your GitHub page.
pause


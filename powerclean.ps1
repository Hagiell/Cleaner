Write-Output "Rozpoczynam czyszczenie..."
Remove-Item -Path "$env:TEMP\*" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "$env:LOCALAPPDATA\Temp\*" -Recurse -Force -ErrorAction SilentlyContinue
Write-Output "Zakończono! Zwolniono $(Get-ChildItem $env:TEMP | Measure-Object Length -Sum | Select-Object -ExpandProperty Sum | ForEach-Object { [math]::Round($_/1MB, 2) }) MB"
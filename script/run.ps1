function Start-Mongo() {
  $Path = ''
  if (Checkpoint-Path($Path)) {
    Add-Path($Path)
  }
  Set-Alias mongod "$mongoDirectory\mongod.exe"
  Set-Alias mongo "$mongoDirectory\mongo.exe"
  stop-service -Name "MongoDB"
  start-service -Name "MongoDB"
  mongod --version

  Write-Host "mongo"
}

function Checkpoint-Path($Path) {
  $PathList = [Environment]::GetEnvironmentVariable('path', 'Machine')
  if ($PathList -ne $null)
  {
    # "Exist in the system!"
    if ($PathList -split ';'  -contains  $Path)
    {
      return $false
    }
    else
    {
      return $true
    }
  }
  return $false
}

function Add-Path($Path) {
  $Path = [Environment]::GetEnvironmentVariable("PATH", "Machine") + [IO.Path]::PathSeparator + $Path
  [Environment]::SetEnvironmentVariable( "Path", $Path, "Machine" )
}

Import-Module "$env:ChocolateyInstall\helpers\chocolateyInstaller.psm1" -Force;
refreshenv

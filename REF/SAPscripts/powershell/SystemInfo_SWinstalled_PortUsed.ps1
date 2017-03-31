Get-WmiObject -Class Win32_ComputerSystem
# Get-WmiObject -Class CIM_SoftwareElement
Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* |  Select-Object DisplayName, DisplayVersion, Publisher, InstallDate 
netstat -abno
[System.Net.NetworkInformation.IPGlobalProperties]::GetIPGlobalProperties().GetActiveTcpConnections()
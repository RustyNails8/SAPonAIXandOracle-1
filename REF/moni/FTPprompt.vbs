Dim WshShell, BtnCode
Set WshShell = WScript.CreateObject("WScript.Shell")

BtnCode = WshShell.Popup("Ready to FTP the DCP_VLAN_Sheet.xls ?", 7, "AUTOgenVLAN INFO", 4 + 32)

Select Case BtnCode
   case 6      WScript.Echo "Hit ENTER on cmd screen."
   case 7      WScript.Echo "Hope you're ready soon."
   case -1     WScript.Echo "Is there anybody out there?"
End Select
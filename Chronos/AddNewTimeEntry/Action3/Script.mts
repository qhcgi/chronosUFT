testPath = Environment("TestDir")
RepositoriesCollection.Add(testPath&"\ObjectRepositories\DeleteEntry.tsr")

Dim result
Dim expectedValue
'Dim actualValue


OpenFile(testPath)
'These checkpoints may be broken now? May have to just re-add the text area/checkpoints
'Browser("Chronos Time Entry for").Sync
result = Browser("Chronos Time Entry for_2").Page("Chronos Time Entry for").Check (CheckPoint("Check Hours"))
expectedValue = DataTable("Hours", dtGlobalSheet)
AddResult expectedValue, result

result = Browser("Chronos Time Entry for_2").Page("Chronos Time Entry for").Check (CheckPoint("Check Activity")) @@ hightlight id_;_Browser("Chronos Time Entry for_2").Page("Chronos Time Entry for")_;_script infofile_;_ZIP::ssf3.xml_;_
expectedValue = DataTable("Activity", dtGlobalSheet)
AddResult expectedValue, result

result = Browser("Chronos Time Entry for_2").Page("Chronos Time Entry for").Check (CheckPoint("Check Comments")) @@ hightlight id_;_Browser("Chronos Time Entry for_2").Page("Chronos Time Entry for")_;_script infofile_;_ZIP::ssf4.xml_;_
expectedValue = DataTable("Comments", dtGlobalSheet)
AddResult expectedValue, result

result = Browser("Chronos Time Entry for_2").Page("Chronos Time Entry for_2").Check (CheckPoint("Check Task")) @@ hightlight id_;_Browser("Chronos Time Entry for_2").Page("Chronos Time Entry for_2")_;_script infofile_;_ZIP::ssf8.xml_;_
expectedValue = DataTable("Task", dtGlobalSheet)
AddResult expectedValue, result

result = Browser("Chronos Time Entry for_2").Page("Chronos Time Entry for").Check (CheckPoint("Check Organization")) @@ hightlight id_;_Browser("Chronos Time Entry for_2").Page("Chronos Time Entry for")_;_script infofile_;_ZIP::ssf5.xml_;_
expectedValue = DataTable("Organization", dtGlobalSheet)
AddResult expectedValue, result

result = Browser("Chronos Time Entry for_2").Page("Chronos Time Entry for").Check (CheckPoint("Check Project")) @@ hightlight id_;_Browser("Chronos Time Entry for_2").Page("Chronos Time Entry for")_;_script infofile_;_ZIP::ssf6.xml_;_
expectedValue = DataTable("Project", dtGlobalSheet)
AddResult expectedValue, result

result = Browser("Chronos Time Entry for_2").Page("Chronos Time Entry for").Check (CheckPoint("Check Sub-Project")) @@ hightlight id_;_Browser("Chronos Time Entry for_2").Page("Chronos Time Entry for")_;_script infofile_;_ZIP::ssf7.xml_;_
expectedValue = DataTable("Subproject", dtGlobalSheet)
AddResult expectedValue, result


CreateFooter()
CloseFile()


Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebButton("Delete").Click
Browser("Chronos Time Entry for_2").Dialog("Message from webpage").WinButton("OK").Click



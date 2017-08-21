testPath = Environment("TestDir")
RepositoriesCollection.Add(testPath&"\ObjectRepositories\BeginEntry.tsr")

Browser("Chronos Time Entry for").Sync
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").Link(DataTable("Day", dtGlobalSheet)).Click
Browser("Chronos Time Entry for").Sync
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebButton("Add").Click

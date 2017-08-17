Browser("Chronos Time Entry for").Sync
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebEdit("hours").Set DataTable("Hours", dtGlobalSheet)
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebEdit("comments").Set DataTable("Comments", dtGlobalSheet)
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebEdit("otherComments").Set DataTable("Task", dtGlobalSheet)
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebList("organization").Select DataTable("Organization", dtGlobalSheet)
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebList("project").Select DataTable("Project", dtGlobalSheet)
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebList("subproject").Select DataTable("Subproject", dtGlobalSheet)
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebList("activity").Select DataTable("Activity", dtGlobalSheet)
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebButton("Save").Click

Browser("Chronos Time Entry for").Sync
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebEdit("hours").Set
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebEdit("comments").Set
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebEdit("otherComments").Set
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebEdit("remainingHours").Set
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebList("organization").Select
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebList("project").Select
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebList("subproject").Select
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebList("activity").Select
Browser("Chronos Time Entry for").Page("Chronos Time Entry for").WebButton("Save").Click

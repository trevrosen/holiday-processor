# holiday-processor
Process address lists in Numbers into label sheets in Pages, b/c Pages doesn't have a mail merge feature.

## Warning
I made this for me and I don't anticipate changing it or making it much better. Feel free to use it if you think it would benefit you.

## Usage Reminders
* Ensure that the active documents in both Numbers and Pages are ready. Easiest thing is to open both as the only documents open in each application.
* Only one sheet per Numbers doc
* Rows: Name, Street, Street2, City, State Zip
* For non-US put the country in the zip field
* Copy/paste the grid into as many pages of the Pages doc as need be to handle the line item count - new pages on the Pages doc won't be created automatically.

## JXA
JXA is the name for JavaScript-based automation in macOS, executed via the `osascript` CLI bin.
[This guide](https://github.com/JXA-Cookbook/JXA-Cookbook) was really helpful in figuring out how the hell all this works.

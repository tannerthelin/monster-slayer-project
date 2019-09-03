# Tanner's Monster Slayer Project
The first course project for DGM-3790 at UVU. For this assignment, we had to change 5 major things from the tutorial videos. My 5 changes are as follows:


### Change 1: Styling Overhaul
I included a font in my commit and totally changed-up the styling so it feels a little closer to my style of web design.

### Change 2: Unique log event styling for the different events
I added unique css classes for the "Special Attack" and "Heal" log messages, to make it easier to distinguish.

### Change 3: Surrender Log Event
Added another log event for when the player selects "Give Up." It seemed weird that nothing would show up in the log when that happened.

### Change 4: Limit to Number of Heals
I made it so the player can only heal 5 times. Their remaining heals are displayed in the "heal" button. If the player tries to use the heal button when they're out of heals, it will give them a message in the log.

### Change 5: Limit to Special Attack
I did the same thing with the special attack -- the player can only use it twice.

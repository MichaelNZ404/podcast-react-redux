# Podcast Player
This pet project aims to create a web podcast player using react and redux, oauth and potentially react native. 

### Primary Goals
1. Create a web player that can play a hardcoded URL podcast, react [Complete]
2. Create a library that can render podcasts, react [Code Complete / Pending Tests]
3. Hook up the player and library to allow users to listen to episodes in the library, probably with redux [Incomplete]
4. Implement user profiles with oauth to allow episodes to be saved. [Incomplete]

### Stretch Goals
1. Implement react native and try to bring this to android [Incomplete]

### Current Bugs
There is an issue with the API used to pull podcast information. Itunes does not provide a comprehensive list of all known podcasts and can link to podcast sources which reject bot traffic. A new source will need to be found, or the itunes links will need to be vetted and cached. 

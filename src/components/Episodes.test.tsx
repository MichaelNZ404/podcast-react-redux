// import { getrssUrl, getrssEpisodes } from './Episodes';

// it('Correctly grabs the rss feed given a URL', () => {
//     const podcastUrl = 'https://itunes.apple.com/us/podcast/this-is-love/id1337100398?mt=2'
//     return getrssUrl(podcastUrl).then(data => {
//         expect(data['resultCount']).toBeGreaterThan(0);
//     })
// });

// it('Correctly grabs the episodes given a feed', () => {
//     const feedUrl = 'http://feeds.thisiscriminal.com/thisislovepodcast'
//     return getrssEpisodes(feedUrl).then(data => {
//         expect(data).toBeGreaterThan(0);
//     })
// });
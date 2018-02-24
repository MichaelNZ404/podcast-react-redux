import * as React from 'react';
import './Episodes.css';

export interface Props {
    itunes_url: string;
}
export interface Episode {
    audioUrl: string,
    image: string,
    title: string,
    subtitle: string,
    duration: string,
    date: string,
}
export interface State {
    loading: boolean,
    itunes_url: string,
    feed_url: string | null
    episodes: Array<any>
}

class Episodes extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        getrssUrl(props.itunes_url)
            .then(response => response.json())
            .then(response => response['results'][0]['feedUrl']) 
            .then(feedUrl => {
                this.setState({
                    feed_url: feedUrl
                })
                fetch(feedUrl)
                    .then(response => response.text())
                    .then(response => {
                        let parser = new DOMParser();
                        let xmlDoc = parser.parseFromString(response, "text/xml");
                        let items = xmlDoc.getElementsByTagName("item");
                        let episodes = []
                        for (let i = 0; i < items.length; i++) {
                            episodes.push({
                            audioUrl: items[i].getElementsByTagName('link')[0].textContent,
                            image: items[i].getElementsByTagName('itunes:image')[0].getAttribute('href'),
                            title: items[i].getElementsByTagName('title')[0].textContent,
                            subtitle: items[i].getElementsByTagName('itunes:subtitle')[0].textContent,
                            duration: items[i].getElementsByTagName('itunes:duration')[0].textContent,
                            date: items[i].getElementsByTagName('pubDate')[0].textContent,
                            });
                        }
                        this.setState({
                            loading: false,
                            episodes: episodes
                        })
                    })
            });
        this.state = {
            loading: true,
            itunes_url: props.itunes_url,
            feed_url: null,
            episodes: []
        }
    }

    render() {
        if (this.state.loading) {
            return <span>Loading</span>
        }
        return (
            <div>
                <span>{this.state.itunes_url}</span>
                <div>{this.state.feed_url}</div>
                {this.state.episodes.slice(0, 10).map(episode => <EpisodeCard key={episode.title} {...episode} />)}
            </div>
        );
    }

}
export default Episodes;

export function EpisodeCard(props: Episode) {
    return (
        <a href={props.audioUrl}>
            <div className="episode-card">
                <img src={props.image} height="200"/>
                <div className="episode-details">
                    <h2>{props.title}</h2>
                    <h3>{props.subtitle}</h3>
                    <p>{props.date}</p>
                    <p>{props.duration}</p>
                </div>
                <div className="clearfix" />
            </div>
        </a>     
    );
}

/** This function extracts the podcast id from a given url 
 * or uses a given podcast id to search the itunes store for data
 */
export function getrssUrl(url: string): Promise<Response> {
    let match = url.match(/id(\d+)/)
    let podID: any = null;

    if (match) {
        podID = match[1]; 
    } else {
        podID = url.match(/\d+/);  // 123456 
    } 

    if (!podID) {
        throw "Provided url seems to be invalid";
    }

    return fetch(`https://itunes.apple.com/lookup?id=${podID}&entity=podcast`)
}
import * as React from 'react';

import './Library.css';
import Carousel from './Carousel';

let data = require('../../src/us-top-100-podcasts.json')

export interface Props {
    itunes_rss: string;
}
export interface Podcast {
    url: string,
    artistName: string,
    id: string,
    releaseDate: string,
    name: string,
    artworkUrl100: string
}
export interface State {
    loading: boolean,
    podcasts: Array<any>,
}

class Library extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            loading: false,
            podcasts: data['feed']['results']
        }
    }

    render() {
        if (this.state.loading) {
            return <span>Loading</span>
        }
        const cards = this.state.podcasts.map((podcast: Podcast) => 
            <LibraryCard key={podcast.id} {...podcast} />);
        return (<Carousel cards={cards} />);
    }

}
export default Library;

export function LibraryCard(props: Podcast) {
    return (
        <a href={props.url}>
            <div className="podcast-card">
                <img src={props.artworkUrl100} height="200"/>
                <div className="podcast-details">
                    <h2>{props.artistName}</h2>
                    <h3>{props.name}</h3>
                    <p>{props.releaseDate}</p>
                </div>
                <div className="clearfix" />
            </div>
        </a>     
    );
}

import { Artist } from "./Artist";
import { Track } from "./Track";

export class TrackContainer{
    addedAt : string;
    track : Track;
    artists : Artist[]
    name : string;

    constructor(added_at : string,track : Track,artists : Artist[],name : string){
        this.addedAt = added_at;
        this.track = track;
        this.artists = artists;
        this.name = name;
    }
}
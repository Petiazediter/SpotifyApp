import { Observable } from "rxjs";
import { Terms } from "./terms";

export interface SpotifyServiceInterface{

    GetTopTrack(term : Terms) : Observable<any>

}
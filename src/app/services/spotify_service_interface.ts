import { Observable } from "rxjs";
import { Terms } from "./terms";

export interface SpotifyServiceInterface{

    GetTop20Tracks(term : Terms) : Observable<any>

}
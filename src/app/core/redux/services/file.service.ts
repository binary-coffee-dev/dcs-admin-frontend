import {Injectable} from '@angular/core';

import {Apollo} from "apollo-angular";
import {map} from "rxjs/operators";

import {FILES_QUERY} from "../../graphql/queries";

@Injectable({
    providedIn: 'root'
})
export class FileService {

    constructor(private apollo: Apollo) {
    }

    fetchFiles(limit, start = 0) {
        return this.apollo
            .watchQuery({query: FILES_QUERY, variables: {limit, start}})
            .valueChanges.pipe(map((result: any) => result.data.uploadsConnection));
    }
}

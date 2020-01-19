import {Action, Selector, State, StateContext} from '@ngxs/store';
import {tap} from 'rxjs/operators';
import {Observable} from "rxjs";

import {
    FetchFilesAction,
    NextFilesPageAction,
    PreviousFilesPageAction
} from '../actions';
import {File} from '../models';
import {FileStateModel, initFileStateModel} from "./file-state.model";
import {MINIMUM_PAGE, PaginationBaseClass, ResponseData} from "./pagination-base.class";
import {FileService} from "../services";

@State<FileStateModel>({
    name: 'file',
    defaults: initFileStateModel()
})
export class FileState extends PaginationBaseClass<FileStateModel> {

    @Selector()
    static files(state: FileStateModel): File[] {
        return state.elements;
    }

    @Selector()
    static firstPage(state: FileStateModel): boolean {
        return state.firstPage;
    }

    @Selector()
    static lastPage(state: FileStateModel): boolean {
        return state.lastPage;
    }

    constructor(private fileService: FileService) {
        super();
    }

    @Action(FetchFilesAction)
    fetchPostsAction(ctx: StateContext<FileStateModel>) {
        const pageSize = ctx.getState().pageSize;
        const start = ctx.getState().page * pageSize;
        return this.fetchPage(pageSize, start, ctx);
    }

    @Action(NextFilesPageAction)
    nextPageAction(ctx: StateContext<FileStateModel>) {
        const pageSize = ctx.getState().pageSize;
        const currentPage = this.nextPageNumber(ctx.getState().page, ctx.getState().count, pageSize);
        const start = currentPage * pageSize;
        return this.fetchPage(pageSize, start, ctx, currentPage).pipe(tap(() => {
            ctx.patchState({page: currentPage});
        }));
    }

    @Action(PreviousFilesPageAction)
    previousPageAction(ctx: StateContext<FileStateModel>) {
        const pageSize = ctx.getState().pageSize;
        const currentPage = Math.max(ctx.getState().page - 1, MINIMUM_PAGE);
        const start = currentPage * pageSize;
        return this.fetchPage(pageSize, start, ctx, currentPage).pipe(tap(() => {
            ctx.patchState({page: currentPage});
        }));
    }

    fetchElements(pageSize, start): Observable<ResponseData> {
        return this.fileService.fetchFiles(pageSize, start);
    }
}

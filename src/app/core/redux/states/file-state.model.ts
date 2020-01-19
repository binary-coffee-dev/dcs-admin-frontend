import {File} from '../models';
import {StateBase} from "./pagination-base.class";

export interface FileStateModel extends StateBase {
    elements: File[];
}

export const initFileStateModel = () => {
    return {
        elements: [],
        page: 0,
        pageSize: 10,
        firstPage: false,
        lastPage: false
    } as FileStateModel;
};

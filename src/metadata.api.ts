export interface Link {
    href: string,

    title?: string,

    templated?: boolean
}

export interface Links {
    [key: string]: Link
}

export class PaginationOptions {

    public sort_field: string = '_id';
    public sort_asc: boolean = true;
    public page_number: number = 0;
    public page_size: number = 30;

    constructor({
        sort_field = '_id',
        sort_asc = true,
        page_number = 0,
        page_size = 30 } = {}) {
        this.sort_field = sort_field;
        this.sort_asc = sort_asc;
        this.page_number = page_number;
        this.page_size = page_size;
    }

    public asSortCriteria(): any {
        const sort_field: string = this.sort_field || '_id';
        const sort_value: string = this.sort_asc ? 'asc' : 'desc';
        return { [sort_field]: sort_value };
    }

}

export class PaginationStatus {
    public sort_field: string = '_id';
    public sort_asc: boolean = true;
    public page_number: number = 0;
    public page_size: number = 30;
    public pages_total: number = 0;

    constructor({
        sort_field = '_id',
        sort_asc = true,
        page_number = 0,
        page_size = 30,
        pages_total = 1 } = {}) {
        this.sort_field = sort_field;
        this.sort_asc = sort_asc;
        this.page_number = page_number;
        this.page_size = page_size;
        this.pages_total = pages_total;
    }

    public static fromPaginationOptions(paginationOptions: PaginationOptions, numItems: number) {
        return new PaginationStatus({
            sort_field: paginationOptions.sort_field,
            sort_asc: paginationOptions.sort_asc,
            page_number: paginationOptions.page_number,
            page_size: paginationOptions.page_size,
            pages_total: Math.ceil(numItems / paginationOptions.page_size)
        });
    }
}

export class PaginatedResults<DocumentType> {

    public items: DocumentType[];
    public page: PaginationStatus;

    constructor(items: DocumentType[], page: PaginationStatus) {
        this.items = items;
        this.page = page;
    }

}
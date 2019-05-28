import { CategoryModel } from './categories.model';

export interface PostListViewModel{
    id: string;
    title?: string; 
    summary?: string;
    thumbnail?: string;
    createdDate?: Date;
    slug?: string;
    readingTime?: number;
    categoryName?: string;
    categorySlug?: string;
}

export interface PostDetailViewModel{
    id: string;
    title: string; 
    summary: string;
    thumbnail: string;
    createdDate: Date;
    categoryId: string;
    categoryName: string;
    slug: string;
    readingTime: number;

    body: string;
    tag: any[];
}

export class PostModel {
    id?: string;
    title?: string; 
    summary?: string;
    thumbnail?: string;
    createdDate?: Date;
    slug?: string;
    readingTime?: number;
    body?: string;

    categoryName?: string;
    categorySlug?: string;
}
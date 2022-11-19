import type { MicroCMSListContent } from "microcms-js-sdk";
import type { MicroCMSImage } from "microcms-js-sdk";
import type { MicroCMSListResponse } from "microcms-js-sdk";

export type Tag = {
    name: string;
    sortOrder: number;
} & MicroCMSListContent;

export type TagList = MicroCMSListResponse<Tag>

export type Post = {
    title: string;
    description: string;
    keywords: string;
    thumbnail: MicroCMSImage;
    tag: Tag[];
    tocVisible: boolean;
    text: string;
    related: Post[]
} & MicroCMSListContent;

export type PostList = MicroCMSListResponse<Post>

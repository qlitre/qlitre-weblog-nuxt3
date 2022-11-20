import type { MicroCMSListContent } from "microcms-js-sdk";
import type { MicroCMSImage } from "microcms-js-sdk";
import type { MicroCMSListResponse } from "microcms-js-sdk";

export type Tag = {
    name: string;
    sortOrder: number;
} & MicroCMSListContent;

export type TagList = MicroCMSListResponse<Tag>

export type AmazonLink = {
    title: string;
    image: MicroCMSImage;
    url: string;
}

export type Post = {
    title: string;
    description: string;
    keywords: string;
    thumbnail: MicroCMSImage;
    tag: Tag[];
    tocVisible: boolean;
    text: string;
    related: Post[];
    useAmazonLink: boolean;
    repeated: AmazonLink[];

} & MicroCMSListContent;

export type PostList = MicroCMSListResponse<Post>

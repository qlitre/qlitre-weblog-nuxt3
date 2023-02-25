import { PostList } from '../types/blog'

type Data = {
    [key: string]: number
}

// タグを参照している記事の数を返す
export const getTagReferencedCount = (postList: PostList) => {
    const ret: Data = {}
    for (const post of postList.contents) {
        for (const tag of post.tag) {
            if (ret[tag.id]) {
                ret[tag.id]++
            } else {
                ret[tag.id] = 1
            }
        }
    }
    return ret
}
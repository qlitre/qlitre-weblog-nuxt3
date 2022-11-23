import client from './client'
import { Post } from '../../types/blog'


export default defineEventHandler(async (event) => {
    const params = getQuery(event)
    const slug = String(params.slug)
    const draftKey = String(params.draftKey)

    const data = client.getListDetail<Post>({
        endpoint: 'post',
        contentId: slug,
        queries: {
            draftKey: draftKey
        }
    }).catch((err) => console.error(err));
    return data
})
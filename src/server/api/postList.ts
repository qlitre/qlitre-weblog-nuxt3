import client from './client'
import { PostList } from '../../types/blog'
import { MicroCMSQueries } from 'microcms-js-sdk'


export default defineEventHandler(async (event) => {
    const queries: MicroCMSQueries = getQuery(event)
    const data = await client.getList<PostList>({
        endpoint: 'post',
        queries: queries
    })
    return data
})
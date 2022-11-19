import type { IncomingMessage, ServerResponse } from 'http'
import client from './client'
import { Tag } from '../../types/blog'
import * as url from "url";


export default defineEventHandler(async (event) => {
    const queries = {
        limit: 100,
    }

    const data = await client.getList<Tag>({
        endpoint: 'tag',
        queries: queries
    })
    return data
})
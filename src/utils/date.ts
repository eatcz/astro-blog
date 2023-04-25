import _ from 'lodash'
import datjs from 'dayjs'

export const sortPostsByDate = (posts) =>{
    posts.filter(({data}) => !data.draft).sort((a,b) =>datjs(b.data.date).unix() - datjs(a.data.date).unix())
}

// 通过年份获取文章
export const getPostByYear = (posts) =>{
    console.log(posts);
    
}


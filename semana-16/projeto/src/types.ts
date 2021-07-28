export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

export type Task = {
    id: string,
    title: string,
    description: string,
    status: string,
    limit_date: string,
    creator_user_id: number
}
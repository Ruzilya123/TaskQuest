export interface Task {
    id: string
    title: string
    description?: string
    completed: boolean
    xpAwarded?: boolean // true если за это задание уже давали XP
    createdAt: number
}

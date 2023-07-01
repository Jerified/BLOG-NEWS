import { format } from 'date-fns'

export const convertTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    return format(date, 'dd.MM.yyyy')
}
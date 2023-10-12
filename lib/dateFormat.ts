import { format } from 'date-fns'

export const convertTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const formattedDate = format(date, 'dd.MM.yyyy')

    return formattedDate
}


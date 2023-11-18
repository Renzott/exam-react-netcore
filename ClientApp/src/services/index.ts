import { ITeacher } from "../models";

export const searchTeachersQuery = (search: string) => {
    if (!search) return [];
    const res = fetch(`/api/teacher/search?query=${search}`)
        .then(response => response.json())
        .then(data => data);

    return res;
}



export const postEvent = (event: ITeacher) => {
    const res = fetch(`/api/event`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
        .then(response => response.json())
        .then(data => data);

    return res;
}
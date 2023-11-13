export const searchTeachersQuery = (search: string) => {
    if (!search) return [];
    const res = fetch(`/api/teacher/search?query=${search}`)
        .then(response => response.json())
        .then(data => data);

    return res;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postEvent = (event: any) => {
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
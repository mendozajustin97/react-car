let token ='c570f569ad40b8fef2620b8be3abc60b628ce3e337160f41'

export const server_calls = {
    get:async () => {
        const response = await fetch('https://car-inventory-7smy.onrender.com',
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-token',
                'x-access-token' : `Bearer ${token}`,
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch('https://car-inventory-7smy.onrender.com',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-access-token',
                'x-access-token' : `Bearer ${token}`,   
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://car-inventory-7smy.onrender.com/${id}`,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-access-token',
                'x-access-token' : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://car-inventory-7smy.onrender.com/${id}`,
        {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-access-token',
                'x-access-token' : `Bearer ${token}`,
            }
        });

        if (!response.ok){
            throw new Error('Failed to delete data on the server')
        }

        return;
    }
}
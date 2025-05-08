import axios from "axios";

export async function fetchData(url, token) {
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return { data: response.data, message: response.data.message };
    } catch (error) {
        let errorMessage = "Server is down";

        if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
        } else if (error.message) {
            errorMessage = error.message;
        }

        return { error: errorMessage, data: -1 };
    }
}

export async function sendData(url,data,token) {
    try {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await axios.post(url,data);
        return {data:response.data,message:response.data.message};
    } catch (error) {
        let errorMessage = "Server is down";

        if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
        } else if (error.message) {
            errorMessage = error.message;
        }

        return { error: errorMessage, data: -1 };
    }
}

export async function updateData(url,data,token) {
    try {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await axios.put(url,data);
        return {data:response.data,message:response.data.message};
    } catch (error) {
        let errorMessage = "Server is down";

        if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
        } else if (error.message) {
            errorMessage = error.message;
        }

        return { error: errorMessage, data: -1 };
    }
}

export function generateFancyName(seed) {
    const adjectives = [
        "Mighty", "Silent", "Crimson", "Golden", "Velvet", "Sapphire",
        "Iron", "Wise", "Swift", "Frosty", "Midnight", "Radiant"
    ];
    const nouns = [
        "Falcon", "Knight", "Phoenix", "Rider", "Shadow", "Hunter",
        "Scribe", "Wanderer", "Blaze", "Whisper", "Dancer", "Seeker"
    ];

    const hash = Array.from(seed || Math.random().toString()).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const adj = adjectives[hash % adjectives.length];
    const noun = nouns[(hash >> 2) % nouns.length];
    return `${adj} ${noun}`;
}

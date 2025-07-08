import instance from ".";

export async function getPerfumes() {
    try {
        const { data, status } = await instance.get('/fragancias')
        return { data, status }
    } catch (error) {
        throw error
    }
}
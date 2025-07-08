import instance from ".";

export async function getPerfumes() {
    try {
        const { data, status } = await instance.get('/marcas')
        return { data, status }
    } catch (error) {
        throw error
    }
}
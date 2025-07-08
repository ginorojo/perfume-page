import instance from ".";

export async function getPerfumeById(id) {
    try {
        const { data, status } = await instance.get(`/perfumes/${id}`)
        return { data, status }
    } catch (error) {
        throw error
    }
}
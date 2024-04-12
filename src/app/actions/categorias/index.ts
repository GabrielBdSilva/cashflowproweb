export async function getCategorias() {
    const resp = await fetch(process.env.API_BASE_URL + "/categoria", { next: { revalidate: 0 } })
    return await resp.json()
}
//criar um arquivo .env.local em src e add esse codigo: API_BASE_URL=http://localhost:8080
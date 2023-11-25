const apiUrl = import.meta.env.VITE_API_URL

export const getCategorias = async () => {
  const response = await fetch(`${apiUrl}/categorias`)
  return await response.json()
}

export const getCategoria = async (slug: string) => {
  const response = await fetch(`${apiUrl}/categorias/${slug}`)
  return await response.json()
}

export const Post = {
  getById: async (id: string) => {
    console.log(`Fetching post with id: ${id}`)
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    )
    if (!response.ok) {
      throw new Error(
        `Error fetching post with id ${id}: ${response.statusText}`,
      )
    }
    return response.json()
  },
  getAll: async () => {
    return new Promise<Array<any>>((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "Post 1", body: "This is the body of post 1" },
          { id: 2, title: "Post 2", body: "This is the body of post 2" },
          { id: 3, title: "Post 3", body: "This is the body of post 3" },
        ])
      }, 1000)
    })
  },
}

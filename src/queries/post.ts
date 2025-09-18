import { Post } from "@/api/posts"

export const postQueryOptions = (id: string) => {
  return {
    queryKey: ["posts", id],
    queryFn: () => Post.getById(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
    enabled: !!id, // Only run the query if id is truthy
  }
}

export const postsQueryOptions = {
  queryKey: ["posts"],
  queryFn: () => Post.getAll(),
  staleTime: 1000 * 60 * 5, // 5 minutes
  retry: 1,
}

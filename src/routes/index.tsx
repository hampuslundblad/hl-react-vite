import { createFileRoute } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { postQueryOptions } from "@/queries/post"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  const postQuery = useQuery(postQueryOptions("1"))
  console.log("postQuery", postQuery)
  // postQuery.data is the data returned from the query
  return (
    <div className="p-2">
      <h1> Hello World </h1>
      <Button> Button </Button>
      <div>
        {postQuery.isLoading && <p>Loading...</p>}
        {postQuery.isError && <p>Error: {postQuery.error.message}</p>}
        {postQuery.data && <pre>{JSON.stringify(postQuery.data, null, 2)}</pre>}
      </div>
    </div>
  )
}

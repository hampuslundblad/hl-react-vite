import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='p-2'>
      <h1> Hello World </h1>
      <Button> Button </Button>
    </div>
  )
}

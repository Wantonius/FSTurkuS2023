import { useState } from 'react'
import ContactCard from './components/ContactCard';

function App() {
  const [count, setCount] = useState(0)

  return (
		<>
			<ContactCard>
				<h2>Matti Meikäläinen</h2>
			</ContactCard>
		</>
  )
}

export default App

import { useState } from 'react'
import ContactCard from './components/ContactCard';
import ContactInfo from './components/ContactInfo';
import NamedChildren from './components/NamedChildren';
function App() {
  const [count, setCount] = useState(0)

  return (
		<>
			<ContactCard>
				<h2>Matti Meikäläinen</h2>
			</ContactCard>
			<ContactCard>
				<h3>Current count:{count}</h3>
				<button onClick={() => setCount(count => count +1)}>Click</button>
			</ContactCard>
			<NamedChildren
				header={<h2>Complex Card</h2>}
				media={<h2>Media content</h2>}
				content={<h2>Content area</h2>}/>
			<NamedChildren
				header={<h2>Complex Card</h2>}
				content={<h2>Content area</h2>}/></>
  )
}

export default App

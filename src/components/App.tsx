import { observer } from 'mobx-react'
import React from 'react'
import tw from 'twin.macro'
import { Login } from './Forms/Login'
import { Register } from './Forms/Register'
import { MainContent } from './MainContent'
import { Navbar } from './Navbar'

const AppDiv = tw.div`
  max-h-screen
  text-center
`

const RootDiv = tw.div``

const App: React.FC = observer(() => {
	return (
		<AppDiv>
			<Register />
			<Login />
			<RootDiv>
				<Navbar />
				<MainContent />
			</RootDiv>
		</AppDiv>
	)
})

export default App

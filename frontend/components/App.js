import React, {  useContext } from 'react'
import Quotes from './Quotes'
import QuoteForm from './QuoteForm'
import { QuotesContext } from '../context/quotesContext'

export default function App() {
  // const data=useContext(QuotesContext)
  // console.log(data)

  return (
    <div id="mp">
      <h2>Module Project</h2>
      <Quotes />
      <QuoteForm />
    </div>
  )
}

"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import axios from 'axios'

const UpvoteButton = (id : string) => {
    const [votes, setVotes] = useState(0)
    async function handleUpvote() {
        try {
            const response = await axios.post('/api/upvote', id)
            console.log(response)
        } catch (error) {
            console.log("Error while upvoting", error)
        }
    }
  return (
    <div>
      <Button size={'sm'} onClick={handleUpvote}>Upvote</Button>
    </div>
  )
}

export default UpvoteButton

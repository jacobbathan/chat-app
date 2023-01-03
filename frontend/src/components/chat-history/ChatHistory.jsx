import React from 'react'
import './ChatHistory.scss'

const ChatHistory = ({chatHistory}) => {
	const mappedMessages = chatHistory.map((msg, idx) => {
		return <p key={idx}>{msg.data}</p>
	})

	return (
		<div className="chatHistory">
			<h2>Chat History</h2>
		{mappedMessages}
		</div>
	)
}

export default ChatHistory

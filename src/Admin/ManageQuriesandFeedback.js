import React, { useState } from 'react';
import "./ManageQuriesandFeedback.css";
const QueryComponent = () => {
  const [queries, setQueries] = useState([
    { id: 1, query: 'why sky is blue', reply: "because it is blue", showReply: false },
    { id: 2, query: 'why 2 is here', reply: 'To get correct answer', showReply: false },
    // Add more queries as needed...
  ]);

  const [replyInput, setReplyInput] = useState('');

  const handleReplyToggle = (id) => {
    const updatedQueries = queries.map((query) =>
      query.id === id ? { ...query, showReply: !query.showReply } : query
    );
    setQueries(updatedQueries);
  };

  const handleReply = (id) => {
    // Here you might send the replyInput to an API or update the query directly in your state
    const updatedQueries = queries.map((query) =>
      query.id === id ? { ...query, reply: replyInput, showReply: false } : query
    );
    setQueries(updatedQueries);
    setReplyInput('');
  };

  const handleDelete = (id) => {
    const updatedQueries = queries.filter((query) => query.id !== id);
    setQueries(updatedQueries);
  };

  return (
    <div class="query-container">
      <h2><b>Queries</b></h2>
      {queries.map((query) => (
        <div key={query.id} class="query">
          <p class="query-asked">{query.query}</p>
          <p class="reply-sent"><b>Reply:</b>{query.reply}</p>
          {query.showReply ? (
            <div>
              <input
                type="text"
                value={replyInput}
                onChange={(e) => setReplyInput(e.target.value)}
                placeholder="Type your reply..."
              />
              <button onClick={() => handleReply(query.id)}>Submit Reply</button>
            </div>
          ) : (
            <div>
              <button class="query-reply"onClick={() => handleReplyToggle(query.id)}>Reply</button>
              <button class="query-delete" onClick={() => handleDelete(query.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QueryComponent;

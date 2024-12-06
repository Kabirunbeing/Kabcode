import React, { useState } from 'react';

const DiscussionForum = () => {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      problemTitle: "Two Sum",
      author: "CodeMaster23",
      flair: "Problem Solver",
      timestamp: new Date('2024-03-15T10:30:00'),
      content: "Can someone explain the optimal approach for solving this problem?",
      replies: [
        {
          id: 1,
          author: "AlgoNinja",
          flair: "Algorithm Enthusiast",
          timestamp: new Date('2024-03-15T11:45:00'),
          content: "The key is to use a hash map to store complements. Time complexity is O(n).",
          likes: 5,
          dislikes: 1
        }
      ]
    }
  ]);

  const [newDiscussion, setNewDiscussion] = useState({
    problemTitle: '',
    content: ''
  });

  const [newReply, setNewReply] = useState({
    discussionId: null,
    content: ''
  });

  const handleNewDiscussionChange = (e) => {
    const { name, value } = e.target;
    setNewDiscussion((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const submitNewDiscussion = () => {
    if (!newDiscussion.problemTitle || !newDiscussion.content) return;

    const discussion = {
      id: discussions.length + 1,
      problemTitle: newDiscussion.problemTitle,
      author: "Kabeer Ahmad",
      flair: "intermediate Coder", // Dynamic flair based on user roles
      timestamp: new Date(),
      content: newDiscussion.content,
      replies: []
    };

    setDiscussions([...discussions, discussion]);
    setNewDiscussion({ problemTitle: '', content: '' });
  };

  const submitReply = (discussionId) => {
    if (!newReply.content) return;

    const reply = {
      id: Math.random(), // Temporary ID generation
      author: "CurrentUser",
      flair: "Reply Pro",
      timestamp: new Date(),
      content: newReply.content,
      likes: 0,
      dislikes: 0
    };

    const updatedDiscussions = discussions.map((disc) =>
      disc.id === discussionId
        ? { ...disc, replies: [...disc.replies, reply] }
        : disc
    );

    setDiscussions(updatedDiscussions);
    setNewReply({ discussionId: null, content: '' });
  };

  const handleVote = (discussionId, replyId, type) => {
    const updatedDiscussions = discussions.map((disc) => {
      if (disc.id === discussionId) {
        const updatedReplies = disc.replies.map((reply) => {
          if (reply.id === replyId) {
            if (type === "upvote") {
              return { ...reply, likes: reply.likes + 1 };
            }
            if (type === "downvote") {
              return { ...reply, dislikes: reply.dislikes + 1 };
            }
          }
          return reply;
        });
        return { ...disc, replies: updatedReplies };
      }
      return disc;
    });

    setDiscussions(updatedDiscussions);
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-10">
        Problem Discussion Forum
      </h2>

      {/* New Discussion Form */}
      <div className="bg-gray-800 p-6 rounded-lg mb-10">
        <input
          type="text"
          name="problemTitle"
          placeholder="Problem Title"
          value={newDiscussion.problemTitle}
          onChange={handleNewDiscussionChange}
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
        />
        <textarea
          name="content"
          placeholder="Your discussion post..."
          value={newDiscussion.content}
          onChange={handleNewDiscussionChange}
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded h-32"
        />
        <button
          onClick={submitNewDiscussion}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
        >
          Create Discussion
        </button>
      </div>

      {/* Discussions List */}
      {discussions.map((discussion) => (
        <div
          key={discussion.id}
          className="bg-gray-800 rounded-lg p-6 mb-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-cyan-400">
              {discussion.problemTitle}
            </h3>
            <span className="text-sm text-gray-400">
              {discussion.timestamp.toLocaleString()}
            </span>
          </div>

          <p className="mb-4">{discussion.content}</p>

          <div className="text-sm text-gray-300 mb-4">
            Posted by <span className="font-bold">{discussion.author}</span> 
            <span className="ml-2 px-2 py-1 bg-cyan-600 rounded text-xs">{discussion.flair}</span>
          </div>

          {/* Replies Section */}
          {discussion.replies.map((reply) => (
            <div
              key={reply.id}
              className="bg-gray-700 p-4 rounded-lg mb-2"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">
                  {reply.author}
                </span>
                <span className="text-sm text-gray-400">
                  {reply.timestamp.toLocaleString()}
                </span>
              </div>
              <p>{reply.content}</p>
              <div className="flex justify-between items-center mt-2">
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <button
                    className="text-xl"
                    onClick={() =>
                      handleVote(discussion.id, reply.id, "upvote")
                    }
                  >
                    🔼
                  </button>
                  <span>{reply.likes}</span>
                  <button
                    className="text-xl"
                    onClick={() =>
                      handleVote(discussion.id, reply.id, "downvote")
                    }
                  >
                     🔽
                  </button>
                  <span>{reply.dislikes}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Reply Form */}
          <div className="mt-4">
            <textarea
              placeholder="Write a reply..."
              value={newReply.discussionId === discussion.id ? newReply.content : ''}
              onChange={(e) =>
                setNewReply({
                  discussionId: discussion.id,
                  content: e.target.value
                })
              }
              className="w-full p-2 bg-gray-700 text-white rounded h-24 mb-2"
            />
            <button
              onClick={() => submitReply(discussion.id)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
            >
              Reply
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscussionForum;

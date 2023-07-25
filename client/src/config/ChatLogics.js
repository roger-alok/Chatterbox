export const getOtherUser = (loggedUser, users) => {
  if (!users || users.length < 1) {
    return;
  }
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};

export const getOtherUsers = (loggedUser, users) => {
  var arr = [];
  users.forEach((user) => {
    if (user._id !== loggedUser._id) {
      arr.push(user);
    }
  });

  return arr;
};

// The function returns true if the following conditions are met:

// The current message (m) is not the last message in the messages array (i < messages.length - 1).
// The sender of the next message (messages[i + 1].sender) is not the same as the sender of the current message (m.sender), or the sender of the next message is undefined.
// The sender of the current message (m.sender) is not the same as the given userId

//  It can be used to determine if a visual distinction or separation is needed between consecutive messages from different senders in the chat interface.
// As we have set photo of user in his last message
export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};
// this function helps identify if a given message is the last message
// in the chat and if the sender of that message is different from the given userId.
// It can be useful for applying specific styling or behavior to the last message in a chat conversation,
// such as indicating that it was sent by someone other than the current user.
export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

// this function helps determine the margin value for a message based on its sender and
// its relationship with the adjacent messages.It can be useful for adjusting the
// spacing and layout of messages in a chat conversation to visually distinguish messages
// from different senders or group them together based on the sender's continuity.
export const isSameSenderMargin = (messages, m, i, userId) => {
  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return "37px";
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};

import React from 'react';
import Tweet from './Tweet';

function App() {
  return (
    <div>
      <Tweet username="user1" realname="John Doe" message="Hello, this is my first         tweet!" />
    </div>
    <div>
      <Tweet username="user2" realname="Jane Smith" message="I love using this             platform!" />
    </div>
    <div>
      <Tweet username="user3" realname="Alice Johnson" message="Just had a                 fantastic day!" />
    </div>

  );
}

export default App;
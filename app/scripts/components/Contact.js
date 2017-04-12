import React from 'react';

export default React.createClass({
  render() {
    return (
      <form
        action="https://formspree.io/max@misterussell.com"
        method="POST">
        <input type="text" name="name" />
        <input type="email" name="_replyto" />
        <input type="submit" value="Send" />
      </form>
    );
  }
});

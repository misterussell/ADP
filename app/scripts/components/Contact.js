import React from 'react';

export default React.createClass({
  render() {
    return (
      <form
        action="https://formspree.io/max@misterussell.com"
        method="POST">
        <label className="hide" htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Name"/>
        <label className="hide" htmlFor="_replyto">Reply-to address</label>
        <input type="email" name="_replyto" placeholder="Reply-to"/>
        <input type="submit" value="Send" />
      </form>
    );
  }
});

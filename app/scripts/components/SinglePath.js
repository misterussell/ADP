// Library Imports
import React from 'react';

export default React.createClass({
  render() {
    return (
      <li className="single-pathologist">
        <h3 className="name">
          { this.props.pathologist.name }
        </h3>
        <img className="bio-pic" src={ this.props.pathologist.imgLarge } />
        <ul className="details">
          <li>
            <span className="bold">Board Certified:</span> { this.props.pathologist.certifications }
          </li>
          <li>
            <span className="bold">Degree:</span> { this.props.pathologist.degree }
          </li>
          <li>
            <span className="bold">Medical School:</span> { this.props.pathologist.school}
          </li>
          <li>
            <span className="bold">Pathology Training:</span> { this.props.pathologist.training }
          </li>
          <li>
            <span className="bold">Experience:</span> { this.props.pathologist.experience }
          </li>
          <li>
            <span className="bold">Roles and Attributes:</span> { this.props.pathologist.rolesAndAttr }
          </li>
          <li>
            <span className="bold">Associations:</span> { this.props.pathologist.associations }
          </li>
        </ul>
      </li>
    );
  }
});

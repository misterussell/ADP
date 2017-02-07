// Library Imports
import React from 'react';

export default React.createClass({
  render() {
    return (
      <li>
        <h3 className="name">
          { this.props.pathologist.name }
        </h3>
        <li>
          Board Certified: { this.props.pathologist.certifications }
        </li>
        <li>
          Degree: { this.props.pathologist.degree }
        </li>
        <li>
          Medical School: { this.props.pathologist.school}
        </li>
        <li>
          Pathology Training: { this.props.pathologist.training }
        </li>
        <li>
          Experience: { this.props.pathologist.experience }
        </li>
        <li>
          Roles and Attributes: { this.props.pathologist.rolesAndAttr }
        </li>
        <li>
          Associations: { this.props.pathologist.associations }
        </li>
      </li>
    );
  }
});

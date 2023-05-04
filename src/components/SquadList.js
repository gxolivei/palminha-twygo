import React from 'react';
import './SquadList.css';

const SquadList = ({ squad }) => {
  return (
    <div className="squad-list">
      {squad.map((member, index) => (
        <div key={index} className="squad-member">
          {member.option}
        </div>
      ))}
    </div>
  );
};

export default SquadList;
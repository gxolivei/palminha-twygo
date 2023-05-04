import React from 'react';
import './SquadList.css';

const SquadList = ({ squad, onToggleMember, selectedMembers }) => {
  const getMemberClassName = (member) => {
    return selectedMembers.includes(member.option) ? 'squad-member selected' : 'squad-member';
  };

  return (
    <div className="squad-list">
      {squad.map((member, index) => (
        <div
          key={index}
          className={getMemberClassName(member)}
          onClick={() => onToggleMember(member.option)}
        >
          {member.option}
        </div>
      ))}
    </div>
  );
};

export default SquadList;
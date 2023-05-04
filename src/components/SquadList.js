import React from 'react';
import { sortSquadAlphabetically } from '../helpers';
import './SquadList.css';

const SquadList = ({ squad, onToggleMember, selectedMembers }) => {
  const sortedSquad = sortSquadAlphabetically(squad);

  const getMemberClassName = (member) => {
    return selectedMembers.includes(member.option) ? 'squad-member selected' : 'squad-member';
  };

  return (
    <div className="squad-list">
      {sortedSquad.map((member, index) => (
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
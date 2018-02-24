import * as React from 'react';
import './Player.css';

export interface Props {
  audioSource: string;
}

function Player({ audioSource }: Props) {
  return (
    <audio controls={true}>
      <source src={audioSource} type="audio/ogg" />
      <source src={audioSource} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}

export default Player;

// helpers

// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join('!');
// }
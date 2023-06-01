export const getDataLength = (data) => {
  return data.length;
};

export const generateGradientColors = (color1, color2, steps) => {
  const colors = [];
  const stepFactor = 1 / (steps - 1);

  for (let i = 0; i < steps; i++) {
    const color1Factor = i * stepFactor;
    const color2Factor = 1 - color1Factor;

    const r = Math.round(color1.r * color1Factor + color2.r * color2Factor);
    const g = Math.round(color1.g * color1Factor + color2.g * color2Factor);
    const b = Math.round(color1.b * color1Factor + color2.b * color2Factor);

    colors.push(`rgb(${r}, ${g}, ${b})`);
  }

  return colors;
};

export const getInverseColor = (color) => {
  const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  const match = color.match(regex);

  if (!match) {
    return null;
  }

  const r = 255 - parseInt(match[1], 10);
  const g = 255 - parseInt(match[2], 10);
  const b = 255 - parseInt(match[3], 10);

  return `rgb(${r}, ${g}, ${b})`;
};

export const filterSelectedMembers = (data, selectedMembers) => {
  return data.filter((member) => !selectedMembers.includes(member.option));
};

export function sortSquadAlphabetically(squad) {
  return squad.slice().sort((a, b) => a.option.localeCompare(b.option));
};

export const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;
  
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }  
  
  return array;
};

export const replaceAt = (s: string, replacement: string, i: number) =>
  s.substring(0, i) + replacement + s.substring(i + 1);

export const animate = ({
  speed,
  initialPosition,
}: {
  speed: number;
  initialPosition: string;
}): string[] => {
  const steps: string[] = [initialPosition.replace(/[RL]/g, "X")];
  const { length } = initialPosition;
  const finalString = ".".repeat(length);
  const particles = [...initialPosition.matchAll(/[RL]/g)].map((particle) => ({
    direction: particle[0],
    index: particle.index,
  }));

  while (steps.at(-1) !== finalString) {
    // iterate through all of the particles and update the array with new values,
    // then push the step to steps
    let newString = finalString;
    // could free up some memory here if we remove particles that are already outside of the field
    particles.forEach((particle, i) => {
      const { direction, index } = particle;
      const position = direction === "R" ? index + speed : index - speed;
      particles[i].index = position;
      if (position < length && position >= 0) {
        newString = replaceAt(newString, "X", position);
      }
    });
    steps.push(newString);
  }

  return steps;
};

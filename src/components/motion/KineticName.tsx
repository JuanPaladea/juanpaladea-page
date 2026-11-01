/** Letters rise out of a mask one by one. Screen readers get the plain text. */
const KineticName = ({ text }: { text: string }) => {
  let index = 0;

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="flex flex-wrap gap-x-[0.28em]">
        {text.split(" ").map((word) => (
          <span key={word} className="kinetic-word">
            {[...word].map((letter, position) => (
              <span key={position} className="kinetic-char" style={{ "--i": index++ } as React.CSSProperties}>
                {letter}
              </span>
            ))}
          </span>
        ))}
      </span>
    </>
  );
};

export default KineticName;

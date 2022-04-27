interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div style={{ color: color }}>
      <h3>I am Child</h3>
      <button onClick={onClick}>Click Here</button>
    </div>
  );
};

export const childAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div style={{ color: color }}>
      <h3>I am Child</h3>
      <button onClick={onClick}>Click Here</button>
    </div>
  );
};

type PanelProps = {
  className?: string;
  value: number;
};

const Panel = ({ className, value }: PanelProps) => {
  return <div className={className}>Count: {value}</div>;
};

export default Panel;

interface Props {
  label: string;
  value: string;
}
const PoolDetail = ({ label, value }: Props) => {
  return (
    <div className="flex items-center gap-3 justify-between">
      <h3 className="text-[rgba(0, 0, 0, 0.8)] font00] text-sm">{label}:</h3>
      <small className="text-[rgba(0, 0, 0, 0.5)] text-xs">{value}</small>
    </div>
  );
};

export default PoolDetail;

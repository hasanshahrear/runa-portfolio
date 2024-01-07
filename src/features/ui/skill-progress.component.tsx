import { ProgressBar } from 'primereact/progressbar';

type TProps = {
  name: string,
  value: string,

};
export function SkillProgress({ name, value }:TProps) {
  return (
    <div>
      <div className="flex justify-between mb-2 items-baseline">
        <p className=" font-bold text-lg">{name}</p>
        <p>
          {value}
          %
        </p>
      </div>
      <ProgressBar
        value={value}
        pt={{
          root: {
            className: 'h-2 text-right',
          },
          value: { style: { background: 'linear-gradient(to right, #00FF94, #43DBFD)' } },
          label: {
            className: ' hidden',
          },
        }}
      />
    </div>
  );
}

export default function SkillBox({ IconComponent, size = '4rem' }) {
  return (
    <div className="rounded-md bg-gray p-2">
      <IconComponent size={size} />
    </div>
  );
}

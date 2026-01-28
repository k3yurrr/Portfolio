const WorkCard = ({ item }) => {
  return (
    <>
      <div className="text-[var(--light-text)] dark:text-[var(--dark-text)]">
        <h4 className="text-sm text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
          {item.date}
        </h4>
        <h3 className="font-semibold">{item.company}</h3>
        <p className="text-sm text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] italic mb-2">
          {item.role}
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1">
          {item.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WorkCard;

import AchievementItem from "./achievement-item";

const AchievementsSection = () => {
  return (
    <section className="relative pb-20 bg-[#01071A]">
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center px-[5%] xl:px-[15%] gap-y-[20px] items-center">
        <AchievementItem
          hasPlus
          visibleDelay={100}
          counterValue={56}
          title="Successful Clients"
          className="border-r border-[#87868636] pr-[10px]"
        />
        <AchievementItem
          visibleDelay={200}
          counterValue={10}
          unit="Y"
          title="Year in business"
          className="md:border-r border-[#87868636]"
        />
        <AchievementItem
          hasPlus
          visibleDelay={300}
          counterValue={100}
          title="Team Members"
          className="border-r border-[#87868636]"
        />
        <AchievementItem
          hasPlus
          visibleDelay={400}
          counterValue={86}
          unit="M"
          title="Clients ARR"
        />
      </div>
    </section>
  );
};

export default AchievementsSection;

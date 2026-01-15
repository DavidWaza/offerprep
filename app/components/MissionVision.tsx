const MissionVision = () => {
  return (
    <section className="relative py-20 px-6">
      {/* Background gradient wash */}
      <div className="absolute inset-0 bg-linear-to-br from-[#FEF7F0] via-[#F8D6CD]/60 to-[#E1D8F2]/70" />

      <div className="relative max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm border border-black/10 rounded-3xl p-10 md:p-14 shadow-xl">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#14325A] mb-4">
            Vision &amp; Mission
          </h2>

          {/* Divider */}
          <div className="w-full h-px bg-black/20 mb-10" />

          {/* Vision */}
          <div className="grid md:grid-cols-[120px_1fr] gap-6 mb-10">
            <h3 className="text-xl font-bold text-[#14325A]">
              Vision:
            </h3>
            <p className="text-base md:text-lg text-[#3A3A3A] leading-relaxed">
              A world where no one walks into an interview unprepared or
              afraid—where every job seeker, regardless of experience or
              background, has the tools, confidence, and coaching to land the
              opportunities they deserve.
            </p>
          </div>

          {/* Mission */}
          <div className="grid md:grid-cols-[120px_1fr] gap-6">
            <h3 className="text-xl font-bold text-[#14325A]">
              Mission:
            </h3>
            <p className="text-base md:text-lg text-[#3A3A3A] leading-relaxed">
              To empower job seekers with the confidence, skills, and insider
              knowledge needed to excel in interviews and land their dream jobs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

import clsx from "clsx";

const commitmentItems = [
    {
        content: "As your trusted partner in software development and AI implementation, Wise Accelerate is committed to working alongside you to tackle scalability and growth challenges of any scale. Choose Wise Accelerate for expert guidance and innovative solutions.",
        image: "/commitment-1.jpg"
    },
    {
        content: "Wise Accelerate brings together creativity, efficiency-proven processes, and top-tier software and AI engineering teams, helping you get closer to your vision and achieve measurable impact. Let's experience the Wise Accelerate difference.",
        image: "/commitment-2.jpg"
    },
]

const AboutCommitment = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-[#020718] to-[#01071A]">
            <div className="container mx-auto px-4">
                <div className="space-y-16 md:space-y-0">
                    {commitmentItems.map((item, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="md:w-1/2 md:p-8">
                                <p className="text-xl md:text-[28px] leading-relaxed">{item.content}</p>
                            </div>
                            <div className={clsx("md:w-1/2", {
                                "xl:overflow-hidden xl:h-[600px]": index === 0
                            })}>
                                <img
                                    src={item.image}
                                    alt={`Wise Accelerate commitment ${index + 1}`}
                                    className={clsx("object-cover w-full h-auto md:h-[600px]", {
                                        "xl:h-auto xl:-translate-y-[160px]": index === 0
                                    })}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutCommitment;
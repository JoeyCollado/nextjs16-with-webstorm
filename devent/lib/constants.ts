export type EventItem = {
    slug: string;
    location: string;
    date: string;
    time: string;
    image: string;
    title: string
}

export const events: EventItem[] = [
    {
        image: "/images/event1.png",
        title: "React Summit US 2025",
        slug: "react-summit-us-2025",
        location: "San Francisco, CA, USA",
        date: "2025-11-07",
        time: "09:00 AM",
    },
    {
        image: "/images/event2.png",
        title: "Next.js Conf Global 2025",
        slug: "nextjs-conf-global-2025",
        location: "Austin, TX, USA",
        date: "2025-10-18",
        time: "10:00 AM",
    },
    {
        image: "/images/event3.png",
        title: "TypeScript World Congress 2025",
        slug: "typescript-world-congress-2025",
        location: "Berlin, Germany",
        date: "2025-09-12",
        time: "09:30 AM",
    },
    {
        image: "/images/event4.png",
        title: "Full Stack Europe 2025",
        slug: "full-stack-europe-2025",
        location: "Antwerp, Belgium",
        date: "2025-06-20",
        time: "08:45 AM",
    },
    {
        image: "/images/event5.png",
        title: "JSNation Conference 2025",
        slug: "jsnation-conference-2025",
        location: "Amsterdam, Netherlands",
        date: "2025-06-13",
        time: "10:00 AM",
    },
    {
        image: "/images/event6.png",
        title: "AI & Web Dev Summit 2025",
        slug: "ai-web-dev-summit-2025",
        location: "Tokyo, Japan",
        date: "2025-12-05",
        time: "09:00 AM",
    },
    {
        image: "/images/event-full.png",
        title: "Open Source Summit North America 2026",
        slug: "oss-na-2026",
        location: "Vancouver, Canada",
        date: "2026-06-22",
        time: "8:00 AM",
    }
]

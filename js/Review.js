let reviewList = [{
        id: 1,
        name: "John Shepard",
        job: "Vanguard",
        img: "https://www.pierce.co.uk/images/500x500/0x0-0x0/our-team/john-duckett.jpg",
        text: "Lorem ipsizzle dolor sizzle mofo, my shizz adipiscing elit.",
    },
    {
        id: 2,
        name: "John Duckett",
        job: "Web Developer Writer",
        img: "https://www.pierce.co.uk/images/500x500/0x0-0x0/our-team/john-duckett.jpg",
        text: "Lorem ipsizzle dolor sizzle mofo, my shizz adipiscing elit.",
    },
    {
        id: 3,
        name: "John Duckett",
        job: "Web Developer Writer",
        img: "https://www.pierce.co.uk/images/500x500/0x0-0x0/our-team/john-duckett.jpg",
        text: "Lorem ipsizzle dolor sizzle mofo, my shizz adipiscing elit.",
    },
    {
        id: 4,
        name: "John Duckett",
        job: "Web Developer Writer",
        img: "https://www.pierce.co.uk/images/500x500/0x0-0x0/our-team/john-duckett.jpg",
        text: "Lorem ipsizzle dolor sizzle mofo, my shizz adipiscing elit.",
    },
    {
        id: 5,
        name: "John Duckett",
        job: "Web Developer Writer",
        img: "https://www.pierce.co.uk/images/500x500/0x0-0x0/our-team/john-duckett.jpg",
        text: "Lorem ipsizzle dolor sizzle mofo, my shizz adipiscing elit.",
    },
    {
        id: 6,
        name: "John Duckett",
        job: "Web Developer Writer",
        img: "https://www.pierce.co.uk/images/500x500/0x0-0x0/our-team/john-duckett.jpg",
        text: "Lorem ipsizzle dolor sizzle mofo, my shizz adipiscing elit.",
    },
    {
        id: 7,
        name: "John Duckett",
        job: "Web Developer Writer",
        img: "https://www.pierce.co.uk/images/500x500/0x0-0x0/our-team/john-duckett.jpg",
        text: "Lorem ipsizzle dolor sizzle mofo, my shizz adipiscing elit.",
    },
    {
        id: 8,
        name: "John Duckett",
        job: "Web Developer Writer",
        img: "https://www.pierce.co.uk/images/500x500/0x0-0x0/our-team/john-duckett.jpg",
        text: "Lorem ipsizzle dolor sizzle mofo, my shizz adipiscing elit.",
    },
    {
        id: 9,
        name: "John Duckett",
        job: "Web Developer Writer",
        img: "https://www.pierce.co.uk/images/500x500/0x0-0x0/our-team/john-duckett.jpg",
        text: "Lorem ipsizzle dolor sizzle mofo, my shizz adipiscing elit.",
    },
    {
        id: 10,
        name: "John Duckett",
        job: "Web Developer Writer",
        img: "https://www.pierce.co.uk/images/500x500/0x0-0x0/our-team/john-duckett.jpg",
        text: "Lorem ipsizzle dolor sizzle mofo, my shizz adipiscing elit.",
    }
];

let changeReview = () => {
    for (let i = 0; i < reviewList.length; i++) {
        document.getElementById("author").innerHTML = reviewList.name[currentItem];
        document.getElementById("job").innerHTML = reviewList.job[currentItem];
        document.getElementById("info").innerHTML = reviewList.text[currentItem];
    }
}
window.onload = () => {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("next-btn").addEventListener('click', changeReview);
    })
}
import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'Which NYC borough is the third most populated?',
        answer: 'Manhattan',
    },
    {
        points: 200,
        question:
            'What is the most famous song by Survivor?',
        answer: 'Eye of the Tiger',
    },
    {
        points: 300,
        question:
            'What is the name of the most popular fantastical series released in 1997',
        answer: 'Harry Potter',
    },
    {
        points: 400,
        question: 'In what year was Chipotle founded?',
        answer: '1993',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'What kind of rock is this?',
            imgSrc: 'https://madera.objects.liquidweb.services/photos/16842-half-dome-closeup-from-glacier-point-steve-montalto-hmi-Rectangle-600x400.jpg',
            answer: 'Granite',
        },
        {
            points: 100,
            question:
                'What is this Cafe called?',
            imgSrc: 'https://lh3.googleusercontent.com/p/AF1QipNsmB0ugJeJxYVrBKpRkNkyiEa6cKLamFZ4r0M=s1360-w1360-h1020',
            answer: 'Chaotic Good',
        },
        {
            points: 300,
            question: 'What programming language is the below code?',
            imgSrc: '/programming_language.png',
            answer: 'Javascript',
        },
        {
            points: 400,
            question:
                'Who painted this?',
            imgSrc:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb1tCOwOdOeYcp5iflCvvW95qCqpmNUo-TMIt3ndxzsxzmgmH18iClIIQLPO48ojPg5Rts2AUm9rZBeVPcjnjrjGaLSzCwbipQotY4EhOk3tUoHJjJyZjTqfY5s9MZ5eSkGrrqmom4JXUdHEqE-Ts8E9i-SuFf9xEukJcFBs5NuOhe6ANdODMFYzyV_Q/s16000/Unfinished.jpg",
            answer: 'Keith Haring',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What City is This?',
        imgSrc:
            "https://media.istockphoto.com/id/802893644/photo/aerial-view-of-downtown-miami-florida.jpg?s=612x612&w=0&k=20&c=QwdSYtoeB-9xTvqgbpnM9aCaRf_39rw8bVw7LsszSGg=",
        answer: 'Miami',
    }
]);


const categories = [
    {
        title: "Rohan's Past",
        questions: pastQuestions
    },
    {
        title: "Rohan's Present",
        questions: presentQuestions
    },
    {
        title: "Rohan's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}
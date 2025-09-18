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
                'Which video game is this a photo from?',
            imgSrc: 'https://techcrunch.com/wp-content/uploads/2020/07/Annotation-2020-07-29-145223.jpg',
            answer: 'MSFS 2025',
        },
        {
            points: 100,
            question:
                'What school is this?',
            imgSrc: 'https://www.horacemann.org/uploaded/HoraceMann/Images/Our_School/CampusAerial.jpg',
            answer: 'Horace Mann',
        },
        {
            points: 300,
            question: 'What team was originaly known as the Highlanders?',
            answer: 'The New York Yankess'
        },
        {
            points: 400,
            question:
                'What two instruments was Phil Collins known for paying?',
            answer: 'The Piano and Drums',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What City is this?',
        imgSrc:
            "/miami_photo.jpg",
        answer: 'Miami',
    },
    {
        points: 200,
        question:
            'What car is the make and model of this car?',
        imgSrc: 'https://flavoredtimes.com/wp-content/uploads/2024/12/koenigsegg.jpg',
        answer: 'Koenigsegg Jesko Attack',
    }, 
    {
        points: 300,
        question: 'Which University was founded in 1924 by James Buchanan?',
        answer: 'Duke University'
     },
     {
         points: 400,
         question:
             'Which John Grisham novel was written in 1992?',
        answer: 'The Pelican Brief',
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
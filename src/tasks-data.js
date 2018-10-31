import { pets, people, meal, walk, meds, appointments} from './app-data';



const tasks = [
        {
            id: 'task1',
            category: meal.icon,
            alt: meal.alt,
            note: '',
            assigned: people.marte.name,
            pet: pets.mara.name,
            time: '10:00',
            day: "today",
            repeat: "false",
            completedTask: false,
        },
        {
            id: 'task2',
            category: meds.icon,
            alt: meds.alt,
            note: '',
            assigned: people.frida.name,
            pet: pets.mara.name,
            time: '09:00',
            day: "",
            repeat: "true",
            completedTask: false,
        },
        {
            id: 'task3',
            category: walk.icon,
            alt: walk.alt,
            note: '',
            assigned: people.everyone.name,
            pet: pets.vinnie.name,
            time: '09:15',
            day: "",
            repeat: "true",
            completedTask: false,
        }
    ]


export { tasks };
import { pets, people, meal, walk, meds, appointments} from './app-data';



const tasks = [
        {
            id: 'abc',
            category: meal.icon,
            alt: meal.alt,
            note: '',
            assigned: people.marte.name,
            pet: pets.mara.name,
            time: '',
            repeat: true,
            completedTask: false,
        },
        {
            id: 'def',
            category: meds.icon,
            alt: meds.alt,
            note: '',
            assigned: people.frida.name,
            pet: pets.mara.name,
            time: '',
            repeat: true,
            completedTask: false,
        },
        {
            id: 'ghi',
            category: walk.icon,
            alt: walk.alt,
            note: '',
            assigned: people.everyone.name,
            pet: pets.vinnie.name,
            time: '',
            repeat: true,
            completedTask: false,
        },
        {
            id: 'jkl',
            category: appointments.icon,
            alt: walk.alt,
            note: '',
            assigned: people.everyone.name,
            pet: pets.mara.name,
            time: '',
            repeat: true,
            completedTask: false,
        }
]



export { tasks };
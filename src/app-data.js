const marte =  {
    name: 'Marte',
            lastName: 'Øen Mettenes',
    phone: 97783737,
    email: 'marte.mettenes@gmail.com'
}

const frida = {
    name: 'Frida',
    lastName: 'Øen Mettenes',
    phone: 99221533,
    email: 'frida.97@hotmail.no'
    }

const steffen = {
    name: 'Steffen',
    lastName: 'Mikkelsen Fureli',
    phone: 47350572,
    email: 'steffen.fureli@gmail.com'
    }

    const grete = {
    name: 'Grete',
    lastName: 'Øen',
    phone: 91718180,
    email: ''
}

const tore ={
    name: 'Tore Morten',
    lastName: 'Mettenes',
    phone: 90094804,
    email: ''
    }


const mara = {
    name: 'Mara',
    dob: '24.07.2004',
    breed: 'Podenco Canario',
    gender: 'Tispe',
    ster: true,
    chip: 12345678,
    country: 'Spain',
    kennel: 'Valle Verde Rescue',
    owner: '',
    illness: ['Forkalkninger i rygg og hofte', 'Jursvulster', 'Dårlig tannhelse'],
    note: '',
    img: '',
    walks: [],
    meals: [],
    meds: [],
    appointments: []
}

const vinnie = {
        name: 'Vinnie',
        dob: '08.03.2014',
        breed: 'Korthåret Vorsteh',
        gender: 'Hannhund',
        ster: false,
        chip: 12378678,
        country: 'Norge',
        kennel: 'Istadmyra',
        owner: '',
        illness: [],
        note: '',
        img: '',
        walks: [],
        meals: [],
        meds: [],
        appointments: []
}

const walk = {
        when: '',
        length: '',
        assigned: '',
        recurring: true,
        note: '',
        icon: './img/013-walk.svg',
        alt: 'Footprints, walk icon'
}

const meal = {
        when: '',
        assigned: '',
        recurring: true,
        note: '',
        icon: './img/015-bone.svg',
        alt: 'A dog bone, meals icon'
}

const meds = {
        when: '',
        assigned: '',
        recurring: true,
        note: '',
        icon: './img/006-health.svg',
        alt: 'Medicine jar, medicine icon'
}

const appointments = {
        when: '',
        where: '',
        assigned: '',
        note: '',
        icon: './img/005-document.svg',
        alt: 'Document, appointments icon'
}


const people = {marte, frida, steffen, grete, tore};
const pets = {mara, vinnie};



export { people, pets, walk, meal, meds, appointments };
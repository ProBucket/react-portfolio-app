// import * as func from './functions'

const constant = {
    name: 'Hasan Ahmed Khan',
    title: 'Software Engineer',
    dob: 'November 1991',
    email: 'hasan.khan.pro@gmail.com',
    skype: '',
    github: 'https://github.com/CodingBucket?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/hasan-ahmed-khan-55231b98',
    stackoverflow: 'https://stackoverflow.com/users/5756432/hasan-ahmed-khan'
}

export const infoForLeft = [
    { name: 'Name', value: constant.name },
    { name: 'Birthday', value: constant.dob },
    { name: 'Job', value: constant.title },
    { name: 'Email', value: constant.email },
    { name: 'Skype', value: constant.skype }
];

export const skills = {
    frontend: [
        { name: 'JavaScript', value: 83 },
        { name: 'Angular', value: 80 },
        { name: 'React', value: 85 }
    ],
    backend: [
        { name: 'C#', value: 70 },
        { name: 'ASP.NET MVC WEB API', value: 70 }
    ]
}

export const services = [
    {
        title: 'Backend Development',
        icon: 'fas fa-code',
        details: 'I have been working on backend development using .NET Framework, .NET Core as well as PHP, Laravel etc.'
    },
    {
        title: 'JavaScript',
        icon: 'fab fa-js',
        details: 'I have a proven ability to build any fontend app using modern JavaScript and it\'s latest framework.'
    },
    {
        title: 'React',
        icon: 'fab fa-react',
        details: 'Have strong capability and advanced knowledge on React. Worked on several professional projects.'
    },
    {
        title: 'Angular',
        icon: 'fab fa-angular',
        details: 'I have proficiency in Angular to build professional web app. Built several projects using Angular 4, 5, Material Design etc.'
    }
]

export const timeline = {
    work: [
        {
            title: 'Software Engineer',
            company: 'Bit Mascot (Pvt) Ltd.',
            duration: 'Jul 2017 - Present, 1 yr 1 mos',
            description: [

                'Building backend application and web API using .NET Core, ASP.NET Core, EntityFramework Core, MSSQL and standard design patterns such as UnitOfWork, Repository, Service, CQRS, Mediator, Singleton, Factory etc.',

                'Building frontend web client using Angular (2, 6, 7), ES6 JavaScript, jQuery etc.',

                'Documenting features, technical specifications and infrastructure requirements.'
            ]
        },
        {
            title: 'Junior Software Engineer',
            company: 'Bit Mascot (Pvt) Ltd.',
            duration: 'Aug 2015 - Jun 2017, 1 yr 11 mos',
            description: [

                'Developed 2D, 3D game using Unity3D game engine and C# programming language.',

                'Built varoius games to various platform such as Windows, Android, iOS, OSX using Unity3D game engine, Android Studio, XCode tools.',

            ]
        }
    ],
    education: [
        {
            title: 'University of Asia Pacific',
            degree: 'Bsc in EEE',
            duration: '2012 - 2015'
        },
        {
            title: 'Dhaka Imperial College',
            degree: 'Higher Secondary Certificate Examination',
            duration: '2006 - 2010'
        },
        {
            title: 'Kakoli High School',
            degree: 'Secondary School Certificate (SSC), Science Group',
            duration: '2001 - 2006'
        }
    ]
}

export default constant;
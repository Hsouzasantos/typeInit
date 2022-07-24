enum work {
    Programer,
    Teacher
}

type People = {
    name: string,
    age: number,
    Work: work
}

const Jonh: People = {
    name: `Jonh Clark`,
    age: 36,
    Work: work.Programer
}
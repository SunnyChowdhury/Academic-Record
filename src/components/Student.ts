export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

 export const sampleStudent : Student[] = [
    // id:'First Student',
    // firstName: 'First',
    // lastName: 'Student',
    // email: 'student1@gmail.com',

]

// export const emptyStudent
// {
//     id:'Second Student',
//     firstName: 'Second',
//     lastName: 'Student',
//     email: 'student2@gmail.com',
// },
// {
//     id:'Third Student',
//     firstName: 'Thrid',
//     lastName: 'Student',
//     email: 'student3@gmail.com',
// },


export enum PageEnum {
    list,
    add,
    edit
}

import * as ko from '../library/knockout-latest-patched'; // Contains patch for https://github.com/knockout/knockout/issues/2500 and https://github.com/knockout/knockout/issues/2523
import { Observable, ObservableArray } from '../library/knockout-latest-patched'; 

export default class PeopleViewModel {
    html: Observable<string>;
    people: ObservableArray<Person>;
    selectedPerson: Observable<Person>;
    personChecked: Observable<boolean>;

    constructor() {
        this.html = ko.observable('');  
        this.personChecked = ko.observable(true);
        this.people = ko.observableArray([new Person('Karim', 'Ayachi', 1), new Person('John', 'Doe', 2)]);
        this.selectedPerson = ko.observable(this.people()[0]);
    }

    add = (): void => {
        let newPerson: Person = new Person('---', '---', this.people().length + 1);
        this.people.push(newPerson);
        this.selectedPerson(newPerson); 
    };

    delete = (person: Person): void => {
        this.people.remove(person);
    }
}

class Person {
    id: Observable<number>;
    firstname: Observable<string>;
    lastname: Observable<string>;
    retired: Observable<boolean>;

    constructor(firstname: string, lastname: string, id: number) {
        this.firstname = ko.observable(firstname);
        this.lastname = ko.observable(lastname);
        this.id = ko.observable(id);
        this.retired = ko.observable(false);
    }
}
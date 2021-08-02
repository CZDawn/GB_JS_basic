'use strict';

// ---- Задание № 1.2 ----
/*
 * Сделайте в стиле es5, а затем в стиле es6
 * (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
 * а) конструктор Post, который принимает параметры author, text,
 * date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit,
 * который будет принимать текст и записывать его в свойство text объекта.
 * б) конструктор AttachedPost, который принимает параметры author, text, date.
 * Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код.
 * Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
 * Унаследуйте в объектах типа AttachedPost методы из Post. 
 * Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
 * который будет назначать свойству highlighted значение true.
*/

let CurrentDate = new Date(); // для передачи даты в виде переменной

// -- Решение в стиле es5 --
function Post1(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post1.prototype.edit = function(text) {
    this.text = text;    
}

function AttachedPost1(author, text, date) {
    Post1.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost1.prototype = Object.create(Post1.prototype);
AttachedPost1.prototype.constructor = AttachedPost1;

AttachedPost1.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

let obj1 = new Post1('Alex', 'lorem ipsum', CurrentDate);
obj1.edit('hello world');

let obj2 = new AttachedPost1('Lord', 'be the best', CurrentDate);
obj2.makeTextHighlighted();


// -- Решение в стиле es6 --
class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost2 extends Post2 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let obj1_2 = new Post2('Max', 'power all', CurrentDate);
obj1_2.edit('switch off');

let obj2_2 = new AttachedPost2('Gendalph', 'very grey', CurrentDate);
obj2_2.makeTextHighlighted();


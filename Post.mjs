export class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    publish() {
        return `${this.title} : ${this.content}`;
    }
}
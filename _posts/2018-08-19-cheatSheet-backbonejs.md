---

layout: post
title:  "CheatSheet-Backbonejs"
date:   2018-08-19 22:43:01 -0700
categories: Backbonejs
tags: [Backbonejs]
comments: true
author: Adriana

---


Create Models

{% highlight javascript %}

let Book = Backbone.Model.extend({
    idAttribute: "bookId",
    urlRoot: "/api/books",
    defaults: {
        read: 0
    },
    validate: () => {
        if(!attrs.title){
            return 'Title is required!';
        }
    }
});

let book = new Book({ bookId: 1, title: 'Robinson'});

{% endhighlight %}

Working with Attributes

{% highlight javascript %}
book.set('category', 'Scifi');
let genre = book.get('category');
book.unset('category');
let hasCate = book.has('category');
book.clear();
{% endhighlight %}

Validation
{% highlight javascript %}
let isValid = book.isValid();
let lastError = book.validationError;
{% endhighlight %}

Querying the server

{% highlight javascript %}
book.fetch({
    success: () => {}
    error: () => {}
});

book.save({},
{
    success: () => {}
    error: () => {}
});

book.destroy({
    success: () => {}
    error: () => {}
});
{% endhighlight %}

Handling DOM events

{% highlight javascript %}
let BookView = Backbone.View.extend({
    events: {
        'click .mark': 'onClickMark'
    },

    onClickMark: e => {
        let $tartget = $(e.target);
        ...
    }
});
{% endhighlight %}

Handling model events
{% highlight javascript %}
let BookView = BackBone.View.extend({
    initialize: () => {
        this.model.on('change', this.render, this);
    }
});
{% endhighlight %}

Handling collection events
{% highlight javascript %}
let BookView = Backbone.View.extend({
    initialize: () => {
       this.model.on('add', this.add, this);
    }

    add: model => {
        ...
    }
})
{% endhighlight %}

Templating
{% highlight javascript %}
let BookView = Backbone.View.extend({
    render: () => {
        let source = $('#bookTemplate').html();
        let template = _.template(source);

        this.$el.html(template(this.model.toJSON()));

        return this;

    }
});

<script type='text/html' id='bookTemplate'>
    <%= title %>
    <% if (read > 1000) { %>
    Popular
    <% } %>
</script>
{% endhighlight %}

Creating collections
{% highlight javascript %}
let Books = Backbone.Collection.extend({
    model: Book,
    url: '/api/books'
});

let books = new Books([
    new Book({ title: 'book 1'}),
    new Book({ title: 'book 2'})
]);
{% endhighlight %}

Working with Collections
{% highlight javascript %}
books.add(new Book({...}));
let firstBook = books.at(0)
let bookWithIdC1 = books.get('c1');
books.remove(firstBook);
books.push(new Book({...}));

let lastBook = books.pop();
let scifiBooks = books.where({category: 'scifi'});
let firstScifiBook = books.findWhere({ category: 'scifi'});

let popularBooks = books.filter(book => {
    return book.get('read') > 100;
});
books.each( book => {...});
{% endhighlight %}

Binding and triggering custom events
{% highlight javascript %}
let cat = {
    bit: () => {
        this.trigger('bitting', { mouse: 5})
    }
};
_.extend(cat, Backbone.Events);
cat.on('bitting', e => {
    alert(e.mouse);
});

cat.off('bitting');
{% endhighlight %}

Creating routers
{% highlight javascript %}
let AppRouter = Backbone.Router.extend({
    routes: {
        'bookList': 'showBooks'
    },

    showBooks: () => {
        // get a books from server
        // pass it to view and render the view
    }
});

let router = new AppRouter();

// Tell Backbone to start to monitoring address changes
Back.history.start();
{% endhighlight %}

Route patterns
{% highlight javascript %}

let AppRouter = Backbone.Router.extend({
    routes: {
        'bookList': 'showBooks'
    },

    showBooks: () => {

    }
});

// route with parameters
let AppRouter = Backbone.Router.extend({
    routes: {
        'books/:bookId': showBooks
    },

    showBooks: bookId => {

    }
});


// route with a splat
let AppRouter = Backbone.Router.extend({
    routes: {
        'read/*url': read
    },

    read: url => {

    }
});

{% endhighlight %}

Navigation
{% highlight javascript %}
router.navigate(url, { trigger: true});
{% endhighlight %}


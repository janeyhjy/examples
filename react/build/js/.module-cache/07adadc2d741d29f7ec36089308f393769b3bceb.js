// tutorial1.js
var CommentBox = React.createClass({
  displayName: "CommentBox",

  render: function () {
    return React.createElement(
      "div",
      { className: "commentBox" },
      "Hello, world! I am a CommentBox."
    );
  }
});

// tutorial2.js
var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    return (
      React.createElement("div", {className: "commentList"}, 
        "Hello, world! I am a CommentList."
      )
    );
  }
});

// ReactDOM.render(
//   <CommentList />,
//   document.getElementById('content')
// )

var CommentForm = React.createClass({displayName: "CommentForm",
  render: function() {
    return (
      React.createElement("div", {className: "commentForm"}, 
        "Hello, world! I am a CommentForm."
      )
    );
  }
});

// ReactDOM.render(
//   <CommentForm />,
//   document.getElementById('content')
// )


// tutorial3.js
var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, null), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

// ReactDOM.render(
//   <CommentBox />,
//   document.getElementById('content')
// )

// tutorial4.js
var Comment = React.createClass({displayName: "Comment",
  render: function() {
    return (
      React.createElement("div", {className: "comment"}, 
        JSON.stringify(this.props), 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
        this.props.children
      )
    );
  }
});

var data4 = {author: 'author', children: 'children'};
// ReactDOM.render(
//   <Comment data={data4} />,
//   document.getElementById('content')
// )

// tutorial5.js
var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    return (
      React.createElement("div", {className: "commentList"}, 
        React.createElement(Comment, {author: "Pete Hunt"}, "This is one comment"), 
        React.createElement(Comment, {author: "Jordan Walke"}, "This is *another* comment")
      )
    );
  }
});

// ReactDOM.render(
//   <CommentList/>,
//   document.getElementById('content')
// )

// tutorial6.js
var Comment = React.createClass({displayName: "Comment",
  render: function() {
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
        marked(this.props.children.toString())
      )
    );
  }
});

// tutorial7.js
var Comment = React.createClass({displayName: "Comment",
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
        React.createElement("span", {dangerouslySetInnerHTML: this.rawMarkup()})
      )
    );
  }
});

// tutorial8.js
var data = [
  {id: 1, author: "Pete Hunt1", text: "This is one comment 1"},
  {id: 2, author: "Jordan Walke1", text: "This is *another* comment 2"}
];

// tutorial9.js
var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.props.data}), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

// ReactDOM.render(
//   <CommentBox data={data} />,
//   document.getElementById('content')
// );

// tutorial10.js
var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        React.createElement(Comment, {author: comment.author, key: comment.id}, 
          comment.text
        )
      );
    });//遍历数据渲染
    return (
      React.createElement("div", {className: "commentList"}, 
        commentNodes
      )
    );
  }
});

// ReactDOM.render(
//   <CommentList data={data} />,
//   document.getElementById('content')
// );

// tutorial11.js
// ReactDOM.render(
//   <CommentBox url="/api/comments" data={data}/>,
//   document.getElementById('content')
// );

// tutorial12.js
var CommentBox = React.createClass({displayName: "CommentBox",
  getInitialState: function() {
    return {data: []};//用this.state.data取值
  },
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.state.data}), 
        React.createElement(CommentForm, null)
      )
    );
  }
});
// ReactDOM.render(
//   <CommentBox />,
//   document.getElementById('content')
// );

// tutorial13.js
var CommentBox = React.createClass({displayName: "CommentBox",
  getInitialState: function() {//初始化组件数据
    return {data: []};//this.state是private,当值改变的时候，组件重新渲染
  },
  componentDidMount: function() {//componentDidMount: 在组件第一次渲染成功后自动调用
    console.log('componentDidMount');
    this.setState({data: data});
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data) {
    //     this.setState({data: data});//刷新this.state.data数据
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
  },
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.state.data}), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

// ReactDOM.render(
//   <CommentBox url="/...." />,
//   document.getElementById('content')
// );

// tutorial14.js
var CommentBox = React.createClass({displayName: "CommentBox",
  loadCommentsFromServer: function() {
    console.log('loadCommentsFromServer');
    this.setState({data: data});
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data) {
    //     this.setState({data: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);//定时刷新
  },
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.state.data}), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

// ReactDOM.render(
//   <CommentBox url="/api/comments" pollInterval={2000} />,
//   document.getElementById('content')
// );

// tutorial15.js
var CommentForm = React.createClass({displayName: "CommentForm",
  render: function() {
    return (
      React.createElement("form", {className: "commentForm"}, 
        React.createElement("input", {name: "name", type: "text", placeholder: "Your name"}), 
        React.createElement("input", {name: "say", type: "text", placeholder: "Say something..."}), 
        React.createElement("input", {type: "submit", value: "Post"})
      )
    );
  }
});
// ReactDOM.render(
//   <CommentForm />,
//   document.getElementById('content')
// );

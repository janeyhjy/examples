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
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

// ReactDOM.render(
//   <CommentList />,
//   document.getElementById('content')
// )

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

// ReactDOM.render(
//   <CommentForm />,
//   document.getElementById('content')
// )


// tutorial3.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

// ReactDOM.render(
//   <CommentBox />,
//   document.getElementById('content')
// )

// tutorial4.js
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        {JSON.stringify(this.props)}
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var data4 = {author: 'author', children: 'children'};
// ReactDOM.render(
//   <Comment data={data4} />,
//   document.getElementById('content')
// )

// tutorial5.js
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

// ReactDOM.render(
//   <CommentList/>,
//   document.getElementById('content')
// )

// tutorial6.js
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {marked(this.props.children.toString())}
      </div>
    );
  }
});

// tutorial7.js
var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

// tutorial8.js
var data = [
  {id: 1, author: "Pete Hunt1", text: "This is one comment 1"},
  {id: 2, author: "Jordan Walke1", text: "This is *another* comment 2"}
];

// tutorial9.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

// ReactDOM.render(
//   <CommentBox data={data} />,
//   document.getElementById('content')
// );

// tutorial10.js
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });//遍历数据渲染
    return (
      <div className="commentList">
        {commentNodes}
      </div>
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
var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};//用this.state.data取值
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});
// ReactDOM.render(
//   <CommentBox />,
//   document.getElementById('content')
// );

// tutorial13.js
var CommentBox = React.createClass({
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
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

// ReactDOM.render(
//   <CommentBox url="/...." />,
//   document.getElementById('content')
// );

// tutorial14.js
var CommentBox = React.createClass({
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
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

// ReactDOM.render(
//   <CommentBox url="/api/comments" pollInterval={2000} />,
//   document.getElementById('content')
// );

// tutorial15.js
var CommentForm = React.createClass({
  render: function() {
    return (
      <form className="commentForm">
        <input name="name" type="text" placeholder="Your name" />
        <input name="say" type="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
// ReactDOM.render(
//   <CommentForm />,
//   document.getElementById('content')
// );

// tutorial16.js
var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
    console.log('handleAuthorChange');
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
    console.log('handleAuthorChange');
  },
  render: function() {
    return (
      <form className="commentForm">
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
        <div>
          <p>Author: {this.state.author}</p>
          <p>Text: {this.state.text}</p>
        </div>
      </form>
    );
  }
});

// ReactDOM.render(
//   <CommentForm />,
//   document.getElementById('content')
// );

// tutorial17.js
var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {//form submit handler
    console.log('handleSubmit');
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    // TODO: send request to the server
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          required
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
// ReactDOM.render(
//   <CommentForm />,
//   document.getElementById('content')
// );

// tutorial18.js
var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    console.log('loadCommentsFromServer');
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
  handleCommentSubmit: function(comment) {
    console.log('handleCommentSubmit', comment);
    // TODO: submit to the server and refresh the list
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});
// ReactDOM.render(
//   <CommentBox pollInterval="2000" />,
//   document.getElementById('content')
// );

// tutorial19.js
var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
ReactDOM.render(
  <CommentForm pollInterval="2000" />,
  document.getElementById('content')
);

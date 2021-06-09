import React, { ChangeEvent, FormEvent, FormEventHandler } from 'react';
import './App.css';



export class PostingBody extends React.Component {
    render() {
      return(
        <div className="postingColumn">
          <div className="postingBoard">
            <ImageUpload></ImageUpload>
            <PostPage></PostPage>
          </div>
          <div className="communityBoard">
            <div>
              <h2>About the Community</h2>
              <p>To put it simply, this is a sauntuary for Ro-Sham-Bo enthusiasts to share their love for the historic, global pastime known as Rock, Paper, Scissors. Since everyone has got to have played this game once in their lifetime, this is a wonderful community filled with all kinds of demographics: old, young, male, or female. To those not enthusiasts yet, we hope that this forum influences you to become one. Otherwise, just have fun here.</p>
            </div>
          </div>
        </div>
      );
    }
}
  
  
  
interface Post {
    content: string
}
  
interface PostPageState {
    posts: Post[];
}
   
class PostPage extends React.Component<{}, PostPageState,Post> {
    constructor(props:Post) {
      super(props);
      this.state = {
        posts: [{content: "existing post"}],
      };
    }
    
    
    submitPost(event:FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const submittedContent = event.currentTarget.contentField.value;
      this.setState({
        posts: [...this.state.posts, {content: submittedContent}],
      });
      event.currentTarget.contentField.value = '';
    }
   
    render() {
      return (
        <div className="App">
          <h1>Sample Post page:</h1>
          <form onSubmit={e => this.submitPost(e)}>
            <input name="contentField" type="text" />
            <button type="submit">Submit</button>
          </form>
          {this.state.posts.map(post => <p>{post.content}</p>)}
        </div>
      );
    }
  }
  
interface ImageUploadState {
    imageSrc: string;
}
  
class ImageUpload extends React.Component<{}, ImageUploadState> {
    reader = new FileReader();
  
    constructor({}) {
      super({});
      this.state = {imageSrc: ""}
      this.reader.onload = this.readerOnLoad.bind(this);
    }
  
    readerOnLoad(event: ProgressEvent<FileReader>) {
      if (event && event.target && event.target.result) {
        this.setState({imageSrc: event.target.result as string});
      }
    }
  
    handlePictureUpload(event: ChangeEvent<HTMLInputElement>) {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files.item(0)!;
        this.reader.readAsDataURL(file);
      }
    }
  
    render() {
      return (
        <div>
          <input type="file" accept="image/*" onChange={(event) => this.handlePictureUpload(event)} multiple = {false} />
          <img src = {this.state.imageSrc}></img>
        </div>
      );
    }
}
import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';

class App extends Component {
  static defaultProps = {
    newBookTitle: 'Add New Book',
    newBookOkButton: 'Add',
    editBookTitle: 'Edit Existing Book',
    editBookOkButton: 'Modify'
  };
  constructor(props) {
    super(props);
    console.log('constructor is executing...');
    this.state = {
      books: [],
      bookObj: { id: '', title: '', rating: '' },
      bookModalIsOpen: false,
      bookModalVal: { title: '', okButton: '', idDisabled: false }
    };
  }
  componentDidMount() {
    console.log('componentDidMount is executing...');
    this.BookGETapi();
  }
  ToggleBookModal() {
    this.setState({ newBookModalIsOpen: !this.state.newBookModalIsOpen }, () => {
      console.log("BookModalIsOpen", this.state.bookModalIsOpen);
      if (this.state.bookModalIsOpen === false) {
        this.setState({
          "bookObj": { "id": "", "title": "", "rating": "" },
          "bookModalVal": { "title": this.props.newBookTitle, "okButton": this.props.newBookOkButton, "idDisabled": false }
        }, () => {
          console.log("BookObj", this.state.bookObj);
          console.log("bookModalVal", this.state.bookModalVal);
        });
      }
    });
  }
  BookFormChange(event) {
    let book = this.state.bookObj;
    book[event.target.name] = event.target.value;
    this.setState({ "bookObj": { "id": book.id, "title": book.title, "rating": book.rating } }, () => {
      console.log("BookObj", this.state.bookObj);
    });
  }
  BookEdit(id) {
    let book = this.state.books.find(obj => obj.id === id);
    this.setState({
      "bookModalVal": { "title": this.props.editBookTitle, "okButton": this.props.editBookOkButton, "idDisabled": true },
      "bookObj": { "id": book.id, "title": book.title, "rating": book.rating },
      "newBookModalIsOpen": !this.state.newBookModalIsOpen
    }, () => {
      console.log("bookModalVal", this.state.bookModalVal);
      console.log("BookObj", this.state.bookObj);
      console.log("newBookModalIsOpen", this.state.newBookModalIsOpen);
    });
  }
  BookGETapi() {
    axios.get("https://react-books-app.firebaseio.com/books.json").then((res) => {
      let bookJSON = res.data;
      console.log("BookGETapiData", bookJSON);
      let bookArr = [];
      if (Array.isArray(bookJSON)) {
        bookJSON.forEach((book) => {
          if (book != null) {
            if (book.hasOwnProperty('id') && book.hasOwnProperty('title') && book.hasOwnProperty('rating')) {
              bookArr.push(book);
            }
          }
        })
      }
      this.setState({ "books": bookArr }, () => {
        console.log("Books", this.state.books);
      });
    });
  }
  BookPUTapi() {
    let url = "https://react-books-app.firebaseio.com/books/" + this.state.bookObj.id + ".json";
    axios.put(url, this.state.bookObj).then((res) => {
      console.log("BookPUTapiData", res.data);
      this.BookGETapi();
      this.ToggleBookModal();
    })
  }
  BookDELETEapi(id) {
    let url = "https://react-books-app.firebaseio.com/books/" + id + ".json";
    axios.delete(url).then((res) => {
      console.log("BookDELETEapiData", res.data);
      this.BookGETapi();
    });
  }
  render() {
    console.log('render is executing...');
    let books = this.state.books.map((book) => {
      return (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.rating}</td>
          <td>
            <Button color="success" size="sm" className="mr-2" onClick={this.BookEdit.bind(this, book.id)}>Edit</Button>
            <Button color="danger" size="sm" onClick={this.BookDELETEapi.bind(this, book.id)}>Delete</Button>
          </td>
        </tr>
      );
    })
    return (
      <div className="container">
        <h1>React Firebase Books App</h1>
        <Button color="success" className="my-3" onClick={this.ToggleBookModal.bind(this)}>Add New Book</Button>
        <Modal isOpen={this.state.newBookModalIsOpen} toggle={this.ToggleBookModal.bind(this)}>
          <ModalHeader toggle={this.ToggleBookModal.bind(this)}>{this.state.bookModalVal.title}</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="id">ID</Label>
                <Input type="text" name="id" id="id" disabled={this.state.bookModalVal.idDisabled} value={this.state.bookObj.id} onChange={this.BookFormChange.bind(this)} />
                <Label for="rating">Rating</Label>
                <Input type="text" name="rating" id="rating" value={this.state.bookObj.rating} onChange={this.BookFormChange.bind(this)} />
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" value={this.state.bookObj.title} onChange={this.BookFormChange.bind(this)} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" className="mr-2" onClick={this.BookPUTapi.bind(this)}>{this.state.bookModalVal.okButton}</Button>
            <Button color="secondary" onClick={this.ToggleBookModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;

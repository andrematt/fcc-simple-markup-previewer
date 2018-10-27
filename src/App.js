import React, { Component } from 'react';
import './App.css';
import Marked from 'marked';
import { Grid, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';

Marked.setOptions({
  renderer: new Marked.Renderer(),
  //highlight: function(code) {
  //  return require('highlight.js').highlightAuto(code).value;
  //},
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

const preview = `
# This is a Heading!

## And this is a sub-heading

Made for [markup previewer challenge](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer) 
  
inline code: \`<div></div>\`

\`\`\`
// code block:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

- main list element
    - subelement
    - another sub
        - nested subelement!
- another main element

> Block Quote!

![React Logo w/ Text](https://goo.gl/Umyytc)

  
**That's all!**

`;

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        input:preview
  }
   this.manageInput = this.manageInput.bind(this);
  }

  manageInput(element) {
    this.setState({
  input: element.target.value
    });
  }


  manageOutput(input){
  return Marked(input);
  }


  render() {
    return (
    <div className="App">
        <Navbar />
        <Grid fluid>
            <Row>
            <Col lg={1} />
                <Col lg={10}>
                    <Editor text={this.state.input} manageInput={this.manageInput} />
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Previewer editedText={this.manageOutput(this.state.input)} />       
                </Col>
            </Row>
        </Grid>
    </div>
    );
  }
}

class Navbar extends Component {
    render(){
        return(
            <div className='navbar'>
            <Grid>
            <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
            <div className = 'navbar-left'> 
                <a href="https://www.freecodecamp.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFreeCodeCamp}/></a>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faReact}/></a>
                <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFontAwesome}/></a>
                <a href="https://fortawesome.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFortAwesome}/></a>
            <FontAwesomeIcon icon={faCoffee}/>
            </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
            <div className = 'navbar-center'>
                <p className='main-title'>Markup Editor</p>
                <p className="subtitle"><a href='https://github.com/markedjs/marked' target='_blank' rel="noopener noreferrer">marked library</a></p>
            </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
            <div className='navbar-right'>
                <button value='help' ><a href="https://marked.js.org/#/README.md#README.md" target="BLANK" rel="noopener noreferrer">Help</a></button>
            </div>
            </Col>
            </Row>
            </Grid>
        </div>
        )
    }

}


class Editor extends Component {
  render(){
    return(
        <div className="editor-container">
        <div className="editor-bar">Editor</div>
        <textarea className="editor" id="editor" name="Editor" value={this.props.text} onChange={this.props.manageInput}>
        </textarea>
        </div>

      )
  }
}

class Previewer extends Component {
  render(){
    return(
        <div className="preview-container">
        <div className="preview-bar">Preview</div>
        <div className="preview" id="preview" name="Previewer" dangerouslySetInnerHTML={{__html: this.props.editedText}}>
        </div>
        </div>
      )
  }
}


export default App;

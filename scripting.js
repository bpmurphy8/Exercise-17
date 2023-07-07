

let root = ReactDOM.createRoot(document.getElementById('mydiv'));


const FunctionalGreetings = ({name}) => {
  return (
    <div>
      <h1>Hello from functional component, {name}!</h1>
    </div>
  );
};

class ClassGreetings extends React.Component {
  render() {
    const {name} = this.props;
    return (
      <div>
        <h1>Hello from class component, {name}!</h1>
      </div>
    );
  }
}

const ParentComponent = () => {
  return (
    <div>
      <FunctionalGreetings name="John" />
      <ClassGreetings name="Jane" />
    </div>
  );
};


root.render(<ParentComponent />);


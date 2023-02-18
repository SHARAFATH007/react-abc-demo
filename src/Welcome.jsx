import { Counter } from "./Counter";

function Welcome({ pic, name }) {
  // const {pic , name} = props;
  return (
    <div className="user-container">
      <img className="user-pic" src={pic} alt={name} />
      <h1>
        Hi ,<span class="name">{name}😍</span>
      </h1>
      <Counter />
    </div>
  );
}

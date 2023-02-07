import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Welcome
        name="mohammed"
        pic="https://1fid.com/wp-content/uploads/2022/07/aesthetic-profile-picture-2-1024x1024.jpg"
      />
      <Welcome
        name="aashik"
        pic="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <Welcome
        name="musab"
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
      />
    </div>
  );
}
function Welcome(props) {
  const name = props.name;
  console.log(props.name);
  console.log(name);
  return (
    <div>
      <img className="user-pic" src={props.pic} alt={props.name} />
      <h1>
        Hi🤞, <span class="name">{name}😍</span>
      </h1>
    </div>
  );
}

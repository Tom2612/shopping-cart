import '../styles/HomeStyles.css';

export default function Home() {
    return (
      <div className='home--container'>
        <h2 className="home--title">Home</h2>
        <h3>Welcome!</h3>
        <p>This is a project made to practice React Router alongside React test-driven development principles. I hope you enjoy navigating this small app.</p>
        <img src="https://images.unsplash.com/photo-1667845210425-5f805be2f355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="random-image"/>
      </div>
    );
  }
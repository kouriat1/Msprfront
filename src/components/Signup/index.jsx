import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

// const Signup = () => {
// 	const [data, setData] = useState({
// 		firstName: "",
// 		lastName: "",
// 		city:"",
// 		phone:"",
// 		email: "",
// 		password: "",
// 	});

function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [telephone, setPhone] = useState('');
	const [ville, setVille] = useState('');
	const [nom, SetNom] = useState('');
	const [prenom, SetPrenom] = useState('');



	

const [error, setError] = useState("");
	const navigate = useNavigate();


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		  const response = await axios.post("http://localhost:3005/Auth/signup", {
			email,
			password,
			telephone,
			ville,
			nom,
			prenom,

		  });
		  const token = response.data.token;
		  localStorage.setItem('token', token);
		  // rediriger vers la page d'accueil après la connexion
		//   window.location.href = '/accueil';
		alert("user Added")
		} catch (error) {
		  alert(error)
		  console.error(error);
		}
	  };

	return (
		console.log(email,password,ville),
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							value={prenom}
							onChange={(e) => SetPrenom(e.target.value)}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={(e) => SetNom(e.target.value)}
							value={nom}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="City"
							name="city"
							onChange={(e) => setVille(e.target.value)}
							value={ville}
							required
							className={styles.input}
						/>
						<input
							type="tel"
							placeholder="Phone Number"
							name="phone"
							onChange={(e) => setPhone(e.target.value)}
							value={telephone}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
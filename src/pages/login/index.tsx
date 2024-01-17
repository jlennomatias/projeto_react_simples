import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const Login = () => {
	const history = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClick = () => {
		console.log(email);
		console.log(password);

		history("/home");
	}

	return (
		<div>
			<form>
				<label>
					<span>Email</span>
					<input value={email} onChange={e => setEmail(e.target.value)} />
				</label>
				<label>
					<span>Password</span>
					<input value={password} onChange={e => setPassword(e.target.value)} />
				</label>
				Login
				<button onClick={handleClick}>Entrar</button>
			</form>
		</div>

	)
}
import Header from "../Header/Header.tsx";
import { Outlet } from "react-router";
import classes from "./mainLayout.module.css"

const currentYear = new Date().getFullYear();

const MainLayout = () => {
	return <main className={classes.main}>
		<Header></Header>
		<Outlet />
		<footer>

			<p className="footer-text">  &copy; {currentYear} File-Uploader			</p>		</footer>
	</main>
}

export default MainLayout

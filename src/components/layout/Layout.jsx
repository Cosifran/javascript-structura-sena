//import components
import ButtonAppBar from "./AppBar/AppBar";
import TemporaryDrawer from "./Drawer/Drawer";

export default function Layout(props) {
  return (
    <>
      <div className="container">
        <ButtonAppBar />
        <TemporaryDrawer />
        {props.children}
      </div>
    </>
  );
}

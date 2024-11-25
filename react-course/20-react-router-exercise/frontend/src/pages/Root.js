import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout(){
  const navigation = useNavigation(); // Is an object

  // navigation.state === idle, loading or submitting

  return <>
    <MainNavigation/>
    <main>
      {navigation.state === 'loading' && <p>Loading ...</p>}
      <Outlet/>
    </main>
  </>
}

export default RootLayout;
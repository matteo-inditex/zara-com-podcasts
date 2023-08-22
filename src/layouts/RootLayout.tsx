import { Outlet } from "react-router-dom";

interface Props {
}
const RootLayout = ({ }: Props) => {
    return <div>
        <h1>Podcaster</h1>
        <Outlet />
    </div>
}

export default RootLayout;


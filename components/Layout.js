import Header from "./Header";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;

/* Method 1
const layout = Page => {
    return () => (
        <div style={layoutStyle}>
        <Header />
        <Page />
    </div>
    )
};

export default layout;
*/

/* Method 2
const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.content}
    </div>
);

export default Layout;
*/
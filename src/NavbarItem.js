function NavbarItem(props) {
    return (
        <div style={{ "height": "44px", "width": "120px"}}>
            <div style={{ "display": "flex", "justifyContent": "space-around", "paddingTop": "10px" }}>
                <img src={props.icon} style={{ "height": "20px" }} />
                <span>{props.name}</span>
            </div>
        </div>
    );
}

export default NavbarItem;
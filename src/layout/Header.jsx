export default function Header({ tabName, setTabName, modalOpen, setModalOpen }) {
    const navBarButtonStyle = {
        background: 'transparent',
        color: '#ffffff42',
        border: 'none',
        marginLeft: '5px',
    }
    return <header>
        <span>
            Task Forge
            {tabName === 'Table' ? <button style={navBarButtonStyle} onClick={() => setTabName("Board")} disabled={modalOpen ? true : false}>Board View</button> :
                <button style={navBarButtonStyle} onClick={() => setTabName("Table")} disabled={modalOpen ? true : false}>Table View</button>}
        </span>
        <button onClick={() => setModalOpen('add')} disabled={modalOpen ? true : false}>{modalOpen ? "Close" : "Add Task"}</button>
    </header>
}
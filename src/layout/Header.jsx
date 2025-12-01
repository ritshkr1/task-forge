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
            <button
                className={tabName === 'Dashboard' ? 'tab-button-active' : 'tab-button'}
                onClick={() => setTabName("Dashboard")}
                disabled={modalOpen ? true : false}
            >
                Dashboard
            </button>
            <button
                className={tabName === 'Board' ? 'tab-button-active' : 'tab-button'}
                onClick={() => setTabName("Board")}
                disabled={modalOpen ? true : false}
            >
                Board
            </button>
            <button
                className={tabName === 'Table' ? 'tab-button-active' : 'tab-button'}
                onClick={() => setTabName("Table")}
                disabled={modalOpen ? true : false}
            >
                Table
            </button>
        </span>
        <button onClick={() => setModalOpen('add')} disabled={modalOpen ? true : false}>{modalOpen ? "Close" : "Add Task"}</button>
    </header>
}
export default function Header({ tabName, setTabName, setModalOpen }) {

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
                
            >
                Dashboard
            </button>
            <button
                className={tabName === 'Board' ? 'tab-button-active' : 'tab-button'}
                onClick={() => setTabName("Board")}
                
            >
                Board
            </button>
            <button
                className={tabName === 'Table' ? 'tab-button-active' : 'tab-button'}
                onClick={() => setTabName("Table")}
                
            >
                Table
            </button>
        </span>
        <button onClick={() => setModalOpen('add')} >Add Task</button>
    </header>
}
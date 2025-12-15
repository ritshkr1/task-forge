export const applyFilters = (tasks, activeFilter) => {
    const filtered = tasks.filter((task) => task[activeFilter.field].toLowerCase().includes(activeFilter.value))
    return [...filtered]
}

export const handleSort = (tasks, activeSort) => {

    const sortedTasks = [...tasks].sort((a, b) => {
        if (a[activeSort.key] < b[activeSort.key]) return activeSort.direction === "asc" ? -1 : 1;
        if (a[activeSort.key] > b[activeSort.key]) return activeSort.direction === "asc" ? 1 : -1;
        return 0;
    });
    return sortedTasks
};
const empolyees = [
    { name: 'Bala', department: 'Dev' },
    { name: 'Sumanth', department: 'HR' },
    { name: 'Kishore', department: 'Dev' },
    { name: 'Risi', department: 'Sales' },
    { name: 'Karem', department: 'Sales' },
    { name: 'Shara', department: 'Dev' }
]

const dev = empolyees.filter((emp) => {
    return emp.department === 'Dev'
})

console.log(dev);
const onChange = ({ target }, data) => {

    const { name, value } = target

    data[name] = value
}

export default onChange
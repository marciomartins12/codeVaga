const ExibeItem = ({ item }) => {
    return (
        <div>
            {
                item.itens.map((e) => {
                    return (
                        <div>
                            <h2>{e.nome}</h2>
                            <button>editar Item</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ExibeItem;
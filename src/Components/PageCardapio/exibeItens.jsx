import Style from "./pageCardapio.module.css";
const ExibeItem = ({ item }) => {
    return (
        <>
            {
                item.itens.map((e, i) => {
                    return (
                        <div
                            className={Style.itemCardapio}
                            key={i}>
                            <div>
                                <img src={e.imgItem} alt="" />
                                <h2>{e.nome}</h2>
                            </div>
                            <button><img src="/public/assets/icons/editor.png" alt="" /></button>
                        </div>
                    )
                })
            }
        </>
    )
}
export default ExibeItem;
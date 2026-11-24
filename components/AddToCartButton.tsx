interface AddToCartButtonProps {
    onAdd: () => void
}


export default function AddToCartButton({
    onAdd
}: AddToCartButtonProps) {

    return (
        <button
        type="button"
        onClick={ onAdd}
        className="rounded bg-green-700 px-4 py-2 text-white">
            Add to Cart
        </button>
    )
}
export function ToCancelButton({id}) {
    return (
        <button data-invitation={id} style={{backgroundColor:'var(--secondary-color)',borderRadius:'20%'}}>
            <svg fill="var(--primary-color)" width="20px" height="20px" viewBox="-28 0 512 512"  ><title>cancel</title><path d="M64 388L196 256 64 124 96 92 228 224 360 92 392 124 260 256 392 388 360 420 228 288 96 420 64 388Z" />
            </svg>
    </button>
    )
}
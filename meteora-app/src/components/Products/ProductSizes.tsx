export function ProductSizes({ productSize }: { productSize: string[] }) {
  return (
    <div>
      <div>
        <h6 className="font-bold text-xs+1 pb-4">Tamanho:</h6>
      </div>

      <div className="flex gap-4 pb-4">
        {productSize.map((size) => (
          <div key={size}>
            <label className="flex flex-col gap-2 text-xs+1">
              <input type="radio" name="size" value={size} />
              {size}
            </label>
          </div>
        ))}

        {/* <div>
          <label className="flex flex-col gap-2 text-xs+1">
            <input type="radio" name="size" value="p" />P
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-2 text-xs+1">
            <input type="radio" name="size" value="pp" />
            PP
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-2 text-xs+1">
            <input type="radio" name="size" value="m" />M
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-2 text-xs+1">
            <input type="radio" name="size" value="g" />G
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-2 text-xs+1">
            <input type="radio" name="size" value="gg" />
            GG
          </label>
        </div> */}
      </div>
    </div>
  );
}

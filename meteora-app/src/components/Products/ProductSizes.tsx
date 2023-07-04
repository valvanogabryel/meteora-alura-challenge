export function ProductSizes({ productSize }: { productSize: string[] }) {
  const isOnlySize = productSize.length === 1 && productSize[0] === "Único";

  return (
    <div>
      <div>
        <h6 className="font-bold text-xs+1 pb-4">Tamanho:</h6>
      </div>

      <div className="flex gap-4 pb-4 select-none">
        {productSize.map((size) =>
          isOnlySize ? (
            <div key={size}>
              <label className="flex flex-col gap-2 text-xs+1">
                <input type="radio" name="size" value={size} checked readOnly />
                {size}
              </label>
            </div>
          ) : (
            <div key={size}>
              <label className="flex flex-col gap-2 text-xs+1">
                <input type="radio" name="size" value={size} />
                {size}
              </label>
            </div>
          )
        )}
      </div>
    </div>
  );
}

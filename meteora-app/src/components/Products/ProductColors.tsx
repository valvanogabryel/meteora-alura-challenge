export function ProductColors({ colors }: { colors: string[] }) {
  return (
    <div className="py-4">
      <div>
        <h6 className="font-bold text-xs+1 pb-4">Cores:</h6>
      </div>
      <div className="flex border-b pb-4 gap-4">
        {colors.map((color) => (
          <div key={color}>
            <label className="flex flex-col gap-2 text-xs+1">
              <input type="radio" name="color" value={color} />
              {color}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

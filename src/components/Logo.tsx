export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <span className="text-white text-xl font-bold">M</span>
      </div>
      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Martik.one
      </span>
    </div>
  );
}
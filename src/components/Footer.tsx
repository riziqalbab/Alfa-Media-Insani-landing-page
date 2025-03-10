
export default function Footer() {
  return (
    <footer className="bg-[#E5F0EC] px-4 py-12 w-full mt-10">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h2 className="text-2xl font-medium mb-2">DIGITAL MADRASAH</h2>
          <p className="text-gray-700 max-w-2xl">
            PLATFORM BARU EDUKASI DIGITAL
          </p>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <div className="text-sm text-gray-600">
            <div className="mb-1">Copyright &copy; {new Date().getFullYear()} DIGITAL MADRASAH</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

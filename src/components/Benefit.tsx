
import { Card, CardContent } from "@/components/ui/card"

export default function Benefit() {
  return (
    <div className="w-full bg-gradient-to-br from-sky-50 to-blue-100 py-16 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200 rounded-full opacity-30 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute top-10 right-10 flex gap-2 flex-wrap max-w-[100px]">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-sky-700 opacity-60"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Buku untuk semua</h2>
          <p className="text-gray-600">Manfaat buku berdasarkan peran</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Siswa Card */}
          <Card className="bg-white border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-indigo-200 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Santri</h3>
                  <p className="text-gray-600">Belajar lebih asik bersama Buku</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guru Card */}
          <Card className="bg-white border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-orange-200 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Guru</h3>
                  <p className="text-gray-600">Dapatkan akses buku untuk bahan ajar di kelas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Orang Tua Card */}
          <Card className="bg-white border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-purple-200 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Orang Tua</h3>
                  <p className="text-gray-600">Bantu tingkatkan proses belajar anak</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


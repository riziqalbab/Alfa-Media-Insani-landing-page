/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <div className="">
      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Smart Equipment
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <Card className="border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="w-full pb-10  rounded-lg flex items-center justify-center mb-4">
                  <img
                    className="rounded-sm h-50 w-full object-cover"
                    src="https://digitalmadrasah.id/assets/images/screentouch.png"
                    alt=""
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Alat Pengajaran</h3>
                <p className="text-muted-foreground text-sm">
                  Papan Tulis Pintar, komputer, peralatan Lab, peralatan
                  sekolah, dll
                </p>
              </CardContent>
            </Card>
            <Card className="border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="w-full pb-10  rounded-lg flex items-center justify-center mb-4">
                  <img
                    className="rounded-sm h-50 w-full object-cover"
                    src="https://digitalmadrasah.id/assets/images/kelashijau.png"
                    alt=""
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Ujian dan Evaluasi</h3>
                <p className="text-muted-foreground text-sm">
                  Pengadaan materi ujian dan evaluasi secara mandiri
                </p>
              </CardContent>
            </Card>
            <Card className="border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="w-full pb-10  rounded-lg flex items-center justify-center mb-4">
                  <img
                    className="rounded-sm h-50 w-full object-cover"
                    src="https://digitalmadrasah.id/assets/images/postingnilai.png"
                    alt=""
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Reportasi</h3>
                <p className="text-muted-foreground text-sm">
                  Pelaporan hasil belajar santri secara online
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}

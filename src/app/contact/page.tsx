import { Card, CardContent } from "@/components/ui/card"
import GetCompany from "@/data/GetCompany";
import { MapPin, Mail, Phone, Clock, Users } from "lucide-react"

export const metadata = {
  title: "Kontak Kami | Alfa Media Insani",
  description: "Hubungi Penerbit Alfa Media Insani untuk pertanyaan, kerjasama, atau informasi lainnya.",
}

export default async function ContactPage() {

    const company: CompanyType = await GetCompany();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Hubungi Kami</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Kami siap membantu Anda. Silakan hubungi kami untuk pertanyaan, kerjasama, atau informasi lainnya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Informasi Kontak</h2>
            <div className="grid gap-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Alamat</h3>
                    <p className="text-muted-foreground mt-1">
                      {company.Address}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground mt-1">{company.Email}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Telepon</h3>
                    <p className="text-muted-foreground mt-1">{company.Phone}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          

          <div>
            <h2 className="text-2xl font-semibold mb-6">Tentang Kami</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Alfa Media Insani adalah penerbitan buku ajar, buku referensi, buku monograf, buku umum, jurnal
                  penelitian ilmiah hingga proceeding dalam bentuk cetak maupun E-Book.
                </p>
                <p className="text-muted-foreground">
                  Dalam meningkatkan mutu produksi, Penerbit Alfa Media Insani membangun kerjasama intensif dan
                  komunikatif guna pembangunan sumberdaya manusia yang berkualitas, kompeten, dan profesional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}


import { TestimonialCard } from "./TestimonialCard";

function Testimoni() {
  return (
    <section className="py-16 w-full flex items-center justify-center">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apa Kata Mereka</h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 max-w-2xl">
              Pendapat dari para pengguna buku dan layanan Penerbit Alfa Media Insani.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              content="Buku-buku dari Alfa Media Insani sangat membantu saya dalam mengajar di Madrasah Ibtidaiyah. Materinya lengkap dan sesuai dengan kurikulum terbaru."
              name="Ahmad"
              role="Guru MI"
              imageSrc="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              content="Sebagai kepala sekolah, saya sangat merekomendasikan buku-buku dari Alfa Media Insani untuk digunakan di madrasah. Kualitasnya sangat baik."
              name="Siti"
              role="Kepala MTs"
              imageSrc="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              content="Jurnal ilmiah yang diterbitkan oleh Alfa Media Insani sangat membantu penelitian saya. Referensinya lengkap dan up to date."
              name="Mahfud"
              role="Dosen PTAI"
              imageSrc="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

  );
}

export default Testimoni;

/*
1. Buat conditional IF .. ELSE IF yang menggambarkan
divisi dan tugas divisi pada STARTUP. (CEO, CTO, HR, PROGRAMMER)
Contoh: Jika saya sebagai HR maka,
tugas saya adalah melakukan rekrutmen untuk calon pegawai baru
*/

let jabatan = "HR"

if(jabatan == "CEO") {
    console.log("Jika saya sebagai CEO, tugas saya adalah...")
}else if(jabatan == "CTO") {
    console.log("Jika saya sebagai CTO, maka tugas saya adalah...")
}else if(jabatan == "HR") {
    console.log("Jika saya sebagai HR, maka tugas saya adalah...")
}else if(jabatan == "PROGRAMMER") {
    console.log("Jika saya adalah PROGRAMMER, maka tugas saya adalah...")
}

/*
2. Buat conditional untuk membandingkan 2 buah nilai.
Tampilkan apakah salah satu nilai misal a lebih besar dari b, 
a lebih kecil dari b, dan a sama dengan b.
*/

let nilaiA = 3
let nilaiB = 2

if(nilaiA > nilaiB) {
    console.log("Nilai A lebih besar daripada nilai B")
}else if(nilaiA < nilaiB) {
    console.log("Nilai B lebih besar daripada nilai A")
}else if(nilaiA = nilaiB) {
    console.log("Nilai A sama dengan nilai B")
}

/*
3. Gunakan switch case untuk mengetahui
nama hari berdasarkan angka.
Hari minggu dimulai dari angka 1 dan seterusnya
*/

let angka = 0

switch(angka){
    case 1:
        console.log("Ini hari minggu")
        break;
        case 2:
            console.log("Ini hari senin")
            break;
            case 3:
                console.log("Ini hari selasa")
                break;
                case 4:
                    console.log("Ini hari rabu")
                    break;
                    case 5:
                        console.log("Ini hari kamis")
                        break;
                        case 6:
                            console.log("Ini hari jumat")
                            break;
                            case 7:
                                console.log("Ini hari sabtu")
                                break;
                                default:
                                    console.log("Hari tidak ditemukan")

}

/*
4. Gunakan switch case untuk membuat sebuah game sederhana.
UP -> Karakter berjalan keatas
RIGHT -> Karakter berjalan kekanan
BOTTOM -> Karakter berjalan kebawah
LEFT -> Karakter berjalan kekiri
*/

let arah = "P"

switch(arah) {
    case "UP":
        console.log("Naik")
        break;
        case "DOWN":
            console.log("Turun")
            break;
            case "LEFT":
                console.log("Kiri")
                break;
                case "RIGHT":
                    console.log("Kanan")
                    break;
                    default:
                        console.log("Unknown Command")
}
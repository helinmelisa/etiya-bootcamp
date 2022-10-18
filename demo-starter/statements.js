if (1 != 1) {
	console.log("If içerisi çalıştı..");
} else if (2 != 2) {
	console.log("Else if çalıştı..");
} else {
	console.log("Else bloğu çalıştı..");
}

let a = 18.74;
let b = 18.8;

if( a >= b )
{
    console.log("fazla")
}

else {
    console.log("az")
}

a >= b ? console.log("fazla") : console.log("az")

//switch-case

let toplamBakiye = 100;
let secilenKur = "EUR";

switch (secilenKur) {
	case "USD":
		toplamBakiye *= 17;
		break;
	case "EUR":
		toplamBakiye *= 20;
		break;
	default:
		console.warn("Bilinmedik kur türü..");
		break;
}
console.log("Toplam Bakiye: ", toplamBakiye);

let secilenKredi=0;
let krediTutari=15000;

switch(secilenKredi) {
    case 0:
        krediTutari *= 2;
        break;
    case 1:
      krediTutari *= 3;
      break;
    default:
      console.log("Bilinmeyen")
};

console.log("kredi:", krediTutari)

let sayi = 15010;

sayi % 2 == 0 ? console.log("çift") : console.log("tek")



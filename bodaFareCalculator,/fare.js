function calculateBodaFare(distanceInKm) {
   const baseFare = 50;
   const chargePerKm = 15;
   const totalFare = baseFare + (distanceInKm * chargePerKm)
   
   console.log(`Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${distanceInKm * chargePerKm}
Total: KES ${totalFare}

Panda Pikipiki!`);
}

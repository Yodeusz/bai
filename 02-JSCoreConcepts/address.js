title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

country = country.toUpperCase();

/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

address1 = title+" "+name+" "+surname+"\n"+"ul. "+street+"\n"+zip+" "+city+"\n"+country.toUpperCase();
address2 = `${title} ${name} ${surname}\nul.${street}\n${zip} ${city}\n${country}` 

console.log(address1)
console.log(address2)
import { Apple, Book, Bus, Cigarette } from "lucide-react";
interface IconProps{
    name:string
}
//um array de dicionario com os itens
const icons = [
    {name:"apple", icon: <Apple/>},
    {name:"cigarette", icon: <Cigarette/>},
    {name:"book", icon: <Book/>},
    {name:"bus", icon: <Bus/>},
]
//encontra o icone pelo nome e retorna o icone
export function Icon({name}:IconProps){
    return icons.find(icon=> icon.name == name)?.icon
}
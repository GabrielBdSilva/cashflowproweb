import { ChevronDown } from 'lucide-react';
import React from 'react';
import { Icon } from "@/components/Icon";

interface CategoriaItemProps{
    categoria:{
        id:number,
        nome:string,
        icone:string
    }
}
export function CategoriaItem({categoria}:CategoriaItemProps){
    return(
        <div className="flex justify-between">
        <div className="flex items-center gap-2">
        
        
        <Icon name={categoria.icone}/>
        <span>{categoria.nome}</span>
        </div>
        <ChevronDown/>
      </div>
    )
}
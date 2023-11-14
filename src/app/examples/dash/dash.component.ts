import { Component, OnInit } from '@angular/core';
import { ComponentsService } from "../../../app/components/components.service"

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  reservas: any = {};
  constructor(
    private readonly componentsService: ComponentsService
  ) { }

  ngOnInit(): void {
    this.ListarReserva()
  }


  ListarReserva() {
    this.componentsService.listar().subscribe((rest) => {     
      this.reservas =rest.response
    })
  }

  onConf(id: number): void {
    const body = {
      "id":id,
      "estado":true
    };
    this,this.componentsService.confirmar(body).subscribe((rest)=>{
      this.reservas =rest.response
      alert("reserva confirmada")
      window.location.reload();
    })
    
  }

  contarTodosLosObjetos(): number {
    return this.reservas.length;
  }
  sumarVisitantes(): number {
    return this.reservas.reduce((total:any, item:any) => total + item.numeroVisitantes, 0);
  }
  promedio():number{    
    const num =this.sumarVisitantes() / this.contarTodosLosObjetos()
    return Number(num.toFixed(2));
    
  }
}


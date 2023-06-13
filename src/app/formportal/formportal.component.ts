import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-formportal',
  templateUrl: './formportal.component.html',
  styleUrls: ['./formportal.component.css']
})
export class FormportalComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  country: any = [];
  provincias: any = [];
  supervisores: any = [];
  constructor(private fb: FormBuilder, private service: ServiceService) { }

  ngOnInit(): void {
    this.getCountries();
    this.getProvincias();
    this.getSupervisores();
    this.form = this.fb.group({
      nombre: [null, [Validators.required]],
      paterno: [null, [Validators.required]],
      materno: [null, [Validators.required]],
      sexo: [null, [Validators.required]],
      nacimiento: [null, [Validators.required]],
      country: [null, [Validators.required]],
      provincia: [null, [Validators.required]],
      localidad: [null, [Validators.required]],
      peso:[null],
      estatura:[null],
      sanguineo:[null],
      nacionalidad:[null],
      civil:[null],
      licencia:[null],
      pasaporte:[null],
      email: [null, [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      supervisor:[null]
    });
  }

  saveDetails(form: any) {
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
    let info = JSON.stringify(form.value);
    this.sendInfoRequestApi(info);
    
  }

  sendInfoRequest(data:any){
    this.service.sendInfo(data).subscribe( resp =>{
        if(resp.status == 201){
          alert("Informacion enviada con éxito")
          console.log(resp);
        }
        
    });
  }

  sendInfoRequestApi(data:any){
    this.service.sendInfoApi(data).subscribe( resp =>{
        if(resp.status == 200){
          alert("Informacion enviada con éxito")
          console.log(resp);
        }
        else{
          alert("Ocurrió un error al guardar")
        }
        
    });
  }

  getCountries(){
    this.service.getCountries().subscribe(resp =>{
        this.country = resp.countries;
        
    });
  }

  getProvincias(){
    this.service.getProvincias().subscribe(resp =>{
        this.provincias = resp.provincias;
       
    });
  }

  getSupervisores(){
    this.service.getSupervisores().subscribe(resp =>{
      this.supervisores = resp.users;
      console.log(this.supervisores);
    });
  }
}

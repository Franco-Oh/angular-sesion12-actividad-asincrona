import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formLogin!: FormGroup;

  mensaje = false;

  predefinido = {
    nombre: "Franco",
    email: "a@b",
    telefono: "123456780",
    asunto: "Saludo",
    msg: "Hola"
  }

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre:['', 
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      telefono:['', 
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(9)
        ]
      ],
      asunto:['', 
        [
          Validators.required,
          Validators.minLength(1)
        ]
      ],
      msg:['',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(500)
        ]
      ]
    });
  }

  send(): any{
    console.log(this.formLogin.value);
    this.mensaje = true;
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  allProvs = [
    {
      code: 1,
      name: "Netvision"
    },
    {
      code: 2,
      name: "Partner"
    },
    {
      code: 3,
      name: "Bezeq"
    }
  ]

  ngOnInit(): void {
  }

  renderNetvision()
  {
    let netvisionText = "Example instructional text for Netvision"
    document.getElementById("content").innerText = netvisionText;
  }

  renderPartner()
  {
    let partnerText = "Example instructional text for Partner"
    document.getElementById("content").innerText = partnerText;
  }

  renderBezeq()
  {
    let bezeqText = "Example instructional text for Bezeq"
    document.getElementById("content").innerText = bezeqText;
  }
}

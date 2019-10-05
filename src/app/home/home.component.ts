import { Component, OnInit } from '@angular/core';
import * as XLSX  from 'XLSX';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  export(){
    var data = [
      {"name":"John", "city": "Seattle"},
      {"name":"Mike", "city": "Los Angeles"},
      {"name":"Zach", "city": "New York"}
  ];
  
  /* this line is only needed if you are not adding a script tag reference */
  // if(typeof XLSX == 'undefined') XLSX = require('xlsx');
  
  /* make the worksheet */
  var ws = XLSX.utils.json_to_sheet(data);
  
  /* add to workbook */
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "People");
  
  /* generate an XLSX file */
  XLSX.writeFile(wb, "sheetjs.xlsx");

  }

  createFileName() {
		const today = new Date();
		const date = today.getFullYear() + '' + (today.getMonth() + 1) + '' + today.getDate() + '_';
		const time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
		const name = "modify" + date + time;
		return name + '.xlsx'
	}

}

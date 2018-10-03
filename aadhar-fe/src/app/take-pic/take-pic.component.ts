import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EthcontractService } from '../services/ethcontract.service';

@Component({
  selector: 'app-take-pic',
  templateUrl: './take-pic.component.html',
  styleUrls: ['./take-pic.component.css']
})
export class TakePicComponent implements OnInit {
    @ViewChild("video")
    public video: ElementRef;

    @ViewChild("canvas")
    public canvas: ElementRef;

    public captures: Array<any>;    

    public constructor(private http: HttpClient, private ethSer: EthcontractService) {
        this.captures = [];
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.nativeElement.src = window.URL.createObjectURL(stream);
                this.video.nativeElement.play();
            });
        }
    }

    public capture() {
        var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
        this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
        const uploadData = new FormData();
        uploadData.append('myFile', this.captures[0], this.captures[0].name);
        this.ethSer.getFaceData(this.captures[0]);
        // this.http.post('http://localhost:2000/api/Upload', uploadData)
        //     .subscribe(ev => {
        //         console.log(ev);
        //     });
        
    }

}

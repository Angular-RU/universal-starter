import { Component } from '@angular/core';
import { Message } from 'primeng/components/common/api';

@Component({
    templateUrl: './fileuploaddemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class FileUploadDemo {

    msgs: Message[];

    uploadedFiles: any[] = [];

    onUpload(event) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    onBasicUpload(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

    onBasicUploadAuto(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    }
}

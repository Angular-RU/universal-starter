import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../service/nodeservice';
import { Message, TreeNode, MenuItem } from 'primeng/components/common/api';

@Component({
    templateUrl: './treetabledemo.html'
})
// tslint:disable-next-line:component-class-suffix
export class TreeTableDemo implements OnInit {

    msgs: Message[];

    files1: TreeNode[];

    files2: TreeNode[];

    files3: TreeNode[];

    files4: TreeNode[];

    files5: TreeNode[];

    files6: TreeNode[];

    lazyFiles: TreeNode[];

    selectedFile: TreeNode;

    selectedFile2: TreeNode;

    selectedFiles: TreeNode[];

    selectedFiles2: TreeNode[];

    items: MenuItem[];

    constructor(private nodeService: NodeService) { }

    async ngOnInit() {
        this.files1 = await this.nodeService.getFilesystemAsync();
        this.files2 = await this.nodeService.getFilesystemAsync();
        this.files3 = await this.nodeService.getFilesystemAsync();
        this.files4 = await this.nodeService.getFilesystemAsync();
        this.files5 = await this.nodeService.getFilesystemAsync();
        this.files6 = await this.nodeService.getFilesystemAsync();
        this.lazyFiles = await this.nodeService.getLazyFilesystemAsync();

        this.items = [
            { label: 'View', icon: 'fa-search', command: (event) => this.viewNode(this.selectedFile2) },
            { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFile2) }
        ];
    }

    nodeSelect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    }

    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    }

    async nodeExpand(event) {
        if (event.node) {
            // in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            event.node.children = await this.nodeService.getLazyFilesystemAsync();
        }
    }

    viewNode(node: TreeNode) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: node.data.name });
    }

    deleteNode(node: TreeNode) {
        node.parent.children = node.parent.children.filter(n => n.data !== node.data);
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Deleted', detail: node.data.name });
    }
}

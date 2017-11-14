import { Component, OnInit, ViewChild } from '@angular/core';
import { NodeService } from '../../service/nodeservice';
import { Message, MenuItem, TreeNode } from 'primeng/components/common/api';
import { Tree } from 'primeng/components/tree/tree';
import { TreeDragDropService } from 'primeng/components/common/api';

@Component({
    templateUrl: './treedemo.html',
    styles: [`
        h4 {
            text-align: center;
            margin: 0 0 8px 0;
        }
    `],
    providers: [TreeDragDropService]
})
// tslint:disable-next-line:component-class-suffix
export class TreeDemo implements OnInit {

    msgs: Message[];

    @ViewChild('expandingTree')
    expandingTree: Tree;

    filesTree0: TreeNode[];
    filesTree1: TreeNode[];
    filesTree2: TreeNode[];
    filesTree3: TreeNode[];
    filesTree4: TreeNode[];
    filesTree5: TreeNode[];
    filesTree6: TreeNode[];
    filesTree7: TreeNode[];
    filesTree8: TreeNode[];
    filesTree9: TreeNode[];
    filesTree10: TreeNode[];
    filesTree11: TreeNode[];

    lazyFiles: TreeNode[];

    selectedFile: TreeNode;

    selectedFile2: TreeNode;

    selectedFile3: TreeNode;

    selectedFiles: TreeNode[];

    selectedFiles2: TreeNode[];

    items: MenuItem[];

    loading: boolean;

    constructor(private nodeService: NodeService) { }

    async ngOnInit() {
        this.loading = true;
        this.filesTree0 = await this.nodeService.getFilesAsync();
        setTimeout(async () => {
            this.filesTree1 = await this.nodeService.getFilesAsync();
            this.loading = false;
        }, 3000);
        this.filesTree2 = await this.nodeService.getFilesAsync();
        this.filesTree3 = await this.nodeService.getFilesAsync();
        this.filesTree4 = await this.nodeService.getFilesAsync();
        this.filesTree5 = await this.nodeService.getFilesAsync();
        this.filesTree6 = await this.nodeService.getFilesAsync();
        this.filesTree7 = await this.nodeService.getFilesAsync();
        this.filesTree8 = [
            {
                label: 'Backup',
                data: 'Backup Folder',
                expandedIcon: 'fa-folder-open',
                collapsedIcon: 'fa-folder'
            }
        ];
        this.filesTree9 = [
            {
                label: 'Storage',
                data: 'Storage Folder',
                expandedIcon: 'fa-folder-open',
                collapsedIcon: 'fa-folder'
            }
        ];
        this.filesTree10 = await this.nodeService.getFilesAsync();
        await this.nodeService.getFilesAsync().then(files => {
            this.filesTree11 = [{
                label: 'Root',
                children: files
            }];
        });

        this.lazyFiles = await this.nodeService.getLazyFilesAsync();

        this.items = [
            { label: 'View', icon: 'fa-search', command: (event) => this.viewFile(this.selectedFile2) },
            { label: 'Unselect', icon: 'fa-close', command: (event) => this.unselectFile() }
        ];
    }

    nodeSelect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    }

    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    }

    nodeExpandMessage(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Expanded', detail: event.node.label });
    }

    async nodeExpand(event) {
        if (event.node) {
            // in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            event.node.children = await this.nodeService.getLazyFilesAsync();
        }
    }

    viewFile(file: TreeNode) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected with Right Click', detail: file.label });
    }

    unselectFile() {
        this.selectedFile2 = null;
    }

    expandAll() {
        this.filesTree10.forEach(node => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.filesTree10.forEach(node => {
            this.expandRecursive(node, false);
        });
    }

    private expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }
}

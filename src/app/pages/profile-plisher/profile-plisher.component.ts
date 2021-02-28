import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APiService } from '../../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { SessionData } from 'src/app/service/seisson-data';

import { IDropdownSettings } from 'ng-multiselect-dropdown';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile-plisher',
  templateUrl: './profile-plisher.component.html',
  styleUrls: ['./profile-plisher.component.scss']
})
export class ProfilePlisherComponent implements OnInit {
  public sessionData = SessionData;
  slides: any[];
  disabled = false;
  page: any = 1;
  categoryArray: any = [];
  selectedImage: any = null;
  all_category: any = [];
  imgSrc = 'assets/Images/placeholder.webp';
  publiser: any;
  products = [
    {},
    {},
    {},
    {},
    {},
    {}
  ];

  closeResult = '';
  constructor(private modalService: NgbModal, private apiservice: APiService, private toastar: ToastrService,) {


  }
  addbooksform = new FormGroup({
    name: new FormControl('', Validators.required),
    // cover: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    categorie: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),

  })
  Books: any;

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = 'assets/Images/placeholder.webp';
      this.selectedImage = null;
    }
  }

  onSubmit(formData) {

    if (this.addbooksform.valid && this.selectedImage != null) {

      this.apiservice.add_books(formData, this.selectedImage).subscribe(
        res => {
          console.log(res);
          if (res.status == 1) {
            this.toastar.success(res.message);
            this.modalService.dismissAll();
            this.Get_books();
            this.addbooksform.reset();
            this.imgSrc = 'assets/Images/placeholder.webp';
            this.selectedImage = null;
          }
          else {
            this.toastar.error(res.message);
          }
        }, error => {
          console.log(error);

          this.toastar.error(error.error.message);
        }
      )
    }
    else {
      this.toastar.error("Please Fill Data Succfully");

    }
  }


  open(content) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  dropdownSettings = {};
  dropdownList = [];
  selectedItems = [];
  ngOnInit(): void {
    this.publiser = localStorage.getItem('IsPublisher');
    this.Get_books();
    this.apiservice.all_category().subscribe((all) => {
      console.log(all.data);
      this.dropdownList = all.data;
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'id',
        textField: 'name',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 1000,
        allowSearchFilter: true,
      };
    })

  }
  Get_books() {
    //get home item by subscribe the API
    this.apiservice.myBooks(this.page).subscribe((all) => {
      this.Books = all.data;
      console.log(this.Books);

    })
  }

  onItemSelect(item: any) {
    this.categoryArray.push(item.id);
  }

  onItemDeSelect(item: any) {
    this.categoryArray = this.categoryArray.filter((c: any) => c != item.id);
  }

  onSelectAll(items: any) {
    //console.log(items);
  }
  bookId: any;
  openEdite(contain, id) {
    this.bookId = id;
    this.apiservice.mySingleBook(id).subscribe((res) => {
      if(res.status == 1) {
        this.modalService.open(contain)
        console.log(res.data);
        this.addbooksform.setValue({
          name: res.data['bookname'],
          author: res.data['author'],
          price: res.data['price'],
          categorie: res.data['categories'][0]
        });
        this.imgSrc = res.data['bookcover']
      }
      else {
        this.toastar.error(res.message);
      }
    })
  }
  OnUpdate(formData) {
    console.log(formData);
    
    if (this.addbooksform.valid) {

      this.apiservice.edite_books(formData, this.selectedImage, this.bookId).subscribe(
        res => {
          console.log(res);
          if (res.status == 1) {
            this.toastar.success(res.message);
            this.modalService.dismissAll();
            this.Get_books();
            this.addbooksform.reset();
            this.imgSrc = 'assets/Images/placeholder.webp';
            this.selectedImage = null;
          }
          else {
            this.toastar.error(res.message);
          }
        }, error => {
          console.log(error);

          this.toastar.error(error.error.message);
        }
      )
    }
    else {
      this.toastar.error("Please Fill Data Succfully");

    }
  }
  opensweetalert(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.apiservice.deleteSingleBook(id).subscribe((res) => {
          if (res.status == 1) {
            this.toastar.success(res.message);
            this.Get_books();
            this.addbooksform.reset();
            this.imgSrc = 'assets/Images/placeholder.webp';
            this.selectedImage = null;
          }
          else {
            this.toastar.error(res.message);
          }
        })
      }
    })
  }

}

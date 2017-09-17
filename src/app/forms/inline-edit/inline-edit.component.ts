import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePipe } from '@angular/common';

const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InlineEditComponent),
  multi: true
};

@Component({
  selector: 'inline-edit',
  providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR, DatePipe],
  templateUrl: './inline-edit.component.html',
  styles: []
})
export class InlineEditComponent implements ControlValueAccessor, OnInit {

  @ViewChild('inlineEditControl') inlineEditControl; // input DOM element
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;

  private _value: string = '';
  private preValue: string = '';
  private editing: boolean = false;
  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  constructor(private datePipe: DatePipe = new DatePipe('en-US')) { }

  ngOnInit() {
  }

  // Control Value Accessors for ngModel
  get value(): any {
    return this.type == 'date' ? this.datePipe.transform(this._value, 'yyyy-MM-dd') : this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      if (this.type == 'date') {
        v = new Date(v).toJSON();
      }
      this._value = v;
      this.onChange(v);
    }
  }

  // Required for ControlValueAccessor interface
  writeValue(value: any) {
    this._value = value;
  }

  // Required forControlValueAccessor interface
  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  // Required forControlValueAccessor interface
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  // Do stuff when the input element loses focus
  onBlur($event: Event) {
    this.editing = false;
  }

  // Start the editting process for the input element
  edit(value) {
    if (this.disabled) {
      return;
    }

    this.preValue = value;
    this.editing = true;
    // Focus on the input element just as the editing begins
    setTimeout(() => this.inlineEditControl.nativeElement.focus());
  }

}

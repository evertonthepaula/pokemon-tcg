import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { toastTypes } from './toast.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) toastType!: toastTypes;

  public get bgColor(): string {
    return `bg-${this.toastType}-500`
  }
}

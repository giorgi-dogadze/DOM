@Component({
  selector: 'todos-cmp',
  template: `
    <div *ngFor="let t of todos|async">
        {{t.description}}
    </div>
  `
})
class TodosComponent {
  todos: Observable<Todo[]> = this.store.pipe(select('todos'));
  constructor(private store: Store<AppState>) {}
}

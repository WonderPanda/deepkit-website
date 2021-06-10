import { Component } from '@angular/core';

@Component({
    template: `
        <div class="subline">Type</div>

        <h2>State management</h2>

        <p>
            State management is primarily known in JavaScript for rather complex frontend applications.
            As soon as you work with a state management library you usually face several new limitation to the state structure itself.
            Deepkit Type provides a handy function to make the live easier in this area and fix currenty limitations.
        </p>

        <p>
            Many state management libraries force the user to keep the state object itself readonly. This comes with several advantages,
            but also with tremendous disadvantages. The biggest disadvantage is that in order to change the state you have to return
            a new state object, copying all previous values and overwrite only the new values. This leads to sewerage limitations of the
            data
            structure simply because of the usability aspect. It's recommended here to keep the state structure shallow in order to not
            have too many copy instructions in your state change code.
        </p>

        <p>
            To work around that a library like <a target="_blank" href="https://immerjs.github.io/immer/">Immer</a> can be used. However,
            this has several new disadvantages.
        </p>

        <p>
            When you use Deepkit Type decorated classes as your state structure, you can serialize your state (and store it for example
            easily as JSON)
            without additional custom mapping necessary and use the function <code>applyPatch</code> in order to maintain the
            nominal types of your class structure. It allows to keep your class instances intact and keep using methods on your state.
        </p>

        <textarea codeHighlight>
            import 'reflect-metadata';
            import { t, applyPatch } from '@deepkit/type';
            
            class MyState {
                @t backgroundColor?: number = 90;
                @t profileColor: number = 110;
            
                @t image?: Uint8Array;
            
                resetBackground() {
                    this.backgroundColor = undefined;
                }
            }
            
            const state = new MyState();
            
            function changeBackgroundColorAction(state: MyState): MyState {
                return applyPatch(state, (state) => {
                    state.backgroundColor = 42;
                });
            }
            
            function resetBackgroundColorAction(state: MyState): MyState {
                return applyPatch(state, (state) => {
                    state.resetBackground();
                });
            }
            
            console.log('action', 'changeBackgroundColorAction');
            const stateChanged1 = changeBackgroundColorAction(state);
            
            console.log('new object?', stateChanged1 !== state);
            console.log('Old value', state.backgroundColor);
            console.log('New value', stateChanged1.backgroundColor);
            
            
            console.log('action', 'resetBackgroundColorAction');
            const stateChanged2 = resetBackgroundColorAction(stateChanged1);
            
            console.log('new object?', stateChanged2 !== stateChanged1);
            console.log('Old value', stateChanged1.backgroundColor);
            console.log('New value', stateChanged2.backgroundColor);
        </textarea>
        
        The output of the script above:
        
        <textarea codeHighlight>
            $ ts-node app.ts
            action changeBackgroundColorAction
            new object? true
            Old value 90
            New value 42
            action resetBackgroundColorAction
            new object? true
            Old value 42
            New value undefined
        </textarea>
        

        <p>
            This works with using Proxy objects and recording all changes made to the structure. When the callback to
            <code>applyPatch</code>
            a clone is created of the given state and all recorded changed replayed to the clone.
        </p>
    `
})
export class DocTypeStateManagementComponent {
}

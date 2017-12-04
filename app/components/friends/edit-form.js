import Component from '@ember/component';

export default Component.extend({
    isValid: Ember.computed(
        'model.email',
        'model.firstName',
        'model.lastName',
        'model.twitter', {
            get() {
                return !Ember.isEmpty(this.get('model.email')) &&
                    !Ember.isEmpty(this.get('model.firstName')) &&
                    !Ember.isEmpty(this.get('model.lastName')) &&
                    !Ember.isEmpty(this.get('model.twitter'));
            }
        }),
    actions: {
        save() {
            console.log("+- save action in edit-form component");

            if (this.get('isValid')) {
                this.get('model').save()
                    .then((friend) => {
                        console.log(friend);
                        return this.save(friend);
                    }).catch((err) => {
                        this.set('errorMessage', "there was something wrong saving the model");
                    });
            } else {
                this.set('errorMessage', 'You have to Fill all the fields');
            }
            // this.save(this.get('model'));
        },
        cancel() {
            console.log("+- cancel action in edit-form component");
            this.cancel();
        }
    }
});
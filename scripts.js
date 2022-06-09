members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Electric Guitar'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {}
        }
    },
    methods: {
        addMember() {
            if(this.newMember.fname && this.newMember.lname && this.newMember.instruments) {
                this.members.push(this.newMember);
                this.newMember = {}
            } else {
                alert('Fill all fields')
            }
        }
    },
};

Vue.createApp(handlingForms).mount('#app');

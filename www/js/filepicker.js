async function pickWordFile() {

    try {

        const result = await Capacitor.Plugins.FilePicker.pickFiles({

            types: [

                "application/msword",

                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"

            ],

            multiple: false

        });

        return result.files[0];

    }

    catch (e) {

        return null;

    }

}

import React, { useState } from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

function FloatingActionButton() {
    const [open, setOpen] = useState(false)
    return (
        <Provider>
            <Portal>
                <FAB.Group
                    open={open}
                    icon={"deathly-hallows"}
                    actions={[
                        { icon: 'plus', label: 'Add Program', onPress: () => console.log('Pressed add') },

                        { icon: 'bell', label: 'Remind', onPress: () => console.log('Pressed notifications') },
                    ]}
                    onStateChange={({ open }) => setOpen(open)}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}
                    fabStyle={{ backgroundColor: "gray" }}
                />
            </Portal>
        </Provider>
    );
}

export default FloatingActionButton
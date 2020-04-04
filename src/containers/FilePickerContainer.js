import { connect } from 'react-redux'
import { appendProgram } from '../actions/userdata'
import FilePicker from '../components/FilePicker/FilePicker'
import storage from '../storage/storage'
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    appendProgram: program => {
        dispatch(appendProgram(program))
        storage.setUserData()
    }
})

const FilePickerView = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilePicker)

export default FilePickerView
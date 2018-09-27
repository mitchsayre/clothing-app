import React from 'react'
import propTypes from 'prop-types'

const FileList = ({ files }) => {
    return (
        <table className="file-list">
            <tbody>
                {files.map(file => (
                    <FileListItem key={file.id} file={file} />
                ))}
            </tbody>
        </table>
    )
}

FileList.propTypes = {
    files: propTypes.array
}

const FileListItem = ({ file }) => {
    return (
        <tr className="file-list-item">
            {getFileName(file)}
            <CommitMessage commit={file.latestCommit} />
        </tr>
    )
}

FileListItem.propTypes = {
    file: propTypes.object.isRequired
}

const CommitMessage = ({ commit }) => (
    <td className="commit-message">
        {commit.message}    
    </td>
)  

CommitMessage.propTypes = {
    commit: propTypes.object.isRequired
}

function FileIcon ({ file }) {
    let icon = 'far fa-file'
    if(file.type === 'folder') {
        icon = 'fa-folder'
    }

    return (
        <td className="file-icon">
            

            <i className={`fa ${icon}`}/>
        </td>
    )
}

function getFileName(file) {
    return [
        <FileIcon file={file} key={0}/>,
        <td className="file-name" key={1}>{file.name}</td>
    ]
}

FileIcon.propTypes = {
    file: propTypes.object.isRequired
}

export default FileList
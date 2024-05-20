function Settings() {
  const handleTemplateSelect = async (emailType) => {
    const template = await window.api.selectTemplate()
    if (template) {
      try {
        await window.api.savePath(emailType, template)
        alert('Template path saved successfully')
      } catch (error) {
        console.error('Failed to save template path:', error)
        alert('Failed to save template path')
      }
    }
  }

  const handleFolderSelect = async (folderType) => {
    const folder = await window.api.selectFolder()
    if (folder) {
      try {
        await window.api.savePath(folderType, folder)
        alert('Folder path saved successfully')
      } catch (error) {
        console.error('Failed to save folder path:', error)
        alert('Failed to save folder path')
      }
    }
  }

  return (
    <div>
      <div className="section-header mt-2">Select Email Templates</div>
      <div className="row my-3">
        <button type="button" className="col btn-settings" onClick={() => handleTemplateSelect('regularEmailTemplate')}>
          Regular
        </button>
        <button type="button" className="col btn-settings" onClick={() => handleTemplateSelect('socialMediaEmailTemplate')}>
          Social Media
        </button>
      </div>

      <div className="section-header mt-4">Select Folder</div>
      <div className="row my-3">
        <button type="button" className="col btn-settings" onClick={() => handleFolderSelect('projectFolder')}>
          Project
        </button>
        <button type="button" className="col btn-settings" onClick={() => handleFolderSelect('dropboxFolder')}>
          Dropbox
        </button>
        <button type="button" className="col btn-settings" onClick={() => handleFolderSelect('nasFolder')}>
          NAS
        </button>
      </div>
    </div>
  )
}

export default Settings
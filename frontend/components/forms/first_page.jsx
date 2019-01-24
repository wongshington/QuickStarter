import React from 'react';

const firstForm = (props) => {

  return (
    <div className="form--first grid">
      <label>Project Title
        <input type="text" placeholder="What will you call your QuickStarter?" onChange={props.update('title')}></input>
      </label>

    </div>
  );
};

export default firstForm;


// <label>Image
//             <div>
//     <div className="from--upload">
//       {/* <Dropzone
//                   onDrop={this.onImageDrop.bind(this)}
//                   multiple={false}
//                   accept="image/*">
//                   <div>Upload your QuickStarter project photo here!</div>
//                 </Dropzone> */}
//     </div>
//     <div>
//       {this.state.title_image === '' ? null :
//         <div>
//           <p>{this.state.uploadedFile.name}</p>
//           <img src={this.state.title_image} />
//         </div>
//       }
//     </div>
//   </div>
// </label>

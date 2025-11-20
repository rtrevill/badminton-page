export default function ContactAndMap () {
    return (
        <div class="container-fluid row">
            <div class='col-5'>
                <form>
                    <div class="mb-3">
                        <label for="formName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="formName" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="formSubject" class="form-label">Subject</label>
                        <input type="text" class="form-control" id="formSubject" aria-describedby="subjectHelp" />
                        <div id="subjectHelp" class="form-text">Please title your message</div>
                    </div>
                    <div class="mb-3">
                        <label for="formMessage" class="form-label">Subject</label>
                        <textarea style={{height: '300px'}} class="form-control" placeholder="Leave your message here" id="formMessage" />
                    </div>



                    {/* <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class='col-5'>

            </div>
            <div class='col-2'>

            </div>
        </div>
    )
}
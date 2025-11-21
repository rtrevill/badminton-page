import {useForm, ValidationError } from '@formspree/react';

export default function ContactAndMap () {

    const [state, handleSubmit] = useForm("mqanvake");
    if (state.succeeded){
        return <p>Thankyou for your enquiry. It has been submitted and you will receive a reply shortly</p>
    }

    // const showall = () => {
    //     event.preventDefault();
    //     const evTar = event.target
    //     console.log("Happy Days are here again", evTar.formMessage.value);
    // }



    return (
        <div class="container-fluid row">
            <div class='col-5'>
                <form 
                    onSubmit={handleSubmit}
                >
                    {/* <label>
                        Your email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Your message:
                        <textarea name="message"></textarea>
                    </label> */}
                        <label for="formName" class="form-label">
                            Name
                        </label>
                        <input type="text" class="form-control mb-3" name="formName" id="formName"/>
                        <label for="exampleInputEmail1" class="form-label">
                            Email address
                        </label>
                        <input type="email" class="form-control " id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text mb-3">We'll never share your email with anyone else.</div>
                        <label for="formSubject" class="form-label">
                            Subject
                        </label>
                        <input type="text" class="form-control " id="formSubject" name="formSubject" aria-describedby="subjectHelp" />
                        <div id="subjectHelp" class="form-text mb-3">Please title your message</div>
                        <label for="formMessage" class="form-label">
                            Message
                        </label>
                        <textarea style={{height: '300px'}} class="form-control mb-3" placeholder="Leave your message here" id="formMessage" name="formMessage"/>



                    {/* <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" class="btn btn-primary" disabled={state.submitting}>Submit</button>
                </form>
            </div>
            <div class='col-5'>

            </div>
            <div class='col-2'>

            </div>
        </div>
    )
}
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import MetaInfo from '../../components/seo/metainfo';
import { RoutesConfig } from '../../config/routes.config';
import { resetResponseLoader } from '../../store/question';
import CreateQuestion from './create';
import EditQuestion from './edit';
import SelectQuestions from './selectQuestions';
import Upload from './upload';


const DefaultView = ({viewHandler, disable})=>{
    return(
        <div className="my-3">
            <MetaInfo {...RoutesConfig.Question.metaInfo} />

            <Button variant="primary" size="bg" className="mr-3 mt-3" disabled={disable === 'create'} onClick={
                ()=>{
                    viewHandler('create')
                }
            } >
                Create Question
            </Button>
            <Button variant="primary" size="bg" className="mr-3 mt-3" disabled={disable === 'upload'} onClick={
                ()=>{
                    viewHandler('upload')
                }
            } >
                Upload An Excel File
            </Button>
            <Button variant="primary" size="bg" className="mt-3" disabled={disable === 'select'} onClick={
                ()=>{
                    viewHandler('select')
                }
            } >
                Select Questions For Edit
            </Button>

        </div>
    )
}

export default function QuestionBuilder() {
    const [view, setView] = useState();
    const [questionId, setQuestionId] = useState(null);
    const dispatch = useDispatch()

   const viewHandler = (view, id)=>{
       dispatch(resetResponseLoader());
       if(id) setQuestionId(id);
        setView(view);
    }

    switch (view) {
        
        case 'create':
            return <> <DefaultView viewHandler={viewHandler} disable="create" /> <CreateQuestion viewHandler={viewHandler} /> </>
            break;
        case 'upload':
            return <> <DefaultView viewHandler={viewHandler} disable="upload" /> <Upload viewHandler={viewHandler} /> </>
            break;      
        case 'select':
            return <> <DefaultView viewHandler={viewHandler} disable="select" /> <SelectQuestions viewHandler={viewHandler} /> </>
            break;    
        
        case 'edit':
            return <> <DefaultView viewHandler={viewHandler} /> <EditQuestion viewHandler={viewHandler} id={questionId} /> </>            
            break;    
                    
        default:
            return <DefaultView viewHandler={viewHandler} /> 
            break;
    }

}

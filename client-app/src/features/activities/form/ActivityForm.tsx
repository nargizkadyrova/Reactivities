import React, { useState, useContext, useEffect } from 'react';
import { Segment, Form, Button, Grid } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
import ActivityStore from '../../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import {Form as FinalForm, Field} from 'react-final-form'
import { category } from '../../../app/common/options/categoryOptions';
import TextInput from '../../../app/common/form/TextInput';
import TextAreaInput from '../../../app/common/form/TextAreaInput';
import SelectInput from '../../../app/common/form/SelectInput';
import {
  combineValidators,
  isRequired,
  composeValidators,
  hasLengthGreaterThan
} from 'revalidate';
import { ActivityFormValues } from '../../../app/models/activity';


interface DetailParams {
  id: string;
}

const validate = combineValidators({
  title: isRequired({ message: 'The event title is required' }),
  category: isRequired('Category'),
  description: composeValidators(
    isRequired('Description'),
    hasLengthGreaterThan(4)({
      message: 'Description needs to be at least 5 characters'
    })
  )(),
  city: isRequired('City'),
  venue: isRequired('Venue'),
  date: isRequired('Date'),
 // time: isRequired('Time')
});

const ActivityForm: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history
}) => {
  const activityStore = useContext(ActivityStore);
  const {
    createActivity,
    editActivity,
    submitting,
    loadActivity
  } = activityStore;

  const [activity, setActivity] = useState(new ActivityFormValues());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (match.params.id) {
      setLoading(true);
      loadActivity(match.params.id)
        .then(activity => {
          setActivity(new ActivityFormValues(activity));
        })
        .finally(() => setLoading(false));
    }
  }, [loadActivity, match.params.id]);
  // const handleSubmit = () => {
  //   if (activity.id.length === 0) {
  //     let newActivity = {
  //       ...activity,
  //       id: uuid()
  //     };
  //     createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`))
  //   } else {
  //     editActivity(activity).then(() => history.push(`/activities/${activity.id}`));
  //   }
  // };

  const handleFinalFormSubmit = (values:any) => {
    const { ...activity } = values;
    console.log(values);
    if (!activity.id) {
      let newActivity = {
        ...activity,
        id: uuid()
      };
      createActivity(newActivity);
      console.log('ewrw');
    } else {
      editActivity(activity);
      console.log('ewrw2');
    }
  };

  // const handleInputChange = (
  //   event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = event.currentTarget;
  //   setActivity({ ...activity, [name]: value });
  // };

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment clearing>
          <FinalForm
          validate={validate}
            initialValues={activity}
            onSubmit={handleFinalFormSubmit}
            render={({ handleSubmit, invalid, pristine })  => (
            <Form onSubmit={handleSubmit} loading={loading}>
            <Field
              name='title'
              placeholder='Title'
              value={activity.title}
              component={TextInput as any}
            />
            <Field
              name='description'
              rows={2}
              placeholder='Description'
              value={activity.description}
              component={TextAreaInput as any}
            />
            <Field
              name='category'
              placeholder='Category'
              value={activity.category}
              options={category}
              component={SelectInput as any}
            />
            <Field
              name='date'
              type='datetime-local'
              placeholder='Date'
              value={activity.date}
              component={TextInput as any}
            />
            <Field
              name='city'
              placeholder='City'
              value={activity.city}
              component={TextInput as any}
            />
            <Field
              name='venue'
              placeholder='Venue'
              value={activity.venue}
              component={TextInput as any}
            />
             <Button
                  loading={submitting}
                  disabled={loading || invalid || pristine}
                  floated='right'
                  positive
                  type='submit'
                  content='Submit'
                />
                <Button
                  onClick={
                    activity.id
                      ? () => history.push(`/activities/${activity.id}`)
                      : () => history.push('/activities')
                  }
                  disabled={loading}
                  floated='right'
                  type='button'
                  content='Cancel'
                />
          </Form> 

          )}/>
          
        </Segment>
      </Grid.Column>
    </Grid>

  );
};

export default observer(ActivityForm);

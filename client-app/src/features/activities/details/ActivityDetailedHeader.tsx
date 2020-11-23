import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import { Segment, Item, Header, Button, Image } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity';

const activityImageStyle = {
  filter: 'brightness(30%)'
};

const activityImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white'
};

const ActivityDetailedHeader: React.FC<{activity: IActivity}> = ({activity}) => {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{ padding: '0' }}>
                <Image src={`/assets/CategoryImages/${activity.category}.jpg`} fluid style={activityImageStyle} />
                <Segment basic style={activityImageTextStyle}>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={activity.title}
                                    style={{ color: 'white' }}
                                />
                                <p>{activity.date}</p>
                                <p>
                                    {/* Hosted by <strong></strong> */}
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Join Activity</Button>
                <Button>Cancel attendance</Button>
                <Button as={Link} to={`/manage/${activity.id }`} color='orange' floated='right'>
                    Manage Event
                </Button>
            </Segment>
        </Segment.Group>
    )
};

export default observer(ActivityDetailedHeader);
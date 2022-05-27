import React from 'react'
import { TimelineDot, TimelineOppositeContent, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent } from "@mui/lab/"
import Typography from "@mui/material/Typography"
import { Event } from "@mui/icons-material"

const TimeLine = ({timelines=[]}) => {
  return (
    <div>
        <Timeline position="alternate">
            {timelines.map((item, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                    >
                        5/25/22
                    </TimelineOppositeContent>
                    
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <Event />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant='h6'>Title</Typography>
                        <Typography>Description</Typography>
                    </TimelineContent>
                </TimelineItem>                
            ))}
        </Timeline>
    </div>
  )
}

export default TimeLine
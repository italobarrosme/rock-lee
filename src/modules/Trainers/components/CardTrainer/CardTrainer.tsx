'use client'

import { Button } from '@/shared/components/Button'
import { Trainer } from '../../types'
import { Text } from '@/shared/components/Text'
import Image from 'next/image'
import { useState } from 'react'
import { CardInfo } from '@/shared/components/CardInfo'
import { cn } from '@/utils'
import { formatTrack } from '@/utils/formats/formatTrack/formatTrack'

export type CardTrainerProps = {
  trainer: Trainer
}

export const CardTrainer = ({ trainer }: CardTrainerProps) => {
  const [isSchudules, setIsSchudules] = useState(false)

  return (
    <div className="py-4">
      <div className="flex flex-col">
        <div className="group relative h-96 w-72 cursor-pointer rounded-lg border-2 bg-brand-light/90 shadow-md">
          <Image
            src={
              `${process.env.NEXT_PUBLIC_BASE_URL_UPLOADS + trainer.image}` ||
              'https://via.placeholder.com/300'
            }
            alt={trainer.name}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-sm shadow-sm"
          />
          <div className="absolute top-0 flex h-96 w-full flex-col gap-1 rounded-lg bg-brand-secondary/80 p-2 font-bold text-brand-light opacity-100 shadow-sm backdrop-blur-sm duration-100 lg:opacity-0 lg:group-hover:opacity-100">
            <Text variant="h6" className="font-bold">
              {trainer.name}
            </Text>
            <Text className="h-52 overflow-y-auto font-bold ">
              {trainer.description}
            </Text>
            <Text className="font-bold">{trainer.contact}</Text>
            <Text
              className={cn(
                `p-2 font-black rounded-md`,
                formatTrack(trainer.track)
              )}
            >
              {trainer.track}
            </Text>

            <Button
              variant="primary"
              size="full"
              onClick={() => setIsSchudules(!isSchudules)}
              className="my-2"
            >
              Mostre os horarios
            </Button>
          </div>
        </div>
        <CardInfo isShow={isSchudules} title="Horários">
          <ul className="flex flex-col gap-2">
            {trainer.schedules.map((schedule) => (
              <li key={schedule.id}>
                <div className="rounded-md border-2 p-4">
                  <Text>{schedule.day}</Text>
                  <Text>{schedule.time}</Text>
                  <Text>{schedule.track}</Text>
                  <Text>{schedule.details}</Text>
                </div>
              </li>
            ))}
          </ul>
        </CardInfo>
      </div>
    </div>
  )
}

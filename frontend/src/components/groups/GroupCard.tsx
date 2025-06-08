import { Group, GroupStatus } from '@/types';
import { format } from 'date-fns';
import { 
  UsersIcon, 
  ClockIcon, 
  MapPinIcon,
  StarIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

interface GroupCardProps {
  group: Group;
}

const statusColors = {
  [GroupStatus.OPEN]: 'bg-green-100 text-green-800',
  [GroupStatus.FULL]: 'bg-yellow-100 text-yellow-800',
  [GroupStatus.IN_PROGRESS]: 'bg-blue-100 text-blue-800',
  [GroupStatus.COMPLETED]: 'bg-gray-100 text-gray-800',
  [GroupStatus.CANCELLED]: 'bg-red-100 text-red-800',
};

const statusLabels = {
  [GroupStatus.OPEN]: 'Open',
  [GroupStatus.FULL]: 'Full',
  [GroupStatus.IN_PROGRESS]: 'In Progress',
  [GroupStatus.COMPLETED]: 'Completed',
  [GroupStatus.CANCELLED]: 'Cancelled',
};

export default function GroupCard({ group }: GroupCardProps) {
  const memberCount = group._count.members;
  const isOwner = false; // TODO: Check if current user is owner
  const isMember = false; // TODO: Check if current user is member

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      {/* Header with game image and priority badge */}
      <div className="relative h-32 bg-gradient-to-r from-indigo-500 to-purple-600">
        {group.game.imageUrl && (
          <img
            src={group.game.imageUrl}
            alt={group.game.name}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Priority badge */}
        {group.isPriority && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              <StarSolidIcon className="h-3 w-3 mr-1" />
              Priority
            </span>
          </div>
        )}

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[group.status]}`}>
            {statusLabels[group.status]}
          </span>
        </div>

        {/* Game info overlay */}
        <div className="absolute bottom-3 left-3 text-white">
          <h3 className="text-lg font-semibold">{group.game.name}</h3>
          {group.gameMode && (
            <p className="text-sm opacity-90">{group.gameMode.name}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Group title and description */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">{group.title}</h4>
          {group.description && (
            <p className="text-gray-600 text-sm line-clamp-2">{group.description}</p>
          )}
        </div>

        {/* Group details */}
        <div className="space-y-2 mb-4">
          {/* Members */}
          <div className="flex items-center text-sm text-gray-600">
            <UsersIcon className="h-4 w-4 mr-2" />
            <span>{memberCount}/{group.maxMembers} members</span>
          </div>

          {/* Platform and Region */}
          <div className="flex items-center text-sm text-gray-600">
            <ComputerDesktopIcon className="h-4 w-4 mr-2" />
            <span>{group.platform}</span>
            <MapPinIcon className="h-4 w-4 ml-4 mr-2" />
            <span>{group.region}</span>
          </div>

          {/* Scheduled time */}
          {group.scheduledAt && (
            <div className="flex items-center text-sm text-gray-600">
              <ClockIcon className="h-4 w-4 mr-2" />
              <span>{format(new Date(group.scheduledAt), 'MMM d, yyyy h:mm a')}</span>
            </div>
          )}
        </div>

        {/* Owner info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
              {group.owner.avatar ? (
                <img
                  src={group.owner.avatar}
                  alt={group.owner.username}
                  className="h-8 w-8 rounded-full"
                />
              ) : (
                <span className="text-sm font-medium text-gray-700">
                  {group.owner.username.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{group.owner.username}</p>
              <div className="flex items-center">
                <StarIcon className="h-3 w-3 text-yellow-400 mr-1" />
                <span className="text-xs text-gray-600">{group.owner.reputation.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-3">
          {group.status === GroupStatus.OPEN && memberCount < group.maxMembers && !isMember && (
            <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Join Group
            </button>
          )}
          
          {isMember && !isOwner && (
            <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Leave Group
            </button>
          )}

          <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
} 
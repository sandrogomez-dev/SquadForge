import { GroupFilters, Platform, Region, GroupStatus } from '@/types';

interface GroupFiltersProps {
  filters: GroupFilters;
  onFiltersChange: (filters: Partial<GroupFilters>) => void;
}

export default function GroupFiltersComponent({ filters, onFiltersChange }: GroupFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Platform Filter */}
      <div>
        <label htmlFor="platform-filter" className="block text-sm font-medium text-gray-700 mb-2">
          Platform
        </label>
        <select
          id="platform-filter"
          value={filters.platform || ''}
          onChange={(e) => onFiltersChange({ platform: e.target.value as Platform || undefined })}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">All Platforms</option>
          <option value={Platform.PC}>PC</option>
          <option value={Platform.PLAYSTATION}>PlayStation</option>
          <option value={Platform.XBOX}>Xbox</option>
          <option value={Platform.SWITCH}>Nintendo Switch</option>
        </select>
      </div>

      {/* Region Filter */}
      <div>
        <label htmlFor="region-filter" className="block text-sm font-medium text-gray-700 mb-2">
          Region
        </label>
        <select
          id="region-filter"
          value={filters.region || ''}
          onChange={(e) => onFiltersChange({ region: e.target.value as Region || undefined })}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">All Regions</option>
          <option value={Region.NA}>North America</option>
          <option value={Region.EU}>Europe</option>
          <option value={Region.ASIA}>Asia</option>
          <option value={Region.OCE}>Oceania</option>
          <option value={Region.SA}>South America</option>
        </select>
      </div>

      {/* Status Filter */}
      <div>
        <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-2">
          Status
        </label>
        <select
          id="status-filter"
          value={filters.status || ''}
          onChange={(e) => onFiltersChange({ status: e.target.value as GroupStatus || undefined })}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">All Status</option>
          <option value={GroupStatus.OPEN}>Open</option>
          <option value={GroupStatus.FULL}>Full</option>
          <option value={GroupStatus.IN_PROGRESS}>In Progress</option>
          <option value={GroupStatus.COMPLETED}>Completed</option>
        </select>
      </div>

      {/* Public/Private Filter */}
      <div>
        <label htmlFor="visibility-filter" className="block text-sm font-medium text-gray-700 mb-2">
          Visibility
        </label>
        <select
          id="visibility-filter"
          value={filters.isPublic === undefined ? '' : filters.isPublic.toString()}
          onChange={(e) => {
            const value = e.target.value;
            onFiltersChange({ 
              isPublic: value === '' ? undefined : value === 'true' 
            });
          }}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">All Groups</option>
          <option value="true">Public Only</option>
          <option value="false">Private Only</option>
        </select>
      </div>

      {/* Scheduled Date Range */}
      <div>
        <label htmlFor="scheduled-after" className="block text-sm font-medium text-gray-700 mb-2">
          Scheduled After
        </label>
        <input
          id="scheduled-after"
          type="datetime-local"
          value={filters.scheduledAfter || ''}
          onChange={(e) => onFiltersChange({ scheduledAfter: e.target.value || undefined })}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="scheduled-before" className="block text-sm font-medium text-gray-700 mb-2">
          Scheduled Before
        </label>
        <input
          id="scheduled-before"
          type="datetime-local"
          value={filters.scheduledBefore || ''}
          onChange={(e) => onFiltersChange({ scheduledBefore: e.target.value || undefined })}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Premium Features */}
      <div>
        <div className="flex items-center">
          <input
            id="priority-only"
            type="checkbox"
            checked={filters.priorityOnly || false}
            onChange={(e) => onFiltersChange({ priorityOnly: e.target.checked || undefined })}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="priority-only" className="ml-2 block text-sm text-gray-900">
            Priority Groups Only
            <span className="text-xs text-yellow-600 ml-1">(Premium)</span>
          </label>
        </div>
      </div>

      {/* Clear Filters */}
      <div className="pt-4 border-t border-gray-200">
        <button
          onClick={() => onFiltersChange({
            platform: undefined,
            region: undefined,
            status: undefined,
            isPublic: undefined,
            scheduledAfter: undefined,
            scheduledBefore: undefined,
            priorityOnly: undefined,
            search: undefined,
          })}
          className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
} 
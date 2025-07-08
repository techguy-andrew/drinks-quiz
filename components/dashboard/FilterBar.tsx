import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { X, Search } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterBarProps {
  searchPlaceholder?: string;
  categoryOptions?: FilterOption[];
  statusOptions?: FilterOption[];
  onSearch?: (value: string) => void;
  onCategoryChange?: (value: string) => void;
  onStatusChange?: (value: string) => void;
  onClearFilters?: () => void;
  showCategoryFilter?: boolean;
  showStatusFilter?: boolean;
}

export function FilterBar({
  searchPlaceholder = 'Search...',
  categoryOptions = [],
  statusOptions = [],
  onSearch,
  onCategoryChange,
  onStatusChange,
  onClearFilters,
  showCategoryFilter = true,
  showStatusFilter = true,
}: FilterBarProps) {
  const [searchValue, setSearchValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [statusValue, setStatusValue] = useState('');

  const handleSearch = (value: string) => {
    setSearchValue(value);
    onSearch?.(value);
  };

  const handleCategoryChange = (value: string) => {
    setCategoryValue(value);
    onCategoryChange?.(value);
  };

  const handleStatusChange = (value: string) => {
    setStatusValue(value);
    onStatusChange?.(value);
  };

  const handleClearFilters = () => {
    setSearchValue('');
    setCategoryValue('');
    setStatusValue('');
    onClearFilters?.();
  };

  const hasActiveFilters = searchValue || categoryValue || statusValue;

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10"
        />
      </div>
      <div className="flex gap-2">
        {showCategoryFilter && categoryOptions.length > 0 && (
          <Select value={categoryValue} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              {categoryOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        {showStatusFilter && statusOptions.length > 0 && (
          <Select value={statusValue} onValueChange={handleStatusChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Status</SelectItem>
              {statusOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearFilters}
            className="flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
} 
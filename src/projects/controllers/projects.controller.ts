import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AccessLevel } from '../../auth/decorators/access-level.decorator';
import { AdminAccess } from '../../auth/decorators/admin.decorator';
import { AccessLevelGuard } from '../../auth/guards/access-level.guard';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { ProjectDTO, ProjectUpdateDTO } from '../dto/projects.dto';
import { ProjectsService } from '../services/projects.service';

@Controller('projects')
@UseGuards(AuthGuard, RolesGuard, AccessLevelGuard)
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @Post('create')
  public async createProject(@Body() body: ProjectDTO) {
    return await this.projectService.createProject(body);
  }

  @AdminAccess()
  @Get('all')
  public async findAllProjects() {
    return await this.projectService.findProjects();
  }

  @Get(':projectId')
  public async findProjectById(
    @Param('projectId', new ParseUUIDPipe()) id: string,
  ) {
    return await this.projectService.findProjectById(id);
  }

  @AccessLevel('OWNER')
  @Put('edit/:projectId')
  public async updateProject(
    @Param('projectId', new ParseUUIDPipe()) id: string,
    @Body() body: ProjectUpdateDTO,
  ) {
    return await this.projectService.updateProject(body, id);
  }

  @AccessLevel('OWNER')
  @Delete('delete/:projectId')
  public async deleteProject(
    @Param('projectId', new ParseUUIDPipe()) id: string,
  ) {
    return await this.projectService.deleteProject(id);
  }
}

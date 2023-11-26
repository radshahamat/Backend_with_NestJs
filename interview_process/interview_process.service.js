"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterviewProcessService = void 0;
const common_1 = require("@nestjs/common");
const interview_process_entity_1 = require("./entity/interview_process.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let InterviewProcessService = class InterviewProcessService {
    async create(createInterviewProcessDto) {
        return await this.interview_process_repo.insert(createInterviewProcessDto);
    }
    async findAll() {
        return await this.interview_process_repo.find({ relations: { interviewer: true } });
    }
    async findOne(id) {
        return await this.interview_process_repo.findOneBy({ id: id });
    }
    async update(id, updateInterviewProcessDto) {
        return await this.interview_process_repo.update(id, updateInterviewProcessDto);
    }
    async remove(id) {
        return await this.interview_process_repo.delete(id);
    }
};
exports.InterviewProcessService = InterviewProcessService;
__decorate([
    (0, typeorm_1.InjectRepository)(interview_process_entity_1.interview_process),
    __metadata("design:type", typeorm_2.Repository)
], InterviewProcessService.prototype, "interview_process_repo", void 0);
exports.InterviewProcessService = InterviewProcessService = __decorate([
    (0, common_1.Injectable)()
], InterviewProcessService);
//# sourceMappingURL=interview_process.service.js.map
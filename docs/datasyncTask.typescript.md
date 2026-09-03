# `datasyncTask` Submodule <a name="`datasyncTask` Submodule" id="@cdktn/provider-awscc.datasyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncTask <a name="DatasyncTask" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task awscc_datasync_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTask(scope: Construct, id: string, config: DatasyncTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig">DatasyncTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig">DatasyncTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putExcludes">putExcludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putIncludes">putIncludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig">putManifestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig">putTaskReportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn">resetCloudwatchLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetIncludes">resetIncludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetManifestConfig">resetManifestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskMode">resetTaskMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskReportConfig">resetTaskReportConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExcludes` <a name="putExcludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putExcludes"></a>

```typescript
public putExcludes(value: IResolvable | DatasyncTaskExcludes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putExcludes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>[]

---

##### `putIncludes` <a name="putIncludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putIncludes"></a>

```typescript
public putIncludes(value: IResolvable | DatasyncTaskIncludes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putIncludes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>[]

---

##### `putManifestConfig` <a name="putManifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig"></a>

```typescript
public putManifestConfig(value: DatasyncTaskManifestConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions"></a>

```typescript
public putOptions(value: DatasyncTaskOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putSchedule"></a>

```typescript
public putSchedule(value: DatasyncTaskSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTags"></a>

```typescript
public putTags(value: IResolvable | DatasyncTaskTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>[]

---

##### `putTaskReportConfig` <a name="putTaskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig"></a>

```typescript
public putTaskReportConfig(value: DatasyncTaskTaskReportConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

---

##### `resetCloudwatchLogGroupArn` <a name="resetCloudwatchLogGroupArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn"></a>

```typescript
public resetCloudwatchLogGroupArn(): void
```

##### `resetExcludes` <a name="resetExcludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetExcludes"></a>

```typescript
public resetExcludes(): void
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetIncludes"></a>

```typescript
public resetIncludes(): void
```

##### `resetManifestConfig` <a name="resetManifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetManifestConfig"></a>

```typescript
public resetManifestConfig(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaskMode` <a name="resetTaskMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskMode"></a>

```typescript
public resetTaskMode(): void
```

##### `resetTaskReportConfig` <a name="resetTaskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskReportConfig"></a>

```typescript
public resetTaskReportConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isConstruct"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

datasyncTask.DatasyncTask.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformElement"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

datasyncTask.DatasyncTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformResource"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

datasyncTask.DatasyncTask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

datasyncTask.DatasyncTask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatasyncTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationNetworkInterfaceArns">destinationNetworkInterfaceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludes">excludes</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList">DatasyncTaskExcludesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includes">includes</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList">DatasyncTaskIncludesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfig">manifestConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference">DatasyncTaskManifestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceNetworkInterfaceArns">sourceNetworkInterfaceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList">DatasyncTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskArn">taskArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfig">taskReportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference">DatasyncTaskTaskReportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput">cloudwatchLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArnInput">destinationLocationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludesInput">excludesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includesInput">includesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfigInput">manifestConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.optionsInput">optionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.scheduleInput">scheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArnInput">sourceLocationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskModeInput">taskModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfigInput">taskReportConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArn">destinationLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArn">sourceLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskMode">taskMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destinationNetworkInterfaceArns`<sup>Required</sup> <a name="destinationNetworkInterfaceArns" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationNetworkInterfaceArns"></a>

```typescript
public readonly destinationNetworkInterfaceArns: string[];
```

- *Type:* string[]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludes"></a>

```typescript
public readonly excludes: DatasyncTaskExcludesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList">DatasyncTaskExcludesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includes"></a>

```typescript
public readonly includes: DatasyncTaskIncludesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList">DatasyncTaskIncludesList</a>

---

##### `manifestConfig`<sup>Required</sup> <a name="manifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfig"></a>

```typescript
public readonly manifestConfig: DatasyncTaskManifestConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference">DatasyncTaskManifestConfigOutputReference</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.options"></a>

```typescript
public readonly options: DatasyncTaskOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.schedule"></a>

```typescript
public readonly schedule: DatasyncTaskScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a>

---

##### `sourceNetworkInterfaceArns`<sup>Required</sup> <a name="sourceNetworkInterfaceArns" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceNetworkInterfaceArns"></a>

```typescript
public readonly sourceNetworkInterfaceArns: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tags"></a>

```typescript
public readonly tags: DatasyncTaskTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList">DatasyncTaskTagsList</a>

---

##### `taskArn`<sup>Required</sup> <a name="taskArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskArn"></a>

```typescript
public readonly taskArn: string;
```

- *Type:* string

---

##### `taskReportConfig`<sup>Required</sup> <a name="taskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfig"></a>

```typescript
public readonly taskReportConfig: DatasyncTaskTaskReportConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference">DatasyncTaskTaskReportConfigOutputReference</a>

---

##### `cloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogGroupArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput"></a>

```typescript
public readonly cloudwatchLogGroupArnInput: string;
```

- *Type:* string

---

##### `destinationLocationArnInput`<sup>Optional</sup> <a name="destinationLocationArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArnInput"></a>

```typescript
public readonly destinationLocationArnInput: string;
```

- *Type:* string

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludesInput"></a>

```typescript
public readonly excludesInput: IResolvable | DatasyncTaskExcludes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>[]

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includesInput"></a>

```typescript
public readonly includesInput: IResolvable | DatasyncTaskIncludes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>[]

---

##### `manifestConfigInput`<sup>Optional</sup> <a name="manifestConfigInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfigInput"></a>

```typescript
public readonly manifestConfigInput: IResolvable | DatasyncTaskManifestConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.optionsInput"></a>

```typescript
public readonly optionsInput: IResolvable | DatasyncTaskOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | DatasyncTaskSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `sourceLocationArnInput`<sup>Optional</sup> <a name="sourceLocationArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArnInput"></a>

```typescript
public readonly sourceLocationArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DatasyncTaskTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>[]

---

##### `taskModeInput`<sup>Optional</sup> <a name="taskModeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskModeInput"></a>

```typescript
public readonly taskModeInput: string;
```

- *Type:* string

---

##### `taskReportConfigInput`<sup>Optional</sup> <a name="taskReportConfigInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfigInput"></a>

```typescript
public readonly taskReportConfigInput: IResolvable | DatasyncTaskTaskReportConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

---

##### `destinationLocationArn`<sup>Required</sup> <a name="destinationLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArn"></a>

```typescript
public readonly destinationLocationArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArn"></a>

```typescript
public readonly sourceLocationArn: string;
```

- *Type:* string

---

##### `taskMode`<sup>Required</sup> <a name="taskMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskMode"></a>

```typescript
public readonly taskMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncTaskConfig <a name="DatasyncTaskConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskConfig: datasyncTask.DatasyncTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn">destinationLocationArn</a></code> | <code>string</code> | The ARN of an AWS storage resource's location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn">sourceLocationArn</a></code> | <code>string</code> | The ARN of the source location for the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.excludes">excludes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#excludes DatasyncTask#excludes}. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.includes">includes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#includes DatasyncTask#includes}. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.manifestConfig">manifestConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a></code> | Configures a manifest, which is a list of files or objects that you want DataSync to transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.name">name</a></code> | <code>string</code> | The name of a task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | Represents the options that are available to control the behavior of a StartTaskExecution operation. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | Specifies the schedule you want your task to use for repeated executions. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskMode">taskMode</a></code> | <code>string</code> | Specifies the task mode for the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskReportConfig">taskReportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a></code> | Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destinationLocationArn`<sup>Required</sup> <a name="destinationLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn"></a>

```typescript
public readonly destinationLocationArn: string;
```

- *Type:* string

The ARN of an AWS storage resource's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn"></a>

```typescript
public readonly sourceLocationArn: string;
```

- *Type:* string

The ARN of the source location for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#source_location_arn DatasyncTask#source_location_arn}

---

##### `cloudwatchLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.excludes"></a>

```typescript
public readonly excludes: IResolvable | DatasyncTaskExcludes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#excludes DatasyncTask#excludes}.

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.includes"></a>

```typescript
public readonly includes: IResolvable | DatasyncTaskIncludes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#includes DatasyncTask#includes}.

---

##### `manifestConfig`<sup>Optional</sup> <a name="manifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.manifestConfig"></a>

```typescript
public readonly manifestConfig: DatasyncTaskManifestConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

Configures a manifest, which is a list of files or objects that you want DataSync to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#manifest_config DatasyncTask#manifest_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of a task.

This value is a text reference that is used to identify the task in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#name DatasyncTask#name}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.options"></a>

```typescript
public readonly options: DatasyncTaskOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

Represents the options that are available to control the behavior of a StartTaskExecution operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#options DatasyncTask#options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.schedule"></a>

```typescript
public readonly schedule: DatasyncTaskSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

Specifies the schedule you want your task to use for repeated executions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#schedule DatasyncTask#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DatasyncTaskTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#tags DatasyncTask#tags}

---

##### `taskMode`<sup>Optional</sup> <a name="taskMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskMode"></a>

```typescript
public readonly taskMode: string;
```

- *Type:* string

Specifies the task mode for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#task_mode DatasyncTask#task_mode}

---

##### `taskReportConfig`<sup>Optional</sup> <a name="taskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskReportConfig"></a>

```typescript
public readonly taskReportConfig: DatasyncTaskTaskReportConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#task_report_config DatasyncTask#task_report_config}

---

### DatasyncTaskExcludes <a name="DatasyncTaskExcludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskExcludes: datasyncTask.DatasyncTaskExcludes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.filterType">filterType</a></code> | <code>string</code> | The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.value">value</a></code> | <code>string</code> | A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "\|". |

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#filter_type DatasyncTask#filter_type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#value DatasyncTask#value}

---

### DatasyncTaskIncludes <a name="DatasyncTaskIncludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskIncludes: datasyncTask.DatasyncTaskIncludes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.filterType">filterType</a></code> | <code>string</code> | The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.value">value</a></code> | <code>string</code> | A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "\|". |

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#filter_type DatasyncTask#filter_type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#value DatasyncTask#value}

---

### DatasyncTaskManifestConfig <a name="DatasyncTaskManifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskManifestConfig: datasyncTask.DatasyncTaskManifestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.action">action</a></code> | <code>string</code> | Specifies what DataSync uses the manifest for. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.format">format</a></code> | <code>string</code> | Specifies the file format of your manifest. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a></code> | Specifies the manifest that you want DataSync to use and where it's hosted. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Specifies what DataSync uses the manifest for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#action DatasyncTask#action}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Specifies the file format of your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#format DatasyncTask#format}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.source"></a>

```typescript
public readonly source: DatasyncTaskManifestConfigSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

Specifies the manifest that you want DataSync to use and where it's hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#source DatasyncTask#source}

---

### DatasyncTaskManifestConfigSource <a name="DatasyncTaskManifestConfigSource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskManifestConfigSource: datasyncTask.DatasyncTaskManifestConfigSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a></code> | Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource.property.s3"></a>

```typescript
public readonly s3: DatasyncTaskManifestConfigSourceS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#s3 DatasyncTask#s3}

---

### DatasyncTaskManifestConfigSourceS3 <a name="DatasyncTaskManifestConfigSourceS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskManifestConfigSourceS3: datasyncTask.DatasyncTaskManifestConfigSourceS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.bucketAccessRoleArn">bucketAccessRoleArn</a></code> | <code>string</code> | Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectPath">manifestObjectPath</a></code> | <code>string</code> | Specifies the Amazon S3 object key of your manifest. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectVersionId">manifestObjectVersionId</a></code> | <code>string</code> | Specifies the object version ID of the manifest that you want DataSync to use. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.s3BucketArn">s3BucketArn</a></code> | <code>string</code> | Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest. |

---

##### `bucketAccessRoleArn`<sup>Optional</sup> <a name="bucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.bucketAccessRoleArn"></a>

```typescript
public readonly bucketAccessRoleArn: string;
```

- *Type:* string

Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#bucket_access_role_arn DatasyncTask#bucket_access_role_arn}

---

##### `manifestObjectPath`<sup>Optional</sup> <a name="manifestObjectPath" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectPath"></a>

```typescript
public readonly manifestObjectPath: string;
```

- *Type:* string

Specifies the Amazon S3 object key of your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#manifest_object_path DatasyncTask#manifest_object_path}

---

##### `manifestObjectVersionId`<sup>Optional</sup> <a name="manifestObjectVersionId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectVersionId"></a>

```typescript
public readonly manifestObjectVersionId: string;
```

- *Type:* string

Specifies the object version ID of the manifest that you want DataSync to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#manifest_object_version_id DatasyncTask#manifest_object_version_id}

---

##### `s3BucketArn`<sup>Optional</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.s3BucketArn"></a>

```typescript
public readonly s3BucketArn: string;
```

- *Type:* string

Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#s3_bucket_arn DatasyncTask#s3_bucket_arn}

---

### DatasyncTaskOptions <a name="DatasyncTaskOptions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskOptions: datasyncTask.DatasyncTaskOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.atime">atime</a></code> | <code>string</code> | A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to). |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond">bytesPerSecond</a></code> | <code>number</code> | A value that limits the bandwidth used by AWS DataSync. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.gid">gid</a></code> | <code>string</code> | The group ID (GID) of the file's owners. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.logLevel">logLevel</a></code> | <code>string</code> | A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.mtime">mtime</a></code> | <code>string</code> | A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.objectTags">objectTags</a></code> | <code>string</code> | A value that determines whether object tags should be read from the source object store and written to the destination object store. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.overwriteMode">overwriteMode</a></code> | <code>string</code> | A value that determines whether files at the destination should be overwritten or preserved when copying files. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.posixPermissions">posixPermissions</a></code> | <code>string</code> | A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles">preserveDeletedFiles</a></code> | <code>string</code> | A value that specifies whether files in the destination that don't exist in the source file system should be preserved. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDevices">preserveDevices</a></code> | <code>string</code> | A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags">securityDescriptorCopyFlags</a></code> | <code>string</code> | A value that determines which components of the SMB security descriptor are copied during transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.taskQueueing">taskQueueing</a></code> | <code>string</code> | A value that determines whether tasks should be queued before executing the tasks. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.transferMode">transferMode</a></code> | <code>string</code> | A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.uid">uid</a></code> | <code>string</code> | The user ID (UID) of the file's owner. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.verifyMode">verifyMode</a></code> | <code>string</code> | A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred. |

---

##### `atime`<sup>Optional</sup> <a name="atime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.atime"></a>

```typescript
public readonly atime: string;
```

- *Type:* string

A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#atime DatasyncTask#atime}

---

##### `bytesPerSecond`<sup>Optional</sup> <a name="bytesPerSecond" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond"></a>

```typescript
public readonly bytesPerSecond: number;
```

- *Type:* number

A value that limits the bandwidth used by AWS DataSync.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

The group ID (GID) of the file's owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#gid DatasyncTask#gid}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#log_level DatasyncTask#log_level}

---

##### `mtime`<sup>Optional</sup> <a name="mtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.mtime"></a>

```typescript
public readonly mtime: string;
```

- *Type:* string

A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#mtime DatasyncTask#mtime}

---

##### `objectTags`<sup>Optional</sup> <a name="objectTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.objectTags"></a>

```typescript
public readonly objectTags: string;
```

- *Type:* string

A value that determines whether object tags should be read from the source object store and written to the destination object store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#object_tags DatasyncTask#object_tags}

---

##### `overwriteMode`<sup>Optional</sup> <a name="overwriteMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.overwriteMode"></a>

```typescript
public readonly overwriteMode: string;
```

- *Type:* string

A value that determines whether files at the destination should be overwritten or preserved when copying files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}

---

##### `posixPermissions`<sup>Optional</sup> <a name="posixPermissions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.posixPermissions"></a>

```typescript
public readonly posixPermissions: string;
```

- *Type:* string

A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#posix_permissions DatasyncTask#posix_permissions}

---

##### `preserveDeletedFiles`<sup>Optional</sup> <a name="preserveDeletedFiles" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles"></a>

```typescript
public readonly preserveDeletedFiles: string;
```

- *Type:* string

A value that specifies whether files in the destination that don't exist in the source file system should be preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}

---

##### `preserveDevices`<sup>Optional</sup> <a name="preserveDevices" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDevices"></a>

```typescript
public readonly preserveDevices: string;
```

- *Type:* string

A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#preserve_devices DatasyncTask#preserve_devices}

---

##### `securityDescriptorCopyFlags`<sup>Optional</sup> <a name="securityDescriptorCopyFlags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags"></a>

```typescript
public readonly securityDescriptorCopyFlags: string;
```

- *Type:* string

A value that determines which components of the SMB security descriptor are copied during transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}

---

##### `taskQueueing`<sup>Optional</sup> <a name="taskQueueing" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.taskQueueing"></a>

```typescript
public readonly taskQueueing: string;
```

- *Type:* string

A value that determines whether tasks should be queued before executing the tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#task_queueing DatasyncTask#task_queueing}

---

##### `transferMode`<sup>Optional</sup> <a name="transferMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.transferMode"></a>

```typescript
public readonly transferMode: string;
```

- *Type:* string

A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#transfer_mode DatasyncTask#transfer_mode}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

The user ID (UID) of the file's owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#uid DatasyncTask#uid}

---

##### `verifyMode`<sup>Optional</sup> <a name="verifyMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.verifyMode"></a>

```typescript
public readonly verifyMode: string;
```

- *Type:* string

A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#verify_mode DatasyncTask#verify_mode}

---

### DatasyncTaskSchedule <a name="DatasyncTaskSchedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskSchedule: datasyncTask.DatasyncTaskSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.status">status</a></code> | <code>string</code> | Specifies status of a schedule. |

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#schedule_expression DatasyncTask#schedule_expression}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Specifies status of a schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#status DatasyncTask#status}

---

### DatasyncTaskTags <a name="DatasyncTaskTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskTags: datasyncTask.DatasyncTaskTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.key">key</a></code> | <code>string</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.value">value</a></code> | <code>string</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#key DatasyncTask#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#value DatasyncTask#value}

---

### DatasyncTaskTaskReportConfig <a name="DatasyncTaskTaskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskTaskReportConfig: datasyncTask.DatasyncTaskTaskReportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a></code> | Specifies where DataSync uploads your task report. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.objectVersionIds">objectVersionIds</a></code> | <code>string</code> | Specifies whether your task report includes the new version of each object transferred into an S3 bucket, this only applies if you enable versioning on your bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.outputType">outputType</a></code> | <code>string</code> | Specifies the type of task report that you want. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a></code> | Customizes the reporting level for aspects of your task report. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.reportLevel">reportLevel</a></code> | <code>string</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.destination"></a>

```typescript
public readonly destination: DatasyncTaskTaskReportConfigDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

Specifies where DataSync uploads your task report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#destination DatasyncTask#destination}

---

##### `objectVersionIds`<sup>Optional</sup> <a name="objectVersionIds" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.objectVersionIds"></a>

```typescript
public readonly objectVersionIds: string;
```

- *Type:* string

Specifies whether your task report includes the new version of each object transferred into an S3 bucket, this only applies if you enable versioning on your bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#object_version_ids DatasyncTask#object_version_ids}

---

##### `outputType`<sup>Optional</sup> <a name="outputType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

Specifies the type of task report that you want.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#output_type DatasyncTask#output_type}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.overrides"></a>

```typescript
public readonly overrides: DatasyncTaskTaskReportConfigOverrides;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

Customizes the reporting level for aspects of your task report.

For example, your report might generally only include errors, but you could specify that you want a list of successes and errors just for the files that Datasync attempted to delete in your destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#overrides DatasyncTask#overrides}

---

##### `reportLevel`<sup>Optional</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigDestination <a name="DatasyncTaskTaskReportConfigDestination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskTaskReportConfigDestination: datasyncTask.DatasyncTaskTaskReportConfigDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a></code> | Specifies the Amazon S3 bucket where DataSync uploads your task report. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination.property.s3"></a>

```typescript
public readonly s3: DatasyncTaskTaskReportConfigDestinationS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

Specifies the Amazon S3 bucket where DataSync uploads your task report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#s3 DatasyncTask#s3}

---

### DatasyncTaskTaskReportConfigDestinationS3 <a name="DatasyncTaskTaskReportConfigDestinationS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskTaskReportConfigDestinationS3: datasyncTask.DatasyncTaskTaskReportConfigDestinationS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.bucketAccessRoleArn">bucketAccessRoleArn</a></code> | <code>string</code> | Specifies the Amazon Resource Name (ARN) of the IAM policy that allows Datasync to upload a task report to your S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.s3BucketArn">s3BucketArn</a></code> | <code>string</code> | Specifies the ARN of the S3 bucket where Datasync uploads your report. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.subdirectory">subdirectory</a></code> | <code>string</code> | Specifies a bucket prefix for your report. |

---

##### `bucketAccessRoleArn`<sup>Optional</sup> <a name="bucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.bucketAccessRoleArn"></a>

```typescript
public readonly bucketAccessRoleArn: string;
```

- *Type:* string

Specifies the Amazon Resource Name (ARN) of the IAM policy that allows Datasync to upload a task report to your S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#bucket_access_role_arn DatasyncTask#bucket_access_role_arn}

---

##### `s3BucketArn`<sup>Optional</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.s3BucketArn"></a>

```typescript
public readonly s3BucketArn: string;
```

- *Type:* string

Specifies the ARN of the S3 bucket where Datasync uploads your report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#s3_bucket_arn DatasyncTask#s3_bucket_arn}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

Specifies a bucket prefix for your report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#subdirectory DatasyncTask#subdirectory}

---

### DatasyncTaskTaskReportConfigOverrides <a name="DatasyncTaskTaskReportConfigOverrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskTaskReportConfigOverrides: datasyncTask.DatasyncTaskTaskReportConfigOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.deleted">deleted</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a></code> | Specifies the level of reporting for the files, objects, and directories that Datasync attempted to delete in your destination location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.skipped">skipped</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a></code> | Specifies the level of reporting for the files, objects, and directories that Datasync attempted to skip during your transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.transferred">transferred</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a></code> | Specifies the level of reporting for the files, objects, and directories that Datasync attempted to transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.verified">verified</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a></code> | Specifies the level of reporting for the files, objects, and directories that Datasync attempted to verify at the end of your transfer. |

---

##### `deleted`<sup>Optional</sup> <a name="deleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.deleted"></a>

```typescript
public readonly deleted: DatasyncTaskTaskReportConfigOverridesDeleted;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to delete in your destination location.

This only applies if you configure your task to delete data in the destination that isn't in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#deleted DatasyncTask#deleted}

---

##### `skipped`<sup>Optional</sup> <a name="skipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.skipped"></a>

```typescript
public readonly skipped: DatasyncTaskTaskReportConfigOverridesSkipped;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to skip during your transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#skipped DatasyncTask#skipped}

---

##### `transferred`<sup>Optional</sup> <a name="transferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.transferred"></a>

```typescript
public readonly transferred: DatasyncTaskTaskReportConfigOverridesTransferred;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#transferred DatasyncTask#transferred}

---

##### `verified`<sup>Optional</sup> <a name="verified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.verified"></a>

```typescript
public readonly verified: DatasyncTaskTaskReportConfigOverridesVerified;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to verify at the end of your transfer.

This only applies if you configure your task to verify data during and after the transfer (which Datasync does by default)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#verified DatasyncTask#verified}

---

### DatasyncTaskTaskReportConfigOverridesDeleted <a name="DatasyncTaskTaskReportConfigOverridesDeleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskTaskReportConfigOverridesDeleted: datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted.property.reportLevel">reportLevel</a></code> | <code>string</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `reportLevel`<sup>Optional</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigOverridesSkipped <a name="DatasyncTaskTaskReportConfigOverridesSkipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskTaskReportConfigOverridesSkipped: datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped.property.reportLevel">reportLevel</a></code> | <code>string</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `reportLevel`<sup>Optional</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigOverridesTransferred <a name="DatasyncTaskTaskReportConfigOverridesTransferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskTaskReportConfigOverridesTransferred: datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred.property.reportLevel">reportLevel</a></code> | <code>string</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `reportLevel`<sup>Optional</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigOverridesVerified <a name="DatasyncTaskTaskReportConfigOverridesVerified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

const datasyncTaskTaskReportConfigOverridesVerified: datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified.property.reportLevel">reportLevel</a></code> | <code>string</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `reportLevel`<sup>Optional</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncTaskExcludesList <a name="DatasyncTaskExcludesList" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskExcludesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.get"></a>

```typescript
public get(index: number): DatasyncTaskExcludesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskExcludes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>[]

---


### DatasyncTaskExcludesOutputReference <a name="DatasyncTaskExcludesOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskExcludesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType"></a>

```typescript
public resetFilterType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskExcludes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---


### DatasyncTaskIncludesList <a name="DatasyncTaskIncludesList" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskIncludesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.get"></a>

```typescript
public get(index: number): DatasyncTaskIncludesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskIncludes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>[]

---


### DatasyncTaskIncludesOutputReference <a name="DatasyncTaskIncludesOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskIncludesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType"></a>

```typescript
public resetFilterType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskIncludes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---


### DatasyncTaskManifestConfigOutputReference <a name="DatasyncTaskManifestConfigOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskManifestConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.putSource"></a>

```typescript
public putSource(value: DatasyncTaskManifestConfigSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference">DatasyncTaskManifestConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.sourceInput">sourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.source"></a>

```typescript
public readonly source: DatasyncTaskManifestConfigSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference">DatasyncTaskManifestConfigSourceOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | DatasyncTaskManifestConfigSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskManifestConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

---


### DatasyncTaskManifestConfigSourceOutputReference <a name="DatasyncTaskManifestConfigSourceOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskManifestConfigSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3"></a>

```typescript
public putS3(value: DatasyncTaskManifestConfigSourceS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

---

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference">DatasyncTaskManifestConfigSourceS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3Input">s3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3"></a>

```typescript
public readonly s3: DatasyncTaskManifestConfigSourceS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference">DatasyncTaskManifestConfigSourceS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | DatasyncTaskManifestConfigSourceS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskManifestConfigSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

---


### DatasyncTaskManifestConfigSourceS3OutputReference <a name="DatasyncTaskManifestConfigSourceS3OutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetBucketAccessRoleArn">resetBucketAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectPath">resetManifestObjectPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectVersionId">resetManifestObjectVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetS3BucketArn">resetS3BucketArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketAccessRoleArn` <a name="resetBucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetBucketAccessRoleArn"></a>

```typescript
public resetBucketAccessRoleArn(): void
```

##### `resetManifestObjectPath` <a name="resetManifestObjectPath" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectPath"></a>

```typescript
public resetManifestObjectPath(): void
```

##### `resetManifestObjectVersionId` <a name="resetManifestObjectVersionId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectVersionId"></a>

```typescript
public resetManifestObjectVersionId(): void
```

##### `resetS3BucketArn` <a name="resetS3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetS3BucketArn"></a>

```typescript
public resetS3BucketArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArnInput">bucketAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPathInput">manifestObjectPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionIdInput">manifestObjectVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArnInput">s3BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArn">bucketAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPath">manifestObjectPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionId">manifestObjectVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArn">s3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketAccessRoleArnInput`<sup>Optional</sup> <a name="bucketAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArnInput"></a>

```typescript
public readonly bucketAccessRoleArnInput: string;
```

- *Type:* string

---

##### `manifestObjectPathInput`<sup>Optional</sup> <a name="manifestObjectPathInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPathInput"></a>

```typescript
public readonly manifestObjectPathInput: string;
```

- *Type:* string

---

##### `manifestObjectVersionIdInput`<sup>Optional</sup> <a name="manifestObjectVersionIdInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionIdInput"></a>

```typescript
public readonly manifestObjectVersionIdInput: string;
```

- *Type:* string

---

##### `s3BucketArnInput`<sup>Optional</sup> <a name="s3BucketArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArnInput"></a>

```typescript
public readonly s3BucketArnInput: string;
```

- *Type:* string

---

##### `bucketAccessRoleArn`<sup>Required</sup> <a name="bucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArn"></a>

```typescript
public readonly bucketAccessRoleArn: string;
```

- *Type:* string

---

##### `manifestObjectPath`<sup>Required</sup> <a name="manifestObjectPath" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPath"></a>

```typescript
public readonly manifestObjectPath: string;
```

- *Type:* string

---

##### `manifestObjectVersionId`<sup>Required</sup> <a name="manifestObjectVersionId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionId"></a>

```typescript
public readonly manifestObjectVersionId: string;
```

- *Type:* string

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArn"></a>

```typescript
public readonly s3BucketArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskManifestConfigSourceS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

---


### DatasyncTaskOptionsOutputReference <a name="DatasyncTaskOptionsOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime">resetAtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond">resetBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime">resetMtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetObjectTags">resetObjectTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode">resetOverwriteMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions">resetPosixPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles">resetPreserveDeletedFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices">resetPreserveDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags">resetSecurityDescriptorCopyFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing">resetTaskQueueing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode">resetTransferMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid">resetUid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode">resetVerifyMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtime` <a name="resetAtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime"></a>

```typescript
public resetAtime(): void
```

##### `resetBytesPerSecond` <a name="resetBytesPerSecond" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond"></a>

```typescript
public resetBytesPerSecond(): void
```

##### `resetGid` <a name="resetGid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid"></a>

```typescript
public resetGid(): void
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetMtime` <a name="resetMtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime"></a>

```typescript
public resetMtime(): void
```

##### `resetObjectTags` <a name="resetObjectTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetObjectTags"></a>

```typescript
public resetObjectTags(): void
```

##### `resetOverwriteMode` <a name="resetOverwriteMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode"></a>

```typescript
public resetOverwriteMode(): void
```

##### `resetPosixPermissions` <a name="resetPosixPermissions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions"></a>

```typescript
public resetPosixPermissions(): void
```

##### `resetPreserveDeletedFiles` <a name="resetPreserveDeletedFiles" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles"></a>

```typescript
public resetPreserveDeletedFiles(): void
```

##### `resetPreserveDevices` <a name="resetPreserveDevices" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices"></a>

```typescript
public resetPreserveDevices(): void
```

##### `resetSecurityDescriptorCopyFlags` <a name="resetSecurityDescriptorCopyFlags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags"></a>

```typescript
public resetSecurityDescriptorCopyFlags(): void
```

##### `resetTaskQueueing` <a name="resetTaskQueueing" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing"></a>

```typescript
public resetTaskQueueing(): void
```

##### `resetTransferMode` <a name="resetTransferMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode"></a>

```typescript
public resetTransferMode(): void
```

##### `resetUid` <a name="resetUid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid"></a>

```typescript
public resetUid(): void
```

##### `resetVerifyMode` <a name="resetVerifyMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode"></a>

```typescript
public resetVerifyMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput">atimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput">bytesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput">gidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput">mtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTagsInput">objectTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput">overwriteModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput">posixPermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput">preserveDeletedFilesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput">preserveDevicesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput">securityDescriptorCopyFlagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput">taskQueueingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput">transferModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput">uidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput">verifyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime">atime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond">bytesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid">gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime">mtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTags">objectTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode">overwriteMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions">posixPermissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles">preserveDeletedFiles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices">preserveDevices</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags">securityDescriptorCopyFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing">taskQueueing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode">transferMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode">verifyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `atimeInput`<sup>Optional</sup> <a name="atimeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput"></a>

```typescript
public readonly atimeInput: string;
```

- *Type:* string

---

##### `bytesPerSecondInput`<sup>Optional</sup> <a name="bytesPerSecondInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput"></a>

```typescript
public readonly bytesPerSecondInput: number;
```

- *Type:* number

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput"></a>

```typescript
public readonly gidInput: string;
```

- *Type:* string

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `mtimeInput`<sup>Optional</sup> <a name="mtimeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput"></a>

```typescript
public readonly mtimeInput: string;
```

- *Type:* string

---

##### `objectTagsInput`<sup>Optional</sup> <a name="objectTagsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTagsInput"></a>

```typescript
public readonly objectTagsInput: string;
```

- *Type:* string

---

##### `overwriteModeInput`<sup>Optional</sup> <a name="overwriteModeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput"></a>

```typescript
public readonly overwriteModeInput: string;
```

- *Type:* string

---

##### `posixPermissionsInput`<sup>Optional</sup> <a name="posixPermissionsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput"></a>

```typescript
public readonly posixPermissionsInput: string;
```

- *Type:* string

---

##### `preserveDeletedFilesInput`<sup>Optional</sup> <a name="preserveDeletedFilesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput"></a>

```typescript
public readonly preserveDeletedFilesInput: string;
```

- *Type:* string

---

##### `preserveDevicesInput`<sup>Optional</sup> <a name="preserveDevicesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput"></a>

```typescript
public readonly preserveDevicesInput: string;
```

- *Type:* string

---

##### `securityDescriptorCopyFlagsInput`<sup>Optional</sup> <a name="securityDescriptorCopyFlagsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput"></a>

```typescript
public readonly securityDescriptorCopyFlagsInput: string;
```

- *Type:* string

---

##### `taskQueueingInput`<sup>Optional</sup> <a name="taskQueueingInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput"></a>

```typescript
public readonly taskQueueingInput: string;
```

- *Type:* string

---

##### `transferModeInput`<sup>Optional</sup> <a name="transferModeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput"></a>

```typescript
public readonly transferModeInput: string;
```

- *Type:* string

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput"></a>

```typescript
public readonly uidInput: string;
```

- *Type:* string

---

##### `verifyModeInput`<sup>Optional</sup> <a name="verifyModeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput"></a>

```typescript
public readonly verifyModeInput: string;
```

- *Type:* string

---

##### `atime`<sup>Required</sup> <a name="atime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime"></a>

```typescript
public readonly atime: string;
```

- *Type:* string

---

##### `bytesPerSecond`<sup>Required</sup> <a name="bytesPerSecond" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond"></a>

```typescript
public readonly bytesPerSecond: number;
```

- *Type:* number

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `mtime`<sup>Required</sup> <a name="mtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime"></a>

```typescript
public readonly mtime: string;
```

- *Type:* string

---

##### `objectTags`<sup>Required</sup> <a name="objectTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTags"></a>

```typescript
public readonly objectTags: string;
```

- *Type:* string

---

##### `overwriteMode`<sup>Required</sup> <a name="overwriteMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode"></a>

```typescript
public readonly overwriteMode: string;
```

- *Type:* string

---

##### `posixPermissions`<sup>Required</sup> <a name="posixPermissions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions"></a>

```typescript
public readonly posixPermissions: string;
```

- *Type:* string

---

##### `preserveDeletedFiles`<sup>Required</sup> <a name="preserveDeletedFiles" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles"></a>

```typescript
public readonly preserveDeletedFiles: string;
```

- *Type:* string

---

##### `preserveDevices`<sup>Required</sup> <a name="preserveDevices" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices"></a>

```typescript
public readonly preserveDevices: string;
```

- *Type:* string

---

##### `securityDescriptorCopyFlags`<sup>Required</sup> <a name="securityDescriptorCopyFlags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags"></a>

```typescript
public readonly securityDescriptorCopyFlags: string;
```

- *Type:* string

---

##### `taskQueueing`<sup>Required</sup> <a name="taskQueueing" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing"></a>

```typescript
public readonly taskQueueing: string;
```

- *Type:* string

---

##### `transferMode`<sup>Required</sup> <a name="transferMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode"></a>

```typescript
public readonly transferMode: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `verifyMode`<sup>Required</sup> <a name="verifyMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode"></a>

```typescript
public readonly verifyMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---


### DatasyncTaskScheduleOutputReference <a name="DatasyncTaskScheduleOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetScheduleExpression"></a>

```typescript
public resetScheduleExpression(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---


### DatasyncTaskTagsList <a name="DatasyncTaskTagsList" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.get"></a>

```typescript
public get(index: number): DatasyncTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>[]

---


### DatasyncTaskTagsOutputReference <a name="DatasyncTaskTagsOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags">DatasyncTaskTags</a>

---


### DatasyncTaskTaskReportConfigDestinationOutputReference <a name="DatasyncTaskTaskReportConfigDestinationOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3"></a>

```typescript
public putS3(value: DatasyncTaskTaskReportConfigDestinationS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

---

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference">DatasyncTaskTaskReportConfigDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3Input">s3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3"></a>

```typescript
public readonly s3: DatasyncTaskTaskReportConfigDestinationS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference">DatasyncTaskTaskReportConfigDestinationS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | DatasyncTaskTaskReportConfigDestinationS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskTaskReportConfigDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

---


### DatasyncTaskTaskReportConfigDestinationS3OutputReference <a name="DatasyncTaskTaskReportConfigDestinationS3OutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetBucketAccessRoleArn">resetBucketAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetS3BucketArn">resetS3BucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketAccessRoleArn` <a name="resetBucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetBucketAccessRoleArn"></a>

```typescript
public resetBucketAccessRoleArn(): void
```

##### `resetS3BucketArn` <a name="resetS3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetS3BucketArn"></a>

```typescript
public resetS3BucketArn(): void
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetSubdirectory"></a>

```typescript
public resetSubdirectory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArnInput">bucketAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArnInput">s3BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectoryInput">subdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArn">bucketAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArn">s3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketAccessRoleArnInput`<sup>Optional</sup> <a name="bucketAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArnInput"></a>

```typescript
public readonly bucketAccessRoleArnInput: string;
```

- *Type:* string

---

##### `s3BucketArnInput`<sup>Optional</sup> <a name="s3BucketArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArnInput"></a>

```typescript
public readonly s3BucketArnInput: string;
```

- *Type:* string

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectoryInput"></a>

```typescript
public readonly subdirectoryInput: string;
```

- *Type:* string

---

##### `bucketAccessRoleArn`<sup>Required</sup> <a name="bucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArn"></a>

```typescript
public readonly bucketAccessRoleArn: string;
```

- *Type:* string

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArn"></a>

```typescript
public readonly s3BucketArn: string;
```

- *Type:* string

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskTaskReportConfigDestinationS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

---


### DatasyncTaskTaskReportConfigOutputReference <a name="DatasyncTaskTaskReportConfigOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskTaskReportConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetObjectVersionIds">resetObjectVersionIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOutputType">resetOutputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetReportLevel">resetReportLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putDestination"></a>

```typescript
public putDestination(value: DatasyncTaskTaskReportConfigDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

---

##### `putOverrides` <a name="putOverrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides"></a>

```typescript
public putOverrides(value: DatasyncTaskTaskReportConfigOverrides): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetObjectVersionIds` <a name="resetObjectVersionIds" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetObjectVersionIds"></a>

```typescript
public resetObjectVersionIds(): void
```

##### `resetOutputType` <a name="resetOutputType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOutputType"></a>

```typescript
public resetOutputType(): void
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOverrides"></a>

```typescript
public resetOverrides(): void
```

##### `resetReportLevel` <a name="resetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetReportLevel"></a>

```typescript
public resetReportLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference">DatasyncTaskTaskReportConfigDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference">DatasyncTaskTaskReportConfigOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destinationInput">destinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIdsInput">objectVersionIdsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputTypeInput">outputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overridesInput">overridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevelInput">reportLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIds">objectVersionIds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputType">outputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevel">reportLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destination"></a>

```typescript
public readonly destination: DatasyncTaskTaskReportConfigDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference">DatasyncTaskTaskReportConfigDestinationOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overrides"></a>

```typescript
public readonly overrides: DatasyncTaskTaskReportConfigOverridesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference">DatasyncTaskTaskReportConfigOverridesOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | DatasyncTaskTaskReportConfigDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

---

##### `objectVersionIdsInput`<sup>Optional</sup> <a name="objectVersionIdsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIdsInput"></a>

```typescript
public readonly objectVersionIdsInput: string;
```

- *Type:* string

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputTypeInput"></a>

```typescript
public readonly outputTypeInput: string;
```

- *Type:* string

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overridesInput"></a>

```typescript
public readonly overridesInput: IResolvable | DatasyncTaskTaskReportConfigOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

---

##### `reportLevelInput`<sup>Optional</sup> <a name="reportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevelInput"></a>

```typescript
public readonly reportLevelInput: string;
```

- *Type:* string

---

##### `objectVersionIds`<sup>Required</sup> <a name="objectVersionIds" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIds"></a>

```typescript
public readonly objectVersionIds: string;
```

- *Type:* string

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskTaskReportConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

---


### DatasyncTaskTaskReportConfigOverridesDeletedOutputReference <a name="DatasyncTaskTaskReportConfigOverridesDeletedOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resetReportLevel">resetReportLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReportLevel` <a name="resetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resetReportLevel"></a>

```typescript
public resetReportLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevelInput">reportLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevel">reportLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reportLevelInput`<sup>Optional</sup> <a name="reportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevelInput"></a>

```typescript
public readonly reportLevelInput: string;
```

- *Type:* string

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskTaskReportConfigOverridesDeleted;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

---


### DatasyncTaskTaskReportConfigOverridesOutputReference <a name="DatasyncTaskTaskReportConfigOverridesOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putDeleted">putDeleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putSkipped">putSkipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putTransferred">putTransferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putVerified">putVerified</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetDeleted">resetDeleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetSkipped">resetSkipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetTransferred">resetTransferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetVerified">resetVerified</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeleted` <a name="putDeleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putDeleted"></a>

```typescript
public putDeleted(value: DatasyncTaskTaskReportConfigOverridesDeleted): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putDeleted.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

---

##### `putSkipped` <a name="putSkipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putSkipped"></a>

```typescript
public putSkipped(value: DatasyncTaskTaskReportConfigOverridesSkipped): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putSkipped.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

---

##### `putTransferred` <a name="putTransferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putTransferred"></a>

```typescript
public putTransferred(value: DatasyncTaskTaskReportConfigOverridesTransferred): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putTransferred.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

---

##### `putVerified` <a name="putVerified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putVerified"></a>

```typescript
public putVerified(value: DatasyncTaskTaskReportConfigOverridesVerified): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putVerified.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

---

##### `resetDeleted` <a name="resetDeleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetDeleted"></a>

```typescript
public resetDeleted(): void
```

##### `resetSkipped` <a name="resetSkipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetSkipped"></a>

```typescript
public resetSkipped(): void
```

##### `resetTransferred` <a name="resetTransferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetTransferred"></a>

```typescript
public resetTransferred(): void
```

##### `resetVerified` <a name="resetVerified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetVerified"></a>

```typescript
public resetVerified(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deleted">deleted</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference">DatasyncTaskTaskReportConfigOverridesDeletedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skipped">skipped</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference">DatasyncTaskTaskReportConfigOverridesSkippedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferred">transferred</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference">DatasyncTaskTaskReportConfigOverridesTransferredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verified">verified</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference">DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deletedInput">deletedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skippedInput">skippedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferredInput">transferredInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verifiedInput">verifiedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deleted"></a>

```typescript
public readonly deleted: DatasyncTaskTaskReportConfigOverridesDeletedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference">DatasyncTaskTaskReportConfigOverridesDeletedOutputReference</a>

---

##### `skipped`<sup>Required</sup> <a name="skipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skipped"></a>

```typescript
public readonly skipped: DatasyncTaskTaskReportConfigOverridesSkippedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference">DatasyncTaskTaskReportConfigOverridesSkippedOutputReference</a>

---

##### `transferred`<sup>Required</sup> <a name="transferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferred"></a>

```typescript
public readonly transferred: DatasyncTaskTaskReportConfigOverridesTransferredOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference">DatasyncTaskTaskReportConfigOverridesTransferredOutputReference</a>

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verified"></a>

```typescript
public readonly verified: DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference">DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference</a>

---

##### `deletedInput`<sup>Optional</sup> <a name="deletedInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deletedInput"></a>

```typescript
public readonly deletedInput: IResolvable | DatasyncTaskTaskReportConfigOverridesDeleted;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

---

##### `skippedInput`<sup>Optional</sup> <a name="skippedInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skippedInput"></a>

```typescript
public readonly skippedInput: IResolvable | DatasyncTaskTaskReportConfigOverridesSkipped;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

---

##### `transferredInput`<sup>Optional</sup> <a name="transferredInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferredInput"></a>

```typescript
public readonly transferredInput: IResolvable | DatasyncTaskTaskReportConfigOverridesTransferred;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

---

##### `verifiedInput`<sup>Optional</sup> <a name="verifiedInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verifiedInput"></a>

```typescript
public readonly verifiedInput: IResolvable | DatasyncTaskTaskReportConfigOverridesVerified;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskTaskReportConfigOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

---


### DatasyncTaskTaskReportConfigOverridesSkippedOutputReference <a name="DatasyncTaskTaskReportConfigOverridesSkippedOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resetReportLevel">resetReportLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReportLevel` <a name="resetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resetReportLevel"></a>

```typescript
public resetReportLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevelInput">reportLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevel">reportLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reportLevelInput`<sup>Optional</sup> <a name="reportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevelInput"></a>

```typescript
public readonly reportLevelInput: string;
```

- *Type:* string

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskTaskReportConfigOverridesSkipped;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

---


### DatasyncTaskTaskReportConfigOverridesTransferredOutputReference <a name="DatasyncTaskTaskReportConfigOverridesTransferredOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resetReportLevel">resetReportLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReportLevel` <a name="resetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resetReportLevel"></a>

```typescript
public resetReportLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevelInput">reportLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevel">reportLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reportLevelInput`<sup>Optional</sup> <a name="reportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevelInput"></a>

```typescript
public readonly reportLevelInput: string;
```

- *Type:* string

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskTaskReportConfigOverridesTransferred;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

---


### DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference <a name="DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktn/provider-awscc'

new datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resetReportLevel">resetReportLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReportLevel` <a name="resetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resetReportLevel"></a>

```typescript
public resetReportLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevelInput">reportLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevel">reportLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reportLevelInput`<sup>Optional</sup> <a name="reportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevelInput"></a>

```typescript
public readonly reportLevelInput: string;
```

- *Type:* string

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncTaskTaskReportConfigOverridesVerified;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

---




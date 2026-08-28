# `workspacesthinclientEnvironment` Submodule <a name="`workspacesthinclientEnvironment` Submodule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesthinclientEnvironment <a name="WorkspacesthinclientEnvironment" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment awscc_workspacesthinclient_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

new workspacesthinclientEnvironment.WorkspacesthinclientEnvironment(scope: Construct, id: string, config: WorkspacesthinclientEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig">WorkspacesthinclientEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig">WorkspacesthinclientEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putDeviceCreationTags">putDeviceCreationTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesiredSoftwareSetId">resetDesiredSoftwareSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesktopEndpoint">resetDesktopEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDeviceCreationTags">resetDeviceCreationTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateMode">resetSoftwareSetUpdateMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateSchedule">resetSoftwareSetUpdateSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeviceCreationTags` <a name="putDeviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putDeviceCreationTags"></a>

```typescript
public putDeviceCreationTags(value: IResolvable | WorkspacesthinclientEnvironmentDeviceCreationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putDeviceCreationTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>[]

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: WorkspacesthinclientEnvironmentMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putTags"></a>

```typescript
public putTags(value: IResolvable | WorkspacesthinclientEnvironmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>[]

---

##### `resetDesiredSoftwareSetId` <a name="resetDesiredSoftwareSetId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesiredSoftwareSetId"></a>

```typescript
public resetDesiredSoftwareSetId(): void
```

##### `resetDesktopEndpoint` <a name="resetDesktopEndpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesktopEndpoint"></a>

```typescript
public resetDesktopEndpoint(): void
```

##### `resetDeviceCreationTags` <a name="resetDeviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDeviceCreationTags"></a>

```typescript
public resetDeviceCreationTags(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSoftwareSetUpdateMode` <a name="resetSoftwareSetUpdateMode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateMode"></a>

```typescript
public resetSoftwareSetUpdateMode(): void
```

##### `resetSoftwareSetUpdateSchedule` <a name="resetSoftwareSetUpdateSchedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateSchedule"></a>

```typescript
public resetSoftwareSetUpdateSchedule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesthinclientEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isConstruct"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformElement"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformResource"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkspacesthinclientEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspacesthinclientEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspacesthinclientEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesthinclientEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.activationCode">activationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopType">desktopType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTags">deviceCreationTags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList">WorkspacesthinclientEnvironmentDeviceCreationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference">WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetId">pendingSoftwareSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetVersion">pendingSoftwareSetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.registeredDevicesCount">registeredDevicesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetComplianceStatus">softwareSetComplianceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList">WorkspacesthinclientEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetIdInput">desiredSoftwareSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArnInput">desktopArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpointInput">desktopEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTagsInput">deviceCreationTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateModeInput">softwareSetUpdateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateScheduleInput">softwareSetUpdateScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetId">desiredSoftwareSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArn">desktopArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpoint">desktopEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateMode">softwareSetUpdateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateSchedule">softwareSetUpdateSchedule</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `activationCode`<sup>Required</sup> <a name="activationCode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.activationCode"></a>

```typescript
public readonly activationCode: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `desktopType`<sup>Required</sup> <a name="desktopType" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopType"></a>

```typescript
public readonly desktopType: string;
```

- *Type:* string

---

##### `deviceCreationTags`<sup>Required</sup> <a name="deviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTags"></a>

```typescript
public readonly deviceCreationTags: WorkspacesthinclientEnvironmentDeviceCreationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList">WorkspacesthinclientEnvironmentDeviceCreationTagsList</a>

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference">WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference</a>

---

##### `pendingSoftwareSetId`<sup>Required</sup> <a name="pendingSoftwareSetId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetId"></a>

```typescript
public readonly pendingSoftwareSetId: string;
```

- *Type:* string

---

##### `pendingSoftwareSetVersion`<sup>Required</sup> <a name="pendingSoftwareSetVersion" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetVersion"></a>

```typescript
public readonly pendingSoftwareSetVersion: string;
```

- *Type:* string

---

##### `registeredDevicesCount`<sup>Required</sup> <a name="registeredDevicesCount" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.registeredDevicesCount"></a>

```typescript
public readonly registeredDevicesCount: number;
```

- *Type:* number

---

##### `softwareSetComplianceStatus`<sup>Required</sup> <a name="softwareSetComplianceStatus" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetComplianceStatus"></a>

```typescript
public readonly softwareSetComplianceStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tags"></a>

```typescript
public readonly tags: WorkspacesthinclientEnvironmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList">WorkspacesthinclientEnvironmentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `desiredSoftwareSetIdInput`<sup>Optional</sup> <a name="desiredSoftwareSetIdInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetIdInput"></a>

```typescript
public readonly desiredSoftwareSetIdInput: string;
```

- *Type:* string

---

##### `desktopArnInput`<sup>Optional</sup> <a name="desktopArnInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArnInput"></a>

```typescript
public readonly desktopArnInput: string;
```

- *Type:* string

---

##### `desktopEndpointInput`<sup>Optional</sup> <a name="desktopEndpointInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpointInput"></a>

```typescript
public readonly desktopEndpointInput: string;
```

- *Type:* string

---

##### `deviceCreationTagsInput`<sup>Optional</sup> <a name="deviceCreationTagsInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTagsInput"></a>

```typescript
public readonly deviceCreationTagsInput: IResolvable | WorkspacesthinclientEnvironmentDeviceCreationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>[]

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: IResolvable | WorkspacesthinclientEnvironmentMaintenanceWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `softwareSetUpdateModeInput`<sup>Optional</sup> <a name="softwareSetUpdateModeInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateModeInput"></a>

```typescript
public readonly softwareSetUpdateModeInput: string;
```

- *Type:* string

---

##### `softwareSetUpdateScheduleInput`<sup>Optional</sup> <a name="softwareSetUpdateScheduleInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateScheduleInput"></a>

```typescript
public readonly softwareSetUpdateScheduleInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WorkspacesthinclientEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>[]

---

##### `desiredSoftwareSetId`<sup>Required</sup> <a name="desiredSoftwareSetId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetId"></a>

```typescript
public readonly desiredSoftwareSetId: string;
```

- *Type:* string

---

##### `desktopArn`<sup>Required</sup> <a name="desktopArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArn"></a>

```typescript
public readonly desktopArn: string;
```

- *Type:* string

---

##### `desktopEndpoint`<sup>Required</sup> <a name="desktopEndpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpoint"></a>

```typescript
public readonly desktopEndpoint: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `softwareSetUpdateMode`<sup>Required</sup> <a name="softwareSetUpdateMode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateMode"></a>

```typescript
public readonly softwareSetUpdateMode: string;
```

- *Type:* string

---

##### `softwareSetUpdateSchedule`<sup>Required</sup> <a name="softwareSetUpdateSchedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateSchedule"></a>

```typescript
public readonly softwareSetUpdateSchedule: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesthinclientEnvironmentConfig <a name="WorkspacesthinclientEnvironmentConfig" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.Initializer"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

const workspacesthinclientEnvironmentConfig: workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopArn">desktopArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desiredSoftwareSetId">desiredSoftwareSetId</a></code> | <code>string</code> | The ID of the software set to apply. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopEndpoint">desktopEndpoint</a></code> | <code>string</code> | The URL for the identity provider login (only for environments that use AppStream 2.0). |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.deviceCreationTags">deviceCreationTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>[]</code> | An array of key-value pairs to apply to the newly created devices for this environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | A specification for a time window to apply software updates. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.name">name</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateMode">softwareSetUpdateMode</a></code> | <code>string</code> | An option to define which software updates to apply. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateSchedule">softwareSetUpdateSchedule</a></code> | <code>string</code> | An option to define if software updates should be applied within a maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `desktopArn`<sup>Required</sup> <a name="desktopArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopArn"></a>

```typescript
public readonly desktopArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#desktop_arn WorkspacesthinclientEnvironment#desktop_arn}

---

##### `desiredSoftwareSetId`<sup>Optional</sup> <a name="desiredSoftwareSetId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desiredSoftwareSetId"></a>

```typescript
public readonly desiredSoftwareSetId: string;
```

- *Type:* string

The ID of the software set to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#desired_software_set_id WorkspacesthinclientEnvironment#desired_software_set_id}

---

##### `desktopEndpoint`<sup>Optional</sup> <a name="desktopEndpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopEndpoint"></a>

```typescript
public readonly desktopEndpoint: string;
```

- *Type:* string

The URL for the identity provider login (only for environments that use AppStream 2.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#desktop_endpoint WorkspacesthinclientEnvironment#desktop_endpoint}

---

##### `deviceCreationTags`<sup>Optional</sup> <a name="deviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.deviceCreationTags"></a>

```typescript
public readonly deviceCreationTags: IResolvable | WorkspacesthinclientEnvironmentDeviceCreationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>[]

An array of key-value pairs to apply to the newly created devices for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#device_creation_tags WorkspacesthinclientEnvironment#device_creation_tags}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#kms_key_arn WorkspacesthinclientEnvironment#kms_key_arn}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: WorkspacesthinclientEnvironmentMaintenanceWindow;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

A specification for a time window to apply software updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#maintenance_window WorkspacesthinclientEnvironment#maintenance_window}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#name WorkspacesthinclientEnvironment#name}

---

##### `softwareSetUpdateMode`<sup>Optional</sup> <a name="softwareSetUpdateMode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateMode"></a>

```typescript
public readonly softwareSetUpdateMode: string;
```

- *Type:* string

An option to define which software updates to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#software_set_update_mode WorkspacesthinclientEnvironment#software_set_update_mode}

---

##### `softwareSetUpdateSchedule`<sup>Optional</sup> <a name="softwareSetUpdateSchedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateSchedule"></a>

```typescript
public readonly softwareSetUpdateSchedule: string;
```

- *Type:* string

An option to define if software updates should be applied within a maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#software_set_update_schedule WorkspacesthinclientEnvironment#software_set_update_schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | WorkspacesthinclientEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#tags WorkspacesthinclientEnvironment#tags}

---

### WorkspacesthinclientEnvironmentDeviceCreationTags <a name="WorkspacesthinclientEnvironmentDeviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.Initializer"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

const workspacesthinclientEnvironmentDeviceCreationTags: workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#key WorkspacesthinclientEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#value WorkspacesthinclientEnvironment#value}

---

### WorkspacesthinclientEnvironmentMaintenanceWindow <a name="WorkspacesthinclientEnvironmentMaintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.Initializer"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

const workspacesthinclientEnvironmentMaintenanceWindow: workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.applyTimeOf">applyTimeOf</a></code> | <code>string</code> | The desired time zone maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.daysOfTheWeek">daysOfTheWeek</a></code> | <code>string[]</code> | The date of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeHour">endTimeHour</a></code> | <code>number</code> | The hour end time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeMinute">endTimeMinute</a></code> | <code>number</code> | The minute end time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeHour">startTimeHour</a></code> | <code>number</code> | The hour start time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeMinute">startTimeMinute</a></code> | <code>number</code> | The minute start time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.type">type</a></code> | <code>string</code> | The type of maintenance window. |

---

##### `applyTimeOf`<sup>Optional</sup> <a name="applyTimeOf" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.applyTimeOf"></a>

```typescript
public readonly applyTimeOf: string;
```

- *Type:* string

The desired time zone maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#apply_time_of WorkspacesthinclientEnvironment#apply_time_of}

---

##### `daysOfTheWeek`<sup>Optional</sup> <a name="daysOfTheWeek" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.daysOfTheWeek"></a>

```typescript
public readonly daysOfTheWeek: string[];
```

- *Type:* string[]

The date of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#days_of_the_week WorkspacesthinclientEnvironment#days_of_the_week}

---

##### `endTimeHour`<sup>Optional</sup> <a name="endTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeHour"></a>

```typescript
public readonly endTimeHour: number;
```

- *Type:* number

The hour end time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#end_time_hour WorkspacesthinclientEnvironment#end_time_hour}

---

##### `endTimeMinute`<sup>Optional</sup> <a name="endTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeMinute"></a>

```typescript
public readonly endTimeMinute: number;
```

- *Type:* number

The minute end time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#end_time_minute WorkspacesthinclientEnvironment#end_time_minute}

---

##### `startTimeHour`<sup>Optional</sup> <a name="startTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeHour"></a>

```typescript
public readonly startTimeHour: number;
```

- *Type:* number

The hour start time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#start_time_hour WorkspacesthinclientEnvironment#start_time_hour}

---

##### `startTimeMinute`<sup>Optional</sup> <a name="startTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeMinute"></a>

```typescript
public readonly startTimeMinute: number;
```

- *Type:* number

The minute start time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#start_time_minute WorkspacesthinclientEnvironment#start_time_minute}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#type WorkspacesthinclientEnvironment#type}

---

### WorkspacesthinclientEnvironmentTags <a name="WorkspacesthinclientEnvironmentTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.Initializer"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

const workspacesthinclientEnvironmentTags: workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#key WorkspacesthinclientEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#value WorkspacesthinclientEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesthinclientEnvironmentDeviceCreationTagsList <a name="WorkspacesthinclientEnvironmentDeviceCreationTagsList" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

new workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.get"></a>

```typescript
public get(index: number): WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesthinclientEnvironmentDeviceCreationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>[]

---


### WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference <a name="WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

new workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesthinclientEnvironmentDeviceCreationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags">WorkspacesthinclientEnvironmentDeviceCreationTags</a>

---


### WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference <a name="WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

new workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetApplyTimeOf">resetApplyTimeOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetDaysOfTheWeek">resetDaysOfTheWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeHour">resetEndTimeHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeMinute">resetEndTimeMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeHour">resetStartTimeHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeMinute">resetStartTimeMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplyTimeOf` <a name="resetApplyTimeOf" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetApplyTimeOf"></a>

```typescript
public resetApplyTimeOf(): void
```

##### `resetDaysOfTheWeek` <a name="resetDaysOfTheWeek" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetDaysOfTheWeek"></a>

```typescript
public resetDaysOfTheWeek(): void
```

##### `resetEndTimeHour` <a name="resetEndTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeHour"></a>

```typescript
public resetEndTimeHour(): void
```

##### `resetEndTimeMinute` <a name="resetEndTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeMinute"></a>

```typescript
public resetEndTimeMinute(): void
```

##### `resetStartTimeHour` <a name="resetStartTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeHour"></a>

```typescript
public resetStartTimeHour(): void
```

##### `resetStartTimeMinute` <a name="resetStartTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeMinute"></a>

```typescript
public resetStartTimeMinute(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOfInput">applyTimeOfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeekInput">daysOfTheWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHourInput">endTimeHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinuteInput">endTimeMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHourInput">startTimeHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinuteInput">startTimeMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOf">applyTimeOf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeek">daysOfTheWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHour">endTimeHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinute">endTimeMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHour">startTimeHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinute">startTimeMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyTimeOfInput`<sup>Optional</sup> <a name="applyTimeOfInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOfInput"></a>

```typescript
public readonly applyTimeOfInput: string;
```

- *Type:* string

---

##### `daysOfTheWeekInput`<sup>Optional</sup> <a name="daysOfTheWeekInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeekInput"></a>

```typescript
public readonly daysOfTheWeekInput: string[];
```

- *Type:* string[]

---

##### `endTimeHourInput`<sup>Optional</sup> <a name="endTimeHourInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHourInput"></a>

```typescript
public readonly endTimeHourInput: number;
```

- *Type:* number

---

##### `endTimeMinuteInput`<sup>Optional</sup> <a name="endTimeMinuteInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinuteInput"></a>

```typescript
public readonly endTimeMinuteInput: number;
```

- *Type:* number

---

##### `startTimeHourInput`<sup>Optional</sup> <a name="startTimeHourInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHourInput"></a>

```typescript
public readonly startTimeHourInput: number;
```

- *Type:* number

---

##### `startTimeMinuteInput`<sup>Optional</sup> <a name="startTimeMinuteInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinuteInput"></a>

```typescript
public readonly startTimeMinuteInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `applyTimeOf`<sup>Required</sup> <a name="applyTimeOf" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOf"></a>

```typescript
public readonly applyTimeOf: string;
```

- *Type:* string

---

##### `daysOfTheWeek`<sup>Required</sup> <a name="daysOfTheWeek" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeek"></a>

```typescript
public readonly daysOfTheWeek: string[];
```

- *Type:* string[]

---

##### `endTimeHour`<sup>Required</sup> <a name="endTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHour"></a>

```typescript
public readonly endTimeHour: number;
```

- *Type:* number

---

##### `endTimeMinute`<sup>Required</sup> <a name="endTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinute"></a>

```typescript
public readonly endTimeMinute: number;
```

- *Type:* number

---

##### `startTimeHour`<sup>Required</sup> <a name="startTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHour"></a>

```typescript
public readonly startTimeHour: number;
```

- *Type:* number

---

##### `startTimeMinute`<sup>Required</sup> <a name="startTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinute"></a>

```typescript
public readonly startTimeMinute: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesthinclientEnvironmentMaintenanceWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

---


### WorkspacesthinclientEnvironmentTagsList <a name="WorkspacesthinclientEnvironmentTagsList" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

new workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.get"></a>

```typescript
public get(index: number): WorkspacesthinclientEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesthinclientEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>[]

---


### WorkspacesthinclientEnvironmentTagsOutputReference <a name="WorkspacesthinclientEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer"></a>

```typescript
import { workspacesthinclientEnvironment } from '@cdktn/provider-awscc'

new workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesthinclientEnvironmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags">WorkspacesthinclientEnvironmentTags</a>

---




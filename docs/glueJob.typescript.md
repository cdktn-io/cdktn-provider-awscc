# `glueJob` Submodule <a name="`glueJob` Submodule" id="@cdktn/provider-awscc.glueJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueJob <a name="GlueJob" id="@cdktn/provider-awscc.glueJob.GlueJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job awscc_glue_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

new glueJob.GlueJob(scope: Construct, id: string, config: GlueJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig">GlueJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig">GlueJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putCommand">putCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty">putExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty">putNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetAllocatedCapacity">resetAllocatedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetConnections">resetConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetDefaultArguments">resetDefaultArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionClass">resetExecutionClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionProperty">resetExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetGlueVersion">resetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetJobMode">resetJobMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetJobRunQueuingEnabled">resetJobRunQueuingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetLogUri">resetLogUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNonOverridableArguments">resetNonOverridableArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNotificationProperty">resetNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNumberOfWorkers">resetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetSecurityConfiguration">resetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetWorkerType">resetWorkerType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueJob.GlueJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueJob.GlueJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueJob.GlueJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueJob.GlueJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueJob.GlueJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueJob.GlueJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueJob.GlueJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueJob.GlueJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueJob.GlueJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueJob.GlueJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCommand` <a name="putCommand" id="@cdktn/provider-awscc.glueJob.GlueJob.putCommand"></a>

```typescript
public putCommand(value: GlueJobCommand): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.putCommand.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `putConnections` <a name="putConnections" id="@cdktn/provider-awscc.glueJob.GlueJob.putConnections"></a>

```typescript
public putConnections(value: GlueJobConnections): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.putConnections.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

---

##### `putExecutionProperty` <a name="putExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty"></a>

```typescript
public putExecutionProperty(value: GlueJobExecutionProperty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `putNotificationProperty` <a name="putNotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty"></a>

```typescript
public putNotificationProperty(value: GlueJobNotificationProperty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `resetAllocatedCapacity` <a name="resetAllocatedCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.resetAllocatedCapacity"></a>

```typescript
public resetAllocatedCapacity(): void
```

##### `resetConnections` <a name="resetConnections" id="@cdktn/provider-awscc.glueJob.GlueJob.resetConnections"></a>

```typescript
public resetConnections(): void
```

##### `resetDefaultArguments` <a name="resetDefaultArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.resetDefaultArguments"></a>

```typescript
public resetDefaultArguments(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueJob.GlueJob.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExecutionClass` <a name="resetExecutionClass" id="@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionClass"></a>

```typescript
public resetExecutionClass(): void
```

##### `resetExecutionProperty` <a name="resetExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionProperty"></a>

```typescript
public resetExecutionProperty(): void
```

##### `resetGlueVersion` <a name="resetGlueVersion" id="@cdktn/provider-awscc.glueJob.GlueJob.resetGlueVersion"></a>

```typescript
public resetGlueVersion(): void
```

##### `resetJobMode` <a name="resetJobMode" id="@cdktn/provider-awscc.glueJob.GlueJob.resetJobMode"></a>

```typescript
public resetJobMode(): void
```

##### `resetJobRunQueuingEnabled` <a name="resetJobRunQueuingEnabled" id="@cdktn/provider-awscc.glueJob.GlueJob.resetJobRunQueuingEnabled"></a>

```typescript
public resetJobRunQueuingEnabled(): void
```

##### `resetLogUri` <a name="resetLogUri" id="@cdktn/provider-awscc.glueJob.GlueJob.resetLogUri"></a>

```typescript
public resetLogUri(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaxCapacity"></a>

```typescript
public resetMaxCapacity(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueJob.GlueJob.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNonOverridableArguments` <a name="resetNonOverridableArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNonOverridableArguments"></a>

```typescript
public resetNonOverridableArguments(): void
```

##### `resetNotificationProperty` <a name="resetNotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNotificationProperty"></a>

```typescript
public resetNotificationProperty(): void
```

##### `resetNumberOfWorkers` <a name="resetNumberOfWorkers" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNumberOfWorkers"></a>

```typescript
public resetNumberOfWorkers(): void
```

##### `resetSecurityConfiguration` <a name="resetSecurityConfiguration" id="@cdktn/provider-awscc.glueJob.GlueJob.resetSecurityConfiguration"></a>

```typescript
public resetSecurityConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueJob.GlueJob.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.glueJob.GlueJob.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetWorkerType` <a name="resetWorkerType" id="@cdktn/provider-awscc.glueJob.GlueJob.resetWorkerType"></a>

```typescript
public resetWorkerType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueJob.GlueJob.isConstruct"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

glueJob.GlueJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueJob.GlueJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

glueJob.GlueJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

glueJob.GlueJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

glueJob.GlueJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlueJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference">GlueJobConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionProperty">executionProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.notificationProperty">notificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacityInput">allocatedCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.commandInput">commandInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connectionsInput">connectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArgumentsInput">defaultArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionClassInput">executionClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionPropertyInput">executionPropertyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersionInput">glueVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobModeInput">jobModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabledInput">jobRunQueuingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.logUriInput">logUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacityInput">maxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArgumentsInput">nonOverridableArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.notificationPropertyInput">notificationPropertyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkersInput">numberOfWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfigurationInput">securityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tagsInput">tagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.workerTypeInput">workerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacity">allocatedCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArguments">defaultArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionClass">executionClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersion">glueVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobMode">jobMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabled">jobRunQueuingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.logUri">logUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArguments">nonOverridableArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfiguration">securityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tags">tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.workerType">workerType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueJob.GlueJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueJob.GlueJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueJob.GlueJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueJob.GlueJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueJob.GlueJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueJob.GlueJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueJob.GlueJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueJob.GlueJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueJob.GlueJob.property.command"></a>

```typescript
public readonly command: GlueJobCommandOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connections"></a>

```typescript
public readonly connections: GlueJobConnectionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference">GlueJobConnectionsOutputReference</a>

---

##### `executionProperty`<sup>Required</sup> <a name="executionProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionProperty"></a>

```typescript
public readonly executionProperty: GlueJobExecutionPropertyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationProperty`<sup>Required</sup> <a name="notificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.property.notificationProperty"></a>

```typescript
public readonly notificationProperty: GlueJobNotificationPropertyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a>

---

##### `allocatedCapacityInput`<sup>Optional</sup> <a name="allocatedCapacityInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacityInput"></a>

```typescript
public readonly allocatedCapacityInput: number;
```

- *Type:* number

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.commandInput"></a>

```typescript
public readonly commandInput: IResolvable | GlueJobCommand;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connectionsInput"></a>

```typescript
public readonly connectionsInput: IResolvable | GlueJobConnections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

---

##### `defaultArgumentsInput`<sup>Optional</sup> <a name="defaultArgumentsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArgumentsInput"></a>

```typescript
public readonly defaultArgumentsInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `executionClassInput`<sup>Optional</sup> <a name="executionClassInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionClassInput"></a>

```typescript
public readonly executionClassInput: string;
```

- *Type:* string

---

##### `executionPropertyInput`<sup>Optional</sup> <a name="executionPropertyInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionPropertyInput"></a>

```typescript
public readonly executionPropertyInput: IResolvable | GlueJobExecutionProperty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `glueVersionInput`<sup>Optional</sup> <a name="glueVersionInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersionInput"></a>

```typescript
public readonly glueVersionInput: string;
```

- *Type:* string

---

##### `jobModeInput`<sup>Optional</sup> <a name="jobModeInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobModeInput"></a>

```typescript
public readonly jobModeInput: string;
```

- *Type:* string

---

##### `jobRunQueuingEnabledInput`<sup>Optional</sup> <a name="jobRunQueuingEnabledInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabledInput"></a>

```typescript
public readonly jobRunQueuingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logUriInput`<sup>Optional</sup> <a name="logUriInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.logUriInput"></a>

```typescript
public readonly logUriInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: string;
```

- *Type:* string

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: number;
```

- *Type:* number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nonOverridableArgumentsInput`<sup>Optional</sup> <a name="nonOverridableArgumentsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArgumentsInput"></a>

```typescript
public readonly nonOverridableArgumentsInput: string;
```

- *Type:* string

---

##### `notificationPropertyInput`<sup>Optional</sup> <a name="notificationPropertyInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.notificationPropertyInput"></a>

```typescript
public readonly notificationPropertyInput: IResolvable | GlueJobNotificationProperty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `numberOfWorkersInput`<sup>Optional</sup> <a name="numberOfWorkersInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkersInput"></a>

```typescript
public readonly numberOfWorkersInput: number;
```

- *Type:* number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `securityConfigurationInput`<sup>Optional</sup> <a name="securityConfigurationInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfigurationInput"></a>

```typescript
public readonly securityConfigurationInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tagsInput"></a>

```typescript
public readonly tagsInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `workerTypeInput`<sup>Optional</sup> <a name="workerTypeInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.workerTypeInput"></a>

```typescript
public readonly workerTypeInput: string;
```

- *Type:* string

---

##### `allocatedCapacity`<sup>Required</sup> <a name="allocatedCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacity"></a>

```typescript
public readonly allocatedCapacity: number;
```

- *Type:* number

---

##### `defaultArguments`<sup>Required</sup> <a name="defaultArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArguments"></a>

```typescript
public readonly defaultArguments: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueJob.GlueJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionClass`<sup>Required</sup> <a name="executionClass" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionClass"></a>

```typescript
public readonly executionClass: string;
```

- *Type:* string

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersion"></a>

```typescript
public readonly glueVersion: string;
```

- *Type:* string

---

##### `jobMode`<sup>Required</sup> <a name="jobMode" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobMode"></a>

```typescript
public readonly jobMode: string;
```

- *Type:* string

---

##### `jobRunQueuingEnabled`<sup>Required</sup> <a name="jobRunQueuingEnabled" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabled"></a>

```typescript
public readonly jobRunQueuingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktn/provider-awscc.glueJob.GlueJob.property.logUri"></a>

```typescript
public readonly logUri: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nonOverridableArguments`<sup>Required</sup> <a name="nonOverridableArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArguments"></a>

```typescript
public readonly nonOverridableArguments: string;
```

- *Type:* string

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueJob.GlueJob.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `securityConfiguration`<sup>Required</sup> <a name="securityConfiguration" id="@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfiguration"></a>

```typescript
public readonly securityConfiguration: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.glueJob.GlueJob.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktn/provider-awscc.glueJob.GlueJob.property.workerType"></a>

```typescript
public readonly workerType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueJobCommand <a name="GlueJobCommand" id="@cdktn/provider-awscc.glueJob.GlueJobCommand"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.Initializer"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

const glueJobCommand: glueJob.GlueJobCommand = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.name">name</a></code> | <code>string</code> | The name of the job command. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | The Python version being used to execute a Python shell job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.runtime">runtime</a></code> | <code>string</code> | Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.scriptLocation">scriptLocation</a></code> | <code>string</code> | Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the job command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#name GlueJob#name}

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

The Python version being used to execute a Python shell job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#python_version GlueJob#python_version}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#runtime GlueJob#runtime}

---

##### `scriptLocation`<sup>Optional</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.scriptLocation"></a>

```typescript
public readonly scriptLocation: string;
```

- *Type:* string

Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#script_location GlueJob#script_location}

---

### GlueJobConfig <a name="GlueJobConfig" id="@cdktn/provider-awscc.glueJob.GlueJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.Initializer"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

const glueJobConfig: glueJob.GlueJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | The code that executes a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.role">role</a></code> | <code>string</code> | The name or Amazon Resource Name (ARN) of the IAM role associated with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.allocatedCapacity">allocatedCapacity</a></code> | <code>number</code> | The number of capacity units that are allocated to this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | Specifies the connections used by a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.defaultArguments">defaultArguments</a></code> | <code>string</code> | The default arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.description">description</a></code> | <code>string</code> | A description of the job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionClass">executionClass</a></code> | <code>string</code> | Indicates whether the job is run with a standard or flexible execution class. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionProperty">executionProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | The maximum number of concurrent runs that are allowed for this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.glueVersion">glueVersion</a></code> | <code>string</code> | Glue version determines the versions of Apache Spark and Python that AWS Glue supports. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobMode">jobMode</a></code> | <code>string</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobRunQueuingEnabled">jobRunQueuingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.logUri">logUri</a></code> | <code>string</code> | This field is reserved for future use. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>string</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | The maximum number of times to retry this job after a JobRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.name">name</a></code> | <code>string</code> | The name you assign to the job definition. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.nonOverridableArguments">nonOverridableArguments</a></code> | <code>string</code> | Non-overridable arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.notificationProperty">notificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | Specifies configuration properties of a notification. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | The number of workers of a defined workerType that are allocated when a job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.securityConfiguration">securityConfiguration</a></code> | <code>string</code> | The name of the SecurityConfiguration structure to be used with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.tags">tags</a></code> | <code>string</code> | The tags to use with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.timeout">timeout</a></code> | <code>number</code> | The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.workerType">workerType</a></code> | <code>string</code> | TThe type of predefined worker that is allocated when a job runs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.command"></a>

```typescript
public readonly command: GlueJobCommand;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

The code that executes a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#command GlueJob#command}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The name or Amazon Resource Name (ARN) of the IAM role associated with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#role GlueJob#role}

---

##### `allocatedCapacity`<sup>Optional</sup> <a name="allocatedCapacity" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.allocatedCapacity"></a>

```typescript
public readonly allocatedCapacity: number;
```

- *Type:* number

The number of capacity units that are allocated to this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#allocated_capacity GlueJob#allocated_capacity}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connections"></a>

```typescript
public readonly connections: GlueJobConnections;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

Specifies the connections used by a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#connections GlueJob#connections}

---

##### `defaultArguments`<sup>Optional</sup> <a name="defaultArguments" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.defaultArguments"></a>

```typescript
public readonly defaultArguments: string;
```

- *Type:* string

The default arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#default_arguments GlueJob#default_arguments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#description GlueJob#description}

---

##### `executionClass`<sup>Optional</sup> <a name="executionClass" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionClass"></a>

```typescript
public readonly executionClass: string;
```

- *Type:* string

Indicates whether the job is run with a standard or flexible execution class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#execution_class GlueJob#execution_class}

---

##### `executionProperty`<sup>Optional</sup> <a name="executionProperty" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionProperty"></a>

```typescript
public readonly executionProperty: GlueJobExecutionProperty;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

The maximum number of concurrent runs that are allowed for this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#execution_property GlueJob#execution_property}

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.glueVersion"></a>

```typescript
public readonly glueVersion: string;
```

- *Type:* string

Glue version determines the versions of Apache Spark and Python that AWS Glue supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#glue_version GlueJob#glue_version}

---

##### `jobMode`<sup>Optional</sup> <a name="jobMode" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobMode"></a>

```typescript
public readonly jobMode: string;
```

- *Type:* string

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#job_mode GlueJob#job_mode}

---

##### `jobRunQueuingEnabled`<sup>Optional</sup> <a name="jobRunQueuingEnabled" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobRunQueuingEnabled"></a>

```typescript
public readonly jobRunQueuingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#job_run_queuing_enabled GlueJob#job_run_queuing_enabled}

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.logUri"></a>

```typescript
public readonly logUri: string;
```

- *Type:* string

This field is reserved for future use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#log_uri GlueJob#log_uri}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: string;
```

- *Type:* string

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#maintenance_window GlueJob#maintenance_window}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#max_capacity GlueJob#max_capacity}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

The maximum number of times to retry this job after a JobRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#max_retries GlueJob#max_retries}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name you assign to the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#name GlueJob#name}

---

##### `nonOverridableArguments`<sup>Optional</sup> <a name="nonOverridableArguments" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.nonOverridableArguments"></a>

```typescript
public readonly nonOverridableArguments: string;
```

- *Type:* string

Non-overridable arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}

---

##### `notificationProperty`<sup>Optional</sup> <a name="notificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.notificationProperty"></a>

```typescript
public readonly notificationProperty: GlueJobNotificationProperty;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

Specifies configuration properties of a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#notification_property GlueJob#notification_property}

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

The number of workers of a defined workerType that are allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#number_of_workers GlueJob#number_of_workers}

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.securityConfiguration"></a>

```typescript
public readonly securityConfiguration: string;
```

- *Type:* string

The name of the SecurityConfiguration structure to be used with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#security_configuration GlueJob#security_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

The tags to use with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#tags GlueJob#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#timeout GlueJob#timeout}

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.workerType"></a>

```typescript
public readonly workerType: string;
```

- *Type:* string

TThe type of predefined worker that is allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#worker_type GlueJob#worker_type}

---

### GlueJobConnections <a name="GlueJobConnections" id="@cdktn/provider-awscc.glueJob.GlueJobConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobConnections.Initializer"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

const glueJobConnections: glueJob.GlueJobConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections.property.connections">connections</a></code> | <code>string[]</code> | A list of connections used by the job. |

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJobConnections.property.connections"></a>

```typescript
public readonly connections: string[];
```

- *Type:* string[]

A list of connections used by the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#connections GlueJob#connections}

---

### GlueJobExecutionProperty <a name="GlueJobExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.Initializer"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

const glueJobExecutionProperty: glueJob.GlueJobExecutionProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns">maxConcurrentRuns</a></code> | <code>number</code> | The maximum number of concurrent runs allowed for the job. |

---

##### `maxConcurrentRuns`<sup>Optional</sup> <a name="maxConcurrentRuns" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns"></a>

```typescript
public readonly maxConcurrentRuns: number;
```

- *Type:* number

The maximum number of concurrent runs allowed for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}

---

### GlueJobNotificationProperty <a name="GlueJobNotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.Initializer"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

const glueJobNotificationProperty: glueJob.GlueJobNotificationProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter">notifyDelayAfter</a></code> | <code>number</code> | It is the number of minutes to wait before sending a job run delay notification after a job run starts. |

---

##### `notifyDelayAfter`<sup>Optional</sup> <a name="notifyDelayAfter" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter"></a>

```typescript
public readonly notifyDelayAfter: number;
```

- *Type:* number

It is the number of minutes to wait before sending a job run delay notification after a job run starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#notify_delay_after GlueJob#notify_delay_after}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueJobCommandOutputReference <a name="GlueJobCommandOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

new glueJob.GlueJobCommandOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetScriptLocation">resetScriptLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetPythonVersion"></a>

```typescript
public resetPythonVersion(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetScriptLocation` <a name="resetScriptLocation" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetScriptLocation"></a>

```typescript
public resetScriptLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput">pythonVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput">scriptLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocation">scriptLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput"></a>

```typescript
public readonly pythonVersionInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `scriptLocationInput`<sup>Optional</sup> <a name="scriptLocationInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput"></a>

```typescript
public readonly scriptLocationInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `scriptLocation`<sup>Required</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocation"></a>

```typescript
public readonly scriptLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueJobCommand;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

---


### GlueJobConnectionsOutputReference <a name="GlueJobConnectionsOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

new glueJob.GlueJobConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resetConnections">resetConnections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnections` <a name="resetConnections" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resetConnections"></a>

```typescript
public resetConnections(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connectionsInput">connectionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connections">connections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connectionsInput"></a>

```typescript
public readonly connectionsInput: string[];
```

- *Type:* string[]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connections"></a>

```typescript
public readonly connections: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueJobConnections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

---


### GlueJobExecutionPropertyOutputReference <a name="GlueJobExecutionPropertyOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

new glueJob.GlueJobExecutionPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns">resetMaxConcurrentRuns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConcurrentRuns` <a name="resetMaxConcurrentRuns" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns"></a>

```typescript
public resetMaxConcurrentRuns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput">maxConcurrentRunsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns">maxConcurrentRuns</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxConcurrentRunsInput`<sup>Optional</sup> <a name="maxConcurrentRunsInput" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput"></a>

```typescript
public readonly maxConcurrentRunsInput: number;
```

- *Type:* number

---

##### `maxConcurrentRuns`<sup>Required</sup> <a name="maxConcurrentRuns" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns"></a>

```typescript
public readonly maxConcurrentRuns: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueJobExecutionProperty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---


### GlueJobNotificationPropertyOutputReference <a name="GlueJobNotificationPropertyOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer"></a>

```typescript
import { glueJob } from '@cdktn/provider-awscc'

new glueJob.GlueJobNotificationPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter">resetNotifyDelayAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotifyDelayAfter` <a name="resetNotifyDelayAfter" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```typescript
public resetNotifyDelayAfter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput">notifyDelayAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter">notifyDelayAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notifyDelayAfterInput`<sup>Optional</sup> <a name="notifyDelayAfterInput" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```typescript
public readonly notifyDelayAfterInput: number;
```

- *Type:* number

---

##### `notifyDelayAfter`<sup>Required</sup> <a name="notifyDelayAfter" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```typescript
public readonly notifyDelayAfter: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueJobNotificationProperty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---




# `iotJob` Submodule <a name="`iotJob` Submodule" id="@cdktn/provider-awscc.iotJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotJob <a name="IotJob" id="@cdktn/provider-awscc.iotJob.IotJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job awscc_iot_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJob(scope: Construct, id: string, config: IotJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig">IotJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotJob.IotJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobConfig">IotJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putAbortConfig">putAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRetryConfig">putJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRolloutConfig">putJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putPresignedUrlConfig">putPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putSchedulingConfig">putSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.putTimeoutConfig">putTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetAbortConfig">resetAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDestinationPackageVersions">resetDestinationPackageVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDocument">resetDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDocumentParameters">resetDocumentParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetDocumentSource">resetDocumentSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetJobExecutionsRetryConfig">resetJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetJobExecutionsRolloutConfig">resetJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetJobTemplateArn">resetJobTemplateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetPresignedUrlConfig">resetPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetSchedulingConfig">resetSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetTargetSelection">resetTargetSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.resetTimeoutConfig">resetTimeoutConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotJob.IotJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotJob.IotJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotJob.IotJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotJob.IotJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotJob.IotJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotJob.IotJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotJob.IotJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotJob.IotJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotJob.IotJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotJob.IotJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotJob.IotJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotJob.IotJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotJob.IotJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotJob.IotJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJob.IotJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJob.IotJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotJob.IotJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJob.IotJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotJob.IotJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotJob.IotJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotJob.IotJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotJob.IotJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJob.IotJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAbortConfig` <a name="putAbortConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putAbortConfig"></a>

```typescript
public putAbortConfig(value: IotJobAbortConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putAbortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a>

---

##### `putJobExecutionsRetryConfig` <a name="putJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRetryConfig"></a>

```typescript
public putJobExecutionsRetryConfig(value: IotJobJobExecutionsRetryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a>

---

##### `putJobExecutionsRolloutConfig` <a name="putJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRolloutConfig"></a>

```typescript
public putJobExecutionsRolloutConfig(value: IotJobJobExecutionsRolloutConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putJobExecutionsRolloutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a>

---

##### `putPresignedUrlConfig` <a name="putPresignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putPresignedUrlConfig"></a>

```typescript
public putPresignedUrlConfig(value: IotJobPresignedUrlConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putPresignedUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a>

---

##### `putSchedulingConfig` <a name="putSchedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putSchedulingConfig"></a>

```typescript
public putSchedulingConfig(value: IotJobSchedulingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putSchedulingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotJob.IotJob.putTags"></a>

```typescript
public putTags(value: IResolvable | IotJobTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]

---

##### `putTimeoutConfig` <a name="putTimeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.putTimeoutConfig"></a>

```typescript
public putTimeoutConfig(value: IotJobTimeoutConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJob.putTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a>

---

##### `resetAbortConfig` <a name="resetAbortConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetAbortConfig"></a>

```typescript
public resetAbortConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotJob.IotJob.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationPackageVersions` <a name="resetDestinationPackageVersions" id="@cdktn/provider-awscc.iotJob.IotJob.resetDestinationPackageVersions"></a>

```typescript
public resetDestinationPackageVersions(): void
```

##### `resetDocument` <a name="resetDocument" id="@cdktn/provider-awscc.iotJob.IotJob.resetDocument"></a>

```typescript
public resetDocument(): void
```

##### `resetDocumentParameters` <a name="resetDocumentParameters" id="@cdktn/provider-awscc.iotJob.IotJob.resetDocumentParameters"></a>

```typescript
public resetDocumentParameters(): void
```

##### `resetDocumentSource` <a name="resetDocumentSource" id="@cdktn/provider-awscc.iotJob.IotJob.resetDocumentSource"></a>

```typescript
public resetDocumentSource(): void
```

##### `resetJobExecutionsRetryConfig` <a name="resetJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetJobExecutionsRetryConfig"></a>

```typescript
public resetJobExecutionsRetryConfig(): void
```

##### `resetJobExecutionsRolloutConfig` <a name="resetJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetJobExecutionsRolloutConfig"></a>

```typescript
public resetJobExecutionsRolloutConfig(): void
```

##### `resetJobTemplateArn` <a name="resetJobTemplateArn" id="@cdktn/provider-awscc.iotJob.IotJob.resetJobTemplateArn"></a>

```typescript
public resetJobTemplateArn(): void
```

##### `resetPresignedUrlConfig` <a name="resetPresignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetPresignedUrlConfig"></a>

```typescript
public resetPresignedUrlConfig(): void
```

##### `resetSchedulingConfig` <a name="resetSchedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetSchedulingConfig"></a>

```typescript
public resetSchedulingConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotJob.IotJob.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetSelection` <a name="resetTargetSelection" id="@cdktn/provider-awscc.iotJob.IotJob.resetTargetSelection"></a>

```typescript
public resetTargetSelection(): void
```

##### `resetTimeoutConfig` <a name="resetTimeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.resetTimeoutConfig"></a>

```typescript
public resetTimeoutConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotJob.IotJob.isConstruct"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

iotJob.IotJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJob.IotJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotJob.IotJob.isTerraformElement"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

iotJob.IotJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJob.IotJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotJob.IotJob.isTerraformResource"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

iotJob.IotJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJob.IotJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

iotJob.IotJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJob.IotJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.abortConfig">abortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference">IotJobAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRetryConfig">jobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference">IotJobJobExecutionsRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRolloutConfig">jobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference">IotJobJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.presignedUrlConfig">presignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference">IotJobPresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.schedulingConfig">schedulingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference">IotJobSchedulingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList">IotJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference">IotJobTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.abortConfigInput">abortConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.destinationPackageVersionsInput">destinationPackageVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentInput">documentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentParametersInput">documentParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentSourceInput">documentSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRetryConfigInput">jobExecutionsRetryConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRolloutConfigInput">jobExecutionsRolloutConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobIdInput">jobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobTemplateArnInput">jobTemplateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.presignedUrlConfigInput">presignedUrlConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.schedulingConfigInput">schedulingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.targetSelectionInput">targetSelectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.targetsInput">targetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.timeoutConfigInput">timeoutConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.destinationPackageVersions">destinationPackageVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.document">document</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentParameters">documentParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.documentSource">documentSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.jobTemplateArn">jobTemplateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.targets">targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.targetSelection">targetSelection</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotJob.IotJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotJob.IotJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotJob.IotJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotJob.IotJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotJob.IotJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotJob.IotJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotJob.IotJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotJob.IotJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotJob.IotJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotJob.IotJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotJob.IotJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJob.IotJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotJob.IotJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `abortConfig`<sup>Required</sup> <a name="abortConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.abortConfig"></a>

```typescript
public readonly abortConfig: IotJobAbortConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference">IotJobAbortConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotJob.IotJob.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.iotJob.IotJob.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJob.IotJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobExecutionsRetryConfig`<sup>Required</sup> <a name="jobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRetryConfig"></a>

```typescript
public readonly jobExecutionsRetryConfig: IotJobJobExecutionsRetryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference">IotJobJobExecutionsRetryConfigOutputReference</a>

---

##### `jobExecutionsRolloutConfig`<sup>Required</sup> <a name="jobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRolloutConfig"></a>

```typescript
public readonly jobExecutionsRolloutConfig: IotJobJobExecutionsRolloutConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference">IotJobJobExecutionsRolloutConfigOutputReference</a>

---

##### `presignedUrlConfig`<sup>Required</sup> <a name="presignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.presignedUrlConfig"></a>

```typescript
public readonly presignedUrlConfig: IotJobPresignedUrlConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference">IotJobPresignedUrlConfigOutputReference</a>

---

##### `schedulingConfig`<sup>Required</sup> <a name="schedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.schedulingConfig"></a>

```typescript
public readonly schedulingConfig: IotJobSchedulingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference">IotJobSchedulingConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotJob.IotJob.property.tags"></a>

```typescript
public readonly tags: IotJobTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList">IotJobTagsList</a>

---

##### `timeoutConfig`<sup>Required</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJob.property.timeoutConfig"></a>

```typescript
public readonly timeoutConfig: IotJobTimeoutConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference">IotJobTimeoutConfigOutputReference</a>

---

##### `abortConfigInput`<sup>Optional</sup> <a name="abortConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.abortConfigInput"></a>

```typescript
public readonly abortConfigInput: IResolvable | IotJobAbortConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationPackageVersionsInput`<sup>Optional</sup> <a name="destinationPackageVersionsInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.destinationPackageVersionsInput"></a>

```typescript
public readonly destinationPackageVersionsInput: string[];
```

- *Type:* string[]

---

##### `documentInput`<sup>Optional</sup> <a name="documentInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentInput"></a>

```typescript
public readonly documentInput: string;
```

- *Type:* string

---

##### `documentParametersInput`<sup>Optional</sup> <a name="documentParametersInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentParametersInput"></a>

```typescript
public readonly documentParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `documentSourceInput`<sup>Optional</sup> <a name="documentSourceInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentSourceInput"></a>

```typescript
public readonly documentSourceInput: string;
```

- *Type:* string

---

##### `jobExecutionsRetryConfigInput`<sup>Optional</sup> <a name="jobExecutionsRetryConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRetryConfigInput"></a>

```typescript
public readonly jobExecutionsRetryConfigInput: IResolvable | IotJobJobExecutionsRetryConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a>

---

##### `jobExecutionsRolloutConfigInput`<sup>Optional</sup> <a name="jobExecutionsRolloutConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobExecutionsRolloutConfigInput"></a>

```typescript
public readonly jobExecutionsRolloutConfigInput: IResolvable | IotJobJobExecutionsRolloutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a>

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: string;
```

- *Type:* string

---

##### `jobTemplateArnInput`<sup>Optional</sup> <a name="jobTemplateArnInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobTemplateArnInput"></a>

```typescript
public readonly jobTemplateArnInput: string;
```

- *Type:* string

---

##### `presignedUrlConfigInput`<sup>Optional</sup> <a name="presignedUrlConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.presignedUrlConfigInput"></a>

```typescript
public readonly presignedUrlConfigInput: IResolvable | IotJobPresignedUrlConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a>

---

##### `schedulingConfigInput`<sup>Optional</sup> <a name="schedulingConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.schedulingConfigInput"></a>

```typescript
public readonly schedulingConfigInput: IResolvable | IotJobSchedulingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotJobTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]

---

##### `targetSelectionInput`<sup>Optional</sup> <a name="targetSelectionInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.targetSelectionInput"></a>

```typescript
public readonly targetSelectionInput: string;
```

- *Type:* string

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.targetsInput"></a>

```typescript
public readonly targetsInput: string[];
```

- *Type:* string[]

---

##### `timeoutConfigInput`<sup>Optional</sup> <a name="timeoutConfigInput" id="@cdktn/provider-awscc.iotJob.IotJob.property.timeoutConfigInput"></a>

```typescript
public readonly timeoutConfigInput: IResolvable | IotJobTimeoutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotJob.IotJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationPackageVersions`<sup>Required</sup> <a name="destinationPackageVersions" id="@cdktn/provider-awscc.iotJob.IotJob.property.destinationPackageVersions"></a>

```typescript
public readonly destinationPackageVersions: string[];
```

- *Type:* string[]

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktn/provider-awscc.iotJob.IotJob.property.document"></a>

```typescript
public readonly document: string;
```

- *Type:* string

---

##### `documentParameters`<sup>Required</sup> <a name="documentParameters" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentParameters"></a>

```typescript
public readonly documentParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `documentSource`<sup>Required</sup> <a name="documentSource" id="@cdktn/provider-awscc.iotJob.IotJob.property.documentSource"></a>

```typescript
public readonly documentSource: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `jobTemplateArn`<sup>Required</sup> <a name="jobTemplateArn" id="@cdktn/provider-awscc.iotJob.IotJob.property.jobTemplateArn"></a>

```typescript
public readonly jobTemplateArn: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.iotJob.IotJob.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

---

##### `targetSelection`<sup>Required</sup> <a name="targetSelection" id="@cdktn/provider-awscc.iotJob.IotJob.property.targetSelection"></a>

```typescript
public readonly targetSelection: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotJob.IotJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotJobAbortConfig <a name="IotJobAbortConfig" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfig.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

const iotJobAbortConfig: iotJob.IotJobAbortConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig.property.criteriaList">criteriaList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]</code> | The list of criteria that determine when and how to abort the job. |

---

##### `criteriaList`<sup>Optional</sup> <a name="criteriaList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfig.property.criteriaList"></a>

```typescript
public readonly criteriaList: IResolvable | IotJobAbortConfigCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]

The list of criteria that determine when and how to abort the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#criteria_list IotJob#criteria_list}

---

### IotJobAbortConfigCriteriaListStruct <a name="IotJobAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

const iotJobAbortConfigCriteriaListStruct: iotJob.IotJobAbortConfigCriteriaListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.action">action</a></code> | <code>string</code> | The type of job action to take to initiate the job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.failureType">failureType</a></code> | <code>string</code> | The type of job execution failures that can initiate a job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings">minNumberOfExecutedThings</a></code> | <code>number</code> | The minimum number of things which must receive job execution notifications before the job can be aborted. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.thresholdPercentage">thresholdPercentage</a></code> | <code>number</code> | The minimum percentage of job execution failures that must occur to initiate the job abort. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The type of job action to take to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#action IotJob#action}

---

##### `failureType`<sup>Optional</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.failureType"></a>

```typescript
public readonly failureType: string;
```

- *Type:* string

The type of job execution failures that can initiate a job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#failure_type IotJob#failure_type}

---

##### `minNumberOfExecutedThings`<sup>Optional</sup> <a name="minNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```typescript
public readonly minNumberOfExecutedThings: number;
```

- *Type:* number

The minimum number of things which must receive job execution notifications before the job can be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#min_number_of_executed_things IotJob#min_number_of_executed_things}

---

##### `thresholdPercentage`<sup>Optional</sup> <a name="thresholdPercentage" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct.property.thresholdPercentage"></a>

```typescript
public readonly thresholdPercentage: number;
```

- *Type:* number

The minimum percentage of job execution failures that must occur to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#threshold_percentage IotJob#threshold_percentage}

---

### IotJobConfig <a name="IotJobConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobConfig.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

const iotJobConfig: iotJob.IotJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobId">jobId</a></code> | <code>string</code> | A job identifier which must be unique for your AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.targets">targets</a></code> | <code>string[]</code> | A list of things and thing groups to which the job should be sent. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.abortConfig">abortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a></code> | The criteria that determine when and how a job abort takes place. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.description">description</a></code> | <code>string</code> | A short text description of the job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.destinationPackageVersions">destinationPackageVersions</a></code> | <code>string[]</code> | The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.document">document</a></code> | <code>string</code> | The job document. Required if you don't specify a value for documentSource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.documentParameters">documentParameters</a></code> | <code>{[ key: string ]: string}</code> | Parameters of an Amazon Web Services managed template that you can specify to create the job document. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.documentSource">documentSource</a></code> | <code>string</code> | An S3 link, or S3 object URL, to the job document. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobExecutionsRetryConfig">jobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a></code> | The configuration that determines how many retries are allowed for each failure type for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobExecutionsRolloutConfig">jobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a></code> | Allows you to create a staged rollout of a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobTemplateArn">jobTemplateArn</a></code> | <code>string</code> | The ARN of the job template used to create the job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.presignedUrlConfig">presignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a></code> | Configuration for pre-signed S3 URLs. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.schedulingConfig">schedulingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a></code> | Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]</code> | Metadata which can be used to manage the job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.targetSelection">targetSelection</a></code> | <code>string</code> | Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobConfig.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a></code> | Specifies the amount of time each device has to finish its execution of the job. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

A job identifier which must be unique for your AWS account.

We recommend using a UUID. Alpha-numeric characters, '-' and '_' are valid for use here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#job_id IotJob#job_id}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

A list of things and thing groups to which the job should be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#targets IotJob#targets}

---

##### `abortConfig`<sup>Optional</sup> <a name="abortConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.abortConfig"></a>

```typescript
public readonly abortConfig: IotJobAbortConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a>

The criteria that determine when and how a job abort takes place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#abort_config IotJob#abort_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short text description of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#description IotJob#description}

---

##### `destinationPackageVersions`<sup>Optional</sup> <a name="destinationPackageVersions" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.destinationPackageVersions"></a>

```typescript
public readonly destinationPackageVersions: string[];
```

- *Type:* string[]

The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#destination_package_versions IotJob#destination_package_versions}

---

##### `document`<sup>Optional</sup> <a name="document" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.document"></a>

```typescript
public readonly document: string;
```

- *Type:* string

The job document. Required if you don't specify a value for documentSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#document IotJob#document}

---

##### `documentParameters`<sup>Optional</sup> <a name="documentParameters" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.documentParameters"></a>

```typescript
public readonly documentParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Parameters of an Amazon Web Services managed template that you can specify to create the job document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#document_parameters IotJob#document_parameters}

---

##### `documentSource`<sup>Optional</sup> <a name="documentSource" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.documentSource"></a>

```typescript
public readonly documentSource: string;
```

- *Type:* string

An S3 link, or S3 object URL, to the job document.

The link is an Amazon S3 object URL and is required if you don't specify a value for document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#document_source IotJob#document_source}

---

##### `jobExecutionsRetryConfig`<sup>Optional</sup> <a name="jobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobExecutionsRetryConfig"></a>

```typescript
public readonly jobExecutionsRetryConfig: IotJobJobExecutionsRetryConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a>

The configuration that determines how many retries are allowed for each failure type for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#job_executions_retry_config IotJob#job_executions_retry_config}

---

##### `jobExecutionsRolloutConfig`<sup>Optional</sup> <a name="jobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobExecutionsRolloutConfig"></a>

```typescript
public readonly jobExecutionsRolloutConfig: IotJobJobExecutionsRolloutConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a>

Allows you to create a staged rollout of a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#job_executions_rollout_config IotJob#job_executions_rollout_config}

---

##### `jobTemplateArn`<sup>Optional</sup> <a name="jobTemplateArn" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.jobTemplateArn"></a>

```typescript
public readonly jobTemplateArn: string;
```

- *Type:* string

The ARN of the job template used to create the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#job_template_arn IotJob#job_template_arn}

---

##### `presignedUrlConfig`<sup>Optional</sup> <a name="presignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.presignedUrlConfig"></a>

```typescript
public readonly presignedUrlConfig: IotJobPresignedUrlConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a>

Configuration for pre-signed S3 URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#presigned_url_config IotJob#presigned_url_config}

---

##### `schedulingConfig`<sup>Optional</sup> <a name="schedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.schedulingConfig"></a>

```typescript
public readonly schedulingConfig: IotJobSchedulingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a>

Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#scheduling_config IotJob#scheduling_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotJobTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]

Metadata which can be used to manage the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#tags IotJob#tags}

---

##### `targetSelection`<sup>Optional</sup> <a name="targetSelection" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.targetSelection"></a>

```typescript
public readonly targetSelection: string;
```

- *Type:* string

Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#target_selection IotJob#target_selection}

---

##### `timeoutConfig`<sup>Optional</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJobConfig.property.timeoutConfig"></a>

```typescript
public readonly timeoutConfig: IotJobTimeoutConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a>

Specifies the amount of time each device has to finish its execution of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#timeout_config IotJob#timeout_config}

---

### IotJobJobExecutionsRetryConfig <a name="IotJobJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

const iotJobJobExecutionsRetryConfig: iotJob.IotJobJobExecutionsRetryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig.property.criteriaList">criteriaList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]</code> | The list of criteria that determines how many retries are allowed for each failure type for a job. |

---

##### `criteriaList`<sup>Optional</sup> <a name="criteriaList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig.property.criteriaList"></a>

```typescript
public readonly criteriaList: IResolvable | IotJobJobExecutionsRetryConfigCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]

The list of criteria that determines how many retries are allowed for each failure type for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#criteria_list IotJob#criteria_list}

---

### IotJobJobExecutionsRetryConfigCriteriaListStruct <a name="IotJobJobExecutionsRetryConfigCriteriaListStruct" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

const iotJobJobExecutionsRetryConfigCriteriaListStruct: iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.property.failureType">failureType</a></code> | <code>string</code> | The type of job execution failures that can initiate a job retry. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.property.numberOfRetries">numberOfRetries</a></code> | <code>number</code> | The number of retries allowed for a failure type for the job. |

---

##### `failureType`<sup>Optional</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.property.failureType"></a>

```typescript
public readonly failureType: string;
```

- *Type:* string

The type of job execution failures that can initiate a job retry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#failure_type IotJob#failure_type}

---

##### `numberOfRetries`<sup>Optional</sup> <a name="numberOfRetries" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct.property.numberOfRetries"></a>

```typescript
public readonly numberOfRetries: number;
```

- *Type:* number

The number of retries allowed for a failure type for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#number_of_retries IotJob#number_of_retries}

---

### IotJobJobExecutionsRolloutConfig <a name="IotJobJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

const iotJobJobExecutionsRolloutConfig: iotJob.IotJobJobExecutionsRolloutConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.property.exponentialRate">exponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a></code> | Allows you to create an exponential rate of rollout for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.property.maximumPerMinute">maximumPerMinute</a></code> | <code>number</code> | The maximum number of things that will be notified of a pending job, per minute. |

---

##### `exponentialRate`<sup>Optional</sup> <a name="exponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.property.exponentialRate"></a>

```typescript
public readonly exponentialRate: IotJobJobExecutionsRolloutConfigExponentialRate;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a>

Allows you to create an exponential rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#exponential_rate IotJob#exponential_rate}

---

##### `maximumPerMinute`<sup>Optional</sup> <a name="maximumPerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```typescript
public readonly maximumPerMinute: number;
```

- *Type:* number

The maximum number of things that will be notified of a pending job, per minute.

This parameter allows you to create a staged rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#maximum_per_minute IotJob#maximum_per_minute}

---

### IotJobJobExecutionsRolloutConfigExponentialRate <a name="IotJobJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

const iotJobJobExecutionsRolloutConfigExponentialRate: iotJob.IotJobJobExecutionsRolloutConfigExponentialRate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute">baseRatePerMinute</a></code> | <code>number</code> | The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.incrementFactor">incrementFactor</a></code> | <code>number</code> | The exponential factor to increase the rate of rollout for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria">rateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | Allows you to define a criteria to initiate the increase in rate of rollout for a job. |

---

##### `baseRatePerMinute`<sup>Optional</sup> <a name="baseRatePerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute"></a>

```typescript
public readonly baseRatePerMinute: number;
```

- *Type:* number

The minimum number of things that will be notified of a pending job, per minute at the start of job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#base_rate_per_minute IotJob#base_rate_per_minute}

---

##### `incrementFactor`<sup>Optional</sup> <a name="incrementFactor" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.incrementFactor"></a>

```typescript
public readonly incrementFactor: number;
```

- *Type:* number

The exponential factor to increase the rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#increment_factor IotJob#increment_factor}

---

##### `rateIncreaseCriteria`<sup>Optional</sup> <a name="rateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria"></a>

```typescript
public readonly rateIncreaseCriteria: IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

Allows you to define a criteria to initiate the increase in rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#rate_increase_criteria IotJob#rate_increase_criteria}

---

### IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

const iotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria: iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings">numberOfNotifiedThings</a></code> | <code>number</code> | The threshold for number of notified things that will initiate the increase in rate of rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings">numberOfSucceededThings</a></code> | <code>number</code> | The threshold for number of succeeded things that will initiate the increase in rate of rollout. |

---

##### `numberOfNotifiedThings`<sup>Optional</sup> <a name="numberOfNotifiedThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```typescript
public readonly numberOfNotifiedThings: number;
```

- *Type:* number

The threshold for number of notified things that will initiate the increase in rate of rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#number_of_notified_things IotJob#number_of_notified_things}

---

##### `numberOfSucceededThings`<sup>Optional</sup> <a name="numberOfSucceededThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```typescript
public readonly numberOfSucceededThings: number;
```

- *Type:* number

The threshold for number of succeeded things that will initiate the increase in rate of rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#number_of_succeeded_things IotJob#number_of_succeeded_things}

---

### IotJobPresignedUrlConfig <a name="IotJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

const iotJobPresignedUrlConfig: iotJob.IotJobPresignedUrlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.property.expiresInSec">expiresInSec</a></code> | <code>number</code> | How long (in seconds) pre-signed URLs are valid. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of an IAM role that grants permission to download files from the S3 bucket where the job data/updates are stored. |

---

##### `expiresInSec`<sup>Optional</sup> <a name="expiresInSec" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.property.expiresInSec"></a>

```typescript
public readonly expiresInSec: number;
```

- *Type:* number

How long (in seconds) pre-signed URLs are valid.

Valid values are 60 - 3600, the default value is 3600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#expires_in_sec IotJob#expires_in_sec}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of an IAM role that grants permission to download files from the S3 bucket where the job data/updates are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#role_arn IotJob#role_arn}

---

### IotJobSchedulingConfig <a name="IotJobSchedulingConfig" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

const iotJobSchedulingConfig: iotJob.IotJobSchedulingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.endBehavior">endBehavior</a></code> | <code>string</code> | Specifies the end behavior for all job executions after a job reaches the selected endTime. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.endTime">endTime</a></code> | <code>string</code> | The time a job will stop rollout of the job document to all devices in the target group for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.maintenanceWindows">maintenanceWindows</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]</code> | An optional configuration within the SchedulingConfig to setup a recurring maintenance window. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.startTime">startTime</a></code> | <code>string</code> | The time a job will begin rollout of the job document to all devices in the target group for a job. |

---

##### `endBehavior`<sup>Optional</sup> <a name="endBehavior" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.endBehavior"></a>

```typescript
public readonly endBehavior: string;
```

- *Type:* string

Specifies the end behavior for all job executions after a job reaches the selected endTime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#end_behavior IotJob#end_behavior}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

The time a job will stop rollout of the job document to all devices in the target group for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#end_time IotJob#end_time}

---

##### `maintenanceWindows`<sup>Optional</sup> <a name="maintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.maintenanceWindows"></a>

```typescript
public readonly maintenanceWindows: IResolvable | IotJobSchedulingConfigMaintenanceWindows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]

An optional configuration within the SchedulingConfig to setup a recurring maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#maintenance_windows IotJob#maintenance_windows}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The time a job will begin rollout of the job document to all devices in the target group for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#start_time IotJob#start_time}

---

### IotJobSchedulingConfigMaintenanceWindows <a name="IotJobSchedulingConfigMaintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

const iotJobSchedulingConfigMaintenanceWindows: iotJob.IotJobSchedulingConfigMaintenanceWindows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.property.durationInMinutes">durationInMinutes</a></code> | <code>number</code> | Displays the duration of the next maintenance window. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.property.startTime">startTime</a></code> | <code>string</code> | Displays the start time of the next maintenance window. |

---

##### `durationInMinutes`<sup>Optional</sup> <a name="durationInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.property.durationInMinutes"></a>

```typescript
public readonly durationInMinutes: number;
```

- *Type:* number

Displays the duration of the next maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#duration_in_minutes IotJob#duration_in_minutes}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Displays the start time of the next maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#start_time IotJob#start_time}

---

### IotJobTags <a name="IotJobTags" id="@cdktn/provider-awscc.iotJob.IotJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobTags.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

const iotJobTags: iotJob.IotJobTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTags.property.key">key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTags.property.value">value</a></code> | <code>string</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotJob.IotJobTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#key IotJob#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#value IotJob#value}

---

### IotJobTimeoutConfig <a name="IotJobTimeoutConfig" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

const iotJobTimeoutConfig: iotJob.IotJobTimeoutConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig.property.inProgressTimeoutInMinutes">inProgressTimeoutInMinutes</a></code> | <code>number</code> | Specifies the amount of time, in minutes, this device has to finish execution of this job. |

---

##### `inProgressTimeoutInMinutes`<sup>Optional</sup> <a name="inProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```typescript
public readonly inProgressTimeoutInMinutes: number;
```

- *Type:* number

Specifies the amount of time, in minutes, this device has to finish execution of this job.

The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_job#in_progress_timeout_in_minutes IotJob#in_progress_timeout_in_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### IotJobAbortConfigCriteriaListStructList <a name="IotJobAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobAbortConfigCriteriaListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.get"></a>

```typescript
public get(index: number): IotJobAbortConfigCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobAbortConfigCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]

---


### IotJobAbortConfigCriteriaListStructOutputReference <a name="IotJobAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobAbortConfigCriteriaListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetFailureType">resetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">resetMinNumberOfExecutedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage">resetThresholdPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetFailureType` <a name="resetFailureType" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetFailureType"></a>

```typescript
public resetFailureType(): void
```

##### `resetMinNumberOfExecutedThings` <a name="resetMinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```typescript
public resetMinNumberOfExecutedThings(): void
```

##### `resetThresholdPercentage` <a name="resetThresholdPercentage" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```typescript
public resetThresholdPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.failureTypeInput">failureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">minNumberOfExecutedThingsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput">thresholdPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.failureType">failureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">minNumberOfExecutedThings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">thresholdPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `failureTypeInput`<sup>Optional</sup> <a name="failureTypeInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.failureTypeInput"></a>

```typescript
public readonly failureTypeInput: string;
```

- *Type:* string

---

##### `minNumberOfExecutedThingsInput`<sup>Optional</sup> <a name="minNumberOfExecutedThingsInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```typescript
public readonly minNumberOfExecutedThingsInput: number;
```

- *Type:* number

---

##### `thresholdPercentageInput`<sup>Optional</sup> <a name="thresholdPercentageInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```typescript
public readonly thresholdPercentageInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `failureType`<sup>Required</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```typescript
public readonly failureType: string;
```

- *Type:* string

---

##### `minNumberOfExecutedThings`<sup>Required</sup> <a name="minNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```typescript
public readonly minNumberOfExecutedThings: number;
```

- *Type:* number

---

##### `thresholdPercentage`<sup>Required</sup> <a name="thresholdPercentage" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```typescript
public readonly thresholdPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobAbortConfigCriteriaListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>

---


### IotJobAbortConfigOutputReference <a name="IotJobAbortConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobAbortConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.putCriteriaList">putCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resetCriteriaList">resetCriteriaList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriteriaList` <a name="putCriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.putCriteriaList"></a>

```typescript
public putCriteriaList(value: IResolvable | IotJobAbortConfigCriteriaListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.putCriteriaList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]

---

##### `resetCriteriaList` <a name="resetCriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.resetCriteriaList"></a>

```typescript
public resetCriteriaList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.criteriaList">criteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList">IotJobAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.criteriaListInput">criteriaListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criteriaList`<sup>Required</sup> <a name="criteriaList" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.criteriaList"></a>

```typescript
public readonly criteriaList: IotJobAbortConfigCriteriaListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStructList">IotJobAbortConfigCriteriaListStructList</a>

---

##### `criteriaListInput`<sup>Optional</sup> <a name="criteriaListInput" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.criteriaListInput"></a>

```typescript
public readonly criteriaListInput: IResolvable | IotJobAbortConfigCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfigCriteriaListStruct">IotJobAbortConfigCriteriaListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobAbortConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobAbortConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobAbortConfig">IotJobAbortConfig</a>

---


### IotJobJobExecutionsRetryConfigCriteriaListStructList <a name="IotJobJobExecutionsRetryConfigCriteriaListStructList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.get"></a>

```typescript
public get(index: number): IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobJobExecutionsRetryConfigCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]

---


### IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference <a name="IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resetFailureType">resetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resetNumberOfRetries">resetNumberOfRetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureType` <a name="resetFailureType" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resetFailureType"></a>

```typescript
public resetFailureType(): void
```

##### `resetNumberOfRetries` <a name="resetNumberOfRetries" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.resetNumberOfRetries"></a>

```typescript
public resetNumberOfRetries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureTypeInput">failureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetriesInput">numberOfRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureType">failureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetries">numberOfRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureTypeInput`<sup>Optional</sup> <a name="failureTypeInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureTypeInput"></a>

```typescript
public readonly failureTypeInput: string;
```

- *Type:* string

---

##### `numberOfRetriesInput`<sup>Optional</sup> <a name="numberOfRetriesInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetriesInput"></a>

```typescript
public readonly numberOfRetriesInput: number;
```

- *Type:* number

---

##### `failureType`<sup>Required</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.failureType"></a>

```typescript
public readonly failureType: string;
```

- *Type:* string

---

##### `numberOfRetries`<sup>Required</sup> <a name="numberOfRetries" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.numberOfRetries"></a>

```typescript
public readonly numberOfRetries: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobJobExecutionsRetryConfigCriteriaListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>

---


### IotJobJobExecutionsRetryConfigOutputReference <a name="IotJobJobExecutionsRetryConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobJobExecutionsRetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.putCriteriaList">putCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resetCriteriaList">resetCriteriaList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriteriaList` <a name="putCriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.putCriteriaList"></a>

```typescript
public putCriteriaList(value: IResolvable | IotJobJobExecutionsRetryConfigCriteriaListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.putCriteriaList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]

---

##### `resetCriteriaList` <a name="resetCriteriaList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.resetCriteriaList"></a>

```typescript
public resetCriteriaList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.criteriaList">criteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList">IotJobJobExecutionsRetryConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.criteriaListInput">criteriaListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criteriaList`<sup>Required</sup> <a name="criteriaList" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.criteriaList"></a>

```typescript
public readonly criteriaList: IotJobJobExecutionsRetryConfigCriteriaListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStructList">IotJobJobExecutionsRetryConfigCriteriaListStructList</a>

---

##### `criteriaListInput`<sup>Optional</sup> <a name="criteriaListInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.criteriaListInput"></a>

```typescript
public readonly criteriaListInput: IResolvable | IotJobJobExecutionsRetryConfigCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigCriteriaListStruct">IotJobJobExecutionsRetryConfigCriteriaListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobJobExecutionsRetryConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRetryConfig">IotJobJobExecutionsRetryConfig</a>

---


### IotJobJobExecutionsRolloutConfigExponentialRateOutputReference <a name="IotJobJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria">putRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute">resetBaseRatePerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor">resetIncrementFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria">resetRateIncreaseCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRateIncreaseCriteria` <a name="putRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria"></a>

```typescript
public putRateIncreaseCriteria(value: IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `resetBaseRatePerMinute` <a name="resetBaseRatePerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute"></a>

```typescript
public resetBaseRatePerMinute(): void
```

##### `resetIncrementFactor` <a name="resetIncrementFactor" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor"></a>

```typescript
public resetIncrementFactor(): void
```

##### `resetRateIncreaseCriteria` <a name="resetRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria"></a>

```typescript
public resetRateIncreaseCriteria(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">rateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput">baseRatePerMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput">incrementFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput">rateIncreaseCriteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">baseRatePerMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">incrementFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rateIncreaseCriteria`<sup>Required</sup> <a name="rateIncreaseCriteria" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```typescript
public readonly rateIncreaseCriteria: IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `baseRatePerMinuteInput`<sup>Optional</sup> <a name="baseRatePerMinuteInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput"></a>

```typescript
public readonly baseRatePerMinuteInput: number;
```

- *Type:* number

---

##### `incrementFactorInput`<sup>Optional</sup> <a name="incrementFactorInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput"></a>

```typescript
public readonly incrementFactorInput: number;
```

- *Type:* number

---

##### `rateIncreaseCriteriaInput`<sup>Optional</sup> <a name="rateIncreaseCriteriaInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```typescript
public readonly rateIncreaseCriteriaInput: IResolvable | IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `baseRatePerMinute`<sup>Required</sup> <a name="baseRatePerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```typescript
public readonly baseRatePerMinute: number;
```

- *Type:* number

---

##### `incrementFactor`<sup>Required</sup> <a name="incrementFactor" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```typescript
public readonly incrementFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobJobExecutionsRolloutConfigExponentialRate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a>

---


### IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">resetNumberOfNotifiedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">resetNumberOfSucceededThings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumberOfNotifiedThings` <a name="resetNumberOfNotifiedThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```typescript
public resetNumberOfNotifiedThings(): void
```

##### `resetNumberOfSucceededThings` <a name="resetNumberOfSucceededThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```typescript
public resetNumberOfSucceededThings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">numberOfNotifiedThingsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">numberOfSucceededThingsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">numberOfNotifiedThings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">numberOfSucceededThings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberOfNotifiedThingsInput`<sup>Optional</sup> <a name="numberOfNotifiedThingsInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```typescript
public readonly numberOfNotifiedThingsInput: number;
```

- *Type:* number

---

##### `numberOfSucceededThingsInput`<sup>Optional</sup> <a name="numberOfSucceededThingsInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```typescript
public readonly numberOfSucceededThingsInput: number;
```

- *Type:* number

---

##### `numberOfNotifiedThings`<sup>Required</sup> <a name="numberOfNotifiedThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```typescript
public readonly numberOfNotifiedThings: number;
```

- *Type:* number

---

##### `numberOfSucceededThings`<sup>Required</sup> <a name="numberOfSucceededThings" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```typescript
public readonly numberOfSucceededThings: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotJobJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---


### IotJobJobExecutionsRolloutConfigOutputReference <a name="IotJobJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobJobExecutionsRolloutConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.putExponentialRate">putExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resetExponentialRate">resetExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">resetMaximumPerMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExponentialRate` <a name="putExponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.putExponentialRate"></a>

```typescript
public putExponentialRate(value: IotJobJobExecutionsRolloutConfigExponentialRate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a>

---

##### `resetExponentialRate` <a name="resetExponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resetExponentialRate"></a>

```typescript
public resetExponentialRate(): void
```

##### `resetMaximumPerMinute` <a name="resetMaximumPerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```typescript
public resetMaximumPerMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRate">exponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference">IotJobJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput">exponentialRateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">maximumPerMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">maximumPerMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exponentialRate`<sup>Required</sup> <a name="exponentialRate" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```typescript
public readonly exponentialRate: IotJobJobExecutionsRolloutConfigExponentialRateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRateOutputReference">IotJobJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `exponentialRateInput`<sup>Optional</sup> <a name="exponentialRateInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput"></a>

```typescript
public readonly exponentialRateInput: IResolvable | IotJobJobExecutionsRolloutConfigExponentialRate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigExponentialRate">IotJobJobExecutionsRolloutConfigExponentialRate</a>

---

##### `maximumPerMinuteInput`<sup>Optional</sup> <a name="maximumPerMinuteInput" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```typescript
public readonly maximumPerMinuteInput: number;
```

- *Type:* number

---

##### `maximumPerMinute`<sup>Required</sup> <a name="maximumPerMinute" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```typescript
public readonly maximumPerMinute: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobJobExecutionsRolloutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobJobExecutionsRolloutConfig">IotJobJobExecutionsRolloutConfig</a>

---


### IotJobPresignedUrlConfigOutputReference <a name="IotJobPresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobPresignedUrlConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resetExpiresInSec">resetExpiresInSec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpiresInSec` <a name="resetExpiresInSec" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resetExpiresInSec"></a>

```typescript
public resetExpiresInSec(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.expiresInSecInput">expiresInSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.expiresInSec">expiresInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiresInSecInput`<sup>Optional</sup> <a name="expiresInSecInput" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.expiresInSecInput"></a>

```typescript
public readonly expiresInSecInput: number;
```

- *Type:* number

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `expiresInSec`<sup>Required</sup> <a name="expiresInSec" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.expiresInSec"></a>

```typescript
public readonly expiresInSec: number;
```

- *Type:* number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobPresignedUrlConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobPresignedUrlConfig">IotJobPresignedUrlConfig</a>

---


### IotJobSchedulingConfigMaintenanceWindowsList <a name="IotJobSchedulingConfigMaintenanceWindowsList" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobSchedulingConfigMaintenanceWindowsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.get"></a>

```typescript
public get(index: number): IotJobSchedulingConfigMaintenanceWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobSchedulingConfigMaintenanceWindows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]

---


### IotJobSchedulingConfigMaintenanceWindowsOutputReference <a name="IotJobSchedulingConfigMaintenanceWindowsOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resetDurationInMinutes">resetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationInMinutes` <a name="resetDurationInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resetDurationInMinutes"></a>

```typescript
public resetDurationInMinutes(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutesInput">durationInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInMinutesInput`<sup>Optional</sup> <a name="durationInMinutesInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutesInput"></a>

```typescript
public readonly durationInMinutesInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.durationInMinutes"></a>

```typescript
public readonly durationInMinutes: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobSchedulingConfigMaintenanceWindows;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>

---


### IotJobSchedulingConfigOutputReference <a name="IotJobSchedulingConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobSchedulingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.putMaintenanceWindows">putMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetEndBehavior">resetEndBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetMaintenanceWindows">resetMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaintenanceWindows` <a name="putMaintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.putMaintenanceWindows"></a>

```typescript
public putMaintenanceWindows(value: IResolvable | IotJobSchedulingConfigMaintenanceWindows[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.putMaintenanceWindows.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]

---

##### `resetEndBehavior` <a name="resetEndBehavior" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetEndBehavior"></a>

```typescript
public resetEndBehavior(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetMaintenanceWindows` <a name="resetMaintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetMaintenanceWindows"></a>

```typescript
public resetMaintenanceWindows(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.maintenanceWindows">maintenanceWindows</a></code> | <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList">IotJobSchedulingConfigMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endBehaviorInput">endBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.maintenanceWindowsInput">maintenanceWindowsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endBehavior">endBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceWindows`<sup>Required</sup> <a name="maintenanceWindows" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.maintenanceWindows"></a>

```typescript
public readonly maintenanceWindows: IotJobSchedulingConfigMaintenanceWindowsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindowsList">IotJobSchedulingConfigMaintenanceWindowsList</a>

---

##### `endBehaviorInput`<sup>Optional</sup> <a name="endBehaviorInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endBehaviorInput"></a>

```typescript
public readonly endBehaviorInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `maintenanceWindowsInput`<sup>Optional</sup> <a name="maintenanceWindowsInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.maintenanceWindowsInput"></a>

```typescript
public readonly maintenanceWindowsInput: IResolvable | IotJobSchedulingConfigMaintenanceWindows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigMaintenanceWindows">IotJobSchedulingConfigMaintenanceWindows</a>[]

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endBehavior`<sup>Required</sup> <a name="endBehavior" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endBehavior"></a>

```typescript
public readonly endBehavior: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobSchedulingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobSchedulingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobSchedulingConfig">IotJobSchedulingConfig</a>

---


### IotJobTagsList <a name="IotJobTagsList" id="@cdktn/provider-awscc.iotJob.IotJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.get"></a>

```typescript
public get(index: number): IotJobTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>[]

---


### IotJobTagsOutputReference <a name="IotJobTagsOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobTags">IotJobTags</a>

---


### IotJobTimeoutConfigOutputReference <a name="IotJobTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer"></a>

```typescript
import { iotJob } from '@cdktn/provider-awscc'

new iotJob.IotJobTimeoutConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">resetInProgressTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInProgressTimeoutInMinutes` <a name="resetInProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```typescript
public resetInProgressTimeoutInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">inProgressTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">inProgressTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inProgressTimeoutInMinutesInput`<sup>Optional</sup> <a name="inProgressTimeoutInMinutesInput" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```typescript
public readonly inProgressTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `inProgressTimeoutInMinutes`<sup>Required</sup> <a name="inProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```typescript
public readonly inProgressTimeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJob.IotJobTimeoutConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTimeoutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJob.IotJobTimeoutConfig">IotJobTimeoutConfig</a>

---




# `iotJobTemplate` Submodule <a name="`iotJobTemplate` Submodule" id="@cdktn/provider-awscc.iotJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotJobTemplate <a name="IotJobTemplate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template awscc_iot_job_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplate(scope: Construct, id: string, config: IotJobTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig">IotJobTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig">IotJobTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putAbortConfig">putAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRetryConfig">putJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRolloutConfig">putJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putMaintenanceWindows">putMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putPresignedUrlConfig">putPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTimeoutConfig">putTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetAbortConfig">resetAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDestinationPackageVersions">resetDestinationPackageVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocument">resetDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocumentSource">resetDocumentSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobArn">resetJobArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRetryConfig">resetJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRolloutConfig">resetJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetMaintenanceWindows">resetMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetPresignedUrlConfig">resetPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTimeoutConfig">resetTimeoutConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAbortConfig` <a name="putAbortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putAbortConfig"></a>

```typescript
public putAbortConfig(value: IotJobTemplateAbortConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putAbortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

---

##### `putJobExecutionsRetryConfig` <a name="putJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRetryConfig"></a>

```typescript
public putJobExecutionsRetryConfig(value: IotJobTemplateJobExecutionsRetryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

---

##### `putJobExecutionsRolloutConfig` <a name="putJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRolloutConfig"></a>

```typescript
public putJobExecutionsRolloutConfig(value: IotJobTemplateJobExecutionsRolloutConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRolloutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

---

##### `putMaintenanceWindows` <a name="putMaintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putMaintenanceWindows"></a>

```typescript
public putMaintenanceWindows(value: IResolvable | IotJobTemplateMaintenanceWindows[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putMaintenanceWindows.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>[]

---

##### `putPresignedUrlConfig` <a name="putPresignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putPresignedUrlConfig"></a>

```typescript
public putPresignedUrlConfig(value: IotJobTemplatePresignedUrlConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putPresignedUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTags"></a>

```typescript
public putTags(value: IResolvable | IotJobTemplateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>[]

---

##### `putTimeoutConfig` <a name="putTimeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTimeoutConfig"></a>

```typescript
public putTimeoutConfig(value: IotJobTemplateTimeoutConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

---

##### `resetAbortConfig` <a name="resetAbortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetAbortConfig"></a>

```typescript
public resetAbortConfig(): void
```

##### `resetDestinationPackageVersions` <a name="resetDestinationPackageVersions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDestinationPackageVersions"></a>

```typescript
public resetDestinationPackageVersions(): void
```

##### `resetDocument` <a name="resetDocument" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocument"></a>

```typescript
public resetDocument(): void
```

##### `resetDocumentSource` <a name="resetDocumentSource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocumentSource"></a>

```typescript
public resetDocumentSource(): void
```

##### `resetJobArn` <a name="resetJobArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobArn"></a>

```typescript
public resetJobArn(): void
```

##### `resetJobExecutionsRetryConfig` <a name="resetJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRetryConfig"></a>

```typescript
public resetJobExecutionsRetryConfig(): void
```

##### `resetJobExecutionsRolloutConfig` <a name="resetJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRolloutConfig"></a>

```typescript
public resetJobExecutionsRolloutConfig(): void
```

##### `resetMaintenanceWindows` <a name="resetMaintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetMaintenanceWindows"></a>

```typescript
public resetMaintenanceWindows(): void
```

##### `resetPresignedUrlConfig` <a name="resetPresignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetPresignedUrlConfig"></a>

```typescript
public resetPresignedUrlConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeoutConfig` <a name="resetTimeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTimeoutConfig"></a>

```typescript
public resetTimeoutConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotJobTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isConstruct"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

iotJobTemplate.IotJobTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformElement"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

iotJobTemplate.IotJobTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformResource"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

iotJobTemplate.IotJobTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

iotJobTemplate.IotJobTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotJobTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotJobTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfig">abortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference">IotJobTemplateAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfig">jobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference">IotJobTemplateJobExecutionsRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfig">jobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference">IotJobTemplateJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindows">maintenanceWindows</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList">IotJobTemplateMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfig">presignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference">IotJobTemplatePresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList">IotJobTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference">IotJobTemplateTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfigInput">abortConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersionsInput">destinationPackageVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentInput">documentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSourceInput">documentSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArnInput">jobArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfigInput">jobExecutionsRetryConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfigInput">jobExecutionsRolloutConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateIdInput">jobTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindowsInput">maintenanceWindowsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfigInput">presignedUrlConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfigInput">timeoutConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersions">destinationPackageVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.document">document</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSource">documentSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArn">jobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateId">jobTemplateId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `abortConfig`<sup>Required</sup> <a name="abortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfig"></a>

```typescript
public readonly abortConfig: IotJobTemplateAbortConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference">IotJobTemplateAbortConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobExecutionsRetryConfig`<sup>Required</sup> <a name="jobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfig"></a>

```typescript
public readonly jobExecutionsRetryConfig: IotJobTemplateJobExecutionsRetryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference">IotJobTemplateJobExecutionsRetryConfigOutputReference</a>

---

##### `jobExecutionsRolloutConfig`<sup>Required</sup> <a name="jobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfig"></a>

```typescript
public readonly jobExecutionsRolloutConfig: IotJobTemplateJobExecutionsRolloutConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference">IotJobTemplateJobExecutionsRolloutConfigOutputReference</a>

---

##### `maintenanceWindows`<sup>Required</sup> <a name="maintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindows"></a>

```typescript
public readonly maintenanceWindows: IotJobTemplateMaintenanceWindowsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList">IotJobTemplateMaintenanceWindowsList</a>

---

##### `presignedUrlConfig`<sup>Required</sup> <a name="presignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfig"></a>

```typescript
public readonly presignedUrlConfig: IotJobTemplatePresignedUrlConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference">IotJobTemplatePresignedUrlConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tags"></a>

```typescript
public readonly tags: IotJobTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList">IotJobTemplateTagsList</a>

---

##### `timeoutConfig`<sup>Required</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfig"></a>

```typescript
public readonly timeoutConfig: IotJobTemplateTimeoutConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference">IotJobTemplateTimeoutConfigOutputReference</a>

---

##### `abortConfigInput`<sup>Optional</sup> <a name="abortConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfigInput"></a>

```typescript
public readonly abortConfigInput: IResolvable | IotJobTemplateAbortConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationPackageVersionsInput`<sup>Optional</sup> <a name="destinationPackageVersionsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersionsInput"></a>

```typescript
public readonly destinationPackageVersionsInput: string[];
```

- *Type:* string[]

---

##### `documentInput`<sup>Optional</sup> <a name="documentInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentInput"></a>

```typescript
public readonly documentInput: string;
```

- *Type:* string

---

##### `documentSourceInput`<sup>Optional</sup> <a name="documentSourceInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSourceInput"></a>

```typescript
public readonly documentSourceInput: string;
```

- *Type:* string

---

##### `jobArnInput`<sup>Optional</sup> <a name="jobArnInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArnInput"></a>

```typescript
public readonly jobArnInput: string;
```

- *Type:* string

---

##### `jobExecutionsRetryConfigInput`<sup>Optional</sup> <a name="jobExecutionsRetryConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfigInput"></a>

```typescript
public readonly jobExecutionsRetryConfigInput: IResolvable | IotJobTemplateJobExecutionsRetryConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

---

##### `jobExecutionsRolloutConfigInput`<sup>Optional</sup> <a name="jobExecutionsRolloutConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfigInput"></a>

```typescript
public readonly jobExecutionsRolloutConfigInput: IResolvable | IotJobTemplateJobExecutionsRolloutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

---

##### `jobTemplateIdInput`<sup>Optional</sup> <a name="jobTemplateIdInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateIdInput"></a>

```typescript
public readonly jobTemplateIdInput: string;
```

- *Type:* string

---

##### `maintenanceWindowsInput`<sup>Optional</sup> <a name="maintenanceWindowsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindowsInput"></a>

```typescript
public readonly maintenanceWindowsInput: IResolvable | IotJobTemplateMaintenanceWindows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>[]

---

##### `presignedUrlConfigInput`<sup>Optional</sup> <a name="presignedUrlConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfigInput"></a>

```typescript
public readonly presignedUrlConfigInput: IResolvable | IotJobTemplatePresignedUrlConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotJobTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>[]

---

##### `timeoutConfigInput`<sup>Optional</sup> <a name="timeoutConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfigInput"></a>

```typescript
public readonly timeoutConfigInput: IResolvable | IotJobTemplateTimeoutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationPackageVersions`<sup>Required</sup> <a name="destinationPackageVersions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersions"></a>

```typescript
public readonly destinationPackageVersions: string[];
```

- *Type:* string[]

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.document"></a>

```typescript
public readonly document: string;
```

- *Type:* string

---

##### `documentSource`<sup>Required</sup> <a name="documentSource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSource"></a>

```typescript
public readonly documentSource: string;
```

- *Type:* string

---

##### `jobArn`<sup>Required</sup> <a name="jobArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArn"></a>

```typescript
public readonly jobArn: string;
```

- *Type:* string

---

##### `jobTemplateId`<sup>Required</sup> <a name="jobTemplateId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateId"></a>

```typescript
public readonly jobTemplateId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotJobTemplateAbortConfig <a name="IotJobTemplateAbortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

const iotJobTemplateAbortConfig: iotJobTemplate.IotJobTemplateAbortConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig.property.criteriaList">criteriaList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#criteria_list IotJobTemplate#criteria_list}. |

---

##### `criteriaList`<sup>Optional</sup> <a name="criteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig.property.criteriaList"></a>

```typescript
public readonly criteriaList: IResolvable | IotJobTemplateAbortConfigCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#criteria_list IotJobTemplate#criteria_list}.

---

### IotJobTemplateAbortConfigCriteriaListStruct <a name="IotJobTemplateAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

const iotJobTemplateAbortConfigCriteriaListStruct: iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.action">action</a></code> | <code>string</code> | The type of job action to take to initiate the job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.failureType">failureType</a></code> | <code>string</code> | The type of job execution failures that can initiate a job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings">minNumberOfExecutedThings</a></code> | <code>number</code> | The minimum number of things which must receive job execution notifications before the job can be aborted. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.thresholdPercentage">thresholdPercentage</a></code> | <code>number</code> | The minimum percentage of job execution failures that must occur to initiate the job abort. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The type of job action to take to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#action IotJobTemplate#action}

---

##### `failureType`<sup>Optional</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.failureType"></a>

```typescript
public readonly failureType: string;
```

- *Type:* string

The type of job execution failures that can initiate a job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#failure_type IotJobTemplate#failure_type}

---

##### `minNumberOfExecutedThings`<sup>Optional</sup> <a name="minNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```typescript
public readonly minNumberOfExecutedThings: number;
```

- *Type:* number

The minimum number of things which must receive job execution notifications before the job can be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#min_number_of_executed_things IotJobTemplate#min_number_of_executed_things}

---

##### `thresholdPercentage`<sup>Optional</sup> <a name="thresholdPercentage" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.thresholdPercentage"></a>

```typescript
public readonly thresholdPercentage: number;
```

- *Type:* number

The minimum percentage of job execution failures that must occur to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#threshold_percentage IotJobTemplate#threshold_percentage}

---

### IotJobTemplateConfig <a name="IotJobTemplateConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

const iotJobTemplateConfig: iotJobTemplate.IotJobTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.description">description</a></code> | <code>string</code> | A description of the Job Template. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobTemplateId">jobTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#job_template_id IotJobTemplate#job_template_id}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.abortConfig">abortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a></code> | The criteria that determine when and how a job abort takes place. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.destinationPackageVersions">destinationPackageVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#destination_package_versions IotJobTemplate#destination_package_versions}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.document">document</a></code> | <code>string</code> | The job document. Required if you don't specify a value for documentSource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.documentSource">documentSource</a></code> | <code>string</code> | An S3 link to the job document to use in the template. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobArn">jobArn</a></code> | <code>string</code> | Optional for copying a JobTemplate from a pre-existing Job configuration. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRetryConfig">jobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#job_executions_retry_config IotJobTemplate#job_executions_retry_config}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRolloutConfig">jobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a></code> | Allows you to create a staged rollout of a job. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.maintenanceWindows">maintenanceWindows</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#maintenance_windows IotJobTemplate#maintenance_windows}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.presignedUrlConfig">presignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a></code> | Configuration for pre-signed S3 URLs. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>[]</code> | Metadata that can be used to manage the JobTemplate. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a></code> | Specifies the amount of time each device has to finish its execution of the job. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the Job Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#description IotJobTemplate#description}

---

##### `jobTemplateId`<sup>Required</sup> <a name="jobTemplateId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobTemplateId"></a>

```typescript
public readonly jobTemplateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#job_template_id IotJobTemplate#job_template_id}.

---

##### `abortConfig`<sup>Optional</sup> <a name="abortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.abortConfig"></a>

```typescript
public readonly abortConfig: IotJobTemplateAbortConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

The criteria that determine when and how a job abort takes place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#abort_config IotJobTemplate#abort_config}

---

##### `destinationPackageVersions`<sup>Optional</sup> <a name="destinationPackageVersions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.destinationPackageVersions"></a>

```typescript
public readonly destinationPackageVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#destination_package_versions IotJobTemplate#destination_package_versions}.

---

##### `document`<sup>Optional</sup> <a name="document" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.document"></a>

```typescript
public readonly document: string;
```

- *Type:* string

The job document. Required if you don't specify a value for documentSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#document IotJobTemplate#document}

---

##### `documentSource`<sup>Optional</sup> <a name="documentSource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.documentSource"></a>

```typescript
public readonly documentSource: string;
```

- *Type:* string

An S3 link to the job document to use in the template.

Required if you don't specify a value for document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#document_source IotJobTemplate#document_source}

---

##### `jobArn`<sup>Optional</sup> <a name="jobArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobArn"></a>

```typescript
public readonly jobArn: string;
```

- *Type:* string

Optional for copying a JobTemplate from a pre-existing Job configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#job_arn IotJobTemplate#job_arn}

---

##### `jobExecutionsRetryConfig`<sup>Optional</sup> <a name="jobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRetryConfig"></a>

```typescript
public readonly jobExecutionsRetryConfig: IotJobTemplateJobExecutionsRetryConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#job_executions_retry_config IotJobTemplate#job_executions_retry_config}.

---

##### `jobExecutionsRolloutConfig`<sup>Optional</sup> <a name="jobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRolloutConfig"></a>

```typescript
public readonly jobExecutionsRolloutConfig: IotJobTemplateJobExecutionsRolloutConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

Allows you to create a staged rollout of a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#job_executions_rollout_config IotJobTemplate#job_executions_rollout_config}

---

##### `maintenanceWindows`<sup>Optional</sup> <a name="maintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.maintenanceWindows"></a>

```typescript
public readonly maintenanceWindows: IResolvable | IotJobTemplateMaintenanceWindows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#maintenance_windows IotJobTemplate#maintenance_windows}.

---

##### `presignedUrlConfig`<sup>Optional</sup> <a name="presignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.presignedUrlConfig"></a>

```typescript
public readonly presignedUrlConfig: IotJobTemplatePresignedUrlConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

Configuration for pre-signed S3 URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#presigned_url_config IotJobTemplate#presigned_url_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotJobTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>[]

Metadata that can be used to manage the JobTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#tags IotJobTemplate#tags}

---

##### `timeoutConfig`<sup>Optional</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.timeoutConfig"></a>

```typescript
public readonly timeoutConfig: IotJobTemplateTimeoutConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

Specifies the amount of time each device has to finish its execution of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#timeout_config IotJobTemplate#timeout_config}

---

### IotJobTemplateJobExecutionsRetryConfig <a name="IotJobTemplateJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

const iotJobTemplateJobExecutionsRetryConfig: iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig.property.retryCriteriaList">retryCriteriaList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#retry_criteria_list IotJobTemplate#retry_criteria_list}. |

---

##### `retryCriteriaList`<sup>Optional</sup> <a name="retryCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig.property.retryCriteriaList"></a>

```typescript
public readonly retryCriteriaList: IResolvable | IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#retry_criteria_list IotJobTemplate#retry_criteria_list}.

---

### IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct <a name="IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

const iotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct: iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.failureType">failureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#failure_type IotJobTemplate#failure_type}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.numberOfRetries">numberOfRetries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#number_of_retries IotJobTemplate#number_of_retries}. |

---

##### `failureType`<sup>Optional</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.failureType"></a>

```typescript
public readonly failureType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#failure_type IotJobTemplate#failure_type}.

---

##### `numberOfRetries`<sup>Optional</sup> <a name="numberOfRetries" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.numberOfRetries"></a>

```typescript
public readonly numberOfRetries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#number_of_retries IotJobTemplate#number_of_retries}.

---

### IotJobTemplateJobExecutionsRolloutConfig <a name="IotJobTemplateJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

const iotJobTemplateJobExecutionsRolloutConfig: iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.exponentialRolloutRate">exponentialRolloutRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a></code> | The rate of increase for a job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.maximumPerMinute">maximumPerMinute</a></code> | <code>number</code> | The maximum number of things that will be notified of a pending job, per minute. |

---

##### `exponentialRolloutRate`<sup>Optional</sup> <a name="exponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.exponentialRolloutRate"></a>

```typescript
public readonly exponentialRolloutRate: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

The rate of increase for a job rollout.

This parameter allows you to define an exponential rate for a job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#exponential_rollout_rate IotJobTemplate#exponential_rollout_rate}

---

##### `maximumPerMinute`<sup>Optional</sup> <a name="maximumPerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```typescript
public readonly maximumPerMinute: number;
```

- *Type:* number

The maximum number of things that will be notified of a pending job, per minute.

This parameter allows you to create a staged rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#maximum_per_minute IotJobTemplate#maximum_per_minute}

---

### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

const iotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate: iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.baseRatePerMinute">baseRatePerMinute</a></code> | <code>number</code> | The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.incrementFactor">incrementFactor</a></code> | <code>number</code> | The exponential factor to increase the rate of rollout for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.rateIncreaseCriteria">rateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a></code> | The criteria to initiate the increase in rate of rollout for a job. |

---

##### `baseRatePerMinute`<sup>Optional</sup> <a name="baseRatePerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.baseRatePerMinute"></a>

```typescript
public readonly baseRatePerMinute: number;
```

- *Type:* number

The minimum number of things that will be notified of a pending job, per minute at the start of job rollout.

This parameter allows you to define the initial rate of rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#base_rate_per_minute IotJobTemplate#base_rate_per_minute}

---

##### `incrementFactor`<sup>Optional</sup> <a name="incrementFactor" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.incrementFactor"></a>

```typescript
public readonly incrementFactor: number;
```

- *Type:* number

The exponential factor to increase the rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#increment_factor IotJobTemplate#increment_factor}

---

##### `rateIncreaseCriteria`<sup>Optional</sup> <a name="rateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.rateIncreaseCriteria"></a>

```typescript
public readonly rateIncreaseCriteria: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

The criteria to initiate the increase in rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#rate_increase_criteria IotJobTemplate#rate_increase_criteria}

---

### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

const iotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria: iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfNotifiedThings">numberOfNotifiedThings</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#number_of_notified_things IotJobTemplate#number_of_notified_things}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfSucceededThings">numberOfSucceededThings</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#number_of_succeeded_things IotJobTemplate#number_of_succeeded_things}. |

---

##### `numberOfNotifiedThings`<sup>Optional</sup> <a name="numberOfNotifiedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```typescript
public readonly numberOfNotifiedThings: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#number_of_notified_things IotJobTemplate#number_of_notified_things}.

---

##### `numberOfSucceededThings`<sup>Optional</sup> <a name="numberOfSucceededThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```typescript
public readonly numberOfSucceededThings: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#number_of_succeeded_things IotJobTemplate#number_of_succeeded_things}.

---

### IotJobTemplateMaintenanceWindows <a name="IotJobTemplateMaintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

const iotJobTemplateMaintenanceWindows: iotJobTemplate.IotJobTemplateMaintenanceWindows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.durationInMinutes">durationInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#duration_in_minutes IotJobTemplate#duration_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#start_time IotJobTemplate#start_time}. |

---

##### `durationInMinutes`<sup>Optional</sup> <a name="durationInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.durationInMinutes"></a>

```typescript
public readonly durationInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#duration_in_minutes IotJobTemplate#duration_in_minutes}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#start_time IotJobTemplate#start_time}.

---

### IotJobTemplatePresignedUrlConfig <a name="IotJobTemplatePresignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

const iotJobTemplatePresignedUrlConfig: iotJobTemplate.IotJobTemplatePresignedUrlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.expiresInSec">expiresInSec</a></code> | <code>number</code> | How number (in seconds) pre-signed URLs are valid. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored. |

---

##### `expiresInSec`<sup>Optional</sup> <a name="expiresInSec" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.expiresInSec"></a>

```typescript
public readonly expiresInSec: number;
```

- *Type:* number

How number (in seconds) pre-signed URLs are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#expires_in_sec IotJobTemplate#expires_in_sec}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored.

The role must also grant permission for IoT to download the files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#role_arn IotJobTemplate#role_arn}

---

### IotJobTemplateTags <a name="IotJobTemplateTags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

const iotJobTemplateTags: iotJobTemplate.IotJobTemplateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.key">key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.value">value</a></code> | <code>string</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#key IotJobTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#value IotJobTemplate#value}

---

### IotJobTemplateTimeoutConfig <a name="IotJobTemplateTimeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

const iotJobTemplateTimeoutConfig: iotJobTemplate.IotJobTemplateTimeoutConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig.property.inProgressTimeoutInMinutes">inProgressTimeoutInMinutes</a></code> | <code>number</code> | Specifies the amount of time, in minutes, this device has to finish execution of this job. |

---

##### `inProgressTimeoutInMinutes`<sup>Optional</sup> <a name="inProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```typescript
public readonly inProgressTimeoutInMinutes: number;
```

- *Type:* number

Specifies the amount of time, in minutes, this device has to finish execution of this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_job_template#in_progress_timeout_in_minutes IotJobTemplate#in_progress_timeout_in_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### IotJobTemplateAbortConfigCriteriaListStructList <a name="IotJobTemplateAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.get"></a>

```typescript
public get(index: number): IotJobTemplateAbortConfigCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateAbortConfigCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>[]

---


### IotJobTemplateAbortConfigCriteriaListStructOutputReference <a name="IotJobTemplateAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetFailureType">resetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">resetMinNumberOfExecutedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage">resetThresholdPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetFailureType` <a name="resetFailureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetFailureType"></a>

```typescript
public resetFailureType(): void
```

##### `resetMinNumberOfExecutedThings` <a name="resetMinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```typescript
public resetMinNumberOfExecutedThings(): void
```

##### `resetThresholdPercentage` <a name="resetThresholdPercentage" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```typescript
public resetThresholdPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureTypeInput">failureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">minNumberOfExecutedThingsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput">thresholdPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureType">failureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">minNumberOfExecutedThings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">thresholdPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `failureTypeInput`<sup>Optional</sup> <a name="failureTypeInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureTypeInput"></a>

```typescript
public readonly failureTypeInput: string;
```

- *Type:* string

---

##### `minNumberOfExecutedThingsInput`<sup>Optional</sup> <a name="minNumberOfExecutedThingsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```typescript
public readonly minNumberOfExecutedThingsInput: number;
```

- *Type:* number

---

##### `thresholdPercentageInput`<sup>Optional</sup> <a name="thresholdPercentageInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```typescript
public readonly thresholdPercentageInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `failureType`<sup>Required</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```typescript
public readonly failureType: string;
```

- *Type:* string

---

##### `minNumberOfExecutedThings`<sup>Required</sup> <a name="minNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```typescript
public readonly minNumberOfExecutedThings: number;
```

- *Type:* number

---

##### `thresholdPercentage`<sup>Required</sup> <a name="thresholdPercentage" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```typescript
public readonly thresholdPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateAbortConfigCriteriaListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>

---


### IotJobTemplateAbortConfigOutputReference <a name="IotJobTemplateAbortConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateAbortConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.putCriteriaList">putCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resetCriteriaList">resetCriteriaList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriteriaList` <a name="putCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.putCriteriaList"></a>

```typescript
public putCriteriaList(value: IResolvable | IotJobTemplateAbortConfigCriteriaListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.putCriteriaList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>[]

---

##### `resetCriteriaList` <a name="resetCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resetCriteriaList"></a>

```typescript
public resetCriteriaList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaList">criteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList">IotJobTemplateAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaListInput">criteriaListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criteriaList`<sup>Required</sup> <a name="criteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaList"></a>

```typescript
public readonly criteriaList: IotJobTemplateAbortConfigCriteriaListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList">IotJobTemplateAbortConfigCriteriaListStructList</a>

---

##### `criteriaListInput`<sup>Optional</sup> <a name="criteriaListInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaListInput"></a>

```typescript
public readonly criteriaListInput: IResolvable | IotJobTemplateAbortConfigCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct">IotJobTemplateAbortConfigCriteriaListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateAbortConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

---


### IotJobTemplateJobExecutionsRetryConfigOutputReference <a name="IotJobTemplateJobExecutionsRetryConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.putRetryCriteriaList">putRetryCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resetRetryCriteriaList">resetRetryCriteriaList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetryCriteriaList` <a name="putRetryCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.putRetryCriteriaList"></a>

```typescript
public putRetryCriteriaList(value: IResolvable | IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.putRetryCriteriaList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>[]

---

##### `resetRetryCriteriaList` <a name="resetRetryCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resetRetryCriteriaList"></a>

```typescript
public resetRetryCriteriaList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaList">retryCriteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaListInput">retryCriteriaListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retryCriteriaList`<sup>Required</sup> <a name="retryCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaList"></a>

```typescript
public readonly retryCriteriaList: IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList</a>

---

##### `retryCriteriaListInput`<sup>Optional</sup> <a name="retryCriteriaListInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaListInput"></a>

```typescript
public readonly retryCriteriaListInput: IResolvable | IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateJobExecutionsRetryConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

---


### IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList <a name="IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.get"></a>

```typescript
public get(index: number): IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>[]

---


### IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference <a name="IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetFailureType">resetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetNumberOfRetries">resetNumberOfRetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureType` <a name="resetFailureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetFailureType"></a>

```typescript
public resetFailureType(): void
```

##### `resetNumberOfRetries` <a name="resetNumberOfRetries" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetNumberOfRetries"></a>

```typescript
public resetNumberOfRetries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureTypeInput">failureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetriesInput">numberOfRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureType">failureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetries">numberOfRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureTypeInput`<sup>Optional</sup> <a name="failureTypeInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureTypeInput"></a>

```typescript
public readonly failureTypeInput: string;
```

- *Type:* string

---

##### `numberOfRetriesInput`<sup>Optional</sup> <a name="numberOfRetriesInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetriesInput"></a>

```typescript
public readonly numberOfRetriesInput: number;
```

- *Type:* number

---

##### `failureType`<sup>Required</sup> <a name="failureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureType"></a>

```typescript
public readonly failureType: string;
```

- *Type:* string

---

##### `numberOfRetries`<sup>Required</sup> <a name="numberOfRetries" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetries"></a>

```typescript
public readonly numberOfRetries: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct</a>

---


### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.putRateIncreaseCriteria">putRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetBaseRatePerMinute">resetBaseRatePerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetIncrementFactor">resetIncrementFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetRateIncreaseCriteria">resetRateIncreaseCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRateIncreaseCriteria` <a name="putRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.putRateIncreaseCriteria"></a>

```typescript
public putRateIncreaseCriteria(value: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.putRateIncreaseCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

---

##### `resetBaseRatePerMinute` <a name="resetBaseRatePerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetBaseRatePerMinute"></a>

```typescript
public resetBaseRatePerMinute(): void
```

##### `resetIncrementFactor` <a name="resetIncrementFactor" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetIncrementFactor"></a>

```typescript
public resetIncrementFactor(): void
```

##### `resetRateIncreaseCriteria` <a name="resetRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetRateIncreaseCriteria"></a>

```typescript
public resetRateIncreaseCriteria(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteria">rateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinuteInput">baseRatePerMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactorInput">incrementFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteriaInput">rateIncreaseCriteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinute">baseRatePerMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactor">incrementFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rateIncreaseCriteria`<sup>Required</sup> <a name="rateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteria"></a>

```typescript
public readonly rateIncreaseCriteria: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference</a>

---

##### `baseRatePerMinuteInput`<sup>Optional</sup> <a name="baseRatePerMinuteInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinuteInput"></a>

```typescript
public readonly baseRatePerMinuteInput: number;
```

- *Type:* number

---

##### `incrementFactorInput`<sup>Optional</sup> <a name="incrementFactorInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactorInput"></a>

```typescript
public readonly incrementFactorInput: number;
```

- *Type:* number

---

##### `rateIncreaseCriteriaInput`<sup>Optional</sup> <a name="rateIncreaseCriteriaInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```typescript
public readonly rateIncreaseCriteriaInput: IResolvable | IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

---

##### `baseRatePerMinute`<sup>Required</sup> <a name="baseRatePerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinute"></a>

```typescript
public readonly baseRatePerMinute: number;
```

- *Type:* number

---

##### `incrementFactor`<sup>Required</sup> <a name="incrementFactor" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactor"></a>

```typescript
public readonly incrementFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

---


### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">resetNumberOfNotifiedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">resetNumberOfSucceededThings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumberOfNotifiedThings` <a name="resetNumberOfNotifiedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```typescript
public resetNumberOfNotifiedThings(): void
```

##### `resetNumberOfSucceededThings` <a name="resetNumberOfSucceededThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```typescript
public resetNumberOfSucceededThings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">numberOfNotifiedThingsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">numberOfSucceededThingsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">numberOfNotifiedThings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">numberOfSucceededThings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberOfNotifiedThingsInput`<sup>Optional</sup> <a name="numberOfNotifiedThingsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```typescript
public readonly numberOfNotifiedThingsInput: number;
```

- *Type:* number

---

##### `numberOfSucceededThingsInput`<sup>Optional</sup> <a name="numberOfSucceededThingsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```typescript
public readonly numberOfSucceededThingsInput: number;
```

- *Type:* number

---

##### `numberOfNotifiedThings`<sup>Required</sup> <a name="numberOfNotifiedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```typescript
public readonly numberOfNotifiedThings: number;
```

- *Type:* number

---

##### `numberOfSucceededThings`<sup>Required</sup> <a name="numberOfSucceededThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```typescript
public readonly numberOfSucceededThings: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

---


### IotJobTemplateJobExecutionsRolloutConfigOutputReference <a name="IotJobTemplateJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate">putExponentialRolloutRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetExponentialRolloutRate">resetExponentialRolloutRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">resetMaximumPerMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExponentialRolloutRate` <a name="putExponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate"></a>

```typescript
public putExponentialRolloutRate(value: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

---

##### `resetExponentialRolloutRate` <a name="resetExponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetExponentialRolloutRate"></a>

```typescript
public resetExponentialRolloutRate(): void
```

##### `resetMaximumPerMinute` <a name="resetMaximumPerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```typescript
public resetMaximumPerMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRate">exponentialRolloutRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRateInput">exponentialRolloutRateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">maximumPerMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">maximumPerMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exponentialRolloutRate`<sup>Required</sup> <a name="exponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRate"></a>

```typescript
public readonly exponentialRolloutRate: IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference</a>

---

##### `exponentialRolloutRateInput`<sup>Optional</sup> <a name="exponentialRolloutRateInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRateInput"></a>

```typescript
public readonly exponentialRolloutRateInput: IResolvable | IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

---

##### `maximumPerMinuteInput`<sup>Optional</sup> <a name="maximumPerMinuteInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```typescript
public readonly maximumPerMinuteInput: number;
```

- *Type:* number

---

##### `maximumPerMinute`<sup>Required</sup> <a name="maximumPerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```typescript
public readonly maximumPerMinute: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateJobExecutionsRolloutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

---


### IotJobTemplateMaintenanceWindowsList <a name="IotJobTemplateMaintenanceWindowsList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateMaintenanceWindowsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.get"></a>

```typescript
public get(index: number): IotJobTemplateMaintenanceWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateMaintenanceWindows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>[]

---


### IotJobTemplateMaintenanceWindowsOutputReference <a name="IotJobTemplateMaintenanceWindowsOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetDurationInMinutes">resetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationInMinutes` <a name="resetDurationInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetDurationInMinutes"></a>

```typescript
public resetDurationInMinutes(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutesInput">durationInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInMinutesInput`<sup>Optional</sup> <a name="durationInMinutesInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutesInput"></a>

```typescript
public readonly durationInMinutesInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutes"></a>

```typescript
public readonly durationInMinutes: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateMaintenanceWindows;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows">IotJobTemplateMaintenanceWindows</a>

---


### IotJobTemplatePresignedUrlConfigOutputReference <a name="IotJobTemplatePresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetExpiresInSec">resetExpiresInSec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpiresInSec` <a name="resetExpiresInSec" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetExpiresInSec"></a>

```typescript
public resetExpiresInSec(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSecInput">expiresInSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSec">expiresInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiresInSecInput`<sup>Optional</sup> <a name="expiresInSecInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSecInput"></a>

```typescript
public readonly expiresInSecInput: number;
```

- *Type:* number

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `expiresInSec`<sup>Required</sup> <a name="expiresInSec" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSec"></a>

```typescript
public readonly expiresInSec: number;
```

- *Type:* number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplatePresignedUrlConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

---


### IotJobTemplateTagsList <a name="IotJobTemplateTagsList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.get"></a>

```typescript
public get(index: number): IotJobTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>[]

---


### IotJobTemplateTagsOutputReference <a name="IotJobTemplateTagsOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags">IotJobTemplateTags</a>

---


### IotJobTemplateTimeoutConfigOutputReference <a name="IotJobTemplateTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer"></a>

```typescript
import { iotJobTemplate } from '@cdktn/provider-awscc'

new iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">resetInProgressTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInProgressTimeoutInMinutes` <a name="resetInProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```typescript
public resetInProgressTimeoutInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">inProgressTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">inProgressTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inProgressTimeoutInMinutesInput`<sup>Optional</sup> <a name="inProgressTimeoutInMinutesInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```typescript
public readonly inProgressTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `inProgressTimeoutInMinutes`<sup>Required</sup> <a name="inProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```typescript
public readonly inProgressTimeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotJobTemplateTimeoutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

---




# `iotOtaUpdate` Submodule <a name="`iotOtaUpdate` Submodule" id="@cdktn/provider-awscc.iotOtaUpdate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotOtaUpdate <a name="IotOtaUpdate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update awscc_iot_ota_update}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdate(scope: Construct, id: string, config: IotOtaUpdateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig">IotOtaUpdateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig">IotOtaUpdateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobAbortConfig">putAwsJobAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobExecutionsRolloutConfig">putAwsJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobPresignedUrlConfig">putAwsJobPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobTimeoutConfig">putAwsJobTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putFiles">putFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAdditionalParameters">resetAdditionalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobAbortConfig">resetAwsJobAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobExecutionsRolloutConfig">resetAwsJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobPresignedUrlConfig">resetAwsJobPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobTimeoutConfig">resetAwsJobTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTargetSelection">resetTargetSelection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsJobAbortConfig` <a name="putAwsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobAbortConfig"></a>

```typescript
public putAwsJobAbortConfig(value: IotOtaUpdateAwsJobAbortConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobAbortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

---

##### `putAwsJobExecutionsRolloutConfig` <a name="putAwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobExecutionsRolloutConfig"></a>

```typescript
public putAwsJobExecutionsRolloutConfig(value: IotOtaUpdateAwsJobExecutionsRolloutConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobExecutionsRolloutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

---

##### `putAwsJobPresignedUrlConfig` <a name="putAwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobPresignedUrlConfig"></a>

```typescript
public putAwsJobPresignedUrlConfig(value: IotOtaUpdateAwsJobPresignedUrlConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobPresignedUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

---

##### `putAwsJobTimeoutConfig` <a name="putAwsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobTimeoutConfig"></a>

```typescript
public putAwsJobTimeoutConfig(value: IotOtaUpdateAwsJobTimeoutConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

---

##### `putFiles` <a name="putFiles" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putFiles"></a>

```typescript
public putFiles(value: IResolvable | IotOtaUpdateFiles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putFiles.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putTags"></a>

```typescript
public putTags(value: IResolvable | IotOtaUpdateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>[]

---

##### `resetAdditionalParameters` <a name="resetAdditionalParameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAdditionalParameters"></a>

```typescript
public resetAdditionalParameters(): void
```

##### `resetAwsJobAbortConfig` <a name="resetAwsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobAbortConfig"></a>

```typescript
public resetAwsJobAbortConfig(): void
```

##### `resetAwsJobExecutionsRolloutConfig` <a name="resetAwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobExecutionsRolloutConfig"></a>

```typescript
public resetAwsJobExecutionsRolloutConfig(): void
```

##### `resetAwsJobPresignedUrlConfig` <a name="resetAwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobPresignedUrlConfig"></a>

```typescript
public resetAwsJobPresignedUrlConfig(): void
```

##### `resetAwsJobTimeoutConfig` <a name="resetAwsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobTimeoutConfig"></a>

```typescript
public resetAwsJobTimeoutConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetSelection` <a name="resetTargetSelection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTargetSelection"></a>

```typescript
public resetTargetSelection(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotOtaUpdate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isConstruct"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

iotOtaUpdate.IotOtaUpdate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformElement"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

iotOtaUpdate.IotOtaUpdate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformResource"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

iotOtaUpdate.IotOtaUpdate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

iotOtaUpdate.IotOtaUpdate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotOtaUpdate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotOtaUpdate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotOtaUpdate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotOtaUpdate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfig">awsJobAbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference">IotOtaUpdateAwsJobAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfig">awsJobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfig">awsJobPresignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference">IotOtaUpdateAwsJobPresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfig">awsJobTimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference">IotOtaUpdateAwsJobTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.files">files</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList">IotOtaUpdateFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateArn">otaUpdateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateStatus">otaUpdateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList">IotOtaUpdateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParametersInput">additionalParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfigInput">awsJobAbortConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfigInput">awsJobExecutionsRolloutConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfigInput">awsJobPresignedUrlConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfigInput">awsJobTimeoutConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.filesInput">filesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateIdInput">otaUpdateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelectionInput">targetSelectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetsInput">targetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParameters">additionalParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateId">otaUpdateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targets">targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelection">targetSelection</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsJobAbortConfig`<sup>Required</sup> <a name="awsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfig"></a>

```typescript
public readonly awsJobAbortConfig: IotOtaUpdateAwsJobAbortConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference">IotOtaUpdateAwsJobAbortConfigOutputReference</a>

---

##### `awsJobExecutionsRolloutConfig`<sup>Required</sup> <a name="awsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfig"></a>

```typescript
public readonly awsJobExecutionsRolloutConfig: IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference</a>

---

##### `awsJobPresignedUrlConfig`<sup>Required</sup> <a name="awsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfig"></a>

```typescript
public readonly awsJobPresignedUrlConfig: IotOtaUpdateAwsJobPresignedUrlConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference">IotOtaUpdateAwsJobPresignedUrlConfigOutputReference</a>

---

##### `awsJobTimeoutConfig`<sup>Required</sup> <a name="awsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfig"></a>

```typescript
public readonly awsJobTimeoutConfig: IotOtaUpdateAwsJobTimeoutConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference">IotOtaUpdateAwsJobTimeoutConfigOutputReference</a>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.files"></a>

```typescript
public readonly files: IotOtaUpdateFilesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList">IotOtaUpdateFilesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `otaUpdateArn`<sup>Required</sup> <a name="otaUpdateArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateArn"></a>

```typescript
public readonly otaUpdateArn: string;
```

- *Type:* string

---

##### `otaUpdateStatus`<sup>Required</sup> <a name="otaUpdateStatus" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateStatus"></a>

```typescript
public readonly otaUpdateStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tags"></a>

```typescript
public readonly tags: IotOtaUpdateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList">IotOtaUpdateTagsList</a>

---

##### `additionalParametersInput`<sup>Optional</sup> <a name="additionalParametersInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParametersInput"></a>

```typescript
public readonly additionalParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `awsJobAbortConfigInput`<sup>Optional</sup> <a name="awsJobAbortConfigInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfigInput"></a>

```typescript
public readonly awsJobAbortConfigInput: IResolvable | IotOtaUpdateAwsJobAbortConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

---

##### `awsJobExecutionsRolloutConfigInput`<sup>Optional</sup> <a name="awsJobExecutionsRolloutConfigInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfigInput"></a>

```typescript
public readonly awsJobExecutionsRolloutConfigInput: IResolvable | IotOtaUpdateAwsJobExecutionsRolloutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

---

##### `awsJobPresignedUrlConfigInput`<sup>Optional</sup> <a name="awsJobPresignedUrlConfigInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfigInput"></a>

```typescript
public readonly awsJobPresignedUrlConfigInput: IResolvable | IotOtaUpdateAwsJobPresignedUrlConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

---

##### `awsJobTimeoutConfigInput`<sup>Optional</sup> <a name="awsJobTimeoutConfigInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfigInput"></a>

```typescript
public readonly awsJobTimeoutConfigInput: IResolvable | IotOtaUpdateAwsJobTimeoutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.filesInput"></a>

```typescript
public readonly filesInput: IResolvable | IotOtaUpdateFiles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>[]

---

##### `otaUpdateIdInput`<sup>Optional</sup> <a name="otaUpdateIdInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateIdInput"></a>

```typescript
public readonly otaUpdateIdInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotOtaUpdateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>[]

---

##### `targetSelectionInput`<sup>Optional</sup> <a name="targetSelectionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelectionInput"></a>

```typescript
public readonly targetSelectionInput: string;
```

- *Type:* string

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetsInput"></a>

```typescript
public readonly targetsInput: string[];
```

- *Type:* string[]

---

##### `additionalParameters`<sup>Required</sup> <a name="additionalParameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParameters"></a>

```typescript
public readonly additionalParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `otaUpdateId`<sup>Required</sup> <a name="otaUpdateId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateId"></a>

```typescript
public readonly otaUpdateId: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

---

##### `targetSelection`<sup>Required</sup> <a name="targetSelection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelection"></a>

```typescript
public readonly targetSelection: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotOtaUpdateAwsJobAbortConfig <a name="IotOtaUpdateAwsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateAwsJobAbortConfig: iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig.property.abortCriteriaList">abortCriteriaList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>[]</code> | The list of criteria that determine when and how to abort the job. |

---

##### `abortCriteriaList`<sup>Optional</sup> <a name="abortCriteriaList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig.property.abortCriteriaList"></a>

```typescript
public readonly abortCriteriaList: IResolvable | IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>[]

The list of criteria that determine when and how to abort the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#abort_criteria_list IotOtaUpdate#abort_criteria_list}

---

### IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct <a name="IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct: iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.action">action</a></code> | <code>string</code> | The type of job action to take to initiate the job abort. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.failureType">failureType</a></code> | <code>string</code> | The type of job execution failures that can initiate a job abort. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.minNumberOfExecutedThings">minNumberOfExecutedThings</a></code> | <code>number</code> | The minimum number of things which must receive job execution notifications before the job can be aborted. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.thresholdPercentage">thresholdPercentage</a></code> | <code>number</code> | The minimum percentage of job execution failures that must occur to initiate the job abort. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The type of job action to take to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#action IotOtaUpdate#action}

---

##### `failureType`<sup>Optional</sup> <a name="failureType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.failureType"></a>

```typescript
public readonly failureType: string;
```

- *Type:* string

The type of job execution failures that can initiate a job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#failure_type IotOtaUpdate#failure_type}

---

##### `minNumberOfExecutedThings`<sup>Optional</sup> <a name="minNumberOfExecutedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```typescript
public readonly minNumberOfExecutedThings: number;
```

- *Type:* number

The minimum number of things which must receive job execution notifications before the job can be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#min_number_of_executed_things IotOtaUpdate#min_number_of_executed_things}

---

##### `thresholdPercentage`<sup>Optional</sup> <a name="thresholdPercentage" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.thresholdPercentage"></a>

```typescript
public readonly thresholdPercentage: number;
```

- *Type:* number

The minimum percentage of job execution failures that must occur to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#threshold_percentage IotOtaUpdate#threshold_percentage}

---

### IotOtaUpdateAwsJobExecutionsRolloutConfig <a name="IotOtaUpdateAwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateAwsJobExecutionsRolloutConfig: iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.exponentialRate">exponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#exponential_rate IotOtaUpdate#exponential_rate}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.maximumPerMinute">maximumPerMinute</a></code> | <code>number</code> | The maximum number of OTA update job executions started per minute. |

---

##### `exponentialRate`<sup>Optional</sup> <a name="exponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.exponentialRate"></a>

```typescript
public readonly exponentialRate: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#exponential_rate IotOtaUpdate#exponential_rate}.

---

##### `maximumPerMinute`<sup>Optional</sup> <a name="maximumPerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```typescript
public readonly maximumPerMinute: number;
```

- *Type:* number

The maximum number of OTA update job executions started per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#maximum_per_minute IotOtaUpdate#maximum_per_minute}

---

### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate: iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute">baseRatePerMinute</a></code> | <code>number</code> | The minimum number of things that will be notified of a pending job, per minute, at the start of the job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.incrementFactor">incrementFactor</a></code> | <code>number</code> | The rate of increase for a job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria">rateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#rate_increase_criteria IotOtaUpdate#rate_increase_criteria}. |

---

##### `baseRatePerMinute`<sup>Optional</sup> <a name="baseRatePerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute"></a>

```typescript
public readonly baseRatePerMinute: number;
```

- *Type:* number

The minimum number of things that will be notified of a pending job, per minute, at the start of the job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#base_rate_per_minute IotOtaUpdate#base_rate_per_minute}

---

##### `incrementFactor`<sup>Optional</sup> <a name="incrementFactor" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.incrementFactor"></a>

```typescript
public readonly incrementFactor: number;
```

- *Type:* number

The rate of increase for a job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#increment_factor IotOtaUpdate#increment_factor}

---

##### `rateIncreaseCriteria`<sup>Optional</sup> <a name="rateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria"></a>

```typescript
public readonly rateIncreaseCriteria: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#rate_increase_criteria IotOtaUpdate#rate_increase_criteria}.

---

### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria: iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings">numberOfNotifiedThings</a></code> | <code>number</code> | When this number of things have been notified, it will initiate an increase in the rollout rate. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings">numberOfSucceededThings</a></code> | <code>number</code> | When this number of things have succeeded in their job execution, it will initiate an increase in the rollout rate. |

---

##### `numberOfNotifiedThings`<sup>Optional</sup> <a name="numberOfNotifiedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```typescript
public readonly numberOfNotifiedThings: number;
```

- *Type:* number

When this number of things have been notified, it will initiate an increase in the rollout rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#number_of_notified_things IotOtaUpdate#number_of_notified_things}

---

##### `numberOfSucceededThings`<sup>Optional</sup> <a name="numberOfSucceededThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```typescript
public readonly numberOfSucceededThings: number;
```

- *Type:* number

When this number of things have succeeded in their job execution, it will initiate an increase in the rollout rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#number_of_succeeded_things IotOtaUpdate#number_of_succeeded_things}

---

### IotOtaUpdateAwsJobPresignedUrlConfig <a name="IotOtaUpdateAwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateAwsJobPresignedUrlConfig: iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig.property.expiresInSec">expiresInSec</a></code> | <code>number</code> | How long (in seconds) pre-signed URLs are valid. |

---

##### `expiresInSec`<sup>Optional</sup> <a name="expiresInSec" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig.property.expiresInSec"></a>

```typescript
public readonly expiresInSec: number;
```

- *Type:* number

How long (in seconds) pre-signed URLs are valid.

Valid values are 60 - 3600, the default value is 1800 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#expires_in_sec IotOtaUpdate#expires_in_sec}

---

### IotOtaUpdateAwsJobTimeoutConfig <a name="IotOtaUpdateAwsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateAwsJobTimeoutConfig: iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig.property.inProgressTimeoutInMinutes">inProgressTimeoutInMinutes</a></code> | <code>number</code> | Specifies the amount of time, in minutes, this device has to finish execution of this job. |

---

##### `inProgressTimeoutInMinutes`<sup>Optional</sup> <a name="inProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```typescript
public readonly inProgressTimeoutInMinutes: number;
```

- *Type:* number

Specifies the amount of time, in minutes, this device has to finish execution of this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#in_progress_timeout_in_minutes IotOtaUpdate#in_progress_timeout_in_minutes}

---

### IotOtaUpdateConfig <a name="IotOtaUpdateConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateConfig: iotOtaUpdate.IotOtaUpdateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.files">files</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>[]</code> | The files to be streamed by the OTA update. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.otaUpdateId">otaUpdateId</a></code> | <code>string</code> | The ID of the OTA update to be created. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targets">targets</a></code> | <code>string[]</code> | The devices targeted to receive OTA updates. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.additionalParameters">additionalParameters</a></code> | <code>{[ key: string ]: string}</code> | A list of additional OTA update parameters, which are name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobAbortConfig">awsJobAbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_abort_config IotOtaUpdate#aws_job_abort_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobExecutionsRolloutConfig">awsJobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_executions_rollout_config IotOtaUpdate#aws_job_executions_rollout_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobPresignedUrlConfig">awsJobPresignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_presigned_url_config IotOtaUpdate#aws_job_presigned_url_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobTimeoutConfig">awsJobTimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_timeout_config IotOtaUpdate#aws_job_timeout_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.description">description</a></code> | <code>string</code> | The description of the OTA update. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.protocols">protocols</a></code> | <code>string[]</code> | The protocol used to transfer the OTA update image. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The IAM role that grants AWS IoT Core access to the Amazon S3, IoT jobs and AWS Code Signing resources to create an OTA update job. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>[]</code> | Metadata which can be used to manage updates. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targetSelection">targetSelection</a></code> | <code>string</code> | Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all things specified as targets have completed the update (SNAPSHOT). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.files"></a>

```typescript
public readonly files: IResolvable | IotOtaUpdateFiles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>[]

The files to be streamed by the OTA update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#files IotOtaUpdate#files}

---

##### `otaUpdateId`<sup>Required</sup> <a name="otaUpdateId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.otaUpdateId"></a>

```typescript
public readonly otaUpdateId: string;
```

- *Type:* string

The ID of the OTA update to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#ota_update_id IotOtaUpdate#ota_update_id}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

The devices targeted to receive OTA updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#targets IotOtaUpdate#targets}

---

##### `additionalParameters`<sup>Optional</sup> <a name="additionalParameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.additionalParameters"></a>

```typescript
public readonly additionalParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of additional OTA update parameters, which are name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#additional_parameters IotOtaUpdate#additional_parameters}

---

##### `awsJobAbortConfig`<sup>Optional</sup> <a name="awsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobAbortConfig"></a>

```typescript
public readonly awsJobAbortConfig: IotOtaUpdateAwsJobAbortConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_abort_config IotOtaUpdate#aws_job_abort_config}.

---

##### `awsJobExecutionsRolloutConfig`<sup>Optional</sup> <a name="awsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobExecutionsRolloutConfig"></a>

```typescript
public readonly awsJobExecutionsRolloutConfig: IotOtaUpdateAwsJobExecutionsRolloutConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_executions_rollout_config IotOtaUpdate#aws_job_executions_rollout_config}.

---

##### `awsJobPresignedUrlConfig`<sup>Optional</sup> <a name="awsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobPresignedUrlConfig"></a>

```typescript
public readonly awsJobPresignedUrlConfig: IotOtaUpdateAwsJobPresignedUrlConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_presigned_url_config IotOtaUpdate#aws_job_presigned_url_config}.

---

##### `awsJobTimeoutConfig`<sup>Optional</sup> <a name="awsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobTimeoutConfig"></a>

```typescript
public readonly awsJobTimeoutConfig: IotOtaUpdateAwsJobTimeoutConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_timeout_config IotOtaUpdate#aws_job_timeout_config}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the OTA update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#description IotOtaUpdate#description}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

The protocol used to transfer the OTA update image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#protocols IotOtaUpdate#protocols}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The IAM role that grants AWS IoT Core access to the Amazon S3, IoT jobs and AWS Code Signing resources to create an OTA update job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#role_arn IotOtaUpdate#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotOtaUpdateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>[]

Metadata which can be used to manage updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#tags IotOtaUpdate#tags}

---

##### `targetSelection`<sup>Optional</sup> <a name="targetSelection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targetSelection"></a>

```typescript
public readonly targetSelection: string;
```

- *Type:* string

Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all things specified as targets have completed the update (SNAPSHOT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#target_selection IotOtaUpdate#target_selection}

---

### IotOtaUpdateFiles <a name="IotOtaUpdateFiles" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateFiles: iotOtaUpdate.IotOtaUpdateFiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | A list of name-attribute pairs. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.codeSigning">codeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#code_signing IotOtaUpdate#code_signing}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileLocation">fileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_location IotOtaUpdate#file_location}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileName">fileName</a></code> | <code>string</code> | The name of the file. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileType">fileType</a></code> | <code>number</code> | An integer value you can include in the job document to allow your devices to identify the type of file received from the cloud. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileVersion">fileVersion</a></code> | <code>string</code> | The file version. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of name-attribute pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#attributes IotOtaUpdate#attributes}

---

##### `codeSigning`<sup>Optional</sup> <a name="codeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.codeSigning"></a>

```typescript
public readonly codeSigning: IotOtaUpdateFilesCodeSigning;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#code_signing IotOtaUpdate#code_signing}.

---

##### `fileLocation`<sup>Optional</sup> <a name="fileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileLocation"></a>

```typescript
public readonly fileLocation: IotOtaUpdateFilesFileLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_location IotOtaUpdate#file_location}.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_name IotOtaUpdate#file_name}

---

##### `fileType`<sup>Optional</sup> <a name="fileType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileType"></a>

```typescript
public readonly fileType: number;
```

- *Type:* number

An integer value you can include in the job document to allow your devices to identify the type of file received from the cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_type IotOtaUpdate#file_type}

---

##### `fileVersion`<sup>Optional</sup> <a name="fileVersion" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileVersion"></a>

```typescript
public readonly fileVersion: string;
```

- *Type:* string

The file version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_version IotOtaUpdate#file_version}

---

### IotOtaUpdateFilesCodeSigning <a name="IotOtaUpdateFilesCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateFilesCodeSigning: iotOtaUpdate.IotOtaUpdateFilesCodeSigning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.awsSignerJobId">awsSignerJobId</a></code> | <code>string</code> | The ID of the AWSSignerJob which was created to sign the file. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.customCodeSigning">customCodeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#custom_code_signing IotOtaUpdate#custom_code_signing}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.startSigningJobParameter">startSigningJobParameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#start_signing_job_parameter IotOtaUpdate#start_signing_job_parameter}. |

---

##### `awsSignerJobId`<sup>Optional</sup> <a name="awsSignerJobId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.awsSignerJobId"></a>

```typescript
public readonly awsSignerJobId: string;
```

- *Type:* string

The ID of the AWSSignerJob which was created to sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_signer_job_id IotOtaUpdate#aws_signer_job_id}

---

##### `customCodeSigning`<sup>Optional</sup> <a name="customCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.customCodeSigning"></a>

```typescript
public readonly customCodeSigning: IotOtaUpdateFilesCodeSigningCustomCodeSigning;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#custom_code_signing IotOtaUpdate#custom_code_signing}.

---

##### `startSigningJobParameter`<sup>Optional</sup> <a name="startSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.startSigningJobParameter"></a>

```typescript
public readonly startSigningJobParameter: IotOtaUpdateFilesCodeSigningStartSigningJobParameter;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#start_signing_job_parameter IotOtaUpdate#start_signing_job_parameter}.

---

### IotOtaUpdateFilesCodeSigningCustomCodeSigning <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateFilesCodeSigningCustomCodeSigning: iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.certificateChain">certificateChain</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_chain IotOtaUpdate#certificate_chain}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.hashAlgorithm">hashAlgorithm</a></code> | <code>string</code> | The hash algorithm used to code sign the file. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signature">signature</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature IotOtaUpdate#signature}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | The signature algorithm used to code sign the file. |

---

##### `certificateChain`<sup>Optional</sup> <a name="certificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.certificateChain"></a>

```typescript
public readonly certificateChain: IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_chain IotOtaUpdate#certificate_chain}.

---

##### `hashAlgorithm`<sup>Optional</sup> <a name="hashAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.hashAlgorithm"></a>

```typescript
public readonly hashAlgorithm: string;
```

- *Type:* string

The hash algorithm used to code sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#hash_algorithm IotOtaUpdate#hash_algorithm}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signature"></a>

```typescript
public readonly signature: IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature IotOtaUpdate#signature}.

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

The signature algorithm used to code sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature_algorithm IotOtaUpdate#signature_algorithm}

---

### IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain: iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.certificateName">certificateName</a></code> | <code>string</code> | The name of the certificate. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.inlineDocument">inlineDocument</a></code> | <code>string</code> | A base64 encoded binary representation of the code signing certificate chain. |

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

The name of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_name IotOtaUpdate#certificate_name}

---

##### `inlineDocument`<sup>Optional</sup> <a name="inlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.inlineDocument"></a>

```typescript
public readonly inlineDocument: string;
```

- *Type:* string

A base64 encoded binary representation of the code signing certificate chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#inline_document IotOtaUpdate#inline_document}

---

### IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateFilesCodeSigningCustomCodeSigningSignature: iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.property.inlineDocument">inlineDocument</a></code> | <code>string</code> | A base64 encoded binary representation of the code signing signature. |

---

##### `inlineDocument`<sup>Optional</sup> <a name="inlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.property.inlineDocument"></a>

```typescript
public readonly inlineDocument: string;
```

- *Type:* string

A base64 encoded binary representation of the code signing signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#inline_document IotOtaUpdate#inline_document}

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameter <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateFilesCodeSigningStartSigningJobParameter: iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#destination IotOtaUpdate#destination}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileName">signingProfileName</a></code> | <code>string</code> | The code-signing profile name. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileParameter">signingProfileParameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_parameter IotOtaUpdate#signing_profile_parameter}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.destination"></a>

```typescript
public readonly destination: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#destination IotOtaUpdate#destination}.

---

##### `signingProfileName`<sup>Optional</sup> <a name="signingProfileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileName"></a>

```typescript
public readonly signingProfileName: string;
```

- *Type:* string

The code-signing profile name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_name IotOtaUpdate#signing_profile_name}

---

##### `signingProfileParameter`<sup>Optional</sup> <a name="signingProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileParameter"></a>

```typescript
public readonly signingProfileParameter: IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_parameter IotOtaUpdate#signing_profile_parameter}.

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination: iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_destination IotOtaUpdate#s3_destination}. |

---

##### `s3Destination`<sup>Optional</sup> <a name="s3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.property.s3Destination"></a>

```typescript
public readonly s3Destination: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_destination IotOtaUpdate#s3_destination}.

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination: iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.bucket">bucket</a></code> | <code>string</code> | The S3 bucket that contains the updated firmware. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.prefix">prefix</a></code> | <code>string</code> | The S3 prefix. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The S3 bucket that contains the updated firmware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#bucket IotOtaUpdate#bucket}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The S3 prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#prefix IotOtaUpdate#prefix}

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter: iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificateArn">certificateArn</a></code> | <code>string</code> | Certificate ARN. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificatePathOnDevice">certificatePathOnDevice</a></code> | <code>string</code> | The location of the code-signing certificate on your device. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.platform">platform</a></code> | <code>string</code> | The hardware platform of your device. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Certificate ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_arn IotOtaUpdate#certificate_arn}

---

##### `certificatePathOnDevice`<sup>Optional</sup> <a name="certificatePathOnDevice" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificatePathOnDevice"></a>

```typescript
public readonly certificatePathOnDevice: string;
```

- *Type:* string

The location of the code-signing certificate on your device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_path_on_device IotOtaUpdate#certificate_path_on_device}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

The hardware platform of your device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#platform IotOtaUpdate#platform}

---

### IotOtaUpdateFilesFileLocation <a name="IotOtaUpdateFilesFileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateFilesFileLocation: iotOtaUpdate.IotOtaUpdateFilesFileLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_location IotOtaUpdate#s3_location}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.stream">stream</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream IotOtaUpdate#stream}. |

---

##### `s3Location`<sup>Optional</sup> <a name="s3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.s3Location"></a>

```typescript
public readonly s3Location: IotOtaUpdateFilesFileLocationS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_location IotOtaUpdate#s3_location}.

---

##### `stream`<sup>Optional</sup> <a name="stream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.stream"></a>

```typescript
public readonly stream: IotOtaUpdateFilesFileLocationStream;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream IotOtaUpdate#stream}.

---

### IotOtaUpdateFilesFileLocationS3Location <a name="IotOtaUpdateFilesFileLocationS3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateFilesFileLocationS3Location: iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.bucket">bucket</a></code> | <code>string</code> | The S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.key">key</a></code> | <code>string</code> | The S3 key. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.version">version</a></code> | <code>string</code> | The S3 bucket version. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#bucket IotOtaUpdate#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The S3 key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The S3 bucket version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#version IotOtaUpdate#version}

---

### IotOtaUpdateFilesFileLocationStream <a name="IotOtaUpdateFilesFileLocationStream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateFilesFileLocationStream: iotOtaUpdate.IotOtaUpdateFilesFileLocationStream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.fileId">fileId</a></code> | <code>number</code> | The ID of a file associated with a stream. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.streamId">streamId</a></code> | <code>string</code> | The stream ID. |

---

##### `fileId`<sup>Optional</sup> <a name="fileId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.fileId"></a>

```typescript
public readonly fileId: number;
```

- *Type:* number

The ID of a file associated with a stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_id IotOtaUpdate#file_id}

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

The stream ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream_id IotOtaUpdate#stream_id}

---

### IotOtaUpdateTags <a name="IotOtaUpdateTags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

const iotOtaUpdateTags: iotOtaUpdate.IotOtaUpdateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#value IotOtaUpdate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#value IotOtaUpdate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList <a name="IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get"></a>

```typescript
public get(index: number): IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>[]

---


### IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference <a name="IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetFailureType">resetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">resetMinNumberOfExecutedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetThresholdPercentage">resetThresholdPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetFailureType` <a name="resetFailureType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetFailureType"></a>

```typescript
public resetFailureType(): void
```

##### `resetMinNumberOfExecutedThings` <a name="resetMinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```typescript
public resetMinNumberOfExecutedThings(): void
```

##### `resetThresholdPercentage` <a name="resetThresholdPercentage" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```typescript
public resetThresholdPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureTypeInput">failureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">minNumberOfExecutedThingsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentageInput">thresholdPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureType">failureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThings">minNumberOfExecutedThings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentage">thresholdPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `failureTypeInput`<sup>Optional</sup> <a name="failureTypeInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureTypeInput"></a>

```typescript
public readonly failureTypeInput: string;
```

- *Type:* string

---

##### `minNumberOfExecutedThingsInput`<sup>Optional</sup> <a name="minNumberOfExecutedThingsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```typescript
public readonly minNumberOfExecutedThingsInput: number;
```

- *Type:* number

---

##### `thresholdPercentageInput`<sup>Optional</sup> <a name="thresholdPercentageInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```typescript
public readonly thresholdPercentageInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `failureType`<sup>Required</sup> <a name="failureType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureType"></a>

```typescript
public readonly failureType: string;
```

- *Type:* string

---

##### `minNumberOfExecutedThings`<sup>Required</sup> <a name="minNumberOfExecutedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```typescript
public readonly minNumberOfExecutedThings: number;
```

- *Type:* number

---

##### `thresholdPercentage`<sup>Required</sup> <a name="thresholdPercentage" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```typescript
public readonly thresholdPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>

---


### IotOtaUpdateAwsJobAbortConfigOutputReference <a name="IotOtaUpdateAwsJobAbortConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.putAbortCriteriaList">putAbortCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resetAbortCriteriaList">resetAbortCriteriaList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbortCriteriaList` <a name="putAbortCriteriaList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.putAbortCriteriaList"></a>

```typescript
public putAbortCriteriaList(value: IResolvable | IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.putAbortCriteriaList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>[]

---

##### `resetAbortCriteriaList` <a name="resetAbortCriteriaList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resetAbortCriteriaList"></a>

```typescript
public resetAbortCriteriaList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaList">abortCriteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaListInput">abortCriteriaListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `abortCriteriaList`<sup>Required</sup> <a name="abortCriteriaList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaList"></a>

```typescript
public readonly abortCriteriaList: IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList</a>

---

##### `abortCriteriaListInput`<sup>Optional</sup> <a name="abortCriteriaListInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaListInput"></a>

```typescript
public readonly abortCriteriaListInput: IResolvable | IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateAwsJobAbortConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

---


### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria">putRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute">resetBaseRatePerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor">resetIncrementFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria">resetRateIncreaseCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRateIncreaseCriteria` <a name="putRateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria"></a>

```typescript
public putRateIncreaseCriteria(value: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `resetBaseRatePerMinute` <a name="resetBaseRatePerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute"></a>

```typescript
public resetBaseRatePerMinute(): void
```

##### `resetIncrementFactor` <a name="resetIncrementFactor" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor"></a>

```typescript
public resetIncrementFactor(): void
```

##### `resetRateIncreaseCriteria` <a name="resetRateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria"></a>

```typescript
public resetRateIncreaseCriteria(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">rateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput">baseRatePerMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput">incrementFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput">rateIncreaseCriteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">baseRatePerMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">incrementFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rateIncreaseCriteria`<sup>Required</sup> <a name="rateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```typescript
public readonly rateIncreaseCriteria: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `baseRatePerMinuteInput`<sup>Optional</sup> <a name="baseRatePerMinuteInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput"></a>

```typescript
public readonly baseRatePerMinuteInput: number;
```

- *Type:* number

---

##### `incrementFactorInput`<sup>Optional</sup> <a name="incrementFactorInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput"></a>

```typescript
public readonly incrementFactorInput: number;
```

- *Type:* number

---

##### `rateIncreaseCriteriaInput`<sup>Optional</sup> <a name="rateIncreaseCriteriaInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```typescript
public readonly rateIncreaseCriteriaInput: IResolvable | IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `baseRatePerMinute`<sup>Required</sup> <a name="baseRatePerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```typescript
public readonly baseRatePerMinute: number;
```

- *Type:* number

---

##### `incrementFactor`<sup>Required</sup> <a name="incrementFactor" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```typescript
public readonly incrementFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

---


### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">resetNumberOfNotifiedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">resetNumberOfSucceededThings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumberOfNotifiedThings` <a name="resetNumberOfNotifiedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```typescript
public resetNumberOfNotifiedThings(): void
```

##### `resetNumberOfSucceededThings` <a name="resetNumberOfSucceededThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```typescript
public resetNumberOfSucceededThings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">numberOfNotifiedThingsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">numberOfSucceededThingsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">numberOfNotifiedThings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">numberOfSucceededThings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberOfNotifiedThingsInput`<sup>Optional</sup> <a name="numberOfNotifiedThingsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```typescript
public readonly numberOfNotifiedThingsInput: number;
```

- *Type:* number

---

##### `numberOfSucceededThingsInput`<sup>Optional</sup> <a name="numberOfSucceededThingsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```typescript
public readonly numberOfSucceededThingsInput: number;
```

- *Type:* number

---

##### `numberOfNotifiedThings`<sup>Required</sup> <a name="numberOfNotifiedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```typescript
public readonly numberOfNotifiedThings: number;
```

- *Type:* number

---

##### `numberOfSucceededThings`<sup>Required</sup> <a name="numberOfSucceededThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```typescript
public readonly numberOfSucceededThings: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---


### IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate">putExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetExponentialRate">resetExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">resetMaximumPerMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExponentialRate` <a name="putExponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate"></a>

```typescript
public putExponentialRate(value: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

---

##### `resetExponentialRate` <a name="resetExponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetExponentialRate"></a>

```typescript
public resetExponentialRate(): void
```

##### `resetMaximumPerMinute` <a name="resetMaximumPerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```typescript
public resetMaximumPerMinute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRate">exponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput">exponentialRateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">maximumPerMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">maximumPerMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exponentialRate`<sup>Required</sup> <a name="exponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```typescript
public readonly exponentialRate: IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `exponentialRateInput`<sup>Optional</sup> <a name="exponentialRateInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput"></a>

```typescript
public readonly exponentialRateInput: IResolvable | IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

---

##### `maximumPerMinuteInput`<sup>Optional</sup> <a name="maximumPerMinuteInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```typescript
public readonly maximumPerMinuteInput: number;
```

- *Type:* number

---

##### `maximumPerMinute`<sup>Required</sup> <a name="maximumPerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```typescript
public readonly maximumPerMinute: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateAwsJobExecutionsRolloutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

---


### IotOtaUpdateAwsJobPresignedUrlConfigOutputReference <a name="IotOtaUpdateAwsJobPresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resetExpiresInSec">resetExpiresInSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpiresInSec` <a name="resetExpiresInSec" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resetExpiresInSec"></a>

```typescript
public resetExpiresInSec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSecInput">expiresInSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSec">expiresInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expiresInSecInput`<sup>Optional</sup> <a name="expiresInSecInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSecInput"></a>

```typescript
public readonly expiresInSecInput: number;
```

- *Type:* number

---

##### `expiresInSec`<sup>Required</sup> <a name="expiresInSec" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSec"></a>

```typescript
public readonly expiresInSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateAwsJobPresignedUrlConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

---


### IotOtaUpdateAwsJobTimeoutConfigOutputReference <a name="IotOtaUpdateAwsJobTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">resetInProgressTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInProgressTimeoutInMinutes` <a name="resetInProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```typescript
public resetInProgressTimeoutInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">inProgressTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">inProgressTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inProgressTimeoutInMinutesInput`<sup>Optional</sup> <a name="inProgressTimeoutInMinutesInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```typescript
public readonly inProgressTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `inProgressTimeoutInMinutes`<sup>Required</sup> <a name="inProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```typescript
public readonly inProgressTimeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateAwsJobTimeoutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

---


### IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetInlineDocument">resetInlineDocument</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateName` <a name="resetCertificateName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetCertificateName"></a>

```typescript
public resetCertificateName(): void
```

##### `resetInlineDocument` <a name="resetInlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetInlineDocument"></a>

```typescript
public resetInlineDocument(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateNameInput">certificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocumentInput">inlineDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocument">inlineDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateNameInput"></a>

```typescript
public readonly certificateNameInput: string;
```

- *Type:* string

---

##### `inlineDocumentInput`<sup>Optional</sup> <a name="inlineDocumentInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocumentInput"></a>

```typescript
public readonly inlineDocumentInput: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `inlineDocument`<sup>Required</sup> <a name="inlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocument"></a>

```typescript
public readonly inlineDocument: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

---


### IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putCertificateChain">putCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putSignature">putSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetCertificateChain">resetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetHashAlgorithm">resetHashAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignature">resetSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignatureAlgorithm">resetSignatureAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificateChain` <a name="putCertificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putCertificateChain"></a>

```typescript
public putCertificateChain(value: IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putCertificateChain.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

---

##### `putSignature` <a name="putSignature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putSignature"></a>

```typescript
public putSignature(value: IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putSignature.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

---

##### `resetCertificateChain` <a name="resetCertificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetCertificateChain"></a>

```typescript
public resetCertificateChain(): void
```

##### `resetHashAlgorithm` <a name="resetHashAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetHashAlgorithm"></a>

```typescript
public resetHashAlgorithm(): void
```

##### `resetSignature` <a name="resetSignature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignature"></a>

```typescript
public resetSignature(): void
```

##### `resetSignatureAlgorithm` <a name="resetSignatureAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignatureAlgorithm"></a>

```typescript
public resetSignatureAlgorithm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChain">certificateChain</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signature">signature</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChainInput">certificateChainInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithmInput">hashAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureInput">signatureInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithm">hashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChain"></a>

```typescript
public readonly certificateChain: IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference</a>

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signature"></a>

```typescript
public readonly signature: IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference</a>

---

##### `certificateChainInput`<sup>Optional</sup> <a name="certificateChainInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChainInput"></a>

```typescript
public readonly certificateChainInput: IResolvable | IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

---

##### `hashAlgorithmInput`<sup>Optional</sup> <a name="hashAlgorithmInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithmInput"></a>

```typescript
public readonly hashAlgorithmInput: string;
```

- *Type:* string

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithmInput"></a>

```typescript
public readonly signatureAlgorithmInput: string;
```

- *Type:* string

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureInput"></a>

```typescript
public readonly signatureInput: IResolvable | IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

---

##### `hashAlgorithm`<sup>Required</sup> <a name="hashAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithm"></a>

```typescript
public readonly hashAlgorithm: string;
```

- *Type:* string

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateFilesCodeSigningCustomCodeSigning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

---


### IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resetInlineDocument">resetInlineDocument</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInlineDocument` <a name="resetInlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resetInlineDocument"></a>

```typescript
public resetInlineDocument(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocumentInput">inlineDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocument">inlineDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inlineDocumentInput`<sup>Optional</sup> <a name="inlineDocumentInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocumentInput"></a>

```typescript
public readonly inlineDocumentInput: string;
```

- *Type:* string

---

##### `inlineDocument`<sup>Required</sup> <a name="inlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocument"></a>

```typescript
public readonly inlineDocument: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

---


### IotOtaUpdateFilesCodeSigningOutputReference <a name="IotOtaUpdateFilesCodeSigningOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning">putCustomCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter">putStartSigningJobParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetAwsSignerJobId">resetAwsSignerJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetCustomCodeSigning">resetCustomCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetStartSigningJobParameter">resetStartSigningJobParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomCodeSigning` <a name="putCustomCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning"></a>

```typescript
public putCustomCodeSigning(value: IotOtaUpdateFilesCodeSigningCustomCodeSigning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

---

##### `putStartSigningJobParameter` <a name="putStartSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter"></a>

```typescript
public putStartSigningJobParameter(value: IotOtaUpdateFilesCodeSigningStartSigningJobParameter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

---

##### `resetAwsSignerJobId` <a name="resetAwsSignerJobId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetAwsSignerJobId"></a>

```typescript
public resetAwsSignerJobId(): void
```

##### `resetCustomCodeSigning` <a name="resetCustomCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetCustomCodeSigning"></a>

```typescript
public resetCustomCodeSigning(): void
```

##### `resetStartSigningJobParameter` <a name="resetStartSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetStartSigningJobParameter"></a>

```typescript
public resetStartSigningJobParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigning">customCodeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameter">startSigningJobParameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobIdInput">awsSignerJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigningInput">customCodeSigningInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameterInput">startSigningJobParameterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobId">awsSignerJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customCodeSigning`<sup>Required</sup> <a name="customCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigning"></a>

```typescript
public readonly customCodeSigning: IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference</a>

---

##### `startSigningJobParameter`<sup>Required</sup> <a name="startSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameter"></a>

```typescript
public readonly startSigningJobParameter: IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference</a>

---

##### `awsSignerJobIdInput`<sup>Optional</sup> <a name="awsSignerJobIdInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobIdInput"></a>

```typescript
public readonly awsSignerJobIdInput: string;
```

- *Type:* string

---

##### `customCodeSigningInput`<sup>Optional</sup> <a name="customCodeSigningInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigningInput"></a>

```typescript
public readonly customCodeSigningInput: IResolvable | IotOtaUpdateFilesCodeSigningCustomCodeSigning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

---

##### `startSigningJobParameterInput`<sup>Optional</sup> <a name="startSigningJobParameterInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameterInput"></a>

```typescript
public readonly startSigningJobParameterInput: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

---

##### `awsSignerJobId`<sup>Required</sup> <a name="awsSignerJobId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobId"></a>

```typescript
public readonly awsSignerJobId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateFilesCodeSigning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a>

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.putS3Destination">putS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resetS3Destination">resetS3Destination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Destination` <a name="putS3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.putS3Destination"></a>

```typescript
public putS3Destination(value: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

---

##### `resetS3Destination` <a name="resetS3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resetS3Destination"></a>

```typescript
public resetS3Destination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3DestinationInput">s3DestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3Destination"></a>

```typescript
public readonly s3Destination: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference</a>

---

##### `s3DestinationInput`<sup>Optional</sup> <a name="s3DestinationInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3DestinationInput"></a>

```typescript
public readonly s3DestinationInput: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter">putSigningProfileParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileName">resetSigningProfileName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileParameter">resetSigningProfileParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putDestination"></a>

```typescript
public putDestination(value: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

---

##### `putSigningProfileParameter` <a name="putSigningProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter"></a>

```typescript
public putSigningProfileParameter(value: IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetSigningProfileName` <a name="resetSigningProfileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileName"></a>

```typescript
public resetSigningProfileName(): void
```

##### `resetSigningProfileParameter` <a name="resetSigningProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileParameter"></a>

```typescript
public resetSigningProfileParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameter">signingProfileParameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destinationInput">destinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileNameInput">signingProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameterInput">signingProfileParameterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileName">signingProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destination"></a>

```typescript
public readonly destination: IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference</a>

---

##### `signingProfileParameter`<sup>Required</sup> <a name="signingProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameter"></a>

```typescript
public readonly signingProfileParameter: IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

---

##### `signingProfileNameInput`<sup>Optional</sup> <a name="signingProfileNameInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileNameInput"></a>

```typescript
public readonly signingProfileNameInput: string;
```

- *Type:* string

---

##### `signingProfileParameterInput`<sup>Optional</sup> <a name="signingProfileParameterInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameterInput"></a>

```typescript
public readonly signingProfileParameterInput: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

---

##### `signingProfileName`<sup>Required</sup> <a name="signingProfileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileName"></a>

```typescript
public readonly signingProfileName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificatePathOnDevice">resetCertificatePathOnDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetPlatform">resetPlatform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetCertificatePathOnDevice` <a name="resetCertificatePathOnDevice" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificatePathOnDevice"></a>

```typescript
public resetCertificatePathOnDevice(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetPlatform"></a>

```typescript
public resetPlatform(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDeviceInput">certificatePathOnDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDevice">certificatePathOnDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `certificatePathOnDeviceInput`<sup>Optional</sup> <a name="certificatePathOnDeviceInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDeviceInput"></a>

```typescript
public readonly certificatePathOnDeviceInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `certificatePathOnDevice`<sup>Required</sup> <a name="certificatePathOnDevice" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDevice"></a>

```typescript
public readonly certificatePathOnDevice: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

---


### IotOtaUpdateFilesFileLocationOutputReference <a name="IotOtaUpdateFilesFileLocationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location">putS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putStream">putStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetS3Location">resetS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetStream">resetStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Location` <a name="putS3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location"></a>

```typescript
public putS3Location(value: IotOtaUpdateFilesFileLocationS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

---

##### `putStream` <a name="putStream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putStream"></a>

```typescript
public putStream(value: IotOtaUpdateFilesFileLocationStream): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putStream.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

---

##### `resetS3Location` <a name="resetS3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetS3Location"></a>

```typescript
public resetS3Location(): void
```

##### `resetStream` <a name="resetStream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetStream"></a>

```typescript
public resetStream(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference">IotOtaUpdateFilesFileLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.stream">stream</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference">IotOtaUpdateFilesFileLocationStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3LocationInput">s3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.streamInput">streamInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3Location"></a>

```typescript
public readonly s3Location: IotOtaUpdateFilesFileLocationS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference">IotOtaUpdateFilesFileLocationS3LocationOutputReference</a>

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.stream"></a>

```typescript
public readonly stream: IotOtaUpdateFilesFileLocationStreamOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference">IotOtaUpdateFilesFileLocationStreamOutputReference</a>

---

##### `s3LocationInput`<sup>Optional</sup> <a name="s3LocationInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3LocationInput"></a>

```typescript
public readonly s3LocationInput: IResolvable | IotOtaUpdateFilesFileLocationS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

---

##### `streamInput`<sup>Optional</sup> <a name="streamInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.streamInput"></a>

```typescript
public readonly streamInput: IResolvable | IotOtaUpdateFilesFileLocationStream;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateFilesFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a>

---


### IotOtaUpdateFilesFileLocationS3LocationOutputReference <a name="IotOtaUpdateFilesFileLocationS3LocationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateFilesFileLocationS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

---


### IotOtaUpdateFilesFileLocationStreamOutputReference <a name="IotOtaUpdateFilesFileLocationStreamOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetFileId">resetFileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetStreamId">resetStreamId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileId` <a name="resetFileId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetFileId"></a>

```typescript
public resetFileId(): void
```

##### `resetStreamId` <a name="resetStreamId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetStreamId"></a>

```typescript
public resetStreamId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileIdInput">fileIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamIdInput">streamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileId">fileId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileIdInput`<sup>Optional</sup> <a name="fileIdInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileIdInput"></a>

```typescript
public readonly fileIdInput: number;
```

- *Type:* number

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamIdInput"></a>

```typescript
public readonly streamIdInput: string;
```

- *Type:* string

---

##### `fileId`<sup>Required</sup> <a name="fileId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileId"></a>

```typescript
public readonly fileId: number;
```

- *Type:* number

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateFilesFileLocationStream;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

---


### IotOtaUpdateFilesList <a name="IotOtaUpdateFilesList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateFilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.get"></a>

```typescript
public get(index: number): IotOtaUpdateFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateFiles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>[]

---


### IotOtaUpdateFilesOutputReference <a name="IotOtaUpdateFilesOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning">putCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putFileLocation">putFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetCodeSigning">resetCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileLocation">resetFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileName">resetFileName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileType">resetFileType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileVersion">resetFileVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeSigning` <a name="putCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning"></a>

```typescript
public putCodeSigning(value: IotOtaUpdateFilesCodeSigning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a>

---

##### `putFileLocation` <a name="putFileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putFileLocation"></a>

```typescript
public putFileLocation(value: IotOtaUpdateFilesFileLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetCodeSigning` <a name="resetCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetCodeSigning"></a>

```typescript
public resetCodeSigning(): void
```

##### `resetFileLocation` <a name="resetFileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileLocation"></a>

```typescript
public resetFileLocation(): void
```

##### `resetFileName` <a name="resetFileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileName"></a>

```typescript
public resetFileName(): void
```

##### `resetFileType` <a name="resetFileType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileType"></a>

```typescript
public resetFileType(): void
```

##### `resetFileVersion` <a name="resetFileVersion" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileVersion"></a>

```typescript
public resetFileVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigning">codeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocation">fileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference">IotOtaUpdateFilesFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigningInput">codeSigningInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocationInput">fileLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersionInput">fileVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileType">fileType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersion">fileVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeSigning`<sup>Required</sup> <a name="codeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigning"></a>

```typescript
public readonly codeSigning: IotOtaUpdateFilesCodeSigningOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningOutputReference</a>

---

##### `fileLocation`<sup>Required</sup> <a name="fileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocation"></a>

```typescript
public readonly fileLocation: IotOtaUpdateFilesFileLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference">IotOtaUpdateFilesFileLocationOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `codeSigningInput`<sup>Optional</sup> <a name="codeSigningInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigningInput"></a>

```typescript
public readonly codeSigningInput: IResolvable | IotOtaUpdateFilesCodeSigning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a>

---

##### `fileLocationInput`<sup>Optional</sup> <a name="fileLocationInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocationInput"></a>

```typescript
public readonly fileLocationInput: IResolvable | IotOtaUpdateFilesFileLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a>

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileNameInput"></a>

```typescript
public readonly fileNameInput: string;
```

- *Type:* string

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileTypeInput"></a>

```typescript
public readonly fileTypeInput: number;
```

- *Type:* number

---

##### `fileVersionInput`<sup>Optional</sup> <a name="fileVersionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersionInput"></a>

```typescript
public readonly fileVersionInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileType"></a>

```typescript
public readonly fileType: number;
```

- *Type:* number

---

##### `fileVersion`<sup>Required</sup> <a name="fileVersion" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersion"></a>

```typescript
public readonly fileVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateFiles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>

---


### IotOtaUpdateTagsList <a name="IotOtaUpdateTagsList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.get"></a>

```typescript
public get(index: number): IotOtaUpdateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>[]

---


### IotOtaUpdateTagsOutputReference <a name="IotOtaUpdateTagsOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer"></a>

```typescript
import { iotOtaUpdate } from '@cdktn/provider-awscc'

new iotOtaUpdate.IotOtaUpdateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotOtaUpdateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>

---




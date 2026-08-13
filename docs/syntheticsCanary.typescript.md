# `syntheticsCanary` Submodule <a name="`syntheticsCanary` Submodule" id="@cdktn/provider-awscc.syntheticsCanary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsCanary <a name="SyntheticsCanary" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary awscc_synthetics_canary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanary(scope: Construct, id: string, config: SyntheticsCanaryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig">SyntheticsCanaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig">SyntheticsCanaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig">putArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs">putBrowserConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode">putCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig">putRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference">putVisualReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences">putVisualReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetArtifactConfig">resetArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetBrowserConfigs">resetBrowserConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDeleteLambdaResourcesOnCanaryDeletion">resetDeleteLambdaResourcesOnCanaryDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDryRunAndUpdate">resetDryRunAndUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod">resetFailureRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetProvisionedResourceCleanup">resetProvisionedResourceCleanup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetResourcesToReplicateTags">resetResourcesToReplicateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetRunConfig">resetRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetStartCanaryAfterCreation">resetStartCanaryAfterCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod">resetSuccessRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReference">resetVisualReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReferences">resetVisualReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArtifactConfig` <a name="putArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig"></a>

```typescript
public putArtifactConfig(value: SyntheticsCanaryArtifactConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putArtifactConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `putBrowserConfigs` <a name="putBrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs"></a>

```typescript
public putBrowserConfigs(value: IResolvable | SyntheticsCanaryBrowserConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putBrowserConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]

---

##### `putCode` <a name="putCode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode"></a>

```typescript
public putCode(value: SyntheticsCanaryCode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

---

##### `putRunConfig` <a name="putRunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig"></a>

```typescript
public putRunConfig(value: SyntheticsCanaryRunConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putRunConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule"></a>

```typescript
public putSchedule(value: SyntheticsCanarySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags"></a>

```typescript
public putTags(value: IResolvable | SyntheticsCanaryTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]

---

##### `putVisualReference` <a name="putVisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference"></a>

```typescript
public putVisualReference(value: SyntheticsCanaryVisualReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

---

##### `putVisualReferences` <a name="putVisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences"></a>

```typescript
public putVisualReferences(value: IResolvable | SyntheticsCanaryVisualReferences[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVisualReferences.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig"></a>

```typescript
public putVpcConfig(value: SyntheticsCanaryVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `resetArtifactConfig` <a name="resetArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetArtifactConfig"></a>

```typescript
public resetArtifactConfig(): void
```

##### `resetBrowserConfigs` <a name="resetBrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetBrowserConfigs"></a>

```typescript
public resetBrowserConfigs(): void
```

##### `resetDeleteLambdaResourcesOnCanaryDeletion` <a name="resetDeleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDeleteLambdaResourcesOnCanaryDeletion"></a>

```typescript
public resetDeleteLambdaResourcesOnCanaryDeletion(): void
```

##### `resetDryRunAndUpdate` <a name="resetDryRunAndUpdate" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetDryRunAndUpdate"></a>

```typescript
public resetDryRunAndUpdate(): void
```

##### `resetFailureRetentionPeriod` <a name="resetFailureRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod"></a>

```typescript
public resetFailureRetentionPeriod(): void
```

##### `resetProvisionedResourceCleanup` <a name="resetProvisionedResourceCleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetProvisionedResourceCleanup"></a>

```typescript
public resetProvisionedResourceCleanup(): void
```

##### `resetResourcesToReplicateTags` <a name="resetResourcesToReplicateTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetResourcesToReplicateTags"></a>

```typescript
public resetResourcesToReplicateTags(): void
```

##### `resetRunConfig` <a name="resetRunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetRunConfig"></a>

```typescript
public resetRunConfig(): void
```

##### `resetStartCanaryAfterCreation` <a name="resetStartCanaryAfterCreation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetStartCanaryAfterCreation"></a>

```typescript
public resetStartCanaryAfterCreation(): void
```

##### `resetSuccessRetentionPeriod` <a name="resetSuccessRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod"></a>

```typescript
public resetSuccessRetentionPeriod(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVisualReference` <a name="resetVisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReference"></a>

```typescript
public resetVisualReference(): void
```

##### `resetVisualReferences` <a name="resetVisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVisualReferences"></a>

```typescript
public resetVisualReferences(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SyntheticsCanary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

syntheticsCanary.SyntheticsCanary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

syntheticsCanary.SyntheticsCanary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

syntheticsCanary.SyntheticsCanary.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

syntheticsCanary.SyntheticsCanary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SyntheticsCanary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsCanary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsCanary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SyntheticsCanary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfig">artifactConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigs">browserConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList">SyntheticsCanaryBrowserConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.canaryId">canaryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference">SyntheticsCanaryCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfig">runConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList">SyntheticsCanaryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReference">visualReference</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference">SyntheticsCanaryVisualReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferences">visualReferences</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList">SyntheticsCanaryVisualReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput">artifactConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput">artifactS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigsInput">browserConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.codeInput">codeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletionInput">deleteLambdaResourcesOnCanaryDeletionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdateInput">dryRunAndUpdateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput">failureRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanupInput">provisionedResourceCleanupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTagsInput">resourcesToReplicateTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfigInput">runConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.scheduleInput">scheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreationInput">startCanaryAfterCreationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput">successRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferenceInput">visualReferenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferencesInput">visualReferencesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3Location">artifactS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion">deleteLambdaResourcesOnCanaryDeletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdate">dryRunAndUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod">failureRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanup">provisionedResourceCleanup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTags">resourcesToReplicateTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreation">startCanaryAfterCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod">successRetentionPeriod</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `artifactConfig`<sup>Required</sup> <a name="artifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfig"></a>

```typescript
public readonly artifactConfig: SyntheticsCanaryArtifactConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a>

---

##### `browserConfigs`<sup>Required</sup> <a name="browserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigs"></a>

```typescript
public readonly browserConfigs: SyntheticsCanaryBrowserConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList">SyntheticsCanaryBrowserConfigsList</a>

---

##### `canaryId`<sup>Required</sup> <a name="canaryId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.canaryId"></a>

```typescript
public readonly canaryId: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.code"></a>

```typescript
public readonly code: SyntheticsCanaryCodeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference">SyntheticsCanaryCodeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `runConfig`<sup>Required</sup> <a name="runConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfig"></a>

```typescript
public readonly runConfig: SyntheticsCanaryRunConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.schedule"></a>

```typescript
public readonly schedule: SyntheticsCanaryScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tags"></a>

```typescript
public readonly tags: SyntheticsCanaryTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList">SyntheticsCanaryTagsList</a>

---

##### `visualReference`<sup>Required</sup> <a name="visualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReference"></a>

```typescript
public readonly visualReference: SyntheticsCanaryVisualReferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference">SyntheticsCanaryVisualReferenceOutputReference</a>

---

##### `visualReferences`<sup>Required</sup> <a name="visualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferences"></a>

```typescript
public readonly visualReferences: SyntheticsCanaryVisualReferencesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList">SyntheticsCanaryVisualReferencesList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: SyntheticsCanaryVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a>

---

##### `artifactConfigInput`<sup>Optional</sup> <a name="artifactConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput"></a>

```typescript
public readonly artifactConfigInput: IResolvable | SyntheticsCanaryArtifactConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `artifactS3LocationInput`<sup>Optional</sup> <a name="artifactS3LocationInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput"></a>

```typescript
public readonly artifactS3LocationInput: string;
```

- *Type:* string

---

##### `browserConfigsInput`<sup>Optional</sup> <a name="browserConfigsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.browserConfigsInput"></a>

```typescript
public readonly browserConfigsInput: IResolvable | SyntheticsCanaryBrowserConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.codeInput"></a>

```typescript
public readonly codeInput: IResolvable | SyntheticsCanaryCode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

---

##### `deleteLambdaResourcesOnCanaryDeletionInput`<sup>Optional</sup> <a name="deleteLambdaResourcesOnCanaryDeletionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletionInput"></a>

```typescript
public readonly deleteLambdaResourcesOnCanaryDeletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dryRunAndUpdateInput`<sup>Optional</sup> <a name="dryRunAndUpdateInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdateInput"></a>

```typescript
public readonly dryRunAndUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `failureRetentionPeriodInput`<sup>Optional</sup> <a name="failureRetentionPeriodInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput"></a>

```typescript
public readonly failureRetentionPeriodInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `provisionedResourceCleanupInput`<sup>Optional</sup> <a name="provisionedResourceCleanupInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanupInput"></a>

```typescript
public readonly provisionedResourceCleanupInput: string;
```

- *Type:* string

---

##### `resourcesToReplicateTagsInput`<sup>Optional</sup> <a name="resourcesToReplicateTagsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTagsInput"></a>

```typescript
public readonly resourcesToReplicateTagsInput: string[];
```

- *Type:* string[]

---

##### `runConfigInput`<sup>Optional</sup> <a name="runConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runConfigInput"></a>

```typescript
public readonly runConfigInput: IResolvable | SyntheticsCanaryRunConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | SyntheticsCanarySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `startCanaryAfterCreationInput`<sup>Optional</sup> <a name="startCanaryAfterCreationInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreationInput"></a>

```typescript
public readonly startCanaryAfterCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `successRetentionPeriodInput`<sup>Optional</sup> <a name="successRetentionPeriodInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput"></a>

```typescript
public readonly successRetentionPeriodInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SyntheticsCanaryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]

---

##### `visualReferenceInput`<sup>Optional</sup> <a name="visualReferenceInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferenceInput"></a>

```typescript
public readonly visualReferenceInput: IResolvable | SyntheticsCanaryVisualReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

---

##### `visualReferencesInput`<sup>Optional</sup> <a name="visualReferencesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.visualReferencesInput"></a>

```typescript
public readonly visualReferencesInput: IResolvable | SyntheticsCanaryVisualReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | SyntheticsCanaryVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `artifactS3Location`<sup>Required</sup> <a name="artifactS3Location" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.artifactS3Location"></a>

```typescript
public readonly artifactS3Location: string;
```

- *Type:* string

---

##### `deleteLambdaResourcesOnCanaryDeletion`<sup>Required</sup> <a name="deleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```typescript
public readonly deleteLambdaResourcesOnCanaryDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dryRunAndUpdate`<sup>Required</sup> <a name="dryRunAndUpdate" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.dryRunAndUpdate"></a>

```typescript
public readonly dryRunAndUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `failureRetentionPeriod`<sup>Required</sup> <a name="failureRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod"></a>

```typescript
public readonly failureRetentionPeriod: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `provisionedResourceCleanup`<sup>Required</sup> <a name="provisionedResourceCleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.provisionedResourceCleanup"></a>

```typescript
public readonly provisionedResourceCleanup: string;
```

- *Type:* string

---

##### `resourcesToReplicateTags`<sup>Required</sup> <a name="resourcesToReplicateTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.resourcesToReplicateTags"></a>

```typescript
public readonly resourcesToReplicateTags: string[];
```

- *Type:* string[]

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `startCanaryAfterCreation`<sup>Required</sup> <a name="startCanaryAfterCreation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.startCanaryAfterCreation"></a>

```typescript
public readonly startCanaryAfterCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `successRetentionPeriod`<sup>Required</sup> <a name="successRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod"></a>

```typescript
public readonly successRetentionPeriod: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsCanaryArtifactConfig <a name="SyntheticsCanaryArtifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryArtifactConfig: syntheticsCanary.SyntheticsCanaryArtifactConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption">s3Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | Encryption configuration for uploading artifacts to S3. |

---

##### `s3Encryption`<sup>Optional</sup> <a name="s3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption"></a>

```typescript
public readonly s3Encryption: SyntheticsCanaryArtifactConfigS3Encryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

Encryption configuration for uploading artifacts to S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_encryption SyntheticsCanary#s3_encryption}

---

### SyntheticsCanaryArtifactConfigS3Encryption <a name="SyntheticsCanaryArtifactConfigS3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryArtifactConfigS3Encryption: syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | KMS key Arn for encrypting artifacts when uploading to S3. |

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

KMS key Arn for encrypting artifacts when uploading to S3.

You must specify KMS key Arn for SSE_KMS encryption mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}

---

### SyntheticsCanaryBrowserConfigs <a name="SyntheticsCanaryBrowserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryBrowserConfigs: syntheticsCanary.SyntheticsCanaryBrowserConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.property.browserType">browserType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `browserType`<sup>Optional</sup> <a name="browserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs.property.browserType"></a>

```typescript
public readonly browserType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryCode <a name="SyntheticsCanaryCode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryCode: syntheticsCanary.SyntheticsCanaryCode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.blueprintTypes">blueprintTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#blueprint_types SyntheticsCanary#blueprint_types}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.dependencies">dependencies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]</code> | List of Lambda layers to attach to the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.handler">handler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Key">s3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_object_version SyntheticsCanary#s3_object_version}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.script">script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#script SyntheticsCanary#script}. |

---

##### `blueprintTypes`<sup>Optional</sup> <a name="blueprintTypes" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.blueprintTypes"></a>

```typescript
public readonly blueprintTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#blueprint_types SyntheticsCanary#blueprint_types}.

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.dependencies"></a>

```typescript
public readonly dependencies: IResolvable | SyntheticsCanaryCodeDependencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]

List of Lambda layers to attach to the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#dependencies SyntheticsCanary#dependencies}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}.

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}.

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="s3ObjectVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#s3_object_version SyntheticsCanary#s3_object_version}.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#script SyntheticsCanary#script}.

---

### SyntheticsCanaryCodeDependencies <a name="SyntheticsCanaryCodeDependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryCodeDependencies: syntheticsCanary.SyntheticsCanaryCodeDependencies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.reference">reference</a></code> | <code>string</code> | ARN of the Lambda layer. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.type">type</a></code> | <code>string</code> | Type of dependency. |

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

ARN of the Lambda layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#reference SyntheticsCanary#reference}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#type SyntheticsCanary#type}

---

### SyntheticsCanaryConfig <a name="SyntheticsCanaryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryConfig: syntheticsCanary.SyntheticsCanaryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location">artifactS3Location</a></code> | <code>string</code> | Provide the s3 bucket output location for test results. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | Provide the canary script source. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Lambda Execution role used to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.name">name</a></code> | <code>string</code> | Name of the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | Runtime version of Synthetics Library. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | Frequency to run your canaries. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig">artifactConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | Provide artifact configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.browserConfigs">browserConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]</code> | List of browser configurations for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambdaResourcesOnCanaryDeletion">deleteLambdaResourcesOnCanaryDeletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | Deletes associated lambda resources created by Synthetics if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dryRunAndUpdate">dryRunAndUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod">failureRetentionPeriod</a></code> | <code>number</code> | Retention period of failed canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisionedResourceCleanup">provisionedResourceCleanup</a></code> | <code>string</code> | Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.resourcesToReplicateTags">resourcesToReplicateTags</a></code> | <code>string[]</code> | List of resources which canary tags should be replicated to. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig">runConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | Provide canary run configuration. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.startCanaryAfterCreation">startCanaryAfterCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Runs canary if set to True. Default is False. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod">successRetentionPeriod</a></code> | <code>number</code> | Retention period of successful canary runs represented in number of days. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReference">visualReference</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | Visual reference configuration for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReferences">visualReferences</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]</code> | List of visual references for the canary. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | Provide VPC Configuration if enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `artifactS3Location`<sup>Required</sup> <a name="artifactS3Location" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location"></a>

```typescript
public readonly artifactS3Location: string;
```

- *Type:* string

Provide the s3 bucket output location for test results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.code"></a>

```typescript
public readonly code: SyntheticsCanaryCode;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

Provide the canary script source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#code SyntheticsCanary#code}

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Lambda Execution role used to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#name SyntheticsCanary#name}

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

Runtime version of Synthetics Library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.schedule"></a>

```typescript
public readonly schedule: SyntheticsCanarySchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

Frequency to run your canaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#schedule SyntheticsCanary#schedule}

---

##### `artifactConfig`<sup>Optional</sup> <a name="artifactConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig"></a>

```typescript
public readonly artifactConfig: SyntheticsCanaryArtifactConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

Provide artifact configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}

---

##### `browserConfigs`<sup>Optional</sup> <a name="browserConfigs" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.browserConfigs"></a>

```typescript
public readonly browserConfigs: IResolvable | SyntheticsCanaryBrowserConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]

List of browser configurations for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_configs SyntheticsCanary#browser_configs}

---

##### `deleteLambdaResourcesOnCanaryDeletion`<sup>Optional</sup> <a name="deleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```typescript
public readonly deleteLambdaResourcesOnCanaryDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Deletes associated lambda resources created by Synthetics if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#delete_lambda_resources_on_canary_deletion SyntheticsCanary#delete_lambda_resources_on_canary_deletion}

---

##### `dryRunAndUpdate`<sup>Optional</sup> <a name="dryRunAndUpdate" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.dryRunAndUpdate"></a>

```typescript
public readonly dryRunAndUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update.

Default is FALSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#dry_run_and_update SyntheticsCanary#dry_run_and_update}

---

##### `failureRetentionPeriod`<sup>Optional</sup> <a name="failureRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod"></a>

```typescript
public readonly failureRetentionPeriod: number;
```

- *Type:* number

Retention period of failed canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}

---

##### `provisionedResourceCleanup`<sup>Optional</sup> <a name="provisionedResourceCleanup" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.provisionedResourceCleanup"></a>

```typescript
public readonly provisionedResourceCleanup: string;
```

- *Type:* string

Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#provisioned_resource_cleanup SyntheticsCanary#provisioned_resource_cleanup}

---

##### `resourcesToReplicateTags`<sup>Optional</sup> <a name="resourcesToReplicateTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.resourcesToReplicateTags"></a>

```typescript
public readonly resourcesToReplicateTags: string[];
```

- *Type:* string[]

List of resources which canary tags should be replicated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#resources_to_replicate_tags SyntheticsCanary#resources_to_replicate_tags}

---

##### `runConfig`<sup>Optional</sup> <a name="runConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig"></a>

```typescript
public readonly runConfig: SyntheticsCanaryRunConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

Provide canary run configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#run_config SyntheticsCanary#run_config}

---

##### `startCanaryAfterCreation`<sup>Optional</sup> <a name="startCanaryAfterCreation" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.startCanaryAfterCreation"></a>

```typescript
public readonly startCanaryAfterCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Runs canary if set to True. Default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#start_canary_after_creation SyntheticsCanary#start_canary_after_creation}

---

##### `successRetentionPeriod`<sup>Optional</sup> <a name="successRetentionPeriod" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod"></a>

```typescript
public readonly successRetentionPeriod: number;
```

- *Type:* number

Retention period of successful canary runs represented in number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SyntheticsCanaryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}.

---

##### `visualReference`<sup>Optional</sup> <a name="visualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReference"></a>

```typescript
public readonly visualReference: SyntheticsCanaryVisualReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

Visual reference configuration for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#visual_reference SyntheticsCanary#visual_reference}

---

##### `visualReferences`<sup>Optional</sup> <a name="visualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.visualReferences"></a>

```typescript
public readonly visualReferences: IResolvable | SyntheticsCanaryVisualReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]

List of visual references for the canary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#visual_references SyntheticsCanary#visual_references}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: SyntheticsCanaryVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

Provide VPC Configuration if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}

---

### SyntheticsCanaryRunConfig <a name="SyntheticsCanaryRunConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryRunConfig: syntheticsCanary.SyntheticsCanaryRunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing">activeTracing</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable active tracing if set to true. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Environment variable key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.ephemeralStorage">ephemeralStorage</a></code> | <code>number</code> | Provide ephemeralStorage available for canary in MB. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb">memoryInMb</a></code> | <code>number</code> | Provide maximum memory available for canary in MB. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Provide maximum canary timeout per run in seconds. |

---

##### `activeTracing`<sup>Optional</sup> <a name="activeTracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing"></a>

```typescript
public readonly activeTracing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable active tracing if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variable key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#environment_variables SyntheticsCanary#environment_variables}

---

##### `ephemeralStorage`<sup>Optional</sup> <a name="ephemeralStorage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: number;
```

- *Type:* number

Provide ephemeralStorage available for canary in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#ephemeral_storage SyntheticsCanary#ephemeral_storage}

---

##### `memoryInMb`<sup>Optional</sup> <a name="memoryInMb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb"></a>

```typescript
public readonly memoryInMb: number;
```

- *Type:* number

Provide maximum memory available for canary in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Provide maximum canary timeout per run in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}

---

### SyntheticsCanarySchedule <a name="SyntheticsCanarySchedule" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanarySchedule: syntheticsCanary.SyntheticsCanarySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds">durationInSeconds</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a></code> | Provide canary auto retry configuration. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}.

---

##### `durationInSeconds`<sup>Optional</sup> <a name="durationInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds"></a>

```typescript
public readonly durationInSeconds: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}.

---

##### `retryConfig`<sup>Optional</sup> <a name="retryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule.property.retryConfig"></a>

```typescript
public readonly retryConfig: SyntheticsCanaryScheduleRetryConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

Provide canary auto retry configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#retry_config SyntheticsCanary#retry_config}

---

### SyntheticsCanaryScheduleRetryConfig <a name="SyntheticsCanaryScheduleRetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryScheduleRetryConfig: syntheticsCanary.SyntheticsCanaryScheduleRetryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | maximum times the canary will be retried upon the scheduled run failure. |

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

maximum times the canary will be retried upon the scheduled run failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#max_retries SyntheticsCanary#max_retries}

---

### SyntheticsCanaryTags <a name="SyntheticsCanaryTags" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryTags: syntheticsCanary.SyntheticsCanaryTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#key SyntheticsCanary#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#value SyntheticsCanary#value}

---

### SyntheticsCanaryVisualReference <a name="SyntheticsCanaryVisualReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryVisualReference: syntheticsCanary.SyntheticsCanaryVisualReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseCanaryRunId">baseCanaryRunId</a></code> | <code>string</code> | Canary run id to be used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseScreenshots">baseScreenshots</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]</code> | List of screenshots used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.browserType">browserType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `baseCanaryRunId`<sup>Optional</sup> <a name="baseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseCanaryRunId"></a>

```typescript
public readonly baseCanaryRunId: string;
```

- *Type:* string

Canary run id to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#base_canary_run_id SyntheticsCanary#base_canary_run_id}

---

##### `baseScreenshots`<sup>Optional</sup> <a name="baseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.baseScreenshots"></a>

```typescript
public readonly baseScreenshots: IResolvable | SyntheticsCanaryVisualReferenceBaseScreenshots[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]

List of screenshots used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#base_screenshots SyntheticsCanary#base_screenshots}

---

##### `browserType`<sup>Optional</sup> <a name="browserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference.property.browserType"></a>

```typescript
public readonly browserType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryVisualReferenceBaseScreenshots <a name="SyntheticsCanaryVisualReferenceBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryVisualReferenceBaseScreenshots: syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.ignoreCoordinates">ignoreCoordinates</a></code> | <code>string[]</code> | List of coordinates of rectangles to be ignored during visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.screenshotName">screenshotName</a></code> | <code>string</code> | Name of the screenshot to be used as base reference for visual testing. |

---

##### `ignoreCoordinates`<sup>Optional</sup> <a name="ignoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.ignoreCoordinates"></a>

```typescript
public readonly ignoreCoordinates: string[];
```

- *Type:* string[]

List of coordinates of rectangles to be ignored during visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#ignore_coordinates SyntheticsCanary#ignore_coordinates}

---

##### `screenshotName`<sup>Optional</sup> <a name="screenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots.property.screenshotName"></a>

```typescript
public readonly screenshotName: string;
```

- *Type:* string

Name of the screenshot to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#screenshot_name SyntheticsCanary#screenshot_name}

---

### SyntheticsCanaryVisualReferences <a name="SyntheticsCanaryVisualReferences" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryVisualReferences: syntheticsCanary.SyntheticsCanaryVisualReferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseCanaryRunId">baseCanaryRunId</a></code> | <code>string</code> | Canary run id to be used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseScreenshots">baseScreenshots</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]</code> | List of screenshots used as base reference for visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.browserType">browserType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}. |

---

##### `baseCanaryRunId`<sup>Optional</sup> <a name="baseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseCanaryRunId"></a>

```typescript
public readonly baseCanaryRunId: string;
```

- *Type:* string

Canary run id to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#base_canary_run_id SyntheticsCanary#base_canary_run_id}

---

##### `baseScreenshots`<sup>Optional</sup> <a name="baseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.baseScreenshots"></a>

```typescript
public readonly baseScreenshots: IResolvable | SyntheticsCanaryVisualReferencesBaseScreenshots[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]

List of screenshots used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#base_screenshots SyntheticsCanary#base_screenshots}

---

##### `browserType`<sup>Optional</sup> <a name="browserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences.property.browserType"></a>

```typescript
public readonly browserType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#browser_type SyntheticsCanary#browser_type}.

---

### SyntheticsCanaryVisualReferencesBaseScreenshots <a name="SyntheticsCanaryVisualReferencesBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryVisualReferencesBaseScreenshots: syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.ignoreCoordinates">ignoreCoordinates</a></code> | <code>string[]</code> | List of coordinates of rectangles to be ignored during visual testing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.screenshotName">screenshotName</a></code> | <code>string</code> | Name of the screenshot to be used as base reference for visual testing. |

---

##### `ignoreCoordinates`<sup>Optional</sup> <a name="ignoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.ignoreCoordinates"></a>

```typescript
public readonly ignoreCoordinates: string[];
```

- *Type:* string[]

List of coordinates of rectangles to be ignored during visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#ignore_coordinates SyntheticsCanary#ignore_coordinates}

---

##### `screenshotName`<sup>Optional</sup> <a name="screenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots.property.screenshotName"></a>

```typescript
public readonly screenshotName: string;
```

- *Type:* string

Name of the screenshot to be used as base reference for visual testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#screenshot_name SyntheticsCanary#screenshot_name}

---

### SyntheticsCanaryVpcConfig <a name="SyntheticsCanaryVpcConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

const syntheticsCanaryVpcConfig: syntheticsCanary.SyntheticsCanaryVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>boolean \| cdktn.IResolvable</code> | Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#vpc_id SyntheticsCanary#vpc_id}. |

---

##### `ipv6AllowedForDualStack`<sup>Optional</sup> <a name="ipv6AllowedForDualStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.ipv6AllowedForDualStack"></a>

```typescript
public readonly ipv6AllowedForDualStack: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#ipv_6_allowed_for_dual_stack SyntheticsCanary#ipv_6_allowed_for_dual_stack}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/synthetics_canary#vpc_id SyntheticsCanary#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsCanaryArtifactConfigOutputReference <a name="SyntheticsCanaryArtifactConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption">putS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption">resetS3Encryption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Encryption` <a name="putS3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption"></a>

```typescript
public putS3Encryption(value: SyntheticsCanaryArtifactConfigS3Encryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `resetS3Encryption` <a name="resetS3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption"></a>

```typescript
public resetS3Encryption(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption">s3Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput">s3EncryptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Encryption`<sup>Required</sup> <a name="s3Encryption" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption"></a>

```typescript
public readonly s3Encryption: SyntheticsCanaryArtifactConfigS3EncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a>

---

##### `s3EncryptionInput`<sup>Optional</sup> <a name="s3EncryptionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput"></a>

```typescript
public readonly s3EncryptionInput: IResolvable | SyntheticsCanaryArtifactConfigS3Encryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryArtifactConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---


### SyntheticsCanaryArtifactConfigS3EncryptionOutputReference <a name="SyntheticsCanaryArtifactConfigS3EncryptionOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode"></a>

```typescript
public resetEncryptionMode(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput">encryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput"></a>

```typescript
public readonly encryptionModeInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryArtifactConfigS3Encryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---


### SyntheticsCanaryBrowserConfigsList <a name="SyntheticsCanaryBrowserConfigsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryBrowserConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get"></a>

```typescript
public get(index: number): SyntheticsCanaryBrowserConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryBrowserConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>[]

---


### SyntheticsCanaryBrowserConfigsOutputReference <a name="SyntheticsCanaryBrowserConfigsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resetBrowserType">resetBrowserType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBrowserType` <a name="resetBrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.resetBrowserType"></a>

```typescript
public resetBrowserType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserTypeInput">browserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserType">browserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `browserTypeInput`<sup>Optional</sup> <a name="browserTypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserTypeInput"></a>

```typescript
public readonly browserTypeInput: string;
```

- *Type:* string

---

##### `browserType`<sup>Required</sup> <a name="browserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.browserType"></a>

```typescript
public readonly browserType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryBrowserConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryBrowserConfigs">SyntheticsCanaryBrowserConfigs</a>

---


### SyntheticsCanaryCodeDependenciesList <a name="SyntheticsCanaryCodeDependenciesList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryCodeDependenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get"></a>

```typescript
public get(index: number): SyntheticsCanaryCodeDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryCodeDependencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]

---


### SyntheticsCanaryCodeDependenciesOutputReference <a name="SyntheticsCanaryCodeDependenciesOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetReference">resetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReference` <a name="resetReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetReference"></a>

```typescript
public resetReference(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.referenceInput">referenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.reference">reference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `referenceInput`<sup>Optional</sup> <a name="referenceInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.referenceInput"></a>

```typescript
public readonly referenceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryCodeDependencies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>

---


### SyntheticsCanaryCodeOutputReference <a name="SyntheticsCanaryCodeOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryCodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies">putDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetBlueprintTypes">resetBlueprintTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetDependencies">resetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetHandler">resetHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3ObjectVersion">resetS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetScript">resetScript</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDependencies` <a name="putDependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies"></a>

```typescript
public putDependencies(value: IResolvable | SyntheticsCanaryCodeDependencies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.putDependencies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]

---

##### `resetBlueprintTypes` <a name="resetBlueprintTypes" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetBlueprintTypes"></a>

```typescript
public resetBlueprintTypes(): void
```

##### `resetDependencies` <a name="resetDependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetDependencies"></a>

```typescript
public resetDependencies(): void
```

##### `resetHandler` <a name="resetHandler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetHandler"></a>

```typescript
public resetHandler(): void
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3Key"></a>

```typescript
public resetS3Key(): void
```

##### `resetS3ObjectVersion` <a name="resetS3ObjectVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetS3ObjectVersion"></a>

```typescript
public resetS3ObjectVersion(): void
```

##### `resetScript` <a name="resetScript" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.resetScript"></a>

```typescript
public resetScript(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList">SyntheticsCanaryCodeDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.sourceLocationArn">sourceLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypesInput">blueprintTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependenciesInput">dependenciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handlerInput">handlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersionInput">s3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.scriptInput">scriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypes">blueprintTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependencies"></a>

```typescript
public readonly dependencies: SyntheticsCanaryCodeDependenciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependenciesList">SyntheticsCanaryCodeDependenciesList</a>

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.sourceLocationArn"></a>

```typescript
public readonly sourceLocationArn: string;
```

- *Type:* string

---

##### `blueprintTypesInput`<sup>Optional</sup> <a name="blueprintTypesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypesInput"></a>

```typescript
public readonly blueprintTypesInput: string[];
```

- *Type:* string[]

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.dependenciesInput"></a>

```typescript
public readonly dependenciesInput: IResolvable | SyntheticsCanaryCodeDependencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeDependencies">SyntheticsCanaryCodeDependencies</a>[]

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handlerInput"></a>

```typescript
public readonly handlerInput: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3ObjectVersionInput`<sup>Optional</sup> <a name="s3ObjectVersionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersionInput"></a>

```typescript
public readonly s3ObjectVersionInput: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.scriptInput"></a>

```typescript
public readonly scriptInput: string;
```

- *Type:* string

---

##### `blueprintTypes`<sup>Required</sup> <a name="blueprintTypes" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.blueprintTypes"></a>

```typescript
public readonly blueprintTypes: string[];
```

- *Type:* string[]

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `s3ObjectVersion`<sup>Required</sup> <a name="s3ObjectVersion" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryCode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryCode">SyntheticsCanaryCode</a>

---


### SyntheticsCanaryRunConfigOutputReference <a name="SyntheticsCanaryRunConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryRunConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing">resetActiveTracing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEphemeralStorage">resetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb">resetMemoryInMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveTracing` <a name="resetActiveTracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing"></a>

```typescript
public resetActiveTracing(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetEphemeralStorage` <a name="resetEphemeralStorage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetEphemeralStorage"></a>

```typescript
public resetEphemeralStorage(): void
```

##### `resetMemoryInMb` <a name="resetMemoryInMb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb"></a>

```typescript
public resetMemoryInMb(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput">activeTracingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorageInput">ephemeralStorageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput">memoryInMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing">activeTracing</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage">ephemeralStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb">memoryInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeTracingInput`<sup>Optional</sup> <a name="activeTracingInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput"></a>

```typescript
public readonly activeTracingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ephemeralStorageInput`<sup>Optional</sup> <a name="ephemeralStorageInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorageInput"></a>

```typescript
public readonly ephemeralStorageInput: number;
```

- *Type:* number

---

##### `memoryInMbInput`<sup>Optional</sup> <a name="memoryInMbInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput"></a>

```typescript
public readonly memoryInMbInput: number;
```

- *Type:* number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `activeTracing`<sup>Required</sup> <a name="activeTracing" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing"></a>

```typescript
public readonly activeTracing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: number;
```

- *Type:* number

---

##### `memoryInMb`<sup>Required</sup> <a name="memoryInMb" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb"></a>

```typescript
public readonly memoryInMb: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryRunConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---


### SyntheticsCanaryScheduleOutputReference <a name="SyntheticsCanaryScheduleOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig">putRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds">resetDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetRetryConfig">resetRetryConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetryConfig` <a name="putRetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig"></a>

```typescript
public putRetryConfig(value: SyntheticsCanaryScheduleRetryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

---

##### `resetDurationInSeconds` <a name="resetDurationInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds"></a>

```typescript
public resetDurationInSeconds(): void
```

##### `resetRetryConfig` <a name="resetRetryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetRetryConfig"></a>

```typescript
public resetRetryConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference">SyntheticsCanaryScheduleRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput">durationInSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfigInput">retryConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds">durationInSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retryConfig`<sup>Required</sup> <a name="retryConfig" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfig"></a>

```typescript
public readonly retryConfig: SyntheticsCanaryScheduleRetryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference">SyntheticsCanaryScheduleRetryConfigOutputReference</a>

---

##### `durationInSecondsInput`<sup>Optional</sup> <a name="durationInSecondsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput"></a>

```typescript
public readonly durationInSecondsInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `retryConfigInput`<sup>Optional</sup> <a name="retryConfigInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.retryConfigInput"></a>

```typescript
public readonly retryConfigInput: IResolvable | SyntheticsCanaryScheduleRetryConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

---

##### `durationInSeconds`<sup>Required</sup> <a name="durationInSeconds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds"></a>

```typescript
public readonly durationInSeconds: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanarySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---


### SyntheticsCanaryScheduleRetryConfigOutputReference <a name="SyntheticsCanaryScheduleRetryConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryScheduleRetryConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryScheduleRetryConfig">SyntheticsCanaryScheduleRetryConfig</a>

---


### SyntheticsCanaryTagsList <a name="SyntheticsCanaryTagsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get"></a>

```typescript
public get(index: number): SyntheticsCanaryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>[]

---


### SyntheticsCanaryTagsOutputReference <a name="SyntheticsCanaryTagsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryTags">SyntheticsCanaryTags</a>

---


### SyntheticsCanaryVisualReferenceBaseScreenshotsList <a name="SyntheticsCanaryVisualReferenceBaseScreenshotsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get"></a>

```typescript
public get(index: number): SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryVisualReferenceBaseScreenshots[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]

---


### SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference <a name="SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetIgnoreCoordinates">resetIgnoreCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetScreenshotName">resetScreenshotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCoordinates` <a name="resetIgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetIgnoreCoordinates"></a>

```typescript
public resetIgnoreCoordinates(): void
```

##### `resetScreenshotName` <a name="resetScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resetScreenshotName"></a>

```typescript
public resetScreenshotName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinatesInput">ignoreCoordinatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotNameInput">screenshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates">ignoreCoordinates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName">screenshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreCoordinatesInput`<sup>Optional</sup> <a name="ignoreCoordinatesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinatesInput"></a>

```typescript
public readonly ignoreCoordinatesInput: string[];
```

- *Type:* string[]

---

##### `screenshotNameInput`<sup>Optional</sup> <a name="screenshotNameInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotNameInput"></a>

```typescript
public readonly screenshotNameInput: string;
```

- *Type:* string

---

##### `ignoreCoordinates`<sup>Required</sup> <a name="ignoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```typescript
public readonly ignoreCoordinates: string[];
```

- *Type:* string[]

---

##### `screenshotName`<sup>Required</sup> <a name="screenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName"></a>

```typescript
public readonly screenshotName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryVisualReferenceBaseScreenshots;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>

---


### SyntheticsCanaryVisualReferenceOutputReference <a name="SyntheticsCanaryVisualReferenceOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots">putBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseCanaryRunId">resetBaseCanaryRunId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseScreenshots">resetBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBrowserType">resetBrowserType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseScreenshots` <a name="putBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots"></a>

```typescript
public putBaseScreenshots(value: IResolvable | SyntheticsCanaryVisualReferenceBaseScreenshots[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.putBaseScreenshots.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]

---

##### `resetBaseCanaryRunId` <a name="resetBaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseCanaryRunId"></a>

```typescript
public resetBaseCanaryRunId(): void
```

##### `resetBaseScreenshots` <a name="resetBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBaseScreenshots"></a>

```typescript
public resetBaseScreenshots(): void
```

##### `resetBrowserType` <a name="resetBrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.resetBrowserType"></a>

```typescript
public resetBrowserType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots">baseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList">SyntheticsCanaryVisualReferenceBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunIdInput">baseCanaryRunIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshotsInput">baseScreenshotsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserTypeInput">browserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId">baseCanaryRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserType">browserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseScreenshots`<sup>Required</sup> <a name="baseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots"></a>

```typescript
public readonly baseScreenshots: SyntheticsCanaryVisualReferenceBaseScreenshotsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshotsList">SyntheticsCanaryVisualReferenceBaseScreenshotsList</a>

---

##### `baseCanaryRunIdInput`<sup>Optional</sup> <a name="baseCanaryRunIdInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunIdInput"></a>

```typescript
public readonly baseCanaryRunIdInput: string;
```

- *Type:* string

---

##### `baseScreenshotsInput`<sup>Optional</sup> <a name="baseScreenshotsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshotsInput"></a>

```typescript
public readonly baseScreenshotsInput: IResolvable | SyntheticsCanaryVisualReferenceBaseScreenshots[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceBaseScreenshots">SyntheticsCanaryVisualReferenceBaseScreenshots</a>[]

---

##### `browserTypeInput`<sup>Optional</sup> <a name="browserTypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserTypeInput"></a>

```typescript
public readonly browserTypeInput: string;
```

- *Type:* string

---

##### `baseCanaryRunId`<sup>Required</sup> <a name="baseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId"></a>

```typescript
public readonly baseCanaryRunId: string;
```

- *Type:* string

---

##### `browserType`<sup>Required</sup> <a name="browserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.browserType"></a>

```typescript
public readonly browserType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryVisualReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReference">SyntheticsCanaryVisualReference</a>

---


### SyntheticsCanaryVisualReferencesBaseScreenshotsList <a name="SyntheticsCanaryVisualReferencesBaseScreenshotsList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get"></a>

```typescript
public get(index: number): SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryVisualReferencesBaseScreenshots[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]

---


### SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference <a name="SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetIgnoreCoordinates">resetIgnoreCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetScreenshotName">resetScreenshotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreCoordinates` <a name="resetIgnoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetIgnoreCoordinates"></a>

```typescript
public resetIgnoreCoordinates(): void
```

##### `resetScreenshotName` <a name="resetScreenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resetScreenshotName"></a>

```typescript
public resetScreenshotName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinatesInput">ignoreCoordinatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotNameInput">screenshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates">ignoreCoordinates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName">screenshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreCoordinatesInput`<sup>Optional</sup> <a name="ignoreCoordinatesInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinatesInput"></a>

```typescript
public readonly ignoreCoordinatesInput: string[];
```

- *Type:* string[]

---

##### `screenshotNameInput`<sup>Optional</sup> <a name="screenshotNameInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotNameInput"></a>

```typescript
public readonly screenshotNameInput: string;
```

- *Type:* string

---

##### `ignoreCoordinates`<sup>Required</sup> <a name="ignoreCoordinates" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```typescript
public readonly ignoreCoordinates: string[];
```

- *Type:* string[]

---

##### `screenshotName`<sup>Required</sup> <a name="screenshotName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName"></a>

```typescript
public readonly screenshotName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryVisualReferencesBaseScreenshots;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>

---


### SyntheticsCanaryVisualReferencesList <a name="SyntheticsCanaryVisualReferencesList" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryVisualReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get"></a>

```typescript
public get(index: number): SyntheticsCanaryVisualReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryVisualReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>[]

---


### SyntheticsCanaryVisualReferencesOutputReference <a name="SyntheticsCanaryVisualReferencesOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots">putBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseCanaryRunId">resetBaseCanaryRunId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseScreenshots">resetBaseScreenshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBrowserType">resetBrowserType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseScreenshots` <a name="putBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots"></a>

```typescript
public putBaseScreenshots(value: IResolvable | SyntheticsCanaryVisualReferencesBaseScreenshots[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.putBaseScreenshots.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]

---

##### `resetBaseCanaryRunId` <a name="resetBaseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseCanaryRunId"></a>

```typescript
public resetBaseCanaryRunId(): void
```

##### `resetBaseScreenshots` <a name="resetBaseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBaseScreenshots"></a>

```typescript
public resetBaseScreenshots(): void
```

##### `resetBrowserType` <a name="resetBrowserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.resetBrowserType"></a>

```typescript
public resetBrowserType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots">baseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList">SyntheticsCanaryVisualReferencesBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunIdInput">baseCanaryRunIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshotsInput">baseScreenshotsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserTypeInput">browserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId">baseCanaryRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserType">browserType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseScreenshots`<sup>Required</sup> <a name="baseScreenshots" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots"></a>

```typescript
public readonly baseScreenshots: SyntheticsCanaryVisualReferencesBaseScreenshotsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshotsList">SyntheticsCanaryVisualReferencesBaseScreenshotsList</a>

---

##### `baseCanaryRunIdInput`<sup>Optional</sup> <a name="baseCanaryRunIdInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunIdInput"></a>

```typescript
public readonly baseCanaryRunIdInput: string;
```

- *Type:* string

---

##### `baseScreenshotsInput`<sup>Optional</sup> <a name="baseScreenshotsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshotsInput"></a>

```typescript
public readonly baseScreenshotsInput: IResolvable | SyntheticsCanaryVisualReferencesBaseScreenshots[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesBaseScreenshots">SyntheticsCanaryVisualReferencesBaseScreenshots</a>[]

---

##### `browserTypeInput`<sup>Optional</sup> <a name="browserTypeInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserTypeInput"></a>

```typescript
public readonly browserTypeInput: string;
```

- *Type:* string

---

##### `baseCanaryRunId`<sup>Required</sup> <a name="baseCanaryRunId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId"></a>

```typescript
public readonly baseCanaryRunId: string;
```

- *Type:* string

---

##### `browserType`<sup>Required</sup> <a name="browserType" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.browserType"></a>

```typescript
public readonly browserType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryVisualReferences;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVisualReferences">SyntheticsCanaryVisualReferences</a>

---


### SyntheticsCanaryVpcConfigOutputReference <a name="SyntheticsCanaryVpcConfigOutputReference" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktn/provider-awscc'

new syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetIpv6AllowedForDualStack">resetIpv6AllowedForDualStack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6AllowedForDualStack` <a name="resetIpv6AllowedForDualStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetIpv6AllowedForDualStack"></a>

```typescript
public resetIpv6AllowedForDualStack(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetVpcId"></a>

```typescript
public resetVpcId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStackInput">ipv6AllowedForDualStackInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6AllowedForDualStackInput`<sup>Optional</sup> <a name="ipv6AllowedForDualStackInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStackInput"></a>

```typescript
public readonly ipv6AllowedForDualStackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `ipv6AllowedForDualStack`<sup>Required</sup> <a name="ipv6AllowedForDualStack" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack"></a>

```typescript
public readonly ipv6AllowedForDualStack: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SyntheticsCanaryVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---




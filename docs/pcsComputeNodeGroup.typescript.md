# `pcsComputeNodeGroup` Submodule <a name="`pcsComputeNodeGroup` Submodule" id="@cdktn/provider-awscc.pcsComputeNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcsComputeNodeGroup <a name="PcsComputeNodeGroup" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group awscc_pcs_compute_node_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroup(scope: Construct, id: string, config: PcsComputeNodeGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig">PcsComputeNodeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig">PcsComputeNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putCustomLaunchTemplate">putCustomLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putInstanceConfigs">putInstanceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putNodeLifecycleActions">putNodeLifecycleActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putScalingConfiguration">putScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putSlurmConfiguration">putSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putSpotOptions">putSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetAmiId">resetAmiId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetNodeLifecycleActions">resetNodeLifecycleActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetPurchaseOption">resetPurchaseOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetSlurmConfiguration">resetSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetSpotOptions">resetSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomLaunchTemplate` <a name="putCustomLaunchTemplate" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putCustomLaunchTemplate"></a>

```typescript
public putCustomLaunchTemplate(value: PcsComputeNodeGroupCustomLaunchTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putCustomLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate">PcsComputeNodeGroupCustomLaunchTemplate</a>

---

##### `putInstanceConfigs` <a name="putInstanceConfigs" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putInstanceConfigs"></a>

```typescript
public putInstanceConfigs(value: IResolvable | PcsComputeNodeGroupInstanceConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putInstanceConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs">PcsComputeNodeGroupInstanceConfigs</a>[]

---

##### `putNodeLifecycleActions` <a name="putNodeLifecycleActions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putNodeLifecycleActions"></a>

```typescript
public putNodeLifecycleActions(value: PcsComputeNodeGroupNodeLifecycleActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putNodeLifecycleActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions">PcsComputeNodeGroupNodeLifecycleActions</a>

---

##### `putScalingConfiguration` <a name="putScalingConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putScalingConfiguration"></a>

```typescript
public putScalingConfiguration(value: PcsComputeNodeGroupScalingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration">PcsComputeNodeGroupScalingConfiguration</a>

---

##### `putSlurmConfiguration` <a name="putSlurmConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putSlurmConfiguration"></a>

```typescript
public putSlurmConfiguration(value: PcsComputeNodeGroupSlurmConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putSlurmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration">PcsComputeNodeGroupSlurmConfiguration</a>

---

##### `putSpotOptions` <a name="putSpotOptions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putSpotOptions"></a>

```typescript
public putSpotOptions(value: PcsComputeNodeGroupSpotOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.putSpotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions">PcsComputeNodeGroupSpotOptions</a>

---

##### `resetAmiId` <a name="resetAmiId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetAmiId"></a>

```typescript
public resetAmiId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNodeLifecycleActions` <a name="resetNodeLifecycleActions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetNodeLifecycleActions"></a>

```typescript
public resetNodeLifecycleActions(): void
```

##### `resetPurchaseOption` <a name="resetPurchaseOption" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetPurchaseOption"></a>

```typescript
public resetPurchaseOption(): void
```

##### `resetSlurmConfiguration` <a name="resetSlurmConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetSlurmConfiguration"></a>

```typescript
public resetSlurmConfiguration(): void
```

##### `resetSpotOptions` <a name="resetSpotOptions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetSpotOptions"></a>

```typescript
public resetSpotOptions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PcsComputeNodeGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isConstruct"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

pcsComputeNodeGroup.PcsComputeNodeGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformElement"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformResource"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.generateConfigForImport"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

pcsComputeNodeGroup.PcsComputeNodeGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PcsComputeNodeGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PcsComputeNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PcsComputeNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PcsComputeNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.computeNodeGroupId">computeNodeGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.customLaunchTemplate">customLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference">PcsComputeNodeGroupCustomLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.errorInfo">errorInfo</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList">PcsComputeNodeGroupErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.instanceConfigs">instanceConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList">PcsComputeNodeGroupInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.nodeLifecycleActions">nodeLifecycleActions</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference">PcsComputeNodeGroupNodeLifecycleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference">PcsComputeNodeGroupScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.slurmConfiguration">slurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference">PcsComputeNodeGroupSlurmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.spotOptions">spotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference">PcsComputeNodeGroupSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.amiIdInput">amiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.customLaunchTemplateInput">customLaunchTemplateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate">PcsComputeNodeGroupCustomLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.iamInstanceProfileArnInput">iamInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.instanceConfigsInput">instanceConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs">PcsComputeNodeGroupInstanceConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.nodeLifecycleActionsInput">nodeLifecycleActionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions">PcsComputeNodeGroupNodeLifecycleActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.purchaseOptionInput">purchaseOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.scalingConfigurationInput">scalingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration">PcsComputeNodeGroupScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.slurmConfigurationInput">slurmConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration">PcsComputeNodeGroupSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.spotOptionsInput">spotOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions">PcsComputeNodeGroupSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.amiId">amiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.purchaseOption">purchaseOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `computeNodeGroupId`<sup>Required</sup> <a name="computeNodeGroupId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.computeNodeGroupId"></a>

```typescript
public readonly computeNodeGroupId: string;
```

- *Type:* string

---

##### `customLaunchTemplate`<sup>Required</sup> <a name="customLaunchTemplate" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.customLaunchTemplate"></a>

```typescript
public readonly customLaunchTemplate: PcsComputeNodeGroupCustomLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference">PcsComputeNodeGroupCustomLaunchTemplateOutputReference</a>

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.errorInfo"></a>

```typescript
public readonly errorInfo: PcsComputeNodeGroupErrorInfoList;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList">PcsComputeNodeGroupErrorInfoList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceConfigs`<sup>Required</sup> <a name="instanceConfigs" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.instanceConfigs"></a>

```typescript
public readonly instanceConfigs: PcsComputeNodeGroupInstanceConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList">PcsComputeNodeGroupInstanceConfigsList</a>

---

##### `nodeLifecycleActions`<sup>Required</sup> <a name="nodeLifecycleActions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.nodeLifecycleActions"></a>

```typescript
public readonly nodeLifecycleActions: PcsComputeNodeGroupNodeLifecycleActionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference">PcsComputeNodeGroupNodeLifecycleActionsOutputReference</a>

---

##### `scalingConfiguration`<sup>Required</sup> <a name="scalingConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.scalingConfiguration"></a>

```typescript
public readonly scalingConfiguration: PcsComputeNodeGroupScalingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference">PcsComputeNodeGroupScalingConfigurationOutputReference</a>

---

##### `slurmConfiguration`<sup>Required</sup> <a name="slurmConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.slurmConfiguration"></a>

```typescript
public readonly slurmConfiguration: PcsComputeNodeGroupSlurmConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference">PcsComputeNodeGroupSlurmConfigurationOutputReference</a>

---

##### `spotOptions`<sup>Required</sup> <a name="spotOptions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.spotOptions"></a>

```typescript
public readonly spotOptions: PcsComputeNodeGroupSpotOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference">PcsComputeNodeGroupSpotOptionsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `amiIdInput`<sup>Optional</sup> <a name="amiIdInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.amiIdInput"></a>

```typescript
public readonly amiIdInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `customLaunchTemplateInput`<sup>Optional</sup> <a name="customLaunchTemplateInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.customLaunchTemplateInput"></a>

```typescript
public readonly customLaunchTemplateInput: IResolvable | PcsComputeNodeGroupCustomLaunchTemplate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate">PcsComputeNodeGroupCustomLaunchTemplate</a>

---

##### `iamInstanceProfileArnInput`<sup>Optional</sup> <a name="iamInstanceProfileArnInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.iamInstanceProfileArnInput"></a>

```typescript
public readonly iamInstanceProfileArnInput: string;
```

- *Type:* string

---

##### `instanceConfigsInput`<sup>Optional</sup> <a name="instanceConfigsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.instanceConfigsInput"></a>

```typescript
public readonly instanceConfigsInput: IResolvable | PcsComputeNodeGroupInstanceConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs">PcsComputeNodeGroupInstanceConfigs</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeLifecycleActionsInput`<sup>Optional</sup> <a name="nodeLifecycleActionsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.nodeLifecycleActionsInput"></a>

```typescript
public readonly nodeLifecycleActionsInput: IResolvable | PcsComputeNodeGroupNodeLifecycleActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions">PcsComputeNodeGroupNodeLifecycleActions</a>

---

##### `purchaseOptionInput`<sup>Optional</sup> <a name="purchaseOptionInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.purchaseOptionInput"></a>

```typescript
public readonly purchaseOptionInput: string;
```

- *Type:* string

---

##### `scalingConfigurationInput`<sup>Optional</sup> <a name="scalingConfigurationInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.scalingConfigurationInput"></a>

```typescript
public readonly scalingConfigurationInput: IResolvable | PcsComputeNodeGroupScalingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration">PcsComputeNodeGroupScalingConfiguration</a>

---

##### `slurmConfigurationInput`<sup>Optional</sup> <a name="slurmConfigurationInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.slurmConfigurationInput"></a>

```typescript
public readonly slurmConfigurationInput: IResolvable | PcsComputeNodeGroupSlurmConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration">PcsComputeNodeGroupSlurmConfiguration</a>

---

##### `spotOptionsInput`<sup>Optional</sup> <a name="spotOptionsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.spotOptionsInput"></a>

```typescript
public readonly spotOptionsInput: IResolvable | PcsComputeNodeGroupSpotOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions">PcsComputeNodeGroupSpotOptions</a>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `amiId`<sup>Required</sup> <a name="amiId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.amiId"></a>

```typescript
public readonly amiId: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `iamInstanceProfileArn`<sup>Required</sup> <a name="iamInstanceProfileArn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.iamInstanceProfileArn"></a>

```typescript
public readonly iamInstanceProfileArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `purchaseOption`<sup>Required</sup> <a name="purchaseOption" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.purchaseOption"></a>

```typescript
public readonly purchaseOption: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PcsComputeNodeGroupConfig <a name="PcsComputeNodeGroupConfig" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupConfig: pcsComputeNodeGroup.PcsComputeNodeGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.clusterId">clusterId</a></code> | <code>string</code> | The ID of the cluster of the compute node group. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.customLaunchTemplate">customLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate">PcsComputeNodeGroupCustomLaunchTemplate</a></code> | An Amazon EC2 launch template AWS PCS uses to launch compute nodes. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.instanceConfigs">instanceConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs">PcsComputeNodeGroupInstanceConfigs</a>[]</code> | A list of EC2 instance configurations that AWS PCS can provision in the compute node group. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration">PcsComputeNodeGroupScalingConfiguration</a></code> | Specifies the boundaries of the compute node group auto scaling. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The list of subnet IDs where instances are provisioned by the compute node group. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.amiId">amiId</a></code> | <code>string</code> | The ID of the Amazon Machine Image (AMI) that AWS PCS uses to launch instances. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.name">name</a></code> | <code>string</code> | The name that identifies the compute node group. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.nodeLifecycleActions">nodeLifecycleActions</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions">PcsComputeNodeGroupNodeLifecycleActions</a></code> | Custom scripts that run at defined points in a compute node's lifecycle. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.purchaseOption">purchaseOption</a></code> | <code>string</code> | Specifies how EC2 instances are purchased on your behalf. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.slurmConfiguration">slurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration">PcsComputeNodeGroupSlurmConfiguration</a></code> | Additional options related to the Slurm scheduler. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.spotOptions">spotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions">PcsComputeNodeGroupSpotOptions</a></code> | Additional configuration when you specify SPOT as the purchase option. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | 1 or more tags added to the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ID of the cluster of the compute node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#cluster_id PcsComputeNodeGroup#cluster_id}

---

##### `customLaunchTemplate`<sup>Required</sup> <a name="customLaunchTemplate" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.customLaunchTemplate"></a>

```typescript
public readonly customLaunchTemplate: PcsComputeNodeGroupCustomLaunchTemplate;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate">PcsComputeNodeGroupCustomLaunchTemplate</a>

An Amazon EC2 launch template AWS PCS uses to launch compute nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#custom_launch_template PcsComputeNodeGroup#custom_launch_template}

---

##### `iamInstanceProfileArn`<sup>Required</sup> <a name="iamInstanceProfileArn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.iamInstanceProfileArn"></a>

```typescript
public readonly iamInstanceProfileArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances.

The role contained in your instance profile must have pcs:RegisterComputeNodeGroupInstance permissions attached to provision instances correctly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#iam_instance_profile_arn PcsComputeNodeGroup#iam_instance_profile_arn}

---

##### `instanceConfigs`<sup>Required</sup> <a name="instanceConfigs" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.instanceConfigs"></a>

```typescript
public readonly instanceConfigs: IResolvable | PcsComputeNodeGroupInstanceConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs">PcsComputeNodeGroupInstanceConfigs</a>[]

A list of EC2 instance configurations that AWS PCS can provision in the compute node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#instance_configs PcsComputeNodeGroup#instance_configs}

---

##### `scalingConfiguration`<sup>Required</sup> <a name="scalingConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.scalingConfiguration"></a>

```typescript
public readonly scalingConfiguration: PcsComputeNodeGroupScalingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration">PcsComputeNodeGroupScalingConfiguration</a>

Specifies the boundaries of the compute node group auto scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#scaling_configuration PcsComputeNodeGroup#scaling_configuration}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The list of subnet IDs where instances are provisioned by the compute node group.

The subnets must be in the same VPC as the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#subnet_ids PcsComputeNodeGroup#subnet_ids}

---

##### `amiId`<sup>Optional</sup> <a name="amiId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.amiId"></a>

```typescript
public readonly amiId: string;
```

- *Type:* string

The ID of the Amazon Machine Image (AMI) that AWS PCS uses to launch instances.

If not provided, AWS PCS uses the AMI ID specified in the custom launch template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#ami_id PcsComputeNodeGroup#ami_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name that identifies the compute node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#name PcsComputeNodeGroup#name}

---

##### `nodeLifecycleActions`<sup>Optional</sup> <a name="nodeLifecycleActions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.nodeLifecycleActions"></a>

```typescript
public readonly nodeLifecycleActions: PcsComputeNodeGroupNodeLifecycleActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions">PcsComputeNodeGroupNodeLifecycleActions</a>

Custom scripts that run at defined points in a compute node's lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#node_lifecycle_actions PcsComputeNodeGroup#node_lifecycle_actions}

---

##### `purchaseOption`<sup>Optional</sup> <a name="purchaseOption" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.purchaseOption"></a>

```typescript
public readonly purchaseOption: string;
```

- *Type:* string

Specifies how EC2 instances are purchased on your behalf.

AWS PCS supports On-Demand, Spot, Capacity Block, and Interruptible Capacity Reservation instances. For more information, see Instance purchasing options in the Amazon Elastic Compute Cloud User Guide. If you don't provide this option, it defaults to On-Demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#purchase_option PcsComputeNodeGroup#purchase_option}

---

##### `slurmConfiguration`<sup>Optional</sup> <a name="slurmConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.slurmConfiguration"></a>

```typescript
public readonly slurmConfiguration: PcsComputeNodeGroupSlurmConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration">PcsComputeNodeGroupSlurmConfiguration</a>

Additional options related to the Slurm scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#slurm_configuration PcsComputeNodeGroup#slurm_configuration}

---

##### `spotOptions`<sup>Optional</sup> <a name="spotOptions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.spotOptions"></a>

```typescript
public readonly spotOptions: PcsComputeNodeGroupSpotOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions">PcsComputeNodeGroupSpotOptions</a>

Additional configuration when you specify SPOT as the purchase option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#spot_options PcsComputeNodeGroup#spot_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

1 or more tags added to the resource.

Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#tags PcsComputeNodeGroup#tags}

---

### PcsComputeNodeGroupCustomLaunchTemplate <a name="PcsComputeNodeGroupCustomLaunchTemplate" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupCustomLaunchTemplate: pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate.property.version">version</a></code> | <code>string</code> | The version of the EC2 launch template to use to provision instances. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate.property.templateId">templateId</a></code> | <code>string</code> | The ID of the EC2 launch template to use to provision instances. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the EC2 launch template to use to provision instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#version PcsComputeNodeGroup#version}

---

##### `templateId`<sup>Optional</sup> <a name="templateId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

The ID of the EC2 launch template to use to provision instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#template_id PcsComputeNodeGroup#template_id}

---

### PcsComputeNodeGroupErrorInfo <a name="PcsComputeNodeGroupErrorInfo" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfo.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupErrorInfo: pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfo = { ... }
```


### PcsComputeNodeGroupInstanceConfigs <a name="PcsComputeNodeGroupInstanceConfigs" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupInstanceConfigs: pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs.property.instanceType">instanceType</a></code> | <code>string</code> | The EC2 instance type that AWS PCS can provision in the compute node group. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The EC2 instance type that AWS PCS can provision in the compute node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#instance_type PcsComputeNodeGroup#instance_type}

---

### PcsComputeNodeGroupNodeLifecycleActions <a name="PcsComputeNodeGroupNodeLifecycleActions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupNodeLifecycleActions: pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions.property.scriptCachingPolicy">scriptCachingPolicy</a></code> | <code>string</code> | Controls whether lifecycle scripts are downloaded once at first boot (CACHE_ONCE) or re-downloaded on every reboot (REFRESH_ON_REBOOT). |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages">PcsComputeNodeGroupNodeLifecycleActionsStages</a></code> | The ordered scripts to run at each compute node lifecycle stage. |

---

##### `scriptCachingPolicy`<sup>Optional</sup> <a name="scriptCachingPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions.property.scriptCachingPolicy"></a>

```typescript
public readonly scriptCachingPolicy: string;
```

- *Type:* string

Controls whether lifecycle scripts are downloaded once at first boot (CACHE_ONCE) or re-downloaded on every reboot (REFRESH_ON_REBOOT).

Defaults to CACHE_ONCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#script_caching_policy PcsComputeNodeGroup#script_caching_policy}

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions.property.stages"></a>

```typescript
public readonly stages: PcsComputeNodeGroupNodeLifecycleActionsStages;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages">PcsComputeNodeGroupNodeLifecycleActionsStages</a>

The ordered scripts to run at each compute node lifecycle stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#stages PcsComputeNodeGroup#stages}

---

### PcsComputeNodeGroupNodeLifecycleActionsStages <a name="PcsComputeNodeGroupNodeLifecycleActionsStages" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupNodeLifecycleActionsStages: pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages.property.nodeBootstrapped">nodeBootstrapped</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a>[]</code> | Scripts to run after the node is bootstrapped, once the PCS configuration phase completes and before slurmd starts. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages.property.nodeReady">nodeReady</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a>[]</code> | Scripts to execute when the node becomes ready (every boot). |

---

##### `nodeBootstrapped`<sup>Optional</sup> <a name="nodeBootstrapped" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages.property.nodeBootstrapped"></a>

```typescript
public readonly nodeBootstrapped: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a>[]

Scripts to run after the node is bootstrapped, once the PCS configuration phase completes and before slurmd starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#node_bootstrapped PcsComputeNodeGroup#node_bootstrapped}

---

##### `nodeReady`<sup>Optional</sup> <a name="nodeReady" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages.property.nodeReady"></a>

```typescript
public readonly nodeReady: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a>[]

Scripts to execute when the node becomes ready (every boot).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#node_ready PcsComputeNodeGroup#node_ready}

---

### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped: pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.arguments">arguments</a></code> | <code>string[]</code> | An ordered list of arguments passed to the script. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.executionPolicy">executionPolicy</a></code> | <code>string</code> | Whether the script runs only on the node's first boot (FIRST_BOOT_ONLY) or on every boot including reboots (EVERY_BOOT). |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.name">name</a></code> | <code>string</code> | A human-readable name that identifies the script. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.onError">onError</a></code> | <code>string</code> | The behavior when the script exits with an error. Defaults to TERMINATE. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.scriptSource">scriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a></code> | The external location of a lifecycle script. |

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

An ordered list of arguments passed to the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#arguments PcsComputeNodeGroup#arguments}

---

##### `executionPolicy`<sup>Optional</sup> <a name="executionPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.executionPolicy"></a>

```typescript
public readonly executionPolicy: string;
```

- *Type:* string

Whether the script runs only on the node's first boot (FIRST_BOOT_ONLY) or on every boot including reboots (EVERY_BOOT).

Defaults to FIRST_BOOT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#execution_policy PcsComputeNodeGroup#execution_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-readable name that identifies the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#name PcsComputeNodeGroup#name}

---

##### `onError`<sup>Optional</sup> <a name="onError" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.onError"></a>

```typescript
public readonly onError: string;
```

- *Type:* string

The behavior when the script exits with an error. Defaults to TERMINATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#on_error PcsComputeNodeGroup#on_error}

---

##### `scriptSource`<sup>Optional</sup> <a name="scriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.property.scriptSource"></a>

```typescript
public readonly scriptSource: PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a>

The external location of a lifecycle script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#script_source PcsComputeNodeGroup#script_source}

---

### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource: pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.property.checksum">checksum</a></code> | <code>string</code> | A 64-character hexadecimal SHA-256 digest used to verify script integrity. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.property.s3VersionId">s3VersionId</a></code> | <code>string</code> | The S3 object version ID of the script, when stored in a versioned bucket. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.property.scriptLocation">scriptLocation</a></code> | <code>string</code> | The S3 URI or HTTPS URL where the script is stored. |

---

##### `checksum`<sup>Optional</sup> <a name="checksum" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

A 64-character hexadecimal SHA-256 digest used to verify script integrity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#checksum PcsComputeNodeGroup#checksum}

---

##### `s3VersionId`<sup>Optional</sup> <a name="s3VersionId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.property.s3VersionId"></a>

```typescript
public readonly s3VersionId: string;
```

- *Type:* string

The S3 object version ID of the script, when stored in a versioned bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#s3_version_id PcsComputeNodeGroup#s3_version_id}

---

##### `scriptLocation`<sup>Optional</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.property.scriptLocation"></a>

```typescript
public readonly scriptLocation: string;
```

- *Type:* string

The S3 URI or HTTPS URL where the script is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#script_location PcsComputeNodeGroup#script_location}

---

### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady: pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.arguments">arguments</a></code> | <code>string[]</code> | An ordered list of arguments passed to the script. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.executionPolicy">executionPolicy</a></code> | <code>string</code> | Whether the script runs only on the node's first boot (FIRST_BOOT_ONLY) or on every boot including reboots (EVERY_BOOT). |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.name">name</a></code> | <code>string</code> | A human-readable name that identifies the script. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.onError">onError</a></code> | <code>string</code> | The behavior when the script exits with an error. Defaults to TERMINATE. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.scriptSource">scriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a></code> | The external location of a lifecycle script. |

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

An ordered list of arguments passed to the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#arguments PcsComputeNodeGroup#arguments}

---

##### `executionPolicy`<sup>Optional</sup> <a name="executionPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.executionPolicy"></a>

```typescript
public readonly executionPolicy: string;
```

- *Type:* string

Whether the script runs only on the node's first boot (FIRST_BOOT_ONLY) or on every boot including reboots (EVERY_BOOT).

Defaults to FIRST_BOOT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#execution_policy PcsComputeNodeGroup#execution_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-readable name that identifies the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#name PcsComputeNodeGroup#name}

---

##### `onError`<sup>Optional</sup> <a name="onError" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.onError"></a>

```typescript
public readonly onError: string;
```

- *Type:* string

The behavior when the script exits with an error. Defaults to TERMINATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#on_error PcsComputeNodeGroup#on_error}

---

##### `scriptSource`<sup>Optional</sup> <a name="scriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.property.scriptSource"></a>

```typescript
public readonly scriptSource: PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a>

The external location of a lifecycle script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#script_source PcsComputeNodeGroup#script_source}

---

### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource: pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.property.checksum">checksum</a></code> | <code>string</code> | A 64-character hexadecimal SHA-256 digest used to verify script integrity. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.property.s3VersionId">s3VersionId</a></code> | <code>string</code> | The S3 object version ID of the script, when stored in a versioned bucket. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.property.scriptLocation">scriptLocation</a></code> | <code>string</code> | The S3 URI or HTTPS URL where the script is stored. |

---

##### `checksum`<sup>Optional</sup> <a name="checksum" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

A 64-character hexadecimal SHA-256 digest used to verify script integrity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#checksum PcsComputeNodeGroup#checksum}

---

##### `s3VersionId`<sup>Optional</sup> <a name="s3VersionId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.property.s3VersionId"></a>

```typescript
public readonly s3VersionId: string;
```

- *Type:* string

The S3 object version ID of the script, when stored in a versioned bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#s3_version_id PcsComputeNodeGroup#s3_version_id}

---

##### `scriptLocation`<sup>Optional</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.property.scriptLocation"></a>

```typescript
public readonly scriptLocation: string;
```

- *Type:* string

The S3 URI or HTTPS URL where the script is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#script_location PcsComputeNodeGroup#script_location}

---

### PcsComputeNodeGroupScalingConfiguration <a name="PcsComputeNodeGroupScalingConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupScalingConfiguration: pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | The upper bound of the number of instances allowed in the compute fleet. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | The lower bound of the number of instances allowed in the compute fleet. |

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

The upper bound of the number of instances allowed in the compute fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#max_instance_count PcsComputeNodeGroup#max_instance_count}

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

The lower bound of the number of instances allowed in the compute fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#min_instance_count PcsComputeNodeGroup#min_instance_count}

---

### PcsComputeNodeGroupSlurmConfiguration <a name="PcsComputeNodeGroupSlurmConfiguration" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupSlurmConfiguration: pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration.property.scaleDownIdleTimeInSeconds">scaleDownIdleTimeInSeconds</a></code> | <code>number</code> | The time before an idle node is scaled down. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration.property.slurmCustomSettings">slurmCustomSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a>[]</code> | Additional Slurm-specific configuration that directly maps to Slurm settings. |

---

##### `scaleDownIdleTimeInSeconds`<sup>Optional</sup> <a name="scaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration.property.scaleDownIdleTimeInSeconds"></a>

```typescript
public readonly scaleDownIdleTimeInSeconds: number;
```

- *Type:* number

The time before an idle node is scaled down.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#scale_down_idle_time_in_seconds PcsComputeNodeGroup#scale_down_idle_time_in_seconds}

---

##### `slurmCustomSettings`<sup>Optional</sup> <a name="slurmCustomSettings" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration.property.slurmCustomSettings"></a>

```typescript
public readonly slurmCustomSettings: IResolvable | PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a>[]

Additional Slurm-specific configuration that directly maps to Slurm settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#slurm_custom_settings PcsComputeNodeGroup#slurm_custom_settings}

---

### PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings <a name="PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings: pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.property.parameterName">parameterName</a></code> | <code>string</code> | AWS PCS supports configuration of the following Slurm parameters for compute node groups: Weight and RealMemory. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.property.parameterValue">parameterValue</a></code> | <code>string</code> | The value for the configured Slurm setting. |

---

##### `parameterName`<sup>Optional</sup> <a name="parameterName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

AWS PCS supports configuration of the following Slurm parameters for compute node groups: Weight and RealMemory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#parameter_name PcsComputeNodeGroup#parameter_name}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

The value for the configured Slurm setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#parameter_value PcsComputeNodeGroup#parameter_value}

---

### PcsComputeNodeGroupSpotOptions <a name="PcsComputeNodeGroupSpotOptions" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

const pcsComputeNodeGroupSpotOptions: pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | The Amazon EC2 allocation strategy AWS PCS uses to provision EC2 instances. |

---

##### `allocationStrategy`<sup>Optional</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

The Amazon EC2 allocation strategy AWS PCS uses to provision EC2 instances.

AWS PCS supports lowest price, capacity optimized, and price capacity optimized. If you don't provide this option, it defaults to price capacity optimized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcs_compute_node_group#allocation_strategy PcsComputeNodeGroup#allocation_strategy}

---

## Classes <a name="Classes" id="Classes"></a>

### PcsComputeNodeGroupCustomLaunchTemplateOutputReference <a name="PcsComputeNodeGroupCustomLaunchTemplateOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.resetTemplateId">resetTemplateId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTemplateId` <a name="resetTemplateId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.resetTemplateId"></a>

```typescript
public resetTemplateId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateIdInput">templateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateId">templateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate">PcsComputeNodeGroupCustomLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateIdInput"></a>

```typescript
public readonly templateIdInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupCustomLaunchTemplate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupCustomLaunchTemplate">PcsComputeNodeGroupCustomLaunchTemplate</a>

---


### PcsComputeNodeGroupErrorInfoList <a name="PcsComputeNodeGroupErrorInfoList" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.get"></a>

```typescript
public get(index: number): PcsComputeNodeGroupErrorInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PcsComputeNodeGroupErrorInfoOutputReference <a name="PcsComputeNodeGroupErrorInfoOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfo">PcsComputeNodeGroupErrorInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PcsComputeNodeGroupErrorInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupErrorInfo">PcsComputeNodeGroupErrorInfo</a>

---


### PcsComputeNodeGroupInstanceConfigsList <a name="PcsComputeNodeGroupInstanceConfigsList" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.get"></a>

```typescript
public get(index: number): PcsComputeNodeGroupInstanceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs">PcsComputeNodeGroupInstanceConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupInstanceConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs">PcsComputeNodeGroupInstanceConfigs</a>[]

---


### PcsComputeNodeGroupInstanceConfigsOutputReference <a name="PcsComputeNodeGroupInstanceConfigsOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs">PcsComputeNodeGroupInstanceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupInstanceConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupInstanceConfigs">PcsComputeNodeGroupInstanceConfigs</a>

---


### PcsComputeNodeGroupNodeLifecycleActionsOutputReference <a name="PcsComputeNodeGroupNodeLifecycleActionsOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.putStages">putStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resetScriptCachingPolicy">resetScriptCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resetStages">resetStages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStages` <a name="putStages" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.putStages"></a>

```typescript
public putStages(value: PcsComputeNodeGroupNodeLifecycleActionsStages): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.putStages.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages">PcsComputeNodeGroupNodeLifecycleActionsStages</a>

---

##### `resetScriptCachingPolicy` <a name="resetScriptCachingPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resetScriptCachingPolicy"></a>

```typescript
public resetScriptCachingPolicy(): void
```

##### `resetStages` <a name="resetStages" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.resetStages"></a>

```typescript
public resetStages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference">PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicyInput">scriptCachingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stagesInput">stagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages">PcsComputeNodeGroupNodeLifecycleActionsStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicy">scriptCachingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions">PcsComputeNodeGroupNodeLifecycleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stages"></a>

```typescript
public readonly stages: PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference">PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference</a>

---

##### `scriptCachingPolicyInput`<sup>Optional</sup> <a name="scriptCachingPolicyInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicyInput"></a>

```typescript
public readonly scriptCachingPolicyInput: string;
```

- *Type:* string

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stagesInput"></a>

```typescript
public readonly stagesInput: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages">PcsComputeNodeGroupNodeLifecycleActionsStages</a>

---

##### `scriptCachingPolicy`<sup>Required</sup> <a name="scriptCachingPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicy"></a>

```typescript
public readonly scriptCachingPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupNodeLifecycleActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActions">PcsComputeNodeGroupNodeLifecycleActions</a>

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get"></a>

```typescript
public get(index: number): PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a>[]

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.putScriptSource">putScriptSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetExecutionPolicy">resetExecutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetOnError">resetOnError</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetScriptSource">resetScriptSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptSource` <a name="putScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.putScriptSource"></a>

```typescript
public putScriptSource(value: PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.putScriptSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a>

---

##### `resetArguments` <a name="resetArguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetExecutionPolicy` <a name="resetExecutionPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetExecutionPolicy"></a>

```typescript
public resetExecutionPolicy(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOnError` <a name="resetOnError" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetOnError"></a>

```typescript
public resetOnError(): void
```

##### `resetScriptSource` <a name="resetScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resetScriptSource"></a>

```typescript
public resetScriptSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSource">scriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicyInput">executionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onErrorInput">onErrorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSourceInput">scriptSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.arguments">arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicy">executionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onError">onError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptSource`<sup>Required</sup> <a name="scriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSource"></a>

```typescript
public readonly scriptSource: PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: string[];
```

- *Type:* string[]

---

##### `executionPolicyInput`<sup>Optional</sup> <a name="executionPolicyInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicyInput"></a>

```typescript
public readonly executionPolicyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onErrorInput`<sup>Optional</sup> <a name="onErrorInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onErrorInput"></a>

```typescript
public readonly onErrorInput: string;
```

- *Type:* string

---

##### `scriptSourceInput`<sup>Optional</sup> <a name="scriptSourceInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSourceInput"></a>

```typescript
public readonly scriptSourceInput: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a>

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

---

##### `executionPolicy`<sup>Required</sup> <a name="executionPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicy"></a>

```typescript
public readonly executionPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onError`<sup>Required</sup> <a name="onError" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onError"></a>

```typescript
public readonly onError: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a>

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resetChecksum">resetChecksum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resetS3VersionId">resetS3VersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resetScriptLocation">resetScriptLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChecksum` <a name="resetChecksum" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resetChecksum"></a>

```typescript
public resetChecksum(): void
```

##### `resetS3VersionId` <a name="resetS3VersionId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resetS3VersionId"></a>

```typescript
public resetS3VersionId(): void
```

##### `resetScriptLocation` <a name="resetScriptLocation" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resetScriptLocation"></a>

```typescript
public resetScriptLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksumInput">checksumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionIdInput">s3VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocationInput">scriptLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionId">s3VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocation">scriptLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checksumInput`<sup>Optional</sup> <a name="checksumInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksumInput"></a>

```typescript
public readonly checksumInput: string;
```

- *Type:* string

---

##### `s3VersionIdInput`<sup>Optional</sup> <a name="s3VersionIdInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionIdInput"></a>

```typescript
public readonly s3VersionIdInput: string;
```

- *Type:* string

---

##### `scriptLocationInput`<sup>Optional</sup> <a name="scriptLocationInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocationInput"></a>

```typescript
public readonly scriptLocationInput: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `s3VersionId`<sup>Required</sup> <a name="s3VersionId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionId"></a>

```typescript
public readonly s3VersionId: string;
```

- *Type:* string

---

##### `scriptLocation`<sup>Required</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocation"></a>

```typescript
public readonly scriptLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a>

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get"></a>

```typescript
public get(index: number): PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a>[]

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.putScriptSource">putScriptSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetExecutionPolicy">resetExecutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetOnError">resetOnError</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetScriptSource">resetScriptSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptSource` <a name="putScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.putScriptSource"></a>

```typescript
public putScriptSource(value: PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.putScriptSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a>

---

##### `resetArguments` <a name="resetArguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetExecutionPolicy` <a name="resetExecutionPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetExecutionPolicy"></a>

```typescript
public resetExecutionPolicy(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOnError` <a name="resetOnError" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetOnError"></a>

```typescript
public resetOnError(): void
```

##### `resetScriptSource` <a name="resetScriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resetScriptSource"></a>

```typescript
public resetScriptSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSource">scriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicyInput">executionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onErrorInput">onErrorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSourceInput">scriptSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.arguments">arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicy">executionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onError">onError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptSource`<sup>Required</sup> <a name="scriptSource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSource"></a>

```typescript
public readonly scriptSource: PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: string[];
```

- *Type:* string[]

---

##### `executionPolicyInput`<sup>Optional</sup> <a name="executionPolicyInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicyInput"></a>

```typescript
public readonly executionPolicyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onErrorInput`<sup>Optional</sup> <a name="onErrorInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onErrorInput"></a>

```typescript
public readonly onErrorInput: string;
```

- *Type:* string

---

##### `scriptSourceInput`<sup>Optional</sup> <a name="scriptSourceInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSourceInput"></a>

```typescript
public readonly scriptSourceInput: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a>

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

---

##### `executionPolicy`<sup>Required</sup> <a name="executionPolicy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicy"></a>

```typescript
public readonly executionPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onError`<sup>Required</sup> <a name="onError" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onError"></a>

```typescript
public readonly onError: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a>

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resetChecksum">resetChecksum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resetS3VersionId">resetS3VersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resetScriptLocation">resetScriptLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChecksum` <a name="resetChecksum" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resetChecksum"></a>

```typescript
public resetChecksum(): void
```

##### `resetS3VersionId` <a name="resetS3VersionId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resetS3VersionId"></a>

```typescript
public resetS3VersionId(): void
```

##### `resetScriptLocation` <a name="resetScriptLocation" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resetScriptLocation"></a>

```typescript
public resetScriptLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksumInput">checksumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionIdInput">s3VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocationInput">scriptLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionId">s3VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocation">scriptLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checksumInput`<sup>Optional</sup> <a name="checksumInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksumInput"></a>

```typescript
public readonly checksumInput: string;
```

- *Type:* string

---

##### `s3VersionIdInput`<sup>Optional</sup> <a name="s3VersionIdInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionIdInput"></a>

```typescript
public readonly s3VersionIdInput: string;
```

- *Type:* string

---

##### `scriptLocationInput`<sup>Optional</sup> <a name="scriptLocationInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocationInput"></a>

```typescript
public readonly scriptLocationInput: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `s3VersionId`<sup>Required</sup> <a name="s3VersionId" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionId"></a>

```typescript
public readonly s3VersionId: string;
```

- *Type:* string

---

##### `scriptLocation`<sup>Required</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocation"></a>

```typescript
public readonly scriptLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a>

---


### PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference <a name="PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.putNodeBootstrapped">putNodeBootstrapped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.putNodeReady">putNodeReady</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resetNodeBootstrapped">resetNodeBootstrapped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resetNodeReady">resetNodeReady</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeBootstrapped` <a name="putNodeBootstrapped" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.putNodeBootstrapped"></a>

```typescript
public putNodeBootstrapped(value: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.putNodeBootstrapped.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a>[]

---

##### `putNodeReady` <a name="putNodeReady" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.putNodeReady"></a>

```typescript
public putNodeReady(value: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.putNodeReady.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a>[]

---

##### `resetNodeBootstrapped` <a name="resetNodeBootstrapped" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resetNodeBootstrapped"></a>

```typescript
public resetNodeBootstrapped(): void
```

##### `resetNodeReady` <a name="resetNodeReady" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resetNodeReady"></a>

```typescript
public resetNodeReady(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrapped">nodeBootstrapped</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReady">nodeReady</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrappedInput">nodeBootstrappedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReadyInput">nodeReadyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages">PcsComputeNodeGroupNodeLifecycleActionsStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeBootstrapped`<sup>Required</sup> <a name="nodeBootstrapped" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrapped"></a>

```typescript
public readonly nodeBootstrapped: PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList</a>

---

##### `nodeReady`<sup>Required</sup> <a name="nodeReady" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReady"></a>

```typescript
public readonly nodeReady: PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList</a>

---

##### `nodeBootstrappedInput`<sup>Optional</sup> <a name="nodeBootstrappedInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrappedInput"></a>

```typescript
public readonly nodeBootstrappedInput: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a>[]

---

##### `nodeReadyInput`<sup>Optional</sup> <a name="nodeReadyInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReadyInput"></a>

```typescript
public readonly nodeReadyInput: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">PcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupNodeLifecycleActionsStages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupNodeLifecycleActionsStages">PcsComputeNodeGroupNodeLifecycleActionsStages</a>

---


### PcsComputeNodeGroupScalingConfigurationOutputReference <a name="PcsComputeNodeGroupScalingConfigurationOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration">PcsComputeNodeGroupScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCountInput"></a>

```typescript
public readonly maxInstanceCountInput: number;
```

- *Type:* number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCountInput"></a>

```typescript
public readonly minInstanceCountInput: number;
```

- *Type:* number

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupScalingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupScalingConfiguration">PcsComputeNodeGroupScalingConfiguration</a>

---


### PcsComputeNodeGroupSlurmConfigurationOutputReference <a name="PcsComputeNodeGroupSlurmConfigurationOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.putSlurmCustomSettings">putSlurmCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resetScaleDownIdleTimeInSeconds">resetScaleDownIdleTimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resetSlurmCustomSettings">resetSlurmCustomSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSlurmCustomSettings` <a name="putSlurmCustomSettings" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.putSlurmCustomSettings"></a>

```typescript
public putSlurmCustomSettings(value: IResolvable | PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.putSlurmCustomSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a>[]

---

##### `resetScaleDownIdleTimeInSeconds` <a name="resetScaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resetScaleDownIdleTimeInSeconds"></a>

```typescript
public resetScaleDownIdleTimeInSeconds(): void
```

##### `resetSlurmCustomSettings` <a name="resetSlurmCustomSettings" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.resetSlurmCustomSettings"></a>

```typescript
public resetSlurmCustomSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettings">slurmCustomSettings</a></code> | <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList">PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSecondsInput">scaleDownIdleTimeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettingsInput">slurmCustomSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds">scaleDownIdleTimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration">PcsComputeNodeGroupSlurmConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `slurmCustomSettings`<sup>Required</sup> <a name="slurmCustomSettings" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettings"></a>

```typescript
public readonly slurmCustomSettings: PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList">PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList</a>

---

##### `scaleDownIdleTimeInSecondsInput`<sup>Optional</sup> <a name="scaleDownIdleTimeInSecondsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSecondsInput"></a>

```typescript
public readonly scaleDownIdleTimeInSecondsInput: number;
```

- *Type:* number

---

##### `slurmCustomSettingsInput`<sup>Optional</sup> <a name="slurmCustomSettingsInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettingsInput"></a>

```typescript
public readonly slurmCustomSettingsInput: IResolvable | PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a>[]

---

##### `scaleDownIdleTimeInSeconds`<sup>Required</sup> <a name="scaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds"></a>

```typescript
public readonly scaleDownIdleTimeInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupSlurmConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfiguration">PcsComputeNodeGroupSlurmConfiguration</a>

---


### PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList <a name="PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get"></a>

```typescript
public get(index: number): PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a>[]

---


### PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference <a name="PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterName">resetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterName` <a name="resetParameterName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterName"></a>

```typescript
public resetParameterName(): void
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterValue"></a>

```typescript
public resetParameterValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">PcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a>

---


### PcsComputeNodeGroupSpotOptionsOutputReference <a name="PcsComputeNodeGroupSpotOptionsOutputReference" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.Initializer"></a>

```typescript
import { pcsComputeNodeGroup } from '@cdktn/provider-awscc'

new pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.resetAllocationStrategy">resetAllocationStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllocationStrategy` <a name="resetAllocationStrategy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.resetAllocationStrategy"></a>

```typescript
public resetAllocationStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions">PcsComputeNodeGroupSpotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategyInput"></a>

```typescript
public readonly allocationStrategyInput: string;
```

- *Type:* string

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcsComputeNodeGroupSpotOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsComputeNodeGroup.PcsComputeNodeGroupSpotOptions">PcsComputeNodeGroupSpotOptions</a>

---




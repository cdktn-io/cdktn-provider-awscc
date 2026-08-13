# `redshiftserverlessWorkgroup` Submodule <a name="`redshiftserverlessWorkgroup` Submodule" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessWorkgroup <a name="RedshiftserverlessWorkgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup awscc_redshiftserverless_workgroup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup(scope: Construct, id: string, config: RedshiftserverlessWorkgroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig">RedshiftserverlessWorkgroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig">RedshiftserverlessWorkgroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putConfigParameters">putConfigParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putPricePerformanceTarget">putPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putWorkgroup">putWorkgroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetBaseCapacity">resetBaseCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetConfigParameters">resetConfigParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetEnhancedVpcRouting">resetEnhancedVpcRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetNamespaceName">resetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPricePerformanceTarget">resetPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetRecoveryPointId">resetRecoveryPointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotArn">resetSnapshotArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotOwnerAccount">resetSnapshotOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTrackName">resetTrackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetWorkgroup">resetWorkgroup</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigParameters` <a name="putConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putConfigParameters"></a>

```typescript
public putConfigParameters(value: IResolvable | RedshiftserverlessWorkgroupConfigParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putConfigParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>[]

---

##### `putPricePerformanceTarget` <a name="putPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putPricePerformanceTarget"></a>

```typescript
public putPricePerformanceTarget(value: RedshiftserverlessWorkgroupPricePerformanceTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putPricePerformanceTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTags"></a>

```typescript
public putTags(value: IResolvable | RedshiftserverlessWorkgroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>[]

---

##### `putWorkgroup` <a name="putWorkgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putWorkgroup"></a>

```typescript
public putWorkgroup(value: RedshiftserverlessWorkgroupWorkgroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.putWorkgroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a>

---

##### `resetBaseCapacity` <a name="resetBaseCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetBaseCapacity"></a>

```typescript
public resetBaseCapacity(): void
```

##### `resetConfigParameters` <a name="resetConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetConfigParameters"></a>

```typescript
public resetConfigParameters(): void
```

##### `resetEnhancedVpcRouting` <a name="resetEnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetEnhancedVpcRouting"></a>

```typescript
public resetEnhancedVpcRouting(): void
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetMaxCapacity"></a>

```typescript
public resetMaxCapacity(): void
```

##### `resetNamespaceName` <a name="resetNamespaceName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetNamespaceName"></a>

```typescript
public resetNamespaceName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPricePerformanceTarget` <a name="resetPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPricePerformanceTarget"></a>

```typescript
public resetPricePerformanceTarget(): void
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetPubliclyAccessible"></a>

```typescript
public resetPubliclyAccessible(): void
```

##### `resetRecoveryPointId` <a name="resetRecoveryPointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetRecoveryPointId"></a>

```typescript
public resetRecoveryPointId(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSnapshotArn` <a name="resetSnapshotArn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotArn"></a>

```typescript
public resetSnapshotArn(): void
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotName"></a>

```typescript
public resetSnapshotName(): void
```

##### `resetSnapshotOwnerAccount` <a name="resetSnapshotOwnerAccount" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSnapshotOwnerAccount"></a>

```typescript
public resetSnapshotOwnerAccount(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTrackName` <a name="resetTrackName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetTrackName"></a>

```typescript
public resetTrackName(): void
```

##### `resetWorkgroup` <a name="resetWorkgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.resetWorkgroup"></a>

```typescript
public resetWorkgroup(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftserverlessWorkgroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isConstruct"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformElement"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformResource"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RedshiftserverlessWorkgroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftserverlessWorkgroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftserverlessWorkgroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessWorkgroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParameters">configParameters</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList">RedshiftserverlessWorkgroupConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTarget">pricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList">RedshiftserverlessWorkgroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroup">workgroup</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference">RedshiftserverlessWorkgroupWorkgroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacityInput">baseCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParametersInput">configParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRoutingInput">enhancedVpcRoutingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacityInput">maxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceNameInput">namespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTargetInput">pricePerformanceTargetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.recoveryPointIdInput">recoveryPointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotArnInput">snapshotArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotOwnerAccountInput">snapshotOwnerAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackNameInput">trackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupInput">workgroupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupNameInput">workgroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacity">baseCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.recoveryPointId">recoveryPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotArn">snapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotOwnerAccount">snapshotOwnerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackName">trackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupName">workgroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configParameters`<sup>Required</sup> <a name="configParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParameters"></a>

```typescript
public readonly configParameters: RedshiftserverlessWorkgroupConfigParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList">RedshiftserverlessWorkgroupConfigParametersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pricePerformanceTarget`<sup>Required</sup> <a name="pricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTarget"></a>

```typescript
public readonly pricePerformanceTarget: RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tags"></a>

```typescript
public readonly tags: RedshiftserverlessWorkgroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList">RedshiftserverlessWorkgroupTagsList</a>

---

##### `workgroup`<sup>Required</sup> <a name="workgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroup"></a>

```typescript
public readonly workgroup: RedshiftserverlessWorkgroupWorkgroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference">RedshiftserverlessWorkgroupWorkgroupOutputReference</a>

---

##### `baseCapacityInput`<sup>Optional</sup> <a name="baseCapacityInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacityInput"></a>

```typescript
public readonly baseCapacityInput: number;
```

- *Type:* number

---

##### `configParametersInput`<sup>Optional</sup> <a name="configParametersInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.configParametersInput"></a>

```typescript
public readonly configParametersInput: IResolvable | RedshiftserverlessWorkgroupConfigParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>[]

---

##### `enhancedVpcRoutingInput`<sup>Optional</sup> <a name="enhancedVpcRoutingInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRoutingInput"></a>

```typescript
public readonly enhancedVpcRoutingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: number;
```

- *Type:* number

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceNameInput"></a>

```typescript
public readonly namespaceNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `pricePerformanceTargetInput`<sup>Optional</sup> <a name="pricePerformanceTargetInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.pricePerformanceTargetInput"></a>

```typescript
public readonly pricePerformanceTargetInput: IResolvable | RedshiftserverlessWorkgroupPricePerformanceTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessibleInput"></a>

```typescript
public readonly publiclyAccessibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `recoveryPointIdInput`<sup>Optional</sup> <a name="recoveryPointIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.recoveryPointIdInput"></a>

```typescript
public readonly recoveryPointIdInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `snapshotArnInput`<sup>Optional</sup> <a name="snapshotArnInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotArnInput"></a>

```typescript
public readonly snapshotArnInput: string;
```

- *Type:* string

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `snapshotOwnerAccountInput`<sup>Optional</sup> <a name="snapshotOwnerAccountInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotOwnerAccountInput"></a>

```typescript
public readonly snapshotOwnerAccountInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RedshiftserverlessWorkgroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>[]

---

##### `trackNameInput`<sup>Optional</sup> <a name="trackNameInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackNameInput"></a>

```typescript
public readonly trackNameInput: string;
```

- *Type:* string

---

##### `workgroupInput`<sup>Optional</sup> <a name="workgroupInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupInput"></a>

```typescript
public readonly workgroupInput: IResolvable | RedshiftserverlessWorkgroupWorkgroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a>

---

##### `workgroupNameInput`<sup>Optional</sup> <a name="workgroupNameInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupNameInput"></a>

```typescript
public readonly workgroupNameInput: string;
```

- *Type:* string

---

##### `baseCapacity`<sup>Required</sup> <a name="baseCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.baseCapacity"></a>

```typescript
public readonly baseCapacity: number;
```

- *Type:* number

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="enhancedVpcRouting" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.enhancedVpcRouting"></a>

```typescript
public readonly enhancedVpcRouting: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `recoveryPointId`<sup>Required</sup> <a name="recoveryPointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.recoveryPointId"></a>

```typescript
public readonly recoveryPointId: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotArn"></a>

```typescript
public readonly snapshotArn: string;
```

- *Type:* string

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

##### `snapshotOwnerAccount`<sup>Required</sup> <a name="snapshotOwnerAccount" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.snapshotOwnerAccount"></a>

```typescript
public readonly snapshotOwnerAccount: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `trackName`<sup>Required</sup> <a name="trackName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.trackName"></a>

```typescript
public readonly trackName: string;
```

- *Type:* string

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessWorkgroupConfig <a name="RedshiftserverlessWorkgroupConfig" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

const redshiftserverlessWorkgroupConfig: redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroupName">workgroupName</a></code> | <code>string</code> | The name of the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.baseCapacity">baseCapacity</a></code> | <code>number</code> | The base compute capacity of the workgroup in Redshift Processing Units (RPUs). |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.configParameters">configParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>[]</code> | A list of parameters to set for finer control over a database. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>boolean \| cdktn.IResolvable</code> | The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | The max compute capacity of the workgroup in Redshift Processing Units (RPUs). |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.namespaceName">namespaceName</a></code> | <code>string</code> | The namespace the workgroup is associated with. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.port">port</a></code> | <code>number</code> | The custom port to use when connecting to a workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.pricePerformanceTarget">pricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | A property that represents the price performance target settings for the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that specifies whether the workgroup can be accessible from a public network. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.recoveryPointId">recoveryPointId</a></code> | <code>string</code> | The identifier of the recovery point to restore the namespace from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | A list of security group IDs to associate with the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotArn">snapshotArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the snapshot to restore the namespace from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotName">snapshotName</a></code> | <code>string</code> | The name of the snapshot to restore the namespace from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotOwnerAccount">snapshotOwnerAccount</a></code> | <code>string</code> | The AWS account ID that owns the snapshot. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | A list of subnet IDs the workgroup is associated with. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>[]</code> | The map of the key-value pairs used to tag the workgroup. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.trackName">trackName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#track_name RedshiftserverlessWorkgroup#track_name}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroup">workgroup</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a></code> | Definition for workgroup resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

The name of the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#workgroup_name RedshiftserverlessWorkgroup#workgroup_name}

---

##### `baseCapacity`<sup>Optional</sup> <a name="baseCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.baseCapacity"></a>

```typescript
public readonly baseCapacity: number;
```

- *Type:* number

The base compute capacity of the workgroup in Redshift Processing Units (RPUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#base_capacity RedshiftserverlessWorkgroup#base_capacity}

---

##### `configParameters`<sup>Optional</sup> <a name="configParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.configParameters"></a>

```typescript
public readonly configParameters: IResolvable | RedshiftserverlessWorkgroupConfigParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>[]

A list of parameters to set for finer control over a database.

Available options are datestyle, enable_user_activity_logging, query_group, search_path, max_query_execution_time, and require_ssl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#config_parameters RedshiftserverlessWorkgroup#config_parameters}

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="enhancedVpcRouting" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.enhancedVpcRouting"></a>

```typescript
public readonly enhancedVpcRouting: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#enhanced_vpc_routing RedshiftserverlessWorkgroup#enhanced_vpc_routing}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

The max compute capacity of the workgroup in Redshift Processing Units (RPUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#max_capacity RedshiftserverlessWorkgroup#max_capacity}

---

##### `namespaceName`<sup>Optional</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

The namespace the workgroup is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#namespace_name RedshiftserverlessWorkgroup#namespace_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The custom port to use when connecting to a workgroup.

Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#port RedshiftserverlessWorkgroup#port}

---

##### `pricePerformanceTarget`<sup>Optional</sup> <a name="pricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.pricePerformanceTarget"></a>

```typescript
public readonly pricePerformanceTarget: RedshiftserverlessWorkgroupPricePerformanceTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

A property that represents the price performance target settings for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#price_performance_target RedshiftserverlessWorkgroup#price_performance_target}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that specifies whether the workgroup can be accessible from a public network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#publicly_accessible RedshiftserverlessWorkgroup#publicly_accessible}

---

##### `recoveryPointId`<sup>Optional</sup> <a name="recoveryPointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.recoveryPointId"></a>

```typescript
public readonly recoveryPointId: string;
```

- *Type:* string

The identifier of the recovery point to restore the namespace from.

When this resource is first created, the namespace is restored from this recovery point. On subsequent updates, a restore occurs only when RecoveryPointId changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#recovery_point_id RedshiftserverlessWorkgroup#recovery_point_id}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

A list of security group IDs to associate with the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#security_group_ids RedshiftserverlessWorkgroup#security_group_ids}

---

##### `snapshotArn`<sup>Optional</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotArn"></a>

```typescript
public readonly snapshotArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the snapshot to restore the namespace from.

Specify either SnapshotArn or SnapshotName, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotArn changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#snapshot_arn RedshiftserverlessWorkgroup#snapshot_arn}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The name of the snapshot to restore the namespace from.

Because snapshot names are unique only within an account, also specify SnapshotOwnerAccount when restoring from a snapshot owned by a different account. Specify either SnapshotName or SnapshotArn, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotName or SnapshotOwnerAccount changes from its previous value. If both values are unchanged or SnapshotName is removed, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#snapshot_name RedshiftserverlessWorkgroup#snapshot_name}

---

##### `snapshotOwnerAccount`<sup>Optional</sup> <a name="snapshotOwnerAccount" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.snapshotOwnerAccount"></a>

```typescript
public readonly snapshotOwnerAccount: string;
```

- *Type:* string

The AWS account ID that owns the snapshot.

Required when restoring from a snapshot shared by another account. Used in combination with SnapshotName. On updates, changing this value while SnapshotName is set triggers a restore from the newly referenced snapshot. If the value is unchanged, no restore takes place and existing data is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#snapshot_owner_account RedshiftserverlessWorkgroup#snapshot_owner_account}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

A list of subnet IDs the workgroup is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#subnet_ids RedshiftserverlessWorkgroup#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RedshiftserverlessWorkgroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>[]

The map of the key-value pairs used to tag the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#tags RedshiftserverlessWorkgroup#tags}

---

##### `trackName`<sup>Optional</sup> <a name="trackName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.trackName"></a>

```typescript
public readonly trackName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#track_name RedshiftserverlessWorkgroup#track_name}.

---

##### `workgroup`<sup>Optional</sup> <a name="workgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfig.property.workgroup"></a>

```typescript
public readonly workgroup: RedshiftserverlessWorkgroupWorkgroup;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a>

Definition for workgroup resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#workgroup RedshiftserverlessWorkgroup#workgroup}

---

### RedshiftserverlessWorkgroupConfigParameters <a name="RedshiftserverlessWorkgroupConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

const redshiftserverlessWorkgroupConfigParameters: redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.property.parameterKey">parameterKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#parameter_key RedshiftserverlessWorkgroup#parameter_key}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.property.parameterValue">parameterValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#parameter_value RedshiftserverlessWorkgroup#parameter_value}. |

---

##### `parameterKey`<sup>Optional</sup> <a name="parameterKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.property.parameterKey"></a>

```typescript
public readonly parameterKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#parameter_key RedshiftserverlessWorkgroup#parameter_key}.

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#parameter_value RedshiftserverlessWorkgroup#parameter_value}.

---

### RedshiftserverlessWorkgroupPricePerformanceTarget <a name="RedshiftserverlessWorkgroupPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

const redshiftserverlessWorkgroupPricePerformanceTarget: redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.level">level</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#status RedshiftserverlessWorkgroup#status}. |

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#status RedshiftserverlessWorkgroup#status}.

---

### RedshiftserverlessWorkgroupTags <a name="RedshiftserverlessWorkgroupTags" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

const redshiftserverlessWorkgroupTags: redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#key RedshiftserverlessWorkgroup#key}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#value RedshiftserverlessWorkgroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#key RedshiftserverlessWorkgroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#value RedshiftserverlessWorkgroup#value}.

---

### RedshiftserverlessWorkgroupWorkgroup <a name="RedshiftserverlessWorkgroupWorkgroup" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

const redshiftserverlessWorkgroupWorkgroup: redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#endpoint RedshiftserverlessWorkgroup#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.property.pricePerformanceTarget">pricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#price_performance_target RedshiftserverlessWorkgroup#price_performance_target}. |

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.property.endpoint"></a>

```typescript
public readonly endpoint: RedshiftserverlessWorkgroupWorkgroupEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#endpoint RedshiftserverlessWorkgroup#endpoint}.

---

##### `pricePerformanceTarget`<sup>Optional</sup> <a name="pricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup.property.pricePerformanceTarget"></a>

```typescript
public readonly pricePerformanceTarget: RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#price_performance_target RedshiftserverlessWorkgroup#price_performance_target}.

---

### RedshiftserverlessWorkgroupWorkgroupConfigParameters <a name="RedshiftserverlessWorkgroupWorkgroupConfigParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

const redshiftserverlessWorkgroupWorkgroupConfigParameters: redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters = { ... }
```


### RedshiftserverlessWorkgroupWorkgroupEndpoint <a name="RedshiftserverlessWorkgroupWorkgroupEndpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

const redshiftserverlessWorkgroupWorkgroupEndpoint: redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint.property.vpcEndpoints">vpcEndpoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#vpc_endpoints RedshiftserverlessWorkgroup#vpc_endpoints}. |

---

##### `vpcEndpoints`<sup>Optional</sup> <a name="vpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint.property.vpcEndpoints"></a>

```typescript
public readonly vpcEndpoints: IResolvable | RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#vpc_endpoints RedshiftserverlessWorkgroup#vpc_endpoints}.

---

### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

const redshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints: redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.networkInterfaces">networkInterfaces</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#network_interfaces RedshiftserverlessWorkgroup#network_interfaces}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#vpc_endpoint_id RedshiftserverlessWorkgroup#vpc_endpoint_id}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#vpc_id RedshiftserverlessWorkgroup#vpc_id}. |

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: IResolvable | RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#network_interfaces RedshiftserverlessWorkgroup#network_interfaces}.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#vpc_endpoint_id RedshiftserverlessWorkgroup#vpc_endpoint_id}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#vpc_id RedshiftserverlessWorkgroup#vpc_id}.

---

### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

const redshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces: redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#availability_zone RedshiftserverlessWorkgroup#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#network_interface_id RedshiftserverlessWorkgroup#network_interface_id}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#private_ip_address RedshiftserverlessWorkgroup#private_ip_address}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#subnet_id RedshiftserverlessWorkgroup#subnet_id}. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#availability_zone RedshiftserverlessWorkgroup#availability_zone}.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#network_interface_id RedshiftserverlessWorkgroup#network_interface_id}.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#private_ip_address RedshiftserverlessWorkgroup#private_ip_address}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#subnet_id RedshiftserverlessWorkgroup#subnet_id}.

---

### RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget <a name="RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

const redshiftserverlessWorkgroupWorkgroupPricePerformanceTarget: redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.property.level">level</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#status RedshiftserverlessWorkgroup#status}. |

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#level RedshiftserverlessWorkgroup#level}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_workgroup#status RedshiftserverlessWorkgroup#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftserverlessWorkgroupConfigParametersList <a name="RedshiftserverlessWorkgroupConfigParametersList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.get"></a>

```typescript
public get(index: number): RedshiftserverlessWorkgroupConfigParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessWorkgroupConfigParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>[]

---


### RedshiftserverlessWorkgroupConfigParametersOutputReference <a name="RedshiftserverlessWorkgroupConfigParametersOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resetParameterKey">resetParameterKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterKey` <a name="resetParameterKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resetParameterKey"></a>

```typescript
public resetParameterKey(): void
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.resetParameterValue"></a>

```typescript
public resetParameterValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKeyInput">parameterKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKey">parameterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterKeyInput`<sup>Optional</sup> <a name="parameterKeyInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKeyInput"></a>

```typescript
public readonly parameterKeyInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: string;
```

- *Type:* string

---

##### `parameterKey`<sup>Required</sup> <a name="parameterKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKey"></a>

```typescript
public readonly parameterKey: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessWorkgroupConfigParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupConfigParameters">RedshiftserverlessWorkgroupConfigParameters</a>

---


### RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference <a name="RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetLevel"></a>

```typescript
public resetLevel(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.levelInput">levelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.level">level</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.levelInput"></a>

```typescript
public readonly levelInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessWorkgroupPricePerformanceTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupPricePerformanceTarget</a>

---


### RedshiftserverlessWorkgroupTagsList <a name="RedshiftserverlessWorkgroupTagsList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.get"></a>

```typescript
public get(index: number): RedshiftserverlessWorkgroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessWorkgroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>[]

---


### RedshiftserverlessWorkgroupTagsOutputReference <a name="RedshiftserverlessWorkgroupTagsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessWorkgroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupTags">RedshiftserverlessWorkgroupTags</a>

---


### RedshiftserverlessWorkgroupWorkgroupConfigParametersList <a name="RedshiftserverlessWorkgroupWorkgroupConfigParametersList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.get"></a>

```typescript
public get(index: number): RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterKey">parameterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters">RedshiftserverlessWorkgroupWorkgroupConfigParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterKey`<sup>Required</sup> <a name="parameterKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterKey"></a>

```typescript
public readonly parameterKey: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedshiftserverlessWorkgroupWorkgroupConfigParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParameters">RedshiftserverlessWorkgroupWorkgroupConfigParameters</a>

---


### RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.putVpcEndpoints">putVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resetVpcEndpoints">resetVpcEndpoints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcEndpoints` <a name="putVpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.putVpcEndpoints"></a>

```typescript
public putVpcEndpoints(value: IResolvable | RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.putVpcEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>[]

---

##### `resetVpcEndpoints` <a name="resetVpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resetVpcEndpoints"></a>

```typescript
public resetVpcEndpoints(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpoints">vpcEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpointsInput">vpcEndpointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `vpcEndpoints`<sup>Required</sup> <a name="vpcEndpoints" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpoints"></a>

```typescript
public readonly vpcEndpoints: RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList</a>

---

##### `vpcEndpointsInput`<sup>Optional</sup> <a name="vpcEndpointsInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpointsInput"></a>

```typescript
public readonly vpcEndpointsInput: IResolvable | RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessWorkgroupWorkgroupEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a>

---


### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get"></a>

```typescript
public get(index: number): RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>[]

---


### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get"></a>

```typescript
public get(index: number): RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>[]

---


### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetNetworkInterfaceId"></a>

```typescript
public resetNetworkInterfaceId(): void
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetPrivateIpAddress"></a>

```typescript
public resetPrivateIpAddress(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddressInput"></a>

```typescript
public readonly privateIpAddressInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>

---


### RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetNetworkInterfaces">resetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.putNetworkInterfaces"></a>

```typescript
public putNetworkInterfaces(value: IResolvable | RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>[]

---

##### `resetNetworkInterfaces` <a name="resetNetworkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetNetworkInterfaces"></a>

```typescript
public resetNetworkInterfaces(): void
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetVpcEndpointId"></a>

```typescript
public resetVpcEndpointId(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resetVpcId"></a>

```typescript
public resetVpcId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList</a>

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfacesInput"></a>

```typescript
public readonly networkInterfacesInput: IResolvable | RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>[]

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">RedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>

---


### RedshiftserverlessWorkgroupWorkgroupOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putEndpoint">putEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putPricePerformanceTarget">putPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resetPricePerformanceTarget">resetPricePerformanceTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndpoint` <a name="putEndpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putEndpoint"></a>

```typescript
public putEndpoint(value: RedshiftserverlessWorkgroupWorkgroupEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a>

---

##### `putPricePerformanceTarget` <a name="putPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putPricePerformanceTarget"></a>

```typescript
public putPricePerformanceTarget(value: RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.putPricePerformanceTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a>

---

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetPricePerformanceTarget` <a name="resetPricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.resetPricePerformanceTarget"></a>

```typescript
public resetPricePerformanceTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.baseCapacity">baseCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.configParameters">configParameters</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList">RedshiftserverlessWorkgroupWorkgroupConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference">RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTarget">pricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.publiclyAccessible">publiclyAccessible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.trackName">trackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupArn">workgroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupId">workgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupName">workgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpointInput">endpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTargetInput">pricePerformanceTargetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseCapacity`<sup>Required</sup> <a name="baseCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.baseCapacity"></a>

```typescript
public readonly baseCapacity: number;
```

- *Type:* number

---

##### `configParameters`<sup>Required</sup> <a name="configParameters" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.configParameters"></a>

```typescript
public readonly configParameters: RedshiftserverlessWorkgroupWorkgroupConfigParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupConfigParametersList">RedshiftserverlessWorkgroupWorkgroupConfigParametersList</a>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference">RedshiftserverlessWorkgroupWorkgroupEndpointOutputReference</a>

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="enhancedVpcRouting" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.enhancedVpcRouting"></a>

```typescript
public readonly enhancedVpcRouting: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `pricePerformanceTarget`<sup>Required</sup> <a name="pricePerformanceTarget" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTarget"></a>

```typescript
public readonly pricePerformanceTarget: RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference</a>

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `trackName`<sup>Required</sup> <a name="trackName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.trackName"></a>

```typescript
public readonly trackName: string;
```

- *Type:* string

---

##### `workgroupArn`<sup>Required</sup> <a name="workgroupArn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupArn"></a>

```typescript
public readonly workgroupArn: string;
```

- *Type:* string

---

##### `workgroupId`<sup>Required</sup> <a name="workgroupId" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupId"></a>

```typescript
public readonly workgroupId: string;
```

- *Type:* string

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: IResolvable | RedshiftserverlessWorkgroupWorkgroupEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupEndpoint">RedshiftserverlessWorkgroupWorkgroupEndpoint</a>

---

##### `pricePerformanceTargetInput`<sup>Optional</sup> <a name="pricePerformanceTargetInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTargetInput"></a>

```typescript
public readonly pricePerformanceTargetInput: IResolvable | RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessWorkgroupWorkgroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroup">RedshiftserverlessWorkgroupWorkgroup</a>

---


### RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference <a name="RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer"></a>

```typescript
import { redshiftserverlessWorkgroup } from '@cdktn/provider-awscc'

new redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resetLevel"></a>

```typescript
public resetLevel(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.levelInput">levelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.level">level</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.levelInput"></a>

```typescript
public readonly levelInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessWorkgroup.RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">RedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a>

---




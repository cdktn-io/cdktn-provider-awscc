# `dmsReplicationInstance` Submodule <a name="`dmsReplicationInstance` Submodule" id="@cdktn/provider-awscc.dmsReplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationInstance <a name="DmsReplicationInstance" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance awscc_dms_replication_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer"></a>

```typescript
import { dmsReplicationInstance } from '@cdktn/provider-awscc'

new dmsReplicationInstance.DmsReplicationInstance(scope: Construct, id: string, config: DmsReplicationInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig">DmsReplicationInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig">DmsReplicationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAllocatedStorage">resetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAllowMajorVersionUpgrade">resetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetDnsNameServers">resetDnsNameServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetMultiAz">resetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetReplicationInstanceIdentifier">resetReplicationInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetReplicationSubnetGroupIdentifier">resetReplicationSubnetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetResourceIdentifier">resetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.putTags"></a>

```typescript
public putTags(value: IResolvable | DmsReplicationInstanceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]

---

##### `resetAllocatedStorage` <a name="resetAllocatedStorage" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAllocatedStorage"></a>

```typescript
public resetAllocatedStorage(): void
```

##### `resetAllowMajorVersionUpgrade` <a name="resetAllowMajorVersionUpgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAllowMajorVersionUpgrade"></a>

```typescript
public resetAllowMajorVersionUpgrade(): void
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAutoMinorVersionUpgrade"></a>

```typescript
public resetAutoMinorVersionUpgrade(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetDnsNameServers` <a name="resetDnsNameServers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetDnsNameServers"></a>

```typescript
public resetDnsNameServers(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetMultiAz` <a name="resetMultiAz" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetMultiAz"></a>

```typescript
public resetMultiAz(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetPubliclyAccessible"></a>

```typescript
public resetPubliclyAccessible(): void
```

##### `resetReplicationInstanceIdentifier` <a name="resetReplicationInstanceIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetReplicationInstanceIdentifier"></a>

```typescript
public resetReplicationInstanceIdentifier(): void
```

##### `resetReplicationSubnetGroupIdentifier` <a name="resetReplicationSubnetGroupIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetReplicationSubnetGroupIdentifier"></a>

```typescript
public resetReplicationSubnetGroupIdentifier(): void
```

##### `resetResourceIdentifier` <a name="resetResourceIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetResourceIdentifier"></a>

```typescript
public resetResourceIdentifier(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsReplicationInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isConstruct"></a>

```typescript
import { dmsReplicationInstance } from '@cdktn/provider-awscc'

dmsReplicationInstance.DmsReplicationInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement"></a>

```typescript
import { dmsReplicationInstance } from '@cdktn/provider-awscc'

dmsReplicationInstance.DmsReplicationInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource"></a>

```typescript
import { dmsReplicationInstance } from '@cdktn/provider-awscc'

dmsReplicationInstance.DmsReplicationInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport"></a>

```typescript
import { dmsReplicationInstance } from '@cdktn/provider-awscc'

dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DmsReplicationInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsReplicationInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsReplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsReplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceArn">replicationInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePrivateIpAddresses">replicationInstancePrivateIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePublicIpAddresses">replicationInstancePublicIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList">DmsReplicationInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgradeInput">allowMajorVersionUpgradeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServersInput">dnsNameServersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.multiAzInput">multiAzInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClassInput">replicationInstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdentifierInput">replicationInstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdentifierInput">replicationSubnetGroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.resourceIdentifierInput">resourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServers">dnsNameServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.multiAz">multiAz</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClass">replicationInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdentifier">replicationInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdentifier">replicationSubnetGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="replicationInstanceArn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceArn"></a>

```typescript
public readonly replicationInstanceArn: string;
```

- *Type:* string

---

##### `replicationInstancePrivateIpAddresses`<sup>Required</sup> <a name="replicationInstancePrivateIpAddresses" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePrivateIpAddresses"></a>

```typescript
public readonly replicationInstancePrivateIpAddresses: string;
```

- *Type:* string

---

##### `replicationInstancePublicIpAddresses`<sup>Required</sup> <a name="replicationInstancePublicIpAddresses" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstancePublicIpAddresses"></a>

```typescript
public readonly replicationInstancePublicIpAddresses: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tags"></a>

```typescript
public readonly tags: DmsReplicationInstanceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList">DmsReplicationInstanceTagsList</a>

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorageInput"></a>

```typescript
public readonly allocatedStorageInput: number;
```

- *Type:* number

---

##### `allowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="allowMajorVersionUpgradeInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgradeInput"></a>

```typescript
public readonly allowMajorVersionUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgradeInput"></a>

```typescript
public readonly autoMinorVersionUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `dnsNameServersInput`<sup>Optional</sup> <a name="dnsNameServersInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServersInput"></a>

```typescript
public readonly dnsNameServersInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.multiAzInput"></a>

```typescript
public readonly multiAzInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessibleInput"></a>

```typescript
public readonly publiclyAccessibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replicationInstanceClassInput`<sup>Optional</sup> <a name="replicationInstanceClassInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClassInput"></a>

```typescript
public readonly replicationInstanceClassInput: string;
```

- *Type:* string

---

##### `replicationInstanceIdentifierInput`<sup>Optional</sup> <a name="replicationInstanceIdentifierInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdentifierInput"></a>

```typescript
public readonly replicationInstanceIdentifierInput: string;
```

- *Type:* string

---

##### `replicationSubnetGroupIdentifierInput`<sup>Optional</sup> <a name="replicationSubnetGroupIdentifierInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdentifierInput"></a>

```typescript
public readonly replicationSubnetGroupIdentifierInput: string;
```

- *Type:* string

---

##### `resourceIdentifierInput`<sup>Optional</sup> <a name="resourceIdentifierInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.resourceIdentifierInput"></a>

```typescript
public readonly resourceIdentifierInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DmsReplicationInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

---

##### `allowMajorVersionUpgrade`<sup>Required</sup> <a name="allowMajorVersionUpgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.allowMajorVersionUpgrade"></a>

```typescript
public readonly allowMajorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `dnsNameServers`<sup>Required</sup> <a name="dnsNameServers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.dnsNameServers"></a>

```typescript
public readonly dnsNameServers: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.multiAz"></a>

```typescript
public readonly multiAz: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="replicationInstanceClass" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceClass"></a>

```typescript
public readonly replicationInstanceClass: string;
```

- *Type:* string

---

##### `replicationInstanceIdentifier`<sup>Required</sup> <a name="replicationInstanceIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationInstanceIdentifier"></a>

```typescript
public readonly replicationInstanceIdentifier: string;
```

- *Type:* string

---

##### `replicationSubnetGroupIdentifier`<sup>Required</sup> <a name="replicationSubnetGroupIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.replicationSubnetGroupIdentifier"></a>

```typescript
public readonly replicationSubnetGroupIdentifier: string;
```

- *Type:* string

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationInstanceConfig <a name="DmsReplicationInstanceConfig" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.Initializer"></a>

```typescript
import { dmsReplicationInstance } from '@cdktn/provider-awscc'

const dmsReplicationInstanceConfig: dmsReplicationInstance.DmsReplicationInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceClass">replicationInstanceClass</a></code> | <code>string</code> | The compute and memory capacity of the replication instance as defined for the specified replication instance class. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | The amount of storage (in gigabytes) to be initially allocated for the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates that major version upgrades are allowed. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The Availability Zone that the replication instance will be created in. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dnsNameServers">dnsNameServers</a></code> | <code>string</code> | A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | The engine version number of the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | An AWS KMS key identifier that is used to encrypt the data on the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.multiAz">multiAz</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the replication instance is a Multi-AZ deployment. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.networkType">networkType</a></code> | <code>string</code> | The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | The weekly time range during which system maintenance can occur, in UTC. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies the accessibility options for the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceIdentifier">replicationInstanceIdentifier</a></code> | <code>string</code> | The replication instance identifier. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationSubnetGroupIdentifier">replicationSubnetGroupIdentifier</a></code> | <code>string</code> | A subnet group to associate with the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]</code> | One or more tags to be assigned to the replication instance. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | Specifies the virtual private cloud (VPC) security group to be used with the replication instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="replicationInstanceClass" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceClass"></a>

```typescript
public readonly replicationInstanceClass: string;
```

- *Type:* string

The compute and memory capacity of the replication instance as defined for the specified replication instance class.

For example, to specify the instance class dms.c4.large, set this parameter to `"dms.c4.large"`. For more information on the settings and capacities for the available replication instance classes, see [Selecting the right AWS DMS replication instance for your migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth) in the AWS Database Migration Service User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_instance_class DmsReplicationInstance#replication_instance_class}

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

The amount of storage (in gigabytes) to be initially allocated for the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#allocated_storage DmsReplicationInstance#allocated_storage}

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.allowMajorVersionUpgrade"></a>

```typescript
public readonly allowMajorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates that major version upgrades are allowed.

Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible.

This parameter must be set to `true` when specifying a value for the `EngineVersion` parameter that is a different major version than the replication instance's current version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window.

This parameter defaults to `true`.

Default: `true`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The Availability Zone that the replication instance will be created in.

The default value is a random, system-chosen Availability Zone in the endpoint's AWS Region, for example `us-east-1d`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#availability_zone DmsReplicationInstance#availability_zone}

---

##### `dnsNameServers`<sup>Optional</sup> <a name="dnsNameServers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.dnsNameServers"></a>

```typescript
public readonly dnsNameServers: string;
```

- *Type:* string

A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database.

This list overrides the default name servers supported by the replication instance. You can specify a comma-separated list of internet addresses for up to four on-premise DNS name servers. For example: `"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#dns_name_servers DmsReplicationInstance#dns_name_servers}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

The engine version number of the replication instance.

If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#engine_version DmsReplicationInstance#engine_version}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

An AWS KMS key identifier that is used to encrypt the data on the replication instance.

If you don't specify a value for the `KmsKeyId` parameter, AWS DMS uses your default encryption key.

AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#kms_key_id DmsReplicationInstance#kms_key_id}

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.multiAz"></a>

```typescript
public readonly multiAz: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the replication instance is a Multi-AZ deployment.

You can't set the `AvailabilityZone` parameter if the Multi-AZ parameter is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#multi_az DmsReplicationInstance#multi_az}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing.

IPv6 only is not yet supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#network_type DmsReplicationInstance#network_type}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

The weekly time range during which system maintenance can occur, in UTC.

Format: `ddd:hh24:mi-ddd:hh24:mi`

Default: A 30-minute window selected at random from an 8-hour block of time per AWS Region, occurring on a random day of the week.

Valid days (`ddd`): `Mon` | `Tue` | `Wed` | `Thu` | `Fri` | `Sat` | `Sun`

Constraints: Minimum 30-minute window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies the accessibility options for the replication instance.

A value of `true` represents an instance with a public IP address. A value of `false` represents an instance with a private IP address. The default value is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#publicly_accessible DmsReplicationInstance#publicly_accessible}

---

##### `replicationInstanceIdentifier`<sup>Optional</sup> <a name="replicationInstanceIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationInstanceIdentifier"></a>

```typescript
public readonly replicationInstanceIdentifier: string;
```

- *Type:* string

The replication instance identifier. This parameter is stored as a lowercase string.

Constraints:
- Must contain 1-63 alphanumeric characters or hyphens.
- First character must be a letter.
- Can't end with a hyphen or contain two consecutive hyphens.

Example: `myrepinstance`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_instance_identifier DmsReplicationInstance#replication_instance_identifier}

---

##### `replicationSubnetGroupIdentifier`<sup>Optional</sup> <a name="replicationSubnetGroupIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.replicationSubnetGroupIdentifier"></a>

```typescript
public readonly replicationSubnetGroupIdentifier: string;
```

- *Type:* string

A subnet group to associate with the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_subnet_group_identifier DmsReplicationInstance#replication_subnet_group_identifier}

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object.

The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1`. For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1`. If you don't specify a `ResourceIdentifier` value, AWS DMS generates a default identifier value for the end of `EndpointArn`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#resource_identifier DmsReplicationInstance#resource_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DmsReplicationInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]

One or more tags to be assigned to the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#tags DmsReplicationInstance#tags}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

Specifies the virtual private cloud (VPC) security group to be used with the replication instance.

The VPC security group must work with the VPC containing the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}

---

### DmsReplicationInstanceTags <a name="DmsReplicationInstanceTags" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.Initializer"></a>

```typescript
import { dmsReplicationInstance } from '@cdktn/provider-awscc'

const dmsReplicationInstanceTags: dmsReplicationInstance.DmsReplicationInstanceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#key DmsReplicationInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#value DmsReplicationInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#key DmsReplicationInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#value DmsReplicationInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReplicationInstanceTagsList <a name="DmsReplicationInstanceTagsList" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer"></a>

```typescript
import { dmsReplicationInstance } from '@cdktn/provider-awscc'

new dmsReplicationInstance.DmsReplicationInstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.get"></a>

```typescript
public get(index: number): DmsReplicationInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsReplicationInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>[]

---


### DmsReplicationInstanceTagsOutputReference <a name="DmsReplicationInstanceTagsOutputReference" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer"></a>

```typescript
import { dmsReplicationInstance } from '@cdktn/provider-awscc'

new dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsReplicationInstanceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsReplicationInstance.DmsReplicationInstanceTags">DmsReplicationInstanceTags</a>

---




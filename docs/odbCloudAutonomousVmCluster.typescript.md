# `odbCloudAutonomousVmCluster` Submodule <a name="`odbCloudAutonomousVmCluster` Submodule" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbCloudAutonomousVmCluster <a name="OdbCloudAutonomousVmCluster" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster awscc_odb_cloud_autonomous_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster(scope: Construct, id: string, config?: OdbCloudAutonomousVmClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig">OdbCloudAutonomousVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig">OdbCloudAutonomousVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putIamRoles">putIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetAutonomousDataStorageSizeInTBs">resetAutonomousDataStorageSizeInTBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetCloudExadataInfrastructureId">resetCloudExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetCpuCoreCountPerNode">resetCpuCoreCountPerNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDbServers">resetDbServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIamRoles">resetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIsMtlsEnabledVmCluster">resetIsMtlsEnabledVmCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMemoryPerOracleComputeUnitInGBs">resetMemoryPerOracleComputeUnitInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOdbNetworkId">resetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetScanListenerPortNonTls">resetScanListenerPortNonTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetScanListenerPortTls">resetScanListenerPortTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTotalContainerDatabases">resetTotalContainerDatabases</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIamRoles` <a name="putIamRoles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putIamRoles"></a>

```typescript
public putIamRoles(value: IResolvable | OdbCloudAutonomousVmClusterIamRoles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putIamRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>[]

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: OdbCloudAutonomousVmClusterMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putTags"></a>

```typescript
public putTags(value: IResolvable | OdbCloudAutonomousVmClusterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>[]

---

##### `resetAutonomousDataStorageSizeInTBs` <a name="resetAutonomousDataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetAutonomousDataStorageSizeInTBs"></a>

```typescript
public resetAutonomousDataStorageSizeInTBs(): void
```

##### `resetCloudExadataInfrastructureId` <a name="resetCloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetCloudExadataInfrastructureId"></a>

```typescript
public resetCloudExadataInfrastructureId(): void
```

##### `resetCpuCoreCountPerNode` <a name="resetCpuCoreCountPerNode" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetCpuCoreCountPerNode"></a>

```typescript
public resetCpuCoreCountPerNode(): void
```

##### `resetDbServers` <a name="resetDbServers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDbServers"></a>

```typescript
public resetDbServers(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIamRoles"></a>

```typescript
public resetIamRoles(): void
```

##### `resetIsMtlsEnabledVmCluster` <a name="resetIsMtlsEnabledVmCluster" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetIsMtlsEnabledVmCluster"></a>

```typescript
public resetIsMtlsEnabledVmCluster(): void
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetLicenseModel"></a>

```typescript
public resetLicenseModel(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetMemoryPerOracleComputeUnitInGBs` <a name="resetMemoryPerOracleComputeUnitInGBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetMemoryPerOracleComputeUnitInGBs"></a>

```typescript
public resetMemoryPerOracleComputeUnitInGBs(): void
```

##### `resetOdbNetworkId` <a name="resetOdbNetworkId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetOdbNetworkId"></a>

```typescript
public resetOdbNetworkId(): void
```

##### `resetScanListenerPortNonTls` <a name="resetScanListenerPortNonTls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetScanListenerPortNonTls"></a>

```typescript
public resetScanListenerPortNonTls(): void
```

##### `resetScanListenerPortTls` <a name="resetScanListenerPortTls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetScanListenerPortTls"></a>

```typescript
public resetScanListenerPortTls(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

##### `resetTotalContainerDatabases` <a name="resetTotalContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.resetTotalContainerDatabases"></a>

```typescript
public resetTotalContainerDatabases(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OdbCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OdbCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OdbCloudAutonomousVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OdbCloudAutonomousVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OdbCloudAutonomousVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage">autonomousDataStoragePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTBs">availableAutonomousDataStorageSizeInTBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableContainerDatabases">availableContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableCpus">availableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterArn">cloudAutonomousVmClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuPercentage">cpuPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInGBs">dataStorageSizeInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInTBs">dataStorageSizeInTBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbNodeStorageSizeInGBs">dbNodeStorageSizeInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.exadataStorageInTBsLowestScaledValue">exadataStorageInTBsLowestScaledValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.iamRoles">iamRoles</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList">OdbCloudAutonomousVmClusterIamRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference">OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue">maxAcdsLowestScaledValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memorySizeInGBs">memorySizeInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases">nonProvisionableAutonomousContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases">provisionableAutonomousContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases">provisionedAutonomousContainerDatabases</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedCpus">provisionedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reclaimableCpus">reclaimableCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reservedCpus">reservedCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList">OdbCloudAutonomousVmClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBsInput">autonomousDataStorageSizeInTBsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNodeInput">cpuCoreCountPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServersInput">dbServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.iamRolesInput">iamRolesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmClusterInput">isMtlsEnabledVmClusterInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBsInput">memoryPerOracleComputeUnitInGBsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkIdInput">odbNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTlsInput">scanListenerPortNonTlsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTlsInput">scanListenerPortTlsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabasesInput">totalContainerDatabasesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBs">autonomousDataStorageSizeInTBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode">cpuCoreCountPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServers">dbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster">isMtlsEnabledVmCluster</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBs">memoryPerOracleComputeUnitInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTls">scanListenerPortNonTls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTls">scanListenerPortTls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabases">totalContainerDatabases</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autonomousDataStoragePercentage`<sup>Required</sup> <a name="autonomousDataStoragePercentage" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage"></a>

```typescript
public readonly autonomousDataStoragePercentage: number;
```

- *Type:* number

---

##### `availableAutonomousDataStorageSizeInTBs`<sup>Required</sup> <a name="availableAutonomousDataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTBs"></a>

```typescript
public readonly availableAutonomousDataStorageSizeInTBs: number;
```

- *Type:* number

---

##### `availableContainerDatabases`<sup>Required</sup> <a name="availableContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableContainerDatabases"></a>

```typescript
public readonly availableContainerDatabases: number;
```

- *Type:* number

---

##### `availableCpus`<sup>Required</sup> <a name="availableCpus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.availableCpus"></a>

```typescript
public readonly availableCpus: number;
```

- *Type:* number

---

##### `cloudAutonomousVmClusterArn`<sup>Required</sup> <a name="cloudAutonomousVmClusterArn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterArn"></a>

```typescript
public readonly cloudAutonomousVmClusterArn: string;
```

- *Type:* string

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterId"></a>

```typescript
public readonly cloudAutonomousVmClusterId: string;
```

- *Type:* string

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `cpuPercentage`<sup>Required</sup> <a name="cpuPercentage" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuPercentage"></a>

```typescript
public readonly cpuPercentage: number;
```

- *Type:* number

---

##### `dataStorageSizeInGBs`<sup>Required</sup> <a name="dataStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInGBs"></a>

```typescript
public readonly dataStorageSizeInGBs: number;
```

- *Type:* number

---

##### `dataStorageSizeInTBs`<sup>Required</sup> <a name="dataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dataStorageSizeInTBs"></a>

```typescript
public readonly dataStorageSizeInTBs: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGBs`<sup>Required</sup> <a name="dbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbNodeStorageSizeInGBs"></a>

```typescript
public readonly dbNodeStorageSizeInGBs: number;
```

- *Type:* number

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `exadataStorageInTBsLowestScaledValue`<sup>Required</sup> <a name="exadataStorageInTBsLowestScaledValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.exadataStorageInTBsLowestScaledValue"></a>

```typescript
public readonly exadataStorageInTBsLowestScaledValue: number;
```

- *Type:* number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.iamRoles"></a>

```typescript
public readonly iamRoles: OdbCloudAutonomousVmClusterIamRolesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList">OdbCloudAutonomousVmClusterIamRolesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference">OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference</a>

---

##### `maxAcdsLowestScaledValue`<sup>Required</sup> <a name="maxAcdsLowestScaledValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue"></a>

```typescript
public readonly maxAcdsLowestScaledValue: number;
```

- *Type:* number

---

##### `memorySizeInGBs`<sup>Required</sup> <a name="memorySizeInGBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memorySizeInGBs"></a>

```typescript
public readonly memorySizeInGBs: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nonProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="nonProvisionableAutonomousContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases"></a>

```typescript
public readonly nonProvisionableAutonomousContainerDatabases: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociResourceAnchorName"></a>

```typescript
public readonly ociResourceAnchorName: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `provisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="provisionableAutonomousContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases"></a>

```typescript
public readonly provisionableAutonomousContainerDatabases: number;
```

- *Type:* number

---

##### `provisionedAutonomousContainerDatabases`<sup>Required</sup> <a name="provisionedAutonomousContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases"></a>

```typescript
public readonly provisionedAutonomousContainerDatabases: number;
```

- *Type:* number

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.provisionedCpus"></a>

```typescript
public readonly provisionedCpus: number;
```

- *Type:* number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reclaimableCpus"></a>

```typescript
public readonly reclaimableCpus: number;
```

- *Type:* number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.reservedCpus"></a>

```typescript
public readonly reservedCpus: number;
```

- *Type:* number

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tags"></a>

```typescript
public readonly tags: OdbCloudAutonomousVmClusterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList">OdbCloudAutonomousVmClusterTagsList</a>

---

##### `autonomousDataStorageSizeInTBsInput`<sup>Optional</sup> <a name="autonomousDataStorageSizeInTBsInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBsInput"></a>

```typescript
public readonly autonomousDataStorageSizeInTBsInput: number;
```

- *Type:* number

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```typescript
public readonly cloudExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `cpuCoreCountPerNodeInput`<sup>Optional</sup> <a name="cpuCoreCountPerNodeInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNodeInput"></a>

```typescript
public readonly cpuCoreCountPerNodeInput: number;
```

- *Type:* number

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServersInput"></a>

```typescript
public readonly dbServersInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.iamRolesInput"></a>

```typescript
public readonly iamRolesInput: IResolvable | OdbCloudAutonomousVmClusterIamRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>[]

---

##### `isMtlsEnabledVmClusterInput`<sup>Optional</sup> <a name="isMtlsEnabledVmClusterInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmClusterInput"></a>

```typescript
public readonly isMtlsEnabledVmClusterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>

---

##### `memoryPerOracleComputeUnitInGBsInput`<sup>Optional</sup> <a name="memoryPerOracleComputeUnitInGBsInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBsInput"></a>

```typescript
public readonly memoryPerOracleComputeUnitInGBsInput: number;
```

- *Type:* number

---

##### `odbNetworkIdInput`<sup>Optional</sup> <a name="odbNetworkIdInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkIdInput"></a>

```typescript
public readonly odbNetworkIdInput: string;
```

- *Type:* string

---

##### `scanListenerPortNonTlsInput`<sup>Optional</sup> <a name="scanListenerPortNonTlsInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTlsInput"></a>

```typescript
public readonly scanListenerPortNonTlsInput: number;
```

- *Type:* number

---

##### `scanListenerPortTlsInput`<sup>Optional</sup> <a name="scanListenerPortTlsInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTlsInput"></a>

```typescript
public readonly scanListenerPortTlsInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OdbCloudAutonomousVmClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>[]

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `totalContainerDatabasesInput`<sup>Optional</sup> <a name="totalContainerDatabasesInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabasesInput"></a>

```typescript
public readonly totalContainerDatabasesInput: number;
```

- *Type:* number

---

##### `autonomousDataStorageSizeInTBs`<sup>Required</sup> <a name="autonomousDataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBs"></a>

```typescript
public readonly autonomousDataStorageSizeInTBs: number;
```

- *Type:* number

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

---

##### `cpuCoreCountPerNode`<sup>Required</sup> <a name="cpuCoreCountPerNode" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode"></a>

```typescript
public readonly cpuCoreCountPerNode: number;
```

- *Type:* number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `isMtlsEnabledVmCluster`<sup>Required</sup> <a name="isMtlsEnabledVmCluster" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster"></a>

```typescript
public readonly isMtlsEnabledVmCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `memoryPerOracleComputeUnitInGBs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBs"></a>

```typescript
public readonly memoryPerOracleComputeUnitInGBs: number;
```

- *Type:* number

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

---

##### `scanListenerPortNonTls`<sup>Required</sup> <a name="scanListenerPortNonTls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortNonTls"></a>

```typescript
public readonly scanListenerPortNonTls: number;
```

- *Type:* number

---

##### `scanListenerPortTls`<sup>Required</sup> <a name="scanListenerPortTls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.scanListenerPortTls"></a>

```typescript
public readonly scanListenerPortTls: number;
```

- *Type:* number

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `totalContainerDatabases`<sup>Required</sup> <a name="totalContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.totalContainerDatabases"></a>

```typescript
public readonly totalContainerDatabases: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbCloudAutonomousVmClusterConfig <a name="OdbCloudAutonomousVmClusterConfig" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

const odbCloudAutonomousVmClusterConfig: odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.autonomousDataStorageSizeInTBs">autonomousDataStorageSizeInTBs</a></code> | <code>number</code> | The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cpuCoreCountPerNode">cpuCoreCountPerNode</a></code> | <code>number</code> | The number of CPU cores enabled per node in the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dbServers">dbServers</a></code> | <code>string[]</code> | The list of database servers associated with the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.description">description</a></code> | <code>string</code> | The user-provided description of the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.iamRoles">iamRoles</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>[]</code> | The AWS Identity and Access Management (IAM) service roles associated with the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.isMtlsEnabledVmCluster">isMtlsEnabledVmCluster</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | The Oracle license model that applies to the Autonomous VM cluster. Valid values are LICENSE_INCLUDED or BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a></code> | The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.memoryPerOracleComputeUnitInGBs">memoryPerOracleComputeUnitInGBs</a></code> | <code>number</code> | The amount of memory allocated per Oracle Compute Unit, in GB. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | The unique identifier of the ODB network associated with this Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortNonTls">scanListenerPortNonTls</a></code> | <code>number</code> | The SCAN listener port for non-TLS (TCP) protocol. The default is 1521. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortTls">scanListenerPortTls</a></code> | <code>number</code> | The SCAN listener port for TLS (TCP) protocol. The default is 2484. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>[]</code> | The tags associated with the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone of the Autonomous VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.totalContainerDatabases">totalContainerDatabases</a></code> | <code>number</code> | The total number of Autonomous Container Databases that can be created with the allocated local storage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autonomousDataStorageSizeInTBs`<sup>Optional</sup> <a name="autonomousDataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.autonomousDataStorageSizeInTBs"></a>

```typescript
public readonly autonomousDataStorageSizeInTBs: number;
```

- *Type:* number

The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#autonomous_data_storage_size_in_t_bs OdbCloudAutonomousVmCluster#autonomous_data_storage_size_in_t_bs}

---

##### `cloudExadataInfrastructureId`<sup>Optional</sup> <a name="cloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#cloud_exadata_infrastructure_id OdbCloudAutonomousVmCluster#cloud_exadata_infrastructure_id}

---

##### `cpuCoreCountPerNode`<sup>Optional</sup> <a name="cpuCoreCountPerNode" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.cpuCoreCountPerNode"></a>

```typescript
public readonly cpuCoreCountPerNode: number;
```

- *Type:* number

The number of CPU cores enabled per node in the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#cpu_core_count_per_node OdbCloudAutonomousVmCluster#cpu_core_count_per_node}

---

##### `dbServers`<sup>Optional</sup> <a name="dbServers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

The list of database servers associated with the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#db_servers OdbCloudAutonomousVmCluster#db_servers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The user-provided description of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#description OdbCloudAutonomousVmCluster#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#display_name OdbCloudAutonomousVmCluster#display_name}

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.iamRoles"></a>

```typescript
public readonly iamRoles: IResolvable | OdbCloudAutonomousVmClusterIamRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>[]

The AWS Identity and Access Management (IAM) service roles associated with the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#iam_roles OdbCloudAutonomousVmCluster#iam_roles}

---

##### `isMtlsEnabledVmCluster`<sup>Optional</sup> <a name="isMtlsEnabledVmCluster" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.isMtlsEnabledVmCluster"></a>

```typescript
public readonly isMtlsEnabledVmCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#is_mtls_enabled_vm_cluster OdbCloudAutonomousVmCluster#is_mtls_enabled_vm_cluster}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

The Oracle license model that applies to the Autonomous VM cluster. Valid values are LICENSE_INCLUDED or BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#license_model OdbCloudAutonomousVmCluster#license_model}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: OdbCloudAutonomousVmClusterMaintenanceWindow;
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>

The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#maintenance_window OdbCloudAutonomousVmCluster#maintenance_window}

---

##### `memoryPerOracleComputeUnitInGBs`<sup>Optional</sup> <a name="memoryPerOracleComputeUnitInGBs" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.memoryPerOracleComputeUnitInGBs"></a>

```typescript
public readonly memoryPerOracleComputeUnitInGBs: number;
```

- *Type:* number

The amount of memory allocated per Oracle Compute Unit, in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#memory_per_oracle_compute_unit_in_g_bs OdbCloudAutonomousVmCluster#memory_per_oracle_compute_unit_in_g_bs}

---

##### `odbNetworkId`<sup>Optional</sup> <a name="odbNetworkId" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

The unique identifier of the ODB network associated with this Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#odb_network_id OdbCloudAutonomousVmCluster#odb_network_id}

---

##### `scanListenerPortNonTls`<sup>Optional</sup> <a name="scanListenerPortNonTls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortNonTls"></a>

```typescript
public readonly scanListenerPortNonTls: number;
```

- *Type:* number

The SCAN listener port for non-TLS (TCP) protocol. The default is 1521.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#scan_listener_port_non_tls OdbCloudAutonomousVmCluster#scan_listener_port_non_tls}

---

##### `scanListenerPortTls`<sup>Optional</sup> <a name="scanListenerPortTls" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.scanListenerPortTls"></a>

```typescript
public readonly scanListenerPortTls: number;
```

- *Type:* number

The SCAN listener port for TLS (TCP) protocol. The default is 2484.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#scan_listener_port_tls OdbCloudAutonomousVmCluster#scan_listener_port_tls}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | OdbCloudAutonomousVmClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>[]

The tags associated with the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#tags OdbCloudAutonomousVmCluster#tags}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone of the Autonomous VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#time_zone OdbCloudAutonomousVmCluster#time_zone}

---

##### `totalContainerDatabases`<sup>Optional</sup> <a name="totalContainerDatabases" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterConfig.property.totalContainerDatabases"></a>

```typescript
public readonly totalContainerDatabases: number;
```

- *Type:* number

The total number of Autonomous Container Databases that can be created with the allocated local storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#total_container_databases OdbCloudAutonomousVmCluster#total_container_databases}

---

### OdbCloudAutonomousVmClusterIamRoles <a name="OdbCloudAutonomousVmClusterIamRoles" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

const odbCloudAutonomousVmClusterIamRoles: odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.awsIntegration">awsIntegration</a></code> | <code>string</code> | The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.status">status</a></code> | <code>string</code> | The current status of the AWS Identity and Access Management (IAM) service role. |

---

##### `awsIntegration`<sup>Optional</sup> <a name="awsIntegration" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.awsIntegration"></a>

```typescript
public readonly awsIntegration: string;
```

- *Type:* string

The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#aws_integration OdbCloudAutonomousVmCluster#aws_integration}

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#iam_role_arn OdbCloudAutonomousVmCluster#iam_role_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The current status of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#status OdbCloudAutonomousVmCluster#status}

---

### OdbCloudAutonomousVmClusterMaintenanceWindow <a name="OdbCloudAutonomousVmClusterMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

const odbCloudAutonomousVmClusterMaintenanceWindow: odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | The days of the week when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | The hours of the day when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | The lead time in weeks before the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.months">months</a></code> | <code>string[]</code> | The months when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.preference">preference</a></code> | <code>string</code> | The preference for the maintenance window scheduling. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | The weeks of the month when maintenance can be performed. |

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

The days of the week when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#days_of_week OdbCloudAutonomousVmCluster#days_of_week}

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

The hours of the day when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#hours_of_day OdbCloudAutonomousVmCluster#hours_of_day}

---

##### `leadTimeInWeeks`<sup>Optional</sup> <a name="leadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

The lead time in weeks before the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#lead_time_in_weeks OdbCloudAutonomousVmCluster#lead_time_in_weeks}

---

##### `months`<sup>Optional</sup> <a name="months" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

The months when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#months OdbCloudAutonomousVmCluster#months}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

The preference for the maintenance window scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#preference OdbCloudAutonomousVmCluster#preference}

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

The weeks of the month when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#weeks_of_month OdbCloudAutonomousVmCluster#weeks_of_month}

---

### OdbCloudAutonomousVmClusterTags <a name="OdbCloudAutonomousVmClusterTags" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

const odbCloudAutonomousVmClusterTags: odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_cloud_autonomous_vm_cluster#value OdbCloudAutonomousVmCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbCloudAutonomousVmClusterIamRolesList <a name="OdbCloudAutonomousVmClusterIamRolesList" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.get"></a>

```typescript
public get(index: number): OdbCloudAutonomousVmClusterIamRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudAutonomousVmClusterIamRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>[]

---


### OdbCloudAutonomousVmClusterIamRolesOutputReference <a name="OdbCloudAutonomousVmClusterIamRolesOutputReference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetAwsIntegration">resetAwsIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsIntegration` <a name="resetAwsIntegration" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetAwsIntegration"></a>

```typescript
public resetAwsIntegration(): void
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetIamRoleArn"></a>

```typescript
public resetIamRoleArn(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegrationInput">awsIntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegration">awsIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsIntegrationInput`<sup>Optional</sup> <a name="awsIntegrationInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegrationInput"></a>

```typescript
public readonly awsIntegrationInput: string;
```

- *Type:* string

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `awsIntegration`<sup>Required</sup> <a name="awsIntegration" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegration"></a>

```typescript
public readonly awsIntegration: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudAutonomousVmClusterIamRoles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterIamRoles">OdbCloudAutonomousVmClusterIamRoles</a>

---


### OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference <a name="OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetLeadTimeInWeeks">resetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```typescript
public resetHoursOfDay(): void
```

##### `resetLeadTimeInWeeks` <a name="resetLeadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```typescript
public resetLeadTimeInWeeks(): void
```

##### `resetMonths` <a name="resetMonths" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetMonths"></a>

```typescript
public resetMonths(): void
```

##### `resetPreference` <a name="resetPreference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetPreference"></a>

```typescript
public resetPreference(): void
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```typescript
public resetWeeksOfMonth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">leadTimeInWeeksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.monthsInput">monthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months">months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```typescript
public readonly hoursOfDayInput: number[];
```

- *Type:* number[]

---

##### `leadTimeInWeeksInput`<sup>Optional</sup> <a name="leadTimeInWeeksInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```typescript
public readonly leadTimeInWeeksInput: number;
```

- *Type:* number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.monthsInput"></a>

```typescript
public readonly monthsInput: string[];
```

- *Type:* string[]

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preferenceInput"></a>

```typescript
public readonly preferenceInput: string;
```

- *Type:* string

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```typescript
public readonly weeksOfMonthInput: number[];
```

- *Type:* number[]

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudAutonomousVmClusterMaintenanceWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterMaintenanceWindow">OdbCloudAutonomousVmClusterMaintenanceWindow</a>

---


### OdbCloudAutonomousVmClusterTagsList <a name="OdbCloudAutonomousVmClusterTagsList" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.get"></a>

```typescript
public get(index: number): OdbCloudAutonomousVmClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudAutonomousVmClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>[]

---


### OdbCloudAutonomousVmClusterTagsOutputReference <a name="OdbCloudAutonomousVmClusterTagsOutputReference" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer"></a>

```typescript
import { odbCloudAutonomousVmCluster } from '@cdktn/provider-awscc'

new odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudAutonomousVmClusterTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudAutonomousVmCluster.OdbCloudAutonomousVmClusterTags">OdbCloudAutonomousVmClusterTags</a>

---




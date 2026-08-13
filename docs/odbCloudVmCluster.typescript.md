# `odbCloudVmCluster` Submodule <a name="`odbCloudVmCluster` Submodule" id="@cdktn/provider-awscc.odbCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbCloudVmCluster <a name="OdbCloudVmCluster" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster awscc_odb_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

new odbCloudVmCluster.OdbCloudVmCluster(scope: Construct, id: string, config?: OdbCloudVmClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig">OdbCloudVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig">OdbCloudVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes">putDbNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles">putIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCloudExadataInfrastructureId">resetCloudExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataStorageSizeInTBs">resetDataStorageSizeInTBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodes">resetDbNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodeStorageSizeInGBs">resetDbNodeStorageSizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbServers">resetDbServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetGiVersion">resetGiVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIamRoles">resetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsLocalBackupEnabled">resetIsLocalBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsSparseDiskgroupEnabled">resetIsSparseDiskgroupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetMemorySizeInGBs">resetMemorySizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOdbNetworkId">resetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetScanListenerPortTcp">resetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSshPublicKeys">resetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSystemVersion">resetSystemVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions"></a>

```typescript
public putDataCollectionOptions(value: OdbCloudVmClusterDataCollectionOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

---

##### `putDbNodes` <a name="putDbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes"></a>

```typescript
public putDbNodes(value: IResolvable | OdbCloudVmClusterDbNodes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putDbNodes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]

---

##### `putIamRoles` <a name="putIamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles"></a>

```typescript
public putIamRoles(value: IResolvable | OdbCloudVmClusterIamRoles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putIamRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags"></a>

```typescript
public putTags(value: IResolvable | OdbCloudVmClusterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]

---

##### `resetCloudExadataInfrastructureId` <a name="resetCloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCloudExadataInfrastructureId"></a>

```typescript
public resetCloudExadataInfrastructureId(): void
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetClusterName"></a>

```typescript
public resetClusterName(): void
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetCpuCoreCount"></a>

```typescript
public resetCpuCoreCount(): void
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataCollectionOptions"></a>

```typescript
public resetDataCollectionOptions(): void
```

##### `resetDataStorageSizeInTBs` <a name="resetDataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDataStorageSizeInTBs"></a>

```typescript
public resetDataStorageSizeInTBs(): void
```

##### `resetDbNodes` <a name="resetDbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodes"></a>

```typescript
public resetDbNodes(): void
```

##### `resetDbNodeStorageSizeInGBs` <a name="resetDbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbNodeStorageSizeInGBs"></a>

```typescript
public resetDbNodeStorageSizeInGBs(): void
```

##### `resetDbServers` <a name="resetDbServers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDbServers"></a>

```typescript
public resetDbServers(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetGiVersion` <a name="resetGiVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetGiVersion"></a>

```typescript
public resetGiVersion(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIamRoles"></a>

```typescript
public resetIamRoles(): void
```

##### `resetIsLocalBackupEnabled` <a name="resetIsLocalBackupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsLocalBackupEnabled"></a>

```typescript
public resetIsLocalBackupEnabled(): void
```

##### `resetIsSparseDiskgroupEnabled` <a name="resetIsSparseDiskgroupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetIsSparseDiskgroupEnabled"></a>

```typescript
public resetIsSparseDiskgroupEnabled(): void
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetLicenseModel"></a>

```typescript
public resetLicenseModel(): void
```

##### `resetMemorySizeInGBs` <a name="resetMemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetMemorySizeInGBs"></a>

```typescript
public resetMemorySizeInGBs(): void
```

##### `resetOdbNetworkId` <a name="resetOdbNetworkId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetOdbNetworkId"></a>

```typescript
public resetOdbNetworkId(): void
```

##### `resetScanListenerPortTcp` <a name="resetScanListenerPortTcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetScanListenerPortTcp"></a>

```typescript
public resetScanListenerPortTcp(): void
```

##### `resetSshPublicKeys` <a name="resetSshPublicKeys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSshPublicKeys"></a>

```typescript
public resetSshPublicKeys(): void
```

##### `resetSystemVersion` <a name="resetSystemVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetSystemVersion"></a>

```typescript
public resetSystemVersion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OdbCloudVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

odbCloudVmCluster.OdbCloudVmCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OdbCloudVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OdbCloudVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OdbCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OdbCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterArn">cloudVmClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference">OdbCloudVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodes">dbNodes</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList">OdbCloudVmClusterDbNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.diskRedundancy">diskRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRoles">iamRoles</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList">OdbCloudVmClusterIamRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.listenerPort">listenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanDnsName">scanDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanIpIds">scanIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.storageSizeInGBs">storageSizeInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList">OdbCloudVmClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.vipIds">vipIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBsInput">dataStorageSizeInTBsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodesInput">dbNodesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBsInput">dbNodeStorageSizeInGBsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServersInput">dbServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersionInput">giVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRolesInput">iamRolesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabledInput">isLocalBackupEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabledInput">isSparseDiskgroupEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBsInput">memorySizeInGBsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkIdInput">odbNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcpInput">scanListenerPortTcpInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersionInput">systemVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBs">dataStorageSizeInTBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBs">dbNodeStorageSizeInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServers">dbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersion">giVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBs">memorySizeInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersion">systemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudVmClusterArn`<sup>Required</sup> <a name="cloudVmClusterArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterArn"></a>

```typescript
public readonly cloudVmClusterArn: string;
```

- *Type:* string

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptions"></a>

```typescript
public readonly dataCollectionOptions: OdbCloudVmClusterDataCollectionOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference">OdbCloudVmClusterDataCollectionOptionsOutputReference</a>

---

##### `dbNodes`<sup>Required</sup> <a name="dbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodes"></a>

```typescript
public readonly dbNodes: OdbCloudVmClusterDbNodesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList">OdbCloudVmClusterDbNodesList</a>

---

##### `diskRedundancy`<sup>Required</sup> <a name="diskRedundancy" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.diskRedundancy"></a>

```typescript
public readonly diskRedundancy: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRoles"></a>

```typescript
public readonly iamRoles: OdbCloudVmClusterIamRolesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList">OdbCloudVmClusterIamRolesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociResourceAnchorName"></a>

```typescript
public readonly ociResourceAnchorName: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `scanDnsName`<sup>Required</sup> <a name="scanDnsName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanDnsName"></a>

```typescript
public readonly scanDnsName: string;
```

- *Type:* string

---

##### `scanIpIds`<sup>Required</sup> <a name="scanIpIds" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanIpIds"></a>

```typescript
public readonly scanIpIds: string[];
```

- *Type:* string[]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `storageSizeInGBs`<sup>Required</sup> <a name="storageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.storageSizeInGBs"></a>

```typescript
public readonly storageSizeInGBs: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tags"></a>

```typescript
public readonly tags: OdbCloudVmClusterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList">OdbCloudVmClusterTagsList</a>

---

##### `vipIds`<sup>Required</sup> <a name="vipIds" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.vipIds"></a>

```typescript
public readonly vipIds: string[];
```

- *Type:* string[]

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```typescript
public readonly cloudExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCountInput"></a>

```typescript
public readonly cpuCoreCountInput: number;
```

- *Type:* number

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataCollectionOptionsInput"></a>

```typescript
public readonly dataCollectionOptionsInput: IResolvable | OdbCloudVmClusterDataCollectionOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

---

##### `dataStorageSizeInTBsInput`<sup>Optional</sup> <a name="dataStorageSizeInTBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBsInput"></a>

```typescript
public readonly dataStorageSizeInTBsInput: number;
```

- *Type:* number

---

##### `dbNodesInput`<sup>Optional</sup> <a name="dbNodesInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodesInput"></a>

```typescript
public readonly dbNodesInput: IResolvable | OdbCloudVmClusterDbNodes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]

---

##### `dbNodeStorageSizeInGBsInput`<sup>Optional</sup> <a name="dbNodeStorageSizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBsInput"></a>

```typescript
public readonly dbNodeStorageSizeInGBsInput: number;
```

- *Type:* number

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServersInput"></a>

```typescript
public readonly dbServersInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `giVersionInput`<sup>Optional</sup> <a name="giVersionInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersionInput"></a>

```typescript
public readonly giVersionInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.iamRolesInput"></a>

```typescript
public readonly iamRolesInput: IResolvable | OdbCloudVmClusterIamRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]

---

##### `isLocalBackupEnabledInput`<sup>Optional</sup> <a name="isLocalBackupEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabledInput"></a>

```typescript
public readonly isLocalBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isSparseDiskgroupEnabledInput`<sup>Optional</sup> <a name="isSparseDiskgroupEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabledInput"></a>

```typescript
public readonly isSparseDiskgroupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `memorySizeInGBsInput`<sup>Optional</sup> <a name="memorySizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBsInput"></a>

```typescript
public readonly memorySizeInGBsInput: number;
```

- *Type:* number

---

##### `odbNetworkIdInput`<sup>Optional</sup> <a name="odbNetworkIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkIdInput"></a>

```typescript
public readonly odbNetworkIdInput: string;
```

- *Type:* string

---

##### `scanListenerPortTcpInput`<sup>Optional</sup> <a name="scanListenerPortTcpInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcpInput"></a>

```typescript
public readonly scanListenerPortTcpInput: number;
```

- *Type:* number

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeysInput"></a>

```typescript
public readonly sshPublicKeysInput: string[];
```

- *Type:* string[]

---

##### `systemVersionInput`<sup>Optional</sup> <a name="systemVersionInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersionInput"></a>

```typescript
public readonly systemVersionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OdbCloudVmClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `dataStorageSizeInTBs`<sup>Required</sup> <a name="dataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dataStorageSizeInTBs"></a>

```typescript
public readonly dataStorageSizeInTBs: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGBs`<sup>Required</sup> <a name="dbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbNodeStorageSizeInGBs"></a>

```typescript
public readonly dbNodeStorageSizeInGBs: number;
```

- *Type:* number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.giVersion"></a>

```typescript
public readonly giVersion: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `isLocalBackupEnabled`<sup>Required</sup> <a name="isLocalBackupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isLocalBackupEnabled"></a>

```typescript
public readonly isLocalBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isSparseDiskgroupEnabled`<sup>Required</sup> <a name="isSparseDiskgroupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.isSparseDiskgroupEnabled"></a>

```typescript
public readonly isSparseDiskgroupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `memorySizeInGBs`<sup>Required</sup> <a name="memorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.memorySizeInGBs"></a>

```typescript
public readonly memorySizeInGBs: number;
```

- *Type:* number

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.scanListenerPortTcp"></a>

```typescript
public readonly scanListenerPortTcp: number;
```

- *Type:* number

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.systemVersion"></a>

```typescript
public readonly systemVersion: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbCloudVmClusterConfig <a name="OdbCloudVmClusterConfig" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

const odbCloudVmClusterConfig: odbCloudVmCluster.OdbCloudVmClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | The unique identifier of the Exadata infrastructure that this VM cluster belongs to. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the Grid Infrastructure (GI) cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | The number of CPU cores enabled on the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | The set of diagnostic collection options enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataStorageSizeInTBs">dataStorageSizeInTBs</a></code> | <code>number</code> | The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodes">dbNodes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]</code> | The DB nodes that are implicitly created and managed as part of this VM Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodeStorageSizeInGBs">dbNodeStorageSizeInGBs</a></code> | <code>number</code> | The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbServers">dbServers</a></code> | <code>string[]</code> | The list of database servers for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.displayName">displayName</a></code> | <code>string</code> | The user-friendly name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.giVersion">giVersion</a></code> | <code>string</code> | The software version of the Oracle Grid Infrastructure (GI) for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.hostname">hostname</a></code> | <code>string</code> | The host name for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.iamRoles">iamRoles</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]</code> | The AWS Identity and Access Management (IAM) service roles associated with the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether database backups to local Exadata storage is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the VM cluster is configured with a sparse disk group. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | The Oracle license model applied to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.memorySizeInGBs">memorySizeInGBs</a></code> | <code>number</code> | The amount of memory, in gigabytes (GB), that's allocated for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | The unique identifier of the ODB network for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>number</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | The public key portion of one or more key pairs used for SSH access to the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.systemVersion">systemVersion</a></code> | <code>string</code> | The operating system version of the image chosen for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]</code> | Tags to assign to the Vm Cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone of the VM cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudExadataInfrastructureId`<sup>Optional</sup> <a name="cloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

The unique identifier of the Exadata infrastructure that this VM cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#cloud_exadata_infrastructure_id OdbCloudVmCluster#cloud_exadata_infrastructure_id}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of the Grid Infrastructure (GI) cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#cluster_name OdbCloudVmCluster#cluster_name}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

The number of CPU cores enabled on the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count OdbCloudVmCluster#cpu_core_count}

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataCollectionOptions"></a>

```typescript
public readonly dataCollectionOptions: OdbCloudVmClusterDataCollectionOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

The set of diagnostic collection options enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#data_collection_options OdbCloudVmCluster#data_collection_options}

---

##### `dataStorageSizeInTBs`<sup>Optional</sup> <a name="dataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dataStorageSizeInTBs"></a>

```typescript
public readonly dataStorageSizeInTBs: number;
```

- *Type:* number

The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#data_storage_size_in_t_bs OdbCloudVmCluster#data_storage_size_in_t_bs}

---

##### `dbNodes`<sup>Optional</sup> <a name="dbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodes"></a>

```typescript
public readonly dbNodes: IResolvable | OdbCloudVmClusterDbNodes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]

The DB nodes that are implicitly created and managed as part of this VM Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_nodes OdbCloudVmCluster#db_nodes}

---

##### `dbNodeStorageSizeInGBs`<sup>Optional</sup> <a name="dbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbNodeStorageSizeInGBs"></a>

```typescript
public readonly dbNodeStorageSizeInGBs: number;
```

- *Type:* number

The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs OdbCloudVmCluster#db_node_storage_size_in_g_bs}

---

##### `dbServers`<sup>Optional</sup> <a name="dbServers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.dbServers"></a>

```typescript
public readonly dbServers: string[];
```

- *Type:* string[]

The list of database servers for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_servers OdbCloudVmCluster#db_servers}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user-friendly name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#display_name OdbCloudVmCluster#display_name}

---

##### `giVersion`<sup>Optional</sup> <a name="giVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.giVersion"></a>

```typescript
public readonly giVersion: string;
```

- *Type:* string

The software version of the Oracle Grid Infrastructure (GI) for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#gi_version OdbCloudVmCluster#gi_version}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The host name for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#hostname OdbCloudVmCluster#hostname}

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.iamRoles"></a>

```typescript
public readonly iamRoles: IResolvable | OdbCloudVmClusterIamRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]

The AWS Identity and Access Management (IAM) service roles associated with the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#iam_roles OdbCloudVmCluster#iam_roles}

---

##### `isLocalBackupEnabled`<sup>Optional</sup> <a name="isLocalBackupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isLocalBackupEnabled"></a>

```typescript
public readonly isLocalBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether database backups to local Exadata storage is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_local_backup_enabled OdbCloudVmCluster#is_local_backup_enabled}

---

##### `isSparseDiskgroupEnabled`<sup>Optional</sup> <a name="isSparseDiskgroupEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.isSparseDiskgroupEnabled"></a>

```typescript
public readonly isSparseDiskgroupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the VM cluster is configured with a sparse disk group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_sparse_diskgroup_enabled OdbCloudVmCluster#is_sparse_diskgroup_enabled}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

The Oracle license model applied to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#license_model OdbCloudVmCluster#license_model}

---

##### `memorySizeInGBs`<sup>Optional</sup> <a name="memorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.memorySizeInGBs"></a>

```typescript
public readonly memorySizeInGBs: number;
```

- *Type:* number

The amount of memory, in gigabytes (GB), that's allocated for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs OdbCloudVmCluster#memory_size_in_g_bs}

---

##### `odbNetworkId`<sup>Optional</sup> <a name="odbNetworkId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

The unique identifier of the ODB network for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#odb_network_id OdbCloudVmCluster#odb_network_id}

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.scanListenerPortTcp"></a>

```typescript
public readonly scanListenerPortTcp: number;
```

- *Type:* number

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#scan_listener_port_tcp OdbCloudVmCluster#scan_listener_port_tcp}

---

##### `sshPublicKeys`<sup>Optional</sup> <a name="sshPublicKeys" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

The public key portion of one or more key pairs used for SSH access to the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#ssh_public_keys OdbCloudVmCluster#ssh_public_keys}

---

##### `systemVersion`<sup>Optional</sup> <a name="systemVersion" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.systemVersion"></a>

```typescript
public readonly systemVersion: string;
```

- *Type:* string

The operating system version of the image chosen for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#system_version OdbCloudVmCluster#system_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | OdbCloudVmClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]

Tags to assign to the Vm Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone of the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#time_zone OdbCloudVmCluster#time_zone}

---

### OdbCloudVmClusterDataCollectionOptions <a name="OdbCloudVmClusterDataCollectionOptions" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

const odbCloudVmClusterDataCollectionOptions: odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether diagnostic collection is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether health monitoring is enabled for the VM cluster. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether incident logs are enabled for the cloud VM cluster. |

---

##### `isDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```typescript
public readonly isDiagnosticsEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_diagnostics_events_enabled OdbCloudVmCluster#is_diagnostics_events_enabled}

---

##### `isHealthMonitoringEnabled`<sup>Optional</sup> <a name="isHealthMonitoringEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```typescript
public readonly isHealthMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_health_monitoring_enabled OdbCloudVmCluster#is_health_monitoring_enabled}

---

##### `isIncidentLogsEnabled`<sup>Optional</sup> <a name="isIncidentLogsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```typescript
public readonly isIncidentLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether incident logs are enabled for the cloud VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#is_incident_logs_enabled OdbCloudVmCluster#is_incident_logs_enabled}

---

### OdbCloudVmClusterDbNodes <a name="OdbCloudVmClusterDbNodes" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

const odbCloudVmClusterDbNodes: odbCloudVmCluster.OdbCloudVmClusterDbNodes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupIpId">backupIpId</a></code> | <code>string</code> | The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupVnic2Id">backupVnic2Id</a></code> | <code>string</code> | The OCID of the second backup virtual network interface card (VNIC) for the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | The number of CPU cores enabled on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeArn">dbNodeArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeId">dbNodeId</a></code> | <code>string</code> | The unique identifier of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeStorageSizeInGBs">dbNodeStorageSizeInGBs</a></code> | <code>number</code> | The amount of local node storage, in gigabytes (GB), that's allocated on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbServerId">dbServerId</a></code> | <code>string</code> | The unique identifier of the database server that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | The OCID of the DB system. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostIpId">hostIpId</a></code> | <code>string</code> | The OCID of the host IP address that's associated with the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostname">hostname</a></code> | <code>string</code> | The host name for the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.memorySizeInGBs">memorySizeInGBs</a></code> | <code>number</code> | The amount of memory, in gigabytes (GB), that allocated on the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.ocid">ocid</a></code> | <code>string</code> | The OCID of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.status">status</a></code> | <code>string</code> | The current status of the DB node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnic2Id">vnic2Id</a></code> | <code>string</code> | The OCID of the second VNIC. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnicId">vnicId</a></code> | <code>string</code> | The OCID of the VNIC. |

---

##### `backupIpId`<sup>Optional</sup> <a name="backupIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupIpId"></a>

```typescript
public readonly backupIpId: string;
```

- *Type:* string

The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#backup_ip_id OdbCloudVmCluster#backup_ip_id}

---

##### `backupVnic2Id`<sup>Optional</sup> <a name="backupVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.backupVnic2Id"></a>

```typescript
public readonly backupVnic2Id: string;
```

- *Type:* string

The OCID of the second backup virtual network interface card (VNIC) for the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#backup_vnic_2_id OdbCloudVmCluster#backup_vnic_2_id}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

The number of CPU cores enabled on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count OdbCloudVmCluster#cpu_core_count}

---

##### `dbNodeArn`<sup>Optional</sup> <a name="dbNodeArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeArn"></a>

```typescript
public readonly dbNodeArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_node_arn OdbCloudVmCluster#db_node_arn}

---

##### `dbNodeId`<sup>Optional</sup> <a name="dbNodeId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeId"></a>

```typescript
public readonly dbNodeId: string;
```

- *Type:* string

The unique identifier of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_node_id OdbCloudVmCluster#db_node_id}

---

##### `dbNodeStorageSizeInGBs`<sup>Optional</sup> <a name="dbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbNodeStorageSizeInGBs"></a>

```typescript
public readonly dbNodeStorageSizeInGBs: number;
```

- *Type:* number

The amount of local node storage, in gigabytes (GB), that's allocated on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs OdbCloudVmCluster#db_node_storage_size_in_g_bs}

---

##### `dbServerId`<sup>Optional</sup> <a name="dbServerId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbServerId"></a>

```typescript
public readonly dbServerId: string;
```

- *Type:* string

The unique identifier of the database server that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_server_id OdbCloudVmCluster#db_server_id}

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

The OCID of the DB system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#db_system_id OdbCloudVmCluster#db_system_id}

---

##### `hostIpId`<sup>Optional</sup> <a name="hostIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostIpId"></a>

```typescript
public readonly hostIpId: string;
```

- *Type:* string

The OCID of the host IP address that's associated with the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#host_ip_id OdbCloudVmCluster#host_ip_id}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The host name for the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#hostname OdbCloudVmCluster#hostname}

---

##### `memorySizeInGBs`<sup>Optional</sup> <a name="memorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.memorySizeInGBs"></a>

```typescript
public readonly memorySizeInGBs: number;
```

- *Type:* number

The amount of memory, in gigabytes (GB), that allocated on the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs OdbCloudVmCluster#memory_size_in_g_bs}

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

The OCID of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#ocid OdbCloudVmCluster#ocid}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The current status of the DB node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#status OdbCloudVmCluster#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.tags"></a>

```typescript
public readonly tags: IResolvable | OdbCloudVmClusterDbNodesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}.

---

##### `vnic2Id`<sup>Optional</sup> <a name="vnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnic2Id"></a>

```typescript
public readonly vnic2Id: string;
```

- *Type:* string

The OCID of the second VNIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#vnic_2_id OdbCloudVmCluster#vnic_2_id}

---

##### `vnicId`<sup>Optional</sup> <a name="vnicId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

The OCID of the VNIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#vnic_id OdbCloudVmCluster#vnic_id}

---

### OdbCloudVmClusterDbNodesTags <a name="OdbCloudVmClusterDbNodesTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

const odbCloudVmClusterDbNodesTags: odbCloudVmCluster.OdbCloudVmClusterDbNodesTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#value OdbCloudVmCluster#value}

---

### OdbCloudVmClusterIamRoles <a name="OdbCloudVmClusterIamRoles" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

const odbCloudVmClusterIamRoles: odbCloudVmCluster.OdbCloudVmClusterIamRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.awsIntegration">awsIntegration</a></code> | <code>string</code> | The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.status">status</a></code> | <code>string</code> | The current status of the AWS Identity and Access Management (IAM) service role. |

---

##### `awsIntegration`<sup>Optional</sup> <a name="awsIntegration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.awsIntegration"></a>

```typescript
public readonly awsIntegration: string;
```

- *Type:* string

The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#aws_integration OdbCloudVmCluster#aws_integration}

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#iam_role_arn OdbCloudVmCluster#iam_role_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The current status of the AWS Identity and Access Management (IAM) service role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#status OdbCloudVmCluster#status}

---

### OdbCloudVmClusterTags <a name="OdbCloudVmClusterTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

const odbCloudVmClusterTags: odbCloudVmCluster.OdbCloudVmClusterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_vm_cluster#value OdbCloudVmCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbCloudVmClusterDataCollectionOptionsOutputReference <a name="OdbCloudVmClusterDataCollectionOptionsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

new odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">resetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">resetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">resetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDiagnosticsEventsEnabled` <a name="resetIsDiagnosticsEventsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```typescript
public resetIsDiagnosticsEventsEnabled(): void
```

##### `resetIsHealthMonitoringEnabled` <a name="resetIsHealthMonitoringEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```typescript
public resetIsHealthMonitoringEnabled(): void
```

##### `resetIsIncidentLogsEnabled` <a name="resetIsIncidentLogsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```typescript
public resetIsIncidentLogsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">isDiagnosticsEventsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">isHealthMonitoringEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">isIncidentLogsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```typescript
public readonly isDiagnosticsEventsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="isHealthMonitoringEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```typescript
public readonly isHealthMonitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isIncidentLogsEnabledInput`<sup>Optional</sup> <a name="isIncidentLogsEnabledInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```typescript
public readonly isIncidentLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```typescript
public readonly isDiagnosticsEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```typescript
public readonly isHealthMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```typescript
public readonly isIncidentLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudVmClusterDataCollectionOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDataCollectionOptions">OdbCloudVmClusterDataCollectionOptions</a>

---


### OdbCloudVmClusterDbNodesList <a name="OdbCloudVmClusterDbNodesList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

new odbCloudVmCluster.OdbCloudVmClusterDbNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get"></a>

```typescript
public get(index: number): OdbCloudVmClusterDbNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudVmClusterDbNodes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>[]

---


### OdbCloudVmClusterDbNodesOutputReference <a name="OdbCloudVmClusterDbNodesOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

new odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupIpId">resetBackupIpId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupVnic2Id">resetBackupVnic2Id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeArn">resetDbNodeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeId">resetDbNodeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeStorageSizeInGBs">resetDbNodeStorageSizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbServerId">resetDbServerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostIpId">resetHostIpId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetMemorySizeInGBs">resetMemorySizeInGBs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnic2Id">resetVnic2Id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnicId">resetVnicId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | OdbCloudVmClusterDbNodesTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]

---

##### `resetBackupIpId` <a name="resetBackupIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupIpId"></a>

```typescript
public resetBackupIpId(): void
```

##### `resetBackupVnic2Id` <a name="resetBackupVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetBackupVnic2Id"></a>

```typescript
public resetBackupVnic2Id(): void
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetCpuCoreCount"></a>

```typescript
public resetCpuCoreCount(): void
```

##### `resetDbNodeArn` <a name="resetDbNodeArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeArn"></a>

```typescript
public resetDbNodeArn(): void
```

##### `resetDbNodeId` <a name="resetDbNodeId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeId"></a>

```typescript
public resetDbNodeId(): void
```

##### `resetDbNodeStorageSizeInGBs` <a name="resetDbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbNodeStorageSizeInGBs"></a>

```typescript
public resetDbNodeStorageSizeInGBs(): void
```

##### `resetDbServerId` <a name="resetDbServerId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbServerId"></a>

```typescript
public resetDbServerId(): void
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetDbSystemId"></a>

```typescript
public resetDbSystemId(): void
```

##### `resetHostIpId` <a name="resetHostIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostIpId"></a>

```typescript
public resetHostIpId(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetMemorySizeInGBs` <a name="resetMemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetMemorySizeInGBs"></a>

```typescript
public resetMemorySizeInGBs(): void
```

##### `resetOcid` <a name="resetOcid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetOcid"></a>

```typescript
public resetOcid(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVnic2Id` <a name="resetVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnic2Id"></a>

```typescript
public resetVnic2Id(): void
```

##### `resetVnicId` <a name="resetVnicId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.resetVnicId"></a>

```typescript
public resetVnicId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList">OdbCloudVmClusterDbNodesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpIdInput">backupIpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2IdInput">backupVnic2IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArnInput">dbNodeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeIdInput">dbNodeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBsInput">dbNodeStorageSizeInGBsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerIdInput">dbServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpIdInput">hostIpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBsInput">memorySizeInGBsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2IdInput">vnic2IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicIdInput">vnicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpId">backupIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2Id">backupVnic2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArn">dbNodeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeId">dbNodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBs">dbNodeStorageSizeInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerId">dbServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpId">hostIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBs">memorySizeInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2Id">vnic2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicId">vnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tags"></a>

```typescript
public readonly tags: OdbCloudVmClusterDbNodesTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList">OdbCloudVmClusterDbNodesTagsList</a>

---

##### `backupIpIdInput`<sup>Optional</sup> <a name="backupIpIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpIdInput"></a>

```typescript
public readonly backupIpIdInput: string;
```

- *Type:* string

---

##### `backupVnic2IdInput`<sup>Optional</sup> <a name="backupVnic2IdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2IdInput"></a>

```typescript
public readonly backupVnic2IdInput: string;
```

- *Type:* string

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCountInput"></a>

```typescript
public readonly cpuCoreCountInput: number;
```

- *Type:* number

---

##### `dbNodeArnInput`<sup>Optional</sup> <a name="dbNodeArnInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArnInput"></a>

```typescript
public readonly dbNodeArnInput: string;
```

- *Type:* string

---

##### `dbNodeIdInput`<sup>Optional</sup> <a name="dbNodeIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeIdInput"></a>

```typescript
public readonly dbNodeIdInput: string;
```

- *Type:* string

---

##### `dbNodeStorageSizeInGBsInput`<sup>Optional</sup> <a name="dbNodeStorageSizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBsInput"></a>

```typescript
public readonly dbNodeStorageSizeInGBsInput: number;
```

- *Type:* number

---

##### `dbServerIdInput`<sup>Optional</sup> <a name="dbServerIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerIdInput"></a>

```typescript
public readonly dbServerIdInput: string;
```

- *Type:* string

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `hostIpIdInput`<sup>Optional</sup> <a name="hostIpIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpIdInput"></a>

```typescript
public readonly hostIpIdInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `memorySizeInGBsInput`<sup>Optional</sup> <a name="memorySizeInGBsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBsInput"></a>

```typescript
public readonly memorySizeInGBsInput: number;
```

- *Type:* number

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OdbCloudVmClusterDbNodesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]

---

##### `vnic2IdInput`<sup>Optional</sup> <a name="vnic2IdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2IdInput"></a>

```typescript
public readonly vnic2IdInput: string;
```

- *Type:* string

---

##### `vnicIdInput`<sup>Optional</sup> <a name="vnicIdInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicIdInput"></a>

```typescript
public readonly vnicIdInput: string;
```

- *Type:* string

---

##### `backupIpId`<sup>Required</sup> <a name="backupIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupIpId"></a>

```typescript
public readonly backupIpId: string;
```

- *Type:* string

---

##### `backupVnic2Id`<sup>Required</sup> <a name="backupVnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.backupVnic2Id"></a>

```typescript
public readonly backupVnic2Id: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `dbNodeArn`<sup>Required</sup> <a name="dbNodeArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeArn"></a>

```typescript
public readonly dbNodeArn: string;
```

- *Type:* string

---

##### `dbNodeId`<sup>Required</sup> <a name="dbNodeId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeId"></a>

```typescript
public readonly dbNodeId: string;
```

- *Type:* string

---

##### `dbNodeStorageSizeInGBs`<sup>Required</sup> <a name="dbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBs"></a>

```typescript
public readonly dbNodeStorageSizeInGBs: number;
```

- *Type:* number

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbServerId"></a>

```typescript
public readonly dbServerId: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `hostIpId`<sup>Required</sup> <a name="hostIpId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostIpId"></a>

```typescript
public readonly hostIpId: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `memorySizeInGBs`<sup>Required</sup> <a name="memorySizeInGBs" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBs"></a>

```typescript
public readonly memorySizeInGBs: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `vnic2Id`<sup>Required</sup> <a name="vnic2Id" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnic2Id"></a>

```typescript
public readonly vnic2Id: string;
```

- *Type:* string

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudVmClusterDbNodes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodes">OdbCloudVmClusterDbNodes</a>

---


### OdbCloudVmClusterDbNodesTagsList <a name="OdbCloudVmClusterDbNodesTagsList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

new odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get"></a>

```typescript
public get(index: number): OdbCloudVmClusterDbNodesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudVmClusterDbNodesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>[]

---


### OdbCloudVmClusterDbNodesTagsOutputReference <a name="OdbCloudVmClusterDbNodesTagsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

new odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudVmClusterDbNodesTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterDbNodesTags">OdbCloudVmClusterDbNodesTags</a>

---


### OdbCloudVmClusterIamRolesList <a name="OdbCloudVmClusterIamRolesList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

new odbCloudVmCluster.OdbCloudVmClusterIamRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get"></a>

```typescript
public get(index: number): OdbCloudVmClusterIamRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudVmClusterIamRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>[]

---


### OdbCloudVmClusterIamRolesOutputReference <a name="OdbCloudVmClusterIamRolesOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

new odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetAwsIntegration">resetAwsIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsIntegration` <a name="resetAwsIntegration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetAwsIntegration"></a>

```typescript
public resetAwsIntegration(): void
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetIamRoleArn"></a>

```typescript
public resetIamRoleArn(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegrationInput">awsIntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegration">awsIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsIntegrationInput`<sup>Optional</sup> <a name="awsIntegrationInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegrationInput"></a>

```typescript
public readonly awsIntegrationInput: string;
```

- *Type:* string

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `awsIntegration`<sup>Required</sup> <a name="awsIntegration" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.awsIntegration"></a>

```typescript
public readonly awsIntegration: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudVmClusterIamRoles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterIamRoles">OdbCloudVmClusterIamRoles</a>

---


### OdbCloudVmClusterTagsList <a name="OdbCloudVmClusterTagsList" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

new odbCloudVmCluster.OdbCloudVmClusterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get"></a>

```typescript
public get(index: number): OdbCloudVmClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudVmClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>[]

---


### OdbCloudVmClusterTagsOutputReference <a name="OdbCloudVmClusterTagsOutputReference" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer"></a>

```typescript
import { odbCloudVmCluster } from '@cdktn/provider-awscc'

new odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbCloudVmClusterTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbCloudVmCluster.OdbCloudVmClusterTags">OdbCloudVmClusterTags</a>

---




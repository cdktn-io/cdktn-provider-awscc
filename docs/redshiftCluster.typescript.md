# `redshiftCluster` Submodule <a name="`redshiftCluster` Submodule" id="@cdktn/provider-awscc.redshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftCluster <a name="RedshiftCluster" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster awscc_redshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer"></a>

```typescript
import { redshiftCluster } from '@cdktn/provider-awscc'

new redshiftCluster.RedshiftCluster(scope: Construct, id: string, config: RedshiftClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig">RedshiftClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig">RedshiftClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint">putEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties">putLoggingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade">resetAllowVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus">resetAquaConfigurationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod">resetAutomatedSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocation">resetAvailabilityZoneRelocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationStatus">resetAvailabilityZoneRelocationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClassic">resetClassic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterIdentifier">resetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName">resetClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups">resetClusterSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName">resetClusterSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterVersion">resetClusterVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenance">resetDeferMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceDuration">resetDeferMaintenanceDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceEndTime">resetDeferMaintenanceEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceStartTime">resetDeferMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDestinationRegion">resetDestinationRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetElasticIp">resetElasticIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting">resetEnhancedVpcRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmClientCertificateIdentifier">resetHsmClientCertificateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmConfigurationIdentifier">resetHsmConfigurationIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetIamRoles">resetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetLoggingProperties">resetLoggingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName">resetMaintenanceTrackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManageMasterPassword">resetManageMasterPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod">resetManualSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterPasswordSecretKmsKeyId">resetMasterPasswordSecretKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterUserPassword">resetMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMultiAz">resetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNamespaceResourcePolicy">resetNamespaceResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNumberOfNodes">resetNumberOfNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOwnerAccount">resetOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetResourceAction">resetResourceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRevisionTarget">resetRevisionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRotateEncryptionKey">resetRotateEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier">resetSnapshotClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyGrantName">resetSnapshotCopyGrantName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyManual">resetSnapshotCopyManual</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyRetentionPeriod">resetSnapshotCopyRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier">resetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoint` <a name="putEndpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint"></a>

```typescript
public putEndpoint(value: RedshiftClusterEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

---

##### `putLoggingProperties` <a name="putLoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties"></a>

```typescript
public putLoggingProperties(value: RedshiftClusterLoggingProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags"></a>

```typescript
public putTags(value: IResolvable | RedshiftClusterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]

---

##### `resetAllowVersionUpgrade` <a name="resetAllowVersionUpgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade"></a>

```typescript
public resetAllowVersionUpgrade(): void
```

##### `resetAquaConfigurationStatus` <a name="resetAquaConfigurationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus"></a>

```typescript
public resetAquaConfigurationStatus(): void
```

##### `resetAutomatedSnapshotRetentionPeriod` <a name="resetAutomatedSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod"></a>

```typescript
public resetAutomatedSnapshotRetentionPeriod(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetAvailabilityZoneRelocation` <a name="resetAvailabilityZoneRelocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocation"></a>

```typescript
public resetAvailabilityZoneRelocation(): void
```

##### `resetAvailabilityZoneRelocationStatus` <a name="resetAvailabilityZoneRelocationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationStatus"></a>

```typescript
public resetAvailabilityZoneRelocationStatus(): void
```

##### `resetClassic` <a name="resetClassic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClassic"></a>

```typescript
public resetClassic(): void
```

##### `resetClusterIdentifier` <a name="resetClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterIdentifier"></a>

```typescript
public resetClusterIdentifier(): void
```

##### `resetClusterParameterGroupName` <a name="resetClusterParameterGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName"></a>

```typescript
public resetClusterParameterGroupName(): void
```

##### `resetClusterSecurityGroups` <a name="resetClusterSecurityGroups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups"></a>

```typescript
public resetClusterSecurityGroups(): void
```

##### `resetClusterSubnetGroupName` <a name="resetClusterSubnetGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName"></a>

```typescript
public resetClusterSubnetGroupName(): void
```

##### `resetClusterVersion` <a name="resetClusterVersion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterVersion"></a>

```typescript
public resetClusterVersion(): void
```

##### `resetDeferMaintenance` <a name="resetDeferMaintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenance"></a>

```typescript
public resetDeferMaintenance(): void
```

##### `resetDeferMaintenanceDuration` <a name="resetDeferMaintenanceDuration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceDuration"></a>

```typescript
public resetDeferMaintenanceDuration(): void
```

##### `resetDeferMaintenanceEndTime` <a name="resetDeferMaintenanceEndTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceEndTime"></a>

```typescript
public resetDeferMaintenanceEndTime(): void
```

##### `resetDeferMaintenanceStartTime` <a name="resetDeferMaintenanceStartTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceStartTime"></a>

```typescript
public resetDeferMaintenanceStartTime(): void
```

##### `resetDestinationRegion` <a name="resetDestinationRegion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDestinationRegion"></a>

```typescript
public resetDestinationRegion(): void
```

##### `resetElasticIp` <a name="resetElasticIp" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetElasticIp"></a>

```typescript
public resetElasticIp(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetEnhancedVpcRouting` <a name="resetEnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting"></a>

```typescript
public resetEnhancedVpcRouting(): void
```

##### `resetHsmClientCertificateIdentifier` <a name="resetHsmClientCertificateIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmClientCertificateIdentifier"></a>

```typescript
public resetHsmClientCertificateIdentifier(): void
```

##### `resetHsmConfigurationIdentifier` <a name="resetHsmConfigurationIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmConfigurationIdentifier"></a>

```typescript
public resetHsmConfigurationIdentifier(): void
```

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetIamRoles"></a>

```typescript
public resetIamRoles(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLoggingProperties` <a name="resetLoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetLoggingProperties"></a>

```typescript
public resetLoggingProperties(): void
```

##### `resetMaintenanceTrackName` <a name="resetMaintenanceTrackName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName"></a>

```typescript
public resetMaintenanceTrackName(): void
```

##### `resetManageMasterPassword` <a name="resetManageMasterPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManageMasterPassword"></a>

```typescript
public resetManageMasterPassword(): void
```

##### `resetManualSnapshotRetentionPeriod` <a name="resetManualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod"></a>

```typescript
public resetManualSnapshotRetentionPeriod(): void
```

##### `resetMasterPasswordSecretKmsKeyId` <a name="resetMasterPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterPasswordSecretKmsKeyId"></a>

```typescript
public resetMasterPasswordSecretKmsKeyId(): void
```

##### `resetMasterUserPassword` <a name="resetMasterUserPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterUserPassword"></a>

```typescript
public resetMasterUserPassword(): void
```

##### `resetMultiAz` <a name="resetMultiAz" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMultiAz"></a>

```typescript
public resetMultiAz(): void
```

##### `resetNamespaceResourcePolicy` <a name="resetNamespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNamespaceResourcePolicy"></a>

```typescript
public resetNamespaceResourcePolicy(): void
```

##### `resetNumberOfNodes` <a name="resetNumberOfNodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNumberOfNodes"></a>

```typescript
public resetNumberOfNodes(): void
```

##### `resetOwnerAccount` <a name="resetOwnerAccount" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOwnerAccount"></a>

```typescript
public resetOwnerAccount(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPubliclyAccessible"></a>

```typescript
public resetPubliclyAccessible(): void
```

##### `resetResourceAction` <a name="resetResourceAction" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetResourceAction"></a>

```typescript
public resetResourceAction(): void
```

##### `resetRevisionTarget` <a name="resetRevisionTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRevisionTarget"></a>

```typescript
public resetRevisionTarget(): void
```

##### `resetRotateEncryptionKey` <a name="resetRotateEncryptionKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRotateEncryptionKey"></a>

```typescript
public resetRotateEncryptionKey(): void
```

##### `resetSnapshotClusterIdentifier` <a name="resetSnapshotClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier"></a>

```typescript
public resetSnapshotClusterIdentifier(): void
```

##### `resetSnapshotCopyGrantName` <a name="resetSnapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyGrantName"></a>

```typescript
public resetSnapshotCopyGrantName(): void
```

##### `resetSnapshotCopyManual` <a name="resetSnapshotCopyManual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyManual"></a>

```typescript
public resetSnapshotCopyManual(): void
```

##### `resetSnapshotCopyRetentionPeriod` <a name="resetSnapshotCopyRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyRetentionPeriod"></a>

```typescript
public resetSnapshotCopyRetentionPeriod(): void
```

##### `resetSnapshotIdentifier` <a name="resetSnapshotIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier"></a>

```typescript
public resetSnapshotIdentifier(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct"></a>

```typescript
import { redshiftCluster } from '@cdktn/provider-awscc'

redshiftCluster.RedshiftCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement"></a>

```typescript
import { redshiftCluster } from '@cdktn/provider-awscc'

redshiftCluster.RedshiftCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource"></a>

```typescript
import { redshiftCluster } from '@cdktn/provider-awscc'

redshiftCluster.RedshiftCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport"></a>

```typescript
import { redshiftCluster } from '@cdktn/provider-awscc'

redshiftCluster.RedshiftCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RedshiftCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterNamespaceArn">clusterNamespaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceIdentifier">deferMaintenanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference">RedshiftClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingProperties">loggingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference">RedshiftClusterLoggingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretArn">masterPasswordSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList">RedshiftClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput">allowVersionUpgradeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput">aquaConfigurationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput">automatedSnapshotRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationInput">availabilityZoneRelocationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatusInput">availabilityZoneRelocationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classicInput">classicInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput">clusterParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput">clusterSecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput">clusterSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterTypeInput">clusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersionInput">clusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDurationInput">deferMaintenanceDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTimeInput">deferMaintenanceEndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceInput">deferMaintenanceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTimeInput">deferMaintenanceStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegionInput">destinationRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIpInput">elasticIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpointInput">endpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput">enhancedVpcRoutingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifierInput">hsmClientCertificateIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifierInput">hsmConfigurationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRolesInput">iamRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingPropertiesInput">loggingPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput">maintenanceTrackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPasswordInput">manageMasterPasswordInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput">manualSnapshotRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyIdInput">masterPasswordSecretKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsernameInput">masterUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPasswordInput">masterUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAzInput">multiAzInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicyInput">namespaceResourcePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodesInput">numberOfNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccountInput">ownerAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceActionInput">resourceActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTargetInput">revisionTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKeyInput">rotateEncryptionKeyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput">snapshotClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantNameInput">snapshotCopyGrantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManualInput">snapshotCopyManualInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriodInput">snapshotCopyRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput">snapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade">allowVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus">aquaConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod">automatedSnapshotRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocation">availabilityZoneRelocation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatus">availabilityZoneRelocationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classic">classic</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName">clusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups">clusterSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName">clusterSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenance">deferMaintenance</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDuration">deferMaintenanceDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTime">deferMaintenanceEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTime">deferMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIp">elasticIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifier">hsmClientCertificateIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifier">hsmConfigurationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackName">maintenanceTrackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPassword">manageMasterPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod">manualSnapshotRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyId">masterPasswordSecretKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsername">masterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPassword">masterUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAz">multiAz</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicy">namespaceResourcePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodes">numberOfNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccount">ownerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceAction">resourceAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTarget">revisionTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKey">rotateEncryptionKey</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier">snapshotClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantName">snapshotCopyGrantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManual">snapshotCopyManual</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriod">snapshotCopyRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="clusterNamespaceArn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterNamespaceArn"></a>

```typescript
public readonly clusterNamespaceArn: string;
```

- *Type:* string

---

##### `deferMaintenanceIdentifier`<sup>Required</sup> <a name="deferMaintenanceIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceIdentifier"></a>

```typescript
public readonly deferMaintenanceIdentifier: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpoint"></a>

```typescript
public readonly endpoint: RedshiftClusterEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference">RedshiftClusterEndpointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loggingProperties`<sup>Required</sup> <a name="loggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingProperties"></a>

```typescript
public readonly loggingProperties: RedshiftClusterLoggingPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference">RedshiftClusterLoggingPropertiesOutputReference</a>

---

##### `masterPasswordSecretArn`<sup>Required</sup> <a name="masterPasswordSecretArn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretArn"></a>

```typescript
public readonly masterPasswordSecretArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tags"></a>

```typescript
public readonly tags: RedshiftClusterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList">RedshiftClusterTagsList</a>

---

##### `allowVersionUpgradeInput`<sup>Optional</sup> <a name="allowVersionUpgradeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput"></a>

```typescript
public readonly allowVersionUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `aquaConfigurationStatusInput`<sup>Optional</sup> <a name="aquaConfigurationStatusInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput"></a>

```typescript
public readonly aquaConfigurationStatusInput: string;
```

- *Type:* string

---

##### `automatedSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="automatedSnapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput"></a>

```typescript
public readonly automatedSnapshotRetentionPeriodInput: number;
```

- *Type:* number

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `availabilityZoneRelocationInput`<sup>Optional</sup> <a name="availabilityZoneRelocationInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationInput"></a>

```typescript
public readonly availabilityZoneRelocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `availabilityZoneRelocationStatusInput`<sup>Optional</sup> <a name="availabilityZoneRelocationStatusInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatusInput"></a>

```typescript
public readonly availabilityZoneRelocationStatusInput: string;
```

- *Type:* string

---

##### `classicInput`<sup>Optional</sup> <a name="classicInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classicInput"></a>

```typescript
public readonly classicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `clusterParameterGroupNameInput`<sup>Optional</sup> <a name="clusterParameterGroupNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput"></a>

```typescript
public readonly clusterParameterGroupNameInput: string;
```

- *Type:* string

---

##### `clusterSecurityGroupsInput`<sup>Optional</sup> <a name="clusterSecurityGroupsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput"></a>

```typescript
public readonly clusterSecurityGroupsInput: string[];
```

- *Type:* string[]

---

##### `clusterSubnetGroupNameInput`<sup>Optional</sup> <a name="clusterSubnetGroupNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput"></a>

```typescript
public readonly clusterSubnetGroupNameInput: string;
```

- *Type:* string

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterTypeInput"></a>

```typescript
public readonly clusterTypeInput: string;
```

- *Type:* string

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersionInput"></a>

```typescript
public readonly clusterVersionInput: string;
```

- *Type:* string

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `deferMaintenanceDurationInput`<sup>Optional</sup> <a name="deferMaintenanceDurationInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDurationInput"></a>

```typescript
public readonly deferMaintenanceDurationInput: number;
```

- *Type:* number

---

##### `deferMaintenanceEndTimeInput`<sup>Optional</sup> <a name="deferMaintenanceEndTimeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTimeInput"></a>

```typescript
public readonly deferMaintenanceEndTimeInput: string;
```

- *Type:* string

---

##### `deferMaintenanceInput`<sup>Optional</sup> <a name="deferMaintenanceInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceInput"></a>

```typescript
public readonly deferMaintenanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deferMaintenanceStartTimeInput`<sup>Optional</sup> <a name="deferMaintenanceStartTimeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTimeInput"></a>

```typescript
public readonly deferMaintenanceStartTimeInput: string;
```

- *Type:* string

---

##### `destinationRegionInput`<sup>Optional</sup> <a name="destinationRegionInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegionInput"></a>

```typescript
public readonly destinationRegionInput: string;
```

- *Type:* string

---

##### `elasticIpInput`<sup>Optional</sup> <a name="elasticIpInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIpInput"></a>

```typescript
public readonly elasticIpInput: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpointInput"></a>

```typescript
public readonly endpointInput: IResolvable | RedshiftClusterEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

---

##### `enhancedVpcRoutingInput`<sup>Optional</sup> <a name="enhancedVpcRoutingInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput"></a>

```typescript
public readonly enhancedVpcRoutingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hsmClientCertificateIdentifierInput`<sup>Optional</sup> <a name="hsmClientCertificateIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifierInput"></a>

```typescript
public readonly hsmClientCertificateIdentifierInput: string;
```

- *Type:* string

---

##### `hsmConfigurationIdentifierInput`<sup>Optional</sup> <a name="hsmConfigurationIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifierInput"></a>

```typescript
public readonly hsmConfigurationIdentifierInput: string;
```

- *Type:* string

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRolesInput"></a>

```typescript
public readonly iamRolesInput: string[];
```

- *Type:* string[]

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `loggingPropertiesInput`<sup>Optional</sup> <a name="loggingPropertiesInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingPropertiesInput"></a>

```typescript
public readonly loggingPropertiesInput: IResolvable | RedshiftClusterLoggingProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

---

##### `maintenanceTrackNameInput`<sup>Optional</sup> <a name="maintenanceTrackNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput"></a>

```typescript
public readonly maintenanceTrackNameInput: string;
```

- *Type:* string

---

##### `manageMasterPasswordInput`<sup>Optional</sup> <a name="manageMasterPasswordInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPasswordInput"></a>

```typescript
public readonly manageMasterPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `manualSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="manualSnapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput"></a>

```typescript
public readonly manualSnapshotRetentionPeriodInput: number;
```

- *Type:* number

---

##### `masterPasswordSecretKmsKeyIdInput`<sup>Optional</sup> <a name="masterPasswordSecretKmsKeyIdInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyIdInput"></a>

```typescript
public readonly masterPasswordSecretKmsKeyIdInput: string;
```

- *Type:* string

---

##### `masterUsernameInput`<sup>Optional</sup> <a name="masterUsernameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsernameInput"></a>

```typescript
public readonly masterUsernameInput: string;
```

- *Type:* string

---

##### `masterUserPasswordInput`<sup>Optional</sup> <a name="masterUserPasswordInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPasswordInput"></a>

```typescript
public readonly masterUserPasswordInput: string;
```

- *Type:* string

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAzInput"></a>

```typescript
public readonly multiAzInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `namespaceResourcePolicyInput`<sup>Optional</sup> <a name="namespaceResourcePolicyInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicyInput"></a>

```typescript
public readonly namespaceResourcePolicyInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `numberOfNodesInput`<sup>Optional</sup> <a name="numberOfNodesInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodesInput"></a>

```typescript
public readonly numberOfNodesInput: number;
```

- *Type:* number

---

##### `ownerAccountInput`<sup>Optional</sup> <a name="ownerAccountInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccountInput"></a>

```typescript
public readonly ownerAccountInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput"></a>

```typescript
public readonly publiclyAccessibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourceActionInput`<sup>Optional</sup> <a name="resourceActionInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceActionInput"></a>

```typescript
public readonly resourceActionInput: string;
```

- *Type:* string

---

##### `revisionTargetInput`<sup>Optional</sup> <a name="revisionTargetInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTargetInput"></a>

```typescript
public readonly revisionTargetInput: string;
```

- *Type:* string

---

##### `rotateEncryptionKeyInput`<sup>Optional</sup> <a name="rotateEncryptionKeyInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKeyInput"></a>

```typescript
public readonly rotateEncryptionKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `snapshotClusterIdentifierInput`<sup>Optional</sup> <a name="snapshotClusterIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput"></a>

```typescript
public readonly snapshotClusterIdentifierInput: string;
```

- *Type:* string

---

##### `snapshotCopyGrantNameInput`<sup>Optional</sup> <a name="snapshotCopyGrantNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantNameInput"></a>

```typescript
public readonly snapshotCopyGrantNameInput: string;
```

- *Type:* string

---

##### `snapshotCopyManualInput`<sup>Optional</sup> <a name="snapshotCopyManualInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManualInput"></a>

```typescript
public readonly snapshotCopyManualInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `snapshotCopyRetentionPeriodInput`<sup>Optional</sup> <a name="snapshotCopyRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriodInput"></a>

```typescript
public readonly snapshotCopyRetentionPeriodInput: number;
```

- *Type:* number

---

##### `snapshotIdentifierInput`<sup>Optional</sup> <a name="snapshotIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput"></a>

```typescript
public readonly snapshotIdentifierInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RedshiftClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `allowVersionUpgrade`<sup>Required</sup> <a name="allowVersionUpgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade"></a>

```typescript
public readonly allowVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `aquaConfigurationStatus`<sup>Required</sup> <a name="aquaConfigurationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus"></a>

```typescript
public readonly aquaConfigurationStatus: string;
```

- *Type:* string

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="automatedSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod"></a>

```typescript
public readonly automatedSnapshotRetentionPeriod: number;
```

- *Type:* number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneRelocation`<sup>Required</sup> <a name="availabilityZoneRelocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocation"></a>

```typescript
public readonly availabilityZoneRelocation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `availabilityZoneRelocationStatus`<sup>Required</sup> <a name="availabilityZoneRelocationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatus"></a>

```typescript
public readonly availabilityZoneRelocationStatus: string;
```

- *Type:* string

---

##### `classic`<sup>Required</sup> <a name="classic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classic"></a>

```typescript
public readonly classic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `clusterParameterGroupName`<sup>Required</sup> <a name="clusterParameterGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName"></a>

```typescript
public readonly clusterParameterGroupName: string;
```

- *Type:* string

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="clusterSecurityGroups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups"></a>

```typescript
public readonly clusterSecurityGroups: string[];
```

- *Type:* string[]

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="clusterSubnetGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName"></a>

```typescript
public readonly clusterSubnetGroupName: string;
```

- *Type:* string

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `deferMaintenance`<sup>Required</sup> <a name="deferMaintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenance"></a>

```typescript
public readonly deferMaintenance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deferMaintenanceDuration`<sup>Required</sup> <a name="deferMaintenanceDuration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDuration"></a>

```typescript
public readonly deferMaintenanceDuration: number;
```

- *Type:* number

---

##### `deferMaintenanceEndTime`<sup>Required</sup> <a name="deferMaintenanceEndTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTime"></a>

```typescript
public readonly deferMaintenanceEndTime: string;
```

- *Type:* string

---

##### `deferMaintenanceStartTime`<sup>Required</sup> <a name="deferMaintenanceStartTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTime"></a>

```typescript
public readonly deferMaintenanceStartTime: string;
```

- *Type:* string

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

---

##### `elasticIp`<sup>Required</sup> <a name="elasticIp" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIp"></a>

```typescript
public readonly elasticIp: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="enhancedVpcRouting" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting"></a>

```typescript
public readonly enhancedVpcRouting: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="hsmClientCertificateIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifier"></a>

```typescript
public readonly hsmClientCertificateIdentifier: string;
```

- *Type:* string

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="hsmConfigurationIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifier"></a>

```typescript
public readonly hsmConfigurationIdentifier: string;
```

- *Type:* string

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="maintenanceTrackName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackName"></a>

```typescript
public readonly maintenanceTrackName: string;
```

- *Type:* string

---

##### `manageMasterPassword`<sup>Required</sup> <a name="manageMasterPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPassword"></a>

```typescript
public readonly manageMasterPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="manualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod"></a>

```typescript
public readonly manualSnapshotRetentionPeriod: number;
```

- *Type:* number

---

##### `masterPasswordSecretKmsKeyId`<sup>Required</sup> <a name="masterPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyId"></a>

```typescript
public readonly masterPasswordSecretKmsKeyId: string;
```

- *Type:* string

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsername"></a>

```typescript
public readonly masterUsername: string;
```

- *Type:* string

---

##### `masterUserPassword`<sup>Required</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPassword"></a>

```typescript
public readonly masterUserPassword: string;
```

- *Type:* string

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAz"></a>

```typescript
public readonly multiAz: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `namespaceResourcePolicy`<sup>Required</sup> <a name="namespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicy"></a>

```typescript
public readonly namespaceResourcePolicy: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `numberOfNodes`<sup>Required</sup> <a name="numberOfNodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodes"></a>

```typescript
public readonly numberOfNodes: number;
```

- *Type:* number

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccount"></a>

```typescript
public readonly ownerAccount: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourceAction`<sup>Required</sup> <a name="resourceAction" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceAction"></a>

```typescript
public readonly resourceAction: string;
```

- *Type:* string

---

##### `revisionTarget`<sup>Required</sup> <a name="revisionTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTarget"></a>

```typescript
public readonly revisionTarget: string;
```

- *Type:* string

---

##### `rotateEncryptionKey`<sup>Required</sup> <a name="rotateEncryptionKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKey"></a>

```typescript
public readonly rotateEncryptionKey: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `snapshotClusterIdentifier`<sup>Required</sup> <a name="snapshotClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier"></a>

```typescript
public readonly snapshotClusterIdentifier: string;
```

- *Type:* string

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="snapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantName"></a>

```typescript
public readonly snapshotCopyGrantName: string;
```

- *Type:* string

---

##### `snapshotCopyManual`<sup>Required</sup> <a name="snapshotCopyManual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManual"></a>

```typescript
public readonly snapshotCopyManual: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `snapshotCopyRetentionPeriod`<sup>Required</sup> <a name="snapshotCopyRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriod"></a>

```typescript
public readonly snapshotCopyRetentionPeriod: number;
```

- *Type:* number

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterConfig <a name="RedshiftClusterConfig" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.Initializer"></a>

```typescript
import { redshiftCluster } from '@cdktn/provider-awscc'

const redshiftClusterConfig: redshiftCluster.RedshiftClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterType">clusterType</a></code> | <code>string</code> | The type of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dbName">dbName</a></code> | <code>string</code> | The name of the first database to be created when the cluster is created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUsername">masterUsername</a></code> | <code>string</code> | The user name associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.nodeType">nodeType</a></code> | <code>string</code> | The node type to be provisioned for the cluster.Valid Values: ds2.xlarge \| ds2.8xlarge \| dc1.large \| dc1.8xlarge \| dc2.large \| dc2.8xlarge \| ra3.large \| ra3.4xlarge \| ra3.16xlarge \| rg.large \| rg.xlarge \| rg.4xlarge \| rg.12xlarge. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade">allowVersionUpgrade</a></code> | <code>boolean \| cdktn.IResolvable</code> | Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus">aquaConfigurationStatus</a></code> | <code>string</code> | The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod">automatedSnapshotRetentionPeriod</a></code> | <code>number</code> | The number of days that automated snapshots are retained. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocation">availabilityZoneRelocation</a></code> | <code>boolean \| cdktn.IResolvable</code> | The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationStatus">availabilityZoneRelocationStatus</a></code> | <code>string</code> | The availability zone relocation status of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.classic">classic</a></code> | <code>boolean \| cdktn.IResolvable</code> | A boolean value indicating whether the resize operation is using the classic resize process. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | A unique identifier for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName">clusterParameterGroupName</a></code> | <code>string</code> | The name of the parameter group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups">clusterSecurityGroups</a></code> | <code>string[]</code> | A list of security groups to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName">clusterSubnetGroupName</a></code> | <code>string</code> | The name of a cluster subnet group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenance">deferMaintenance</a></code> | <code>boolean \| cdktn.IResolvable</code> | A boolean indicating whether to enable the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceDuration">deferMaintenanceDuration</a></code> | <code>number</code> | An integer indicating the duration of the maintenance window in days. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceEndTime">deferMaintenanceEndTime</a></code> | <code>string</code> | A timestamp indicating end time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceStartTime">deferMaintenanceStartTime</a></code> | <code>string</code> | A timestamp indicating the start time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | The destination AWS Region that you want to copy snapshots to. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.elasticIp">elasticIp</a></code> | <code>string</code> | The Elastic IP (EIP) address for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the data in the cluster is encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>boolean \| cdktn.IResolvable</code> | An option that specifies whether to create the cluster with enhanced VPC routing enabled. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmClientCertificateIdentifier">hsmClientCertificateIdentifier</a></code> | <code>string</code> | Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmConfigurationIdentifier">hsmConfigurationIdentifier</a></code> | <code>string</code> | Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.loggingProperties">loggingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName">maintenanceTrackName</a></code> | <code>string</code> | The name for the maintenance track that you want to assign for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manageMasterPassword">manageMasterPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod">manualSnapshotRetentionPeriod</a></code> | <code>number</code> | The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterPasswordSecretKmsKeyId">masterPasswordSecretKmsKeyId</a></code> | <code>string</code> | The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUserPassword">masterUserPassword</a></code> | <code>string</code> | The password associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.multiAz">multiAz</a></code> | <code>boolean \| cdktn.IResolvable</code> | A boolean indicating if the redshift cluster is multi-az or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.namespaceResourcePolicy">namespaceResourcePolicy</a></code> | <code>string</code> | The namespace resource policy document that will be attached to a Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes">numberOfNodes</a></code> | <code>number</code> | The number of compute nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.ownerAccount">ownerAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.port">port</a></code> | <code>number</code> | The port number on which the cluster accepts incoming connections. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | The weekly time range (in UTC) during which automated cluster maintenance can occur. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the cluster can be accessed from a public network. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.resourceAction">resourceAction</a></code> | <code>string</code> | The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.revisionTarget">revisionTarget</a></code> | <code>string</code> | The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.rotateEncryptionKey">rotateEncryptionKey</a></code> | <code>boolean \| cdktn.IResolvable</code> | A boolean indicating if we want to rotate Encryption Keys. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier">snapshotClusterIdentifier</a></code> | <code>string</code> | The name of the cluster the source snapshot was created from. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyGrantName">snapshotCopyGrantName</a></code> | <code>string</code> | The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyManual">snapshotCopyManual</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyRetentionPeriod">snapshotCopyRetentionPeriod</a></code> | <code>number</code> | The number of days to retain automated snapshots in the destination region after they are copied from the source region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>string</code> | The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]</code> | The list of tags for the cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

The type of the cluster.

When cluster type is specified as single-node, the NumberOfNodes parameter is not required and if multi-node, the NumberOfNodes parameter is required

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_type RedshiftCluster#cluster_type}

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

The name of the first database to be created when the cluster is created.

To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#db_name RedshiftCluster#db_name}

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUsername"></a>

```typescript
public readonly masterUsername: string;
```

- *Type:* string

The user name associated with the master user account for the cluster that is being created.

The user name can't be PUBLIC and first character must be a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#master_username RedshiftCluster#master_username}

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

The node type to be provisioned for the cluster.Valid Values: ds2.xlarge | ds2.8xlarge | dc1.large | dc1.8xlarge | dc2.large | dc2.8xlarge | ra3.large | ra3.4xlarge | ra3.16xlarge | rg.large | rg.xlarge | rg.4xlarge | rg.12xlarge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#node_type RedshiftCluster#node_type}

---

##### `allowVersionUpgrade`<sup>Optional</sup> <a name="allowVersionUpgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade"></a>

```typescript
public readonly allowVersionUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster.

Default value is True

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}

---

##### `aquaConfigurationStatus`<sup>Optional</sup> <a name="aquaConfigurationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus"></a>

```typescript
public readonly aquaConfigurationStatus: string;
```

- *Type:* string

The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored.

Possible values include the following.

enabled - Use AQUA if it is available for the current Region and Amazon Redshift node type.
disabled - Don't use AQUA.
auto - Amazon Redshift determines whether to use AQUA.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}

---

##### `automatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="automatedSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod"></a>

```typescript
public readonly automatedSnapshotRetentionPeriod: number;
```

- *Type:* number

The number of days that automated snapshots are retained.

If the value is 0, automated snapshots are disabled. Default value is 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster.

Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#availability_zone RedshiftCluster#availability_zone}

---

##### `availabilityZoneRelocation`<sup>Optional</sup> <a name="availabilityZoneRelocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocation"></a>

```typescript
public readonly availabilityZoneRelocation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#availability_zone_relocation RedshiftCluster#availability_zone_relocation}

---

##### `availabilityZoneRelocationStatus`<sup>Optional</sup> <a name="availabilityZoneRelocationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationStatus"></a>

```typescript
public readonly availabilityZoneRelocationStatus: string;
```

- *Type:* string

The availability zone relocation status of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#availability_zone_relocation_status RedshiftCluster#availability_zone_relocation_status}

---

##### `classic`<sup>Optional</sup> <a name="classic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.classic"></a>

```typescript
public readonly classic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A boolean value indicating whether the resize operation is using the classic resize process.

If you don't provide this parameter or set the value to false , the resize type is elastic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#classic RedshiftCluster#classic}

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

A unique identifier for the cluster.

You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}

---

##### `clusterParameterGroupName`<sup>Optional</sup> <a name="clusterParameterGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName"></a>

```typescript
public readonly clusterParameterGroupName: string;
```

- *Type:* string

The name of the parameter group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}

---

##### `clusterSecurityGroups`<sup>Optional</sup> <a name="clusterSecurityGroups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups"></a>

```typescript
public readonly clusterSecurityGroups: string[];
```

- *Type:* string[]

A list of security groups to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}

---

##### `clusterSubnetGroupName`<sup>Optional</sup> <a name="clusterSubnetGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName"></a>

```typescript
public readonly clusterSubnetGroupName: string;
```

- *Type:* string

The name of a cluster subnet group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_version RedshiftCluster#cluster_version}

---

##### `deferMaintenance`<sup>Optional</sup> <a name="deferMaintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenance"></a>

```typescript
public readonly deferMaintenance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A boolean indicating whether to enable the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#defer_maintenance RedshiftCluster#defer_maintenance}

---

##### `deferMaintenanceDuration`<sup>Optional</sup> <a name="deferMaintenanceDuration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceDuration"></a>

```typescript
public readonly deferMaintenanceDuration: number;
```

- *Type:* number

An integer indicating the duration of the maintenance window in days.

If you specify a duration, you can't specify an end time. The duration must be 60 days or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#defer_maintenance_duration RedshiftCluster#defer_maintenance_duration}

---

##### `deferMaintenanceEndTime`<sup>Optional</sup> <a name="deferMaintenanceEndTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceEndTime"></a>

```typescript
public readonly deferMaintenanceEndTime: string;
```

- *Type:* string

A timestamp indicating end time for the deferred maintenance window.

If you specify an end time, you can't specify a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#defer_maintenance_end_time RedshiftCluster#defer_maintenance_end_time}

---

##### `deferMaintenanceStartTime`<sup>Optional</sup> <a name="deferMaintenanceStartTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceStartTime"></a>

```typescript
public readonly deferMaintenanceStartTime: string;
```

- *Type:* string

A timestamp indicating the start time for the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#defer_maintenance_start_time RedshiftCluster#defer_maintenance_start_time}

---

##### `destinationRegion`<sup>Optional</sup> <a name="destinationRegion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

The destination AWS Region that you want to copy snapshots to.

Constraints: Must be the name of a valid AWS Region. For more information, see Regions and Endpoints in the Amazon Web Services [https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region] General Reference

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#destination_region RedshiftCluster#destination_region}

---

##### `elasticIp`<sup>Optional</sup> <a name="elasticIp" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.elasticIp"></a>

```typescript
public readonly elasticIp: string;
```

- *Type:* string

The Elastic IP (EIP) address for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the data in the cluster is encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#encrypted RedshiftCluster#encrypted}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.endpoint"></a>

```typescript
public readonly endpoint: RedshiftClusterEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}.

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="enhancedVpcRouting" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting"></a>

```typescript
public readonly enhancedVpcRouting: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

An option that specifies whether to create the cluster with enhanced VPC routing enabled.

To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide.

If this option is true , enhanced VPC routing is enabled.

Default: false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}

---

##### `hsmClientCertificateIdentifier`<sup>Optional</sup> <a name="hsmClientCertificateIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmClientCertificateIdentifier"></a>

```typescript
public readonly hsmClientCertificateIdentifier: string;
```

- *Type:* string

Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#hsm_client_certificate_identifier RedshiftCluster#hsm_client_certificate_identifier}

---

##### `hsmConfigurationIdentifier`<sup>Optional</sup> <a name="hsmConfigurationIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmConfigurationIdentifier"></a>

```typescript
public readonly hsmConfigurationIdentifier: string;
```

- *Type:* string

Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#hsm_configuration_identifier RedshiftCluster#hsm_configuration_identifier}

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.

You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 50 IAM roles in a single request

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#iam_roles RedshiftCluster#iam_roles}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}

---

##### `loggingProperties`<sup>Optional</sup> <a name="loggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.loggingProperties"></a>

```typescript
public readonly loggingProperties: RedshiftClusterLoggingProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}.

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="maintenanceTrackName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName"></a>

```typescript
public readonly maintenanceTrackName: string;
```

- *Type:* string

The name for the maintenance track that you want to assign for the cluster.

This name change is asynchronous. The new track name stays in the PendingModifiedValues for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}

---

##### `manageMasterPassword`<sup>Optional</sup> <a name="manageMasterPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manageMasterPassword"></a>

```typescript
public readonly manageMasterPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not.

You can't use MasterUserPassword if ManageMasterPassword is true. If ManageMasterPassword is false or not set, Amazon Redshift uses MasterUserPassword for the admin user account's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#manage_master_password RedshiftCluster#manage_master_password}

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="manualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod"></a>

```typescript
public readonly manualSnapshotRetentionPeriod: number;
```

- *Type:* number

The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region.

If the value is -1, the manual snapshot is retained indefinitely.

The value must be either -1 or an integer between 1 and 3,653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}

---

##### `masterPasswordSecretKmsKeyId`<sup>Optional</sup> <a name="masterPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterPasswordSecretKmsKeyId"></a>

```typescript
public readonly masterPasswordSecretKmsKeyId: string;
```

- *Type:* string

The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#master_password_secret_kms_key_id RedshiftCluster#master_password_secret_kms_key_id}

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUserPassword"></a>

```typescript
public readonly masterUserPassword: string;
```

- *Type:* string

The password associated with the master user account for the cluster that is being created.

You can't use MasterUserPassword if ManageMasterPassword is true. Password must be between 8 and 64 characters in length, should have at least one uppercase letter.Must contain at least one lowercase letter.Must contain one number.Can be any printable ASCII character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#master_user_password RedshiftCluster#master_user_password}

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.multiAz"></a>

```typescript
public readonly multiAz: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A boolean indicating if the redshift cluster is multi-az or not.

If you don't provide this parameter or set the value to false, the redshift cluster will be single-az.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#multi_az RedshiftCluster#multi_az}

---

##### `namespaceResourcePolicy`<sup>Optional</sup> <a name="namespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.namespaceResourcePolicy"></a>

```typescript
public readonly namespaceResourcePolicy: string;
```

- *Type:* string

The namespace resource policy document that will be attached to a Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#namespace_resource_policy RedshiftCluster#namespace_resource_policy}

---

##### `numberOfNodes`<sup>Optional</sup> <a name="numberOfNodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes"></a>

```typescript
public readonly numberOfNodes: number;
```

- *Type:* number

The number of compute nodes in the cluster.

This parameter is required when the ClusterType parameter is specified as multi-node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}

---

##### `ownerAccount`<sup>Optional</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.ownerAccount"></a>

```typescript
public readonly ownerAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number on which the cluster accepts incoming connections.

The cluster is accessible only via the JDBC and ODBC connection strings

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#port RedshiftCluster#port}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

The weekly time range (in UTC) during which automated cluster maintenance can occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the cluster can be accessed from a public network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}

---

##### `resourceAction`<sup>Optional</sup> <a name="resourceAction" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.resourceAction"></a>

```typescript
public readonly resourceAction: string;
```

- *Type:* string

The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#resource_action RedshiftCluster#resource_action}

---

##### `revisionTarget`<sup>Optional</sup> <a name="revisionTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.revisionTarget"></a>

```typescript
public readonly revisionTarget: string;
```

- *Type:* string

The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#revision_target RedshiftCluster#revision_target}

---

##### `rotateEncryptionKey`<sup>Optional</sup> <a name="rotateEncryptionKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.rotateEncryptionKey"></a>

```typescript
public readonly rotateEncryptionKey: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A boolean indicating if we want to rotate Encryption Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#rotate_encryption_key RedshiftCluster#rotate_encryption_key}

---

##### `snapshotClusterIdentifier`<sup>Optional</sup> <a name="snapshotClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier"></a>

```typescript
public readonly snapshotClusterIdentifier: string;
```

- *Type:* string

The name of the cluster the source snapshot was created from.

This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}

---

##### `snapshotCopyGrantName`<sup>Optional</sup> <a name="snapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyGrantName"></a>

```typescript
public readonly snapshotCopyGrantName: string;
```

- *Type:* string

The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_copy_grant_name RedshiftCluster#snapshot_copy_grant_name}

---

##### `snapshotCopyManual`<sup>Optional</sup> <a name="snapshotCopyManual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyManual"></a>

```typescript
public readonly snapshotCopyManual: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_copy_manual RedshiftCluster#snapshot_copy_manual}

---

##### `snapshotCopyRetentionPeriod`<sup>Optional</sup> <a name="snapshotCopyRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyRetentionPeriod"></a>

```typescript
public readonly snapshotCopyRetentionPeriod: number;
```

- *Type:* number

The number of days to retain automated snapshots in the destination region after they are copied from the source region.

Default is 7. 

 Constraints: Must be at least 1 and no more than 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_copy_retention_period RedshiftCluster#snapshot_copy_retention_period}

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier"></a>

```typescript
public readonly snapshotIdentifier: string;
```

- *Type:* string

The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RedshiftClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]

The list of tags for the cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#tags RedshiftCluster#tags}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}

---

### RedshiftClusterEndpoint <a name="RedshiftClusterEndpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint.Initializer"></a>

```typescript
import { redshiftCluster } from '@cdktn/provider-awscc'

const redshiftClusterEndpoint: redshiftCluster.RedshiftClusterEndpoint = { ... }
```


### RedshiftClusterLoggingProperties <a name="RedshiftClusterLoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.Initializer"></a>

```typescript
import { redshiftCluster } from '@cdktn/provider-awscc'

const redshiftClusterLoggingProperties: redshiftCluster.RedshiftClusterLoggingProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#bucket_name RedshiftCluster#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logDestinationType">logDestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logExports">logExports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#log_exports RedshiftCluster#log_exports}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#bucket_name RedshiftCluster#bucket_name}.

---

##### `logDestinationType`<sup>Optional</sup> <a name="logDestinationType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logDestinationType"></a>

```typescript
public readonly logDestinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}.

---

##### `logExports`<sup>Optional</sup> <a name="logExports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logExports"></a>

```typescript
public readonly logExports: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#log_exports RedshiftCluster#log_exports}.

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}.

---

### RedshiftClusterTags <a name="RedshiftClusterTags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.Initializer"></a>

```typescript
import { redshiftCluster } from '@cdktn/provider-awscc'

const redshiftClusterTags: redshiftCluster.RedshiftClusterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#key RedshiftCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#value RedshiftCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftClusterEndpointOutputReference <a name="RedshiftClusterEndpointOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer"></a>

```typescript
import { redshiftCluster } from '@cdktn/provider-awscc'

new redshiftCluster.RedshiftClusterEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftClusterEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

---


### RedshiftClusterLoggingPropertiesOutputReference <a name="RedshiftClusterLoggingPropertiesOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer"></a>

```typescript
import { redshiftCluster } from '@cdktn/provider-awscc'

new redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogDestinationType">resetLogDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogExports">resetLogExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetLogDestinationType` <a name="resetLogDestinationType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogDestinationType"></a>

```typescript
public resetLogDestinationType(): void
```

##### `resetLogExports` <a name="resetLogExports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogExports"></a>

```typescript
public resetLogExports(): void
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetS3KeyPrefix"></a>

```typescript
public resetS3KeyPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationTypeInput">logDestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExportsInput">logExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationType">logDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExports">logExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `logDestinationTypeInput`<sup>Optional</sup> <a name="logDestinationTypeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationTypeInput"></a>

```typescript
public readonly logDestinationTypeInput: string;
```

- *Type:* string

---

##### `logExportsInput`<sup>Optional</sup> <a name="logExportsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExportsInput"></a>

```typescript
public readonly logExportsInput: string[];
```

- *Type:* string[]

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefixInput"></a>

```typescript
public readonly s3KeyPrefixInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `logDestinationType`<sup>Required</sup> <a name="logDestinationType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationType"></a>

```typescript
public readonly logDestinationType: string;
```

- *Type:* string

---

##### `logExports`<sup>Required</sup> <a name="logExports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExports"></a>

```typescript
public readonly logExports: string[];
```

- *Type:* string[]

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftClusterLoggingProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

---


### RedshiftClusterTagsList <a name="RedshiftClusterTagsList" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer"></a>

```typescript
import { redshiftCluster } from '@cdktn/provider-awscc'

new redshiftCluster.RedshiftClusterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get"></a>

```typescript
public get(index: number): RedshiftClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>[]

---


### RedshiftClusterTagsOutputReference <a name="RedshiftClusterTagsOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer"></a>

```typescript
import { redshiftCluster } from '@cdktn/provider-awscc'

new redshiftCluster.RedshiftClusterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftClusterTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>

---




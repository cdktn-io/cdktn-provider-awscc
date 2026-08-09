# `efsFileSystem` Submodule <a name="`efsFileSystem` Submodule" id="@cdktn/provider-awscc.efsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsFileSystem <a name="EfsFileSystem" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system awscc_efs_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

new efsFileSystem.EfsFileSystem(scope: Construct, id: string, config?: EfsFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy">putBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection">putFileSystemProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags">putFileSystemTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies">putLifecyclePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName">resetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBackupPolicy">resetBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBypassPolicyLockoutSafetyCheck">resetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemPolicy">resetFileSystemPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemProtection">resetFileSystemProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemTags">resetFileSystemTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetLifecyclePolicies">resetLifecyclePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetPerformanceMode">resetPerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps">resetProvisionedThroughputInMibps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetThroughputMode">resetThroughputMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupPolicy` <a name="putBackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy"></a>

```typescript
public putBackupPolicy(value: EfsFileSystemBackupPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

---

##### `putFileSystemProtection` <a name="putFileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection"></a>

```typescript
public putFileSystemProtection(value: EfsFileSystemFileSystemProtection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

---

##### `putFileSystemTags` <a name="putFileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags"></a>

```typescript
public putFileSystemTags(value: IResolvable | EfsFileSystemFileSystemTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putFileSystemTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]

---

##### `putLifecyclePolicies` <a name="putLifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies"></a>

```typescript
public putLifecyclePolicies(value: IResolvable | EfsFileSystemLifecyclePolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putLifecyclePolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration"></a>

```typescript
public putReplicationConfiguration(value: EfsFileSystemReplicationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

---

##### `resetAvailabilityZoneName` <a name="resetAvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName"></a>

```typescript
public resetAvailabilityZoneName(): void
```

##### `resetBackupPolicy` <a name="resetBackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBackupPolicy"></a>

```typescript
public resetBackupPolicy(): void
```

##### `resetBypassPolicyLockoutSafetyCheck` <a name="resetBypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetBypassPolicyLockoutSafetyCheck"></a>

```typescript
public resetBypassPolicyLockoutSafetyCheck(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetFileSystemPolicy` <a name="resetFileSystemPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemPolicy"></a>

```typescript
public resetFileSystemPolicy(): void
```

##### `resetFileSystemProtection` <a name="resetFileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemProtection"></a>

```typescript
public resetFileSystemProtection(): void
```

##### `resetFileSystemTags` <a name="resetFileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetFileSystemTags"></a>

```typescript
public resetFileSystemTags(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLifecyclePolicies` <a name="resetLifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetLifecyclePolicies"></a>

```typescript
public resetLifecyclePolicies(): void
```

##### `resetPerformanceMode` <a name="resetPerformanceMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetPerformanceMode"></a>

```typescript
public resetPerformanceMode(): void
```

##### `resetProvisionedThroughputInMibps` <a name="resetProvisionedThroughputInMibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps"></a>

```typescript
public resetProvisionedThroughputInMibps(): void
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetReplicationConfiguration"></a>

```typescript
public resetReplicationConfiguration(): void
```

##### `resetThroughputMode` <a name="resetThroughputMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.resetThroughputMode"></a>

```typescript
public resetThroughputMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EfsFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

efsFileSystem.EfsFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

efsFileSystem.EfsFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

efsFileSystem.EfsFileSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

efsFileSystem.EfsFileSystem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EfsFileSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EfsFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EfsFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EfsFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicy">backupPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference">EfsFileSystemBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtection">fileSystemProtection</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference">EfsFileSystemFileSystemProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTags">fileSystemTags</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList">EfsFileSystemFileSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePolicies">lifecyclePolicies</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList">EfsFileSystemLifecyclePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference">EfsFileSystemReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput">availabilityZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicyInput">backupPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheckInput">bypassPolicyLockoutSafetyCheckInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicyInput">fileSystemPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtectionInput">fileSystemProtectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTagsInput">fileSystemTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePoliciesInput">lifecyclePoliciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceModeInput">performanceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput">provisionedThroughputInMibpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputModeInput">throughputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneName">availabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicy">fileSystemPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceMode">performanceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps">provisionedThroughputInMibps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputMode">throughputMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicy"></a>

```typescript
public readonly backupPolicy: EfsFileSystemBackupPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference">EfsFileSystemBackupPolicyOutputReference</a>

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `fileSystemProtection`<sup>Required</sup> <a name="fileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtection"></a>

```typescript
public readonly fileSystemProtection: EfsFileSystemFileSystemProtectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference">EfsFileSystemFileSystemProtectionOutputReference</a>

---

##### `fileSystemTags`<sup>Required</sup> <a name="fileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTags"></a>

```typescript
public readonly fileSystemTags: EfsFileSystemFileSystemTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList">EfsFileSystemFileSystemTagsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecyclePolicies`<sup>Required</sup> <a name="lifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePolicies"></a>

```typescript
public readonly lifecyclePolicies: EfsFileSystemLifecyclePoliciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList">EfsFileSystemLifecyclePoliciesList</a>

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: EfsFileSystemReplicationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference">EfsFileSystemReplicationConfigurationOutputReference</a>

---

##### `availabilityZoneNameInput`<sup>Optional</sup> <a name="availabilityZoneNameInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput"></a>

```typescript
public readonly availabilityZoneNameInput: string;
```

- *Type:* string

---

##### `backupPolicyInput`<sup>Optional</sup> <a name="backupPolicyInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.backupPolicyInput"></a>

```typescript
public readonly backupPolicyInput: IResolvable | EfsFileSystemBackupPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

---

##### `bypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheckInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheckInput"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fileSystemPolicyInput`<sup>Optional</sup> <a name="fileSystemPolicyInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicyInput"></a>

```typescript
public readonly fileSystemPolicyInput: string;
```

- *Type:* string

---

##### `fileSystemProtectionInput`<sup>Optional</sup> <a name="fileSystemProtectionInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemProtectionInput"></a>

```typescript
public readonly fileSystemProtectionInput: IResolvable | EfsFileSystemFileSystemProtection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

---

##### `fileSystemTagsInput`<sup>Optional</sup> <a name="fileSystemTagsInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemTagsInput"></a>

```typescript
public readonly fileSystemTagsInput: IResolvable | EfsFileSystemFileSystemTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `lifecyclePoliciesInput`<sup>Optional</sup> <a name="lifecyclePoliciesInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.lifecyclePoliciesInput"></a>

```typescript
public readonly lifecyclePoliciesInput: IResolvable | EfsFileSystemLifecyclePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]

---

##### `performanceModeInput`<sup>Optional</sup> <a name="performanceModeInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceModeInput"></a>

```typescript
public readonly performanceModeInput: string;
```

- *Type:* string

---

##### `provisionedThroughputInMibpsInput`<sup>Optional</sup> <a name="provisionedThroughputInMibpsInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput"></a>

```typescript
public readonly provisionedThroughputInMibpsInput: number;
```

- *Type:* number

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.replicationConfigurationInput"></a>

```typescript
public readonly replicationConfigurationInput: IResolvable | EfsFileSystemReplicationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

---

##### `throughputModeInput`<sup>Optional</sup> <a name="throughputModeInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputModeInput"></a>

```typescript
public readonly throughputModeInput: string;
```

- *Type:* string

---

##### `availabilityZoneName`<sup>Required</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.availabilityZoneName"></a>

```typescript
public readonly availabilityZoneName: string;
```

- *Type:* string

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.bypassPolicyLockoutSafetyCheck"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fileSystemPolicy`<sup>Required</sup> <a name="fileSystemPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.fileSystemPolicy"></a>

```typescript
public readonly fileSystemPolicy: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `performanceMode`<sup>Required</sup> <a name="performanceMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.performanceMode"></a>

```typescript
public readonly performanceMode: string;
```

- *Type:* string

---

##### `provisionedThroughputInMibps`<sup>Required</sup> <a name="provisionedThroughputInMibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps"></a>

```typescript
public readonly provisionedThroughputInMibps: number;
```

- *Type:* number

---

##### `throughputMode`<sup>Required</sup> <a name="throughputMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.throughputMode"></a>

```typescript
public readonly throughputMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EfsFileSystemBackupPolicy <a name="EfsFileSystemBackupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

const efsFileSystemBackupPolicy: efsFileSystem.EfsFileSystemBackupPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.property.status">status</a></code> | <code>string</code> | Set the backup policy status for the file system. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Set the backup policy status for the file system.

+  *ENABLED* - Turns automatic backups on for the file system. 
  +  *DISABLED* - Turns automatic backups off for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#status EfsFileSystem#status}

---

### EfsFileSystemConfig <a name="EfsFileSystemConfig" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

const efsFileSystemConfig: efsFileSystem.EfsFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName">availabilityZoneName</a></code> | <code>string</code> | For One Zone file systems, specify the AWS Availability Zone in which to create the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.backupPolicy">backupPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | Use the ``BackupPolicy`` to turn automatic backups on or off for the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | A Boolean value that, if true, creates an encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemPolicy">fileSystemPolicy</a></code> | <code>string</code> | The ``FileSystemPolicy`` for the EFS file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemProtection">fileSystemProtection</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | Describes the protection on the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemTags">fileSystemTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]</code> | Use to create one or more tags associated with the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The ID of the kms-key-long to be used to protect the encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicies">lifecyclePolicies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]</code> | An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.performanceMode">performanceMode</a></code> | <code>string</code> | The performance mode of the file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps">provisionedThroughputInMibps</a></code> | <code>number</code> | The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | Describes the replication configuration for a specific file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.throughputMode">throughputMode</a></code> | <code>string</code> | Specifies the throughput mode for the file system. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `availabilityZoneName`<sup>Optional</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName"></a>

```typescript
public readonly availabilityZoneName: string;
```

- *Type:* string

For One Zone file systems, specify the AWS Availability Zone in which to create the file system.

Use the format ``us-east-1a`` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type) in the *Amazon EFS User Guide*.
  One Zone file systems are not available in all Availability Zones in AWS-Regions where Amazon EFS is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}

---

##### `backupPolicy`<sup>Optional</sup> <a name="backupPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.backupPolicy"></a>

```typescript
public readonly backupPolicy: EfsFileSystemBackupPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

Use the ``BackupPolicy`` to turn automatic backups on or off for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#backup_policy EfsFileSystem#backup_policy}

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check.

The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future ``PutFileSystemPolicy`` requests on this file system. Set ``BypassPolicyLockoutSafetyCheck`` to ``True`` only when you intend to prevent the IAM principal that is making the request from making subsequent ``PutFileSystemPolicy`` requests on this file system. The default value is ``False``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#bypass_policy_lockout_safety_check EfsFileSystem#bypass_policy_lockout_safety_check}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A Boolean value that, if true, creates an encrypted file system.

When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing kms-key-long. If you don't specify a kms-key, then the default kms-key for EFS, ``/aws/elasticfilesystem``, is used to protect the encrypted file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#encrypted EfsFileSystem#encrypted}

---

##### `fileSystemPolicy`<sup>Optional</sup> <a name="fileSystemPolicy" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemPolicy"></a>

```typescript
public readonly fileSystemPolicy: string;
```

- *Type:* string

The ``FileSystemPolicy`` for the EFS file system.

A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see [Using to control NFS access to Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#file_system_policy EfsFileSystem#file_system_policy}

---

##### `fileSystemProtection`<sup>Optional</sup> <a name="fileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemProtection"></a>

```typescript
public readonly fileSystemProtection: EfsFileSystemFileSystemProtection;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

Describes the protection on the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#file_system_protection EfsFileSystem#file_system_protection}

---

##### `fileSystemTags`<sup>Optional</sup> <a name="fileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.fileSystemTags"></a>

```typescript
public readonly fileSystemTags: IResolvable | EfsFileSystemFileSystemTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]

Use to create one or more tags associated with the file system.

Each tag is a user-defined key-value pair. Name your file system on creation by including a ``"Key":"Name","Value":"{value}"`` key-value pair. Each key must be unique. For more information, see [Tagging resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *General Reference Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#file_system_tags EfsFileSystem#file_system_tags}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The ID of the kms-key-long to be used to protect the encrypted file system.

This parameter is only required if you want to use a nondefault kms-key. If this parameter is not specified, the default kms-key for EFS is used. This ID can be in one of the following formats:
  +  Key ID - A unique identifier of the key, for example ``1234abcd-12ab-34cd-56ef-1234567890ab``.
  +  ARN - An Amazon Resource Name (ARN) for the key, for example ``arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab``.
  +  Key alias - A previously created display name for a key, for example ``alias/projectKey1``.
  +  Key alias ARN - An ARN for a key alias, for example ``arn:aws:kms:us-west-2:444455556666:alias/projectKey1``.
  
 If ``KmsKeyId`` is specified, the ``Encrypted`` parameter must be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}

---

##### `lifecyclePolicies`<sup>Optional</sup> <a name="lifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicies"></a>

```typescript
public readonly lifecyclePolicies: IResolvable | EfsFileSystemLifecyclePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]

An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object.

A ``LifecycleConfiguration`` object informs Lifecycle management of the following:
  +  When to move files in the file system from primary storage to IA storage.
  +  When to move files in the file system from primary storage or IA storage to Archive storage.
  +  When to move files that are in IA or Archive storage to primary storage.
  
  EFS requires that each ``LifecyclePolicy`` object have only a single transition. This means that in a request body, ``LifecyclePolicies`` needs to be structured as an array of ``LifecyclePolicy`` objects, one object for each transition, ``TransitionToIA``, ``TransitionToArchive````TransitionToPrimaryStorageClass``. See the example requests in the following section for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#lifecycle_policies EfsFileSystem#lifecycle_policies}

---

##### `performanceMode`<sup>Optional</sup> <a name="performanceMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.performanceMode"></a>

```typescript
public readonly performanceMode: string;
```

- *Type:* string

The performance mode of the file system.

We recommend ``generalPurpose`` performance mode for all file systems. File systems using the ``maxIO`` performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The ``maxIO`` mode is not supported on One Zone file systems.
  Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.
  Default is ``generalPurpose``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#performance_mode EfsFileSystem#performance_mode}

---

##### `provisionedThroughputInMibps`<sup>Optional</sup> <a name="provisionedThroughputInMibps" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps"></a>

```typescript
public readonly provisionedThroughputInMibps: number;
```

- *Type:* number

The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating.

Required if ``ThroughputMode`` is set to ``provisioned``. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact SUP. For more information, see [Amazon EFS quotas that you can increase](https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: EfsFileSystemReplicationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

Describes the replication configuration for a specific file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#replication_configuration EfsFileSystem#replication_configuration}

---

##### `throughputMode`<sup>Optional</sup> <a name="throughputMode" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemConfig.property.throughputMode"></a>

```typescript
public readonly throughputMode: string;
```

- *Type:* string

Specifies the throughput mode for the file system.

The mode can be ``bursting``, ``provisioned``, or ``elastic``. If you set ``ThroughputMode`` to ``provisioned``, you must also set a value for ``ProvisionedThroughputInMibps``. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see [Specifying throughput with provisioned mode](https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the *Amazon EFS User Guide*. 
 Default is ``bursting``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}

---

### EfsFileSystemFileSystemProtection <a name="EfsFileSystemFileSystemProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

const efsFileSystemFileSystemProtection: efsFileSystem.EfsFileSystemFileSystemProtection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.property.replicationOverwriteProtection">replicationOverwriteProtection</a></code> | <code>string</code> | The status of the file system's replication overwrite protection. |

---

##### `replicationOverwriteProtection`<sup>Optional</sup> <a name="replicationOverwriteProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection.property.replicationOverwriteProtection"></a>

```typescript
public readonly replicationOverwriteProtection: string;
```

- *Type:* string

The status of the file system's replication overwrite protection.

+  ``ENABLED`` ? The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is ``ENABLED`` by default. 
  +  ``DISABLED`` ? The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.
  +  ``REPLICATING`` ? The file system is being used as the destination file system in a replication configuration. The file system is read-only and is modified only by EFS replication.
  
 If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#replication_overwrite_protection EfsFileSystem#replication_overwrite_protection}

---

### EfsFileSystemFileSystemTags <a name="EfsFileSystemFileSystemTags" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

const efsFileSystemFileSystemTags: efsFileSystem.EfsFileSystemFileSystemTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.key">key</a></code> | <code>string</code> | The tag key (String). The key can't start with ``aws:``. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.value">value</a></code> | <code>string</code> | The value of the tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key (String). The key can't start with ``aws:``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#key EfsFileSystem#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#value EfsFileSystem#value}

---

### EfsFileSystemLifecyclePolicies <a name="EfsFileSystemLifecyclePolicies" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

const efsFileSystemLifecyclePolicies: efsFileSystem.EfsFileSystemLifecyclePolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToArchive">transitionToArchive</a></code> | <code>string</code> | The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToIa">transitionToIa</a></code> | <code>string</code> | The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToPrimaryStorageClass">transitionToPrimaryStorageClass</a></code> | <code>string</code> | Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage. |

---

##### `transitionToArchive`<sup>Optional</sup> <a name="transitionToArchive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToArchive"></a>

```typescript
public readonly transitionToArchive: string;
```

- *Type:* string

The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#transition_to_archive EfsFileSystem#transition_to_archive}

---

##### `transitionToIa`<sup>Optional</sup> <a name="transitionToIa" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToIa"></a>

```typescript
public readonly transitionToIa: string;
```

- *Type:* string

The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}

---

##### `transitionToPrimaryStorageClass`<sup>Optional</sup> <a name="transitionToPrimaryStorageClass" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies.property.transitionToPrimaryStorageClass"></a>

```typescript
public readonly transitionToPrimaryStorageClass: string;
```

- *Type:* string

Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage.

Metadata operations such as listing the contents of a directory don't count as file access events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}

---

### EfsFileSystemReplicationConfiguration <a name="EfsFileSystemReplicationConfiguration" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

const efsFileSystemReplicationConfiguration: efsFileSystem.EfsFileSystemReplicationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]</code> | An array of destination objects. Only one destination object is supported. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | EfsFileSystemReplicationConfigurationDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]

An array of destination objects. Only one destination object is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#destinations EfsFileSystem#destinations}

---

### EfsFileSystemReplicationConfigurationDestinations <a name="EfsFileSystemReplicationConfigurationDestinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

const efsFileSystemReplicationConfigurationDestinations: efsFileSystem.EfsFileSystemReplicationConfigurationDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.availabilityZoneName">availabilityZoneName</a></code> | <code>string</code> | For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | The ID of the destination Amazon EFS file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The ID of an kms-key-long used to protect the encrypted file system. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.region">region</a></code> | <code>string</code> | The AWS-Region in which the destination file system is located. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the current source file system in the replication configuration. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.status">status</a></code> | <code>string</code> | Describes the status of the replication configuration. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.statusMessage">statusMessage</a></code> | <code>string</code> | Message that provides details about the ``PAUSED`` or ``ERRROR`` state of the replication destination configuration. |

---

##### `availabilityZoneName`<sup>Optional</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.availabilityZoneName"></a>

```typescript
public readonly availabilityZoneName: string;
```

- *Type:* string

For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located.

Use the format ``us-east-1a`` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html) in the *Amazon EFS User Guide*.
  One Zone file system type is not available in all Availability Zones in AWS-Regions where Amazon EFS is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

The ID of the destination Amazon EFS file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#file_system_id EfsFileSystem#file_system_id}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The ID of an kms-key-long used to protect the encrypted file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS-Region in which the destination file system is located.

For One Zone file systems, the replication configuration must specify the AWS-Region in which the destination file system is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#region EfsFileSystem#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the current source file system in the replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#role_arn EfsFileSystem#role_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Describes the status of the replication configuration.

For more information about replication status, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#status EfsFileSystem#status}

---

##### `statusMessage`<sup>Optional</sup> <a name="statusMessage" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

Message that provides details about the ``PAUSED`` or ``ERRROR`` state of the replication destination configuration.

For more information about replication status messages, see [Viewing replication details](https://docs.aws.amazon.com//efs/latest/ug/awsbackup.html#restoring-backup-efsmonitoring-replication-status.html) in the *Amazon EFS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/efs_file_system#status_message EfsFileSystem#status_message}

---

## Classes <a name="Classes" id="Classes"></a>

### EfsFileSystemBackupPolicyOutputReference <a name="EfsFileSystemBackupPolicyOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

new efsFileSystem.EfsFileSystemBackupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsFileSystemBackupPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemBackupPolicy">EfsFileSystemBackupPolicy</a>

---


### EfsFileSystemFileSystemProtectionOutputReference <a name="EfsFileSystemFileSystemProtectionOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

new efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resetReplicationOverwriteProtection">resetReplicationOverwriteProtection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReplicationOverwriteProtection` <a name="resetReplicationOverwriteProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.resetReplicationOverwriteProtection"></a>

```typescript
public resetReplicationOverwriteProtection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtectionInput">replicationOverwriteProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtection">replicationOverwriteProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicationOverwriteProtectionInput`<sup>Optional</sup> <a name="replicationOverwriteProtectionInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtectionInput"></a>

```typescript
public readonly replicationOverwriteProtectionInput: string;
```

- *Type:* string

---

##### `replicationOverwriteProtection`<sup>Required</sup> <a name="replicationOverwriteProtection" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.replicationOverwriteProtection"></a>

```typescript
public readonly replicationOverwriteProtection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsFileSystemFileSystemProtection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemProtection">EfsFileSystemFileSystemProtection</a>

---


### EfsFileSystemFileSystemTagsList <a name="EfsFileSystemFileSystemTagsList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

new efsFileSystem.EfsFileSystemFileSystemTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get"></a>

```typescript
public get(index: number): EfsFileSystemFileSystemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsFileSystemFileSystemTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>[]

---


### EfsFileSystemFileSystemTagsOutputReference <a name="EfsFileSystemFileSystemTagsOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

new efsFileSystem.EfsFileSystemFileSystemTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsFileSystemFileSystemTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemFileSystemTags">EfsFileSystemFileSystemTags</a>

---


### EfsFileSystemLifecyclePoliciesList <a name="EfsFileSystemLifecyclePoliciesList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

new efsFileSystem.EfsFileSystemLifecyclePoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get"></a>

```typescript
public get(index: number): EfsFileSystemLifecyclePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsFileSystemLifecyclePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>[]

---


### EfsFileSystemLifecyclePoliciesOutputReference <a name="EfsFileSystemLifecyclePoliciesOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

new efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToArchive">resetTransitionToArchive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToIa">resetTransitionToIa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToPrimaryStorageClass">resetTransitionToPrimaryStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransitionToArchive` <a name="resetTransitionToArchive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToArchive"></a>

```typescript
public resetTransitionToArchive(): void
```

##### `resetTransitionToIa` <a name="resetTransitionToIa" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToIa"></a>

```typescript
public resetTransitionToIa(): void
```

##### `resetTransitionToPrimaryStorageClass` <a name="resetTransitionToPrimaryStorageClass" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.resetTransitionToPrimaryStorageClass"></a>

```typescript
public resetTransitionToPrimaryStorageClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchiveInput">transitionToArchiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIaInput">transitionToIaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClassInput">transitionToPrimaryStorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchive">transitionToArchive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIa">transitionToIa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClass">transitionToPrimaryStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transitionToArchiveInput`<sup>Optional</sup> <a name="transitionToArchiveInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchiveInput"></a>

```typescript
public readonly transitionToArchiveInput: string;
```

- *Type:* string

---

##### `transitionToIaInput`<sup>Optional</sup> <a name="transitionToIaInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIaInput"></a>

```typescript
public readonly transitionToIaInput: string;
```

- *Type:* string

---

##### `transitionToPrimaryStorageClassInput`<sup>Optional</sup> <a name="transitionToPrimaryStorageClassInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClassInput"></a>

```typescript
public readonly transitionToPrimaryStorageClassInput: string;
```

- *Type:* string

---

##### `transitionToArchive`<sup>Required</sup> <a name="transitionToArchive" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToArchive"></a>

```typescript
public readonly transitionToArchive: string;
```

- *Type:* string

---

##### `transitionToIa`<sup>Required</sup> <a name="transitionToIa" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToIa"></a>

```typescript
public readonly transitionToIa: string;
```

- *Type:* string

---

##### `transitionToPrimaryStorageClass`<sup>Required</sup> <a name="transitionToPrimaryStorageClass" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.transitionToPrimaryStorageClass"></a>

```typescript
public readonly transitionToPrimaryStorageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsFileSystemLifecyclePolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemLifecyclePolicies">EfsFileSystemLifecyclePolicies</a>

---


### EfsFileSystemReplicationConfigurationDestinationsList <a name="EfsFileSystemReplicationConfigurationDestinationsList" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

new efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get"></a>

```typescript
public get(index: number): EfsFileSystemReplicationConfigurationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsFileSystemReplicationConfigurationDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]

---


### EfsFileSystemReplicationConfigurationDestinationsOutputReference <a name="EfsFileSystemReplicationConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

new efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetAvailabilityZoneName">resetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatusMessage">resetStatusMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZoneName` <a name="resetAvailabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetAvailabilityZoneName"></a>

```typescript
public resetAvailabilityZoneName(): void
```

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetStatusMessage` <a name="resetStatusMessage" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.resetStatusMessage"></a>

```typescript
public resetStatusMessage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneNameInput">availabilityZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessageInput">statusMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneName">availabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneNameInput`<sup>Optional</sup> <a name="availabilityZoneNameInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneNameInput"></a>

```typescript
public readonly availabilityZoneNameInput: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `statusMessageInput`<sup>Optional</sup> <a name="statusMessageInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessageInput"></a>

```typescript
public readonly statusMessageInput: string;
```

- *Type:* string

---

##### `availabilityZoneName`<sup>Required</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.availabilityZoneName"></a>

```typescript
public readonly availabilityZoneName: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsFileSystemReplicationConfigurationDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>

---


### EfsFileSystemReplicationConfigurationOutputReference <a name="EfsFileSystemReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktn/provider-awscc'

new efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | EfsFileSystemReplicationConfigurationDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.resetDestinations"></a>

```typescript
public resetDestinations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList">EfsFileSystemReplicationConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinations"></a>

```typescript
public readonly destinations: EfsFileSystemReplicationConfigurationDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinationsList">EfsFileSystemReplicationConfigurationDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | EfsFileSystemReplicationConfigurationDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationDestinations">EfsFileSystemReplicationConfigurationDestinations</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsFileSystemReplicationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.efsFileSystem.EfsFileSystemReplicationConfiguration">EfsFileSystemReplicationConfiguration</a>

---




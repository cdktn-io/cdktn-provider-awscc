# `opsworkscmServer` Submodule <a name="`opsworkscmServer` Submodule" id="@cdktn/provider-awscc.opsworkscmServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworkscmServer <a name="OpsworkscmServer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server awscc_opsworkscm_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer"></a>

```typescript
import { opsworkscmServer } from '@cdktn/provider-awscc'

new opsworkscmServer.OpsworkscmServer(scope: Construct, id: string, config: OpsworkscmServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig">OpsworkscmServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig">OpsworkscmServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putEngineAttributes">putEngineAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupRetentionCount">resetBackupRetentionCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomCertificate">resetCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomDomain">resetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomPrivateKey">resetCustomPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetDisableAutomatedBackup">resetDisableAutomatedBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineAttributes">resetEngineAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineModel">resetEngineModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetKeyPair">resetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEngineAttributes` <a name="putEngineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putEngineAttributes"></a>

```typescript
public putEngineAttributes(value: IResolvable | OpsworkscmServerEngineAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putEngineAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putTags"></a>

```typescript
public putTags(value: IResolvable | OpsworkscmServerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]

---

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetAssociatePublicIpAddress"></a>

```typescript
public resetAssociatePublicIpAddress(): void
```

##### `resetBackupId` <a name="resetBackupId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupId"></a>

```typescript
public resetBackupId(): void
```

##### `resetBackupRetentionCount` <a name="resetBackupRetentionCount" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupRetentionCount"></a>

```typescript
public resetBackupRetentionCount(): void
```

##### `resetCustomCertificate` <a name="resetCustomCertificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomCertificate"></a>

```typescript
public resetCustomCertificate(): void
```

##### `resetCustomDomain` <a name="resetCustomDomain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomDomain"></a>

```typescript
public resetCustomDomain(): void
```

##### `resetCustomPrivateKey` <a name="resetCustomPrivateKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomPrivateKey"></a>

```typescript
public resetCustomPrivateKey(): void
```

##### `resetDisableAutomatedBackup` <a name="resetDisableAutomatedBackup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetDisableAutomatedBackup"></a>

```typescript
public resetDisableAutomatedBackup(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetEngineAttributes` <a name="resetEngineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineAttributes"></a>

```typescript
public resetEngineAttributes(): void
```

##### `resetEngineModel` <a name="resetEngineModel" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineModel"></a>

```typescript
public resetEngineModel(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetKeyPair` <a name="resetKeyPair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetKeyPair"></a>

```typescript
public resetKeyPair(): void
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredBackupWindow"></a>

```typescript
public resetPreferredBackupWindow(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpsworkscmServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isConstruct"></a>

```typescript
import { opsworkscmServer } from '@cdktn/provider-awscc'

opsworkscmServer.OpsworkscmServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformElement"></a>

```typescript
import { opsworkscmServer } from '@cdktn/provider-awscc'

opsworkscmServer.OpsworkscmServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformResource"></a>

```typescript
import { opsworkscmServer } from '@cdktn/provider-awscc'

opsworkscmServer.OpsworkscmServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport"></a>

```typescript
import { opsworkscmServer } from '@cdktn/provider-awscc'

opsworkscmServer.OpsworkscmServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OpsworkscmServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsworkscmServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsworkscmServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpsworkscmServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributes">engineAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList">OpsworkscmServerEngineAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList">OpsworkscmServerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupIdInput">backupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCountInput">backupRetentionCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificateInput">customCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomainInput">customDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKeyInput">customPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackupInput">disableAutomatedBackupInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributesInput">engineAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModelInput">engineModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPairInput">keyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArnInput">serviceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCount">backupRetentionCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificate">customCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomain">customDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKey">customPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackup">disableAutomatedBackup</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModel">engineModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPair">keyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `engineAttributes`<sup>Required</sup> <a name="engineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributes"></a>

```typescript
public readonly engineAttributes: OpsworkscmServerEngineAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList">OpsworkscmServerEngineAttributesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tags"></a>

```typescript
public readonly tags: OpsworkscmServerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList">OpsworkscmServerTagsList</a>

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddressInput"></a>

```typescript
public readonly associatePublicIpAddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupIdInput"></a>

```typescript
public readonly backupIdInput: string;
```

- *Type:* string

---

##### `backupRetentionCountInput`<sup>Optional</sup> <a name="backupRetentionCountInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCountInput"></a>

```typescript
public readonly backupRetentionCountInput: number;
```

- *Type:* number

---

##### `customCertificateInput`<sup>Optional</sup> <a name="customCertificateInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificateInput"></a>

```typescript
public readonly customCertificateInput: string;
```

- *Type:* string

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomainInput"></a>

```typescript
public readonly customDomainInput: string;
```

- *Type:* string

---

##### `customPrivateKeyInput`<sup>Optional</sup> <a name="customPrivateKeyInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKeyInput"></a>

```typescript
public readonly customPrivateKeyInput: string;
```

- *Type:* string

---

##### `disableAutomatedBackupInput`<sup>Optional</sup> <a name="disableAutomatedBackupInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackupInput"></a>

```typescript
public readonly disableAutomatedBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `engineAttributesInput`<sup>Optional</sup> <a name="engineAttributesInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributesInput"></a>

```typescript
public readonly engineAttributesInput: IResolvable | OpsworkscmServerEngineAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineModelInput`<sup>Optional</sup> <a name="engineModelInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModelInput"></a>

```typescript
public readonly engineModelInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArnInput"></a>

```typescript
public readonly instanceProfileArnInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `keyPairInput`<sup>Optional</sup> <a name="keyPairInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPairInput"></a>

```typescript
public readonly keyPairInput: string;
```

- *Type:* string

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindowInput"></a>

```typescript
public readonly preferredBackupWindowInput: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `serviceRoleArnInput`<sup>Optional</sup> <a name="serviceRoleArnInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArnInput"></a>

```typescript
public readonly serviceRoleArnInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OpsworkscmServerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `backupRetentionCount`<sup>Required</sup> <a name="backupRetentionCount" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCount"></a>

```typescript
public readonly backupRetentionCount: number;
```

- *Type:* number

---

##### `customCertificate`<sup>Required</sup> <a name="customCertificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificate"></a>

```typescript
public readonly customCertificate: string;
```

- *Type:* string

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string

---

##### `customPrivateKey`<sup>Required</sup> <a name="customPrivateKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKey"></a>

```typescript
public readonly customPrivateKey: string;
```

- *Type:* string

---

##### `disableAutomatedBackup`<sup>Required</sup> <a name="disableAutomatedBackup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackup"></a>

```typescript
public readonly disableAutomatedBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineModel`<sup>Required</sup> <a name="engineModel" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModel"></a>

```typescript
public readonly engineModel: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworkscmServerConfig <a name="OpsworkscmServerConfig" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.Initializer"></a>

```typescript
import { opsworkscmServer } from '@cdktn/provider-awscc'

const opsworkscmServerConfig: opsworkscmServer.OpsworkscmServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_profile_arn OpsworkscmServer#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_type OpsworkscmServer#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#service_role_arn OpsworkscmServer#service_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#associate_public_ip_address OpsworkscmServer#associate_public_ip_address}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupId">backupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_id OpsworkscmServer#backup_id}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupRetentionCount">backupRetentionCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_retention_count OpsworkscmServer#backup_retention_count}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customCertificate">customCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_certificate OpsworkscmServer#custom_certificate}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customDomain">customDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_domain OpsworkscmServer#custom_domain}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customPrivateKey">customPrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_private_key OpsworkscmServer#custom_private_key}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.disableAutomatedBackup">disableAutomatedBackup</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#disable_automated_backup OpsworkscmServer#disable_automated_backup}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine OpsworkscmServer#engine}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineAttributes">engineAttributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_attributes OpsworkscmServer#engine_attributes}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineModel">engineModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_model OpsworkscmServer#engine_model}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_version OpsworkscmServer#engine_version}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.keyPair">keyPair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key_pair OpsworkscmServer#key_pair}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_backup_window OpsworkscmServer#preferred_backup_window}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_maintenance_window OpsworkscmServer#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#security_group_ids OpsworkscmServer#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#server_name OpsworkscmServer#server_name}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#subnet_ids OpsworkscmServer#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#tags OpsworkscmServer#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_profile_arn OpsworkscmServer#instance_profile_arn}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_type OpsworkscmServer#instance_type}.

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#service_role_arn OpsworkscmServer#service_role_arn}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#associate_public_ip_address OpsworkscmServer#associate_public_ip_address}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_id OpsworkscmServer#backup_id}.

---

##### `backupRetentionCount`<sup>Optional</sup> <a name="backupRetentionCount" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupRetentionCount"></a>

```typescript
public readonly backupRetentionCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_retention_count OpsworkscmServer#backup_retention_count}.

---

##### `customCertificate`<sup>Optional</sup> <a name="customCertificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customCertificate"></a>

```typescript
public readonly customCertificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_certificate OpsworkscmServer#custom_certificate}.

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_domain OpsworkscmServer#custom_domain}.

---

##### `customPrivateKey`<sup>Optional</sup> <a name="customPrivateKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customPrivateKey"></a>

```typescript
public readonly customPrivateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_private_key OpsworkscmServer#custom_private_key}.

---

##### `disableAutomatedBackup`<sup>Optional</sup> <a name="disableAutomatedBackup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.disableAutomatedBackup"></a>

```typescript
public readonly disableAutomatedBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#disable_automated_backup OpsworkscmServer#disable_automated_backup}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine OpsworkscmServer#engine}.

---

##### `engineAttributes`<sup>Optional</sup> <a name="engineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineAttributes"></a>

```typescript
public readonly engineAttributes: IResolvable | OpsworkscmServerEngineAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_attributes OpsworkscmServer#engine_attributes}.

---

##### `engineModel`<sup>Optional</sup> <a name="engineModel" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineModel"></a>

```typescript
public readonly engineModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_model OpsworkscmServer#engine_model}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_version OpsworkscmServer#engine_version}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key_pair OpsworkscmServer#key_pair}.

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_backup_window OpsworkscmServer#preferred_backup_window}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_maintenance_window OpsworkscmServer#preferred_maintenance_window}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#security_group_ids OpsworkscmServer#security_group_ids}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#server_name OpsworkscmServer#server_name}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#subnet_ids OpsworkscmServer#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | OpsworkscmServerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#tags OpsworkscmServer#tags}.

---

### OpsworkscmServerEngineAttributes <a name="OpsworkscmServerEngineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.Initializer"></a>

```typescript
import { opsworkscmServer } from '@cdktn/provider-awscc'

const opsworkscmServerEngineAttributes: opsworkscmServer.OpsworkscmServerEngineAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#name OpsworkscmServer#name}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#name OpsworkscmServer#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}.

---

### OpsworkscmServerTags <a name="OpsworkscmServerTags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.Initializer"></a>

```typescript
import { opsworkscmServer } from '@cdktn/provider-awscc'

const opsworkscmServerTags: opsworkscmServer.OpsworkscmServerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key OpsworkscmServer#key}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key OpsworkscmServer#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworkscmServerEngineAttributesList <a name="OpsworkscmServerEngineAttributesList" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer"></a>

```typescript
import { opsworkscmServer } from '@cdktn/provider-awscc'

new opsworkscmServer.OpsworkscmServerEngineAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.get"></a>

```typescript
public get(index: number): OpsworkscmServerEngineAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworkscmServerEngineAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>[]

---


### OpsworkscmServerEngineAttributesOutputReference <a name="OpsworkscmServerEngineAttributesOutputReference" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer"></a>

```typescript
import { opsworkscmServer } from '@cdktn/provider-awscc'

new opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworkscmServerEngineAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>

---


### OpsworkscmServerTagsList <a name="OpsworkscmServerTagsList" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer"></a>

```typescript
import { opsworkscmServer } from '@cdktn/provider-awscc'

new opsworkscmServer.OpsworkscmServerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.get"></a>

```typescript
public get(index: number): OpsworkscmServerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworkscmServerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>[]

---


### OpsworkscmServerTagsOutputReference <a name="OpsworkscmServerTagsOutputReference" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer"></a>

```typescript
import { opsworkscmServer } from '@cdktn/provider-awscc'

new opsworkscmServer.OpsworkscmServerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworkscmServerTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>

---




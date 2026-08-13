# `datasyncLocationSmb` Submodule <a name="`datasyncLocationSmb` Submodule" id="@cdktn/provider-awscc.datasyncLocationSmb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationSmb <a name="DatasyncLocationSmb" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb awscc_datasync_location_smb}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

new datasyncLocationSmb.DatasyncLocationSmb(scope: Construct, id: string, config: DatasyncLocationSmbConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig">DatasyncLocationSmbConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig">DatasyncLocationSmbConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putCmkSecretConfig">putCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putCustomSecretConfig">putCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putMountOptions">putMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetCmkSecretConfig">resetCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetCustomSecretConfig">resetCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetDnsIpAddresses">resetDnsIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetKerberosKeytab">resetKerberosKeytab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetKerberosKrb5Conf">resetKerberosKrb5Conf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetKerberosPrincipal">resetKerberosPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetServerHostname">resetServerHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCmkSecretConfig` <a name="putCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putCmkSecretConfig"></a>

```typescript
public putCmkSecretConfig(value: DatasyncLocationSmbCmkSecretConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putCmkSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a>

---

##### `putCustomSecretConfig` <a name="putCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putCustomSecretConfig"></a>

```typescript
public putCustomSecretConfig(value: DatasyncLocationSmbCustomSecretConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putCustomSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a>

---

##### `putMountOptions` <a name="putMountOptions" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putMountOptions"></a>

```typescript
public putMountOptions(value: DatasyncLocationSmbMountOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putTags"></a>

```typescript
public putTags(value: IResolvable | DatasyncLocationSmbTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>[]

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```

##### `resetCmkSecretConfig` <a name="resetCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetCmkSecretConfig"></a>

```typescript
public resetCmkSecretConfig(): void
```

##### `resetCustomSecretConfig` <a name="resetCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetCustomSecretConfig"></a>

```typescript
public resetCustomSecretConfig(): void
```

##### `resetDnsIpAddresses` <a name="resetDnsIpAddresses" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetDnsIpAddresses"></a>

```typescript
public resetDnsIpAddresses(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetKerberosKeytab` <a name="resetKerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetKerberosKeytab"></a>

```typescript
public resetKerberosKeytab(): void
```

##### `resetKerberosKrb5Conf` <a name="resetKerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetKerberosKrb5Conf"></a>

```typescript
public resetKerberosKrb5Conf(): void
```

##### `resetKerberosPrincipal` <a name="resetKerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetKerberosPrincipal"></a>

```typescript
public resetKerberosPrincipal(): void
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetServerHostname` <a name="resetServerHostname" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetServerHostname"></a>

```typescript
public resetServerHostname(): void
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetSubdirectory"></a>

```typescript
public resetSubdirectory(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationSmb resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isConstruct"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

datasyncLocationSmb.DatasyncLocationSmb.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isTerraformElement"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

datasyncLocationSmb.DatasyncLocationSmb.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isTerraformResource"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

datasyncLocationSmb.DatasyncLocationSmb.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatasyncLocationSmb resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationSmb to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationSmb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationSmb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference">DatasyncLocationSmbCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference">DatasyncLocationSmbCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.locationArn">locationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.managedSecretConfig">managedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference">DatasyncLocationSmbManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference">DatasyncLocationSmbMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList">DatasyncLocationSmbTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.agentArnsInput">agentArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.cmkSecretConfigInput">cmkSecretConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.customSecretConfigInput">customSecretConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.dnsIpAddressesInput">dnsIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKeytabInput">kerberosKeytabInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKrb5ConfInput">kerberosKrb5ConfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosPrincipalInput">kerberosPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptionsInput">mountOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostnameInput">serverHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectoryInput">subdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.agentArns">agentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKeytab">kerberosKeytab</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKrb5Conf">kerberosKrb5Conf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosPrincipal">kerberosPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostname">serverHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cmkSecretConfig`<sup>Required</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.cmkSecretConfig"></a>

```typescript
public readonly cmkSecretConfig: DatasyncLocationSmbCmkSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference">DatasyncLocationSmbCmkSecretConfigOutputReference</a>

---

##### `customSecretConfig`<sup>Required</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.customSecretConfig"></a>

```typescript
public readonly customSecretConfig: DatasyncLocationSmbCustomSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference">DatasyncLocationSmbCustomSecretConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.locationArn"></a>

```typescript
public readonly locationArn: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `managedSecretConfig`<sup>Required</sup> <a name="managedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.managedSecretConfig"></a>

```typescript
public readonly managedSecretConfig: DatasyncLocationSmbManagedSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference">DatasyncLocationSmbManagedSecretConfigOutputReference</a>

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptions"></a>

```typescript
public readonly mountOptions: DatasyncLocationSmbMountOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference">DatasyncLocationSmbMountOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.tags"></a>

```typescript
public readonly tags: DatasyncLocationSmbTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList">DatasyncLocationSmbTagsList</a>

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.agentArnsInput"></a>

```typescript
public readonly agentArnsInput: string[];
```

- *Type:* string[]

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `cmkSecretConfigInput`<sup>Optional</sup> <a name="cmkSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.cmkSecretConfigInput"></a>

```typescript
public readonly cmkSecretConfigInput: IResolvable | DatasyncLocationSmbCmkSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a>

---

##### `customSecretConfigInput`<sup>Optional</sup> <a name="customSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.customSecretConfigInput"></a>

```typescript
public readonly customSecretConfigInput: IResolvable | DatasyncLocationSmbCustomSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a>

---

##### `dnsIpAddressesInput`<sup>Optional</sup> <a name="dnsIpAddressesInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.dnsIpAddressesInput"></a>

```typescript
public readonly dnsIpAddressesInput: string[];
```

- *Type:* string[]

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `kerberosKeytabInput`<sup>Optional</sup> <a name="kerberosKeytabInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKeytabInput"></a>

```typescript
public readonly kerberosKeytabInput: string;
```

- *Type:* string

---

##### `kerberosKrb5ConfInput`<sup>Optional</sup> <a name="kerberosKrb5ConfInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKrb5ConfInput"></a>

```typescript
public readonly kerberosKrb5ConfInput: string;
```

- *Type:* string

---

##### `kerberosPrincipalInput`<sup>Optional</sup> <a name="kerberosPrincipalInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosPrincipalInput"></a>

```typescript
public readonly kerberosPrincipalInput: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: IResolvable | DatasyncLocationSmbMountOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serverHostnameInput`<sup>Optional</sup> <a name="serverHostnameInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostnameInput"></a>

```typescript
public readonly serverHostnameInput: string;
```

- *Type:* string

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectoryInput"></a>

```typescript
public readonly subdirectoryInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DatasyncLocationSmbTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>[]

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.dnsIpAddresses"></a>

```typescript
public readonly dnsIpAddresses: string[];
```

- *Type:* string[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `kerberosKeytab`<sup>Required</sup> <a name="kerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKeytab"></a>

```typescript
public readonly kerberosKeytab: string;
```

- *Type:* string

---

##### `kerberosKrb5Conf`<sup>Required</sup> <a name="kerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosKrb5Conf"></a>

```typescript
public readonly kerberosKrb5Conf: string;
```

- *Type:* string

---

##### `kerberosPrincipal`<sup>Required</sup> <a name="kerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.kerberosPrincipal"></a>

```typescript
public readonly kerberosPrincipal: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `serverHostname`<sup>Required</sup> <a name="serverHostname" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostname"></a>

```typescript
public readonly serverHostname: string;
```

- *Type:* string

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmb.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationSmbCmkSecretConfig <a name="DatasyncLocationSmbCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig.Initializer"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

const datasyncLocationSmbCmkSecretConfig: datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#kms_key_arn DatasyncLocationSmb#kms_key_arn}

---

### DatasyncLocationSmbConfig <a name="DatasyncLocationSmbConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.Initializer"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

const datasyncLocationSmbConfig: datasyncLocationSmb.DatasyncLocationSmbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.agentArns">agentArns</a></code> | <code>string[]</code> | The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | The authentication mode used to determine identity of user. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>string[]</code> | Specifies the IPv4 addresses for the DNS servers that your SMB file server belongs to. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.domain">domain</a></code> | <code>string</code> | The name of the Windows domain that the SMB server belongs to. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.kerberosKeytab">kerberosKeytab</a></code> | <code>string</code> | The Base64 string representation of the Keytab file. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.kerberosKrb5Conf">kerberosKrb5Conf</a></code> | <code>string</code> | The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket. Specifies a Kerberos configuration file (krb5.conf) that defines your Kerberos realm configuration. To avoid task execution errors, make sure that the service principal name (SPN) in the krb5.conf file matches exactly what you specify for KerberosPrincipal and in your keytab file. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.kerberosPrincipal">kerberosPrincipal</a></code> | <code>string</code> | Specifies a service principal name (SPN), which is an identity in your Kerberos realm that has permission to access the files, folders, and file metadata in your SMB file server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a></code> | The mount options used by DataSync to access the SMB server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.password">password</a></code> | <code>string</code> | The password of the user who can mount the share and has the permissions to access files and folders in the SMB share. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.serverHostname">serverHostname</a></code> | <code>string</code> | The name of the SMB server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.subdirectory">subdirectory</a></code> | <code>string</code> | The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.user">user</a></code> | <code>string</code> | The user who can mount the share, has the permissions to access files and folders in the SMB share. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#agent_arns DatasyncLocationSmb#agent_arns}

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

The authentication mode used to determine identity of user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#authentication_type DatasyncLocationSmb#authentication_type}

---

##### `cmkSecretConfig`<sup>Optional</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.cmkSecretConfig"></a>

```typescript
public readonly cmkSecretConfig: DatasyncLocationSmbCmkSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#cmk_secret_config DatasyncLocationSmb#cmk_secret_config}

---

##### `customSecretConfig`<sup>Optional</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.customSecretConfig"></a>

```typescript
public readonly customSecretConfig: DatasyncLocationSmbCustomSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as a password or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#custom_secret_config DatasyncLocationSmb#custom_secret_config}

---

##### `dnsIpAddresses`<sup>Optional</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.dnsIpAddresses"></a>

```typescript
public readonly dnsIpAddresses: string[];
```

- *Type:* string[]

Specifies the IPv4 addresses for the DNS servers that your SMB file server belongs to.

This parameter applies only if AuthenticationType is set to KERBEROS. If you have multiple domains in your environment, configuring this parameter makes sure that DataSync connects to the right SMB file server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#dns_ip_addresses DatasyncLocationSmb#dns_ip_addresses}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The name of the Windows domain that the SMB server belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#domain DatasyncLocationSmb#domain}

---

##### `kerberosKeytab`<sup>Optional</sup> <a name="kerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.kerberosKeytab"></a>

```typescript
public readonly kerberosKeytab: string;
```

- *Type:* string

The Base64 string representation of the Keytab file.

Specifies your Kerberos key table (keytab) file, which includes mappings between your service principal name (SPN) and encryption keys. To avoid task execution errors, make sure that the SPN in the keytab file matches exactly what you specify for KerberosPrincipal and in your krb5.conf file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#kerberos_keytab DatasyncLocationSmb#kerberos_keytab}

---

##### `kerberosKrb5Conf`<sup>Optional</sup> <a name="kerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.kerberosKrb5Conf"></a>

```typescript
public readonly kerberosKrb5Conf: string;
```

- *Type:* string

The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket. Specifies a Kerberos configuration file (krb5.conf) that defines your Kerberos realm configuration. To avoid task execution errors, make sure that the service principal name (SPN) in the krb5.conf file matches exactly what you specify for KerberosPrincipal and in your keytab file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#kerberos_krb_5_conf DatasyncLocationSmb#kerberos_krb_5_conf}

---

##### `kerberosPrincipal`<sup>Optional</sup> <a name="kerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.kerberosPrincipal"></a>

```typescript
public readonly kerberosPrincipal: string;
```

- *Type:* string

Specifies a service principal name (SPN), which is an identity in your Kerberos realm that has permission to access the files, folders, and file metadata in your SMB file server.

SPNs are case sensitive and must include a prepended cifs/. For example, an SPN might look like cifs/kerberosuser@EXAMPLE.COM. Your task execution will fail if the SPN that you provide for this parameter doesn't match exactly what's in your keytab or krb5.conf files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#kerberos_principal DatasyncLocationSmb#kerberos_principal}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.mountOptions"></a>

```typescript
public readonly mountOptions: DatasyncLocationSmbMountOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

The mount options used by DataSync to access the SMB server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#mount_options DatasyncLocationSmb#mount_options}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#password DatasyncLocationSmb#password}

---

##### `serverHostname`<sup>Optional</sup> <a name="serverHostname" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.serverHostname"></a>

```typescript
public readonly serverHostname: string;
```

- *Type:* string

The name of the SMB server.

This value is the IP address or Domain Name Service (DNS) name of the SMB server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#server_hostname DatasyncLocationSmb#server_hostname}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#subdirectory DatasyncLocationSmb#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DatasyncLocationSmbTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#tags DatasyncLocationSmb#tags}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

The user who can mount the share, has the permissions to access files and folders in the SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#user DatasyncLocationSmb#user}

---

### DatasyncLocationSmbCustomSecretConfig <a name="DatasyncLocationSmbCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig.Initializer"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

const datasyncLocationSmbCustomSecretConfig: datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>string</code> | Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig.property.secretArn">secretArn</a></code> | <code>string</code> | Specifies the ARN for a customer created AWS Secrets Manager secret. |

---

##### `secretAccessRoleArn`<sup>Optional</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig.property.secretAccessRoleArn"></a>

```typescript
public readonly secretAccessRoleArn: string;
```

- *Type:* string

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#secret_access_role_arn DatasyncLocationSmb#secret_access_role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#secret_arn DatasyncLocationSmb#secret_arn}

---

### DatasyncLocationSmbManagedSecretConfig <a name="DatasyncLocationSmbManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfig.Initializer"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

const datasyncLocationSmbManagedSecretConfig: datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfig = { ... }
```


### DatasyncLocationSmbMountOptions <a name="DatasyncLocationSmbMountOptions" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions.Initializer"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

const datasyncLocationSmbMountOptions: datasyncLocationSmb.DatasyncLocationSmbMountOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions.property.version">version</a></code> | <code>string</code> | The specific SMB version that you want DataSync to use to mount your SMB share. |

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The specific SMB version that you want DataSync to use to mount your SMB share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#version DatasyncLocationSmb#version}

---

### DatasyncLocationSmbTags <a name="DatasyncLocationSmbTags" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags.Initializer"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

const datasyncLocationSmbTags: datasyncLocationSmb.DatasyncLocationSmbTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags.property.key">key</a></code> | <code>string</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags.property.value">value</a></code> | <code>string</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#key DatasyncLocationSmb#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_location_smb#value DatasyncLocationSmb#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationSmbCmkSecretConfigOutputReference <a name="DatasyncLocationSmbCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.Initializer"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

new datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationSmbCmkSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCmkSecretConfig">DatasyncLocationSmbCmkSecretConfig</a>

---


### DatasyncLocationSmbCustomSecretConfigOutputReference <a name="DatasyncLocationSmbCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.Initializer"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

new datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resetSecretAccessRoleArn">resetSecretAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretAccessRoleArn` <a name="resetSecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resetSecretAccessRoleArn"></a>

```typescript
public resetSecretAccessRoleArn(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretAccessRoleArnInput">secretAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretAccessRoleArnInput`<sup>Optional</sup> <a name="secretAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretAccessRoleArnInput"></a>

```typescript
public readonly secretAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretAccessRoleArn`<sup>Required</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```typescript
public readonly secretAccessRoleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationSmbCustomSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbCustomSecretConfig">DatasyncLocationSmbCustomSecretConfig</a>

---


### DatasyncLocationSmbManagedSecretConfigOutputReference <a name="DatasyncLocationSmbManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.Initializer"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

new datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfig">DatasyncLocationSmbManagedSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncLocationSmbManagedSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbManagedSecretConfig">DatasyncLocationSmbManagedSecretConfig</a>

---


### DatasyncLocationSmbMountOptionsOutputReference <a name="DatasyncLocationSmbMountOptionsOutputReference" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

new datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationSmbMountOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

---


### DatasyncLocationSmbTagsList <a name="DatasyncLocationSmbTagsList" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

new datasyncLocationSmb.DatasyncLocationSmbTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.get"></a>

```typescript
public get(index: number): DatasyncLocationSmbTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationSmbTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>[]

---


### DatasyncLocationSmbTagsOutputReference <a name="DatasyncLocationSmbTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer"></a>

```typescript
import { datasyncLocationSmb } from '@cdktn/provider-awscc'

new datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationSmbTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationSmb.DatasyncLocationSmbTags">DatasyncLocationSmbTags</a>

---




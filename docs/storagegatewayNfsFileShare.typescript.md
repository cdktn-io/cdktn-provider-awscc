# `storagegatewayNfsFileShare` Submodule <a name="`storagegatewayNfsFileShare` Submodule" id="@cdktn/provider-awscc.storagegatewayNfsFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayNfsFileShare <a name="StoragegatewayNfsFileShare" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share awscc_storagegateway_nfs_file_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktn/provider-awscc'

new storagegatewayNfsFileShare.StoragegatewayNfsFileShare(scope: Construct, id: string, config: StoragegatewayNfsFileShareConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig">StoragegatewayNfsFileShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig">StoragegatewayNfsFileShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes">putCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults">putNfsFileShareDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetAuditDestinationArn">resetAuditDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetBucketRegion">resetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetCacheAttributes">resetCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetClientList">resetClientList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetDefaultStorageClass">resetDefaultStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetFileShareName">resetFileShareName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetGuessMimeTypeEnabled">resetGuessMimeTypeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsEncrypted">resetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNfsFileShareDefaults">resetNfsFileShareDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNotificationPolicy">resetNotificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetObjectAcl">resetObjectAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetRequesterPays">resetRequesterPays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetSquash">resetSquash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetVpcEndpointDnsName">resetVpcEndpointDnsName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCacheAttributes` <a name="putCacheAttributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes"></a>

```typescript
public putCacheAttributes(value: StoragegatewayNfsFileShareCacheAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putCacheAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---

##### `putNfsFileShareDefaults` <a name="putNfsFileShareDefaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults"></a>

```typescript
public putNfsFileShareDefaults(value: StoragegatewayNfsFileShareNfsFileShareDefaults): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putNfsFileShareDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTags"></a>

```typescript
public putTags(value: IResolvable | StoragegatewayNfsFileShareTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>[]

---

##### `resetAuditDestinationArn` <a name="resetAuditDestinationArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetAuditDestinationArn"></a>

```typescript
public resetAuditDestinationArn(): void
```

##### `resetBucketRegion` <a name="resetBucketRegion" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetBucketRegion"></a>

```typescript
public resetBucketRegion(): void
```

##### `resetCacheAttributes` <a name="resetCacheAttributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetCacheAttributes"></a>

```typescript
public resetCacheAttributes(): void
```

##### `resetClientList` <a name="resetClientList" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetClientList"></a>

```typescript
public resetClientList(): void
```

##### `resetDefaultStorageClass` <a name="resetDefaultStorageClass" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetDefaultStorageClass"></a>

```typescript
public resetDefaultStorageClass(): void
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetFileShareName` <a name="resetFileShareName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetFileShareName"></a>

```typescript
public resetFileShareName(): void
```

##### `resetGuessMimeTypeEnabled` <a name="resetGuessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetGuessMimeTypeEnabled"></a>

```typescript
public resetGuessMimeTypeEnabled(): void
```

##### `resetKmsEncrypted` <a name="resetKmsEncrypted" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsEncrypted"></a>

```typescript
public resetKmsEncrypted(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetNfsFileShareDefaults` <a name="resetNfsFileShareDefaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNfsFileShareDefaults"></a>

```typescript
public resetNfsFileShareDefaults(): void
```

##### `resetNotificationPolicy` <a name="resetNotificationPolicy" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetNotificationPolicy"></a>

```typescript
public resetNotificationPolicy(): void
```

##### `resetObjectAcl` <a name="resetObjectAcl" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetObjectAcl"></a>

```typescript
public resetObjectAcl(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetRequesterPays` <a name="resetRequesterPays" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetRequesterPays"></a>

```typescript
public resetRequesterPays(): void
```

##### `resetSquash` <a name="resetSquash" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetSquash"></a>

```typescript
public resetSquash(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcEndpointDnsName` <a name="resetVpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.resetVpcEndpointDnsName"></a>

```typescript
public resetVpcEndpointDnsName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktn/provider-awscc'

storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktn/provider-awscc'

storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktn/provider-awscc'

storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktn/provider-awscc'

storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StoragegatewayNfsFileShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StoragegatewayNfsFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewayNfsFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference">StoragegatewayNfsFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareArn">fileShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareId">fileShareId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareStatus">fileShareStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaults">nfsFileShareDefaults</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList">StoragegatewayNfsFileShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArnInput">auditDestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegionInput">bucketRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributesInput">cacheAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientListInput">clientListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClassInput">defaultStorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareNameInput">fileShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArnInput">gatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabledInput">guessMimeTypeEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncryptedInput">kmsEncryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArnInput">locationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaultsInput">nfsFileShareDefaultsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicyInput">notificationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAclInput">objectAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPaysInput">requesterPaysInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squashInput">squashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsNameInput">vpcEndpointDnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArn">auditDestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientList">clientList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClass">defaultStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareName">fileShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncrypted">kmsEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArn">locationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicy">notificationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAcl">objectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPays">requesterPays</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squash">squash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cacheAttributes`<sup>Required</sup> <a name="cacheAttributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributes"></a>

```typescript
public readonly cacheAttributes: StoragegatewayNfsFileShareCacheAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference">StoragegatewayNfsFileShareCacheAttributesOutputReference</a>

---

##### `fileShareArn`<sup>Required</sup> <a name="fileShareArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareArn"></a>

```typescript
public readonly fileShareArn: string;
```

- *Type:* string

---

##### `fileShareId`<sup>Required</sup> <a name="fileShareId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareId"></a>

```typescript
public readonly fileShareId: string;
```

- *Type:* string

---

##### `fileShareStatus`<sup>Required</sup> <a name="fileShareStatus" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareStatus"></a>

```typescript
public readonly fileShareStatus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nfsFileShareDefaults`<sup>Required</sup> <a name="nfsFileShareDefaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaults"></a>

```typescript
public readonly nfsFileShareDefaults: StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tags"></a>

```typescript
public readonly tags: StoragegatewayNfsFileShareTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList">StoragegatewayNfsFileShareTagsList</a>

---

##### `auditDestinationArnInput`<sup>Optional</sup> <a name="auditDestinationArnInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArnInput"></a>

```typescript
public readonly auditDestinationArnInput: string;
```

- *Type:* string

---

##### `bucketRegionInput`<sup>Optional</sup> <a name="bucketRegionInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegionInput"></a>

```typescript
public readonly bucketRegionInput: string;
```

- *Type:* string

---

##### `cacheAttributesInput`<sup>Optional</sup> <a name="cacheAttributesInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.cacheAttributesInput"></a>

```typescript
public readonly cacheAttributesInput: IResolvable | StoragegatewayNfsFileShareCacheAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---

##### `clientListInput`<sup>Optional</sup> <a name="clientListInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientListInput"></a>

```typescript
public readonly clientListInput: string[];
```

- *Type:* string[]

---

##### `defaultStorageClassInput`<sup>Optional</sup> <a name="defaultStorageClassInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClassInput"></a>

```typescript
public readonly defaultStorageClassInput: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `fileShareNameInput`<sup>Optional</sup> <a name="fileShareNameInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareNameInput"></a>

```typescript
public readonly fileShareNameInput: string;
```

- *Type:* string

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArnInput"></a>

```typescript
public readonly gatewayArnInput: string;
```

- *Type:* string

---

##### `guessMimeTypeEnabledInput`<sup>Optional</sup> <a name="guessMimeTypeEnabledInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabledInput"></a>

```typescript
public readonly guessMimeTypeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsEncryptedInput`<sup>Optional</sup> <a name="kmsEncryptedInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncryptedInput"></a>

```typescript
public readonly kmsEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `locationArnInput`<sup>Optional</sup> <a name="locationArnInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArnInput"></a>

```typescript
public readonly locationArnInput: string;
```

- *Type:* string

---

##### `nfsFileShareDefaultsInput`<sup>Optional</sup> <a name="nfsFileShareDefaultsInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.nfsFileShareDefaultsInput"></a>

```typescript
public readonly nfsFileShareDefaultsInput: IResolvable | StoragegatewayNfsFileShareNfsFileShareDefaults;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---

##### `notificationPolicyInput`<sup>Optional</sup> <a name="notificationPolicyInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicyInput"></a>

```typescript
public readonly notificationPolicyInput: string;
```

- *Type:* string

---

##### `objectAclInput`<sup>Optional</sup> <a name="objectAclInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAclInput"></a>

```typescript
public readonly objectAclInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `requesterPaysInput`<sup>Optional</sup> <a name="requesterPaysInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPaysInput"></a>

```typescript
public readonly requesterPaysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `squashInput`<sup>Optional</sup> <a name="squashInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squashInput"></a>

```typescript
public readonly squashInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | StoragegatewayNfsFileShareTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>[]

---

##### `vpcEndpointDnsNameInput`<sup>Optional</sup> <a name="vpcEndpointDnsNameInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsNameInput"></a>

```typescript
public readonly vpcEndpointDnsNameInput: string;
```

- *Type:* string

---

##### `auditDestinationArn`<sup>Required</sup> <a name="auditDestinationArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.auditDestinationArn"></a>

```typescript
public readonly auditDestinationArn: string;
```

- *Type:* string

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

---

##### `clientList`<sup>Required</sup> <a name="clientList" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.clientList"></a>

```typescript
public readonly clientList: string[];
```

- *Type:* string[]

---

##### `defaultStorageClass`<sup>Required</sup> <a name="defaultStorageClass" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.defaultStorageClass"></a>

```typescript
public readonly defaultStorageClass: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `fileShareName`<sup>Required</sup> <a name="fileShareName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.fileShareName"></a>

```typescript
public readonly fileShareName: string;
```

- *Type:* string

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

---

##### `guessMimeTypeEnabled`<sup>Required</sup> <a name="guessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.guessMimeTypeEnabled"></a>

```typescript
public readonly guessMimeTypeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.locationArn"></a>

```typescript
public readonly locationArn: string;
```

- *Type:* string

---

##### `notificationPolicy`<sup>Required</sup> <a name="notificationPolicy" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.notificationPolicy"></a>

```typescript
public readonly notificationPolicy: string;
```

- *Type:* string

---

##### `objectAcl`<sup>Required</sup> <a name="objectAcl" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.objectAcl"></a>

```typescript
public readonly objectAcl: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `requesterPays`<sup>Required</sup> <a name="requesterPays" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.requesterPays"></a>

```typescript
public readonly requesterPays: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `squash`<sup>Required</sup> <a name="squash" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.squash"></a>

```typescript
public readonly squash: string;
```

- *Type:* string

---

##### `vpcEndpointDnsName`<sup>Required</sup> <a name="vpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.vpcEndpointDnsName"></a>

```typescript
public readonly vpcEndpointDnsName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShare.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayNfsFileShareCacheAttributes <a name="StoragegatewayNfsFileShareCacheAttributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktn/provider-awscc'

const storagegatewayNfsFileShareCacheAttributes: storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>number</code> | How long the directory contents cached by the gateway are considered valid. |

---

##### `cacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```typescript
public readonly cacheStaleTimeoutInSeconds: number;
```

- *Type:* number

How long the directory contents cached by the gateway are considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#cache_stale_timeout_in_seconds StoragegatewayNfsFileShare#cache_stale_timeout_in_seconds}

---

### StoragegatewayNfsFileShareConfig <a name="StoragegatewayNfsFileShareConfig" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktn/provider-awscc'

const storagegatewayNfsFileShareConfig: storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | The ARN of the S3 File Gateway that hosts the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.locationArn">locationArn</a></code> | <code>string</code> | The ARN of the S3 bucket, or bucket prefix, the share exposes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.role">role</a></code> | <code>string</code> | The ARN of the IAM role the gateway assumes when it accesses the S3 location. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.auditDestinationArn">auditDestinationArn</a></code> | <code>string</code> | The ARN of the CloudWatch log group that receives the share's audit logs. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.cacheAttributes">cacheAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | Refresh cache information for the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.clientList">clientList</a></code> | <code>string[]</code> | The IPv4 or IPv6 addresses and CIDR blocks permitted to mount the NFS share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.defaultStorageClass">defaultStorageClass</a></code> | <code>string</code> | The S3 storage class for new objects. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.encryptionType">encryptionType</a></code> | <code>string</code> | The server-side encryption the gateway applies to objects it writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.fileShareName">fileShareName</a></code> | <code>string</code> | The name of the file share, which defaults to the bucket name when omitted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.guessMimeTypeEnabled">guessMimeTypeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the gateway infers the MIME type of uploaded objects from their extension. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsEncrypted">kmsEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The KMS key used for encryption, when EncryptionType selects KMS. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.nfsFileShareDefaults">nfsFileShareDefaults</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | Default values for the file and directory permissions of an NFS share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.notificationPolicy">notificationPolicy</a></code> | <code>string</code> | The upload-notification settling period, as a JSON document. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.objectAcl">objectAcl</a></code> | <code>string</code> | The canned S3 ACL applied to objects the gateway writes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.readOnly">readOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether clients may write to the share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.requesterPays">requesterPays</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the bucket is a Requester Pays bucket. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.squash">squash</a></code> | <code>string</code> | How the NFS share maps client user IDs. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>[]</code> | Tags assigned to the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.vpcEndpointDnsName">vpcEndpointDnsName</a></code> | <code>string</code> | The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

The ARN of the S3 File Gateway that hosts the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#gateway_arn StoragegatewayNfsFileShare#gateway_arn}

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.locationArn"></a>

```typescript
public readonly locationArn: string;
```

- *Type:* string

The ARN of the S3 bucket, or bucket prefix, the share exposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#location_arn StoragegatewayNfsFileShare#location_arn}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The ARN of the IAM role the gateway assumes when it accesses the S3 location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#role StoragegatewayNfsFileShare#role}

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="auditDestinationArn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.auditDestinationArn"></a>

```typescript
public readonly auditDestinationArn: string;
```

- *Type:* string

The ARN of the CloudWatch log group that receives the share's audit logs.

Removing this property from a template detaches audit logging: the update sends the empty string, which the service treats as the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}

---

##### `bucketRegion`<sup>Optional</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#bucket_region StoragegatewayNfsFileShare#bucket_region}

---

##### `cacheAttributes`<sup>Optional</sup> <a name="cacheAttributes" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.cacheAttributes"></a>

```typescript
public readonly cacheAttributes: StoragegatewayNfsFileShareCacheAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

Refresh cache information for the file share.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#cache_attributes StoragegatewayNfsFileShare#cache_attributes}

---

##### `clientList`<sup>Optional</sup> <a name="clientList" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.clientList"></a>

```typescript
public readonly clientList: string[];
```

- *Type:* string[]

The IPv4 or IPv6 addresses and CIDR blocks permitted to mount the NFS share.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#client_list StoragegatewayNfsFileShare#client_list}

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="defaultStorageClass" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.defaultStorageClass"></a>

```typescript
public readonly defaultStorageClass: string;
```

- *Type:* string

The S3 storage class for new objects.

The service accepts S3_STANDARD, S3_INTELLIGENT_TIERING, S3_STANDARD_IA and S3_ONEZONE_IA; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#default_storage_class StoragegatewayNfsFileShare#default_storage_class}

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

The server-side encryption the gateway applies to objects it writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#encryption_type StoragegatewayNfsFileShare#encryption_type}

---

##### `fileShareName`<sup>Optional</sup> <a name="fileShareName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.fileShareName"></a>

```typescript
public readonly fileShareName: string;
```

- *Type:* string

The name of the file share, which defaults to the bucket name when omitted.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#file_share_name StoragegatewayNfsFileShare#file_share_name}

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="guessMimeTypeEnabled" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.guessMimeTypeEnabled"></a>

```typescript
public readonly guessMimeTypeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the gateway infers the MIME type of uploaded objects from their extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The KMS key used for encryption, when EncryptionType selects KMS.

Removing this property from a template leaves the share's current value: the service documents no value that resets it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#kms_key StoragegatewayNfsFileShare#kms_key}

---

##### `nfsFileShareDefaults`<sup>Optional</sup> <a name="nfsFileShareDefaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.nfsFileShareDefaults"></a>

```typescript
public readonly nfsFileShareDefaults: StoragegatewayNfsFileShareNfsFileShareDefaults;
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

Default values for the file and directory permissions of an NFS share.

Removing this property from a template leaves the live values unchanged rather than clearing them, because the service has no reset for it: a create that omits the object leaves it absent, but the update path merges member by member keyed on the same internal sentinel that reports absence, so no request can restore that state. Set the members you want rather than relying on removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#nfs_file_share_defaults StoragegatewayNfsFileShare#nfs_file_share_defaults}

---

##### `notificationPolicy`<sup>Optional</sup> <a name="notificationPolicy" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.notificationPolicy"></a>

```typescript
public readonly notificationPolicy: string;
```

- *Type:* string

The upload-notification settling period, as a JSON document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#notification_policy StoragegatewayNfsFileShare#notification_policy}

---

##### `objectAcl`<sup>Optional</sup> <a name="objectAcl" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.objectAcl"></a>

```typescript
public readonly objectAcl: string;
```

- *Type:* string

The canned S3 ACL applied to objects the gateway writes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#object_acl StoragegatewayNfsFileShare#object_acl}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether clients may write to the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#read_only StoragegatewayNfsFileShare#read_only}

---

##### `requesterPays`<sup>Optional</sup> <a name="requesterPays" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.requesterPays"></a>

```typescript
public readonly requesterPays: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the bucket is a Requester Pays bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#requester_pays StoragegatewayNfsFileShare#requester_pays}

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.squash"></a>

```typescript
public readonly squash: string;
```

- *Type:* string

How the NFS share maps client user IDs.

The service accepts RootSquash, NoSquash and AllSquash; it is a length-bounded string in the API model rather than an enumeration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#squash StoragegatewayNfsFileShare#squash}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | StoragegatewayNfsFileShareTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>[]

Tags assigned to the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#tags StoragegatewayNfsFileShare#tags}

---

##### `vpcEndpointDnsName`<sup>Optional</sup> <a name="vpcEndpointDnsName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareConfig.property.vpcEndpointDnsName"></a>

```typescript
public readonly vpcEndpointDnsName: string;
```

- *Type:* string

The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#vpc_endpoint_dns_name StoragegatewayNfsFileShare#vpc_endpoint_dns_name}

---

### StoragegatewayNfsFileShareNfsFileShareDefaults <a name="StoragegatewayNfsFileShareNfsFileShareDefaults" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktn/provider-awscc'

const storagegatewayNfsFileShareNfsFileShareDefaults: storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.directoryMode">directoryMode</a></code> | <code>string</code> | The Unix directory mode in the form nnnn. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.fileMode">fileMode</a></code> | <code>string</code> | The Unix file mode in the form nnnn. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.groupId">groupId</a></code> | <code>number</code> | The default group ID for files in the file share. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.ownerId">ownerId</a></code> | <code>number</code> | The default owner ID for files in the file share. |

---

##### `directoryMode`<sup>Optional</sup> <a name="directoryMode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.directoryMode"></a>

```typescript
public readonly directoryMode: string;
```

- *Type:* string

The Unix directory mode in the form nnnn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#directory_mode StoragegatewayNfsFileShare#directory_mode}

---

##### `fileMode`<sup>Optional</sup> <a name="fileMode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.fileMode"></a>

```typescript
public readonly fileMode: string;
```

- *Type:* string

The Unix file mode in the form nnnn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#file_mode StoragegatewayNfsFileShare#file_mode}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

The default group ID for files in the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#group_id StoragegatewayNfsFileShare#group_id}

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults.property.ownerId"></a>

```typescript
public readonly ownerId: number;
```

- *Type:* number

The default owner ID for files in the file share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#owner_id StoragegatewayNfsFileShare#owner_id}

---

### StoragegatewayNfsFileShareTags <a name="StoragegatewayNfsFileShareTags" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktn/provider-awscc'

const storagegatewayNfsFileShareTags: storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#key StoragegatewayNfsFileShare#key}. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#value StoragegatewayNfsFileShare#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#key StoragegatewayNfsFileShare#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/storagegateway_nfs_file_share#value StoragegatewayNfsFileShare#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayNfsFileShareCacheAttributesOutputReference <a name="StoragegatewayNfsFileShareCacheAttributesOutputReference" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktn/provider-awscc'

new storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">resetCacheStaleTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheStaleTimeoutInSeconds` <a name="resetCacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```typescript
public resetCacheStaleTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">cacheStaleTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cacheStaleTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheStaleTimeoutInSecondsInput`<sup>Optional</sup> <a name="cacheStaleTimeoutInSecondsInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```typescript
public readonly cacheStaleTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `cacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="cacheStaleTimeoutInSeconds" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```typescript
public readonly cacheStaleTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StoragegatewayNfsFileShareCacheAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareCacheAttributes">StoragegatewayNfsFileShareCacheAttributes</a>

---


### StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference <a name="StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktn/provider-awscc'

new storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetDirectoryMode">resetDirectoryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetFileMode">resetFileMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetOwnerId">resetOwnerId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectoryMode` <a name="resetDirectoryMode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetDirectoryMode"></a>

```typescript
public resetDirectoryMode(): void
```

##### `resetFileMode` <a name="resetFileMode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetFileMode"></a>

```typescript
public resetFileMode(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetOwnerId` <a name="resetOwnerId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resetOwnerId"></a>

```typescript
public resetOwnerId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryModeInput">directoryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileModeInput">fileModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerIdInput">ownerIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode">directoryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode">fileMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId">ownerId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryModeInput`<sup>Optional</sup> <a name="directoryModeInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryModeInput"></a>

```typescript
public readonly directoryModeInput: string;
```

- *Type:* string

---

##### `fileModeInput`<sup>Optional</sup> <a name="fileModeInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileModeInput"></a>

```typescript
public readonly fileModeInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: number;
```

- *Type:* number

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerIdInput"></a>

```typescript
public readonly ownerIdInput: number;
```

- *Type:* number

---

##### `directoryMode`<sup>Required</sup> <a name="directoryMode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode"></a>

```typescript
public readonly directoryMode: string;
```

- *Type:* string

---

##### `fileMode`<sup>Required</sup> <a name="fileMode" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode"></a>

```typescript
public readonly fileMode: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId"></a>

```typescript
public readonly ownerId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StoragegatewayNfsFileShareNfsFileShareDefaults;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareNfsFileShareDefaults">StoragegatewayNfsFileShareNfsFileShareDefaults</a>

---


### StoragegatewayNfsFileShareTagsList <a name="StoragegatewayNfsFileShareTagsList" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktn/provider-awscc'

new storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.get"></a>

```typescript
public get(index: number): StoragegatewayNfsFileShareTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StoragegatewayNfsFileShareTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>[]

---


### StoragegatewayNfsFileShareTagsOutputReference <a name="StoragegatewayNfsFileShareTagsOutputReference" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer"></a>

```typescript
import { storagegatewayNfsFileShare } from '@cdktn/provider-awscc'

new storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StoragegatewayNfsFileShareTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayNfsFileShare.StoragegatewayNfsFileShareTags">StoragegatewayNfsFileShareTags</a>

---




# `s3TablesTableBucket` Submodule <a name="`s3TablesTableBucket` Submodule" id="@cdktn/provider-awscc.s3TablesTableBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTableBucket <a name="S3TablesTableBucket" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket awscc_s3tables_table_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

new s3TablesTableBucket.S3TablesTableBucket(scope: Construct, id: string, config: S3TablesTableBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig">S3TablesTableBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig">S3TablesTableBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putMetricsConfiguration">putMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putStorageClassConfiguration">putStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putUnreferencedFileRemoval">putUnreferencedFileRemoval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetMetricsConfiguration">resetMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetStorageClassConfiguration">resetStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetUnreferencedFileRemoval">resetUnreferencedFileRemoval</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: S3TablesTableBucketEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

---

##### `putMetricsConfiguration` <a name="putMetricsConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putMetricsConfiguration"></a>

```typescript
public putMetricsConfiguration(value: S3TablesTableBucketMetricsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putMetricsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a>

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putReplicationConfiguration"></a>

```typescript
public putReplicationConfiguration(value: S3TablesTableBucketReplicationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a>

---

##### `putStorageClassConfiguration` <a name="putStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putStorageClassConfiguration"></a>

```typescript
public putStorageClassConfiguration(value: S3TablesTableBucketStorageClassConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putStorageClassConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putTags"></a>

```typescript
public putTags(value: IResolvable | S3TablesTableBucketTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>[]

---

##### `putUnreferencedFileRemoval` <a name="putUnreferencedFileRemoval" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putUnreferencedFileRemoval"></a>

```typescript
public putUnreferencedFileRemoval(value: S3TablesTableBucketUnreferencedFileRemoval): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.putUnreferencedFileRemoval.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a>

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetMetricsConfiguration` <a name="resetMetricsConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetMetricsConfiguration"></a>

```typescript
public resetMetricsConfiguration(): void
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetReplicationConfiguration"></a>

```typescript
public resetReplicationConfiguration(): void
```

##### `resetStorageClassConfiguration` <a name="resetStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetStorageClassConfiguration"></a>

```typescript
public resetStorageClassConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUnreferencedFileRemoval` <a name="resetUnreferencedFileRemoval" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.resetUnreferencedFileRemoval"></a>

```typescript
public resetUnreferencedFileRemoval(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3TablesTableBucket resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isConstruct"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

s3TablesTableBucket.S3TablesTableBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

s3TablesTableBucket.S3TablesTableBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

s3TablesTableBucket.S3TablesTableBucket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a S3TablesTableBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3TablesTableBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3TablesTableBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3TablesTableBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference">S3TablesTableBucketEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.metricsConfiguration">metricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference">S3TablesTableBucketMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference">S3TablesTableBucketReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.storageClassConfiguration">storageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference">S3TablesTableBucketStorageClassConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketArn">tableBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList">S3TablesTableBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.unreferencedFileRemoval">unreferencedFileRemoval</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference">S3TablesTableBucketUnreferencedFileRemovalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.metricsConfigurationInput">metricsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.storageClassConfigurationInput">storageClassConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketNameInput">tableBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.unreferencedFileRemovalInput">unreferencedFileRemovalInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketName">tableBucketName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: S3TablesTableBucketEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference">S3TablesTableBucketEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricsConfiguration`<sup>Required</sup> <a name="metricsConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.metricsConfiguration"></a>

```typescript
public readonly metricsConfiguration: S3TablesTableBucketMetricsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference">S3TablesTableBucketMetricsConfigurationOutputReference</a>

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: S3TablesTableBucketReplicationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference">S3TablesTableBucketReplicationConfigurationOutputReference</a>

---

##### `storageClassConfiguration`<sup>Required</sup> <a name="storageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.storageClassConfiguration"></a>

```typescript
public readonly storageClassConfiguration: S3TablesTableBucketStorageClassConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference">S3TablesTableBucketStorageClassConfigurationOutputReference</a>

---

##### `tableBucketArn`<sup>Required</sup> <a name="tableBucketArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketArn"></a>

```typescript
public readonly tableBucketArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tags"></a>

```typescript
public readonly tags: S3TablesTableBucketTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList">S3TablesTableBucketTagsList</a>

---

##### `unreferencedFileRemoval`<sup>Required</sup> <a name="unreferencedFileRemoval" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.unreferencedFileRemoval"></a>

```typescript
public readonly unreferencedFileRemoval: S3TablesTableBucketUnreferencedFileRemovalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference">S3TablesTableBucketUnreferencedFileRemovalOutputReference</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: IResolvable | S3TablesTableBucketEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

---

##### `metricsConfigurationInput`<sup>Optional</sup> <a name="metricsConfigurationInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.metricsConfigurationInput"></a>

```typescript
public readonly metricsConfigurationInput: IResolvable | S3TablesTableBucketMetricsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a>

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.replicationConfigurationInput"></a>

```typescript
public readonly replicationConfigurationInput: IResolvable | S3TablesTableBucketReplicationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a>

---

##### `storageClassConfigurationInput`<sup>Optional</sup> <a name="storageClassConfigurationInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.storageClassConfigurationInput"></a>

```typescript
public readonly storageClassConfigurationInput: IResolvable | S3TablesTableBucketStorageClassConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a>

---

##### `tableBucketNameInput`<sup>Optional</sup> <a name="tableBucketNameInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketNameInput"></a>

```typescript
public readonly tableBucketNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | S3TablesTableBucketTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>[]

---

##### `unreferencedFileRemovalInput`<sup>Optional</sup> <a name="unreferencedFileRemovalInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.unreferencedFileRemovalInput"></a>

```typescript
public readonly unreferencedFileRemovalInput: IResolvable | S3TablesTableBucketUnreferencedFileRemoval;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a>

---

##### `tableBucketName`<sup>Required</sup> <a name="tableBucketName" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tableBucketName"></a>

```typescript
public readonly tableBucketName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableBucketConfig <a name="S3TablesTableBucketConfig" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

const s3TablesTableBucketConfig: s3TablesTableBucket.S3TablesTableBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.tableBucketName">tableBucketName</a></code> | <code>string</code> | A name for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | Specifies encryption settings for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.metricsConfiguration">metricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a></code> | Settings governing the Metric configuration for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a></code> | Specifies replication configuration for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.storageClassConfiguration">storageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a></code> | Specifies storage class settings for the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>[]</code> | User tags (key-value pairs) to associate with the table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.unreferencedFileRemoval">unreferencedFileRemoval</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a></code> | Settings governing the Unreferenced File Removal maintenance action. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `tableBucketName`<sup>Required</sup> <a name="tableBucketName" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.tableBucketName"></a>

```typescript
public readonly tableBucketName: string;
```

- *Type:* string

A name for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#table_bucket_name S3TablesTableBucket#table_bucket_name}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: S3TablesTableBucketEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

Specifies encryption settings for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#encryption_configuration S3TablesTableBucket#encryption_configuration}

---

##### `metricsConfiguration`<sup>Optional</sup> <a name="metricsConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.metricsConfiguration"></a>

```typescript
public readonly metricsConfiguration: S3TablesTableBucketMetricsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a>

Settings governing the Metric configuration for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#metrics_configuration S3TablesTableBucket#metrics_configuration}

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: S3TablesTableBucketReplicationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a>

Specifies replication configuration for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#replication_configuration S3TablesTableBucket#replication_configuration}

---

##### `storageClassConfiguration`<sup>Optional</sup> <a name="storageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.storageClassConfiguration"></a>

```typescript
public readonly storageClassConfiguration: S3TablesTableBucketStorageClassConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a>

Specifies storage class settings for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#storage_class_configuration S3TablesTableBucket#storage_class_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | S3TablesTableBucketTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>[]

User tags (key-value pairs) to associate with the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#tags S3TablesTableBucket#tags}

---

##### `unreferencedFileRemoval`<sup>Optional</sup> <a name="unreferencedFileRemoval" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketConfig.property.unreferencedFileRemoval"></a>

```typescript
public readonly unreferencedFileRemoval: S3TablesTableBucketUnreferencedFileRemoval;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a>

Settings governing the Unreferenced File Removal maintenance action.

Unreferenced file removal identifies and deletes all objects that are not referenced by any table snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#unreferenced_file_removal S3TablesTableBucket#unreferenced_file_removal}

---

### S3TablesTableBucketEncryptionConfiguration <a name="S3TablesTableBucketEncryptionConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

const s3TablesTableBucketEncryptionConfiguration: s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | ARN of the KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.sseAlgorithm">sseAlgorithm</a></code> | <code>string</code> | Server-side encryption algorithm. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#kms_key_arn S3TablesTableBucket#kms_key_arn}

---

##### `sseAlgorithm`<sup>Optional</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.sseAlgorithm"></a>

```typescript
public readonly sseAlgorithm: string;
```

- *Type:* string

Server-side encryption algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#sse_algorithm S3TablesTableBucket#sse_algorithm}

---

### S3TablesTableBucketMetricsConfiguration <a name="S3TablesTableBucketMetricsConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

const s3TablesTableBucketMetricsConfiguration: s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration.property.status">status</a></code> | <code>string</code> | Indicates whether Metrics are enabled. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Indicates whether Metrics are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}

---

### S3TablesTableBucketReplicationConfiguration <a name="S3TablesTableBucketReplicationConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

const s3TablesTableBucketReplicationConfiguration: s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.property.role">role</a></code> | <code>string</code> | The ARN of the IAM role to use for replication. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>[]</code> | List of replication rules. |

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The ARN of the IAM role to use for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#role S3TablesTableBucket#role}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration.property.rules"></a>

```typescript
public readonly rules: IResolvable | S3TablesTableBucketReplicationConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>[]

List of replication rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#rules S3TablesTableBucket#rules}

---

### S3TablesTableBucketReplicationConfigurationRules <a name="S3TablesTableBucketReplicationConfigurationRules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

const s3TablesTableBucketReplicationConfigurationRules: s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>[]</code> | List of replication destinations. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | S3TablesTableBucketReplicationConfigurationRulesDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>[]

List of replication destinations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#destinations S3TablesTableBucket#destinations}

---

### S3TablesTableBucketReplicationConfigurationRulesDestinations <a name="S3TablesTableBucketReplicationConfigurationRulesDestinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

const s3TablesTableBucketReplicationConfigurationRulesDestinations: s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations.property.destinationTableBucketArn">destinationTableBucketArn</a></code> | <code>string</code> | The ARN of the destination table bucket. |

---

##### `destinationTableBucketArn`<sup>Optional</sup> <a name="destinationTableBucketArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations.property.destinationTableBucketArn"></a>

```typescript
public readonly destinationTableBucketArn: string;
```

- *Type:* string

The ARN of the destination table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#destination_table_bucket_arn S3TablesTableBucket#destination_table_bucket_arn}

---

### S3TablesTableBucketStorageClassConfiguration <a name="S3TablesTableBucketStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

const s3TablesTableBucketStorageClassConfiguration: s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration.property.storageClass">storageClass</a></code> | <code>string</code> | The storage class for the table bucket. |

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

The storage class for the table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#storage_class S3TablesTableBucket#storage_class}

---

### S3TablesTableBucketTags <a name="S3TablesTableBucketTags" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

const s3TablesTableBucketTags: s3TablesTableBucket.S3TablesTableBucketTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.property.key">key</a></code> | <code>string</code> | Tag key must be between 1 to 128 characters in length. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.property.value">value</a></code> | <code>string</code> | Tag value must be between 0 to 256 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Tag key must be between 1 to 128 characters in length.

Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Tag value must be between 0 to 256 characters in length.

Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

### S3TablesTableBucketUnreferencedFileRemoval <a name="S3TablesTableBucketUnreferencedFileRemoval" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

const s3TablesTableBucketUnreferencedFileRemoval: s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.noncurrentDays">noncurrentDays</a></code> | <code>number</code> | S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.status">status</a></code> | <code>string</code> | Indicates whether the Unreferenced File Removal maintenance action is enabled. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.unreferencedDays">unreferencedDays</a></code> | <code>number</code> | For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent. |

---

##### `noncurrentDays`<sup>Optional</sup> <a name="noncurrentDays" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.noncurrentDays"></a>

```typescript
public readonly noncurrentDays: number;
```

- *Type:* number

S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#noncurrent_days S3TablesTableBucket#noncurrent_days}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Indicates whether the Unreferenced File Removal maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}

---

##### `unreferencedDays`<sup>Optional</sup> <a name="unreferencedDays" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval.property.unreferencedDays"></a>

```typescript
public readonly unreferencedDays: number;
```

- *Type:* number

For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3tables_table_bucket#unreferenced_days S3TablesTableBucket#unreferenced_days}

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableBucketEncryptionConfigurationOutputReference <a name="S3TablesTableBucketEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

new s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetSseAlgorithm">resetSseAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetSseAlgorithm` <a name="resetSseAlgorithm" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetSseAlgorithm"></a>

```typescript
public resetSseAlgorithm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithmInput">sseAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm">sseAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `sseAlgorithmInput`<sup>Optional</sup> <a name="sseAlgorithmInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithmInput"></a>

```typescript
public readonly sseAlgorithmInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm"></a>

```typescript
public readonly sseAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

---


### S3TablesTableBucketMetricsConfigurationOutputReference <a name="S3TablesTableBucketMetricsConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

new s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketMetricsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketMetricsConfiguration">S3TablesTableBucketMetricsConfiguration</a>

---


### S3TablesTableBucketReplicationConfigurationOutputReference <a name="S3TablesTableBucketReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

new s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | S3TablesTableBucketReplicationConfigurationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>[]

---

##### `resetRole` <a name="resetRole" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList">S3TablesTableBucketReplicationConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.rules"></a>

```typescript
public readonly rules: S3TablesTableBucketReplicationConfigurationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList">S3TablesTableBucketReplicationConfigurationRulesList</a>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | S3TablesTableBucketReplicationConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketReplicationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfiguration">S3TablesTableBucketReplicationConfiguration</a>

---


### S3TablesTableBucketReplicationConfigurationRulesDestinationsList <a name="S3TablesTableBucketReplicationConfigurationRulesDestinationsList" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

new s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.get"></a>

```typescript
public get(index: number): S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketReplicationConfigurationRulesDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>[]

---


### S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference <a name="S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

new s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resetDestinationTableBucketArn">resetDestinationTableBucketArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationTableBucketArn` <a name="resetDestinationTableBucketArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.resetDestinationTableBucketArn"></a>

```typescript
public resetDestinationTableBucketArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArnInput">destinationTableBucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArn">destinationTableBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationTableBucketArnInput`<sup>Optional</sup> <a name="destinationTableBucketArnInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArnInput"></a>

```typescript
public readonly destinationTableBucketArnInput: string;
```

- *Type:* string

---

##### `destinationTableBucketArn`<sup>Required</sup> <a name="destinationTableBucketArn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.destinationTableBucketArn"></a>

```typescript
public readonly destinationTableBucketArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketReplicationConfigurationRulesDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>

---


### S3TablesTableBucketReplicationConfigurationRulesList <a name="S3TablesTableBucketReplicationConfigurationRulesList" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

new s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.get"></a>

```typescript
public get(index: number): S3TablesTableBucketReplicationConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketReplicationConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>[]

---


### S3TablesTableBucketReplicationConfigurationRulesOutputReference <a name="S3TablesTableBucketReplicationConfigurationRulesOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

new s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | S3TablesTableBucketReplicationConfigurationRulesDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>[]

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.resetDestinations"></a>

```typescript
public resetDestinations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList">S3TablesTableBucketReplicationConfigurationRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinations"></a>

```typescript
public readonly destinations: S3TablesTableBucketReplicationConfigurationRulesDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinationsList">S3TablesTableBucketReplicationConfigurationRulesDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | S3TablesTableBucketReplicationConfigurationRulesDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesDestinations">S3TablesTableBucketReplicationConfigurationRulesDestinations</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketReplicationConfigurationRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketReplicationConfigurationRules">S3TablesTableBucketReplicationConfigurationRules</a>

---


### S3TablesTableBucketStorageClassConfigurationOutputReference <a name="S3TablesTableBucketStorageClassConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

new s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketStorageClassConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketStorageClassConfiguration">S3TablesTableBucketStorageClassConfiguration</a>

---


### S3TablesTableBucketTagsList <a name="S3TablesTableBucketTagsList" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

new s3TablesTableBucket.S3TablesTableBucketTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.get"></a>

```typescript
public get(index: number): S3TablesTableBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>[]

---


### S3TablesTableBucketTagsOutputReference <a name="S3TablesTableBucketTagsOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

new s3TablesTableBucket.S3TablesTableBucketTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketTags">S3TablesTableBucketTags</a>

---


### S3TablesTableBucketUnreferencedFileRemovalOutputReference <a name="S3TablesTableBucketUnreferencedFileRemovalOutputReference" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer"></a>

```typescript
import { s3TablesTableBucket } from '@cdktn/provider-awscc'

new s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetNoncurrentDays">resetNoncurrentDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetUnreferencedDays">resetUnreferencedDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoncurrentDays` <a name="resetNoncurrentDays" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetNoncurrentDays"></a>

```typescript
public resetNoncurrentDays(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUnreferencedDays` <a name="resetUnreferencedDays" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.resetUnreferencedDays"></a>

```typescript
public resetUnreferencedDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDaysInput">noncurrentDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDaysInput">unreferencedDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDays">noncurrentDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDays">unreferencedDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `noncurrentDaysInput`<sup>Optional</sup> <a name="noncurrentDaysInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDaysInput"></a>

```typescript
public readonly noncurrentDaysInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `unreferencedDaysInput`<sup>Optional</sup> <a name="unreferencedDaysInput" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDaysInput"></a>

```typescript
public readonly unreferencedDaysInput: number;
```

- *Type:* number

---

##### `noncurrentDays`<sup>Required</sup> <a name="noncurrentDays" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.noncurrentDays"></a>

```typescript
public readonly noncurrentDays: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `unreferencedDays`<sup>Required</sup> <a name="unreferencedDays" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.unreferencedDays"></a>

```typescript
public readonly unreferencedDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemovalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketUnreferencedFileRemoval;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3TablesTableBucket.S3TablesTableBucketUnreferencedFileRemoval">S3TablesTableBucketUnreferencedFileRemoval</a>

---




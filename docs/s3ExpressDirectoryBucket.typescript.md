# `s3ExpressDirectoryBucket` Submodule <a name="`s3ExpressDirectoryBucket` Submodule" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ExpressDirectoryBucket <a name="S3ExpressDirectoryBucket" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket awscc_s3express_directory_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucket(scope: Construct, id: string, config: S3ExpressDirectoryBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig">S3ExpressDirectoryBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig">S3ExpressDirectoryBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putBucketEncryption">putBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putInventoryConfigurations">putInventoryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putLifecycleConfiguration">putLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putMetricsConfigurations">putMetricsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketEncryption">resetBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetInventoryConfigurations">resetInventoryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetLifecycleConfiguration">resetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetMetricsConfigurations">resetMetricsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBucketEncryption` <a name="putBucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putBucketEncryption"></a>

```typescript
public putBucketEncryption(value: S3ExpressDirectoryBucketBucketEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putBucketEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

---

##### `putInventoryConfigurations` <a name="putInventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putInventoryConfigurations"></a>

```typescript
public putInventoryConfigurations(value: IResolvable | S3ExpressDirectoryBucketInventoryConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putInventoryConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>[]

---

##### `putLifecycleConfiguration` <a name="putLifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putLifecycleConfiguration"></a>

```typescript
public putLifecycleConfiguration(value: S3ExpressDirectoryBucketLifecycleConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

---

##### `putMetricsConfigurations` <a name="putMetricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putMetricsConfigurations"></a>

```typescript
public putMetricsConfigurations(value: IResolvable | S3ExpressDirectoryBucketMetricsConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putMetricsConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putTags"></a>

```typescript
public putTags(value: IResolvable | S3ExpressDirectoryBucketTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>[]

---

##### `resetBucketEncryption` <a name="resetBucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketEncryption"></a>

```typescript
public resetBucketEncryption(): void
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetInventoryConfigurations` <a name="resetInventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetInventoryConfigurations"></a>

```typescript
public resetInventoryConfigurations(): void
```

##### `resetLifecycleConfiguration` <a name="resetLifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetLifecycleConfiguration"></a>

```typescript
public resetLifecycleConfiguration(): void
```

##### `resetMetricsConfigurations` <a name="resetMetricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetMetricsConfigurations"></a>

```typescript
public resetMetricsConfigurations(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isConstruct"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformElement"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformResource"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a S3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3ExpressDirectoryBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3ExpressDirectoryBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3ExpressDirectoryBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.availabilityZoneName">availabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryption">bucketEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference">S3ExpressDirectoryBucketBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurations">inventoryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList">S3ExpressDirectoryBucketInventoryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurations">metricsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList">S3ExpressDirectoryBucketMetricsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList">S3ExpressDirectoryBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryptionInput">bucketEncryptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancyInput">dataRedundancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurationsInput">inventoryConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfigurationInput">lifecycleConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationNameInput">locationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurationsInput">metricsConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancy">dataRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationName">locationName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZoneName`<sup>Required</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.availabilityZoneName"></a>

```typescript
public readonly availabilityZoneName: string;
```

- *Type:* string

---

##### `bucketEncryption`<sup>Required</sup> <a name="bucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryption"></a>

```typescript
public readonly bucketEncryption: S3ExpressDirectoryBucketBucketEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference">S3ExpressDirectoryBucketBucketEncryptionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inventoryConfigurations`<sup>Required</sup> <a name="inventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurations"></a>

```typescript
public readonly inventoryConfigurations: S3ExpressDirectoryBucketInventoryConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList">S3ExpressDirectoryBucketInventoryConfigurationsList</a>

---

##### `lifecycleConfiguration`<sup>Required</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfiguration"></a>

```typescript
public readonly lifecycleConfiguration: S3ExpressDirectoryBucketLifecycleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationOutputReference</a>

---

##### `metricsConfigurations`<sup>Required</sup> <a name="metricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurations"></a>

```typescript
public readonly metricsConfigurations: S3ExpressDirectoryBucketMetricsConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList">S3ExpressDirectoryBucketMetricsConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tags"></a>

```typescript
public readonly tags: S3ExpressDirectoryBucketTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList">S3ExpressDirectoryBucketTagsList</a>

---

##### `bucketEncryptionInput`<sup>Optional</sup> <a name="bucketEncryptionInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryptionInput"></a>

```typescript
public readonly bucketEncryptionInput: IResolvable | S3ExpressDirectoryBucketBucketEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `dataRedundancyInput`<sup>Optional</sup> <a name="dataRedundancyInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancyInput"></a>

```typescript
public readonly dataRedundancyInput: string;
```

- *Type:* string

---

##### `inventoryConfigurationsInput`<sup>Optional</sup> <a name="inventoryConfigurationsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurationsInput"></a>

```typescript
public readonly inventoryConfigurationsInput: IResolvable | S3ExpressDirectoryBucketInventoryConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>[]

---

##### `lifecycleConfigurationInput`<sup>Optional</sup> <a name="lifecycleConfigurationInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfigurationInput"></a>

```typescript
public readonly lifecycleConfigurationInput: IResolvable | S3ExpressDirectoryBucketLifecycleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

---

##### `locationNameInput`<sup>Optional</sup> <a name="locationNameInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationNameInput"></a>

```typescript
public readonly locationNameInput: string;
```

- *Type:* string

---

##### `metricsConfigurationsInput`<sup>Optional</sup> <a name="metricsConfigurationsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurationsInput"></a>

```typescript
public readonly metricsConfigurationsInput: IResolvable | S3ExpressDirectoryBucketMetricsConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | S3ExpressDirectoryBucketTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `dataRedundancy`<sup>Required</sup> <a name="dataRedundancy" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancy"></a>

```typescript
public readonly dataRedundancy: string;
```

- *Type:* string

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationName"></a>

```typescript
public readonly locationName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ExpressDirectoryBucketBucketEncryption <a name="S3ExpressDirectoryBucketBucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const s3ExpressDirectoryBucketBucketEncryption: s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>[]</code> | Specifies the default server-side-encryption configuration. |

---

##### `serverSideEncryptionConfiguration`<sup>Optional</sup> <a name="serverSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: IResolvable | S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>[]

Specifies the default server-side-encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#server_side_encryption_configuration S3ExpressDirectoryBucket#server_side_encryption_configuration}

---

### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const s3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration: s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.serverSideEncryptionByDefault">serverSideEncryptionByDefault</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a></code> | Specifies the default server-side encryption to apply to new objects in the bucket. |

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket.

Existing objects are not affected. Amazon S3 Express One Zone uses an S3 Bucket Key with SSE-KMS and S3 Bucket Key cannot be disabled. It's only allowed to set the BucketKeyEnabled element to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#bucket_key_enabled S3ExpressDirectoryBucket#bucket_key_enabled}

---

##### `serverSideEncryptionByDefault`<sup>Optional</sup> <a name="serverSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.serverSideEncryptionByDefault"></a>

```typescript
public readonly serverSideEncryptionByDefault: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

Specifies the default server-side encryption to apply to new objects in the bucket.

If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#server_side_encryption_by_default S3ExpressDirectoryBucket#server_side_encryption_by_default}

---

### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const s3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault: s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.sseAlgorithm">sseAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#sse_algorithm S3ExpressDirectoryBucket#sse_algorithm}. |

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

AWS Key Management Service (KMS) customer managed key ID to use for the default encryption.

This parameter is allowed only if SSEAlgorithm is set to aws:kms. You can specify this parameter with the key ID or the Amazon Resource Name (ARN) of the KMS key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#kms_master_key_id S3ExpressDirectoryBucket#kms_master_key_id}

---

##### `sseAlgorithm`<sup>Optional</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.sseAlgorithm"></a>

```typescript
public readonly sseAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#sse_algorithm S3ExpressDirectoryBucket#sse_algorithm}.

---

### S3ExpressDirectoryBucketConfig <a name="S3ExpressDirectoryBucketConfig" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const s3ExpressDirectoryBucketConfig: s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dataRedundancy">dataRedundancy</a></code> | <code>string</code> | Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.locationName">locationName</a></code> | <code>string</code> | Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketEncryption">bucketEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a></code> | Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Specifies a name for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.inventoryConfigurations">inventoryConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>[]</code> | The inventory configuration for an Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a></code> | Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.metricsConfigurations">metricsConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>[]</code> | Specifies the metrics configurations for the Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#tags S3ExpressDirectoryBucket#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataRedundancy`<sup>Required</sup> <a name="dataRedundancy" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dataRedundancy"></a>

```typescript
public readonly dataRedundancy: string;
```

- *Type:* string

Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#data_redundancy S3ExpressDirectoryBucket#data_redundancy}

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.locationName"></a>

```typescript
public readonly locationName: string;
```

- *Type:* string

Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created.

An example Availability Zone ID value is 'use1-az5'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#location_name S3ExpressDirectoryBucket#location_name}

---

##### `bucketEncryption`<sup>Optional</sup> <a name="bucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketEncryption"></a>

```typescript
public readonly bucketEncryption: S3ExpressDirectoryBucketBucketEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#bucket_encryption S3ExpressDirectoryBucket#bucket_encryption}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Specifies a name for the bucket.

The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone or Local Zone. The bucket name must also follow the format 'bucket_base_name--zone_id--x-s3'. The zone_id can be the ID of an Availability Zone or a Local Zone. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#bucket_name S3ExpressDirectoryBucket#bucket_name}

---

##### `inventoryConfigurations`<sup>Optional</sup> <a name="inventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.inventoryConfigurations"></a>

```typescript
public readonly inventoryConfigurations: IResolvable | S3ExpressDirectoryBucketInventoryConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>[]

The inventory configuration for an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#inventory_configurations S3ExpressDirectoryBucket#inventory_configurations}

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycleConfiguration"></a>

```typescript
public readonly lifecycleConfiguration: S3ExpressDirectoryBucketLifecycleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#lifecycle_configuration S3ExpressDirectoryBucket#lifecycle_configuration}

---

##### `metricsConfigurations`<sup>Optional</sup> <a name="metricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.metricsConfigurations"></a>

```typescript
public readonly metricsConfigurations: IResolvable | S3ExpressDirectoryBucketMetricsConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>[]

Specifies the metrics configurations for the Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#metrics_configurations S3ExpressDirectoryBucket#metrics_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | S3ExpressDirectoryBucketTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#tags S3ExpressDirectoryBucket#tags}.

---

### S3ExpressDirectoryBucketInventoryConfigurations <a name="S3ExpressDirectoryBucketInventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const s3ExpressDirectoryBucketInventoryConfigurations: s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a></code> | Specifies information about where to publish inventory reports for an Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the inventory is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.id">id</a></code> | <code>string</code> | The ID used to identify the inventory configuration. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.includedObjectVersions">includedObjectVersions</a></code> | <code>string</code> | Object versions to include in the inventory list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.optionalFields">optionalFields</a></code> | <code>string[]</code> | Contains the optional fields that are included in the inventory results. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.prefix">prefix</a></code> | <code>string</code> | The prefix that is prepended to all inventory results. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.scheduleFrequency">scheduleFrequency</a></code> | <code>string</code> | Specifies the schedule for generating inventory results. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.destination"></a>

```typescript
public readonly destination: S3ExpressDirectoryBucketInventoryConfigurationsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

Specifies information about where to publish inventory reports for an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#destination S3ExpressDirectoryBucket#destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the inventory is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#enabled S3ExpressDirectoryBucket#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID used to identify the inventory configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includedObjectVersions`<sup>Optional</sup> <a name="includedObjectVersions" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.includedObjectVersions"></a>

```typescript
public readonly includedObjectVersions: string;
```

- *Type:* string

Object versions to include in the inventory list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#included_object_versions S3ExpressDirectoryBucket#included_object_versions}

---

##### `optionalFields`<sup>Optional</sup> <a name="optionalFields" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.optionalFields"></a>

```typescript
public readonly optionalFields: string[];
```

- *Type:* string[]

Contains the optional fields that are included in the inventory results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#optional_fields S3ExpressDirectoryBucket#optional_fields}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The prefix that is prepended to all inventory results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}

---

##### `scheduleFrequency`<sup>Optional</sup> <a name="scheduleFrequency" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.scheduleFrequency"></a>

```typescript
public readonly scheduleFrequency: string;
```

- *Type:* string

Specifies the schedule for generating inventory results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#schedule_frequency S3ExpressDirectoryBucket#schedule_frequency}

---

### S3ExpressDirectoryBucketInventoryConfigurationsDestination <a name="S3ExpressDirectoryBucketInventoryConfigurationsDestination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const s3ExpressDirectoryBucketInventoryConfigurationsDestination: s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketAccountId">bucketAccountId</a></code> | <code>string</code> | The account ID that owns the destination S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketArn">bucketArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the destination Amazon S3 bucket to which data is exported. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.format">format</a></code> | <code>string</code> | Specifies the file format used when exporting data to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.prefix">prefix</a></code> | <code>string</code> | The prefix to use when exporting data. The prefix is prepended to all results. |

---

##### `bucketAccountId`<sup>Optional</sup> <a name="bucketAccountId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketAccountId"></a>

```typescript
public readonly bucketAccountId: string;
```

- *Type:* string

The account ID that owns the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#bucket_account_id S3ExpressDirectoryBucket#bucket_account_id}

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the destination Amazon S3 bucket to which data is exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#bucket_arn S3ExpressDirectoryBucket#bucket_arn}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Specifies the file format used when exporting data to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#format S3ExpressDirectoryBucket#format}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The prefix to use when exporting data. The prefix is prepended to all results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}

---

### S3ExpressDirectoryBucketLifecycleConfiguration <a name="S3ExpressDirectoryBucketLifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const s3ExpressDirectoryBucketLifecycleConfiguration: s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>[]</code> | A lifecycle rule for individual objects in an Amazon S3 Express bucket. |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration.property.rules"></a>

```typescript
public readonly rules: IResolvable | S3ExpressDirectoryBucketLifecycleConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>[]

A lifecycle rule for individual objects in an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#rules S3ExpressDirectoryBucket#rules}

---

### S3ExpressDirectoryBucketLifecycleConfigurationRules <a name="S3ExpressDirectoryBucketLifecycleConfigurationRules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const s3ExpressDirectoryBucketLifecycleConfigurationRules: s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload">abortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.expirationInDays">expirationInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#expiration_in_days S3ExpressDirectoryBucket#expiration_in_days}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeGreaterThan">objectSizeGreaterThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#object_size_greater_than S3ExpressDirectoryBucket#object_size_greater_than}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeLessThan">objectSizeLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#object_size_less_than S3ExpressDirectoryBucket#object_size_less_than}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#status S3ExpressDirectoryBucket#status}. |

---

##### `abortIncompleteMultipartUpload`<sup>Optional</sup> <a name="abortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload"></a>

```typescript
public readonly abortIncompleteMultipartUpload: S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#abort_incomplete_multipart_upload S3ExpressDirectoryBucket#abort_incomplete_multipart_upload}

---

##### `expirationInDays`<sup>Optional</sup> <a name="expirationInDays" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.expirationInDays"></a>

```typescript
public readonly expirationInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#expiration_in_days S3ExpressDirectoryBucket#expiration_in_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectSizeGreaterThan`<sup>Optional</sup> <a name="objectSizeGreaterThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeGreaterThan"></a>

```typescript
public readonly objectSizeGreaterThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#object_size_greater_than S3ExpressDirectoryBucket#object_size_greater_than}.

---

##### `objectSizeLessThan`<sup>Optional</sup> <a name="objectSizeLessThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeLessThan"></a>

```typescript
public readonly objectSizeLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#object_size_less_than S3ExpressDirectoryBucket#object_size_less_than}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#status S3ExpressDirectoryBucket#status}.

---

### S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const s3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload: s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation">daysAfterInitiation</a></code> | <code>number</code> | Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload. |

---

##### `daysAfterInitiation`<sup>Optional</sup> <a name="daysAfterInitiation" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

```typescript
public readonly daysAfterInitiation: number;
```

- *Type:* number

Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#days_after_initiation S3ExpressDirectoryBucket#days_after_initiation}

---

### S3ExpressDirectoryBucketMetricsConfigurations <a name="S3ExpressDirectoryBucketMetricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const s3ExpressDirectoryBucketMetricsConfigurations: s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.accessPointArn">accessPointArn</a></code> | <code>string</code> | The access point ARN used when evaluating a metrics filter. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.id">id</a></code> | <code>string</code> | The ID used to identify the metrics configuration. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.prefix">prefix</a></code> | <code>string</code> | The prefix used when evaluating a metrics filter. |

---

##### `accessPointArn`<sup>Optional</sup> <a name="accessPointArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.accessPointArn"></a>

```typescript
public readonly accessPointArn: string;
```

- *Type:* string

The access point ARN used when evaluating a metrics filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#access_point_arn S3ExpressDirectoryBucket#access_point_arn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID used to identify the metrics configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The prefix used when evaluating a metrics filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}

---

### S3ExpressDirectoryBucketTags <a name="S3ExpressDirectoryBucketTags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

const s3ExpressDirectoryBucketTags: s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#key S3ExpressDirectoryBucket#key}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#value S3ExpressDirectoryBucket#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#key S3ExpressDirectoryBucket#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3express_directory_bucket#value S3ExpressDirectoryBucket#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ExpressDirectoryBucketBucketEncryptionOutputReference <a name="S3ExpressDirectoryBucketBucketEncryptionOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.putServerSideEncryptionConfiguration">putServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resetServerSideEncryptionConfiguration">resetServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServerSideEncryptionConfiguration` <a name="putServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.putServerSideEncryptionConfiguration"></a>

```typescript
public putServerSideEncryptionConfiguration(value: IResolvable | S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>[]

---

##### `resetServerSideEncryptionConfiguration` <a name="resetServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resetServerSideEncryptionConfiguration"></a>

```typescript
public resetServerSideEncryptionConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfigurationInput">serverSideEncryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList</a>

---

##### `serverSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="serverSideEncryptionConfigurationInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfigurationInput"></a>

```typescript
public readonly serverSideEncryptionConfigurationInput: IResolvable | S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketBucketEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

---


### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get"></a>

```typescript
public get(index: number): S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>[]

---


### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.putServerSideEncryptionByDefault">putServerSideEncryptionByDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetBucketKeyEnabled">resetBucketKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetServerSideEncryptionByDefault">resetServerSideEncryptionByDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServerSideEncryptionByDefault` <a name="putServerSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.putServerSideEncryptionByDefault"></a>

```typescript
public putServerSideEncryptionByDefault(value: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.putServerSideEncryptionByDefault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

---

##### `resetBucketKeyEnabled` <a name="resetBucketKeyEnabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetBucketKeyEnabled"></a>

```typescript
public resetBucketKeyEnabled(): void
```

##### `resetServerSideEncryptionByDefault` <a name="resetServerSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetServerSideEncryptionByDefault"></a>

```typescript
public resetServerSideEncryptionByDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefault">serverSideEncryptionByDefault</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabledInput">bucketKeyEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefaultInput">serverSideEncryptionByDefaultInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverSideEncryptionByDefault`<sup>Required</sup> <a name="serverSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefault"></a>

```typescript
public readonly serverSideEncryptionByDefault: S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference</a>

---

##### `bucketKeyEnabledInput`<sup>Optional</sup> <a name="bucketKeyEnabledInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabledInput"></a>

```typescript
public readonly bucketKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serverSideEncryptionByDefaultInput`<sup>Optional</sup> <a name="serverSideEncryptionByDefaultInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefaultInput"></a>

```typescript
public readonly serverSideEncryptionByDefaultInput: IResolvable | S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

---

##### `bucketKeyEnabled`<sup>Required</sup> <a name="bucketKeyEnabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration</a>

---


### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetKmsMasterKeyId">resetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetSseAlgorithm">resetSseAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsMasterKeyId` <a name="resetKmsMasterKeyId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetKmsMasterKeyId"></a>

```typescript
public resetKmsMasterKeyId(): void
```

##### `resetSseAlgorithm` <a name="resetSseAlgorithm" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetSseAlgorithm"></a>

```typescript
public resetSseAlgorithm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyIdInput">kmsMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithmInput">sseAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm">sseAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsMasterKeyIdInput`<sup>Optional</sup> <a name="kmsMasterKeyIdInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyIdInput"></a>

```typescript
public readonly kmsMasterKeyIdInput: string;
```

- *Type:* string

---

##### `sseAlgorithmInput`<sup>Optional</sup> <a name="sseAlgorithmInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithmInput"></a>

```typescript
public readonly sseAlgorithmInput: string;
```

- *Type:* string

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

---

##### `sseAlgorithm`<sup>Required</sup> <a name="sseAlgorithm" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm"></a>

```typescript
public readonly sseAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

---


### S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference <a name="S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketAccountId">resetBucketAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketAccountId` <a name="resetBucketAccountId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketAccountId"></a>

```typescript
public resetBucketAccountId(): void
```

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketArn"></a>

```typescript
public resetBucketArn(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountIdInput">bucketAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountId">bucketAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketAccountIdInput`<sup>Optional</sup> <a name="bucketAccountIdInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountIdInput"></a>

```typescript
public readonly bucketAccountIdInput: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucketAccountId`<sup>Required</sup> <a name="bucketAccountId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountId"></a>

```typescript
public readonly bucketAccountId: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketInventoryConfigurationsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

---


### S3ExpressDirectoryBucketInventoryConfigurationsList <a name="S3ExpressDirectoryBucketInventoryConfigurationsList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.get"></a>

```typescript
public get(index: number): S3ExpressDirectoryBucketInventoryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketInventoryConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>[]

---


### S3ExpressDirectoryBucketInventoryConfigurationsOutputReference <a name="S3ExpressDirectoryBucketInventoryConfigurationsOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetIncludedObjectVersions">resetIncludedObjectVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetOptionalFields">resetOptionalFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetScheduleFrequency">resetScheduleFrequency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination"></a>

```typescript
public putDestination(value: S3ExpressDirectoryBucketInventoryConfigurationsDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludedObjectVersions` <a name="resetIncludedObjectVersions" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetIncludedObjectVersions"></a>

```typescript
public resetIncludedObjectVersions(): void
```

##### `resetOptionalFields` <a name="resetOptionalFields" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetOptionalFields"></a>

```typescript
public resetOptionalFields(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetScheduleFrequency` <a name="resetScheduleFrequency" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetScheduleFrequency"></a>

```typescript
public resetScheduleFrequency(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference">S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destinationInput">destinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersionsInput">includedObjectVersionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFieldsInput">optionalFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequencyInput">scheduleFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersions">includedObjectVersions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFields">optionalFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequency">scheduleFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destination"></a>

```typescript
public readonly destination: S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference">S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | S3ExpressDirectoryBucketInventoryConfigurationsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includedObjectVersionsInput`<sup>Optional</sup> <a name="includedObjectVersionsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersionsInput"></a>

```typescript
public readonly includedObjectVersionsInput: string;
```

- *Type:* string

---

##### `optionalFieldsInput`<sup>Optional</sup> <a name="optionalFieldsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFieldsInput"></a>

```typescript
public readonly optionalFieldsInput: string[];
```

- *Type:* string[]

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `scheduleFrequencyInput`<sup>Optional</sup> <a name="scheduleFrequencyInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequencyInput"></a>

```typescript
public readonly scheduleFrequencyInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includedObjectVersions`<sup>Required</sup> <a name="includedObjectVersions" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersions"></a>

```typescript
public readonly includedObjectVersions: string;
```

- *Type:* string

---

##### `optionalFields`<sup>Required</sup> <a name="optionalFields" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFields"></a>

```typescript
public readonly optionalFields: string[];
```

- *Type:* string[]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `scheduleFrequency`<sup>Required</sup> <a name="scheduleFrequency" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequency"></a>

```typescript
public readonly scheduleFrequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketInventoryConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations">S3ExpressDirectoryBucketInventoryConfigurations</a>

---


### S3ExpressDirectoryBucketLifecycleConfigurationOutputReference <a name="S3ExpressDirectoryBucketLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | S3ExpressDirectoryBucketLifecycleConfigurationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>[]

---

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList">S3ExpressDirectoryBucketLifecycleConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rules"></a>

```typescript
public readonly rules: S3ExpressDirectoryBucketLifecycleConfigurationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList">S3ExpressDirectoryBucketLifecycleConfigurationRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | S3ExpressDirectoryBucketLifecycleConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketLifecycleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

---


### S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation">resetDaysAfterInitiation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysAfterInitiation` <a name="resetDaysAfterInitiation" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation"></a>

```typescript
public resetDaysAfterInitiation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput">daysAfterInitiationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">daysAfterInitiation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysAfterInitiationInput`<sup>Optional</sup> <a name="daysAfterInitiationInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput"></a>

```typescript
public readonly daysAfterInitiationInput: number;
```

- *Type:* number

---

##### `daysAfterInitiation`<sup>Required</sup> <a name="daysAfterInitiation" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```typescript
public readonly daysAfterInitiation: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---


### S3ExpressDirectoryBucketLifecycleConfigurationRulesList <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.get"></a>

```typescript
public get(index: number): S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketLifecycleConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>[]

---


### S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload">putAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload">resetAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays">resetExpirationInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeGreaterThan">resetObjectSizeGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeLessThan">resetObjectSizeLessThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbortIncompleteMultipartUpload` <a name="putAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload"></a>

```typescript
public putAbortIncompleteMultipartUpload(value: S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---

##### `resetAbortIncompleteMultipartUpload` <a name="resetAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload"></a>

```typescript
public resetAbortIncompleteMultipartUpload(): void
```

##### `resetExpirationInDays` <a name="resetExpirationInDays" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays"></a>

```typescript
public resetExpirationInDays(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObjectSizeGreaterThan` <a name="resetObjectSizeGreaterThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeGreaterThan"></a>

```typescript
public resetObjectSizeGreaterThan(): void
```

##### `resetObjectSizeLessThan` <a name="resetObjectSizeLessThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeLessThan"></a>

```typescript
public resetObjectSizeLessThan(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload">abortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput">abortIncompleteMultipartUploadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput">expirationInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThanInput">objectSizeGreaterThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThanInput">objectSizeLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays">expirationInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThan">objectSizeGreaterThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThan">objectSizeLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `abortIncompleteMultipartUpload`<sup>Required</sup> <a name="abortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload"></a>

```typescript
public readonly abortIncompleteMultipartUpload: S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a>

---

##### `abortIncompleteMultipartUploadInput`<sup>Optional</sup> <a name="abortIncompleteMultipartUploadInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput"></a>

```typescript
public readonly abortIncompleteMultipartUploadInput: IResolvable | S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---

##### `expirationInDaysInput`<sup>Optional</sup> <a name="expirationInDaysInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput"></a>

```typescript
public readonly expirationInDaysInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectSizeGreaterThanInput`<sup>Optional</sup> <a name="objectSizeGreaterThanInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThanInput"></a>

```typescript
public readonly objectSizeGreaterThanInput: string;
```

- *Type:* string

---

##### `objectSizeLessThanInput`<sup>Optional</sup> <a name="objectSizeLessThanInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThanInput"></a>

```typescript
public readonly objectSizeLessThanInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `expirationInDays`<sup>Required</sup> <a name="expirationInDays" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays"></a>

```typescript
public readonly expirationInDays: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectSizeGreaterThan`<sup>Required</sup> <a name="objectSizeGreaterThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThan"></a>

```typescript
public readonly objectSizeGreaterThan: string;
```

- *Type:* string

---

##### `objectSizeLessThan`<sup>Required</sup> <a name="objectSizeLessThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThan"></a>

```typescript
public readonly objectSizeLessThan: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketLifecycleConfigurationRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules">S3ExpressDirectoryBucketLifecycleConfigurationRules</a>

---


### S3ExpressDirectoryBucketMetricsConfigurationsList <a name="S3ExpressDirectoryBucketMetricsConfigurationsList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.get"></a>

```typescript
public get(index: number): S3ExpressDirectoryBucketMetricsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketMetricsConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>[]

---


### S3ExpressDirectoryBucketMetricsConfigurationsOutputReference <a name="S3ExpressDirectoryBucketMetricsConfigurationsOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetAccessPointArn">resetAccessPointArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessPointArn` <a name="resetAccessPointArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetAccessPointArn"></a>

```typescript
public resetAccessPointArn(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArnInput">accessPointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArn">accessPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessPointArnInput`<sup>Optional</sup> <a name="accessPointArnInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArnInput"></a>

```typescript
public readonly accessPointArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `accessPointArn`<sup>Required</sup> <a name="accessPointArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArn"></a>

```typescript
public readonly accessPointArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketMetricsConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations">S3ExpressDirectoryBucketMetricsConfigurations</a>

---


### S3ExpressDirectoryBucketTagsList <a name="S3ExpressDirectoryBucketTagsList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.get"></a>

```typescript
public get(index: number): S3ExpressDirectoryBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>[]

---


### S3ExpressDirectoryBucketTagsOutputReference <a name="S3ExpressDirectoryBucketTagsOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer"></a>

```typescript
import { s3ExpressDirectoryBucket } from '@cdktn/provider-awscc'

new s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ExpressDirectoryBucketTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags">S3ExpressDirectoryBucketTags</a>

---




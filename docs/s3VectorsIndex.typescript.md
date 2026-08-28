# `s3VectorsIndex` Submodule <a name="`s3VectorsIndex` Submodule" id="@cdktn/provider-awscc.s3VectorsIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3VectorsIndex <a name="S3VectorsIndex" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index awscc_s3vectors_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer"></a>

```typescript
import { s3VectorsIndex } from '@cdktn/provider-awscc'

new s3VectorsIndex.S3VectorsIndex(scope: Construct, id: string, config: S3VectorsIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig">S3VectorsIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig">S3VectorsIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putMetadataConfiguration">putMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetIndexName">resetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetMetadataConfiguration">resetMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetVectorBucketArn">resetVectorBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetVectorBucketName">resetVectorBucketName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: S3VectorsIndexEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a>

---

##### `putMetadataConfiguration` <a name="putMetadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putMetadataConfiguration"></a>

```typescript
public putMetadataConfiguration(value: S3VectorsIndexMetadataConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putMetadataConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putTags"></a>

```typescript
public putTags(value: IResolvable | S3VectorsIndexTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetIndexName` <a name="resetIndexName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetIndexName"></a>

```typescript
public resetIndexName(): void
```

##### `resetMetadataConfiguration` <a name="resetMetadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetMetadataConfiguration"></a>

```typescript
public resetMetadataConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVectorBucketArn` <a name="resetVectorBucketArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetVectorBucketArn"></a>

```typescript
public resetVectorBucketArn(): void
```

##### `resetVectorBucketName` <a name="resetVectorBucketName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetVectorBucketName"></a>

```typescript
public resetVectorBucketName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3VectorsIndex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isConstruct"></a>

```typescript
import { s3VectorsIndex } from '@cdktn/provider-awscc'

s3VectorsIndex.S3VectorsIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformElement"></a>

```typescript
import { s3VectorsIndex } from '@cdktn/provider-awscc'

s3VectorsIndex.S3VectorsIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformResource"></a>

```typescript
import { s3VectorsIndex } from '@cdktn/provider-awscc'

s3VectorsIndex.S3VectorsIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport"></a>

```typescript
import { s3VectorsIndex } from '@cdktn/provider-awscc'

s3VectorsIndex.S3VectorsIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a S3VectorsIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3VectorsIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3VectorsIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3VectorsIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference">S3VectorsIndexEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexArn">indexArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.metadataConfiguration">metadataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference">S3VectorsIndexMetadataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList">S3VectorsIndexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dimensionInput">dimensionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.distanceMetricInput">distanceMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.metadataConfigurationInput">metadataConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketArnInput">vectorBucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketNameInput">vectorBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dimension">dimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.distanceMetric">distanceMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketArn">vectorBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketName">vectorBucketName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: S3VectorsIndexEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference">S3VectorsIndexEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexArn`<sup>Required</sup> <a name="indexArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexArn"></a>

```typescript
public readonly indexArn: string;
```

- *Type:* string

---

##### `metadataConfiguration`<sup>Required</sup> <a name="metadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.metadataConfiguration"></a>

```typescript
public readonly metadataConfiguration: S3VectorsIndexMetadataConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference">S3VectorsIndexMetadataConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tags"></a>

```typescript
public readonly tags: S3VectorsIndexTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList">S3VectorsIndexTagsList</a>

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: number;
```

- *Type:* number

---

##### `distanceMetricInput`<sup>Optional</sup> <a name="distanceMetricInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.distanceMetricInput"></a>

```typescript
public readonly distanceMetricInput: string;
```

- *Type:* string

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: IResolvable | S3VectorsIndexEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a>

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `metadataConfigurationInput`<sup>Optional</sup> <a name="metadataConfigurationInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.metadataConfigurationInput"></a>

```typescript
public readonly metadataConfigurationInput: IResolvable | S3VectorsIndexMetadataConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | S3VectorsIndexTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]

---

##### `vectorBucketArnInput`<sup>Optional</sup> <a name="vectorBucketArnInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketArnInput"></a>

```typescript
public readonly vectorBucketArnInput: string;
```

- *Type:* string

---

##### `vectorBucketNameInput`<sup>Optional</sup> <a name="vectorBucketNameInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketNameInput"></a>

```typescript
public readonly vectorBucketNameInput: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dimension"></a>

```typescript
public readonly dimension: number;
```

- *Type:* number

---

##### `distanceMetric`<sup>Required</sup> <a name="distanceMetric" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.distanceMetric"></a>

```typescript
public readonly distanceMetric: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `vectorBucketArn`<sup>Required</sup> <a name="vectorBucketArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketArn"></a>

```typescript
public readonly vectorBucketArn: string;
```

- *Type:* string

---

##### `vectorBucketName`<sup>Required</sup> <a name="vectorBucketName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketName"></a>

```typescript
public readonly vectorBucketName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3VectorsIndexConfig <a name="S3VectorsIndexConfig" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.Initializer"></a>

```typescript
import { s3VectorsIndex } from '@cdktn/provider-awscc'

const s3VectorsIndexConfig: s3VectorsIndex.S3VectorsIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dataType">dataType</a></code> | <code>string</code> | The data type of the vectors to be inserted into the vector index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dimension">dimension</a></code> | <code>number</code> | The dimensions of the vectors to be inserted into the vector index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.distanceMetric">distanceMetric</a></code> | <code>string</code> | The distance metric to be used for similarity search. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a></code> | The encryption configuration for the index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.indexName">indexName</a></code> | <code>string</code> | The name of the vector index to create. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.metadataConfiguration">metadataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a></code> | The metadata configuration for the vector index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]</code> | User tags (key-value pairs) to associate with the index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketArn">vectorBucketArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the vector bucket. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketName">vectorBucketName</a></code> | <code>string</code> | The name of the vector bucket that contains the vector index. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

The data type of the vectors to be inserted into the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index#data_type S3VectorsIndex#data_type}

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dimension"></a>

```typescript
public readonly dimension: number;
```

- *Type:* number

The dimensions of the vectors to be inserted into the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index#dimension S3VectorsIndex#dimension}

---

##### `distanceMetric`<sup>Required</sup> <a name="distanceMetric" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.distanceMetric"></a>

```typescript
public readonly distanceMetric: string;
```

- *Type:* string

The distance metric to be used for similarity search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index#distance_metric S3VectorsIndex#distance_metric}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: S3VectorsIndexEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a>

The encryption configuration for the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index#encryption_configuration S3VectorsIndex#encryption_configuration}

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The name of the vector index to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index#index_name S3VectorsIndex#index_name}

---

##### `metadataConfiguration`<sup>Optional</sup> <a name="metadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.metadataConfiguration"></a>

```typescript
public readonly metadataConfiguration: S3VectorsIndexMetadataConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a>

The metadata configuration for the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index#metadata_configuration S3VectorsIndex#metadata_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | S3VectorsIndexTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]

User tags (key-value pairs) to associate with the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index#tags S3VectorsIndex#tags}

---

##### `vectorBucketArn`<sup>Optional</sup> <a name="vectorBucketArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketArn"></a>

```typescript
public readonly vectorBucketArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the vector bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index#vector_bucket_arn S3VectorsIndex#vector_bucket_arn}

---

##### `vectorBucketName`<sup>Optional</sup> <a name="vectorBucketName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketName"></a>

```typescript
public readonly vectorBucketName: string;
```

- *Type:* string

The name of the vector bucket that contains the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index#vector_bucket_name S3VectorsIndex#vector_bucket_name}

---

### S3VectorsIndexEncryptionConfiguration <a name="S3VectorsIndexEncryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.Initializer"></a>

```typescript
import { s3VectorsIndex } from '@cdktn/provider-awscc'

const s3VectorsIndexEncryptionConfiguration: s3VectorsIndex.S3VectorsIndexEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | AWS Key Management Service (KMS) customer managed key ID to use for the encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.sseType">sseType</a></code> | <code>string</code> | Defines the server-side encryption type for index encryption configuration. Defaults to the parent vector bucket's encryption settings when unspecified. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

AWS Key Management Service (KMS) customer managed key ID to use for the encryption configuration.

This parameter is allowed if and only if sseType is set to aws:kms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index#kms_key_arn S3VectorsIndex#kms_key_arn}

---

##### `sseType`<sup>Optional</sup> <a name="sseType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.sseType"></a>

```typescript
public readonly sseType: string;
```

- *Type:* string

Defines the server-side encryption type for index encryption configuration. Defaults to the parent vector bucket's encryption settings when unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index#sse_type S3VectorsIndex#sse_type}

---

### S3VectorsIndexMetadataConfiguration <a name="S3VectorsIndexMetadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration.Initializer"></a>

```typescript
import { s3VectorsIndex } from '@cdktn/provider-awscc'

const s3VectorsIndexMetadataConfiguration: s3VectorsIndex.S3VectorsIndexMetadataConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration.property.nonFilterableMetadataKeys">nonFilterableMetadataKeys</a></code> | <code>string[]</code> | Non-filterable metadata keys allow you to enrich vectors with additional context during storage and retrieval. |

---

##### `nonFilterableMetadataKeys`<sup>Optional</sup> <a name="nonFilterableMetadataKeys" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration.property.nonFilterableMetadataKeys"></a>

```typescript
public readonly nonFilterableMetadataKeys: string[];
```

- *Type:* string[]

Non-filterable metadata keys allow you to enrich vectors with additional context during storage and retrieval.

Unlike default metadata keys, these keys cannot be used as query filters. Non-filterable metadata keys can be retrieved but cannot be searched, queried, or filtered. You can access non-filterable metadata keys of your vectors after finding the vectors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3vectors_index#non_filterable_metadata_keys S3VectorsIndex#non_filterable_metadata_keys}

---

### S3VectorsIndexTags <a name="S3VectorsIndexTags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.Initializer"></a>

```typescript
import { s3VectorsIndex } from '@cdktn/provider-awscc'

const s3VectorsIndexTags: s3VectorsIndex.S3VectorsIndexTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.property.key">key</a></code> | <code>string</code> | Tag key must be between 1 to 128 characters in length. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.property.value">value</a></code> | <code>string</code> | Tag value must be between 0 to 256 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Tag key must be between 1 to 128 characters in length.

Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Tag value must be between 0 to 256 characters in length.

Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

## Classes <a name="Classes" id="Classes"></a>

### S3VectorsIndexEncryptionConfigurationOutputReference <a name="S3VectorsIndexEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { s3VectorsIndex } from '@cdktn/provider-awscc'

new s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetSseType">resetSseType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetSseType` <a name="resetSseType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetSseType"></a>

```typescript
public resetSseType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseTypeInput">sseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseType">sseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `sseTypeInput`<sup>Optional</sup> <a name="sseTypeInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseTypeInput"></a>

```typescript
public readonly sseTypeInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `sseType`<sup>Required</sup> <a name="sseType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseType"></a>

```typescript
public readonly sseType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3VectorsIndexEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a>

---


### S3VectorsIndexMetadataConfigurationOutputReference <a name="S3VectorsIndexMetadataConfigurationOutputReference" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer"></a>

```typescript
import { s3VectorsIndex } from '@cdktn/provider-awscc'

new s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resetNonFilterableMetadataKeys">resetNonFilterableMetadataKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNonFilterableMetadataKeys` <a name="resetNonFilterableMetadataKeys" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resetNonFilterableMetadataKeys"></a>

```typescript
public resetNonFilterableMetadataKeys(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeysInput">nonFilterableMetadataKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeys">nonFilterableMetadataKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nonFilterableMetadataKeysInput`<sup>Optional</sup> <a name="nonFilterableMetadataKeysInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeysInput"></a>

```typescript
public readonly nonFilterableMetadataKeysInput: string[];
```

- *Type:* string[]

---

##### `nonFilterableMetadataKeys`<sup>Required</sup> <a name="nonFilterableMetadataKeys" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeys"></a>

```typescript
public readonly nonFilterableMetadataKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3VectorsIndexMetadataConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a>

---


### S3VectorsIndexTagsList <a name="S3VectorsIndexTagsList" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer"></a>

```typescript
import { s3VectorsIndex } from '@cdktn/provider-awscc'

new s3VectorsIndex.S3VectorsIndexTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.get"></a>

```typescript
public get(index: number): S3VectorsIndexTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3VectorsIndexTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]

---


### S3VectorsIndexTagsOutputReference <a name="S3VectorsIndexTagsOutputReference" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer"></a>

```typescript
import { s3VectorsIndex } from '@cdktn/provider-awscc'

new s3VectorsIndex.S3VectorsIndexTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3VectorsIndexTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>

---




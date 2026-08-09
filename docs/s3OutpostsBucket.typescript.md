# `s3OutpostsBucket` Submodule <a name="`s3OutpostsBucket` Submodule" id="@cdktn/provider-awscc.s3OutpostsBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3OutpostsBucket <a name="S3OutpostsBucket" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket awscc_s3outposts_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

new s3OutpostsBucket.S3OutpostsBucket(scope: Construct, id: string, config: S3OutpostsBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig">S3OutpostsBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig">S3OutpostsBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putLifecycleConfiguration">putLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetLifecycleConfiguration">resetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLifecycleConfiguration` <a name="putLifecycleConfiguration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putLifecycleConfiguration"></a>

```typescript
public putLifecycleConfiguration(value: S3OutpostsBucketLifecycleConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putTags"></a>

```typescript
public putTags(value: IResolvable | S3OutpostsBucketTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>[]

---

##### `resetLifecycleConfiguration` <a name="resetLifecycleConfiguration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetLifecycleConfiguration"></a>

```typescript
public resetLifecycleConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3OutpostsBucket resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isConstruct"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

s3OutpostsBucket.S3OutpostsBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformElement"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

s3OutpostsBucket.S3OutpostsBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformResource"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

s3OutpostsBucket.S3OutpostsBucket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a S3OutpostsBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3OutpostsBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3OutpostsBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3OutpostsBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference">S3OutpostsBucketLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList">S3OutpostsBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycleConfigurationInput">lifecycleConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.outpostIdInput">outpostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.outpostId">outpostId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleConfiguration`<sup>Required</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycleConfiguration"></a>

```typescript
public readonly lifecycleConfiguration: S3OutpostsBucketLifecycleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference">S3OutpostsBucketLifecycleConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tags"></a>

```typescript
public readonly tags: S3OutpostsBucketTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList">S3OutpostsBucketTagsList</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `lifecycleConfigurationInput`<sup>Optional</sup> <a name="lifecycleConfigurationInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.lifecycleConfigurationInput"></a>

```typescript
public readonly lifecycleConfigurationInput: IResolvable | S3OutpostsBucketLifecycleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a>

---

##### `outpostIdInput`<sup>Optional</sup> <a name="outpostIdInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.outpostIdInput"></a>

```typescript
public readonly outpostIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | S3OutpostsBucketTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3OutpostsBucketConfig <a name="S3OutpostsBucketConfig" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

const s3OutpostsBucketConfig: s3OutpostsBucket.S3OutpostsBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.bucketName">bucketName</a></code> | <code>string</code> | A name for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.outpostId">outpostId</a></code> | <code>string</code> | The id of the customer outpost on which the bucket resides. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a></code> | Rules that define how Amazon S3Outposts manages objects during their lifetime. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this S3Outposts bucket. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

A name for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#bucket_name S3OutpostsBucket#bucket_name}

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

The id of the customer outpost on which the bucket resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#outpost_id S3OutpostsBucket#outpost_id}

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.lifecycleConfiguration"></a>

```typescript
public readonly lifecycleConfiguration: S3OutpostsBucketLifecycleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a>

Rules that define how Amazon S3Outposts manages objects during their lifetime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#lifecycle_configuration S3OutpostsBucket#lifecycle_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | S3OutpostsBucketTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>[]

An arbitrary set of tags (key-value pairs) for this S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#tags S3OutpostsBucket#tags}

---

### S3OutpostsBucketLifecycleConfiguration <a name="S3OutpostsBucketLifecycleConfiguration" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

const s3OutpostsBucketLifecycleConfiguration: s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>[]</code> | A list of lifecycle rules for individual objects in an Amazon S3Outposts bucket. |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration.property.rules"></a>

```typescript
public readonly rules: IResolvable | S3OutpostsBucketLifecycleConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>[]

A list of lifecycle rules for individual objects in an Amazon S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#rules S3OutpostsBucket#rules}

---

### S3OutpostsBucketLifecycleConfigurationRules <a name="S3OutpostsBucketLifecycleConfigurationRules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

const s3OutpostsBucketLifecycleConfigurationRules: s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload">abortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3Outposts bucket. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.expirationDate">expirationDate</a></code> | <code>string</code> | Indicates when objects are deleted from Amazon S3Outposts. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.expirationInDays">expirationInDays</a></code> | <code>number</code> | Indicates the number of days after creation when objects are deleted from Amazon S3Outposts. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a></code> | The container for the filter of the lifecycle rule. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.id">id</a></code> | <code>string</code> | Unique identifier for the lifecycle rule. The value can't be longer than 255 characters. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#status S3OutpostsBucket#status}. |

---

##### `abortIncompleteMultipartUpload`<sup>Optional</sup> <a name="abortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload"></a>

```typescript
public readonly abortIncompleteMultipartUpload: S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#abort_incomplete_multipart_upload S3OutpostsBucket#abort_incomplete_multipart_upload}

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

Indicates when objects are deleted from Amazon S3Outposts.

The date value must be in ISO 8601 format. The time is always midnight UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#expiration_date S3OutpostsBucket#expiration_date}

---

##### `expirationInDays`<sup>Optional</sup> <a name="expirationInDays" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.expirationInDays"></a>

```typescript
public readonly expirationInDays: number;
```

- *Type:* number

Indicates the number of days after creation when objects are deleted from Amazon S3Outposts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#expiration_in_days S3OutpostsBucket#expiration_in_days}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.filter"></a>

```typescript
public readonly filter: S3OutpostsBucketLifecycleConfigurationRulesFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a>

The container for the filter of the lifecycle rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#filter S3OutpostsBucket#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the lifecycle rule. The value can't be longer than 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#id S3OutpostsBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#status S3OutpostsBucket#status}.

---

### S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload <a name="S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

const s3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload: s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation">daysAfterInitiation</a></code> | <code>number</code> | Specifies the number of days after which Amazon S3Outposts aborts an incomplete multipart upload. |

---

##### `daysAfterInitiation`<sup>Optional</sup> <a name="daysAfterInitiation" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

```typescript
public readonly daysAfterInitiation: number;
```

- *Type:* number

Specifies the number of days after which Amazon S3Outposts aborts an incomplete multipart upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#days_after_initiation S3OutpostsBucket#days_after_initiation}

---

### S3OutpostsBucketLifecycleConfigurationRulesFilter <a name="S3OutpostsBucketLifecycleConfigurationRulesFilter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

const s3OutpostsBucketLifecycleConfigurationRulesFilter: s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.andOperator">andOperator</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a></code> | The container for the AND condition for the lifecycle rule. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.prefix">prefix</a></code> | <code>string</code> | Object key prefix that identifies one or more objects to which this rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a></code> | Specifies a tag used to identify a subset of objects for an Amazon S3Outposts bucket. |

---

##### `andOperator`<sup>Optional</sup> <a name="andOperator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.andOperator"></a>

```typescript
public readonly andOperator: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

The container for the AND condition for the lifecycle rule.

A combination of Prefix and 1 or more Tags OR a minimum of 2 or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#and_operator S3OutpostsBucket#and_operator}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Object key prefix that identifies one or more objects to which this rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#prefix S3OutpostsBucket#prefix}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter.property.tag"></a>

```typescript
public readonly tag: S3OutpostsBucketLifecycleConfigurationRulesFilterTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

Specifies a tag used to identify a subset of objects for an Amazon S3Outposts bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#tag S3OutpostsBucket#tag}

---

### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

const s3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator: s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.property.prefix">prefix</a></code> | <code>string</code> | Prefix identifies one or more objects to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>[]</code> | All of these tags must exist in the object's tag set in order for the rule to apply. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Prefix identifies one or more objects to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#prefix S3OutpostsBucket#prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator.property.tags"></a>

```typescript
public readonly tags: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>[]

All of these tags must exist in the object's tag set in order for the rule to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#tags S3OutpostsBucket#tags}

---

### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

const s3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags: s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}.

---

### S3OutpostsBucketLifecycleConfigurationRulesFilterTag <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterTag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

const s3OutpostsBucketLifecycleConfigurationRulesFilterTag: s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}.

---

### S3OutpostsBucketTags <a name="S3OutpostsBucketTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

const s3OutpostsBucketTags: s3OutpostsBucket.S3OutpostsBucketTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#key S3OutpostsBucket#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3outposts_bucket#value S3OutpostsBucket#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3OutpostsBucketLifecycleConfigurationOutputReference <a name="S3OutpostsBucketLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

new s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | S3OutpostsBucketLifecycleConfigurationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>[]

---

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList">S3OutpostsBucketLifecycleConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.rules"></a>

```typescript
public readonly rules: S3OutpostsBucketLifecycleConfigurationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList">S3OutpostsBucketLifecycleConfigurationRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | S3OutpostsBucketLifecycleConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3OutpostsBucketLifecycleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfiguration">S3OutpostsBucketLifecycleConfiguration</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

new s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation">resetDaysAfterInitiation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysAfterInitiation` <a name="resetDaysAfterInitiation" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation"></a>

```typescript
public resetDaysAfterInitiation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput">daysAfterInitiationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">daysAfterInitiation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysAfterInitiationInput`<sup>Optional</sup> <a name="daysAfterInitiationInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput"></a>

```typescript
public readonly daysAfterInitiationInput: number;
```

- *Type:* number

---

##### `daysAfterInitiation`<sup>Required</sup> <a name="daysAfterInitiation" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```typescript
public readonly daysAfterInitiation: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

new s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>[]

---

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tags"></a>

```typescript
public readonly tags: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>[]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

new s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get"></a>

```typescript
public get(index: number): S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>[]

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

new s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorTags</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

new s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putAndOperator">putAndOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetAndOperator">resetAndOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAndOperator` <a name="putAndOperator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putAndOperator"></a>

```typescript
public putAndOperator(value: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putAndOperator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

---

##### `putTag` <a name="putTag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putTag"></a>

```typescript
public putTag(value: S3OutpostsBucketLifecycleConfigurationRulesFilterTag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

---

##### `resetAndOperator` <a name="resetAndOperator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetAndOperator"></a>

```typescript
public resetAndOperator(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetTag` <a name="resetTag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperator">andOperator</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperatorInput">andOperatorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tagInput">tagInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `andOperator`<sup>Required</sup> <a name="andOperator" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperator"></a>

```typescript
public readonly andOperator: S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperatorOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tag"></a>

```typescript
public readonly tag: S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference</a>

---

##### `andOperatorInput`<sup>Optional</sup> <a name="andOperatorInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.andOperatorInput"></a>

```typescript
public readonly andOperatorInput: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator">S3OutpostsBucketLifecycleConfigurationRulesFilterAndOperator</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

new s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilterTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterTag">S3OutpostsBucketLifecycleConfigurationRulesFilterTag</a>

---


### S3OutpostsBucketLifecycleConfigurationRulesList <a name="S3OutpostsBucketLifecycleConfigurationRulesList" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

new s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.get"></a>

```typescript
public get(index: number): S3OutpostsBucketLifecycleConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3OutpostsBucketLifecycleConfigurationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>[]

---


### S3OutpostsBucketLifecycleConfigurationRulesOutputReference <a name="S3OutpostsBucketLifecycleConfigurationRulesOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

new s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload">putAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload">resetAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays">resetExpirationInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbortIncompleteMultipartUpload` <a name="putAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload"></a>

```typescript
public putAbortIncompleteMultipartUpload(value: S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putFilter"></a>

```typescript
public putFilter(value: S3OutpostsBucketLifecycleConfigurationRulesFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a>

---

##### `resetAbortIncompleteMultipartUpload` <a name="resetAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload"></a>

```typescript
public resetAbortIncompleteMultipartUpload(): void
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetExpirationDate"></a>

```typescript
public resetExpirationDate(): void
```

##### `resetExpirationInDays` <a name="resetExpirationInDays" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays"></a>

```typescript
public resetExpirationInDays(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload">abortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput">abortIncompleteMultipartUploadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDateInput">expirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput">expirationInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays">expirationInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `abortIncompleteMultipartUpload`<sup>Required</sup> <a name="abortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload"></a>

```typescript
public readonly abortIncompleteMultipartUpload: S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filter"></a>

```typescript
public readonly filter: S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference">S3OutpostsBucketLifecycleConfigurationRulesFilterOutputReference</a>

---

##### `abortIncompleteMultipartUploadInput`<sup>Optional</sup> <a name="abortIncompleteMultipartUploadInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput"></a>

```typescript
public readonly abortIncompleteMultipartUploadInput: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3OutpostsBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDateInput"></a>

```typescript
public readonly expirationDateInput: string;
```

- *Type:* string

---

##### `expirationInDaysInput`<sup>Optional</sup> <a name="expirationInDaysInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput"></a>

```typescript
public readonly expirationInDaysInput: number;
```

- *Type:* number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | S3OutpostsBucketLifecycleConfigurationRulesFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesFilter">S3OutpostsBucketLifecycleConfigurationRulesFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `expirationInDays`<sup>Required</sup> <a name="expirationInDays" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays"></a>

```typescript
public readonly expirationInDays: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3OutpostsBucketLifecycleConfigurationRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketLifecycleConfigurationRules">S3OutpostsBucketLifecycleConfigurationRules</a>

---


### S3OutpostsBucketTagsList <a name="S3OutpostsBucketTagsList" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

new s3OutpostsBucket.S3OutpostsBucketTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.get"></a>

```typescript
public get(index: number): S3OutpostsBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3OutpostsBucketTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>[]

---


### S3OutpostsBucketTagsOutputReference <a name="S3OutpostsBucketTagsOutputReference" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer"></a>

```typescript
import { s3OutpostsBucket } from '@cdktn/provider-awscc'

new s3OutpostsBucket.S3OutpostsBucketTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3OutpostsBucketTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsBucket.S3OutpostsBucketTags">S3OutpostsBucketTags</a>

---




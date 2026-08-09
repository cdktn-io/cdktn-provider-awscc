# `s3AccessGrantsInstance` Submodule <a name="`s3AccessGrantsInstance` Submodule" id="@cdktn/provider-awscc.s3AccessGrantsInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3AccessGrantsInstance <a name="S3AccessGrantsInstance" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_access_grants_instance awscc_s3_access_grants_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.Initializer"></a>

```typescript
import { s3AccessGrantsInstance } from '@cdktn/provider-awscc'

new s3AccessGrantsInstance.S3AccessGrantsInstance(scope: Construct, id: string, config?: S3AccessGrantsInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig">S3AccessGrantsInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig">S3AccessGrantsInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.resetIdentityCenterArn">resetIdentityCenterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.putTags"></a>

```typescript
public putTags(value: IResolvable | S3AccessGrantsInstanceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags">S3AccessGrantsInstanceTags</a>[]

---

##### `resetIdentityCenterArn` <a name="resetIdentityCenterArn" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.resetIdentityCenterArn"></a>

```typescript
public resetIdentityCenterArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3AccessGrantsInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.isConstruct"></a>

```typescript
import { s3AccessGrantsInstance } from '@cdktn/provider-awscc'

s3AccessGrantsInstance.S3AccessGrantsInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.isTerraformElement"></a>

```typescript
import { s3AccessGrantsInstance } from '@cdktn/provider-awscc'

s3AccessGrantsInstance.S3AccessGrantsInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.isTerraformResource"></a>

```typescript
import { s3AccessGrantsInstance } from '@cdktn/provider-awscc'

s3AccessGrantsInstance.S3AccessGrantsInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.generateConfigForImport"></a>

```typescript
import { s3AccessGrantsInstance } from '@cdktn/provider-awscc'

s3AccessGrantsInstance.S3AccessGrantsInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a S3AccessGrantsInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3AccessGrantsInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3AccessGrantsInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_access_grants_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3AccessGrantsInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.accessGrantsInstanceArn">accessGrantsInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.accessGrantsInstanceId">accessGrantsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList">S3AccessGrantsInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.identityCenterArnInput">identityCenterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags">S3AccessGrantsInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.identityCenterArn">identityCenterArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessGrantsInstanceArn`<sup>Required</sup> <a name="accessGrantsInstanceArn" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.accessGrantsInstanceArn"></a>

```typescript
public readonly accessGrantsInstanceArn: string;
```

- *Type:* string

---

##### `accessGrantsInstanceId`<sup>Required</sup> <a name="accessGrantsInstanceId" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.accessGrantsInstanceId"></a>

```typescript
public readonly accessGrantsInstanceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.tags"></a>

```typescript
public readonly tags: S3AccessGrantsInstanceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList">S3AccessGrantsInstanceTagsList</a>

---

##### `identityCenterArnInput`<sup>Optional</sup> <a name="identityCenterArnInput" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.identityCenterArnInput"></a>

```typescript
public readonly identityCenterArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | S3AccessGrantsInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags">S3AccessGrantsInstanceTags</a>[]

---

##### `identityCenterArn`<sup>Required</sup> <a name="identityCenterArn" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.identityCenterArn"></a>

```typescript
public readonly identityCenterArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3AccessGrantsInstanceConfig <a name="S3AccessGrantsInstanceConfig" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.Initializer"></a>

```typescript
import { s3AccessGrantsInstance } from '@cdktn/provider-awscc'

const s3AccessGrantsInstanceConfig: s3AccessGrantsInstance.S3AccessGrantsInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.identityCenterArn">identityCenterArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the specified AWS Identity Center. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags">S3AccessGrantsInstanceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_access_grants_instance#tags S3AccessGrantsInstance#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `identityCenterArn`<sup>Optional</sup> <a name="identityCenterArn" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.identityCenterArn"></a>

```typescript
public readonly identityCenterArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the specified AWS Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_access_grants_instance#identity_center_arn S3AccessGrantsInstance#identity_center_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | S3AccessGrantsInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags">S3AccessGrantsInstanceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_access_grants_instance#tags S3AccessGrantsInstance#tags}.

---

### S3AccessGrantsInstanceTags <a name="S3AccessGrantsInstanceTags" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags.Initializer"></a>

```typescript
import { s3AccessGrantsInstance } from '@cdktn/provider-awscc'

const s3AccessGrantsInstanceTags: s3AccessGrantsInstance.S3AccessGrantsInstanceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_access_grants_instance#key S3AccessGrantsInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_access_grants_instance#value S3AccessGrantsInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_access_grants_instance#key S3AccessGrantsInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_access_grants_instance#value S3AccessGrantsInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3AccessGrantsInstanceTagsList <a name="S3AccessGrantsInstanceTagsList" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.Initializer"></a>

```typescript
import { s3AccessGrantsInstance } from '@cdktn/provider-awscc'

new s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.get"></a>

```typescript
public get(index: number): S3AccessGrantsInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags">S3AccessGrantsInstanceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3AccessGrantsInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags">S3AccessGrantsInstanceTags</a>[]

---


### S3AccessGrantsInstanceTagsOutputReference <a name="S3AccessGrantsInstanceTagsOutputReference" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.Initializer"></a>

```typescript
import { s3AccessGrantsInstance } from '@cdktn/provider-awscc'

new s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags">S3AccessGrantsInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3AccessGrantsInstanceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrantsInstance.S3AccessGrantsInstanceTags">S3AccessGrantsInstanceTags</a>

---




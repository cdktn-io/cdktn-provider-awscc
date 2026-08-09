# `ssmcontactsRotation` Submodule <a name="`ssmcontactsRotation` Submodule" id="@cdktn/provider-awscc.ssmcontactsRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsRotation <a name="SsmcontactsRotation" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation awscc_ssmcontacts_rotation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

new ssmcontactsRotation.SsmcontactsRotation(scope: Construct, id: string, config: SsmcontactsRotationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig">SsmcontactsRotationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig">SsmcontactsRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.putRecurrence">putRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecurrence` <a name="putRecurrence" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.putRecurrence"></a>

```typescript
public putRecurrence(value: SsmcontactsRotationRecurrence): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.putTags"></a>

```typescript
public putTags(value: IResolvable | SsmcontactsRotationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmcontactsRotation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isConstruct"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

ssmcontactsRotation.SsmcontactsRotation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

ssmcontactsRotation.SsmcontactsRotation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

ssmcontactsRotation.SsmcontactsRotation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SsmcontactsRotation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmcontactsRotation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmcontactsRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmcontactsRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.recurrence">recurrence</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference">SsmcontactsRotationRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList">SsmcontactsRotationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.contactIdsInput">contactIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.recurrenceInput">recurrenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneIdInput">timeZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.contactIds">contactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneId">timeZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.recurrence"></a>

```typescript
public readonly recurrence: SsmcontactsRotationRecurrenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference">SsmcontactsRotationRecurrenceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.tags"></a>

```typescript
public readonly tags: SsmcontactsRotationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList">SsmcontactsRotationTagsList</a>

---

##### `contactIdsInput`<sup>Optional</sup> <a name="contactIdsInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.contactIdsInput"></a>

```typescript
public readonly contactIdsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: IResolvable | SsmcontactsRotationRecurrence;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SsmcontactsRotationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>[]

---

##### `timeZoneIdInput`<sup>Optional</sup> <a name="timeZoneIdInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneIdInput"></a>

```typescript
public readonly timeZoneIdInput: string;
```

- *Type:* string

---

##### `contactIds`<sup>Required</sup> <a name="contactIds" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.contactIds"></a>

```typescript
public readonly contactIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timeZoneId`<sup>Required</sup> <a name="timeZoneId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneId"></a>

```typescript
public readonly timeZoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsRotationConfig <a name="SsmcontactsRotationConfig" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

const ssmcontactsRotationConfig: ssmcontactsRotation.SsmcontactsRotationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.contactIds">contactIds</a></code> | <code>string[]</code> | Members of the rotation. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.name">name</a></code> | <code>string</code> | Name of the Rotation. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.recurrence">recurrence</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a></code> | Information about when an on-call rotation is in effect and how long the rotation period lasts. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.startTime">startTime</a></code> | <code>string</code> | Start time of the first shift of Oncall Schedule. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.timeZoneId">timeZoneId</a></code> | <code>string</code> | TimeZone Identifier for the Oncall Schedule. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `contactIds`<sup>Required</sup> <a name="contactIds" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.contactIds"></a>

```typescript
public readonly contactIds: string[];
```

- *Type:* string[]

Members of the rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#contact_ids SsmcontactsRotation#contact_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#name SsmcontactsRotation#name}

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.recurrence"></a>

```typescript
public readonly recurrence: SsmcontactsRotationRecurrence;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>

Information about when an on-call rotation is in effect and how long the rotation period lasts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#recurrence SsmcontactsRotation#recurrence}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Start time of the first shift of Oncall Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}

---

##### `timeZoneId`<sup>Required</sup> <a name="timeZoneId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.timeZoneId"></a>

```typescript
public readonly timeZoneId: string;
```

- *Type:* string

TimeZone Identifier for the Oncall Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#time_zone_id SsmcontactsRotation#time_zone_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SsmcontactsRotationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}.

---

### SsmcontactsRotationRecurrence <a name="SsmcontactsRotationRecurrence" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

const ssmcontactsRotationRecurrence: ssmcontactsRotation.SsmcontactsRotationRecurrence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.dailySettings">dailySettings</a></code> | <code>string[]</code> | Information about on-call rotations that recur daily. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.monthlySettings">monthlySettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]</code> | Information about on-call rotations that recur monthly. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.numberOfOnCalls">numberOfOnCalls</a></code> | <code>number</code> | Number of Oncalls per shift. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.recurrenceMultiplier">recurrenceMultiplier</a></code> | <code>number</code> | The number of days, weeks, or months a single rotation lasts. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.shiftCoverages">shiftCoverages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]</code> | Information about the days of the week included in on-call rotation coverage. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.weeklySettings">weeklySettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]</code> | Information about on-call rotations that recur weekly. |

---

##### `dailySettings`<sup>Optional</sup> <a name="dailySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.dailySettings"></a>

```typescript
public readonly dailySettings: string[];
```

- *Type:* string[]

Information about on-call rotations that recur daily.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#daily_settings SsmcontactsRotation#daily_settings}

---

##### `monthlySettings`<sup>Optional</sup> <a name="monthlySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.monthlySettings"></a>

```typescript
public readonly monthlySettings: IResolvable | SsmcontactsRotationRecurrenceMonthlySettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]

Information about on-call rotations that recur monthly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#monthly_settings SsmcontactsRotation#monthly_settings}

---

##### `numberOfOnCalls`<sup>Optional</sup> <a name="numberOfOnCalls" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.numberOfOnCalls"></a>

```typescript
public readonly numberOfOnCalls: number;
```

- *Type:* number

Number of Oncalls per shift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#number_of_on_calls SsmcontactsRotation#number_of_on_calls}

---

##### `recurrenceMultiplier`<sup>Optional</sup> <a name="recurrenceMultiplier" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.recurrenceMultiplier"></a>

```typescript
public readonly recurrenceMultiplier: number;
```

- *Type:* number

The number of days, weeks, or months a single rotation lasts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#recurrence_multiplier SsmcontactsRotation#recurrence_multiplier}

---

##### `shiftCoverages`<sup>Optional</sup> <a name="shiftCoverages" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.shiftCoverages"></a>

```typescript
public readonly shiftCoverages: IResolvable | SsmcontactsRotationRecurrenceShiftCoverages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]

Information about the days of the week included in on-call rotation coverage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#shift_coverages SsmcontactsRotation#shift_coverages}

---

##### `weeklySettings`<sup>Optional</sup> <a name="weeklySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.weeklySettings"></a>

```typescript
public readonly weeklySettings: IResolvable | SsmcontactsRotationRecurrenceWeeklySettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]

Information about on-call rotations that recur weekly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#weekly_settings SsmcontactsRotation#weekly_settings}

---

### SsmcontactsRotationRecurrenceMonthlySettings <a name="SsmcontactsRotationRecurrenceMonthlySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

const ssmcontactsRotationRecurrenceMonthlySettings: ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.dayOfMonth">dayOfMonth</a></code> | <code>number</code> | The day of the month when monthly recurring on-call rotations begin. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.handOffTime">handOffTime</a></code> | <code>string</code> | Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM. |

---

##### `dayOfMonth`<sup>Optional</sup> <a name="dayOfMonth" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: number;
```

- *Type:* number

The day of the month when monthly recurring on-call rotations begin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#day_of_month SsmcontactsRotation#day_of_month}

---

##### `handOffTime`<sup>Optional</sup> <a name="handOffTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.handOffTime"></a>

```typescript
public readonly handOffTime: string;
```

- *Type:* string

Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}

---

### SsmcontactsRotationRecurrenceShiftCoverages <a name="SsmcontactsRotationRecurrenceShiftCoverages" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

const ssmcontactsRotationRecurrenceShiftCoverages: ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.coverageTimes">coverageTimes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]</code> | Information about when an on-call shift begins and ends. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | The day of the week when weekly recurring on-call shift rotations begin. |

---

##### `coverageTimes`<sup>Optional</sup> <a name="coverageTimes" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.coverageTimes"></a>

```typescript
public readonly coverageTimes: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]

Information about when an on-call shift begins and ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#coverage_times SsmcontactsRotation#coverage_times}

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

The day of the week when weekly recurring on-call shift rotations begin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#day_of_week SsmcontactsRotation#day_of_week}

---

### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

const ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimes: ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.endTime">endTime</a></code> | <code>string</code> | Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.startTime">startTime</a></code> | <code>string</code> | Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#end_time SsmcontactsRotation#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}

---

### SsmcontactsRotationRecurrenceWeeklySettings <a name="SsmcontactsRotationRecurrenceWeeklySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

const ssmcontactsRotationRecurrenceWeeklySettings: ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | The day of the week when weekly recurring on-call shift rotations begin. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.handOffTime">handOffTime</a></code> | <code>string</code> | Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM. |

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

The day of the week when weekly recurring on-call shift rotations begin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#day_of_week SsmcontactsRotation#day_of_week}

---

##### `handOffTime`<sup>Optional</sup> <a name="handOffTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.handOffTime"></a>

```typescript
public readonly handOffTime: string;
```

- *Type:* string

Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}

---

### SsmcontactsRotationTags <a name="SsmcontactsRotationTags" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

const ssmcontactsRotationTags: ssmcontactsRotation.SsmcontactsRotationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#key SsmcontactsRotation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_rotation#value SsmcontactsRotation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsRotationRecurrenceMonthlySettingsList <a name="SsmcontactsRotationRecurrenceMonthlySettingsList" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceMonthlySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceMonthlySettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]

---


### SsmcontactsRotationRecurrenceMonthlySettingsOutputReference <a name="SsmcontactsRotationRecurrenceMonthlySettingsOutputReference" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetDayOfMonth">resetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetHandOffTime">resetHandOffTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOfMonth` <a name="resetDayOfMonth" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetDayOfMonth"></a>

```typescript
public resetDayOfMonth(): void
```

##### `resetHandOffTime` <a name="resetHandOffTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetHandOffTime"></a>

```typescript
public resetHandOffTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonthInput">dayOfMonthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTimeInput">handOffTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth">dayOfMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime">handOffTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfMonthInput`<sup>Optional</sup> <a name="dayOfMonthInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonthInput"></a>

```typescript
public readonly dayOfMonthInput: number;
```

- *Type:* number

---

##### `handOffTimeInput`<sup>Optional</sup> <a name="handOffTimeInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTimeInput"></a>

```typescript
public readonly handOffTimeInput: string;
```

- *Type:* string

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: number;
```

- *Type:* number

---

##### `handOffTime`<sup>Required</sup> <a name="handOffTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime"></a>

```typescript
public readonly handOffTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceMonthlySettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>

---


### SsmcontactsRotationRecurrenceOutputReference <a name="SsmcontactsRotationRecurrenceOutputReference" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings">putMonthlySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages">putShiftCoverages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings">putWeeklySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetDailySettings">resetDailySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetMonthlySettings">resetMonthlySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetNumberOfOnCalls">resetNumberOfOnCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetRecurrenceMultiplier">resetRecurrenceMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetShiftCoverages">resetShiftCoverages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetWeeklySettings">resetWeeklySettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMonthlySettings` <a name="putMonthlySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings"></a>

```typescript
public putMonthlySettings(value: IResolvable | SsmcontactsRotationRecurrenceMonthlySettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]

---

##### `putShiftCoverages` <a name="putShiftCoverages" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages"></a>

```typescript
public putShiftCoverages(value: IResolvable | SsmcontactsRotationRecurrenceShiftCoverages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]

---

##### `putWeeklySettings` <a name="putWeeklySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings"></a>

```typescript
public putWeeklySettings(value: IResolvable | SsmcontactsRotationRecurrenceWeeklySettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]

---

##### `resetDailySettings` <a name="resetDailySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetDailySettings"></a>

```typescript
public resetDailySettings(): void
```

##### `resetMonthlySettings` <a name="resetMonthlySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetMonthlySettings"></a>

```typescript
public resetMonthlySettings(): void
```

##### `resetNumberOfOnCalls` <a name="resetNumberOfOnCalls" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetNumberOfOnCalls"></a>

```typescript
public resetNumberOfOnCalls(): void
```

##### `resetRecurrenceMultiplier` <a name="resetRecurrenceMultiplier" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetRecurrenceMultiplier"></a>

```typescript
public resetRecurrenceMultiplier(): void
```

##### `resetShiftCoverages` <a name="resetShiftCoverages" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetShiftCoverages"></a>

```typescript
public resetShiftCoverages(): void
```

##### `resetWeeklySettings` <a name="resetWeeklySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetWeeklySettings"></a>

```typescript
public resetWeeklySettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettings">monthlySettings</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList">SsmcontactsRotationRecurrenceMonthlySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages">shiftCoverages</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList">SsmcontactsRotationRecurrenceShiftCoveragesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettings">weeklySettings</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList">SsmcontactsRotationRecurrenceWeeklySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettingsInput">dailySettingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettingsInput">monthlySettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCallsInput">numberOfOnCallsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplierInput">recurrenceMultiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoveragesInput">shiftCoveragesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettingsInput">weeklySettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettings">dailySettings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls">numberOfOnCalls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier">recurrenceMultiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `monthlySettings`<sup>Required</sup> <a name="monthlySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettings"></a>

```typescript
public readonly monthlySettings: SsmcontactsRotationRecurrenceMonthlySettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList">SsmcontactsRotationRecurrenceMonthlySettingsList</a>

---

##### `shiftCoverages`<sup>Required</sup> <a name="shiftCoverages" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages"></a>

```typescript
public readonly shiftCoverages: SsmcontactsRotationRecurrenceShiftCoveragesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList">SsmcontactsRotationRecurrenceShiftCoveragesList</a>

---

##### `weeklySettings`<sup>Required</sup> <a name="weeklySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettings"></a>

```typescript
public readonly weeklySettings: SsmcontactsRotationRecurrenceWeeklySettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList">SsmcontactsRotationRecurrenceWeeklySettingsList</a>

---

##### `dailySettingsInput`<sup>Optional</sup> <a name="dailySettingsInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettingsInput"></a>

```typescript
public readonly dailySettingsInput: string[];
```

- *Type:* string[]

---

##### `monthlySettingsInput`<sup>Optional</sup> <a name="monthlySettingsInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettingsInput"></a>

```typescript
public readonly monthlySettingsInput: IResolvable | SsmcontactsRotationRecurrenceMonthlySettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]

---

##### `numberOfOnCallsInput`<sup>Optional</sup> <a name="numberOfOnCallsInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCallsInput"></a>

```typescript
public readonly numberOfOnCallsInput: number;
```

- *Type:* number

---

##### `recurrenceMultiplierInput`<sup>Optional</sup> <a name="recurrenceMultiplierInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplierInput"></a>

```typescript
public readonly recurrenceMultiplierInput: number;
```

- *Type:* number

---

##### `shiftCoveragesInput`<sup>Optional</sup> <a name="shiftCoveragesInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoveragesInput"></a>

```typescript
public readonly shiftCoveragesInput: IResolvable | SsmcontactsRotationRecurrenceShiftCoverages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]

---

##### `weeklySettingsInput`<sup>Optional</sup> <a name="weeklySettingsInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettingsInput"></a>

```typescript
public readonly weeklySettingsInput: IResolvable | SsmcontactsRotationRecurrenceWeeklySettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]

---

##### `dailySettings`<sup>Required</sup> <a name="dailySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettings"></a>

```typescript
public readonly dailySettings: string[];
```

- *Type:* string[]

---

##### `numberOfOnCalls`<sup>Required</sup> <a name="numberOfOnCalls" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls"></a>

```typescript
public readonly numberOfOnCalls: number;
```

- *Type:* number

---

##### `recurrenceMultiplier`<sup>Required</sup> <a name="recurrenceMultiplier" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier"></a>

```typescript
public readonly recurrenceMultiplier: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrence;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>

---


### SsmcontactsRotationRecurrenceShiftCoveragesList <a name="SsmcontactsRotationRecurrenceShiftCoveragesList" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceShiftCoverages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]

---


### SsmcontactsRotationRecurrenceShiftCoveragesOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesOutputReference" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes">putCoverageTimes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetCoverageTimes">resetCoverageTimes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoverageTimes` <a name="putCoverageTimes" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes"></a>

```typescript
public putCoverageTimes(value: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]

---

##### `resetCoverageTimes` <a name="resetCoverageTimes" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetCoverageTimes"></a>

```typescript
public resetCoverageTimes(): void
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetDayOfWeek"></a>

```typescript
public resetDayOfWeek(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes">coverageTimes</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimesInput">coverageTimesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coverageTimes`<sup>Required</sup> <a name="coverageTimes" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes"></a>

```typescript
public readonly coverageTimes: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a>

---

##### `coverageTimesInput`<sup>Optional</sup> <a name="coverageTimesInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimesInput"></a>

```typescript
public readonly coverageTimesInput: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceShiftCoverages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>

---


### SsmcontactsRotationRecurrenceWeeklySettingsList <a name="SsmcontactsRotationRecurrenceWeeklySettingsList" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceWeeklySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceWeeklySettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]

---


### SsmcontactsRotationRecurrenceWeeklySettingsOutputReference <a name="SsmcontactsRotationRecurrenceWeeklySettingsOutputReference" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetHandOffTime">resetHandOffTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetDayOfWeek"></a>

```typescript
public resetDayOfWeek(): void
```

##### `resetHandOffTime` <a name="resetHandOffTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetHandOffTime"></a>

```typescript
public resetHandOffTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTimeInput">handOffTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime">handOffTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `handOffTimeInput`<sup>Optional</sup> <a name="handOffTimeInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTimeInput"></a>

```typescript
public readonly handOffTimeInput: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `handOffTime`<sup>Required</sup> <a name="handOffTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime"></a>

```typescript
public readonly handOffTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceWeeklySettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>

---


### SsmcontactsRotationTagsList <a name="SsmcontactsRotationTagsList" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

new ssmcontactsRotation.SsmcontactsRotationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>[]

---


### SsmcontactsRotationTagsOutputReference <a name="SsmcontactsRotationTagsOutputReference" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktn/provider-awscc'

new ssmcontactsRotation.SsmcontactsRotationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>

---




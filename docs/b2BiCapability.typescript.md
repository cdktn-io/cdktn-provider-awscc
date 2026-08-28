# `b2BiCapability` Submodule <a name="`b2BiCapability` Submodule" id="@cdktn/provider-awscc.b2BiCapability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### B2BiCapability <a name="B2BiCapability" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability awscc_b2bi_capability}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

new b2BiCapability.B2BiCapability(scope: Construct, id: string, config: B2BiCapabilityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig">B2BiCapabilityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig">B2BiCapabilityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putInstructionsDocuments">putInstructionsDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.resetInstructionsDocuments">resetInstructionsDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putConfiguration"></a>

```typescript
public putConfiguration(value: B2BiCapabilityConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a>

---

##### `putInstructionsDocuments` <a name="putInstructionsDocuments" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putInstructionsDocuments"></a>

```typescript
public putInstructionsDocuments(value: IResolvable | B2BiCapabilityInstructionsDocuments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putInstructionsDocuments.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putTags"></a>

```typescript
public putTags(value: IResolvable | B2BiCapabilityTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>[]

---

##### `resetInstructionsDocuments` <a name="resetInstructionsDocuments" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.resetInstructionsDocuments"></a>

```typescript
public resetInstructionsDocuments(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a B2BiCapability resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isConstruct"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

b2BiCapability.B2BiCapability.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isTerraformElement"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

b2BiCapability.B2BiCapability.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isTerraformResource"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

b2BiCapability.B2BiCapability.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.generateConfigForImport"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

b2BiCapability.B2BiCapability.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a B2BiCapability resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the B2BiCapability to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing B2BiCapability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the B2BiCapability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.capabilityArn">capabilityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.capabilityId">capabilityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference">B2BiCapabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.instructionsDocuments">instructionsDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList">B2BiCapabilityInstructionsDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList">B2BiCapabilityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.instructionsDocumentsInput">instructionsDocumentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `capabilityArn`<sup>Required</sup> <a name="capabilityArn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.capabilityArn"></a>

```typescript
public readonly capabilityArn: string;
```

- *Type:* string

---

##### `capabilityId`<sup>Required</sup> <a name="capabilityId" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.capabilityId"></a>

```typescript
public readonly capabilityId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.configuration"></a>

```typescript
public readonly configuration: B2BiCapabilityConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference">B2BiCapabilityConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instructionsDocuments`<sup>Required</sup> <a name="instructionsDocuments" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.instructionsDocuments"></a>

```typescript
public readonly instructionsDocuments: B2BiCapabilityInstructionsDocumentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList">B2BiCapabilityInstructionsDocumentsList</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.tags"></a>

```typescript
public readonly tags: B2BiCapabilityTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList">B2BiCapabilityTagsList</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | B2BiCapabilityConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a>

---

##### `instructionsDocumentsInput`<sup>Optional</sup> <a name="instructionsDocumentsInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.instructionsDocumentsInput"></a>

```typescript
public readonly instructionsDocumentsInput: IResolvable | B2BiCapabilityInstructionsDocuments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | B2BiCapabilityTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### B2BiCapabilityConfig <a name="B2BiCapabilityConfig" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

const b2BiCapabilityConfig: b2BiCapability.B2BiCapabilityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#configuration B2BiCapability#configuration}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#name B2BiCapability#name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#type B2BiCapability#type}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.instructionsDocuments">instructionsDocuments</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#instructions_documents B2BiCapability#instructions_documents}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#tags B2BiCapability#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.configuration"></a>

```typescript
public readonly configuration: B2BiCapabilityConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#configuration B2BiCapability#configuration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#name B2BiCapability#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#type B2BiCapability#type}.

---

##### `instructionsDocuments`<sup>Optional</sup> <a name="instructionsDocuments" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.instructionsDocuments"></a>

```typescript
public readonly instructionsDocuments: IResolvable | B2BiCapabilityInstructionsDocuments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#instructions_documents B2BiCapability#instructions_documents}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | B2BiCapabilityTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#tags B2BiCapability#tags}.

---

### B2BiCapabilityConfiguration <a name="B2BiCapabilityConfiguration" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

const b2BiCapabilityConfiguration: b2BiCapability.B2BiCapabilityConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration.property.edi">edi</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#edi B2BiCapability#edi}. |

---

##### `edi`<sup>Optional</sup> <a name="edi" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration.property.edi"></a>

```typescript
public readonly edi: B2BiCapabilityConfigurationEdi;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#edi B2BiCapability#edi}.

---

### B2BiCapabilityConfigurationEdi <a name="B2BiCapabilityConfigurationEdi" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

const b2BiCapabilityConfigurationEdi: b2BiCapability.B2BiCapabilityConfigurationEdi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.capabilityDirection">capabilityDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#capability_direction B2BiCapability#capability_direction}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.inputLocation">inputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#input_location B2BiCapability#input_location}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.outputLocation">outputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#output_location B2BiCapability#output_location}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.transformerId">transformerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#transformer_id B2BiCapability#transformer_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.type">type</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#type B2BiCapability#type}. |

---

##### `capabilityDirection`<sup>Optional</sup> <a name="capabilityDirection" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.capabilityDirection"></a>

```typescript
public readonly capabilityDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#capability_direction B2BiCapability#capability_direction}.

---

##### `inputLocation`<sup>Optional</sup> <a name="inputLocation" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.inputLocation"></a>

```typescript
public readonly inputLocation: B2BiCapabilityConfigurationEdiInputLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#input_location B2BiCapability#input_location}.

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.outputLocation"></a>

```typescript
public readonly outputLocation: B2BiCapabilityConfigurationEdiOutputLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#output_location B2BiCapability#output_location}.

---

##### `transformerId`<sup>Optional</sup> <a name="transformerId" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.transformerId"></a>

```typescript
public readonly transformerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#transformer_id B2BiCapability#transformer_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.type"></a>

```typescript
public readonly type: B2BiCapabilityConfigurationEdiType;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#type B2BiCapability#type}.

---

### B2BiCapabilityConfigurationEdiInputLocation <a name="B2BiCapabilityConfigurationEdiInputLocation" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

const b2BiCapabilityConfigurationEdiInputLocation: b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#key B2BiCapability#key}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#key B2BiCapability#key}.

---

### B2BiCapabilityConfigurationEdiOutputLocation <a name="B2BiCapabilityConfigurationEdiOutputLocation" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

const b2BiCapabilityConfigurationEdiOutputLocation: b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#key B2BiCapability#key}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#key B2BiCapability#key}.

---

### B2BiCapabilityConfigurationEdiType <a name="B2BiCapabilityConfigurationEdiType" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

const b2BiCapabilityConfigurationEdiType: b2BiCapability.B2BiCapabilityConfigurationEdiType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType.property.x12Details">x12Details</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#x12_details B2BiCapability#x12_details}. |

---

##### `x12Details`<sup>Optional</sup> <a name="x12Details" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType.property.x12Details"></a>

```typescript
public readonly x12Details: B2BiCapabilityConfigurationEdiTypeX12Details;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#x12_details B2BiCapability#x12_details}.

---

### B2BiCapabilityConfigurationEdiTypeX12Details <a name="B2BiCapabilityConfigurationEdiTypeX12Details" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

const b2BiCapabilityConfigurationEdiTypeX12Details: b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details.property.transactionSet">transactionSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#transaction_set B2BiCapability#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#version B2BiCapability#version}. |

---

##### `transactionSet`<sup>Optional</sup> <a name="transactionSet" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details.property.transactionSet"></a>

```typescript
public readonly transactionSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#transaction_set B2BiCapability#transaction_set}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#version B2BiCapability#version}.

---

### B2BiCapabilityInstructionsDocuments <a name="B2BiCapabilityInstructionsDocuments" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

const b2BiCapabilityInstructionsDocuments: b2BiCapability.B2BiCapabilityInstructionsDocuments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#key B2BiCapability#key}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#key B2BiCapability#key}.

---

### B2BiCapabilityTags <a name="B2BiCapabilityTags" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

const b2BiCapabilityTags: b2BiCapability.B2BiCapabilityTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#key B2BiCapability#key}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#value B2BiCapability#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#key B2BiCapability#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_capability#value B2BiCapability#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### B2BiCapabilityConfigurationEdiInputLocationOutputReference <a name="B2BiCapabilityConfigurationEdiInputLocationOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

new b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiCapabilityConfigurationEdiInputLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a>

---


### B2BiCapabilityConfigurationEdiOutputLocationOutputReference <a name="B2BiCapabilityConfigurationEdiOutputLocationOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

new b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiCapabilityConfigurationEdiOutputLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a>

---


### B2BiCapabilityConfigurationEdiOutputReference <a name="B2BiCapabilityConfigurationEdiOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

new b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putInputLocation">putInputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putOutputLocation">putOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putType">putType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetCapabilityDirection">resetCapabilityDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetInputLocation">resetInputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetOutputLocation">resetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetTransformerId">resetTransformerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputLocation` <a name="putInputLocation" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putInputLocation"></a>

```typescript
public putInputLocation(value: B2BiCapabilityConfigurationEdiInputLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putInputLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a>

---

##### `putOutputLocation` <a name="putOutputLocation" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putOutputLocation"></a>

```typescript
public putOutputLocation(value: B2BiCapabilityConfigurationEdiOutputLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putOutputLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a>

---

##### `putType` <a name="putType" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putType"></a>

```typescript
public putType(value: B2BiCapabilityConfigurationEdiType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a>

---

##### `resetCapabilityDirection` <a name="resetCapabilityDirection" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetCapabilityDirection"></a>

```typescript
public resetCapabilityDirection(): void
```

##### `resetInputLocation` <a name="resetInputLocation" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetInputLocation"></a>

```typescript
public resetInputLocation(): void
```

##### `resetOutputLocation` <a name="resetOutputLocation" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetOutputLocation"></a>

```typescript
public resetOutputLocation(): void
```

##### `resetTransformerId` <a name="resetTransformerId" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetTransformerId"></a>

```typescript
public resetTransformerId(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.inputLocation">inputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference">B2BiCapabilityConfigurationEdiInputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.outputLocation">outputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference">B2BiCapabilityConfigurationEdiOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.type">type</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference">B2BiCapabilityConfigurationEdiTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.capabilityDirectionInput">capabilityDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.inputLocationInput">inputLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.outputLocationInput">outputLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.transformerIdInput">transformerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.typeInput">typeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.capabilityDirection">capabilityDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.transformerId">transformerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputLocation`<sup>Required</sup> <a name="inputLocation" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.inputLocation"></a>

```typescript
public readonly inputLocation: B2BiCapabilityConfigurationEdiInputLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference">B2BiCapabilityConfigurationEdiInputLocationOutputReference</a>

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.outputLocation"></a>

```typescript
public readonly outputLocation: B2BiCapabilityConfigurationEdiOutputLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference">B2BiCapabilityConfigurationEdiOutputLocationOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.type"></a>

```typescript
public readonly type: B2BiCapabilityConfigurationEdiTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference">B2BiCapabilityConfigurationEdiTypeOutputReference</a>

---

##### `capabilityDirectionInput`<sup>Optional</sup> <a name="capabilityDirectionInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.capabilityDirectionInput"></a>

```typescript
public readonly capabilityDirectionInput: string;
```

- *Type:* string

---

##### `inputLocationInput`<sup>Optional</sup> <a name="inputLocationInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.inputLocationInput"></a>

```typescript
public readonly inputLocationInput: IResolvable | B2BiCapabilityConfigurationEdiInputLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a>

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.outputLocationInput"></a>

```typescript
public readonly outputLocationInput: IResolvable | B2BiCapabilityConfigurationEdiOutputLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a>

---

##### `transformerIdInput`<sup>Optional</sup> <a name="transformerIdInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.transformerIdInput"></a>

```typescript
public readonly transformerIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: IResolvable | B2BiCapabilityConfigurationEdiType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a>

---

##### `capabilityDirection`<sup>Required</sup> <a name="capabilityDirection" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.capabilityDirection"></a>

```typescript
public readonly capabilityDirection: string;
```

- *Type:* string

---

##### `transformerId`<sup>Required</sup> <a name="transformerId" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.transformerId"></a>

```typescript
public readonly transformerId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiCapabilityConfigurationEdi;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a>

---


### B2BiCapabilityConfigurationEdiTypeOutputReference <a name="B2BiCapabilityConfigurationEdiTypeOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

new b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.putX12Details">putX12Details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.resetX12Details">resetX12Details</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putX12Details` <a name="putX12Details" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.putX12Details"></a>

```typescript
public putX12Details(value: B2BiCapabilityConfigurationEdiTypeX12Details): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.putX12Details.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a>

---

##### `resetX12Details` <a name="resetX12Details" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.resetX12Details"></a>

```typescript
public resetX12Details(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.x12Details">x12Details</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference">B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.x12DetailsInput">x12DetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x12Details`<sup>Required</sup> <a name="x12Details" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.x12Details"></a>

```typescript
public readonly x12Details: B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference">B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference</a>

---

##### `x12DetailsInput`<sup>Optional</sup> <a name="x12DetailsInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.x12DetailsInput"></a>

```typescript
public readonly x12DetailsInput: IResolvable | B2BiCapabilityConfigurationEdiTypeX12Details;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiCapabilityConfigurationEdiType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a>

---


### B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference <a name="B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

new b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resetTransactionSet">resetTransactionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransactionSet` <a name="resetTransactionSet" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resetTransactionSet"></a>

```typescript
public resetTransactionSet(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.transactionSetInput">transactionSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.transactionSet">transactionSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transactionSetInput`<sup>Optional</sup> <a name="transactionSetInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.transactionSetInput"></a>

```typescript
public readonly transactionSetInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `transactionSet`<sup>Required</sup> <a name="transactionSet" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.transactionSet"></a>

```typescript
public readonly transactionSet: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiCapabilityConfigurationEdiTypeX12Details;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a>

---


### B2BiCapabilityConfigurationOutputReference <a name="B2BiCapabilityConfigurationOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

new b2BiCapability.B2BiCapabilityConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.putEdi">putEdi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.resetEdi">resetEdi</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEdi` <a name="putEdi" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.putEdi"></a>

```typescript
public putEdi(value: B2BiCapabilityConfigurationEdi): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.putEdi.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a>

---

##### `resetEdi` <a name="resetEdi" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.resetEdi"></a>

```typescript
public resetEdi(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.edi">edi</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference">B2BiCapabilityConfigurationEdiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.ediInput">ediInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `edi`<sup>Required</sup> <a name="edi" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.edi"></a>

```typescript
public readonly edi: B2BiCapabilityConfigurationEdiOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference">B2BiCapabilityConfigurationEdiOutputReference</a>

---

##### `ediInput`<sup>Optional</sup> <a name="ediInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.ediInput"></a>

```typescript
public readonly ediInput: IResolvable | B2BiCapabilityConfigurationEdi;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiCapabilityConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a>

---


### B2BiCapabilityInstructionsDocumentsList <a name="B2BiCapabilityInstructionsDocumentsList" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

new b2BiCapability.B2BiCapabilityInstructionsDocumentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.get"></a>

```typescript
public get(index: number): B2BiCapabilityInstructionsDocumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiCapabilityInstructionsDocuments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>[]

---


### B2BiCapabilityInstructionsDocumentsOutputReference <a name="B2BiCapabilityInstructionsDocumentsOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

new b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiCapabilityInstructionsDocuments;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>

---


### B2BiCapabilityTagsList <a name="B2BiCapabilityTagsList" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

new b2BiCapability.B2BiCapabilityTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.get"></a>

```typescript
public get(index: number): B2BiCapabilityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiCapabilityTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>[]

---


### B2BiCapabilityTagsOutputReference <a name="B2BiCapabilityTagsOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer"></a>

```typescript
import { b2BiCapability } from '@cdktn/provider-awscc'

new b2BiCapability.B2BiCapabilityTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiCapabilityTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>

---




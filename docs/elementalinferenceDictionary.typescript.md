# `elementalinferenceDictionary` Submodule <a name="`elementalinferenceDictionary` Submodule" id="@cdktn/provider-awscc.elementalinferenceDictionary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElementalinferenceDictionary <a name="ElementalinferenceDictionary" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_dictionary awscc_elementalinference_dictionary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer"></a>

```typescript
import { elementalinferenceDictionary } from '@cdktn/provider-awscc'

new elementalinferenceDictionary.ElementalinferenceDictionary(scope: Construct, id: string, config: ElementalinferenceDictionaryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig">ElementalinferenceDictionaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig">ElementalinferenceDictionaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetEntries">resetEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEntries` <a name="resetEntries" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetEntries"></a>

```typescript
public resetEntries(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElementalinferenceDictionary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isConstruct"></a>

```typescript
import { elementalinferenceDictionary } from '@cdktn/provider-awscc'

elementalinferenceDictionary.ElementalinferenceDictionary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformElement"></a>

```typescript
import { elementalinferenceDictionary } from '@cdktn/provider-awscc'

elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformResource"></a>

```typescript
import { elementalinferenceDictionary } from '@cdktn/provider-awscc'

elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport"></a>

```typescript
import { elementalinferenceDictionary } from '@cdktn/provider-awscc'

elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ElementalinferenceDictionary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElementalinferenceDictionary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElementalinferenceDictionary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_dictionary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElementalinferenceDictionary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.dictionaryId">dictionaryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.entriesInput">entriesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.entries">entries</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dictionaryId`<sup>Required</sup> <a name="dictionaryId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.dictionaryId"></a>

```typescript
public readonly dictionaryId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.entriesInput"></a>

```typescript
public readonly entriesInput: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.entries"></a>

```typescript
public readonly entries: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElementalinferenceDictionaryConfig <a name="ElementalinferenceDictionaryConfig" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.Initializer"></a>

```typescript
import { elementalinferenceDictionary } from '@cdktn/provider-awscc'

const elementalinferenceDictionaryConfig: elementalinferenceDictionary.ElementalinferenceDictionaryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.language">language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_dictionary#language ElementalinferenceDictionary#language}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_dictionary#name ElementalinferenceDictionary#name}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.entries">entries</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_dictionary#entries ElementalinferenceDictionary#entries}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_dictionary#tags ElementalinferenceDictionary#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_dictionary#language ElementalinferenceDictionary#language}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_dictionary#name ElementalinferenceDictionary#name}.

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.entries"></a>

```typescript
public readonly entries: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_dictionary#entries ElementalinferenceDictionary#entries}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_dictionary#tags ElementalinferenceDictionary#tags}.

---




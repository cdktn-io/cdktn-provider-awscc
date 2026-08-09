# `elementalinferenceFeed` Submodule <a name="`elementalinferenceFeed` Submodule" id="@cdktn/provider-awscc.elementalinferenceFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElementalinferenceFeed <a name="ElementalinferenceFeed" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed awscc_elementalinference_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

new elementalinferenceFeed.ElementalinferenceFeed(scope: Construct, id: string, config: ElementalinferenceFeedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig">ElementalinferenceFeedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig">ElementalinferenceFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutputs` <a name="putOutputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.putOutputs"></a>

```typescript
public putOutputs(value: IResolvable | ElementalinferenceFeedOutputs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.putOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElementalinferenceFeed resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isConstruct"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

elementalinferenceFeed.ElementalinferenceFeed.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformElement"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

elementalinferenceFeed.ElementalinferenceFeed.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformResource"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

elementalinferenceFeed.ElementalinferenceFeed.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ElementalinferenceFeed resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElementalinferenceFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElementalinferenceFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElementalinferenceFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dataEndpoints">dataEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.feedId">feedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList">ElementalinferenceFeedOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputsInput">outputsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataEndpoints`<sup>Required</sup> <a name="dataEndpoints" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dataEndpoints"></a>

```typescript
public readonly dataEndpoints: string[];
```

- *Type:* string[]

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.feedId"></a>

```typescript
public readonly feedId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputs"></a>

```typescript
public readonly outputs: ElementalinferenceFeedOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList">ElementalinferenceFeedOutputsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputsInput"></a>

```typescript
public readonly outputsInput: IResolvable | ElementalinferenceFeedOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElementalinferenceFeedConfig <a name="ElementalinferenceFeedConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.Initializer"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

const elementalinferenceFeedConfig: elementalinferenceFeed.ElementalinferenceFeedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.outputs">outputs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#outputs ElementalinferenceFeed#outputs}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#tags ElementalinferenceFeed#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.outputs"></a>

```typescript
public readonly outputs: IResolvable | ElementalinferenceFeedOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#outputs ElementalinferenceFeed#outputs}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#tags ElementalinferenceFeed#tags}.

---

### ElementalinferenceFeedOutputs <a name="ElementalinferenceFeedOutputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.Initializer"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

const elementalinferenceFeedOutputs: elementalinferenceFeed.ElementalinferenceFeedOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#output_config ElementalinferenceFeed#output_config}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#status ElementalinferenceFeed#status}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#description ElementalinferenceFeed#description}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}.

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.outputConfig"></a>

```typescript
public readonly outputConfig: ElementalinferenceFeedOutputsOutputConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#output_config ElementalinferenceFeed#output_config}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#status ElementalinferenceFeed#status}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#description ElementalinferenceFeed#description}.

---

### ElementalinferenceFeedOutputsOutputConfig <a name="ElementalinferenceFeedOutputsOutputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.Initializer"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

const elementalinferenceFeedOutputsOutputConfig: elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.clipping">clipping</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#clipping ElementalinferenceFeed#clipping}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.cropping">cropping</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#cropping ElementalinferenceFeed#cropping}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.subtitling">subtitling</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#subtitling ElementalinferenceFeed#subtitling}. |

---

##### `clipping`<sup>Optional</sup> <a name="clipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.clipping"></a>

```typescript
public readonly clipping: ElementalinferenceFeedOutputsOutputConfigClipping;
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#clipping ElementalinferenceFeed#clipping}.

---

##### `cropping`<sup>Optional</sup> <a name="cropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.cropping"></a>

```typescript
public readonly cropping: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#cropping ElementalinferenceFeed#cropping}.

---

##### `subtitling`<sup>Optional</sup> <a name="subtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.subtitling"></a>

```typescript
public readonly subtitling: ElementalinferenceFeedOutputsOutputConfigSubtitling;
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#subtitling ElementalinferenceFeed#subtitling}.

---

### ElementalinferenceFeedOutputsOutputConfigClipping <a name="ElementalinferenceFeedOutputsOutputConfigClipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.Initializer"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

const elementalinferenceFeedOutputsOutputConfigClipping: elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.property.callbackMetadata">callbackMetadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#callback_metadata ElementalinferenceFeed#callback_metadata}. |

---

##### `callbackMetadata`<sup>Optional</sup> <a name="callbackMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.property.callbackMetadata"></a>

```typescript
public readonly callbackMetadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#callback_metadata ElementalinferenceFeed#callback_metadata}.

---

### ElementalinferenceFeedOutputsOutputConfigSubtitling <a name="ElementalinferenceFeedOutputsOutputConfigSubtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.Initializer"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

const elementalinferenceFeedOutputsOutputConfigSubtitling: elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.aspectRatio">aspectRatio</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#aspect_ratio ElementalinferenceFeed#aspect_ratio}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.dictionary">dictionary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#dictionary ElementalinferenceFeed#dictionary}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.language">language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#language ElementalinferenceFeed#language}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.profanityFilter">profanityFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#profanity_filter ElementalinferenceFeed#profanity_filter}. |

---

##### `aspectRatio`<sup>Optional</sup> <a name="aspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.aspectRatio"></a>

```typescript
public readonly aspectRatio: ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio;
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#aspect_ratio ElementalinferenceFeed#aspect_ratio}.

---

##### `dictionary`<sup>Optional</sup> <a name="dictionary" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.dictionary"></a>

```typescript
public readonly dictionary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#dictionary ElementalinferenceFeed#dictionary}.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#language ElementalinferenceFeed#language}.

---

##### `profanityFilter`<sup>Optional</sup> <a name="profanityFilter" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.profanityFilter"></a>

```typescript
public readonly profanityFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#profanity_filter ElementalinferenceFeed#profanity_filter}.

---

### ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio <a name="ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.Initializer"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

const elementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio: elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.height">height</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#height ElementalinferenceFeed#height}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.width">width</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#width ElementalinferenceFeed#width}. |

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#height ElementalinferenceFeed#height}.

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#width ElementalinferenceFeed#width}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElementalinferenceFeedOutputsList <a name="ElementalinferenceFeedOutputsList" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

new elementalinferenceFeed.ElementalinferenceFeedOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.get"></a>

```typescript
public get(index: number): ElementalinferenceFeedOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElementalinferenceFeedOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]

---


### ElementalinferenceFeedOutputsOutputConfigClippingOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigClippingOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

new elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resetCallbackMetadata">resetCallbackMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCallbackMetadata` <a name="resetCallbackMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resetCallbackMetadata"></a>

```typescript
public resetCallbackMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadataInput">callbackMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata">callbackMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `callbackMetadataInput`<sup>Optional</sup> <a name="callbackMetadataInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadataInput"></a>

```typescript
public readonly callbackMetadataInput: string;
```

- *Type:* string

---

##### `callbackMetadata`<sup>Required</sup> <a name="callbackMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata"></a>

```typescript
public readonly callbackMetadata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElementalinferenceFeedOutputsOutputConfigClipping;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

---


### ElementalinferenceFeedOutputsOutputConfigOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

new elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putClipping">putClipping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putSubtitling">putSubtitling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetClipping">resetClipping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetCropping">resetCropping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetSubtitling">resetSubtitling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClipping` <a name="putClipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putClipping"></a>

```typescript
public putClipping(value: ElementalinferenceFeedOutputsOutputConfigClipping): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putClipping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

---

##### `putSubtitling` <a name="putSubtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putSubtitling"></a>

```typescript
public putSubtitling(value: ElementalinferenceFeedOutputsOutputConfigSubtitling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putSubtitling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

---

##### `resetClipping` <a name="resetClipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetClipping"></a>

```typescript
public resetClipping(): void
```

##### `resetCropping` <a name="resetCropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetCropping"></a>

```typescript
public resetCropping(): void
```

##### `resetSubtitling` <a name="resetSubtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetSubtitling"></a>

```typescript
public resetSubtitling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping">clipping</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference">ElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling">subtitling</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clippingInput">clippingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.croppingInput">croppingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitlingInput">subtitlingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping">cropping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clipping`<sup>Required</sup> <a name="clipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping"></a>

```typescript
public readonly clipping: ElementalinferenceFeedOutputsOutputConfigClippingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference">ElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a>

---

##### `subtitling`<sup>Required</sup> <a name="subtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling"></a>

```typescript
public readonly subtitling: ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a>

---

##### `clippingInput`<sup>Optional</sup> <a name="clippingInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clippingInput"></a>

```typescript
public readonly clippingInput: IResolvable | ElementalinferenceFeedOutputsOutputConfigClipping;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

---

##### `croppingInput`<sup>Optional</sup> <a name="croppingInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.croppingInput"></a>

```typescript
public readonly croppingInput: string;
```

- *Type:* string

---

##### `subtitlingInput`<sup>Optional</sup> <a name="subtitlingInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitlingInput"></a>

```typescript
public readonly subtitlingInput: IResolvable | ElementalinferenceFeedOutputsOutputConfigSubtitling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

---

##### `cropping`<sup>Required</sup> <a name="cropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping"></a>

```typescript
public readonly cropping: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElementalinferenceFeedOutputsOutputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

---


### ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

new elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeight` <a name="resetHeight" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

---


### ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

new elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.putAspectRatio">putAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetAspectRatio">resetAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetDictionary">resetDictionary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetProfanityFilter">resetProfanityFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAspectRatio` <a name="putAspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.putAspectRatio"></a>

```typescript
public putAspectRatio(value: ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.putAspectRatio.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

---

##### `resetAspectRatio` <a name="resetAspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetAspectRatio"></a>

```typescript
public resetAspectRatio(): void
```

##### `resetDictionary` <a name="resetDictionary" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetDictionary"></a>

```typescript
public resetDictionary(): void
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

##### `resetProfanityFilter` <a name="resetProfanityFilter" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetProfanityFilter"></a>

```typescript
public resetProfanityFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio">aspectRatio</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatioInput">aspectRatioInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionaryInput">dictionaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilterInput">profanityFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary">dictionary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter">profanityFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aspectRatio`<sup>Required</sup> <a name="aspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio"></a>

```typescript
public readonly aspectRatio: ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a>

---

##### `aspectRatioInput`<sup>Optional</sup> <a name="aspectRatioInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatioInput"></a>

```typescript
public readonly aspectRatioInput: IResolvable | ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

---

##### `dictionaryInput`<sup>Optional</sup> <a name="dictionaryInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionaryInput"></a>

```typescript
public readonly dictionaryInput: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `profanityFilterInput`<sup>Optional</sup> <a name="profanityFilterInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilterInput"></a>

```typescript
public readonly profanityFilterInput: string;
```

- *Type:* string

---

##### `dictionary`<sup>Required</sup> <a name="dictionary" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary"></a>

```typescript
public readonly dictionary: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `profanityFilter`<sup>Required</sup> <a name="profanityFilter" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter"></a>

```typescript
public readonly profanityFilter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElementalinferenceFeedOutputsOutputConfigSubtitling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

---


### ElementalinferenceFeedOutputsOutputReference <a name="ElementalinferenceFeedOutputsOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer"></a>

```typescript
import { elementalinferenceFeed } from '@cdktn/provider-awscc'

new elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.putOutputConfig">putOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.putOutputConfig"></a>

```typescript
public putOutputConfig(value: ElementalinferenceFeedOutputsOutputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference">ElementalinferenceFeedOutputsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfigInput">outputConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfig"></a>

```typescript
public readonly outputConfig: ElementalinferenceFeedOutputsOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference">ElementalinferenceFeedOutputsOutputConfigOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfigInput"></a>

```typescript
public readonly outputConfigInput: IResolvable | ElementalinferenceFeedOutputsOutputConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElementalinferenceFeedOutputs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>

---




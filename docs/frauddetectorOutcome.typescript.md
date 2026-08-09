# `frauddetectorOutcome` Submodule <a name="`frauddetectorOutcome` Submodule" id="@cdktn/provider-awscc.frauddetectorOutcome"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrauddetectorOutcome <a name="FrauddetectorOutcome" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_outcome awscc_frauddetector_outcome}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.Initializer"></a>

```typescript
import { frauddetectorOutcome } from '@cdktn/provider-awscc'

new frauddetectorOutcome.FrauddetectorOutcome(scope: Construct, id: string, config: FrauddetectorOutcomeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig">FrauddetectorOutcomeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig">FrauddetectorOutcomeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.putTags"></a>

```typescript
public putTags(value: IResolvable | FrauddetectorOutcomeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags">FrauddetectorOutcomeTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FrauddetectorOutcome resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.isConstruct"></a>

```typescript
import { frauddetectorOutcome } from '@cdktn/provider-awscc'

frauddetectorOutcome.FrauddetectorOutcome.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.isTerraformElement"></a>

```typescript
import { frauddetectorOutcome } from '@cdktn/provider-awscc'

frauddetectorOutcome.FrauddetectorOutcome.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.isTerraformResource"></a>

```typescript
import { frauddetectorOutcome } from '@cdktn/provider-awscc'

frauddetectorOutcome.FrauddetectorOutcome.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.generateConfigForImport"></a>

```typescript
import { frauddetectorOutcome } from '@cdktn/provider-awscc'

frauddetectorOutcome.FrauddetectorOutcome.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FrauddetectorOutcome resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FrauddetectorOutcome to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FrauddetectorOutcome that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_outcome#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FrauddetectorOutcome to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList">FrauddetectorOutcomeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags">FrauddetectorOutcomeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.tags"></a>

```typescript
public readonly tags: FrauddetectorOutcomeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList">FrauddetectorOutcomeTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FrauddetectorOutcomeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags">FrauddetectorOutcomeTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcome.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FrauddetectorOutcomeConfig <a name="FrauddetectorOutcomeConfig" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.Initializer"></a>

```typescript
import { frauddetectorOutcome } from '@cdktn/provider-awscc'

const frauddetectorOutcomeConfig: frauddetectorOutcome.FrauddetectorOutcomeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.name">name</a></code> | <code>string</code> | The name of the outcome. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.description">description</a></code> | <code>string</code> | The outcome description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags">FrauddetectorOutcomeTags</a>[]</code> | Tags associated with this outcome. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the outcome.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_outcome#name FrauddetectorOutcome#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The outcome description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_outcome#description FrauddetectorOutcome#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | FrauddetectorOutcomeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags">FrauddetectorOutcomeTags</a>[]

Tags associated with this outcome.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_outcome#tags FrauddetectorOutcome#tags}

---

### FrauddetectorOutcomeTags <a name="FrauddetectorOutcomeTags" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags.Initializer"></a>

```typescript
import { frauddetectorOutcome } from '@cdktn/provider-awscc'

const frauddetectorOutcomeTags: frauddetectorOutcome.FrauddetectorOutcomeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_outcome#key FrauddetectorOutcome#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_outcome#value FrauddetectorOutcome#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_outcome#key FrauddetectorOutcome#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_outcome#value FrauddetectorOutcome#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrauddetectorOutcomeTagsList <a name="FrauddetectorOutcomeTagsList" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.Initializer"></a>

```typescript
import { frauddetectorOutcome } from '@cdktn/provider-awscc'

new frauddetectorOutcome.FrauddetectorOutcomeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.get"></a>

```typescript
public get(index: number): FrauddetectorOutcomeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags">FrauddetectorOutcomeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorOutcomeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags">FrauddetectorOutcomeTags</a>[]

---


### FrauddetectorOutcomeTagsOutputReference <a name="FrauddetectorOutcomeTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.Initializer"></a>

```typescript
import { frauddetectorOutcome } from '@cdktn/provider-awscc'

new frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags">FrauddetectorOutcomeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorOutcomeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorOutcome.FrauddetectorOutcomeTags">FrauddetectorOutcomeTags</a>

---




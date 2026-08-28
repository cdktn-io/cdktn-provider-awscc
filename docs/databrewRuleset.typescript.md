# `databrewRuleset` Submodule <a name="`databrewRuleset` Submodule" id="@cdktn/provider-awscc.databrewRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabrewRuleset <a name="DatabrewRuleset" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset awscc_databrew_ruleset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

new databrewRuleset.DatabrewRuleset(scope: Construct, id: string, config: DatabrewRulesetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig">DatabrewRulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig">DatabrewRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.putRules"></a>

```typescript
public putRules(value: IResolvable | DatabrewRulesetRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules">DatabrewRulesetRules</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.putTags"></a>

```typescript
public putTags(value: IResolvable | DatabrewRulesetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags">DatabrewRulesetTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatabrewRuleset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.isConstruct"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

databrewRuleset.DatabrewRuleset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.isTerraformElement"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

databrewRuleset.DatabrewRuleset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.isTerraformResource"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

databrewRuleset.DatabrewRuleset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.generateConfigForImport"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

databrewRuleset.DatabrewRuleset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatabrewRuleset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabrewRuleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabrewRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatabrewRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList">DatabrewRulesetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList">DatabrewRulesetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules">DatabrewRulesetRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags">DatabrewRulesetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.targetArnInput">targetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.rules"></a>

```typescript
public readonly rules: DatabrewRulesetRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList">DatabrewRulesetRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.tags"></a>

```typescript
public readonly tags: DatabrewRulesetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList">DatabrewRulesetTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | DatabrewRulesetRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules">DatabrewRulesetRules</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DatabrewRulesetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags">DatabrewRulesetTags</a>[]

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.targetArnInput"></a>

```typescript
public readonly targetArnInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRuleset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabrewRulesetConfig <a name="DatabrewRulesetConfig" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

const databrewRulesetConfig: databrewRuleset.DatabrewRulesetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.name">name</a></code> | <code>string</code> | Name of the Ruleset. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules">DatabrewRulesetRules</a>[]</code> | List of the data quality rules in the ruleset. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.targetArn">targetArn</a></code> | <code>string</code> | Arn of the target resource (dataset) to apply the ruleset to. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.description">description</a></code> | <code>string</code> | Description of the Ruleset. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags">DatabrewRulesetTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#tags DatabrewRuleset#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#name DatabrewRuleset#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | DatabrewRulesetRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules">DatabrewRulesetRules</a>[]

List of the data quality rules in the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#rules DatabrewRuleset#rules}

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

Arn of the target resource (dataset) to apply the ruleset to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#target_arn DatabrewRuleset#target_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#description DatabrewRuleset#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DatabrewRulesetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags">DatabrewRulesetTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#tags DatabrewRuleset#tags}.

---

### DatabrewRulesetRules <a name="DatabrewRulesetRules" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

const databrewRulesetRules: databrewRuleset.DatabrewRulesetRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules.property.checkExpression">checkExpression</a></code> | <code>string</code> | Expression with rule conditions. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules.property.name">name</a></code> | <code>string</code> | Name of the rule. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules.property.columnSelectors">columnSelectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors">DatabrewRulesetRulesColumnSelectors</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#column_selectors DatabrewRuleset#column_selectors}. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean value to disable/enable a rule. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules.property.substitutionMap">substitutionMap</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap">DatabrewRulesetRulesSubstitutionMap</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#substitution_map DatabrewRuleset#substitution_map}. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules.property.threshold">threshold</a></code> | <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold">DatabrewRulesetRulesThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#threshold DatabrewRuleset#threshold}. |

---

##### `checkExpression`<sup>Required</sup> <a name="checkExpression" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules.property.checkExpression"></a>

```typescript
public readonly checkExpression: string;
```

- *Type:* string

Expression with rule conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#check_expression DatabrewRuleset#check_expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#name DatabrewRuleset#name}

---

##### `columnSelectors`<sup>Optional</sup> <a name="columnSelectors" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules.property.columnSelectors"></a>

```typescript
public readonly columnSelectors: IResolvable | DatabrewRulesetRulesColumnSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors">DatabrewRulesetRulesColumnSelectors</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#column_selectors DatabrewRuleset#column_selectors}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean value to disable/enable a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#disabled DatabrewRuleset#disabled}

---

##### `substitutionMap`<sup>Optional</sup> <a name="substitutionMap" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules.property.substitutionMap"></a>

```typescript
public readonly substitutionMap: IResolvable | DatabrewRulesetRulesSubstitutionMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap">DatabrewRulesetRulesSubstitutionMap</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#substitution_map DatabrewRuleset#substitution_map}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules.property.threshold"></a>

```typescript
public readonly threshold: DatabrewRulesetRulesThreshold;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold">DatabrewRulesetRulesThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#threshold DatabrewRuleset#threshold}.

---

### DatabrewRulesetRulesColumnSelectors <a name="DatabrewRulesetRulesColumnSelectors" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

const databrewRulesetRulesColumnSelectors: databrewRuleset.DatabrewRulesetRulesColumnSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors.property.name">name</a></code> | <code>string</code> | The name of a column from a dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors.property.regex">regex</a></code> | <code>string</code> | A regular expression for selecting a column from a dataset. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of a column from a dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#name DatabrewRuleset#name}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

A regular expression for selecting a column from a dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#regex DatabrewRuleset#regex}

---

### DatabrewRulesetRulesSubstitutionMap <a name="DatabrewRulesetRulesSubstitutionMap" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

const databrewRulesetRulesSubstitutionMap: databrewRuleset.DatabrewRulesetRulesSubstitutionMap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap.property.value">value</a></code> | <code>string</code> | Value or column name. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap.property.valueReference">valueReference</a></code> | <code>string</code> | Variable name. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value or column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#value DatabrewRuleset#value}

---

##### `valueReference`<sup>Optional</sup> <a name="valueReference" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap.property.valueReference"></a>

```typescript
public readonly valueReference: string;
```

- *Type:* string

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#value_reference DatabrewRuleset#value_reference}

---

### DatabrewRulesetRulesThreshold <a name="DatabrewRulesetRulesThreshold" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

const databrewRulesetRulesThreshold: databrewRuleset.DatabrewRulesetRulesThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold.property.type">type</a></code> | <code>string</code> | Threshold type for a rule. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold.property.unit">unit</a></code> | <code>string</code> | Threshold unit for a rule. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold.property.value">value</a></code> | <code>number</code> | Threshold value for a rule. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Threshold type for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#type DatabrewRuleset#type}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Threshold unit for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#unit DatabrewRuleset#unit}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Threshold value for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#value DatabrewRuleset#value}

---

### DatabrewRulesetTags <a name="DatabrewRulesetTags" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

const databrewRulesetTags: databrewRuleset.DatabrewRulesetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#key DatabrewRuleset#key}. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#value DatabrewRuleset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#key DatabrewRuleset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_ruleset#value DatabrewRuleset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabrewRulesetRulesColumnSelectorsList <a name="DatabrewRulesetRulesColumnSelectorsList" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

new databrewRuleset.DatabrewRulesetRulesColumnSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.get"></a>

```typescript
public get(index: number): DatabrewRulesetRulesColumnSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors">DatabrewRulesetRulesColumnSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewRulesetRulesColumnSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors">DatabrewRulesetRulesColumnSelectors</a>[]

---


### DatabrewRulesetRulesColumnSelectorsOutputReference <a name="DatabrewRulesetRulesColumnSelectorsOutputReference" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

new databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors">DatabrewRulesetRulesColumnSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewRulesetRulesColumnSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors">DatabrewRulesetRulesColumnSelectors</a>

---


### DatabrewRulesetRulesList <a name="DatabrewRulesetRulesList" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

new databrewRuleset.DatabrewRulesetRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.get"></a>

```typescript
public get(index: number): DatabrewRulesetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules">DatabrewRulesetRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewRulesetRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules">DatabrewRulesetRules</a>[]

---


### DatabrewRulesetRulesOutputReference <a name="DatabrewRulesetRulesOutputReference" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

new databrewRuleset.DatabrewRulesetRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.putColumnSelectors">putColumnSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.putSubstitutionMap">putSubstitutionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.putThreshold">putThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.resetColumnSelectors">resetColumnSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.resetSubstitutionMap">resetSubstitutionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnSelectors` <a name="putColumnSelectors" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.putColumnSelectors"></a>

```typescript
public putColumnSelectors(value: IResolvable | DatabrewRulesetRulesColumnSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.putColumnSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors">DatabrewRulesetRulesColumnSelectors</a>[]

---

##### `putSubstitutionMap` <a name="putSubstitutionMap" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.putSubstitutionMap"></a>

```typescript
public putSubstitutionMap(value: IResolvable | DatabrewRulesetRulesSubstitutionMap[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.putSubstitutionMap.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap">DatabrewRulesetRulesSubstitutionMap</a>[]

---

##### `putThreshold` <a name="putThreshold" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.putThreshold"></a>

```typescript
public putThreshold(value: DatabrewRulesetRulesThreshold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold">DatabrewRulesetRulesThreshold</a>

---

##### `resetColumnSelectors` <a name="resetColumnSelectors" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.resetColumnSelectors"></a>

```typescript
public resetColumnSelectors(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetSubstitutionMap` <a name="resetSubstitutionMap" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.resetSubstitutionMap"></a>

```typescript
public resetSubstitutionMap(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.columnSelectors">columnSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList">DatabrewRulesetRulesColumnSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.substitutionMap">substitutionMap</a></code> | <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList">DatabrewRulesetRulesSubstitutionMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference">DatabrewRulesetRulesThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.checkExpressionInput">checkExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.columnSelectorsInput">columnSelectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors">DatabrewRulesetRulesColumnSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.substitutionMapInput">substitutionMapInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap">DatabrewRulesetRulesSubstitutionMap</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold">DatabrewRulesetRulesThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.checkExpression">checkExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules">DatabrewRulesetRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnSelectors`<sup>Required</sup> <a name="columnSelectors" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.columnSelectors"></a>

```typescript
public readonly columnSelectors: DatabrewRulesetRulesColumnSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectorsList">DatabrewRulesetRulesColumnSelectorsList</a>

---

##### `substitutionMap`<sup>Required</sup> <a name="substitutionMap" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.substitutionMap"></a>

```typescript
public readonly substitutionMap: DatabrewRulesetRulesSubstitutionMapList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList">DatabrewRulesetRulesSubstitutionMapList</a>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.threshold"></a>

```typescript
public readonly threshold: DatabrewRulesetRulesThresholdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference">DatabrewRulesetRulesThresholdOutputReference</a>

---

##### `checkExpressionInput`<sup>Optional</sup> <a name="checkExpressionInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.checkExpressionInput"></a>

```typescript
public readonly checkExpressionInput: string;
```

- *Type:* string

---

##### `columnSelectorsInput`<sup>Optional</sup> <a name="columnSelectorsInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.columnSelectorsInput"></a>

```typescript
public readonly columnSelectorsInput: IResolvable | DatabrewRulesetRulesColumnSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesColumnSelectors">DatabrewRulesetRulesColumnSelectors</a>[]

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `substitutionMapInput`<sup>Optional</sup> <a name="substitutionMapInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.substitutionMapInput"></a>

```typescript
public readonly substitutionMapInput: IResolvable | DatabrewRulesetRulesSubstitutionMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap">DatabrewRulesetRulesSubstitutionMap</a>[]

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: IResolvable | DatabrewRulesetRulesThreshold;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold">DatabrewRulesetRulesThreshold</a>

---

##### `checkExpression`<sup>Required</sup> <a name="checkExpression" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.checkExpression"></a>

```typescript
public readonly checkExpression: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewRulesetRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRules">DatabrewRulesetRules</a>

---


### DatabrewRulesetRulesSubstitutionMapList <a name="DatabrewRulesetRulesSubstitutionMapList" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

new databrewRuleset.DatabrewRulesetRulesSubstitutionMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.get"></a>

```typescript
public get(index: number): DatabrewRulesetRulesSubstitutionMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap">DatabrewRulesetRulesSubstitutionMap</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewRulesetRulesSubstitutionMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap">DatabrewRulesetRulesSubstitutionMap</a>[]

---


### DatabrewRulesetRulesSubstitutionMapOutputReference <a name="DatabrewRulesetRulesSubstitutionMapOutputReference" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

new databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.resetValueReference">resetValueReference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueReference` <a name="resetValueReference" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.resetValueReference"></a>

```typescript
public resetValueReference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.valueReferenceInput">valueReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.valueReference">valueReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap">DatabrewRulesetRulesSubstitutionMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valueReferenceInput`<sup>Optional</sup> <a name="valueReferenceInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.valueReferenceInput"></a>

```typescript
public readonly valueReferenceInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueReference`<sup>Required</sup> <a name="valueReference" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.valueReference"></a>

```typescript
public readonly valueReference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewRulesetRulesSubstitutionMap;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesSubstitutionMap">DatabrewRulesetRulesSubstitutionMap</a>

---


### DatabrewRulesetRulesThresholdOutputReference <a name="DatabrewRulesetRulesThresholdOutputReference" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

new databrewRuleset.DatabrewRulesetRulesThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold">DatabrewRulesetRulesThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewRulesetRulesThreshold;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetRulesThreshold">DatabrewRulesetRulesThreshold</a>

---


### DatabrewRulesetTagsList <a name="DatabrewRulesetTagsList" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

new databrewRuleset.DatabrewRulesetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.get"></a>

```typescript
public get(index: number): DatabrewRulesetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags">DatabrewRulesetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewRulesetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags">DatabrewRulesetTags</a>[]

---


### DatabrewRulesetTagsOutputReference <a name="DatabrewRulesetTagsOutputReference" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.Initializer"></a>

```typescript
import { databrewRuleset } from '@cdktn/provider-awscc'

new databrewRuleset.DatabrewRulesetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags">DatabrewRulesetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewRulesetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewRuleset.DatabrewRulesetTags">DatabrewRulesetTags</a>

---




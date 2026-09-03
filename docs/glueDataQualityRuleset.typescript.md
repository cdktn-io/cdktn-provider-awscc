# `glueDataQualityRuleset` Submodule <a name="`glueDataQualityRuleset` Submodule" id="@cdktn/provider-awscc.glueDataQualityRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueDataQualityRuleset <a name="GlueDataQualityRuleset" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_data_quality_ruleset awscc_glue_data_quality_ruleset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer"></a>

```typescript
import { glueDataQualityRuleset } from '@cdktn/provider-awscc'

new glueDataQualityRuleset.GlueDataQualityRuleset(scope: Construct, id: string, config: GlueDataQualityRulesetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig">GlueDataQualityRulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig">GlueDataQualityRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable">putTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetRuleset">resetRuleset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetTargetTable">resetTargetTable</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTargetTable` <a name="putTargetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable"></a>

```typescript
public putTargetTable(value: GlueDataQualityRulesetTargetTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetClientToken"></a>

```typescript
public resetClientToken(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRuleset` <a name="resetRuleset" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetRuleset"></a>

```typescript
public resetRuleset(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetTable` <a name="resetTargetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetTargetTable"></a>

```typescript
public resetTargetTable(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueDataQualityRuleset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct"></a>

```typescript
import { glueDataQualityRuleset } from '@cdktn/provider-awscc'

glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement"></a>

```typescript
import { glueDataQualityRuleset } from '@cdktn/provider-awscc'

glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource"></a>

```typescript
import { glueDataQualityRuleset } from '@cdktn/provider-awscc'

glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport"></a>

```typescript
import { glueDataQualityRuleset } from '@cdktn/provider-awscc'

glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlueDataQualityRuleset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueDataQualityRuleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueDataQualityRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_data_quality_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueDataQualityRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference">GlueDataQualityRulesetTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.clientTokenInput">clientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.rulesetInput">rulesetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTableInput">targetTableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.ruleset">ruleset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTable"></a>

```typescript
public readonly targetTable: GlueDataQualityRulesetTargetTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference">GlueDataQualityRulesetTargetTableOutputReference</a>

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.clientTokenInput"></a>

```typescript
public readonly clientTokenInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rulesetInput`<sup>Optional</sup> <a name="rulesetInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.rulesetInput"></a>

```typescript
public readonly rulesetInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetTableInput`<sup>Optional</sup> <a name="targetTableInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTableInput"></a>

```typescript
public readonly targetTableInput: IResolvable | GlueDataQualityRulesetTargetTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.ruleset"></a>

```typescript
public readonly ruleset: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueDataQualityRulesetConfig <a name="GlueDataQualityRulesetConfig" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.Initializer"></a>

```typescript
import { glueDataQualityRuleset } from '@cdktn/provider-awscc'

const glueDataQualityRulesetConfig: glueDataQualityRuleset.GlueDataQualityRulesetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.name">name</a></code> | <code>string</code> | A unique name for the data quality ruleset. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.clientToken">clientToken</a></code> | <code>string</code> | A unique token for idempotency. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.description">description</a></code> | <code>string</code> | A description of the data quality ruleset. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.ruleset">ruleset</a></code> | <code>string</code> | A Data Quality Definition Language (DQDL) ruleset. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | An object representing an AWS Glue table. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique name for the data quality ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_data_quality_ruleset#name GlueDataQualityRuleset#name}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

A unique token for idempotency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_data_quality_ruleset#client_token GlueDataQualityRuleset#client_token}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the data quality ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_data_quality_ruleset#description GlueDataQualityRuleset#description}

---

##### `ruleset`<sup>Optional</sup> <a name="ruleset" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.ruleset"></a>

```typescript
public readonly ruleset: string;
```

- *Type:* string

A Data Quality Definition Language (DQDL) ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_data_quality_ruleset#ruleset GlueDataQualityRuleset#ruleset}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_data_quality_ruleset#tags GlueDataQualityRuleset#tags}

---

##### `targetTable`<sup>Optional</sup> <a name="targetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.targetTable"></a>

```typescript
public readonly targetTable: GlueDataQualityRulesetTargetTable;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

An object representing an AWS Glue table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_data_quality_ruleset#target_table GlueDataQualityRuleset#target_table}

---

### GlueDataQualityRulesetTargetTable <a name="GlueDataQualityRulesetTargetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.Initializer"></a>

```typescript
import { glueDataQualityRuleset } from '@cdktn/provider-awscc'

const glueDataQualityRulesetTargetTable: glueDataQualityRuleset.GlueDataQualityRulesetTargetTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database where the AWS Glue table exists. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.tableName">tableName</a></code> | <code>string</code> | The name of the AWS Glue table. |

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database where the AWS Glue table exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_data_quality_ruleset#database_name GlueDataQualityRuleset#database_name}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

The name of the AWS Glue table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_data_quality_ruleset#table_name GlueDataQualityRuleset#table_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueDataQualityRulesetTargetTableOutputReference <a name="GlueDataQualityRulesetTargetTableOutputReference" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer"></a>

```typescript
import { glueDataQualityRuleset } from '@cdktn/provider-awscc'

new glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueDataQualityRulesetTargetTable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---




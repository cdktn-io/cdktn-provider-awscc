# `kendraFeaturedResultsSet` Submodule <a name="`kendraFeaturedResultsSet` Submodule" id="@cdktn/provider-awscc.kendraFeaturedResultsSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraFeaturedResultsSet <a name="KendraFeaturedResultsSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set awscc_kendra_featured_results_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer"></a>

```typescript
import { kendraFeaturedResultsSet } from '@cdktn/provider-awscc'

new kendraFeaturedResultsSet.KendraFeaturedResultsSet(scope: Construct, id: string, config: KendraFeaturedResultsSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig">KendraFeaturedResultsSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig">KendraFeaturedResultsSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments">putFeaturedDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetFeaturedDocuments">resetFeaturedDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetQueryTexts">resetQueryTexts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFeaturedDocuments` <a name="putFeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments"></a>

```typescript
public putFeaturedDocuments(value: IResolvable | KendraFeaturedResultsSetFeaturedDocuments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags"></a>

```typescript
public putTags(value: IResolvable | KendraFeaturedResultsSetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFeaturedDocuments` <a name="resetFeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetFeaturedDocuments"></a>

```typescript
public resetFeaturedDocuments(): void
```

##### `resetQueryTexts` <a name="resetQueryTexts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetQueryTexts"></a>

```typescript
public resetQueryTexts(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct"></a>

```typescript
import { kendraFeaturedResultsSet } from '@cdktn/provider-awscc'

kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement"></a>

```typescript
import { kendraFeaturedResultsSet } from '@cdktn/provider-awscc'

kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource"></a>

```typescript
import { kendraFeaturedResultsSet } from '@cdktn/provider-awscc'

kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport"></a>

```typescript
import { kendraFeaturedResultsSet } from '@cdktn/provider-awscc'

kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KendraFeaturedResultsSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KendraFeaturedResultsSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KendraFeaturedResultsSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocuments">featuredDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList">KendraFeaturedResultsSetFeaturedDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetId">featuredResultsSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList">KendraFeaturedResultsSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocumentsInput">featuredDocumentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetNameInput">featuredResultsSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexIdInput">indexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTextsInput">queryTextsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetName">featuredResultsSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTexts">queryTexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `featuredDocuments`<sup>Required</sup> <a name="featuredDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocuments"></a>

```typescript
public readonly featuredDocuments: KendraFeaturedResultsSetFeaturedDocumentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList">KendraFeaturedResultsSetFeaturedDocumentsList</a>

---

##### `featuredResultsSetId`<sup>Required</sup> <a name="featuredResultsSetId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetId"></a>

```typescript
public readonly featuredResultsSetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tags"></a>

```typescript
public readonly tags: KendraFeaturedResultsSetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList">KendraFeaturedResultsSetTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `featuredDocumentsInput`<sup>Optional</sup> <a name="featuredDocumentsInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocumentsInput"></a>

```typescript
public readonly featuredDocumentsInput: IResolvable | KendraFeaturedResultsSetFeaturedDocuments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]

---

##### `featuredResultsSetNameInput`<sup>Optional</sup> <a name="featuredResultsSetNameInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetNameInput"></a>

```typescript
public readonly featuredResultsSetNameInput: string;
```

- *Type:* string

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexIdInput"></a>

```typescript
public readonly indexIdInput: string;
```

- *Type:* string

---

##### `queryTextsInput`<sup>Optional</sup> <a name="queryTextsInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTextsInput"></a>

```typescript
public readonly queryTextsInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | KendraFeaturedResultsSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `featuredResultsSetName`<sup>Required</sup> <a name="featuredResultsSetName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetName"></a>

```typescript
public readonly featuredResultsSetName: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `queryTexts`<sup>Required</sup> <a name="queryTexts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTexts"></a>

```typescript
public readonly queryTexts: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KendraFeaturedResultsSetConfig <a name="KendraFeaturedResultsSetConfig" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.Initializer"></a>

```typescript
import { kendraFeaturedResultsSet } from '@cdktn/provider-awscc'

const kendraFeaturedResultsSetConfig: kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredResultsSetName">featuredResultsSetName</a></code> | <code>string</code> | A name for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.indexId">indexId</a></code> | <code>string</code> | The identifier of the index that you want to use for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.description">description</a></code> | <code>string</code> | A description for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredDocuments">featuredDocuments</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]</code> | A list of document IDs for the documents you want to feature at the top of the search results page. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.queryTexts">queryTexts</a></code> | <code>string[]</code> | A list of queries for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.status">status</a></code> | <code>string</code> | The current status of the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]</code> | A list of key-value pairs that identify or categorize the featured results set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `featuredResultsSetName`<sup>Required</sup> <a name="featuredResultsSetName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredResultsSetName"></a>

```typescript
public readonly featuredResultsSetName: string;
```

- *Type:* string

A name for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#featured_results_set_name KendraFeaturedResultsSet#featured_results_set_name}

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The identifier of the index that you want to use for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#index_id KendraFeaturedResultsSet#index_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#description KendraFeaturedResultsSet#description}

---

##### `featuredDocuments`<sup>Optional</sup> <a name="featuredDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredDocuments"></a>

```typescript
public readonly featuredDocuments: IResolvable | KendraFeaturedResultsSetFeaturedDocuments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]

A list of document IDs for the documents you want to feature at the top of the search results page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#featured_documents KendraFeaturedResultsSet#featured_documents}

---

##### `queryTexts`<sup>Optional</sup> <a name="queryTexts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.queryTexts"></a>

```typescript
public readonly queryTexts: string[];
```

- *Type:* string[]

A list of queries for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#query_texts KendraFeaturedResultsSet#query_texts}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The current status of the set of featured results.

When the value is ACTIVE, featured results are ready for use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#status KendraFeaturedResultsSet#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | KendraFeaturedResultsSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]

A list of key-value pairs that identify or categorize the featured results set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#tags KendraFeaturedResultsSet#tags}

---

### KendraFeaturedResultsSetFeaturedDocuments <a name="KendraFeaturedResultsSetFeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.Initializer"></a>

```typescript
import { kendraFeaturedResultsSet } from '@cdktn/provider-awscc'

const kendraFeaturedResultsSetFeaturedDocuments: kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.property.id">id</a></code> | <code>string</code> | The identifier of the document to feature in the search results. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The identifier of the document to feature in the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#id KendraFeaturedResultsSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### KendraFeaturedResultsSetTags <a name="KendraFeaturedResultsSetTags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.Initializer"></a>

```typescript
import { kendraFeaturedResultsSet } from '@cdktn/provider-awscc'

const kendraFeaturedResultsSetTags: kendraFeaturedResultsSet.KendraFeaturedResultsSetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.key">key</a></code> | <code>string</code> | The key for the tag. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.value">value</a></code> | <code>string</code> | The value associated with the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#key KendraFeaturedResultsSet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value associated with the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#value KendraFeaturedResultsSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KendraFeaturedResultsSetFeaturedDocumentsList <a name="KendraFeaturedResultsSetFeaturedDocumentsList" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer"></a>

```typescript
import { kendraFeaturedResultsSet } from '@cdktn/provider-awscc'

new kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get"></a>

```typescript
public get(index: number): KendraFeaturedResultsSetFeaturedDocumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KendraFeaturedResultsSetFeaturedDocuments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>[]

---


### KendraFeaturedResultsSetFeaturedDocumentsOutputReference <a name="KendraFeaturedResultsSetFeaturedDocumentsOutputReference" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer"></a>

```typescript
import { kendraFeaturedResultsSet } from '@cdktn/provider-awscc'

new kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KendraFeaturedResultsSetFeaturedDocuments;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>

---


### KendraFeaturedResultsSetTagsList <a name="KendraFeaturedResultsSetTagsList" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer"></a>

```typescript
import { kendraFeaturedResultsSet } from '@cdktn/provider-awscc'

new kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get"></a>

```typescript
public get(index: number): KendraFeaturedResultsSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KendraFeaturedResultsSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>[]

---


### KendraFeaturedResultsSetTagsOutputReference <a name="KendraFeaturedResultsSetTagsOutputReference" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer"></a>

```typescript
import { kendraFeaturedResultsSet } from '@cdktn/provider-awscc'

new kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KendraFeaturedResultsSetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>

---




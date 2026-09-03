# `glueClassifier` Submodule <a name="`glueClassifier` Submodule" id="@cdktn/provider-awscc.glueClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueClassifier <a name="GlueClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier awscc_glue_classifier}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

new glueClassifier.GlueClassifier(scope: Construct, id: string, config?: GlueClassifierConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig">GlueClassifierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig">GlueClassifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier">putCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier">putGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putJsonClassifier">putJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier">putXmlClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetCsvClassifier">resetCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetGrokClassifier">resetGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetJsonClassifier">resetJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetXmlClassifier">resetXmlClassifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCsvClassifier` <a name="putCsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier"></a>

```typescript
public putCsvClassifier(value: GlueClassifierCsvClassifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `putGrokClassifier` <a name="putGrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier"></a>

```typescript
public putGrokClassifier(value: GlueClassifierGrokClassifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `putJsonClassifier` <a name="putJsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putJsonClassifier"></a>

```typescript
public putJsonClassifier(value: GlueClassifierJsonClassifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putJsonClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `putXmlClassifier` <a name="putXmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier"></a>

```typescript
public putXmlClassifier(value: GlueClassifierXmlClassifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

##### `resetCsvClassifier` <a name="resetCsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetCsvClassifier"></a>

```typescript
public resetCsvClassifier(): void
```

##### `resetGrokClassifier` <a name="resetGrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetGrokClassifier"></a>

```typescript
public resetGrokClassifier(): void
```

##### `resetJsonClassifier` <a name="resetJsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetJsonClassifier"></a>

```typescript
public resetJsonClassifier(): void
```

##### `resetXmlClassifier` <a name="resetXmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetXmlClassifier"></a>

```typescript
public resetXmlClassifier(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueClassifier resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isConstruct"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

glueClassifier.GlueClassifier.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformElement"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

glueClassifier.GlueClassifier.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformResource"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

glueClassifier.GlueClassifier.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

glueClassifier.GlueClassifier.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlueClassifier resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueClassifier to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueClassifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueClassifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifier">csvClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifier">grokClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifier">jsonClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifier">xmlClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifierInput">csvClassifierInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifierInput">grokClassifierInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifierInput">jsonClassifierInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifierInput">xmlClassifierInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `csvClassifier`<sup>Required</sup> <a name="csvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifier"></a>

```typescript
public readonly csvClassifier: GlueClassifierCsvClassifierOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a>

---

##### `grokClassifier`<sup>Required</sup> <a name="grokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifier"></a>

```typescript
public readonly grokClassifier: GlueClassifierGrokClassifierOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jsonClassifier`<sup>Required</sup> <a name="jsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifier"></a>

```typescript
public readonly jsonClassifier: GlueClassifierJsonClassifierOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `xmlClassifier`<sup>Required</sup> <a name="xmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifier"></a>

```typescript
public readonly xmlClassifier: GlueClassifierXmlClassifierOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a>

---

##### `csvClassifierInput`<sup>Optional</sup> <a name="csvClassifierInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifierInput"></a>

```typescript
public readonly csvClassifierInput: IResolvable | GlueClassifierCsvClassifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `grokClassifierInput`<sup>Optional</sup> <a name="grokClassifierInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifierInput"></a>

```typescript
public readonly grokClassifierInput: IResolvable | GlueClassifierGrokClassifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `jsonClassifierInput`<sup>Optional</sup> <a name="jsonClassifierInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifierInput"></a>

```typescript
public readonly jsonClassifierInput: IResolvable | GlueClassifierJsonClassifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `xmlClassifierInput`<sup>Optional</sup> <a name="xmlClassifierInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifierInput"></a>

```typescript
public readonly xmlClassifierInput: IResolvable | GlueClassifierXmlClassifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueClassifierConfig <a name="GlueClassifierConfig" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

const glueClassifierConfig: glueClassifier.GlueClassifierConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.csvClassifier">csvClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | A classifier for comma-separated values (CSV). |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.grokClassifier">grokClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | A classifier that uses grok. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.jsonClassifier">jsonClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | A classifier for JSON content. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.xmlClassifier">xmlClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | A classifier for XML content. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `csvClassifier`<sup>Optional</sup> <a name="csvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.csvClassifier"></a>

```typescript
public readonly csvClassifier: GlueClassifierCsvClassifier;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

A classifier for comma-separated values (CSV).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#csv_classifier GlueClassifier#csv_classifier}

---

##### `grokClassifier`<sup>Optional</sup> <a name="grokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.grokClassifier"></a>

```typescript
public readonly grokClassifier: GlueClassifierGrokClassifier;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

A classifier that uses grok.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#grok_classifier GlueClassifier#grok_classifier}

---

##### `jsonClassifier`<sup>Optional</sup> <a name="jsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.jsonClassifier"></a>

```typescript
public readonly jsonClassifier: GlueClassifierJsonClassifier;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

A classifier for JSON content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#json_classifier GlueClassifier#json_classifier}

---

##### `xmlClassifier`<sup>Optional</sup> <a name="xmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.xmlClassifier"></a>

```typescript
public readonly xmlClassifier: GlueClassifierXmlClassifier;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

A classifier for XML content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#xml_classifier GlueClassifier#xml_classifier}

---

### GlueClassifierCsvClassifier <a name="GlueClassifierCsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

const glueClassifierCsvClassifier: glueClassifier.GlueClassifierCsvClassifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn">allowSingleColumn</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables the processing of files that contain only one column. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsCustomDatatype">containsCustomDatatype</a></code> | <code>string[]</code> | Indicates whether the CSV file contains custom data types. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader">containsHeader</a></code> | <code>string</code> | Indicates whether the CSV file contains a header. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured">customDatatypeConfigured</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables the configuration of custom data types. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.delimiter">delimiter</a></code> | <code>string</code> | A custom symbol to denote what separates each column entry in the row. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming">disableValueTrimming</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies not to trim values before identifying the type of column values. The default value is true. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.header">header</a></code> | <code>string[]</code> | A list of strings representing column names. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.name">name</a></code> | <code>string</code> | The name of the classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol">quoteSymbol</a></code> | <code>string</code> | A custom symbol to denote what combines content into a single column value. |

---

##### `allowSingleColumn`<sup>Optional</sup> <a name="allowSingleColumn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn"></a>

```typescript
public readonly allowSingleColumn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables the processing of files that contain only one column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#allow_single_column GlueClassifier#allow_single_column}

---

##### `containsCustomDatatype`<sup>Optional</sup> <a name="containsCustomDatatype" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsCustomDatatype"></a>

```typescript
public readonly containsCustomDatatype: string[];
```

- *Type:* string[]

Indicates whether the CSV file contains custom data types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#contains_custom_datatype GlueClassifier#contains_custom_datatype}

---

##### `containsHeader`<sup>Optional</sup> <a name="containsHeader" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader"></a>

```typescript
public readonly containsHeader: string;
```

- *Type:* string

Indicates whether the CSV file contains a header.

A value of UNKNOWN specifies that the classifier will detect whether the CSV file contains headings. A value of PRESENT specifies that the CSV file contains headings. A value of ABSENT specifies that the CSV file does not contain headings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#contains_header GlueClassifier#contains_header}

---

##### `customDatatypeConfigured`<sup>Optional</sup> <a name="customDatatypeConfigured" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured"></a>

```typescript
public readonly customDatatypeConfigured: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables the configuration of custom data types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

A custom symbol to denote what separates each column entry in the row.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#delimiter GlueClassifier#delimiter}

---

##### `disableValueTrimming`<sup>Optional</sup> <a name="disableValueTrimming" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming"></a>

```typescript
public readonly disableValueTrimming: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies not to trim values before identifying the type of column values. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.header"></a>

```typescript
public readonly header: string[];
```

- *Type:* string[]

A list of strings representing column names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#header GlueClassifier#header}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

##### `quoteSymbol`<sup>Optional</sup> <a name="quoteSymbol" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol"></a>

```typescript
public readonly quoteSymbol: string;
```

- *Type:* string

A custom symbol to denote what combines content into a single column value.

It must be different from the column delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#quote_symbol GlueClassifier#quote_symbol}

---

### GlueClassifierGrokClassifier <a name="GlueClassifierGrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

const glueClassifierGrokClassifier: glueClassifier.GlueClassifierGrokClassifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.classification">classification</a></code> | <code>string</code> | An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns">customPatterns</a></code> | <code>string</code> | Optional custom grok patterns defined by this classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern">grokPattern</a></code> | <code>string</code> | The grok pattern applied to a data store by this classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.name">name</a></code> | <code>string</code> | The name of the classifier. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#classification GlueClassifier#classification}

---

##### `customPatterns`<sup>Optional</sup> <a name="customPatterns" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns"></a>

```typescript
public readonly customPatterns: string;
```

- *Type:* string

Optional custom grok patterns defined by this classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#custom_patterns GlueClassifier#custom_patterns}

---

##### `grokPattern`<sup>Optional</sup> <a name="grokPattern" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern"></a>

```typescript
public readonly grokPattern: string;
```

- *Type:* string

The grok pattern applied to a data store by this classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#grok_pattern GlueClassifier#grok_pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

### GlueClassifierJsonClassifier <a name="GlueClassifierJsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

const glueClassifierJsonClassifier: glueClassifier.GlueClassifierJsonClassifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath">jsonPath</a></code> | <code>string</code> | A JsonPath string defining the JSON data for the classifier to classify. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.name">name</a></code> | <code>string</code> | The name of the classifier. |

---

##### `jsonPath`<sup>Optional</sup> <a name="jsonPath" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

A JsonPath string defining the JSON data for the classifier to classify.

AWS Glue supports a subset of JsonPath, as described in Writing JsonPath Custom Classifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#json_path GlueClassifier#json_path}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

### GlueClassifierXmlClassifier <a name="GlueClassifierXmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

const glueClassifierXmlClassifier: glueClassifier.GlueClassifierXmlClassifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.classification">classification</a></code> | <code>string</code> | An identifier of the data format that the classifier matches. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.name">name</a></code> | <code>string</code> | The name of the classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.rowTag">rowTag</a></code> | <code>string</code> | The XML tag designating the element that contains each record in an XML document being parsed. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

An identifier of the data format that the classifier matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#classification GlueClassifier#classification}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

##### `rowTag`<sup>Optional</sup> <a name="rowTag" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.rowTag"></a>

```typescript
public readonly rowTag: string;
```

- *Type:* string

The XML tag designating the element that contains each record in an XML document being parsed.

This can't identify a self-closing element (closed by />). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, <row item_a="A" item_b="B"></row> is okay, but <row item_a="A" item_b="B" /> is not).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#row_tag GlueClassifier#row_tag}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueClassifierCsvClassifierOutputReference <a name="GlueClassifierCsvClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

new glueClassifier.GlueClassifierCsvClassifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn">resetAllowSingleColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsCustomDatatype">resetContainsCustomDatatype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader">resetContainsHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured">resetCustomDatatypeConfigured</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming">resetDisableValueTrimming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol">resetQuoteSymbol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowSingleColumn` <a name="resetAllowSingleColumn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn"></a>

```typescript
public resetAllowSingleColumn(): void
```

##### `resetContainsCustomDatatype` <a name="resetContainsCustomDatatype" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsCustomDatatype"></a>

```typescript
public resetContainsCustomDatatype(): void
```

##### `resetContainsHeader` <a name="resetContainsHeader" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader"></a>

```typescript
public resetContainsHeader(): void
```

##### `resetCustomDatatypeConfigured` <a name="resetCustomDatatypeConfigured" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured"></a>

```typescript
public resetCustomDatatypeConfigured(): void
```

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```

##### `resetDisableValueTrimming` <a name="resetDisableValueTrimming" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming"></a>

```typescript
public resetDisableValueTrimming(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetQuoteSymbol` <a name="resetQuoteSymbol" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol"></a>

```typescript
public resetQuoteSymbol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput">allowSingleColumnInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatypeInput">containsCustomDatatypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput">containsHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput">customDatatypeConfiguredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput">disableValueTrimmingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput">headerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput">quoteSymbolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn">allowSingleColumn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatype">containsCustomDatatype</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader">containsHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured">customDatatypeConfigured</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming">disableValueTrimming</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header">header</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol">quoteSymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowSingleColumnInput`<sup>Optional</sup> <a name="allowSingleColumnInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput"></a>

```typescript
public readonly allowSingleColumnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `containsCustomDatatypeInput`<sup>Optional</sup> <a name="containsCustomDatatypeInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatypeInput"></a>

```typescript
public readonly containsCustomDatatypeInput: string[];
```

- *Type:* string[]

---

##### `containsHeaderInput`<sup>Optional</sup> <a name="containsHeaderInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput"></a>

```typescript
public readonly containsHeaderInput: string;
```

- *Type:* string

---

##### `customDatatypeConfiguredInput`<sup>Optional</sup> <a name="customDatatypeConfiguredInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput"></a>

```typescript
public readonly customDatatypeConfiguredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `disableValueTrimmingInput`<sup>Optional</sup> <a name="disableValueTrimmingInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput"></a>

```typescript
public readonly disableValueTrimmingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `quoteSymbolInput`<sup>Optional</sup> <a name="quoteSymbolInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput"></a>

```typescript
public readonly quoteSymbolInput: string;
```

- *Type:* string

---

##### `allowSingleColumn`<sup>Required</sup> <a name="allowSingleColumn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn"></a>

```typescript
public readonly allowSingleColumn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `containsCustomDatatype`<sup>Required</sup> <a name="containsCustomDatatype" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatype"></a>

```typescript
public readonly containsCustomDatatype: string[];
```

- *Type:* string[]

---

##### `containsHeader`<sup>Required</sup> <a name="containsHeader" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader"></a>

```typescript
public readonly containsHeader: string;
```

- *Type:* string

---

##### `customDatatypeConfigured`<sup>Required</sup> <a name="customDatatypeConfigured" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured"></a>

```typescript
public readonly customDatatypeConfigured: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `disableValueTrimming`<sup>Required</sup> <a name="disableValueTrimming" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming"></a>

```typescript
public readonly disableValueTrimming: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header"></a>

```typescript
public readonly header: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `quoteSymbol`<sup>Required</sup> <a name="quoteSymbol" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol"></a>

```typescript
public readonly quoteSymbol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueClassifierCsvClassifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---


### GlueClassifierGrokClassifierOutputReference <a name="GlueClassifierGrokClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

new glueClassifier.GlueClassifierGrokClassifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetClassification">resetClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns">resetCustomPatterns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetGrokPattern">resetGrokPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassification` <a name="resetClassification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetClassification"></a>

```typescript
public resetClassification(): void
```

##### `resetCustomPatterns` <a name="resetCustomPatterns" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns"></a>

```typescript
public resetCustomPatterns(): void
```

##### `resetGrokPattern` <a name="resetGrokPattern" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetGrokPattern"></a>

```typescript
public resetGrokPattern(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput">classificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput">customPatternsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput">grokPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification">classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns">customPatterns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern">grokPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput"></a>

```typescript
public readonly classificationInput: string;
```

- *Type:* string

---

##### `customPatternsInput`<sup>Optional</sup> <a name="customPatternsInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput"></a>

```typescript
public readonly customPatternsInput: string;
```

- *Type:* string

---

##### `grokPatternInput`<sup>Optional</sup> <a name="grokPatternInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput"></a>

```typescript
public readonly grokPatternInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

---

##### `customPatterns`<sup>Required</sup> <a name="customPatterns" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns"></a>

```typescript
public readonly customPatterns: string;
```

- *Type:* string

---

##### `grokPattern`<sup>Required</sup> <a name="grokPattern" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern"></a>

```typescript
public readonly grokPattern: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueClassifierGrokClassifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---


### GlueClassifierJsonClassifierOutputReference <a name="GlueClassifierJsonClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

new glueClassifier.GlueClassifierJsonClassifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetJsonPath">resetJsonPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJsonPath` <a name="resetJsonPath" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetJsonPath"></a>

```typescript
public resetJsonPath(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput">jsonPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath">jsonPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonPathInput`<sup>Optional</sup> <a name="jsonPathInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput"></a>

```typescript
public readonly jsonPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueClassifierJsonClassifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---


### GlueClassifierXmlClassifierOutputReference <a name="GlueClassifierXmlClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer"></a>

```typescript
import { glueClassifier } from '@cdktn/provider-awscc'

new glueClassifier.GlueClassifierXmlClassifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetClassification">resetClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetRowTag">resetRowTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassification` <a name="resetClassification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetClassification"></a>

```typescript
public resetClassification(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRowTag` <a name="resetRowTag" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetRowTag"></a>

```typescript
public resetRowTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput">classificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput">rowTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification">classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag">rowTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput"></a>

```typescript
public readonly classificationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rowTagInput`<sup>Optional</sup> <a name="rowTagInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput"></a>

```typescript
public readonly rowTagInput: string;
```

- *Type:* string

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rowTag`<sup>Required</sup> <a name="rowTag" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag"></a>

```typescript
public readonly rowTag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueClassifierXmlClassifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---




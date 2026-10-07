# `translateTerminology` Submodule <a name="`translateTerminology` Submodule" id="@cdktn/provider-awscc.translateTerminology"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranslateTerminology <a name="TranslateTerminology" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology awscc_translate_terminology}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer"></a>

```typescript
import { translateTerminology } from '@cdktn/provider-awscc'

new translateTerminology.TranslateTerminology(scope: Construct, id: string, config: TranslateTerminologyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig">TranslateTerminologyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig">TranslateTerminologyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData">putTerminologyData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetMergeStrategy">resetMergeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTerminologyData">resetTerminologyData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putEncryptionKey"></a>

```typescript
public putEncryptionKey(value: TranslateTerminologyEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTags"></a>

```typescript
public putTags(value: IResolvable | TranslateTerminologyTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]

---

##### `putTerminologyData` <a name="putTerminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData"></a>

```typescript
public putTerminologyData(value: TranslateTerminologyTerminologyData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetMergeStrategy` <a name="resetMergeStrategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetMergeStrategy"></a>

```typescript
public resetMergeStrategy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTerminologyData` <a name="resetTerminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTerminologyData"></a>

```typescript
public resetTerminologyData(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TranslateTerminology resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isConstruct"></a>

```typescript
import { translateTerminology } from '@cdktn/provider-awscc'

translateTerminology.TranslateTerminology.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformElement"></a>

```typescript
import { translateTerminology } from '@cdktn/provider-awscc'

translateTerminology.TranslateTerminology.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformResource"></a>

```typescript
import { translateTerminology } from '@cdktn/provider-awscc'

translateTerminology.TranslateTerminology.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport"></a>

```typescript
import { translateTerminology } from '@cdktn/provider-awscc'

translateTerminology.TranslateTerminology.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TranslateTerminology resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TranslateTerminology to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TranslateTerminology that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TranslateTerminology to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.directionality">directionality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference">TranslateTerminologyEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sizeBytes">sizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sourceLanguageCode">sourceLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList">TranslateTerminologyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.targetLanguageCodes">targetLanguageCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.termCount">termCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyData">terminologyData</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference">TranslateTerminologyTerminologyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategyInput">mergeStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyDataInput">terminologyDataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategy">mergeStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `directionality`<sup>Required</sup> <a name="directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.directionality"></a>

```typescript
public readonly directionality: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: TranslateTerminologyEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference">TranslateTerminologyEncryptionKeyOutputReference</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `sizeBytes`<sup>Required</sup> <a name="sizeBytes" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sizeBytes"></a>

```typescript
public readonly sizeBytes: number;
```

- *Type:* number

---

##### `sourceLanguageCode`<sup>Required</sup> <a name="sourceLanguageCode" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sourceLanguageCode"></a>

```typescript
public readonly sourceLanguageCode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tags"></a>

```typescript
public readonly tags: TranslateTerminologyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList">TranslateTerminologyTagsList</a>

---

##### `targetLanguageCodes`<sup>Required</sup> <a name="targetLanguageCodes" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.targetLanguageCodes"></a>

```typescript
public readonly targetLanguageCodes: string[];
```

- *Type:* string[]

---

##### `termCount`<sup>Required</sup> <a name="termCount" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.termCount"></a>

```typescript
public readonly termCount: number;
```

- *Type:* number

---

##### `terminologyData`<sup>Required</sup> <a name="terminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyData"></a>

```typescript
public readonly terminologyData: TranslateTerminologyTerminologyDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference">TranslateTerminologyTerminologyDataOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: IResolvable | TranslateTerminologyEncryptionKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

---

##### `mergeStrategyInput`<sup>Optional</sup> <a name="mergeStrategyInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategyInput"></a>

```typescript
public readonly mergeStrategyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TranslateTerminologyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]

---

##### `terminologyDataInput`<sup>Optional</sup> <a name="terminologyDataInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyDataInput"></a>

```typescript
public readonly terminologyDataInput: IResolvable | TranslateTerminologyTerminologyData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `mergeStrategy`<sup>Required</sup> <a name="mergeStrategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategy"></a>

```typescript
public readonly mergeStrategy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranslateTerminologyConfig <a name="TranslateTerminologyConfig" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.Initializer"></a>

```typescript
import { translateTerminology } from '@cdktn/provider-awscc'

const translateTerminologyConfig: translateTerminology.TranslateTerminologyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.name">name</a></code> | <code>string</code> | The name of the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.description">description</a></code> | <code>string</code> | The description of the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | The encryption key for the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.mergeStrategy">mergeStrategy</a></code> | <code>string</code> | The merge strategy for the custom terminology. Currently only OVERWRITE is supported. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]</code> | Tags associated with the terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.terminologyData">terminologyData</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | The terminology data for the custom terminology being imported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#name TranslateTerminology#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#description TranslateTerminology#description}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: TranslateTerminologyEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

The encryption key for the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#encryption_key TranslateTerminology#encryption_key}

---

##### `mergeStrategy`<sup>Optional</sup> <a name="mergeStrategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.mergeStrategy"></a>

```typescript
public readonly mergeStrategy: string;
```

- *Type:* string

The merge strategy for the custom terminology. Currently only OVERWRITE is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#merge_strategy TranslateTerminology#merge_strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TranslateTerminologyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]

Tags associated with the terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#tags TranslateTerminology#tags}

---

##### `terminologyData`<sup>Optional</sup> <a name="terminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.terminologyData"></a>

```typescript
public readonly terminologyData: TranslateTerminologyTerminologyData;
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

The terminology data for the custom terminology being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#terminology_data TranslateTerminology#terminology_data}

---

### TranslateTerminologyEncryptionKey <a name="TranslateTerminologyEncryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.Initializer"></a>

```typescript
import { translateTerminology } from '@cdktn/provider-awscc'

const translateTerminologyEncryptionKey: translateTerminology.TranslateTerminologyEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.id">id</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the encryption key. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.type">type</a></code> | <code>string</code> | The type of encryption key. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#id TranslateTerminology#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#type TranslateTerminology#type}

---

### TranslateTerminologyTags <a name="TranslateTerminologyTags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.Initializer"></a>

```typescript
import { translateTerminology } from '@cdktn/provider-awscc'

const translateTerminologyTags: translateTerminology.TranslateTerminologyTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#key TranslateTerminology#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#value TranslateTerminology#value}

---

### TranslateTerminologyTerminologyData <a name="TranslateTerminologyTerminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.Initializer"></a>

```typescript
import { translateTerminology } from '@cdktn/provider-awscc'

const translateTerminologyTerminologyData: translateTerminology.TranslateTerminologyTerminologyData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.directionality">directionality</a></code> | <code>string</code> | The directionality of the terminology resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.file">file</a></code> | <code>string</code> | The file containing the custom terminology data, base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.format">format</a></code> | <code>string</code> | The data format of the custom terminology. |

---

##### `directionality`<sup>Optional</sup> <a name="directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.directionality"></a>

```typescript
public readonly directionality: string;
```

- *Type:* string

The directionality of the terminology resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#directionality TranslateTerminology#directionality}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

The file containing the custom terminology data, base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#file TranslateTerminology#file}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The data format of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#format TranslateTerminology#format}

---

## Classes <a name="Classes" id="Classes"></a>

### TranslateTerminologyEncryptionKeyOutputReference <a name="TranslateTerminologyEncryptionKeyOutputReference" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { translateTerminology } from '@cdktn/provider-awscc'

new translateTerminology.TranslateTerminologyEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranslateTerminologyEncryptionKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

---


### TranslateTerminologyTagsList <a name="TranslateTerminologyTagsList" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer"></a>

```typescript
import { translateTerminology } from '@cdktn/provider-awscc'

new translateTerminology.TranslateTerminologyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.get"></a>

```typescript
public get(index: number): TranslateTerminologyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranslateTerminologyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>[]

---


### TranslateTerminologyTagsOutputReference <a name="TranslateTerminologyTagsOutputReference" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer"></a>

```typescript
import { translateTerminology } from '@cdktn/provider-awscc'

new translateTerminology.TranslateTerminologyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranslateTerminologyTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>

---


### TranslateTerminologyTerminologyDataOutputReference <a name="TranslateTerminologyTerminologyDataOutputReference" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer"></a>

```typescript
import { translateTerminology } from '@cdktn/provider-awscc'

new translateTerminology.TranslateTerminologyTerminologyDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetDirectionality">resetDirectionality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFormat">resetFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectionality` <a name="resetDirectionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetDirectionality"></a>

```typescript
public resetDirectionality(): void
```

##### `resetFile` <a name="resetFile" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFile"></a>

```typescript
public resetFile(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionalityInput">directionalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionality">directionality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionalityInput`<sup>Optional</sup> <a name="directionalityInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionalityInput"></a>

```typescript
public readonly directionalityInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `directionality`<sup>Required</sup> <a name="directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionality"></a>

```typescript
public readonly directionality: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranslateTerminologyTerminologyData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

---




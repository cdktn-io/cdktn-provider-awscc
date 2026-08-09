# `transcribeVocabularyFilter` Submodule <a name="`transcribeVocabularyFilter` Submodule" id="@cdktn/provider-awscc.transcribeVocabularyFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeVocabularyFilter <a name="TranscribeVocabularyFilter" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transcribe_vocabulary_filter awscc_transcribe_vocabulary_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktn/provider-awscc'

new transcribeVocabularyFilter.TranscribeVocabularyFilter(scope: Construct, id: string, config: TranscribeVocabularyFilterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig">TranscribeVocabularyFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig">TranscribeVocabularyFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetDataAccessRoleArn">resetDataAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetVocabularyFilterFileUri">resetVocabularyFilterFileUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetWords">resetWords</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.putTags"></a>

```typescript
public putTags(value: IResolvable | TranscribeVocabularyFilterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags">TranscribeVocabularyFilterTags</a>[]

---

##### `resetDataAccessRoleArn` <a name="resetDataAccessRoleArn" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetDataAccessRoleArn"></a>

```typescript
public resetDataAccessRoleArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVocabularyFilterFileUri` <a name="resetVocabularyFilterFileUri" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetVocabularyFilterFileUri"></a>

```typescript
public resetVocabularyFilterFileUri(): void
```

##### `resetWords` <a name="resetWords" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.resetWords"></a>

```typescript
public resetWords(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TranscribeVocabularyFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktn/provider-awscc'

transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktn/provider-awscc'

transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktn/provider-awscc'

transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.generateConfigForImport"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktn/provider-awscc'

transcribeVocabularyFilter.TranscribeVocabularyFilter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TranscribeVocabularyFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TranscribeVocabularyFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TranscribeVocabularyFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transcribe_vocabulary_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeVocabularyFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList">TranscribeVocabularyFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dataAccessRoleArnInput">dataAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags">TranscribeVocabularyFilterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUriInput">vocabularyFilterFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterNameInput">vocabularyFilterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.wordsInput">wordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUri">vocabularyFilterFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.words">words</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tags"></a>

```typescript
public readonly tags: TranscribeVocabularyFilterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList">TranscribeVocabularyFilterTagsList</a>

---

##### `dataAccessRoleArnInput`<sup>Optional</sup> <a name="dataAccessRoleArnInput" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dataAccessRoleArnInput"></a>

```typescript
public readonly dataAccessRoleArnInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TranscribeVocabularyFilterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags">TranscribeVocabularyFilterTags</a>[]

---

##### `vocabularyFilterFileUriInput`<sup>Optional</sup> <a name="vocabularyFilterFileUriInput" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUriInput"></a>

```typescript
public readonly vocabularyFilterFileUriInput: string;
```

- *Type:* string

---

##### `vocabularyFilterNameInput`<sup>Optional</sup> <a name="vocabularyFilterNameInput" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterNameInput"></a>

```typescript
public readonly vocabularyFilterNameInput: string;
```

- *Type:* string

---

##### `wordsInput`<sup>Optional</sup> <a name="wordsInput" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.wordsInput"></a>

```typescript
public readonly wordsInput: string[];
```

- *Type:* string[]

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `vocabularyFilterFileUri`<sup>Required</sup> <a name="vocabularyFilterFileUri" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterFileUri"></a>

```typescript
public readonly vocabularyFilterFileUri: string;
```

- *Type:* string

---

##### `vocabularyFilterName`<sup>Required</sup> <a name="vocabularyFilterName" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.words"></a>

```typescript
public readonly words: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeVocabularyFilterConfig <a name="TranscribeVocabularyFilterConfig" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.Initializer"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktn/provider-awscc'

const transcribeVocabularyFilterConfig: transcribeVocabularyFilter.TranscribeVocabularyFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.languageCode">languageCode</a></code> | <code>string</code> | The language code that represents the language of the entries in your vocabulary filter. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | A unique name, chosen by you, for your custom vocabulary filter. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags">TranscribeVocabularyFilterTags</a>[]</code> | Tags associated with the vocabulary filter. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterFileUri">vocabularyFilterFileUri</a></code> | <code>string</code> | The Amazon S3 location of the text file that contains your custom vocabulary filter terms. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.words">words</a></code> | <code>string[]</code> | Use this parameter if you want to create your custom vocabulary filter by including all desired terms, as comma-separated values, within your request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

The language code that represents the language of the entries in your vocabulary filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transcribe_vocabulary_filter#language_code TranscribeVocabularyFilter#language_code}

---

##### `vocabularyFilterName`<sup>Required</sup> <a name="vocabularyFilterName" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

A unique name, chosen by you, for your custom vocabulary filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transcribe_vocabulary_filter#vocabulary_filter_name TranscribeVocabularyFilter#vocabulary_filter_name}

---

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transcribe_vocabulary_filter#data_access_role_arn TranscribeVocabularyFilter#data_access_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TranscribeVocabularyFilterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags">TranscribeVocabularyFilterTags</a>[]

Tags associated with the vocabulary filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transcribe_vocabulary_filter#tags TranscribeVocabularyFilter#tags}

---

##### `vocabularyFilterFileUri`<sup>Optional</sup> <a name="vocabularyFilterFileUri" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.vocabularyFilterFileUri"></a>

```typescript
public readonly vocabularyFilterFileUri: string;
```

- *Type:* string

The Amazon S3 location of the text file that contains your custom vocabulary filter terms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transcribe_vocabulary_filter#vocabulary_filter_file_uri TranscribeVocabularyFilter#vocabulary_filter_file_uri}

---

##### `words`<sup>Optional</sup> <a name="words" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterConfig.property.words"></a>

```typescript
public readonly words: string[];
```

- *Type:* string[]

Use this parameter if you want to create your custom vocabulary filter by including all desired terms, as comma-separated values, within your request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transcribe_vocabulary_filter#words TranscribeVocabularyFilter#words}

---

### TranscribeVocabularyFilterTags <a name="TranscribeVocabularyFilterTags" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags.Initializer"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktn/provider-awscc'

const transcribeVocabularyFilterTags: transcribeVocabularyFilter.TranscribeVocabularyFilterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transcribe_vocabulary_filter#key TranscribeVocabularyFilter#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transcribe_vocabulary_filter#value TranscribeVocabularyFilter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeVocabularyFilterTagsList <a name="TranscribeVocabularyFilterTagsList" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.Initializer"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktn/provider-awscc'

new transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.get"></a>

```typescript
public get(index: number): TranscribeVocabularyFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags">TranscribeVocabularyFilterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeVocabularyFilterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags">TranscribeVocabularyFilterTags</a>[]

---


### TranscribeVocabularyFilterTagsOutputReference <a name="TranscribeVocabularyFilterTagsOutputReference" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.Initializer"></a>

```typescript
import { transcribeVocabularyFilter } from '@cdktn/provider-awscc'

new transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags">TranscribeVocabularyFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeVocabularyFilterTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeVocabularyFilter.TranscribeVocabularyFilterTags">TranscribeVocabularyFilterTags</a>

---




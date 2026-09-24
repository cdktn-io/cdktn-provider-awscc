# `transcribeVocabulary` Submodule <a name="`transcribeVocabulary` Submodule" id="@cdktn/provider-awscc.transcribeVocabulary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeVocabulary <a name="TranscribeVocabulary" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary awscc_transcribe_vocabulary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer"></a>

```typescript
import { transcribeVocabulary } from '@cdktn/provider-awscc'

new transcribeVocabulary.TranscribeVocabulary(scope: Construct, id: string, config: TranscribeVocabularyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig">TranscribeVocabularyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig">TranscribeVocabularyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetDataAccessRoleArn">resetDataAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetPhrases">resetPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetVocabularyFileUri">resetVocabularyFileUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.putTags"></a>

```typescript
public putTags(value: IResolvable | TranscribeVocabularyTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>[]

---

##### `resetDataAccessRoleArn` <a name="resetDataAccessRoleArn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetDataAccessRoleArn"></a>

```typescript
public resetDataAccessRoleArn(): void
```

##### `resetPhrases` <a name="resetPhrases" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetPhrases"></a>

```typescript
public resetPhrases(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVocabularyFileUri` <a name="resetVocabularyFileUri" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.resetVocabularyFileUri"></a>

```typescript
public resetVocabularyFileUri(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TranscribeVocabulary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isConstruct"></a>

```typescript
import { transcribeVocabulary } from '@cdktn/provider-awscc'

transcribeVocabulary.TranscribeVocabulary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformElement"></a>

```typescript
import { transcribeVocabulary } from '@cdktn/provider-awscc'

transcribeVocabulary.TranscribeVocabulary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformResource"></a>

```typescript
import { transcribeVocabulary } from '@cdktn/provider-awscc'

transcribeVocabulary.TranscribeVocabulary.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport"></a>

```typescript
import { transcribeVocabulary } from '@cdktn/provider-awscc'

transcribeVocabulary.TranscribeVocabulary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TranscribeVocabulary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TranscribeVocabulary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TranscribeVocabulary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeVocabulary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList">TranscribeVocabularyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyState">vocabularyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dataAccessRoleArnInput">dataAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.phrasesInput">phrasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUriInput">vocabularyFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyNameInput">vocabularyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.phrases">phrases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUri">vocabularyFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tags"></a>

```typescript
public readonly tags: TranscribeVocabularyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList">TranscribeVocabularyTagsList</a>

---

##### `vocabularyState`<sup>Required</sup> <a name="vocabularyState" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyState"></a>

```typescript
public readonly vocabularyState: string;
```

- *Type:* string

---

##### `dataAccessRoleArnInput`<sup>Optional</sup> <a name="dataAccessRoleArnInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dataAccessRoleArnInput"></a>

```typescript
public readonly dataAccessRoleArnInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `phrasesInput`<sup>Optional</sup> <a name="phrasesInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.phrasesInput"></a>

```typescript
public readonly phrasesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TranscribeVocabularyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>[]

---

##### `vocabularyFileUriInput`<sup>Optional</sup> <a name="vocabularyFileUriInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUriInput"></a>

```typescript
public readonly vocabularyFileUriInput: string;
```

- *Type:* string

---

##### `vocabularyNameInput`<sup>Optional</sup> <a name="vocabularyNameInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyNameInput"></a>

```typescript
public readonly vocabularyNameInput: string;
```

- *Type:* string

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `phrases`<sup>Required</sup> <a name="phrases" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.phrases"></a>

```typescript
public readonly phrases: string[];
```

- *Type:* string[]

---

##### `vocabularyFileUri`<sup>Required</sup> <a name="vocabularyFileUri" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyFileUri"></a>

```typescript
public readonly vocabularyFileUri: string;
```

- *Type:* string

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabulary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeVocabularyConfig <a name="TranscribeVocabularyConfig" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.Initializer"></a>

```typescript
import { transcribeVocabulary } from '@cdktn/provider-awscc'

const transcribeVocabularyConfig: transcribeVocabulary.TranscribeVocabularyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.languageCode">languageCode</a></code> | <code>string</code> | The language code that represents the language of the entries in your custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | A unique name, chosen by you, for your custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input file. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.phrases">phrases</a></code> | <code>string[]</code> | Use this parameter if you want to create your custom vocabulary by including all desired terms, as comma-separated values, within your request. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>[]</code> | Adds one or more custom tags, each in the form of a key:value pair, to the custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyFileUri">vocabularyFileUri</a></code> | <code>string</code> | The Amazon S3 location of the text file that contains your custom vocabulary. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

The language code that represents the language of the entries in your custom vocabulary.

Each custom vocabulary must contain terms in only one language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

A unique name, chosen by you, for your custom vocabulary.

This name is case sensitive, cannot contain spaces, and must be unique within an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}

---

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#data_access_role_arn TranscribeVocabulary#data_access_role_arn}

---

##### `phrases`<sup>Optional</sup> <a name="phrases" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.phrases"></a>

```typescript
public readonly phrases: string[];
```

- *Type:* string[]

Use this parameter if you want to create your custom vocabulary by including all desired terms, as comma-separated values, within your request.

You cannot use this parameter together with VocabularyFileUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TranscribeVocabularyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>[]

Adds one or more custom tags, each in the form of a key:value pair, to the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#tags TranscribeVocabulary#tags}

---

##### `vocabularyFileUri`<sup>Optional</sup> <a name="vocabularyFileUri" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyConfig.property.vocabularyFileUri"></a>

```typescript
public readonly vocabularyFileUri: string;
```

- *Type:* string

The Amazon S3 location of the text file that contains your custom vocabulary.

You cannot use this parameter together with Phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}

---

### TranscribeVocabularyTags <a name="TranscribeVocabularyTags" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.Initializer"></a>

```typescript
import { transcribeVocabulary } from '@cdktn/provider-awscc'

const transcribeVocabularyTags: transcribeVocabulary.TranscribeVocabularyTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#key TranscribeVocabulary#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_vocabulary#value TranscribeVocabulary#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeVocabularyTagsList <a name="TranscribeVocabularyTagsList" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer"></a>

```typescript
import { transcribeVocabulary } from '@cdktn/provider-awscc'

new transcribeVocabulary.TranscribeVocabularyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.get"></a>

```typescript
public get(index: number): TranscribeVocabularyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeVocabularyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>[]

---


### TranscribeVocabularyTagsOutputReference <a name="TranscribeVocabularyTagsOutputReference" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer"></a>

```typescript
import { transcribeVocabulary } from '@cdktn/provider-awscc'

new transcribeVocabulary.TranscribeVocabularyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeVocabularyTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeVocabulary.TranscribeVocabularyTags">TranscribeVocabularyTags</a>

---




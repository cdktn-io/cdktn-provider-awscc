# `translateParallelData` Submodule <a name="`translateParallelData` Submodule" id="@cdktn/provider-awscc.translateParallelData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranslateParallelData <a name="TranslateParallelData" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data awscc_translate_parallel_data}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.Initializer"></a>

```typescript
import { translateParallelData } from '@cdktn/provider-awscc'

new translateParallelData.TranslateParallelData(scope: Construct, id: string, config: TranslateParallelDataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig">TranslateParallelDataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig">TranslateParallelDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.putParallelDataConfig">putParallelDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.putEncryptionKey"></a>

```typescript
public putEncryptionKey(value: TranslateParallelDataEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKey">TranslateParallelDataEncryptionKey</a>

---

##### `putParallelDataConfig` <a name="putParallelDataConfig" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.putParallelDataConfig"></a>

```typescript
public putParallelDataConfig(value: TranslateParallelDataParallelDataConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.putParallelDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfig">TranslateParallelDataParallelDataConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.putTags"></a>

```typescript
public putTags(value: IResolvable | TranslateParallelDataTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags">TranslateParallelDataTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TranslateParallelData resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.isConstruct"></a>

```typescript
import { translateParallelData } from '@cdktn/provider-awscc'

translateParallelData.TranslateParallelData.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.isTerraformElement"></a>

```typescript
import { translateParallelData } from '@cdktn/provider-awscc'

translateParallelData.TranslateParallelData.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.isTerraformResource"></a>

```typescript
import { translateParallelData } from '@cdktn/provider-awscc'

translateParallelData.TranslateParallelData.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.generateConfigForImport"></a>

```typescript
import { translateParallelData } from '@cdktn/provider-awscc'

translateParallelData.TranslateParallelData.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TranslateParallelData resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TranslateParallelData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TranslateParallelData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TranslateParallelData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference">TranslateParallelDataEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.failedRecordCount">failedRecordCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.importedDataSize">importedDataSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.importedRecordCount">importedRecordCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.parallelDataConfig">parallelDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference">TranslateParallelDataParallelDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.skippedRecordCount">skippedRecordCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.sourceLanguageCode">sourceLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList">TranslateParallelDataTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.targetLanguageCodes">targetLanguageCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKey">TranslateParallelDataEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.parallelDataConfigInput">parallelDataConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfig">TranslateParallelDataParallelDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags">TranslateParallelDataTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: TranslateParallelDataEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference">TranslateParallelDataEncryptionKeyOutputReference</a>

---

##### `failedRecordCount`<sup>Required</sup> <a name="failedRecordCount" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.failedRecordCount"></a>

```typescript
public readonly failedRecordCount: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importedDataSize`<sup>Required</sup> <a name="importedDataSize" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.importedDataSize"></a>

```typescript
public readonly importedDataSize: number;
```

- *Type:* number

---

##### `importedRecordCount`<sup>Required</sup> <a name="importedRecordCount" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.importedRecordCount"></a>

```typescript
public readonly importedRecordCount: number;
```

- *Type:* number

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `parallelDataConfig`<sup>Required</sup> <a name="parallelDataConfig" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.parallelDataConfig"></a>

```typescript
public readonly parallelDataConfig: TranslateParallelDataParallelDataConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference">TranslateParallelDataParallelDataConfigOutputReference</a>

---

##### `skippedRecordCount`<sup>Required</sup> <a name="skippedRecordCount" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.skippedRecordCount"></a>

```typescript
public readonly skippedRecordCount: number;
```

- *Type:* number

---

##### `sourceLanguageCode`<sup>Required</sup> <a name="sourceLanguageCode" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.sourceLanguageCode"></a>

```typescript
public readonly sourceLanguageCode: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.tags"></a>

```typescript
public readonly tags: TranslateParallelDataTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList">TranslateParallelDataTagsList</a>

---

##### `targetLanguageCodes`<sup>Required</sup> <a name="targetLanguageCodes" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.targetLanguageCodes"></a>

```typescript
public readonly targetLanguageCodes: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: IResolvable | TranslateParallelDataEncryptionKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKey">TranslateParallelDataEncryptionKey</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parallelDataConfigInput`<sup>Optional</sup> <a name="parallelDataConfigInput" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.parallelDataConfigInput"></a>

```typescript
public readonly parallelDataConfigInput: IResolvable | TranslateParallelDataParallelDataConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfig">TranslateParallelDataParallelDataConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TranslateParallelDataTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags">TranslateParallelDataTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelData.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranslateParallelDataConfig <a name="TranslateParallelDataConfig" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.Initializer"></a>

```typescript
import { translateParallelData } from '@cdktn/provider-awscc'

const translateParallelDataConfig: translateParallelData.TranslateParallelDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.name">name</a></code> | <code>string</code> | A custom name for the parallel data resource. Must be unique in the account and region. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.parallelDataConfig">parallelDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfig">TranslateParallelDataParallelDataConfig</a></code> | Specifies the format and S3 location of the parallel data input file. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.description">description</a></code> | <code>string</code> | A custom description for the parallel data resource. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKey">TranslateParallelDataEncryptionKey</a></code> | The encryption key used to encrypt this object. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags">TranslateParallelDataTags</a>[]</code> | Tags associated with the parallel data resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A custom name for the parallel data resource. Must be unique in the account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#name TranslateParallelData#name}

---

##### `parallelDataConfig`<sup>Required</sup> <a name="parallelDataConfig" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.parallelDataConfig"></a>

```typescript
public readonly parallelDataConfig: TranslateParallelDataParallelDataConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfig">TranslateParallelDataParallelDataConfig</a>

Specifies the format and S3 location of the parallel data input file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#parallel_data_config TranslateParallelData#parallel_data_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A custom description for the parallel data resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#description TranslateParallelData#description}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: TranslateParallelDataEncryptionKey;
```

- *Type:* <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKey">TranslateParallelDataEncryptionKey</a>

The encryption key used to encrypt this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#encryption_key TranslateParallelData#encryption_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TranslateParallelDataTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags">TranslateParallelDataTags</a>[]

Tags associated with the parallel data resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#tags TranslateParallelData#tags}

---

### TranslateParallelDataEncryptionKey <a name="TranslateParallelDataEncryptionKey" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKey.Initializer"></a>

```typescript
import { translateParallelData } from '@cdktn/provider-awscc'

const translateParallelDataEncryptionKey: translateParallelData.TranslateParallelDataEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKey.property.id">id</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the encryption key. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKey.property.type">type</a></code> | <code>string</code> | The type of encryption key. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#id TranslateParallelData#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKey.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#type TranslateParallelData#type}

---

### TranslateParallelDataParallelDataConfig <a name="TranslateParallelDataParallelDataConfig" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfig.Initializer"></a>

```typescript
import { translateParallelData } from '@cdktn/provider-awscc'

const translateParallelDataParallelDataConfig: translateParallelData.TranslateParallelDataParallelDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfig.property.format">format</a></code> | <code>string</code> | The format of the parallel data input file. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfig.property.s3Uri">s3Uri</a></code> | <code>string</code> | The URI of the Amazon S3 folder that contains the parallel data input file. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The format of the parallel data input file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#format TranslateParallelData#format}

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfig.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

The URI of the Amazon S3 folder that contains the parallel data input file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#s3_uri TranslateParallelData#s3_uri}

---

### TranslateParallelDataTags <a name="TranslateParallelDataTags" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags.Initializer"></a>

```typescript
import { translateParallelData } from '@cdktn/provider-awscc'

const translateParallelDataTags: translateParallelData.TranslateParallelDataTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#key TranslateParallelData#key}. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#value TranslateParallelData#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#key TranslateParallelData#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/translate_parallel_data#value TranslateParallelData#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranslateParallelDataEncryptionKeyOutputReference <a name="TranslateParallelDataEncryptionKeyOutputReference" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { translateParallelData } from '@cdktn/provider-awscc'

new translateParallelData.TranslateParallelDataEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKey">TranslateParallelDataEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranslateParallelDataEncryptionKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataEncryptionKey">TranslateParallelDataEncryptionKey</a>

---


### TranslateParallelDataParallelDataConfigOutputReference <a name="TranslateParallelDataParallelDataConfigOutputReference" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.Initializer"></a>

```typescript
import { translateParallelData } from '@cdktn/provider-awscc'

new translateParallelData.TranslateParallelDataParallelDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfig">TranslateParallelDataParallelDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranslateParallelDataParallelDataConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataParallelDataConfig">TranslateParallelDataParallelDataConfig</a>

---


### TranslateParallelDataTagsList <a name="TranslateParallelDataTagsList" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.Initializer"></a>

```typescript
import { translateParallelData } from '@cdktn/provider-awscc'

new translateParallelData.TranslateParallelDataTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.get"></a>

```typescript
public get(index: number): TranslateParallelDataTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags">TranslateParallelDataTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranslateParallelDataTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags">TranslateParallelDataTags</a>[]

---


### TranslateParallelDataTagsOutputReference <a name="TranslateParallelDataTagsOutputReference" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.Initializer"></a>

```typescript
import { translateParallelData } from '@cdktn/provider-awscc'

new translateParallelData.TranslateParallelDataTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags">TranslateParallelDataTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranslateParallelDataTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.translateParallelData.TranslateParallelDataTags">TranslateParallelDataTags</a>

---




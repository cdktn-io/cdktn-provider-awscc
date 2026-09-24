# `transcribeCallAnalyticsCategory` Submodule <a name="`transcribeCallAnalyticsCategory` Submodule" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscribeCallAnalyticsCategory <a name="TranscribeCallAnalyticsCategory" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category awscc_transcribe_call_analytics_category}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory(scope: Construct, id: string, config: TranscribeCallAnalyticsCategoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig">TranscribeCallAnalyticsCategoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig">TranscribeCallAnalyticsCategoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetInputType">resetInputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules"></a>

```typescript
public putRules(value: IResolvable | TranscribeCallAnalyticsCategoryRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags"></a>

```typescript
public putTags(value: IResolvable | TranscribeCallAnalyticsCategoryTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]

---

##### `resetInputType` <a name="resetInputType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetInputType"></a>

```typescript
public resetInputType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TranscribeCallAnalyticsCategory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TranscribeCallAnalyticsCategory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TranscribeCallAnalyticsCategory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lastUpdateTime">lastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList">TranscribeCallAnalyticsCategoryRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList">TranscribeCallAnalyticsCategoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryNameInput">categoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputTypeInput">inputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryName">categoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputType">inputType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.lastUpdateTime"></a>

```typescript
public readonly lastUpdateTime: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rules"></a>

```typescript
public readonly rules: TranscribeCallAnalyticsCategoryRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList">TranscribeCallAnalyticsCategoryRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tags"></a>

```typescript
public readonly tags: TranscribeCallAnalyticsCategoryTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList">TranscribeCallAnalyticsCategoryTagsList</a>

---

##### `categoryNameInput`<sup>Optional</sup> <a name="categoryNameInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryNameInput"></a>

```typescript
public readonly categoryNameInput: string;
```

- *Type:* string

---

##### `inputTypeInput`<sup>Optional</sup> <a name="inputTypeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputTypeInput"></a>

```typescript
public readonly inputTypeInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | TranscribeCallAnalyticsCategoryRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TranscribeCallAnalyticsCategoryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]

---

##### `categoryName`<sup>Required</sup> <a name="categoryName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.categoryName"></a>

```typescript
public readonly categoryName: string;
```

- *Type:* string

---

##### `inputType`<sup>Required</sup> <a name="inputType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.inputType"></a>

```typescript
public readonly inputType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscribeCallAnalyticsCategoryConfig <a name="TranscribeCallAnalyticsCategoryConfig" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryConfig: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.categoryName">categoryName</a></code> | <code>string</code> | A unique name, chosen by you, for your Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]</code> | Rules define a Call Analytics category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.inputType">inputType</a></code> | <code>string</code> | The input type associated with the specified category. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]</code> | Tags associated with the Call Analytics category. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `categoryName`<sup>Required</sup> <a name="categoryName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.categoryName"></a>

```typescript
public readonly categoryName: string;
```

- *Type:* string

A unique name, chosen by you, for your Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#category_name TranscribeCallAnalyticsCategory#category_name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | TranscribeCallAnalyticsCategoryRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]

Rules define a Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#rules TranscribeCallAnalyticsCategory#rules}

---

##### `inputType`<sup>Optional</sup> <a name="inputType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.inputType"></a>

```typescript
public readonly inputType: string;
```

- *Type:* string

The input type associated with the specified category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#input_type TranscribeCallAnalyticsCategory#input_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TranscribeCallAnalyticsCategoryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]

Tags associated with the Call Analytics category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#tags TranscribeCallAnalyticsCategory#tags}

---

### TranscribeCallAnalyticsCategoryRules <a name="TranscribeCallAnalyticsCategoryRules" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryRules: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.interruptionFilter">interruptionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#interruption_filter TranscribeCallAnalyticsCategory#interruption_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.nonTalkTimeFilter">nonTalkTimeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#non_talk_time_filter TranscribeCallAnalyticsCategory#non_talk_time_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.sentimentFilter">sentimentFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiment_filter TranscribeCallAnalyticsCategory#sentiment_filter}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.transcriptFilter">transcriptFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter TranscribeCallAnalyticsCategory#transcript_filter}. |

---

##### `interruptionFilter`<sup>Optional</sup> <a name="interruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.interruptionFilter"></a>

```typescript
public readonly interruptionFilter: TranscribeCallAnalyticsCategoryRulesInterruptionFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#interruption_filter TranscribeCallAnalyticsCategory#interruption_filter}.

---

##### `nonTalkTimeFilter`<sup>Optional</sup> <a name="nonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.nonTalkTimeFilter"></a>

```typescript
public readonly nonTalkTimeFilter: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#non_talk_time_filter TranscribeCallAnalyticsCategory#non_talk_time_filter}.

---

##### `sentimentFilter`<sup>Optional</sup> <a name="sentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.sentimentFilter"></a>

```typescript
public readonly sentimentFilter: TranscribeCallAnalyticsCategoryRulesSentimentFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiment_filter TranscribeCallAnalyticsCategory#sentiment_filter}.

---

##### `transcriptFilter`<sup>Optional</sup> <a name="transcriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules.property.transcriptFilter"></a>

```typescript
public readonly transcriptFilter: TranscribeCallAnalyticsCategoryRulesTranscriptFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter TranscribeCallAnalyticsCategory#transcript_filter}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilter <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryRulesInterruptionFilter: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.negate">negate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.participantRole">participantRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}. |

---

##### `absoluteTimeRange`<sup>Optional</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.absoluteTimeRange"></a>

```typescript
public readonly absoluteTimeRange: TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `participantRole`<sup>Optional</sup> <a name="participantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.participantRole"></a>

```typescript
public readonly participantRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `relativeTimeRange`<sup>Optional</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.relativeTimeRange"></a>

```typescript
public readonly relativeTimeRange: TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.endTime">endTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.first">first</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.last">last</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.startTime">startTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.endTime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.endPercentage">endPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.first">first</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.last">last</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.startPercentage">startPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `endPercentage`<sup>Optional</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.endPercentage"></a>

```typescript
public readonly endPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startPercentage`<sup>Optional</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.property.startPercentage"></a>

```typescript
public readonly startPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryRulesNonTalkTimeFilter: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.negate">negate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}. |

---

##### `absoluteTimeRange`<sup>Optional</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.absoluteTimeRange"></a>

```typescript
public readonly absoluteTimeRange: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `relativeTimeRange`<sup>Optional</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.relativeTimeRange"></a>

```typescript
public readonly relativeTimeRange: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#threshold TranscribeCallAnalyticsCategory#threshold}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.endTime">endTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.first">first</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.last">last</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.startTime">startTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.endTime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.endPercentage">endPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.first">first</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.last">last</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.startPercentage">startPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `endPercentage`<sup>Optional</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.endPercentage"></a>

```typescript
public readonly endPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startPercentage`<sup>Optional</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.property.startPercentage"></a>

```typescript
public readonly startPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilter <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryRulesSentimentFilter: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.negate">negate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.participantRole">participantRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.sentiments">sentiments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiments TranscribeCallAnalyticsCategory#sentiments}. |

---

##### `absoluteTimeRange`<sup>Optional</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.absoluteTimeRange"></a>

```typescript
public readonly absoluteTimeRange: TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `participantRole`<sup>Optional</sup> <a name="participantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.participantRole"></a>

```typescript
public readonly participantRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `relativeTimeRange`<sup>Optional</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.relativeTimeRange"></a>

```typescript
public readonly relativeTimeRange: TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `sentiments`<sup>Optional</sup> <a name="sentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter.property.sentiments"></a>

```typescript
public readonly sentiments: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#sentiments TranscribeCallAnalyticsCategory#sentiments}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.endTime">endTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.first">first</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.last">last</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.startTime">startTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.endTime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.endPercentage">endPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.first">first</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.last">last</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.startPercentage">startPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `endPercentage`<sup>Optional</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.endPercentage"></a>

```typescript
public readonly endPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startPercentage`<sup>Optional</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.property.startPercentage"></a>

```typescript
public readonly startPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilter <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryRulesTranscriptFilter: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.negate">negate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.participantRole">participantRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.targets">targets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#targets TranscribeCallAnalyticsCategory#targets}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.transcriptFilterType">transcriptFilterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter_type TranscribeCallAnalyticsCategory#transcript_filter_type}. |

---

##### `absoluteTimeRange`<sup>Optional</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.absoluteTimeRange"></a>

```typescript
public readonly absoluteTimeRange: TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#absolute_time_range TranscribeCallAnalyticsCategory#absolute_time_range}.

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#negate TranscribeCallAnalyticsCategory#negate}.

---

##### `participantRole`<sup>Optional</sup> <a name="participantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.participantRole"></a>

```typescript
public readonly participantRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#participant_role TranscribeCallAnalyticsCategory#participant_role}.

---

##### `relativeTimeRange`<sup>Optional</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.relativeTimeRange"></a>

```typescript
public readonly relativeTimeRange: TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#relative_time_range TranscribeCallAnalyticsCategory#relative_time_range}.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#targets TranscribeCallAnalyticsCategory#targets}.

---

##### `transcriptFilterType`<sup>Optional</sup> <a name="transcriptFilterType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter.property.transcriptFilterType"></a>

```typescript
public readonly transcriptFilterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#transcript_filter_type TranscribeCallAnalyticsCategory#transcript_filter_type}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.endTime">endTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.first">first</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.last">last</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.startTime">startTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.endTime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_time TranscribeCallAnalyticsCategory#end_time}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_time TranscribeCallAnalyticsCategory#start_time}.

---

### TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.endPercentage">endPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.first">first</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.last">last</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.startPercentage">startPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}. |

---

##### `endPercentage`<sup>Optional</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.endPercentage"></a>

```typescript
public readonly endPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#end_percentage TranscribeCallAnalyticsCategory#end_percentage}.

---

##### `first`<sup>Optional</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#first TranscribeCallAnalyticsCategory#first}.

---

##### `last`<sup>Optional</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#last TranscribeCallAnalyticsCategory#last}.

---

##### `startPercentage`<sup>Optional</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.property.startPercentage"></a>

```typescript
public readonly startPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#start_percentage TranscribeCallAnalyticsCategory#start_percentage}.

---

### TranscribeCallAnalyticsCategoryTags <a name="TranscribeCallAnalyticsCategoryTags" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

const transcribeCallAnalyticsCategoryTags: transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#key TranscribeCallAnalyticsCategory#key}. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#value TranscribeCallAnalyticsCategory#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#key TranscribeCallAnalyticsCategory#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/transcribe_call_analytics_category#value TranscribeCallAnalyticsCategory#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```typescript
public resetLast(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime">endTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last">last</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime">startTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: number;
```

- *Type:* number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```typescript
public readonly lastInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: number;
```

- *Type:* number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange">putAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange">putRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetAbsoluteTimeRange">resetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetParticipantRole">resetParticipantRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetRelativeTimeRange">resetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbsoluteTimeRange` <a name="putAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange"></a>

```typescript
public putAbsoluteTimeRange(value: TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---

##### `putRelativeTimeRange` <a name="putRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange"></a>

```typescript
public putRelativeTimeRange(value: TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---

##### `resetAbsoluteTimeRange` <a name="resetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetAbsoluteTimeRange"></a>

```typescript
public resetAbsoluteTimeRange(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```

##### `resetParticipantRole` <a name="resetParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetParticipantRole"></a>

```typescript
public resetParticipantRole(): void
```

##### `resetRelativeTimeRange` <a name="resetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetRelativeTimeRange"></a>

```typescript
public resetRelativeTimeRange(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRangeInput">absoluteTimeRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRoleInput">participantRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRangeInput">relativeTimeRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole">participantRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `absoluteTimeRange`<sup>Required</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange"></a>

```typescript
public readonly absoluteTimeRange: TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a>

---

##### `relativeTimeRange`<sup>Required</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange"></a>

```typescript
public readonly relativeTimeRange: TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a>

---

##### `absoluteTimeRangeInput`<sup>Optional</sup> <a name="absoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRangeInput"></a>

```typescript
public readonly absoluteTimeRangeInput: IResolvable | TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `participantRoleInput`<sup>Optional</sup> <a name="participantRoleInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRoleInput"></a>

```typescript
public readonly participantRoleInput: string;
```

- *Type:* string

---

##### `relativeTimeRangeInput`<sup>Optional</sup> <a name="relativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRangeInput"></a>

```typescript
public readonly relativeTimeRangeInput: IResolvable | TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `participantRole`<sup>Required</sup> <a name="participantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole"></a>

```typescript
public readonly participantRole: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRulesInterruptionFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetEndPercentage">resetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetStartPercentage">resetStartPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndPercentage` <a name="resetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```typescript
public resetEndPercentage(): void
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetLast"></a>

```typescript
public resetLast(): void
```

##### `resetStartPercentage` <a name="resetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```typescript
public resetStartPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentageInput">endPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentageInput">startPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage">endPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last">last</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage">startPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endPercentageInput`<sup>Optional</sup> <a name="endPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```typescript
public readonly endPercentageInput: number;
```

- *Type:* number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```typescript
public readonly lastInput: number;
```

- *Type:* number

---

##### `startPercentageInput`<sup>Optional</sup> <a name="startPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```typescript
public readonly startPercentageInput: number;
```

- *Type:* number

---

##### `endPercentage`<sup>Required</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```typescript
public readonly endPercentage: number;
```

- *Type:* number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

---

##### `startPercentage`<sup>Required</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```typescript
public readonly startPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesList <a name="TranscribeCallAnalyticsCategoryRulesList" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get"></a>

```typescript
public get(index: number): TranscribeCallAnalyticsCategoryRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>[]

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```typescript
public resetLast(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime">endTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last">last</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime">startTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: number;
```

- *Type:* number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```typescript
public readonly lastInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: number;
```

- *Type:* number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange">putAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange">putRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetAbsoluteTimeRange">resetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetRelativeTimeRange">resetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbsoluteTimeRange` <a name="putAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange"></a>

```typescript
public putAbsoluteTimeRange(value: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---

##### `putRelativeTimeRange` <a name="putRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange"></a>

```typescript
public putRelativeTimeRange(value: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---

##### `resetAbsoluteTimeRange` <a name="resetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetAbsoluteTimeRange"></a>

```typescript
public resetAbsoluteTimeRange(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```

##### `resetRelativeTimeRange` <a name="resetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetRelativeTimeRange"></a>

```typescript
public resetRelativeTimeRange(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRangeInput">absoluteTimeRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRangeInput">relativeTimeRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `absoluteTimeRange`<sup>Required</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange"></a>

```typescript
public readonly absoluteTimeRange: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a>

---

##### `relativeTimeRange`<sup>Required</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange"></a>

```typescript
public readonly relativeTimeRange: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a>

---

##### `absoluteTimeRangeInput`<sup>Optional</sup> <a name="absoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRangeInput"></a>

```typescript
public readonly absoluteTimeRangeInput: IResolvable | TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `relativeTimeRangeInput`<sup>Optional</sup> <a name="relativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRangeInput"></a>

```typescript
public readonly relativeTimeRangeInput: IResolvable | TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetEndPercentage">resetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetStartPercentage">resetStartPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndPercentage` <a name="resetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```typescript
public resetEndPercentage(): void
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetLast"></a>

```typescript
public resetLast(): void
```

##### `resetStartPercentage` <a name="resetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```typescript
public resetStartPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentageInput">endPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentageInput">startPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage">endPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last">last</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage">startPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endPercentageInput`<sup>Optional</sup> <a name="endPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```typescript
public readonly endPercentageInput: number;
```

- *Type:* number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```typescript
public readonly lastInput: number;
```

- *Type:* number

---

##### `startPercentageInput`<sup>Optional</sup> <a name="startPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```typescript
public readonly startPercentageInput: number;
```

- *Type:* number

---

##### `endPercentage`<sup>Required</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```typescript
public readonly endPercentage: number;
```

- *Type:* number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

---

##### `startPercentage`<sup>Required</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```typescript
public readonly startPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesOutputReference <a name="TranscribeCallAnalyticsCategoryRulesOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter">putInterruptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter">putNonTalkTimeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter">putSentimentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter">putTranscriptFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetInterruptionFilter">resetInterruptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetNonTalkTimeFilter">resetNonTalkTimeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetSentimentFilter">resetSentimentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetTranscriptFilter">resetTranscriptFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInterruptionFilter` <a name="putInterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter"></a>

```typescript
public putInterruptionFilter(value: TranscribeCallAnalyticsCategoryRulesInterruptionFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putInterruptionFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---

##### `putNonTalkTimeFilter` <a name="putNonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter"></a>

```typescript
public putNonTalkTimeFilter(value: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putNonTalkTimeFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---

##### `putSentimentFilter` <a name="putSentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter"></a>

```typescript
public putSentimentFilter(value: TranscribeCallAnalyticsCategoryRulesSentimentFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putSentimentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---

##### `putTranscriptFilter` <a name="putTranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter"></a>

```typescript
public putTranscriptFilter(value: TranscribeCallAnalyticsCategoryRulesTranscriptFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.putTranscriptFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---

##### `resetInterruptionFilter` <a name="resetInterruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetInterruptionFilter"></a>

```typescript
public resetInterruptionFilter(): void
```

##### `resetNonTalkTimeFilter` <a name="resetNonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetNonTalkTimeFilter"></a>

```typescript
public resetNonTalkTimeFilter(): void
```

##### `resetSentimentFilter` <a name="resetSentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetSentimentFilter"></a>

```typescript
public resetSentimentFilter(): void
```

##### `resetTranscriptFilter` <a name="resetTranscriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.resetTranscriptFilter"></a>

```typescript
public resetTranscriptFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter">interruptionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter">nonTalkTimeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter">sentimentFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter">transcriptFilter</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilterInput">interruptionFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilterInput">nonTalkTimeFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilterInput">sentimentFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilterInput">transcriptFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interruptionFilter`<sup>Required</sup> <a name="interruptionFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter"></a>

```typescript
public readonly interruptionFilter: TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">TranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a>

---

##### `nonTalkTimeFilter`<sup>Required</sup> <a name="nonTalkTimeFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter"></a>

```typescript
public readonly nonTalkTimeFilter: TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a>

---

##### `sentimentFilter`<sup>Required</sup> <a name="sentimentFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter"></a>

```typescript
public readonly sentimentFilter: TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a>

---

##### `transcriptFilter`<sup>Required</sup> <a name="transcriptFilter" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter"></a>

```typescript
public readonly transcriptFilter: TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a>

---

##### `interruptionFilterInput`<sup>Optional</sup> <a name="interruptionFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilterInput"></a>

```typescript
public readonly interruptionFilterInput: IResolvable | TranscribeCallAnalyticsCategoryRulesInterruptionFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesInterruptionFilter">TranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---

##### `nonTalkTimeFilterInput`<sup>Optional</sup> <a name="nonTalkTimeFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilterInput"></a>

```typescript
public readonly nonTalkTimeFilterInput: IResolvable | TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">TranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---

##### `sentimentFilterInput`<sup>Optional</sup> <a name="sentimentFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilterInput"></a>

```typescript
public readonly sentimentFilterInput: IResolvable | TranscribeCallAnalyticsCategoryRulesSentimentFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---

##### `transcriptFilterInput`<sup>Optional</sup> <a name="transcriptFilterInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilterInput"></a>

```typescript
public readonly transcriptFilterInput: IResolvable | TranscribeCallAnalyticsCategoryRulesTranscriptFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRules">TranscribeCallAnalyticsCategoryRules</a>

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```typescript
public resetLast(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime">endTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last">last</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime">startTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: number;
```

- *Type:* number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```typescript
public readonly lastInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: number;
```

- *Type:* number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange">putAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange">putRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetAbsoluteTimeRange">resetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetParticipantRole">resetParticipantRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetRelativeTimeRange">resetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetSentiments">resetSentiments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbsoluteTimeRange` <a name="putAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange"></a>

```typescript
public putAbsoluteTimeRange(value: TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---

##### `putRelativeTimeRange` <a name="putRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange"></a>

```typescript
public putRelativeTimeRange(value: TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---

##### `resetAbsoluteTimeRange` <a name="resetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetAbsoluteTimeRange"></a>

```typescript
public resetAbsoluteTimeRange(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```

##### `resetParticipantRole` <a name="resetParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetParticipantRole"></a>

```typescript
public resetParticipantRole(): void
```

##### `resetRelativeTimeRange` <a name="resetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetRelativeTimeRange"></a>

```typescript
public resetRelativeTimeRange(): void
```

##### `resetSentiments` <a name="resetSentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resetSentiments"></a>

```typescript
public resetSentiments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRangeInput">absoluteTimeRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRoleInput">participantRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRangeInput">relativeTimeRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentimentsInput">sentimentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole">participantRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments">sentiments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `absoluteTimeRange`<sup>Required</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange"></a>

```typescript
public readonly absoluteTimeRange: TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a>

---

##### `relativeTimeRange`<sup>Required</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange"></a>

```typescript
public readonly relativeTimeRange: TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a>

---

##### `absoluteTimeRangeInput`<sup>Optional</sup> <a name="absoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRangeInput"></a>

```typescript
public readonly absoluteTimeRangeInput: IResolvable | TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `participantRoleInput`<sup>Optional</sup> <a name="participantRoleInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRoleInput"></a>

```typescript
public readonly participantRoleInput: string;
```

- *Type:* string

---

##### `relativeTimeRangeInput`<sup>Optional</sup> <a name="relativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRangeInput"></a>

```typescript
public readonly relativeTimeRangeInput: IResolvable | TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---

##### `sentimentsInput`<sup>Optional</sup> <a name="sentimentsInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentimentsInput"></a>

```typescript
public readonly sentimentsInput: string[];
```

- *Type:* string[]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `participantRole`<sup>Required</sup> <a name="participantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole"></a>

```typescript
public readonly participantRole: string;
```

- *Type:* string

---

##### `sentiments`<sup>Required</sup> <a name="sentiments" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments"></a>

```typescript
public readonly sentiments: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRulesSentimentFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilter">TranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetEndPercentage">resetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetStartPercentage">resetStartPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndPercentage` <a name="resetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```typescript
public resetEndPercentage(): void
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetLast"></a>

```typescript
public resetLast(): void
```

##### `resetStartPercentage` <a name="resetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```typescript
public resetStartPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentageInput">endPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentageInput">startPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage">endPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last">last</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage">startPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endPercentageInput`<sup>Optional</sup> <a name="endPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```typescript
public readonly endPercentageInput: number;
```

- *Type:* number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```typescript
public readonly lastInput: number;
```

- *Type:* number

---

##### `startPercentageInput`<sup>Optional</sup> <a name="startPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```typescript
public readonly startPercentageInput: number;
```

- *Type:* number

---

##### `endPercentage`<sup>Required</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```typescript
public readonly endPercentage: number;
```

- *Type:* number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

---

##### `startPercentage`<sup>Required</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```typescript
public readonly startPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetLast"></a>

```typescript
public resetLast(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime">endTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last">last</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime">startTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: number;
```

- *Type:* number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.lastInput"></a>

```typescript
public readonly lastInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: number;
```

- *Type:* number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange">putAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange">putRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetAbsoluteTimeRange">resetAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetParticipantRole">resetParticipantRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetRelativeTimeRange">resetRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTargets">resetTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTranscriptFilterType">resetTranscriptFilterType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbsoluteTimeRange` <a name="putAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange"></a>

```typescript
public putAbsoluteTimeRange(value: TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putAbsoluteTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---

##### `putRelativeTimeRange` <a name="putRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange"></a>

```typescript
public putRelativeTimeRange(value: TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.putRelativeTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---

##### `resetAbsoluteTimeRange` <a name="resetAbsoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetAbsoluteTimeRange"></a>

```typescript
public resetAbsoluteTimeRange(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```

##### `resetParticipantRole` <a name="resetParticipantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetParticipantRole"></a>

```typescript
public resetParticipantRole(): void
```

##### `resetRelativeTimeRange` <a name="resetRelativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetRelativeTimeRange"></a>

```typescript
public resetRelativeTimeRange(): void
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTargets"></a>

```typescript
public resetTargets(): void
```

##### `resetTranscriptFilterType` <a name="resetTranscriptFilterType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resetTranscriptFilterType"></a>

```typescript
public resetTranscriptFilterType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange">absoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange">relativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRangeInput">absoluteTimeRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRoleInput">participantRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRangeInput">relativeTimeRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targetsInput">targetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterTypeInput">transcriptFilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole">participantRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets">targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType">transcriptFilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `absoluteTimeRange`<sup>Required</sup> <a name="absoluteTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange"></a>

```typescript
public readonly absoluteTimeRange: TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a>

---

##### `relativeTimeRange`<sup>Required</sup> <a name="relativeTimeRange" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange"></a>

```typescript
public readonly relativeTimeRange: TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a>

---

##### `absoluteTimeRangeInput`<sup>Optional</sup> <a name="absoluteTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRangeInput"></a>

```typescript
public readonly absoluteTimeRangeInput: IResolvable | TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `participantRoleInput`<sup>Optional</sup> <a name="participantRoleInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRoleInput"></a>

```typescript
public readonly participantRoleInput: string;
```

- *Type:* string

---

##### `relativeTimeRangeInput`<sup>Optional</sup> <a name="relativeTimeRangeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRangeInput"></a>

```typescript
public readonly relativeTimeRangeInput: IResolvable | TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targetsInput"></a>

```typescript
public readonly targetsInput: string[];
```

- *Type:* string[]

---

##### `transcriptFilterTypeInput`<sup>Optional</sup> <a name="transcriptFilterTypeInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterTypeInput"></a>

```typescript
public readonly transcriptFilterTypeInput: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `participantRole`<sup>Required</sup> <a name="participantRole" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole"></a>

```typescript
public readonly participantRole: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

---

##### `transcriptFilterType`<sup>Required</sup> <a name="transcriptFilterType" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType"></a>

```typescript
public readonly transcriptFilterType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRulesTranscriptFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilter">TranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---


### TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference <a name="TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetEndPercentage">resetEndPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetFirst">resetFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetLast">resetLast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetStartPercentage">resetStartPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndPercentage` <a name="resetEndPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetEndPercentage"></a>

```typescript
public resetEndPercentage(): void
```

##### `resetFirst` <a name="resetFirst" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetFirst"></a>

```typescript
public resetFirst(): void
```

##### `resetLast` <a name="resetLast" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetLast"></a>

```typescript
public resetLast(): void
```

##### `resetStartPercentage` <a name="resetStartPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resetStartPercentage"></a>

```typescript
public resetStartPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentageInput">endPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.firstInput">firstInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.lastInput">lastInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentageInput">startPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage">endPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first">first</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last">last</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage">startPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endPercentageInput`<sup>Optional</sup> <a name="endPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentageInput"></a>

```typescript
public readonly endPercentageInput: number;
```

- *Type:* number

---

##### `firstInput`<sup>Optional</sup> <a name="firstInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.firstInput"></a>

```typescript
public readonly firstInput: number;
```

- *Type:* number

---

##### `lastInput`<sup>Optional</sup> <a name="lastInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.lastInput"></a>

```typescript
public readonly lastInput: number;
```

- *Type:* number

---

##### `startPercentageInput`<sup>Optional</sup> <a name="startPercentageInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentageInput"></a>

```typescript
public readonly startPercentageInput: number;
```

- *Type:* number

---

##### `endPercentage`<sup>Required</sup> <a name="endPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```typescript
public readonly endPercentage: number;
```

- *Type:* number

---

##### `first`<sup>Required</sup> <a name="first" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first"></a>

```typescript
public readonly first: number;
```

- *Type:* number

---

##### `last`<sup>Required</sup> <a name="last" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last"></a>

```typescript
public readonly last: number;
```

- *Type:* number

---

##### `startPercentage`<sup>Required</sup> <a name="startPercentage" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```typescript
public readonly startPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">TranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---


### TranscribeCallAnalyticsCategoryTagsList <a name="TranscribeCallAnalyticsCategoryTagsList" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get"></a>

```typescript
public get(index: number): TranscribeCallAnalyticsCategoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>[]

---


### TranscribeCallAnalyticsCategoryTagsOutputReference <a name="TranscribeCallAnalyticsCategoryTagsOutputReference" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer"></a>

```typescript
import { transcribeCallAnalyticsCategory } from '@cdktn/provider-awscc'

new transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TranscribeCallAnalyticsCategoryTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transcribeCallAnalyticsCategory.TranscribeCallAnalyticsCategoryTags">TranscribeCallAnalyticsCategoryTags</a>

---




# `wisdomQuickResponse` Submodule <a name="`wisdomQuickResponse` Submodule" id="@cdktn/provider-awscc.wisdomQuickResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomQuickResponse <a name="WisdomQuickResponse" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response awscc_wisdom_quick_response}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

new wisdomQuickResponse.WisdomQuickResponse(scope: Construct, id: string, config: WisdomQuickResponseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig">WisdomQuickResponseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig">WisdomQuickResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putGroupingConfiguration">putGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetChannels">resetChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetGroupingConfiguration">resetGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetIsActive">resetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetShortcutKey">resetShortcutKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putContent"></a>

```typescript
public putContent(value: WisdomQuickResponseContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a>

---

##### `putGroupingConfiguration` <a name="putGroupingConfiguration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putGroupingConfiguration"></a>

```typescript
public putGroupingConfiguration(value: WisdomQuickResponseGroupingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putGroupingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putTags"></a>

```typescript
public putTags(value: IResolvable | WisdomQuickResponseTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>[]

---

##### `resetChannels` <a name="resetChannels" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetChannels"></a>

```typescript
public resetChannels(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGroupingConfiguration` <a name="resetGroupingConfiguration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetGroupingConfiguration"></a>

```typescript
public resetGroupingConfiguration(): void
```

##### `resetIsActive` <a name="resetIsActive" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetIsActive"></a>

```typescript
public resetIsActive(): void
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

##### `resetShortcutKey` <a name="resetShortcutKey" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetShortcutKey"></a>

```typescript
public resetShortcutKey(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomQuickResponse resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isConstruct"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

wisdomQuickResponse.WisdomQuickResponse.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformElement"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

wisdomQuickResponse.WisdomQuickResponse.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformResource"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

wisdomQuickResponse.WisdomQuickResponse.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WisdomQuickResponse resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WisdomQuickResponse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WisdomQuickResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WisdomQuickResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference">WisdomQuickResponseContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contents">contents</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference">WisdomQuickResponseContentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.groupingConfiguration">groupingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference">WisdomQuickResponseGroupingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.quickResponseArn">quickResponseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.quickResponseId">quickResponseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList">WisdomQuickResponseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.channelsInput">channelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentInput">contentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.groupingConfigurationInput">groupingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.isActiveInput">isActiveInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.knowledgeBaseArnInput">knowledgeBaseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.shortcutKeyInput">shortcutKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.channels">channels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.isActive">isActive</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.shortcutKey">shortcutKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.content"></a>

```typescript
public readonly content: WisdomQuickResponseContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference">WisdomQuickResponseContentOutputReference</a>

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contents"></a>

```typescript
public readonly contents: WisdomQuickResponseContentsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference">WisdomQuickResponseContentsOutputReference</a>

---

##### `groupingConfiguration`<sup>Required</sup> <a name="groupingConfiguration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.groupingConfiguration"></a>

```typescript
public readonly groupingConfiguration: WisdomQuickResponseGroupingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference">WisdomQuickResponseGroupingConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `quickResponseArn`<sup>Required</sup> <a name="quickResponseArn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.quickResponseArn"></a>

```typescript
public readonly quickResponseArn: string;
```

- *Type:* string

---

##### `quickResponseId`<sup>Required</sup> <a name="quickResponseId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.quickResponseId"></a>

```typescript
public readonly quickResponseId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tags"></a>

```typescript
public readonly tags: WisdomQuickResponseTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList">WisdomQuickResponseTagsList</a>

---

##### `channelsInput`<sup>Optional</sup> <a name="channelsInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.channelsInput"></a>

```typescript
public readonly channelsInput: string[];
```

- *Type:* string[]

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentInput"></a>

```typescript
public readonly contentInput: IResolvable | WisdomQuickResponseContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a>

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `groupingConfigurationInput`<sup>Optional</sup> <a name="groupingConfigurationInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.groupingConfigurationInput"></a>

```typescript
public readonly groupingConfigurationInput: IResolvable | WisdomQuickResponseGroupingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a>

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.isActiveInput"></a>

```typescript
public readonly isActiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `knowledgeBaseArnInput`<sup>Optional</sup> <a name="knowledgeBaseArnInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.knowledgeBaseArnInput"></a>

```typescript
public readonly knowledgeBaseArnInput: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `shortcutKeyInput`<sup>Optional</sup> <a name="shortcutKeyInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.shortcutKeyInput"></a>

```typescript
public readonly shortcutKeyInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WisdomQuickResponseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>[]

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.channels"></a>

```typescript
public readonly channels: string[];
```

- *Type:* string[]

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.knowledgeBaseArn"></a>

```typescript
public readonly knowledgeBaseArn: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `shortcutKey`<sup>Required</sup> <a name="shortcutKey" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.shortcutKey"></a>

```typescript
public readonly shortcutKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomQuickResponseConfig <a name="WisdomQuickResponseConfig" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

const wisdomQuickResponseConfig: wisdomQuickResponse.WisdomQuickResponseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a></code> | The container of quick response content. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.name">name</a></code> | <code>string</code> | The name of the quick response. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.channels">channels</a></code> | <code>string[]</code> | The Amazon Connect contact channels this quick response applies to. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.contentType">contentType</a></code> | <code>string</code> | The media type of the quick response content. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.description">description</a></code> | <code>string</code> | The description of the quick response. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.groupingConfiguration">groupingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a></code> | The configuration information of the user groups that the quick response is accessible to. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.isActive">isActive</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the quick response is active. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.language">language</a></code> | <code>string</code> | The language code value for the language in which the quick response is written. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.shortcutKey">shortcutKey</a></code> | <code>string</code> | The shortcut key of the quick response. The value should be unique across the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.content"></a>

```typescript
public readonly content: WisdomQuickResponseContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a>

The container of quick response content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#content WisdomQuickResponse#content}

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.knowledgeBaseArn"></a>

```typescript
public readonly knowledgeBaseArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#knowledge_base_arn WisdomQuickResponse#knowledge_base_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#name WisdomQuickResponse#name}

---

##### `channels`<sup>Optional</sup> <a name="channels" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.channels"></a>

```typescript
public readonly channels: string[];
```

- *Type:* string[]

The Amazon Connect contact channels this quick response applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#channels WisdomQuickResponse#channels}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

The media type of the quick response content.

Use application/x.quickresponse;format=plain for quick response written in plain text.
- Use application/x.quickresponse;format=markdown for quick response written in richtext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#content_type WisdomQuickResponse#content_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#description WisdomQuickResponse#description}

---

##### `groupingConfiguration`<sup>Optional</sup> <a name="groupingConfiguration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.groupingConfiguration"></a>

```typescript
public readonly groupingConfiguration: WisdomQuickResponseGroupingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a>

The configuration information of the user groups that the quick response is accessible to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#grouping_configuration WisdomQuickResponse#grouping_configuration}

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the quick response is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#is_active WisdomQuickResponse#is_active}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

The language code value for the language in which the quick response is written.

The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#language WisdomQuickResponse#language}

---

##### `shortcutKey`<sup>Optional</sup> <a name="shortcutKey" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.shortcutKey"></a>

```typescript
public readonly shortcutKey: string;
```

- *Type:* string

The shortcut key of the quick response. The value should be unique across the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#shortcut_key WisdomQuickResponse#shortcut_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | WisdomQuickResponseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#tags WisdomQuickResponse#tags}

---

### WisdomQuickResponseContent <a name="WisdomQuickResponseContent" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

const wisdomQuickResponseContent: wisdomQuickResponse.WisdomQuickResponseContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent.property.content">content</a></code> | <code>string</code> | The content of the quick response. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The content of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#content WisdomQuickResponse#content}

---

### WisdomQuickResponseContents <a name="WisdomQuickResponseContents" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContents.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

const wisdomQuickResponseContents: wisdomQuickResponse.WisdomQuickResponseContents = { ... }
```


### WisdomQuickResponseContentsMarkdown <a name="WisdomQuickResponseContentsMarkdown" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdown"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdown.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

const wisdomQuickResponseContentsMarkdown: wisdomQuickResponse.WisdomQuickResponseContentsMarkdown = { ... }
```


### WisdomQuickResponseContentsPlainText <a name="WisdomQuickResponseContentsPlainText" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainText.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

const wisdomQuickResponseContentsPlainText: wisdomQuickResponse.WisdomQuickResponseContentsPlainText = { ... }
```


### WisdomQuickResponseGroupingConfiguration <a name="WisdomQuickResponseGroupingConfiguration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

const wisdomQuickResponseGroupingConfiguration: wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.property.criteria">criteria</a></code> | <code>string</code> | The criteria used for grouping Amazon Q in Connect users. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.property.values">values</a></code> | <code>string[]</code> | The list of values that define different groups of Amazon Q in Connect users. |

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.property.criteria"></a>

```typescript
public readonly criteria: string;
```

- *Type:* string

The criteria used for grouping Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#criteria WisdomQuickResponse#criteria}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The list of values that define different groups of Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#values WisdomQuickResponse#values}

---

### WisdomQuickResponseTags <a name="WisdomQuickResponseTags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

const wisdomQuickResponseTags: wisdomQuickResponse.WisdomQuickResponseTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#key WisdomQuickResponse#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wisdom_quick_response#value WisdomQuickResponse#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomQuickResponseContentOutputReference <a name="WisdomQuickResponseContentOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

new wisdomQuickResponse.WisdomQuickResponseContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomQuickResponseContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a>

---


### WisdomQuickResponseContentsMarkdownOutputReference <a name="WisdomQuickResponseContentsMarkdownOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

new wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdown">WisdomQuickResponseContentsMarkdown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WisdomQuickResponseContentsMarkdown;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdown">WisdomQuickResponseContentsMarkdown</a>

---


### WisdomQuickResponseContentsOutputReference <a name="WisdomQuickResponseContentsOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

new wisdomQuickResponse.WisdomQuickResponseContentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.markdown">markdown</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference">WisdomQuickResponseContentsMarkdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.plainText">plainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference">WisdomQuickResponseContentsPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContents">WisdomQuickResponseContents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `markdown`<sup>Required</sup> <a name="markdown" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.markdown"></a>

```typescript
public readonly markdown: WisdomQuickResponseContentsMarkdownOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference">WisdomQuickResponseContentsMarkdownOutputReference</a>

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.plainText"></a>

```typescript
public readonly plainText: WisdomQuickResponseContentsPlainTextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference">WisdomQuickResponseContentsPlainTextOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WisdomQuickResponseContents;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContents">WisdomQuickResponseContents</a>

---


### WisdomQuickResponseContentsPlainTextOutputReference <a name="WisdomQuickResponseContentsPlainTextOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

new wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainText">WisdomQuickResponseContentsPlainText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WisdomQuickResponseContentsPlainText;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainText">WisdomQuickResponseContentsPlainText</a>

---


### WisdomQuickResponseGroupingConfigurationOutputReference <a name="WisdomQuickResponseGroupingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

new wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resetCriteria">resetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCriteria` <a name="resetCriteria" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resetCriteria"></a>

```typescript
public resetCriteria(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.criteriaInput">criteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.criteria">criteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.criteria"></a>

```typescript
public readonly criteria: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomQuickResponseGroupingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a>

---


### WisdomQuickResponseTagsList <a name="WisdomQuickResponseTagsList" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

new wisdomQuickResponse.WisdomQuickResponseTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.get"></a>

```typescript
public get(index: number): WisdomQuickResponseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomQuickResponseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>[]

---


### WisdomQuickResponseTagsOutputReference <a name="WisdomQuickResponseTagsOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer"></a>

```typescript
import { wisdomQuickResponse } from '@cdktn/provider-awscc'

new wisdomQuickResponse.WisdomQuickResponseTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomQuickResponseTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>

---




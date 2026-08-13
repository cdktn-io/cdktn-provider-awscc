# `neptuneEventSubscription` Submodule <a name="`neptuneEventSubscription` Submodule" id="@cdktn/provider-awscc.neptuneEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneEventSubscription <a name="NeptuneEventSubscription" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_event_subscription awscc_neptune_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer"></a>

```typescript
import { neptuneEventSubscription } from '@cdktn/provider-awscc'

new neptuneEventSubscription.NeptuneEventSubscription(scope: Construct, id: string, config: NeptuneEventSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig">NeptuneEventSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig">NeptuneEventSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetEventCategories">resetEventCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetSourceIds">resetSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetSourceType">resetSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetSubscriptionName">resetSubscriptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.putTags"></a>

```typescript
public putTags(value: IResolvable | NeptuneEventSubscriptionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEventCategories` <a name="resetEventCategories" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetEventCategories"></a>

```typescript
public resetEventCategories(): void
```

##### `resetSourceIds` <a name="resetSourceIds" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetSourceIds"></a>

```typescript
public resetSourceIds(): void
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetSourceType"></a>

```typescript
public resetSourceType(): void
```

##### `resetSubscriptionName` <a name="resetSubscriptionName" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetSubscriptionName"></a>

```typescript
public resetSubscriptionName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NeptuneEventSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isConstruct"></a>

```typescript
import { neptuneEventSubscription } from '@cdktn/provider-awscc'

neptuneEventSubscription.NeptuneEventSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isTerraformElement"></a>

```typescript
import { neptuneEventSubscription } from '@cdktn/provider-awscc'

neptuneEventSubscription.NeptuneEventSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isTerraformResource"></a>

```typescript
import { neptuneEventSubscription } from '@cdktn/provider-awscc'

neptuneEventSubscription.NeptuneEventSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.generateConfigForImport"></a>

```typescript
import { neptuneEventSubscription } from '@cdktn/provider-awscc'

neptuneEventSubscription.NeptuneEventSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NeptuneEventSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NeptuneEventSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NeptuneEventSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_event_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NeptuneEventSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList">NeptuneEventSubscriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.eventCategoriesInput">eventCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceIdsInput">sourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.subscriptionNameInput">subscriptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.eventCategories">eventCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceIds">sourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.subscriptionName">subscriptionName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.tags"></a>

```typescript
public readonly tags: NeptuneEventSubscriptionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList">NeptuneEventSubscriptionTagsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventCategoriesInput`<sup>Optional</sup> <a name="eventCategoriesInput" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.eventCategoriesInput"></a>

```typescript
public readonly eventCategoriesInput: string[];
```

- *Type:* string[]

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `sourceIdsInput`<sup>Optional</sup> <a name="sourceIdsInput" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceIdsInput"></a>

```typescript
public readonly sourceIdsInput: string[];
```

- *Type:* string[]

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `subscriptionNameInput`<sup>Optional</sup> <a name="subscriptionNameInput" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.subscriptionNameInput"></a>

```typescript
public readonly subscriptionNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NeptuneEventSubscriptionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventCategories`<sup>Required</sup> <a name="eventCategories" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.eventCategories"></a>

```typescript
public readonly eventCategories: string[];
```

- *Type:* string[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `sourceIds`<sup>Required</sup> <a name="sourceIds" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceIds"></a>

```typescript
public readonly sourceIds: string[];
```

- *Type:* string[]

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.subscriptionName"></a>

```typescript
public readonly subscriptionName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneEventSubscriptionConfig <a name="NeptuneEventSubscriptionConfig" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.Initializer"></a>

```typescript
import { neptuneEventSubscription } from '@cdktn/provider-awscc'

const neptuneEventSubscriptionConfig: neptuneEventSubscription.NeptuneEventSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the SNS topic created for event notification. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | A Boolean value; |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.eventCategories">eventCategories</a></code> | <code>string[]</code> | A list of event categories for a SourceType that you want to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.sourceIds">sourceIds</a></code> | <code>string[]</code> | The list of identifiers of the event sources for which events will be returned. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.sourceType">sourceType</a></code> | <code>string</code> | The type of source that will be generating the events. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.subscriptionName">subscriptionName</a></code> | <code>string</code> | The name of the subscription. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the SNS topic created for event notification.

The ARN is created by Amazon SNS when you create a topic and subscribe to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_event_subscription#sns_topic_arn NeptuneEventSubscription#sns_topic_arn}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A Boolean value;

set to true to activate the subscription, set to false to create the subscription but not active it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_event_subscription#enabled NeptuneEventSubscription#enabled}

---

##### `eventCategories`<sup>Optional</sup> <a name="eventCategories" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.eventCategories"></a>

```typescript
public readonly eventCategories: string[];
```

- *Type:* string[]

A list of event categories for a SourceType that you want to subscribe to.

You can see a list of the categories for a given SourceType in the Events topic in the Amazon Neptune User Guide or by using the DescribeEventCategories action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_event_subscription#event_categories NeptuneEventSubscription#event_categories}

---

##### `sourceIds`<sup>Optional</sup> <a name="sourceIds" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.sourceIds"></a>

```typescript
public readonly sourceIds: string[];
```

- *Type:* string[]

The list of identifiers of the event sources for which events will be returned.

If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it cannot end with a hyphen or contain two consecutive hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_event_subscription#source_ids NeptuneEventSubscription#source_ids}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

The type of source that will be generating the events.

For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_event_subscription#source_type NeptuneEventSubscription#source_type}

---

##### `subscriptionName`<sup>Optional</sup> <a name="subscriptionName" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.subscriptionName"></a>

```typescript
public readonly subscriptionName: string;
```

- *Type:* string

The name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_event_subscription#subscription_name NeptuneEventSubscription#subscription_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NeptuneEventSubscriptionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_event_subscription#tags NeptuneEventSubscription#tags}

---

### NeptuneEventSubscriptionTags <a name="NeptuneEventSubscriptionTags" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags.Initializer"></a>

```typescript
import { neptuneEventSubscription } from '@cdktn/provider-awscc'

const neptuneEventSubscriptionTags: neptuneEventSubscription.NeptuneEventSubscriptionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_event_subscription#key NeptuneEventSubscription#key}. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_event_subscription#value NeptuneEventSubscription#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_event_subscription#key NeptuneEventSubscription#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_event_subscription#value NeptuneEventSubscription#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneEventSubscriptionTagsList <a name="NeptuneEventSubscriptionTagsList" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer"></a>

```typescript
import { neptuneEventSubscription } from '@cdktn/provider-awscc'

new neptuneEventSubscription.NeptuneEventSubscriptionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.get"></a>

```typescript
public get(index: number): NeptuneEventSubscriptionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptuneEventSubscriptionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>[]

---


### NeptuneEventSubscriptionTagsOutputReference <a name="NeptuneEventSubscriptionTagsOutputReference" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer"></a>

```typescript
import { neptuneEventSubscription } from '@cdktn/provider-awscc'

new neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptuneEventSubscriptionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneEventSubscription.NeptuneEventSubscriptionTags">NeptuneEventSubscriptionTags</a>

---




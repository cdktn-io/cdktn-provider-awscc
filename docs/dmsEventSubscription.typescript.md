# `dmsEventSubscription` Submodule <a name="`dmsEventSubscription` Submodule" id="@cdktn/provider-awscc.dmsEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEventSubscription <a name="DmsEventSubscription" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription awscc_dms_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer"></a>

```typescript
import { dmsEventSubscription } from '@cdktn/provider-awscc'

new dmsEventSubscription.DmsEventSubscription(scope: Construct, id: string, config: DmsEventSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig">DmsEventSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig">DmsEventSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetEventCategories">resetEventCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetSourceIds">resetSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetSourceType">resetSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetSubscriptionName">resetSubscriptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.putTags"></a>

```typescript
public putTags(value: IResolvable | DmsEventSubscriptionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEventCategories` <a name="resetEventCategories" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetEventCategories"></a>

```typescript
public resetEventCategories(): void
```

##### `resetSourceIds` <a name="resetSourceIds" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetSourceIds"></a>

```typescript
public resetSourceIds(): void
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetSourceType"></a>

```typescript
public resetSourceType(): void
```

##### `resetSubscriptionName` <a name="resetSubscriptionName" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetSubscriptionName"></a>

```typescript
public resetSubscriptionName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsEventSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isConstruct"></a>

```typescript
import { dmsEventSubscription } from '@cdktn/provider-awscc'

dmsEventSubscription.DmsEventSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isTerraformElement"></a>

```typescript
import { dmsEventSubscription } from '@cdktn/provider-awscc'

dmsEventSubscription.DmsEventSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isTerraformResource"></a>

```typescript
import { dmsEventSubscription } from '@cdktn/provider-awscc'

dmsEventSubscription.DmsEventSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.generateConfigForImport"></a>

```typescript
import { dmsEventSubscription } from '@cdktn/provider-awscc'

dmsEventSubscription.DmsEventSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DmsEventSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsEventSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsEventSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsEventSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList">DmsEventSubscriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.eventCategoriesInput">eventCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceIdsInput">sourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.subscriptionNameInput">subscriptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.eventCategories">eventCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceIds">sourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.subscriptionName">subscriptionName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.tags"></a>

```typescript
public readonly tags: DmsEventSubscriptionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList">DmsEventSubscriptionTagsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventCategoriesInput`<sup>Optional</sup> <a name="eventCategoriesInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.eventCategoriesInput"></a>

```typescript
public readonly eventCategoriesInput: string[];
```

- *Type:* string[]

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.snsTopicArnInput"></a>

```typescript
public readonly snsTopicArnInput: string;
```

- *Type:* string

---

##### `sourceIdsInput`<sup>Optional</sup> <a name="sourceIdsInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceIdsInput"></a>

```typescript
public readonly sourceIdsInput: string[];
```

- *Type:* string[]

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `subscriptionNameInput`<sup>Optional</sup> <a name="subscriptionNameInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.subscriptionNameInput"></a>

```typescript
public readonly subscriptionNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DmsEventSubscriptionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventCategories`<sup>Required</sup> <a name="eventCategories" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.eventCategories"></a>

```typescript
public readonly eventCategories: string[];
```

- *Type:* string[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `sourceIds`<sup>Required</sup> <a name="sourceIds" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceIds"></a>

```typescript
public readonly sourceIds: string[];
```

- *Type:* string[]

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.subscriptionName"></a>

```typescript
public readonly subscriptionName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEventSubscriptionConfig <a name="DmsEventSubscriptionConfig" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.Initializer"></a>

```typescript
import { dmsEventSubscription } from '@cdktn/provider-awscc'

const dmsEventSubscriptionConfig: dmsEventSubscription.DmsEventSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to activate the subscription. If you don't specify this property, CloudFormation activates the subscription. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.eventCategories">eventCategories</a></code> | <code>string[]</code> | A list of event categories for a source type that you want to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.sourceIds">sourceIds</a></code> | <code>string[]</code> | A list of identifiers for which AWS DMS provides notification events. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.sourceType">sourceType</a></code> | <code>string</code> | The type of AWS DMS resource that generates the events. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.subscriptionName">subscriptionName</a></code> | <code>string</code> | The name of the AWS DMS event notification subscription. This name must be less than 255 characters. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>[]</code> | One or more tags to be assigned to the event subscription. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification.

The ARN is created by Amazon SNS when you create a topic and subscribe to it.



Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#sns_topic_arn DmsEventSubscription#sns_topic_arn}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to activate the subscription. If you don't specify this property, CloudFormation activates the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#enabled DmsEventSubscription#enabled}

---

##### `eventCategories`<sup>Optional</sup> <a name="eventCategories" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.eventCategories"></a>

```typescript
public readonly eventCategories: string[];
```

- *Type:* string[]

A list of event categories for a source type that you want to subscribe to.

If you don't specify this property, you are notified about all event categories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#event_categories DmsEventSubscription#event_categories}

---

##### `sourceIds`<sup>Optional</sup> <a name="sourceIds" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.sourceIds"></a>

```typescript
public readonly sourceIds: string[];
```

- *Type:* string[]

A list of identifiers for which AWS DMS provides notification events.

If you don't specify a value, notifications are provided for all sources.

If you specify multiple values, they must be of the same type. For example, if you specify a database instance ID, then all of the other values must be database instance IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#source_ids DmsEventSubscription#source_ids}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

The type of AWS DMS resource that generates the events.

For example, if you want to be notified of events generated by a replication instance, you set this parameter to replication-instance. If this value isn't specified, all events are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#source_type DmsEventSubscription#source_type}

---

##### `subscriptionName`<sup>Optional</sup> <a name="subscriptionName" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.subscriptionName"></a>

```typescript
public readonly subscriptionName: string;
```

- *Type:* string

The name of the AWS DMS event notification subscription. This name must be less than 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#subscription_name DmsEventSubscription#subscription_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DmsEventSubscriptionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>[]

One or more tags to be assigned to the event subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#tags DmsEventSubscription#tags}

---

### DmsEventSubscriptionTags <a name="DmsEventSubscriptionTags" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags.Initializer"></a>

```typescript
import { dmsEventSubscription } from '@cdktn/provider-awscc'

const dmsEventSubscriptionTags: dmsEventSubscription.DmsEventSubscriptionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#key DmsEventSubscription#key}. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#value DmsEventSubscription#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#key DmsEventSubscription#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_event_subscription#value DmsEventSubscription#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEventSubscriptionTagsList <a name="DmsEventSubscriptionTagsList" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer"></a>

```typescript
import { dmsEventSubscription } from '@cdktn/provider-awscc'

new dmsEventSubscription.DmsEventSubscriptionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.get"></a>

```typescript
public get(index: number): DmsEventSubscriptionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEventSubscriptionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>[]

---


### DmsEventSubscriptionTagsOutputReference <a name="DmsEventSubscriptionTagsOutputReference" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer"></a>

```typescript
import { dmsEventSubscription } from '@cdktn/provider-awscc'

new dmsEventSubscription.DmsEventSubscriptionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEventSubscriptionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEventSubscription.DmsEventSubscriptionTags">DmsEventSubscriptionTags</a>

---




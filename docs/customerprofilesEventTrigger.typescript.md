# `customerprofilesEventTrigger` Submodule <a name="`customerprofilesEventTrigger` Submodule" id="@cdktn/provider-awscc.customerprofilesEventTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesEventTrigger <a name="CustomerprofilesEventTrigger" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger awscc_customerprofiles_event_trigger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

new customerprofilesEventTrigger.CustomerprofilesEventTrigger(scope: Construct, id: string, config: CustomerprofilesEventTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig">CustomerprofilesEventTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig">CustomerprofilesEventTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerConditions">putEventTriggerConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerLimits">putEventTriggerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetEventTriggerLimits">resetEventTriggerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetSegmentFilter">resetSegmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventTriggerConditions` <a name="putEventTriggerConditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerConditions"></a>

```typescript
public putEventTriggerConditions(value: IResolvable | CustomerprofilesEventTriggerEventTriggerConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]

---

##### `putEventTriggerLimits` <a name="putEventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerLimits"></a>

```typescript
public putEventTriggerLimits(value: CustomerprofilesEventTriggerEventTriggerLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putTags"></a>

```typescript
public putTags(value: IResolvable | CustomerprofilesEventTriggerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEventTriggerLimits` <a name="resetEventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetEventTriggerLimits"></a>

```typescript
public resetEventTriggerLimits(): void
```

##### `resetSegmentFilter` <a name="resetSegmentFilter" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetSegmentFilter"></a>

```typescript
public resetSegmentFilter(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesEventTrigger resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isConstruct"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

customerprofilesEventTrigger.CustomerprofilesEventTrigger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformElement"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformResource"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CustomerprofilesEventTrigger resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesEventTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesEventTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesEventTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditions">eventTriggerConditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList">CustomerprofilesEventTriggerEventTriggerConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimits">eventTriggerLimits</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference">CustomerprofilesEventTriggerEventTriggerLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList">CustomerprofilesEventTriggerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditionsInput">eventTriggerConditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimitsInput">eventTriggerLimitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerNameInput">eventTriggerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeNameInput">objectTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilterInput">segmentFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerName">eventTriggerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilter">segmentFilter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `eventTriggerConditions`<sup>Required</sup> <a name="eventTriggerConditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditions"></a>

```typescript
public readonly eventTriggerConditions: CustomerprofilesEventTriggerEventTriggerConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList">CustomerprofilesEventTriggerEventTriggerConditionsList</a>

---

##### `eventTriggerLimits`<sup>Required</sup> <a name="eventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimits"></a>

```typescript
public readonly eventTriggerLimits: CustomerprofilesEventTriggerEventTriggerLimitsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference">CustomerprofilesEventTriggerEventTriggerLimitsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tags"></a>

```typescript
public readonly tags: CustomerprofilesEventTriggerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList">CustomerprofilesEventTriggerTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `eventTriggerConditionsInput`<sup>Optional</sup> <a name="eventTriggerConditionsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditionsInput"></a>

```typescript
public readonly eventTriggerConditionsInput: IResolvable | CustomerprofilesEventTriggerEventTriggerConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]

---

##### `eventTriggerLimitsInput`<sup>Optional</sup> <a name="eventTriggerLimitsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimitsInput"></a>

```typescript
public readonly eventTriggerLimitsInput: IResolvable | CustomerprofilesEventTriggerEventTriggerLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

---

##### `eventTriggerNameInput`<sup>Optional</sup> <a name="eventTriggerNameInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerNameInput"></a>

```typescript
public readonly eventTriggerNameInput: string;
```

- *Type:* string

---

##### `objectTypeNameInput`<sup>Optional</sup> <a name="objectTypeNameInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeNameInput"></a>

```typescript
public readonly objectTypeNameInput: string;
```

- *Type:* string

---

##### `segmentFilterInput`<sup>Optional</sup> <a name="segmentFilterInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilterInput"></a>

```typescript
public readonly segmentFilterInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CustomerprofilesEventTriggerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `eventTriggerName`<sup>Required</sup> <a name="eventTriggerName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerName"></a>

```typescript
public readonly eventTriggerName: string;
```

- *Type:* string

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

---

##### `segmentFilter`<sup>Required</sup> <a name="segmentFilter" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilter"></a>

```typescript
public readonly segmentFilter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesEventTriggerConfig <a name="CustomerprofilesEventTriggerConfig" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

const customerprofilesEventTriggerConfig: customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.domainName">domainName</a></code> | <code>string</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerConditions">eventTriggerConditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]</code> | A list of conditions that determine when an event should trigger the destination. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerName">eventTriggerName</a></code> | <code>string</code> | The unique name of the event trigger. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | The unique name of the object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.description">description</a></code> | <code>string</code> | The description of the event trigger. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerLimits">eventTriggerLimits</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a></code> | Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.segmentFilter">segmentFilter</a></code> | <code>string</code> | The destination is triggered only for profiles that meet the criteria of a segment definition. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#domain_name CustomerprofilesEventTrigger#domain_name}

---

##### `eventTriggerConditions`<sup>Required</sup> <a name="eventTriggerConditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerConditions"></a>

```typescript
public readonly eventTriggerConditions: IResolvable | CustomerprofilesEventTriggerEventTriggerConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]

A list of conditions that determine when an event should trigger the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#event_trigger_conditions CustomerprofilesEventTrigger#event_trigger_conditions}

---

##### `eventTriggerName`<sup>Required</sup> <a name="eventTriggerName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerName"></a>

```typescript
public readonly eventTriggerName: string;
```

- *Type:* string

The unique name of the event trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#event_trigger_name CustomerprofilesEventTrigger#event_trigger_name}

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

The unique name of the object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#object_type_name CustomerprofilesEventTrigger#object_type_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the event trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#description CustomerprofilesEventTrigger#description}

---

##### `eventTriggerLimits`<sup>Optional</sup> <a name="eventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerLimits"></a>

```typescript
public readonly eventTriggerLimits: CustomerprofilesEventTriggerEventTriggerLimits;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#event_trigger_limits CustomerprofilesEventTrigger#event_trigger_limits}

---

##### `segmentFilter`<sup>Optional</sup> <a name="segmentFilter" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.segmentFilter"></a>

```typescript
public readonly segmentFilter: string;
```

- *Type:* string

The destination is triggered only for profiles that meet the criteria of a segment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#segment_filter CustomerprofilesEventTrigger#segment_filter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CustomerprofilesEventTriggerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#tags CustomerprofilesEventTrigger#tags}

---

### CustomerprofilesEventTriggerEventTriggerConditions <a name="CustomerprofilesEventTriggerEventTriggerConditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

const customerprofilesEventTriggerEventTriggerConditions: customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.eventTriggerDimensions">eventTriggerDimensions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]</code> | A list of dimensions to be evaluated for the event. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | The operator used to combine multiple dimensions. |

---

##### `eventTriggerDimensions`<sup>Required</sup> <a name="eventTriggerDimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.eventTriggerDimensions"></a>

```typescript
public readonly eventTriggerDimensions: IResolvable | CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]

A list of dimensions to be evaluated for the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#event_trigger_dimensions CustomerprofilesEventTrigger#event_trigger_dimensions}

---

##### `logicalOperator`<sup>Required</sup> <a name="logicalOperator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

The operator used to combine multiple dimensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#logical_operator CustomerprofilesEventTrigger#logical_operator}

---

### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

const customerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions: customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions.property.objectAttributes">objectAttributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]</code> | A list of object attributes to be evaluated. |

---

##### `objectAttributes`<sup>Required</sup> <a name="objectAttributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions.property.objectAttributes"></a>

```typescript
public readonly objectAttributes: IResolvable | CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]

A list of object attributes to be evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#object_attributes CustomerprofilesEventTrigger#object_attributes}

---

### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

const customerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes: customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The operator used to compare an attribute against a list of values. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.values">values</a></code> | <code>string[]</code> | A list of attribute values used for comparison. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.fieldName">fieldName</a></code> | <code>string</code> | A field defined within an object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.source">source</a></code> | <code>string</code> | An attribute contained within a source object. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The operator used to compare an attribute against a list of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#comparison_operator CustomerprofilesEventTrigger#comparison_operator}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

A list of attribute values used for comparison.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#values CustomerprofilesEventTrigger#values}

---

##### `fieldName`<sup>Optional</sup> <a name="fieldName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

A field defined within an object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#field_name CustomerprofilesEventTrigger#field_name}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

An attribute contained within a source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#source CustomerprofilesEventTrigger#source}

---

### CustomerprofilesEventTriggerEventTriggerLimits <a name="CustomerprofilesEventTriggerEventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

const customerprofilesEventTriggerEventTriggerLimits: customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.eventExpiration">eventExpiration</a></code> | <code>number</code> | Specifies that an event will only trigger the destination if it is processed within a certain latency period. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.periods">periods</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]</code> | A list of time periods during which the limits apply. |

---

##### `eventExpiration`<sup>Optional</sup> <a name="eventExpiration" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.eventExpiration"></a>

```typescript
public readonly eventExpiration: number;
```

- *Type:* number

Specifies that an event will only trigger the destination if it is processed within a certain latency period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#event_expiration CustomerprofilesEventTrigger#event_expiration}

---

##### `periods`<sup>Optional</sup> <a name="periods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.periods"></a>

```typescript
public readonly periods: IResolvable | CustomerprofilesEventTriggerEventTriggerLimitsPeriods[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]

A list of time periods during which the limits apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#periods CustomerprofilesEventTrigger#periods}

---

### CustomerprofilesEventTriggerEventTriggerLimitsPeriods <a name="CustomerprofilesEventTriggerEventTriggerLimitsPeriods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

const customerprofilesEventTriggerEventTriggerLimitsPeriods: customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.maxInvocationsPerProfile">maxInvocationsPerProfile</a></code> | <code>number</code> | The maximum allowed number of destination invocations per profile. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unit">unit</a></code> | <code>string</code> | The unit of time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unlimited">unlimited</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, there is no limit on the number of destination invocations per profile. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.value">value</a></code> | <code>number</code> | The amount of time of the specified unit. |

---

##### `maxInvocationsPerProfile`<sup>Optional</sup> <a name="maxInvocationsPerProfile" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.maxInvocationsPerProfile"></a>

```typescript
public readonly maxInvocationsPerProfile: number;
```

- *Type:* number

The maximum allowed number of destination invocations per profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#max_invocations_per_profile CustomerprofilesEventTrigger#max_invocations_per_profile}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The unit of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#unit CustomerprofilesEventTrigger#unit}

---

##### `unlimited`<sup>Optional</sup> <a name="unlimited" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unlimited"></a>

```typescript
public readonly unlimited: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, there is no limit on the number of destination invocations per profile.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#unlimited CustomerprofilesEventTrigger#unlimited}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The amount of time of the specified unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#value CustomerprofilesEventTrigger#value}

---

### CustomerprofilesEventTriggerTags <a name="CustomerprofilesEventTriggerTags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

const customerprofilesEventTriggerTags: customerprofilesEventTrigger.CustomerprofilesEventTriggerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#key CustomerprofilesEventTrigger#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_event_trigger#value CustomerprofilesEventTrigger#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

new customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get"></a>

```typescript
public get(index: number): CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]

---


### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

new customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get"></a>

```typescript
public get(index: number): CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]

---


### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

new customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetFieldName">resetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldName` <a name="resetFieldName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetFieldName"></a>

```typescript
public resetFieldName(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>

---


### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

new customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.putObjectAttributes">putObjectAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectAttributes` <a name="putObjectAttributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.putObjectAttributes"></a>

```typescript
public putObjectAttributes(value: IResolvable | CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.putObjectAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributes">objectAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributesInput">objectAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectAttributes`<sup>Required</sup> <a name="objectAttributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributes"></a>

```typescript
public readonly objectAttributes: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList</a>

---

##### `objectAttributesInput`<sup>Optional</sup> <a name="objectAttributesInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributesInput"></a>

```typescript
public readonly objectAttributesInput: IResolvable | CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>

---


### CustomerprofilesEventTriggerEventTriggerConditionsList <a name="CustomerprofilesEventTriggerEventTriggerConditionsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

new customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.get"></a>

```typescript
public get(index: number): CustomerprofilesEventTriggerEventTriggerConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesEventTriggerEventTriggerConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]

---


### CustomerprofilesEventTriggerEventTriggerConditionsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerConditionsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

new customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.putEventTriggerDimensions">putEventTriggerDimensions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEventTriggerDimensions` <a name="putEventTriggerDimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.putEventTriggerDimensions"></a>

```typescript
public putEventTriggerDimensions(value: IResolvable | CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.putEventTriggerDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensions">eventTriggerDimensions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensionsInput">eventTriggerDimensionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperatorInput">logicalOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTriggerDimensions`<sup>Required</sup> <a name="eventTriggerDimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensions"></a>

```typescript
public readonly eventTriggerDimensions: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList</a>

---

##### `eventTriggerDimensionsInput`<sup>Optional</sup> <a name="eventTriggerDimensionsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensionsInput"></a>

```typescript
public readonly eventTriggerDimensionsInput: IResolvable | CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]

---

##### `logicalOperatorInput`<sup>Optional</sup> <a name="logicalOperatorInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperatorInput"></a>

```typescript
public readonly logicalOperatorInput: string;
```

- *Type:* string

---

##### `logicalOperator`<sup>Required</sup> <a name="logicalOperator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesEventTriggerEventTriggerConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>

---


### CustomerprofilesEventTriggerEventTriggerLimitsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerLimitsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

new customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.putPeriods">putPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetEventExpiration">resetEventExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetPeriods">resetPeriods</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPeriods` <a name="putPeriods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.putPeriods"></a>

```typescript
public putPeriods(value: IResolvable | CustomerprofilesEventTriggerEventTriggerLimitsPeriods[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.putPeriods.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]

---

##### `resetEventExpiration` <a name="resetEventExpiration" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetEventExpiration"></a>

```typescript
public resetEventExpiration(): void
```

##### `resetPeriods` <a name="resetPeriods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetPeriods"></a>

```typescript
public resetPeriods(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periods">periods</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList">CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpirationInput">eventExpirationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periodsInput">periodsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpiration">eventExpiration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periods`<sup>Required</sup> <a name="periods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periods"></a>

```typescript
public readonly periods: CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList">CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList</a>

---

##### `eventExpirationInput`<sup>Optional</sup> <a name="eventExpirationInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpirationInput"></a>

```typescript
public readonly eventExpirationInput: number;
```

- *Type:* number

---

##### `periodsInput`<sup>Optional</sup> <a name="periodsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periodsInput"></a>

```typescript
public readonly periodsInput: IResolvable | CustomerprofilesEventTriggerEventTriggerLimitsPeriods[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]

---

##### `eventExpiration`<sup>Required</sup> <a name="eventExpiration" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpiration"></a>

```typescript
public readonly eventExpiration: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesEventTriggerEventTriggerLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

---


### CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList <a name="CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

new customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get"></a>

```typescript
public get(index: number): CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesEventTriggerEventTriggerLimitsPeriods[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]

---


### CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

new customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetMaxInvocationsPerProfile">resetMaxInvocationsPerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnlimited">resetUnlimited</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxInvocationsPerProfile` <a name="resetMaxInvocationsPerProfile" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetMaxInvocationsPerProfile"></a>

```typescript
public resetMaxInvocationsPerProfile(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```

##### `resetUnlimited` <a name="resetUnlimited" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnlimited"></a>

```typescript
public resetUnlimited(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfileInput">maxInvocationsPerProfileInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimitedInput">unlimitedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfile">maxInvocationsPerProfile</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimited">unlimited</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInvocationsPerProfileInput`<sup>Optional</sup> <a name="maxInvocationsPerProfileInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfileInput"></a>

```typescript
public readonly maxInvocationsPerProfileInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `unlimitedInput`<sup>Optional</sup> <a name="unlimitedInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimitedInput"></a>

```typescript
public readonly unlimitedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `maxInvocationsPerProfile`<sup>Required</sup> <a name="maxInvocationsPerProfile" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfile"></a>

```typescript
public readonly maxInvocationsPerProfile: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `unlimited`<sup>Required</sup> <a name="unlimited" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimited"></a>

```typescript
public readonly unlimited: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesEventTriggerEventTriggerLimitsPeriods;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>

---


### CustomerprofilesEventTriggerTagsList <a name="CustomerprofilesEventTriggerTagsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

new customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.get"></a>

```typescript
public get(index: number): CustomerprofilesEventTriggerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesEventTriggerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]

---


### CustomerprofilesEventTriggerTagsOutputReference <a name="CustomerprofilesEventTriggerTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer"></a>

```typescript
import { customerprofilesEventTrigger } from '@cdktn/provider-awscc'

new customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesEventTriggerTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>

---




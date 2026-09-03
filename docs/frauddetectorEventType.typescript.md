# `frauddetectorEventType` Submodule <a name="`frauddetectorEventType` Submodule" id="@cdktn/provider-awscc.frauddetectorEventType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrauddetectorEventType <a name="FrauddetectorEventType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type awscc_frauddetector_event_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventType(scope: Construct, id: string, config: FrauddetectorEventTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig">FrauddetectorEventTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig">FrauddetectorEventTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEntityTypes">putEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEventVariables">putEventVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntityTypes` <a name="putEntityTypes" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEntityTypes"></a>

```typescript
public putEntityTypes(value: IResolvable | FrauddetectorEventTypeEntityTypes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEntityTypes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]

---

##### `putEventVariables` <a name="putEventVariables" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEventVariables"></a>

```typescript
public putEventVariables(value: IResolvable | FrauddetectorEventTypeEventVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEventVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]

---

##### `putLabels` <a name="putLabels" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putLabels"></a>

```typescript
public putLabels(value: IResolvable | FrauddetectorEventTypeLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putLabels.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putTags"></a>

```typescript
public putTags(value: IResolvable | FrauddetectorEventTypeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FrauddetectorEventType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isConstruct"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

frauddetectorEventType.FrauddetectorEventType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformElement"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

frauddetectorEventType.FrauddetectorEventType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformResource"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

frauddetectorEventType.FrauddetectorEventType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

frauddetectorEventType.FrauddetectorEventType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FrauddetectorEventType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FrauddetectorEventType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FrauddetectorEventType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FrauddetectorEventType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList">FrauddetectorEventTypeEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.eventVariables">eventVariables</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList">FrauddetectorEventTypeEventVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.labels">labels</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList">FrauddetectorEventTypeLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList">FrauddetectorEventTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.entityTypesInput">entityTypesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.eventVariablesInput">eventVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.labelsInput">labelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.entityTypes"></a>

```typescript
public readonly entityTypes: FrauddetectorEventTypeEntityTypesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList">FrauddetectorEventTypeEntityTypesList</a>

---

##### `eventVariables`<sup>Required</sup> <a name="eventVariables" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.eventVariables"></a>

```typescript
public readonly eventVariables: FrauddetectorEventTypeEventVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList">FrauddetectorEventTypeEventVariablesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.labels"></a>

```typescript
public readonly labels: FrauddetectorEventTypeLabelsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList">FrauddetectorEventTypeLabelsList</a>

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tags"></a>

```typescript
public readonly tags: FrauddetectorEventTypeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList">FrauddetectorEventTypeTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entityTypesInput`<sup>Optional</sup> <a name="entityTypesInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.entityTypesInput"></a>

```typescript
public readonly entityTypesInput: IResolvable | FrauddetectorEventTypeEntityTypes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]

---

##### `eventVariablesInput`<sup>Optional</sup> <a name="eventVariablesInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.eventVariablesInput"></a>

```typescript
public readonly eventVariablesInput: IResolvable | FrauddetectorEventTypeEventVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | FrauddetectorEventTypeLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FrauddetectorEventTypeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FrauddetectorEventTypeConfig <a name="FrauddetectorEventTypeConfig" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

const frauddetectorEventTypeConfig: frauddetectorEventType.FrauddetectorEventTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.entityTypes">entityTypes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#entity_types FrauddetectorEventType#entity_types}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.eventVariables">eventVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#event_variables FrauddetectorEventType#event_variables}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.labels">labels</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#labels FrauddetectorEventType#labels}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.name">name</a></code> | <code>string</code> | The name for the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.description">description</a></code> | <code>string</code> | The description of the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]</code> | Tags associated with this event type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.entityTypes"></a>

```typescript
public readonly entityTypes: IResolvable | FrauddetectorEventTypeEntityTypes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#entity_types FrauddetectorEventType#entity_types}.

---

##### `eventVariables`<sup>Required</sup> <a name="eventVariables" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.eventVariables"></a>

```typescript
public readonly eventVariables: IResolvable | FrauddetectorEventTypeEventVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#event_variables FrauddetectorEventType#event_variables}.

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | FrauddetectorEventTypeLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#labels FrauddetectorEventType#labels}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#description FrauddetectorEventType#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | FrauddetectorEventTypeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#tags FrauddetectorEventType#tags}

---

### FrauddetectorEventTypeEntityTypes <a name="FrauddetectorEventTypeEntityTypes" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

const frauddetectorEventTypeEntityTypes: frauddetectorEventType.FrauddetectorEventTypeEntityTypes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.createdTime">createdTime</a></code> | <code>string</code> | The time when the event type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.description">description</a></code> | <code>string</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | The time when the event type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]</code> | Tags associated with this event type. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}.

---

##### `createdTime`<sup>Optional</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

The time when the event type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#created_time FrauddetectorEventType#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#description FrauddetectorEventType#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}.

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

The time when the event type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#last_updated_time FrauddetectorEventType#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.tags"></a>

```typescript
public readonly tags: IResolvable | FrauddetectorEventTypeEntityTypesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#tags FrauddetectorEventType#tags}

---

### FrauddetectorEventTypeEntityTypesTags <a name="FrauddetectorEventTypeEntityTypesTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

const frauddetectorEventTypeEntityTypesTags: frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}.

---

### FrauddetectorEventTypeEventVariables <a name="FrauddetectorEventTypeEventVariables" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

const frauddetectorEventTypeEventVariables: frauddetectorEventType.FrauddetectorEventTypeEventVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.createdTime">createdTime</a></code> | <code>string</code> | The time when the event type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.dataSource">dataSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#data_source FrauddetectorEventType#data_source}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.dataType">dataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#data_type FrauddetectorEventType#data_type}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#default_value FrauddetectorEventType#default_value}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.description">description</a></code> | <code>string</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | The time when the event type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]</code> | Tags associated with this event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.variableType">variableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#variable_type FrauddetectorEventType#variable_type}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}.

---

##### `createdTime`<sup>Optional</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

The time when the event type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#created_time FrauddetectorEventType#created_time}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#data_source FrauddetectorEventType#data_source}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#data_type FrauddetectorEventType#data_type}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#default_value FrauddetectorEventType#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#description FrauddetectorEventType#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}.

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

The time when the event type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#last_updated_time FrauddetectorEventType#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.tags"></a>

```typescript
public readonly tags: IResolvable | FrauddetectorEventTypeEventVariablesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#tags FrauddetectorEventType#tags}

---

##### `variableType`<sup>Optional</sup> <a name="variableType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#variable_type FrauddetectorEventType#variable_type}.

---

### FrauddetectorEventTypeEventVariablesTags <a name="FrauddetectorEventTypeEventVariablesTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

const frauddetectorEventTypeEventVariablesTags: frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}.

---

### FrauddetectorEventTypeLabels <a name="FrauddetectorEventTypeLabels" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

const frauddetectorEventTypeLabels: frauddetectorEventType.FrauddetectorEventTypeLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.createdTime">createdTime</a></code> | <code>string</code> | The time when the event type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.description">description</a></code> | <code>string</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | The time when the event type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]</code> | Tags associated with this event type. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}.

---

##### `createdTime`<sup>Optional</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

The time when the event type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#created_time FrauddetectorEventType#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#description FrauddetectorEventType#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}.

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

The time when the event type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#last_updated_time FrauddetectorEventType#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.tags"></a>

```typescript
public readonly tags: IResolvable | FrauddetectorEventTypeLabelsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#tags FrauddetectorEventType#tags}

---

### FrauddetectorEventTypeLabelsTags <a name="FrauddetectorEventTypeLabelsTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

const frauddetectorEventTypeLabelsTags: frauddetectorEventType.FrauddetectorEventTypeLabelsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}.

---

### FrauddetectorEventTypeTags <a name="FrauddetectorEventTypeTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

const frauddetectorEventTypeTags: frauddetectorEventType.FrauddetectorEventTypeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrauddetectorEventTypeEntityTypesList <a name="FrauddetectorEventTypeEntityTypesList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeEntityTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.get"></a>

```typescript
public get(index: number): FrauddetectorEventTypeEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeEntityTypes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>[]

---


### FrauddetectorEventTypeEntityTypesOutputReference <a name="FrauddetectorEventTypeEntityTypesOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetCreatedTime">resetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetInline">resetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetLastUpdatedTime">resetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | FrauddetectorEventTypeEntityTypesTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetCreatedTime` <a name="resetCreatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetCreatedTime"></a>

```typescript
public resetCreatedTime(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetInline"></a>

```typescript
public resetInline(): void
```

##### `resetLastUpdatedTime` <a name="resetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetLastUpdatedTime"></a>

```typescript
public resetLastUpdatedTime(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList">FrauddetectorEventTypeEntityTypesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.createdTimeInput">createdTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.inlineInput">inlineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTimeInput">lastUpdatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.tags"></a>

```typescript
public readonly tags: FrauddetectorEventTypeEntityTypesTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList">FrauddetectorEventTypeEntityTypesTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `createdTimeInput`<sup>Optional</sup> <a name="createdTimeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.createdTimeInput"></a>

```typescript
public readonly createdTimeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.inlineInput"></a>

```typescript
public readonly inlineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTimeInput`<sup>Optional</sup> <a name="lastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTimeInput"></a>

```typescript
public readonly lastUpdatedTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FrauddetectorEventTypeEntityTypesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeEntityTypes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>

---


### FrauddetectorEventTypeEntityTypesTagsList <a name="FrauddetectorEventTypeEntityTypesTagsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.get"></a>

```typescript
public get(index: number): FrauddetectorEventTypeEntityTypesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeEntityTypesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>[]

---


### FrauddetectorEventTypeEntityTypesTagsOutputReference <a name="FrauddetectorEventTypeEntityTypesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeEntityTypesTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>

---


### FrauddetectorEventTypeEventVariablesList <a name="FrauddetectorEventTypeEventVariablesList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeEventVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.get"></a>

```typescript
public get(index: number): FrauddetectorEventTypeEventVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeEventVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>[]

---


### FrauddetectorEventTypeEventVariablesOutputReference <a name="FrauddetectorEventTypeEventVariablesOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetCreatedTime">resetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetInline">resetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetLastUpdatedTime">resetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetVariableType">resetVariableType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | FrauddetectorEventTypeEventVariablesTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetCreatedTime` <a name="resetCreatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetCreatedTime"></a>

```typescript
public resetCreatedTime(): void
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDataSource"></a>

```typescript
public resetDataSource(): void
```

##### `resetDataType` <a name="resetDataType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDataType"></a>

```typescript
public resetDataType(): void
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetInline"></a>

```typescript
public resetInline(): void
```

##### `resetLastUpdatedTime` <a name="resetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetLastUpdatedTime"></a>

```typescript
public resetLastUpdatedTime(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVariableType` <a name="resetVariableType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetVariableType"></a>

```typescript
public resetVariableType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList">FrauddetectorEventTypeEventVariablesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.createdTimeInput">createdTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.inlineInput">inlineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTimeInput">lastUpdatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.variableTypeInput">variableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.variableType">variableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.tags"></a>

```typescript
public readonly tags: FrauddetectorEventTypeEventVariablesTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList">FrauddetectorEventTypeEventVariablesTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `createdTimeInput`<sup>Optional</sup> <a name="createdTimeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.createdTimeInput"></a>

```typescript
public readonly createdTimeInput: string;
```

- *Type:* string

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.inlineInput"></a>

```typescript
public readonly inlineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTimeInput`<sup>Optional</sup> <a name="lastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTimeInput"></a>

```typescript
public readonly lastUpdatedTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FrauddetectorEventTypeEventVariablesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]

---

##### `variableTypeInput`<sup>Optional</sup> <a name="variableTypeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.variableTypeInput"></a>

```typescript
public readonly variableTypeInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeEventVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>

---


### FrauddetectorEventTypeEventVariablesTagsList <a name="FrauddetectorEventTypeEventVariablesTagsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.get"></a>

```typescript
public get(index: number): FrauddetectorEventTypeEventVariablesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeEventVariablesTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>[]

---


### FrauddetectorEventTypeEventVariablesTagsOutputReference <a name="FrauddetectorEventTypeEventVariablesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeEventVariablesTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>

---


### FrauddetectorEventTypeLabelsList <a name="FrauddetectorEventTypeLabelsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.get"></a>

```typescript
public get(index: number): FrauddetectorEventTypeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>[]

---


### FrauddetectorEventTypeLabelsOutputReference <a name="FrauddetectorEventTypeLabelsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetCreatedTime">resetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetInline">resetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetLastUpdatedTime">resetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | FrauddetectorEventTypeLabelsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetCreatedTime` <a name="resetCreatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetCreatedTime"></a>

```typescript
public resetCreatedTime(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetInline"></a>

```typescript
public resetInline(): void
```

##### `resetLastUpdatedTime` <a name="resetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetLastUpdatedTime"></a>

```typescript
public resetLastUpdatedTime(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList">FrauddetectorEventTypeLabelsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.createdTimeInput">createdTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.inlineInput">inlineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTimeInput">lastUpdatedTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.inline">inline</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.tags"></a>

```typescript
public readonly tags: FrauddetectorEventTypeLabelsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList">FrauddetectorEventTypeLabelsTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `createdTimeInput`<sup>Optional</sup> <a name="createdTimeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.createdTimeInput"></a>

```typescript
public readonly createdTimeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.inlineInput"></a>

```typescript
public readonly inlineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTimeInput`<sup>Optional</sup> <a name="lastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTimeInput"></a>

```typescript
public readonly lastUpdatedTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FrauddetectorEventTypeLabelsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.inline"></a>

```typescript
public readonly inline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeLabels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>

---


### FrauddetectorEventTypeLabelsTagsList <a name="FrauddetectorEventTypeLabelsTagsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.get"></a>

```typescript
public get(index: number): FrauddetectorEventTypeLabelsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeLabelsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>[]

---


### FrauddetectorEventTypeLabelsTagsOutputReference <a name="FrauddetectorEventTypeLabelsTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeLabelsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>

---


### FrauddetectorEventTypeTagsList <a name="FrauddetectorEventTypeTagsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.get"></a>

```typescript
public get(index: number): FrauddetectorEventTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>[]

---


### FrauddetectorEventTypeTagsOutputReference <a name="FrauddetectorEventTypeTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer"></a>

```typescript
import { frauddetectorEventType } from '@cdktn/provider-awscc'

new frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FrauddetectorEventTypeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>

---




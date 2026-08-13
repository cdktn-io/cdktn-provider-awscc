# `athenaCapacityReservation` Submodule <a name="`athenaCapacityReservation` Submodule" id="@cdktn/provider-awscc.athenaCapacityReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaCapacityReservation <a name="AthenaCapacityReservation" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation awscc_athena_capacity_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

new athenaCapacityReservation.AthenaCapacityReservation(scope: Construct, id: string, config: AthenaCapacityReservationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig">AthenaCapacityReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig">AthenaCapacityReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putCapacityAssignmentConfiguration">putCapacityAssignmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetCapacityAssignmentConfiguration">resetCapacityAssignmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityAssignmentConfiguration` <a name="putCapacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putCapacityAssignmentConfiguration"></a>

```typescript
public putCapacityAssignmentConfiguration(value: AthenaCapacityReservationCapacityAssignmentConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putCapacityAssignmentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putTags"></a>

```typescript
public putTags(value: IResolvable | AthenaCapacityReservationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>[]

---

##### `resetCapacityAssignmentConfiguration` <a name="resetCapacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetCapacityAssignmentConfiguration"></a>

```typescript
public resetCapacityAssignmentConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AthenaCapacityReservation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isConstruct"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

athenaCapacityReservation.AthenaCapacityReservation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformElement"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

athenaCapacityReservation.AthenaCapacityReservation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformResource"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

athenaCapacityReservation.AthenaCapacityReservation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AthenaCapacityReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AthenaCapacityReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AthenaCapacityReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AthenaCapacityReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.allocatedDpus">allocatedDpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfiguration">capacityAssignmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference">AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lastSuccessfulAllocationTime">lastSuccessfulAllocationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList">AthenaCapacityReservationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfigurationInput">capacityAssignmentConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpusInput">targetDpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpus">targetDpus</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allocatedDpus`<sup>Required</sup> <a name="allocatedDpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.allocatedDpus"></a>

```typescript
public readonly allocatedDpus: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityAssignmentConfiguration`<sup>Required</sup> <a name="capacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfiguration"></a>

```typescript
public readonly capacityAssignmentConfiguration: AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference">AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastSuccessfulAllocationTime`<sup>Required</sup> <a name="lastSuccessfulAllocationTime" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lastSuccessfulAllocationTime"></a>

```typescript
public readonly lastSuccessfulAllocationTime: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tags"></a>

```typescript
public readonly tags: AthenaCapacityReservationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList">AthenaCapacityReservationTagsList</a>

---

##### `capacityAssignmentConfigurationInput`<sup>Optional</sup> <a name="capacityAssignmentConfigurationInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfigurationInput"></a>

```typescript
public readonly capacityAssignmentConfigurationInput: IResolvable | AthenaCapacityReservationCapacityAssignmentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AthenaCapacityReservationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>[]

---

##### `targetDpusInput`<sup>Optional</sup> <a name="targetDpusInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpusInput"></a>

```typescript
public readonly targetDpusInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetDpus`<sup>Required</sup> <a name="targetDpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpus"></a>

```typescript
public readonly targetDpus: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaCapacityReservationCapacityAssignmentConfiguration <a name="AthenaCapacityReservationCapacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration.Initializer"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

const athenaCapacityReservationCapacityAssignmentConfiguration: athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration.property.capacityAssignments">capacityAssignments</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>[]</code> | List of capacity assignments. |

---

##### `capacityAssignments`<sup>Optional</sup> <a name="capacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration.property.capacityAssignments"></a>

```typescript
public readonly capacityAssignments: IResolvable | AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>[]

List of capacity assignments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#capacity_assignments AthenaCapacityReservation#capacity_assignments}

---

### AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments <a name="AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.Initializer"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

const athenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments: athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.property.workgroupNames">workgroupNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#workgroup_names AthenaCapacityReservation#workgroup_names}. |

---

##### `workgroupNames`<sup>Optional</sup> <a name="workgroupNames" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.property.workgroupNames"></a>

```typescript
public readonly workgroupNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#workgroup_names AthenaCapacityReservation#workgroup_names}.

---

### AthenaCapacityReservationConfig <a name="AthenaCapacityReservationConfig" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.Initializer"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

const athenaCapacityReservationConfig: athenaCapacityReservation.AthenaCapacityReservationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.name">name</a></code> | <code>string</code> | The reservation name. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.targetDpus">targetDpus</a></code> | <code>number</code> | The number of DPUs to request to be allocated to the reservation. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.capacityAssignmentConfiguration">capacityAssignmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a></code> | Assignment configuration to assign workgroups to a reservation. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The reservation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#name AthenaCapacityReservation#name}

---

##### `targetDpus`<sup>Required</sup> <a name="targetDpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.targetDpus"></a>

```typescript
public readonly targetDpus: number;
```

- *Type:* number

The number of DPUs to request to be allocated to the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#target_dpus AthenaCapacityReservation#target_dpus}

---

##### `capacityAssignmentConfiguration`<sup>Optional</sup> <a name="capacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.capacityAssignmentConfiguration"></a>

```typescript
public readonly capacityAssignmentConfiguration: AthenaCapacityReservationCapacityAssignmentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

Assignment configuration to assign workgroups to a reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#capacity_assignment_configuration AthenaCapacityReservation#capacity_assignment_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AthenaCapacityReservationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#tags AthenaCapacityReservation#tags}

---

### AthenaCapacityReservationTags <a name="AthenaCapacityReservationTags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.Initializer"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

const athenaCapacityReservationTags: athenaCapacityReservation.AthenaCapacityReservationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#key AthenaCapacityReservation#key}. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#value AthenaCapacityReservation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#key AthenaCapacityReservation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_capacity_reservation#value AthenaCapacityReservation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList <a name="AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

new athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get"></a>

```typescript
public get(index: number): AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>[]

---


### AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference <a name="AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

new athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resetWorkgroupNames">resetWorkgroupNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkgroupNames` <a name="resetWorkgroupNames" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resetWorkgroupNames"></a>

```typescript
public resetWorkgroupNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNamesInput">workgroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNames">workgroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workgroupNamesInput`<sup>Optional</sup> <a name="workgroupNamesInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNamesInput"></a>

```typescript
public readonly workgroupNamesInput: string[];
```

- *Type:* string[]

---

##### `workgroupNames`<sup>Required</sup> <a name="workgroupNames" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNames"></a>

```typescript
public readonly workgroupNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>

---


### AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference <a name="AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

new athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.putCapacityAssignments">putCapacityAssignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resetCapacityAssignments">resetCapacityAssignments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityAssignments` <a name="putCapacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.putCapacityAssignments"></a>

```typescript
public putCapacityAssignments(value: IResolvable | AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.putCapacityAssignments.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>[]

---

##### `resetCapacityAssignments` <a name="resetCapacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resetCapacityAssignments"></a>

```typescript
public resetCapacityAssignments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignments">capacityAssignments</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignmentsInput">capacityAssignmentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityAssignments`<sup>Required</sup> <a name="capacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignments"></a>

```typescript
public readonly capacityAssignments: AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList</a>

---

##### `capacityAssignmentsInput`<sup>Optional</sup> <a name="capacityAssignmentsInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignmentsInput"></a>

```typescript
public readonly capacityAssignmentsInput: IResolvable | AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaCapacityReservationCapacityAssignmentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

---


### AthenaCapacityReservationTagsList <a name="AthenaCapacityReservationTagsList" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

new athenaCapacityReservation.AthenaCapacityReservationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.get"></a>

```typescript
public get(index: number): AthenaCapacityReservationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaCapacityReservationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>[]

---


### AthenaCapacityReservationTagsOutputReference <a name="AthenaCapacityReservationTagsOutputReference" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer"></a>

```typescript
import { athenaCapacityReservation } from '@cdktn/provider-awscc'

new athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaCapacityReservationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>

---




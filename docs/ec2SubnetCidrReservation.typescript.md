# `ec2SubnetCidrReservation` Submodule <a name="`ec2SubnetCidrReservation` Submodule" id="@cdktn/provider-awscc.ec2SubnetCidrReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SubnetCidrReservation <a name="Ec2SubnetCidrReservation" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation awscc_ec2_subnet_cidr_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer"></a>

```typescript
import { ec2SubnetCidrReservation } from '@cdktn/provider-awscc'

new ec2SubnetCidrReservation.Ec2SubnetCidrReservation(scope: Construct, id: string, config: Ec2SubnetCidrReservationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig">Ec2SubnetCidrReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig">Ec2SubnetCidrReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2SubnetCidrReservationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SubnetCidrReservation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isConstruct"></a>

```typescript
import { ec2SubnetCidrReservation } from '@cdktn/provider-awscc'

ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformElement"></a>

```typescript
import { ec2SubnetCidrReservation } from '@cdktn/provider-awscc'

ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformResource"></a>

```typescript
import { ec2SubnetCidrReservation } from '@cdktn/provider-awscc'

ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport"></a>

```typescript
import { ec2SubnetCidrReservation } from '@cdktn/provider-awscc'

ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2SubnetCidrReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2SubnetCidrReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2SubnetCidrReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SubnetCidrReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetCidrReservationId">subnetCidrReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList">Ec2SubnetCidrReservationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.reservationTypeInput">reservationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.reservationType">reservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `subnetCidrReservationId`<sup>Required</sup> <a name="subnetCidrReservationId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetCidrReservationId"></a>

```typescript
public readonly subnetCidrReservationId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tags"></a>

```typescript
public readonly tags: Ec2SubnetCidrReservationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList">Ec2SubnetCidrReservationTagsList</a>

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `reservationTypeInput`<sup>Optional</sup> <a name="reservationTypeInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.reservationTypeInput"></a>

```typescript
public readonly reservationTypeInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2SubnetCidrReservationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `reservationType`<sup>Required</sup> <a name="reservationType" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.reservationType"></a>

```typescript
public readonly reservationType: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SubnetCidrReservationConfig <a name="Ec2SubnetCidrReservationConfig" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.Initializer"></a>

```typescript
import { ec2SubnetCidrReservation } from '@cdktn/provider-awscc'

const ec2SubnetCidrReservationConfig: ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.cidr">cidr</a></code> | <code>string</code> | The IPv4 or IPv6 CIDR range to reserve. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.reservationType">reservationType</a></code> | <code>string</code> | The type of reservation. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.subnetId">subnetId</a></code> | <code>string</code> | The identifier of the subnet the CIDR range is reserved in. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.description">description</a></code> | <code>string</code> | The description of the subnet CIDR reservation. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]</code> | The tags assigned to the subnet CIDR reservation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The IPv4 or IPv6 CIDR range to reserve.

Must lie inside the subnet's CIDR block and must not overlap an existing reservation. Supply an IPv6 range exactly as the service returns it: Amazon EC2 stores an IPv6 CIDR in RFC 5952 compressed form, and a noncanonical spelling of the same range is reported as drift because this property is create-only and read back.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#cidr Ec2SubnetCidrReservation#cidr}

---

##### `reservationType`<sup>Required</sup> <a name="reservationType" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.reservationType"></a>

```typescript
public readonly reservationType: string;
```

- *Type:* string

The type of reservation.

A prefix reservation is used for an IPv6 prefix delegated to a network interface; an explicit reservation is used for a range that Amazon EC2 must not assign automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#reservation_type Ec2SubnetCidrReservation#reservation_type}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

The identifier of the subnet the CIDR range is reserved in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#subnet_id Ec2SubnetCidrReservation#subnet_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the subnet CIDR reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#description Ec2SubnetCidrReservation#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2SubnetCidrReservationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]

The tags assigned to the subnet CIDR reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#tags Ec2SubnetCidrReservation#tags}

---

### Ec2SubnetCidrReservationTags <a name="Ec2SubnetCidrReservationTags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.Initializer"></a>

```typescript
import { ec2SubnetCidrReservation } from '@cdktn/provider-awscc'

const ec2SubnetCidrReservationTags: ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.property.value">value</a></code> | <code>string</code> | The value of the tag. Amazon EC2 accepts a maximum of 256 Unicode characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Amazon EC2 reserves keys beginning with 'aws:' for internal use and rejects them for this resource. Amazon EC2 accepts a maximum of 128 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#key Ec2SubnetCidrReservation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag. Amazon EC2 accepts a maximum of 256 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#value Ec2SubnetCidrReservation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2SubnetCidrReservationTagsList <a name="Ec2SubnetCidrReservationTagsList" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer"></a>

```typescript
import { ec2SubnetCidrReservation } from '@cdktn/provider-awscc'

new ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.get"></a>

```typescript
public get(index: number): Ec2SubnetCidrReservationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2SubnetCidrReservationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]

---


### Ec2SubnetCidrReservationTagsOutputReference <a name="Ec2SubnetCidrReservationTagsOutputReference" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer"></a>

```typescript
import { ec2SubnetCidrReservation } from '@cdktn/provider-awscc'

new ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2SubnetCidrReservationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>

---




# `iotfleetwiseVehicle` Submodule <a name="`iotfleetwiseVehicle` Submodule" id="@cdktn/provider-awscc.iotfleetwiseVehicle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotfleetwiseVehicle <a name="IotfleetwiseVehicle" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle awscc_iotfleetwise_vehicle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

new iotfleetwiseVehicle.IotfleetwiseVehicle(scope: Construct, id: string, config: IotfleetwiseVehicleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig">IotfleetwiseVehicleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig">IotfleetwiseVehicleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.putStateTemplates">putStateTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.resetAssociationBehavior">resetAssociationBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.resetStateTemplates">resetStateTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStateTemplates` <a name="putStateTemplates" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.putStateTemplates"></a>

```typescript
public putStateTemplates(value: IResolvable | IotfleetwiseVehicleStateTemplates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.putStateTemplates.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates">IotfleetwiseVehicleStateTemplates</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.putTags"></a>

```typescript
public putTags(value: IResolvable | IotfleetwiseVehicleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags">IotfleetwiseVehicleTags</a>[]

---

##### `resetAssociationBehavior` <a name="resetAssociationBehavior" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.resetAssociationBehavior"></a>

```typescript
public resetAssociationBehavior(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetStateTemplates` <a name="resetStateTemplates" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.resetStateTemplates"></a>

```typescript
public resetStateTemplates(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotfleetwiseVehicle resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.isConstruct"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

iotfleetwiseVehicle.IotfleetwiseVehicle.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.isTerraformElement"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

iotfleetwiseVehicle.IotfleetwiseVehicle.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.isTerraformResource"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

iotfleetwiseVehicle.IotfleetwiseVehicle.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.generateConfigForImport"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

iotfleetwiseVehicle.IotfleetwiseVehicle.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotfleetwiseVehicle resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotfleetwiseVehicle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotfleetwiseVehicle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotfleetwiseVehicle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.lastModificationTime">lastModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.stateTemplates">stateTemplates</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList">IotfleetwiseVehicleStateTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList">IotfleetwiseVehicleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.associationBehaviorInput">associationBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.decoderManifestArnInput">decoderManifestArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.modelManifestArnInput">modelManifestArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.stateTemplatesInput">stateTemplatesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates">IotfleetwiseVehicleStateTemplates</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags">IotfleetwiseVehicleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.associationBehavior">associationBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.decoderManifestArn">decoderManifestArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.modelManifestArn">modelManifestArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModificationTime`<sup>Required</sup> <a name="lastModificationTime" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.lastModificationTime"></a>

```typescript
public readonly lastModificationTime: string;
```

- *Type:* string

---

##### `stateTemplates`<sup>Required</sup> <a name="stateTemplates" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.stateTemplates"></a>

```typescript
public readonly stateTemplates: IotfleetwiseVehicleStateTemplatesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList">IotfleetwiseVehicleStateTemplatesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.tags"></a>

```typescript
public readonly tags: IotfleetwiseVehicleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList">IotfleetwiseVehicleTagsList</a>

---

##### `associationBehaviorInput`<sup>Optional</sup> <a name="associationBehaviorInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.associationBehaviorInput"></a>

```typescript
public readonly associationBehaviorInput: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `decoderManifestArnInput`<sup>Optional</sup> <a name="decoderManifestArnInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.decoderManifestArnInput"></a>

```typescript
public readonly decoderManifestArnInput: string;
```

- *Type:* string

---

##### `modelManifestArnInput`<sup>Optional</sup> <a name="modelManifestArnInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.modelManifestArnInput"></a>

```typescript
public readonly modelManifestArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateTemplatesInput`<sup>Optional</sup> <a name="stateTemplatesInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.stateTemplatesInput"></a>

```typescript
public readonly stateTemplatesInput: IResolvable | IotfleetwiseVehicleStateTemplates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates">IotfleetwiseVehicleStateTemplates</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotfleetwiseVehicleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags">IotfleetwiseVehicleTags</a>[]

---

##### `associationBehavior`<sup>Required</sup> <a name="associationBehavior" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.associationBehavior"></a>

```typescript
public readonly associationBehavior: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `decoderManifestArn`<sup>Required</sup> <a name="decoderManifestArn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.decoderManifestArn"></a>

```typescript
public readonly decoderManifestArn: string;
```

- *Type:* string

---

##### `modelManifestArn`<sup>Required</sup> <a name="modelManifestArn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.modelManifestArn"></a>

```typescript
public readonly modelManifestArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicle.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseVehicleConfig <a name="IotfleetwiseVehicleConfig" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

const iotfleetwiseVehicleConfig: iotfleetwiseVehicle.IotfleetwiseVehicleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.decoderManifestArn">decoderManifestArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#decoder_manifest_arn IotfleetwiseVehicle#decoder_manifest_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.modelManifestArn">modelManifestArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#model_manifest_arn IotfleetwiseVehicle#model_manifest_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#name IotfleetwiseVehicle#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.associationBehavior">associationBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#association_behavior IotfleetwiseVehicle#association_behavior}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#attributes IotfleetwiseVehicle#attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.stateTemplates">stateTemplates</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates">IotfleetwiseVehicleStateTemplates</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#state_templates IotfleetwiseVehicle#state_templates}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags">IotfleetwiseVehicleTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#tags IotfleetwiseVehicle#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `decoderManifestArn`<sup>Required</sup> <a name="decoderManifestArn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.decoderManifestArn"></a>

```typescript
public readonly decoderManifestArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#decoder_manifest_arn IotfleetwiseVehicle#decoder_manifest_arn}.

---

##### `modelManifestArn`<sup>Required</sup> <a name="modelManifestArn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.modelManifestArn"></a>

```typescript
public readonly modelManifestArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#model_manifest_arn IotfleetwiseVehicle#model_manifest_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#name IotfleetwiseVehicle#name}.

---

##### `associationBehavior`<sup>Optional</sup> <a name="associationBehavior" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.associationBehavior"></a>

```typescript
public readonly associationBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#association_behavior IotfleetwiseVehicle#association_behavior}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#attributes IotfleetwiseVehicle#attributes}.

---

##### `stateTemplates`<sup>Optional</sup> <a name="stateTemplates" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.stateTemplates"></a>

```typescript
public readonly stateTemplates: IResolvable | IotfleetwiseVehicleStateTemplates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates">IotfleetwiseVehicleStateTemplates</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#state_templates IotfleetwiseVehicle#state_templates}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotfleetwiseVehicleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags">IotfleetwiseVehicleTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#tags IotfleetwiseVehicle#tags}.

---

### IotfleetwiseVehicleStateTemplates <a name="IotfleetwiseVehicleStateTemplates" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

const iotfleetwiseVehicleStateTemplates: iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#identifier IotfleetwiseVehicle#identifier}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates.property.stateTemplateUpdateStrategy">stateTemplateUpdateStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#state_template_update_strategy IotfleetwiseVehicle#state_template_update_strategy}. |

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#identifier IotfleetwiseVehicle#identifier}.

---

##### `stateTemplateUpdateStrategy`<sup>Optional</sup> <a name="stateTemplateUpdateStrategy" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates.property.stateTemplateUpdateStrategy"></a>

```typescript
public readonly stateTemplateUpdateStrategy: IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#state_template_update_strategy IotfleetwiseVehicle#state_template_update_strategy}.

---

### IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy <a name="IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

const iotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy: iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy.property.onChange">onChange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#on_change IotfleetwiseVehicle#on_change}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy.property.periodic">periodic</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#periodic IotfleetwiseVehicle#periodic}. |

---

##### `onChange`<sup>Optional</sup> <a name="onChange" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy.property.onChange"></a>

```typescript
public readonly onChange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#on_change IotfleetwiseVehicle#on_change}.

---

##### `periodic`<sup>Optional</sup> <a name="periodic" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy.property.periodic"></a>

```typescript
public readonly periodic: IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#periodic IotfleetwiseVehicle#periodic}.

---

### IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic <a name="IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

const iotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic: iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic.property.stateTemplateUpdateRate">stateTemplateUpdateRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#state_template_update_rate IotfleetwiseVehicle#state_template_update_rate}. |

---

##### `stateTemplateUpdateRate`<sup>Optional</sup> <a name="stateTemplateUpdateRate" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic.property.stateTemplateUpdateRate"></a>

```typescript
public readonly stateTemplateUpdateRate: IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#state_template_update_rate IotfleetwiseVehicle#state_template_update_rate}.

---

### IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate <a name="IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

const iotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate: iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#unit IotfleetwiseVehicle#unit}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#value IotfleetwiseVehicle#value}. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#unit IotfleetwiseVehicle#unit}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#value IotfleetwiseVehicle#value}.

---

### IotfleetwiseVehicleTags <a name="IotfleetwiseVehicleTags" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

const iotfleetwiseVehicleTags: iotfleetwiseVehicle.IotfleetwiseVehicleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#key IotfleetwiseVehicle#key}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#value IotfleetwiseVehicle#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#key IotfleetwiseVehicle#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotfleetwise_vehicle#value IotfleetwiseVehicle#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseVehicleStateTemplatesList <a name="IotfleetwiseVehicleStateTemplatesList" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

new iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.get"></a>

```typescript
public get(index: number): IotfleetwiseVehicleStateTemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates">IotfleetwiseVehicleStateTemplates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseVehicleStateTemplates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates">IotfleetwiseVehicleStateTemplates</a>[]

---


### IotfleetwiseVehicleStateTemplatesOutputReference <a name="IotfleetwiseVehicleStateTemplatesOutputReference" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

new iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.putStateTemplateUpdateStrategy">putStateTemplateUpdateStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.resetStateTemplateUpdateStrategy">resetStateTemplateUpdateStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStateTemplateUpdateStrategy` <a name="putStateTemplateUpdateStrategy" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.putStateTemplateUpdateStrategy"></a>

```typescript
public putStateTemplateUpdateStrategy(value: IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.putStateTemplateUpdateStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy</a>

---

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```

##### `resetStateTemplateUpdateStrategy` <a name="resetStateTemplateUpdateStrategy" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.resetStateTemplateUpdateStrategy"></a>

```typescript
public resetStateTemplateUpdateStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.stateTemplateUpdateStrategy">stateTemplateUpdateStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.stateTemplateUpdateStrategyInput">stateTemplateUpdateStrategyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates">IotfleetwiseVehicleStateTemplates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateTemplateUpdateStrategy`<sup>Required</sup> <a name="stateTemplateUpdateStrategy" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.stateTemplateUpdateStrategy"></a>

```typescript
public readonly stateTemplateUpdateStrategy: IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference</a>

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `stateTemplateUpdateStrategyInput`<sup>Optional</sup> <a name="stateTemplateUpdateStrategyInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.stateTemplateUpdateStrategyInput"></a>

```typescript
public readonly stateTemplateUpdateStrategyInput: IResolvable | IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy</a>

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseVehicleStateTemplates;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplates">IotfleetwiseVehicleStateTemplates</a>

---


### IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference <a name="IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

new iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.putPeriodic">putPeriodic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resetOnChange">resetOnChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resetPeriodic">resetPeriodic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPeriodic` <a name="putPeriodic" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.putPeriodic"></a>

```typescript
public putPeriodic(value: IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.putPeriodic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic</a>

---

##### `resetOnChange` <a name="resetOnChange" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resetOnChange"></a>

```typescript
public resetOnChange(): void
```

##### `resetPeriodic` <a name="resetPeriodic" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resetPeriodic"></a>

```typescript
public resetPeriodic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.periodic">periodic</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.onChangeInput">onChangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.periodicInput">periodicInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.onChange">onChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periodic`<sup>Required</sup> <a name="periodic" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.periodic"></a>

```typescript
public readonly periodic: IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference</a>

---

##### `onChangeInput`<sup>Optional</sup> <a name="onChangeInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.onChangeInput"></a>

```typescript
public readonly onChangeInput: string;
```

- *Type:* string

---

##### `periodicInput`<sup>Optional</sup> <a name="periodicInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.periodicInput"></a>

```typescript
public readonly periodicInput: IResolvable | IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic</a>

---

##### `onChange`<sup>Required</sup> <a name="onChange" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.onChange"></a>

```typescript
public readonly onChange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy</a>

---


### IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference <a name="IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

new iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.putStateTemplateUpdateRate">putStateTemplateUpdateRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resetStateTemplateUpdateRate">resetStateTemplateUpdateRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStateTemplateUpdateRate` <a name="putStateTemplateUpdateRate" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.putStateTemplateUpdateRate"></a>

```typescript
public putStateTemplateUpdateRate(value: IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.putStateTemplateUpdateRate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate</a>

---

##### `resetStateTemplateUpdateRate` <a name="resetStateTemplateUpdateRate" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resetStateTemplateUpdateRate"></a>

```typescript
public resetStateTemplateUpdateRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.stateTemplateUpdateRate">stateTemplateUpdateRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.stateTemplateUpdateRateInput">stateTemplateUpdateRateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateTemplateUpdateRate`<sup>Required</sup> <a name="stateTemplateUpdateRate" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.stateTemplateUpdateRate"></a>

```typescript
public readonly stateTemplateUpdateRate: IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference</a>

---

##### `stateTemplateUpdateRateInput`<sup>Optional</sup> <a name="stateTemplateUpdateRateInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.stateTemplateUpdateRateInput"></a>

```typescript
public readonly stateTemplateUpdateRateInput: IResolvable | IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic</a>

---


### IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference <a name="IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

new iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate">IotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate</a>

---


### IotfleetwiseVehicleTagsList <a name="IotfleetwiseVehicleTagsList" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

new iotfleetwiseVehicle.IotfleetwiseVehicleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.get"></a>

```typescript
public get(index: number): IotfleetwiseVehicleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags">IotfleetwiseVehicleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseVehicleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags">IotfleetwiseVehicleTags</a>[]

---


### IotfleetwiseVehicleTagsOutputReference <a name="IotfleetwiseVehicleTagsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseVehicle } from '@cdktn/provider-awscc'

new iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags">IotfleetwiseVehicleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseVehicleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseVehicle.IotfleetwiseVehicleTags">IotfleetwiseVehicleTags</a>

---



